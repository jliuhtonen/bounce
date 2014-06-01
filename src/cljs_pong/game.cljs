(ns cljs-pong.game
  (:require [cljs-pong.paddle :as paddle]
            [cljs-pong.ball :as ball]
            [cljs-pong.math :as math]))

(def field {:width 800 :height 300})

(def wall-height 5)
(def top-wall { :x 0 :y 0 :width (:width field) :height wall-height })
(def bottom-wall { :x 0 :y (- 300 wall-height) :width (:width field) :height wall-height })

(def ball-radius 3)

(defn- ball [x y] {:x x :y y :radius ball-radius :angle (/ 2 math/pi) :speed 5})

(defn update-state [state actions]
  (let [player-1 (:player-1 actions)
        player-2 (:player-2 actions)]
    (apply assoc state [:paddle-1 (paddle/move-paddle (:paddle-1 state) player-1)
                  :paddle-2 (paddle/move-paddle (:paddle-2 state) player-2)
                  :ball (ball/move-ball state)])))

(def initial-state
  (let [middle-y (/ (:height field) 2)
        paddle-1-x paddle/distance-from-goal
        paddle-2-x (- (:width field) paddle/distance-from-goal)]
      {:running true
       :ball (ball 400 150)
       :paddle-1 (paddle/paddle-rect paddle-1-x middle-y)
       :paddle-2 (paddle/paddle-rect paddle-2-x middle-y)
       :walls [top-wall bottom-wall]}))

