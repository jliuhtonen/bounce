(ns cljs-pong.game
  (:require [cljs-pong.racket :as racket]))

(def field {:width 800 :height 300})

(def ball-radius 3)
(def pi (.-PI js/Math))
(defn- to-radians [deg] (* deg (/ pi 180)))
(defn- add-to-angle [angle increment]
  (mod (+ angle increment) (* 2 pi)))

(defn- ball [x y] {:x x :y y :radius ball-radius :angle (to-radians 0) :speed 2})

(defn- cos [a] ((.-cos js/Math) a))
(defn- sin [a] ((.-sin js/Math) a))

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
  (some true? (map #(point-in-rect % rect) points)))

(defn- ball-hits-rects [ball rects]
  (let [points (ball-edge-points ball)]
    (some true? (map #(points-in-rect points %) rects))))

(defn- next-ball-pos [ball]
  (let [angle (:angle ball)
        x (:x ball)
        y (:y ball)
        delta-h (:speed ball)
        delta-x (* delta-h (cos angle))
        delta-y (* delta-h (sin angle))
        new-x (+ x delta-x)
        new-y (+ y delta-y)]
    (assoc ball :x new-x :y new-y)))

(defn move-ball [state]
  (let [ball (:ball state)
        ball-next-pos (next-ball-pos ball)]
    (if (ball-hits-rects ball-next-pos [(:racket-1 state) (:racket-2 state)])
      (next-ball-pos (assoc ball :angle (add-to-angle (:angle ball) pi)))
      ball-next-pos)))

(defn update-state [state actions]
  (let [player-1 (:player-1 actions)
        player-2 (:player-2 actions)]
    (apply assoc state [:racket-1 (racket/move-racket (:racket-1 state) player-1)
                  :racket-2 (racket/move-racket (:racket-2 state) player-2)
                  :ball (move-ball state)])))

(def initial-state
  (let [middle-y (/ (:height field) 2)
        racket-1-x racket/distance-from-goal
        racket-2-x (- (:width field) racket/distance-from-goal)]
      {:running true
       :ball (ball 400 150)
       :racket-1 (racket/racket-rect racket-1-x middle-y)
       :racket-2 (racket/racket-rect racket-2-x middle-y)}))

