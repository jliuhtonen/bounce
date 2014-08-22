(ns cljs-pong.draw
  (:require [cljs-pong.config :as config]
            [dommy.utils :as utils]
            [dommy.core :as dommy])
  (:use-macros
    [dommy.macros :only [sel1]]))

(def draw-color "rgba(213, 115, 230, 1)")

(def draw-surface (let [canvas (sel1 :#canvas)
                        ctx (.getContext canvas "2d")]
                    (set! (.-fillStyle ctx) draw-color)
                    (set! (.-strokeStyle ctx) draw-color)
                    ctx))

(defn- set-line-width! [w] (set! (.-lineWidth draw-surface) w))

(defn clear []
  (.clearRect draw-surface 0 0 (:width config/field) (:height config/field)))

(defn- draw-court []
  (set-line-width! 2)
  (.beginPath draw-surface)
  (.moveTo draw-surface (/ (:width config/field) 2) 0)
  (.lineTo draw-surface (/ (:width config/field) 2) (:height config/field))
  (.stroke draw-surface)
  (.closePath draw-surface)
  (set-line-width! 5)
  (.strokeRect draw-surface 0 0 (:width config/field) (:height config/field)))

(defn- draw-ball [ball]
  (set-line-width! 1)
  (.beginPath draw-surface)
  (let [x (:x ball)
        y (:y ball)
        r (:radius ball)
        arc-start 0
        arc-length (* 2 (.-PI js/Math))]
    (.arc draw-surface x y r arc-start arc-length))
  (.fill draw-surface)
  (.closePath draw-surface))

(defn- draw-paddle [paddle]
  (set-line-width! 1)
  (let [x (:x paddle)
        y (:y paddle)
        width (:width paddle)
        height (:height paddle)]
    (.fillRect draw-surface x y width height)))

(defn- draw-score [id score]
  (-> (sel1 id)
      (dommy/set-text! (str score))))

(defn draw-game [state]
  (clear)
  (draw-court)
  (draw-ball (:ball state))
  (draw-paddle (:paddle-1 state))
  (draw-paddle (:paddle-2 state))
  (if (:score-changed state)
    (let [scores (:score state)]
      (draw-score :#player-1-score (:player-1 scores))
      (draw-score :#player-2-score (:player-2 scores)))))
