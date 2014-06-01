(ns cljs-pong.core
  (:require [cljs-pong.draw :as draw]
            [cljs-pong.game :as logic]
            [cljs-pong.keyhandler :as keyhandler]))

(enable-console-print!)

(defn- schedule [f] (js/requestAnimationFrame f))

(defn- game-loop [state]
  (let [new-state (logic/update-state state (keyhandler/get-player-actions))]
    (draw/draw-game new-state)
    (if (:running new-state)
      (schedule #(game-loop new-state)))))

(defn start-game []
  (game-loop logic/initial-state))

(keyhandler/register-key-handlers)
(start-game)
