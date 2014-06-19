(ns cljs-pong.paddle
  (:require [cljs-pong.math :as math]))

(def distance-from-goal 50)
(def width 6)
(def height 80)

(def acceleration 0.8)
(def deceleration 0.1)
(def max-speed 5)
(def speed-loss-in-collision 0.75)

(def paddle {:distance-from-goal 50 :width 6 :height 80 :speed 0})

(defn paddle-rect [pos-x pos-y]
  (assoc paddle :x (- pos-x (/ (:width paddle) 2))
                :y (- pos-y (/ height 2)) :pos-y pos-y))

(defn- paddle-bottom-y [paddle] (+ (:y paddle) (:height paddle)))

(defn- new-paddle-position [paddle velocity]
  (let [pos-y (+ (:pos-y paddle) velocity)]
    (assoc paddle :y (- pos-y (/ height 2)) :pos-y pos-y :speed velocity)))

(defn- change-position [paddle velocity]
  (if
    (or
      (<= (+ (:y paddle) velocity) 0)
      (>= (+ (paddle-bottom-y paddle) velocity) 300))
    (new-paddle-position paddle (* -1 velocity speed-loss-in-collision))
    (new-paddle-position paddle velocity)))

(defn- accelerate [f velocity]
  (let [new-velocity (f velocity acceleration)]
    (if (< (math/abs new-velocity) max-speed)
      new-velocity
      (f 0 max-speed))))

(defn- decelerate [velocity]
  (if (< (math/abs velocity) 0.001)
    0
    (+ velocity (* -1 (math/sign velocity) deceleration))))

(defn- calculate-new-velocity [velocity action]
  (case action
    :up (accelerate - velocity)
    :down (accelerate + velocity)
    (decelerate velocity)))

(defn move-paddle [paddle action]
  (let [new-velocity (calculate-new-velocity (:speed paddle) action)]
    (change-position paddle new-velocity)))