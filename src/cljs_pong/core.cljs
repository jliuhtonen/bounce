(ns cljs-pong.core
  (:require [cljs-pong.draw :as draw]
            [cljs-pong.game :as logic]
            [cljs-pong.keyhandler :as keyhandler]))

(enable-console-print!)

(def fps 60)
(def next-update-in-ms (/ 1000 fps))

(declare game-loop)

(defn- schedule [f t] (js/setTimeout f t))

(defn- schedule-next [state]
  (schedule #(game-loop state) next-update-in-ms))

(defn- game-loop [state]
  (let [new-state (logic/update-state state (keyhandler/get-player-actions))]
    (draw/draw-game new-state)
    (if (:running new-state)
      (schedule-next new-state))))

(defn start-game []
  (game-loop logic/initial-state))

(keyhandler/register-key-handlers)
(start-game)
