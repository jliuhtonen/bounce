(ns cljs-pong.game)

(def field {:width 800 :height 300})

(def ball-radius 3)
(def racket {:width 6 :height 80 :distance-from-goal 50})

(defn- ball [x y] {:x x :y y :radius ball-radius})

(defn- racket-rect [pos-x pos-y] (assoc racket :x (- pos-x (/ (:width racket) 2))
                       :y (- pos-y (/ (:height racket) 2)) :pos-y pos-y))
(defn- move-racket-rect [racket pos-y] (assoc racket :y (- pos-y (/ (:height racket) 2)) :pos-y pos-y))

;(defn- ball-collides-with-racket? [ball racket]
;  (let [ball-r (:radius ball)
;        ball-left-x (- (:x ball) ball-r)
;        ball-right-x (+ (:y ball) ball-r)]
;    (or
;      (<= ball-left-x)))
;
;(defn- move-ball )

(defn- new-racket-position [f racket] (move-racket-rect racket (f (:pos-y racket) 3)))

(defn- move-racket [racket action]
  (case action
    :up (new-racket-position - racket)
    :down (new-racket-position + racket)
    racket))

(defn update-state [state actions]
  (let [player-1 (:player-1 actions)
        player-2 (:player-2 actions)]
    (apply assoc state [:racket-1 (move-racket (:racket-1 state) player-1)
                  :racket-2 (move-racket (:racket-2 state) player-2)])))

(def initial-state
  (let [middle-y (/ (:height field) 2)
        racket-1-x (:distance-from-goal racket)
        racket-2-x (- (:width field) (:distance-from-goal racket))]
      {:running true
       :ball (ball 400 150)
       :racket-1 (racket-rect racket-1-x middle-y)
       :racket-2 (racket-rect racket-2-x middle-y)}))

