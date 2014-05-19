(ns cljs-pong.racket)

(def distance-from-goal 50)
(def width 6)
(def height 80)

(def racket {:distance-from-goal 50 :width 6 :height 80})

(defn racket-rect [pos-x pos-y]
  (assoc racket :x (- pos-x (/ (:width racket) 2))
                :y (- pos-y (/ height 2)) :pos-y pos-y))

(defn- move-racket-rect [racket pos-y]
  (assoc racket :y (- pos-y (/ height 2)) :pos-y pos-y))

(defn- racket-bottom-y [racket] (+ (:y racket) (:height racket)))

(defn- new-racket-position [f racket]
  (move-racket-rect racket (f (:pos-y racket) 3)))

(defn- move-racket-up [racket]
  (if
    (> (:y racket) 0)
    (new-racket-position - racket)
    racket))

(defn- move-racket-down [racket]
  (let [bottom-y (+ (:y racket) height)]
    (if
      (< (racket-bottom-y racket) 800)
      (new-racket-position + racket)
      racket)))

(defn move-racket [racket action]
  (case action
    :up (move-racket-up racket)
    :down (new-racket-position + racket)
    racket))
