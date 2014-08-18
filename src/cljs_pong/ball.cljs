(ns cljs-pong.ball
  (:require [cljs-pong.math :as math]
            [cljs-pong.config :as config]))

(def radius 4)
(def max-speed 8)

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
    (>= (:x point) (:x rect))
    (<= (:x point) (+ (:x rect) (:width rect)))
    "y's"
    (>= (:y point) (:y rect))
    (<= (:y point) (+ (:y rect) (:height rect)))))

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

(defn- paddle-hit-effect [ball-speed ball-angle paddle]
  (let [delta-h ball-speed
        delta-x (* delta-h (math/cos ball-angle))
        delta-y (* delta-h (math/sin ball-angle))
        new-delta-y (+ delta-y (:velocity paddle))
        new-delta-h (math/sqrt (+ (math/squared delta-x) (math/squared new-delta-y)))
        new-angle (math/atan2 new-delta-y delta-x)]
    { :angle new-angle :speed (math/minimum new-delta-h max-speed) }))

(defn- bounce-effects [ball hit paddle-1 paddle-2]
  (let [bounce-angle (bounce-angle ball hit)
        ball-velocity (:speed ball)]
    (cond
      (= hit paddle-1) (paddle-hit-effect ball-velocity bounce-angle paddle-1)
      (= hit paddle-2) (paddle-hit-effect ball-velocity bounce-angle paddle-2)
      :else { :angle bounce-angle })))

(defn move-ball [state]
  (let [ball (:ball state)
        ball-next-pos (next-ball-pos ball)
        walls (:walls state)
        paddle-1 (:paddle-1 state)
        paddle-2 (:paddle-2 state)
        hittable-rects (conj walls paddle-1 paddle-2)
        hit (ball-hits-rects ball-next-pos hittable-rects)]
    (if hit
      (next-ball-pos (merge ball (bounce-effects ball hit paddle-1 paddle-2)))
      ball-next-pos)))

(defn- random-ball-pass-angle []
  (let [random-num (math/random)
        p1-min (/ (* 3 math/pi) 4)
        p1-max (/ (* 5 math/pi) 4)
        p2-max (/ math/pi 4)
        p2-min (/ (* -1 math/pi) 4)]
    (if
      (< random-num 0.5)
      (math/random-between p1-min p1-max)
      (math/random-between p2-min p2-max))))

(defn new-ball []
  (let
    [x (/ (:width config/field) 2)
     y (/ (:height config/field) 2)]
    { :x x
      :y y
      :radius radius
      :angle (random-ball-pass-angle)
      :speed 4 }))
