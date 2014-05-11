(ns cljs-pong.game)

(def ball-radius 3)
(def racket {:width 6 :height 80 :distance-from-goal 50})

(defn- ball [x y] {:x x :y y :radius 3})

(defn- racket-rect [pos-y] (assoc racket :x (- (:distance-from-goal racket) (/ (:width racket) 2))
                       :y (- pos-y (/ (:height racket) 2)) :pos-y pos-y))

;(defn- ball-collides-with-racket? [ball racket]
;  (let [ball-r (:radius ball)
;        ball-left-x (- (:x ball) ball-r)
;        ball-right-x (+ (:y ball) ball-r)]
;    (or
;      (<= ball-left-x)))
;
;(defn- move-ball )

(defn- new-racket-position [f state] (racket-rect (f (:pos-y (:racket-1 state)) 1)))

(defn- move-racket [state action]
  (case action
    :up (assoc state :racket-1 (new-racket-position - state))
    :down (assoc state :racket-1 (new-racket-position + state))
    state))

(defn update-state [state actions]
  (let [player-1 (:player-1 actions)]
    (move-racket state player-1)))

(def initial-state {:running true :ball (ball 400 150) :racket-1 (racket-rect 150)})
