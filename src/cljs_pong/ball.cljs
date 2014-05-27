(ns cljs-pong.ball
  (:require [cljs-pong.math :as math]))

(defn- point [x y] {:x x :y y})

(defn- ball-edge-points [ball]
  (let [x (:x ball)
        y (:y ball)
        r (:radius ball)]
    [(point x (- y r))
     (point (+ x r) y)
     (point x (+ y r))
     (point (- x r) y)]))

(defn- point-in-rect [point rect]
  (and
   "x's"
   (and
    (>= (:x point) (:x rect))
    (<= (:x point) (+ (:x rect) (:width rect))))
   "y's"
   (and
    (>= (:y point) (:y rect))
    (<= (:y point) (+ (:y rect) (:height rect))))))

(defn- points-in-rect [points rect]
  (some #(point-in-rect % rect) points))

(defn- ball-hits-rects [ball rects]
  (let [points (ball-edge-points ball)]
    (first (filter #(points-in-rect points %) rects))))

(defn- next-ball-pos [ball]
  (let [angle (:angle ball)
        x (:x ball)
        y (:y ball)
        delta-h (:speed ball)
        delta-x (* delta-h (math/cos angle))
        delta-y (* delta-h (math/sin angle))
        new-x (+ x delta-x)
        new-y (+ y delta-y)]
    (assoc ball :x new-x :y new-y)))

(defn- bounce-angle [ball hit]
  (let [angle (:angle ball)
        ball-y (:y ball)
        hit-top-y (:y hit)
        hit-bottom-y (+ hit-top-y (:height hit))]
    (if (< hit-top-y ball-y hit-bottom-y)
      (- math/pi angle)
      (- (* 2 math/pi) angle))))

(defn move-ball [state]
  (let [ball (:ball state)
        ball-next-pos (next-ball-pos ball)
        walls (:walls state)
        hittable-rects (conj walls (:racket-1 state) (:racket-2 state))
        hit (ball-hits-rects ball-next-pos hittable-rects)]
    (if hit
        (next-ball-pos (assoc ball :angle (bounce-angle ball hit)))
      ball-next-pos)))
