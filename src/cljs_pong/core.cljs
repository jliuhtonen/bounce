(ns cljs-pong.core
  (:require [cljs-pong.draw :as draw]
            [cljs-pong.game :as logic]
            [cljs-pong.keyhandler :as keyhandler]
            [cljs-pong.ui :as ui]))

(def game-in-progress (atom false))

(enable-console-print!)

(defn- schedule [f] (js/requestAnimationFrame f))

(defn- game-loop [state]
  (let [new-state (logic/update-state state (keyhandler/get-player-actions))]
    (draw/draw-game new-state)
    (if (:score-changed state)
      (let [scores (:score state)]
        (ui/draw-player-1-score scores)
        (ui/draw-player-2-score scores)))
    (if (:running new-state)
      (schedule #(game-loop new-state))
      (do
        (reset! game-in-progress false)
        (ui/show-top-message)
        (ui/show-message "GAME OVER")))))

(defn start-game []
  (if (not @game-in-progress)
    (do
      (ui/hide-top-message)
      (reset! game-in-progress true)
      (ui/count-down 3 "GO" #(game-loop logic/initial-state)))))

(draw/draw-game logic/initial-state)
(keyhandler/register-key-handlers start-game)
