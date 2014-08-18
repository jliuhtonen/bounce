(ns cljs-pong.paddle
  (:require [cljs-pong.math :as math]
            [cljs-pong.config :as config]))

(def distance-from-goal 50)
(def width 6)
(def height 80)

(def acceleration 0.8)
(def deceleration 0.4)
(def max-speed 8)
(def speed-loss-in-collision 0.6)

(def paddle {:distance-from-goal 50 :width 10 :height 80 :velocity 0})

(defn paddle-rect [pos-x pos-y]
  (assoc paddle :x (- pos-x (/ (:width paddle) 2))
                :y (- pos-y (/ height 2)) :pos-y pos-y))

(defn- paddle-bottom-y [paddle] (+ (:y paddle) (:height paddle)))

(defn- new-paddle-position [paddle velocity]
  (let [pos-y (+ (:pos-y paddle) velocity)]
    (assoc paddle :y (- pos-y (/ height 2)) :pos-y pos-y :velocity velocity)))

(defn- change-position [paddle velocity]
  (if
    (or
      (<= (+ (:y paddle) velocity) 0)
      (>= (+ (paddle-bottom-y paddle) velocity) (:height config/field)))
    (new-paddle-position paddle (* -1 velocity speed-loss-in-collision))
    (new-paddle-position paddle velocity)))

(defn- accelerate [f velocity]
  (let [new-velocity (f velocity acceleration)]
    (if (< (math/abs new-velocity) max-speed)
      new-velocity
      (f 0 max-speed))))

(defn- decelerate [velocity]
  (if (< (math/abs velocity) deceleration)
    0
    (+ velocity (* -1 (math/sign velocity) deceleration))))

(defn- calculate-new-velocity [velocity action]
  (case action
    :up (accelerate - velocity)
    :down (accelerate + velocity)
    (decelerate velocity)))

(defn move-paddle [paddle action]
  (let [new-velocity (calculate-new-velocity (:velocity paddle) action)]
    (change-position paddle new-velocity)))
