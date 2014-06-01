(ns cljs-pong.paddle)

(def distance-from-goal 50)
(def width 6)
(def height 80)

(def paddle {:distance-from-goal 50 :width 6 :height 80})

(defn paddle-rect [pos-x pos-y]
  (assoc paddle :x (- pos-x (/ (:width paddle) 2))
                :y (- pos-y (/ height 2)) :pos-y pos-y))

(defn- move-paddle-rect [paddle pos-y]
  (assoc paddle :y (- pos-y (/ height 2)) :pos-y pos-y))

(defn- paddle-bottom-y [paddle] (+ (:y paddle) (:height paddle)))

(defn- new-paddle-position [f paddle]
  (move-paddle-rect paddle (f (:pos-y paddle) 3)))

(defn- move-paddle-up [paddle]
  (if
    (> (:y paddle) 0)
    (new-paddle-position - paddle)
    paddle))

(defn- move-paddle-down [paddle]
  (let [bottom-y (+ (:y paddle) height)]
    (if
      (< (paddle-bottom-y paddle) 800)
      (new-paddle-position + paddle)
      paddle)))

(defn move-paddle [paddle action]
  (case action
    :up (move-paddle-up paddle)
    :down (new-paddle-position + paddle)
    paddle))
