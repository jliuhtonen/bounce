(ns cljs-pong.game
  (:require [cljs-pong.paddle :as paddle]
            [cljs-pong.ball :as ball]
            [cljs-pong.math :as math]))

(def field {:width 800 :height 300})

(def wall-height 5)
(def top-wall { :x 0 :y 0 :width (:width field) :height wall-height })
(def bottom-wall { :x 0 :y (- 300 wall-height) :width (:width field) :height wall-height })

(def goals-to-win 1000)

(def ball-radius 3)

(defn- ball [x y] {:x x :y y :radius ball-radius :angle (/ 2 math/pi) :speed 9})

(def initial-state
  (let [middle-y (/ (:height field) 2)
        paddle-1-x paddle/distance-from-goal
        paddle-2-x (- (:width field) paddle/distance-from-goal)]
      {:running true
       :score { :player-1 0 :player-2 0}
       :ball (ball 400 150)
       :paddle-1 (paddle/paddle-rect paddle-1-x middle-y)
       :paddle-2 (paddle/paddle-rect paddle-2-x middle-y)
       :walls [top-wall bottom-wall]
       :score-changed true}))

(defn- update-score [score ball]
  (let [x (:x ball)
        p1-goal 0
        p2-goal (:width field)
        p1-score (:player-1 score)
        p2-score (:player-2 score)]
    (cond
     (< x p1-goal) (assoc score :player-2 (inc p2-score))
     (> x p2-goal) (assoc score :player-1 (inc p1-score))
     :else score)))

(defn- running? [score]
  (not (some #(= % goals-to-win) (vals score))))

(defn update-state [state actions]
  (let [player-1 (:player-1 actions)
        player-2 (:player-2 actions)
        score (:score state)
        updated-paddle-1 (paddle/move-paddle (:paddle-1 state) player-1)
        updated-paddle-2 (paddle/move-paddle (:paddle-2 state) player-2)
        moved-ball (ball/move-ball state)
        updated-score (update-score (:score state) moved-ball)
        score-changed (not (= score updated-score))
        updated-ball (if score-changed
                       (:ball initial-state) moved-ball)
        still-running (running? updated-score)]
      (apply assoc state [:paddle-1 updated-paddle-1
                    :paddle-2 updated-paddle-2
                    :ball updated-ball
                    :score updated-score
                    :running still-running
                    :score-changed score-changed])))

