(ns cljs-pong.game
  (require [cljs-pong.racket :as racket]))

(def field {:width 800 :height 300})

(def ball-radius 3)

(defn- ball [x y] {:x x :y y :radius ball-radius})

(defn update-state [state actions]
  (let [player-1 (:player-1 actions)
        player-2 (:player-2 actions)]
    (apply assoc state [:racket-1 (racket/move-racket (:racket-1 state) player-1)
                  :racket-2 (move-racket (:racket-2 state) player-2)])))

(def initial-state
  (let [middle-y (/ (:height field) 2)
        racket-1-x racket/distance-from-goal
        racket-2-x (- (:width field) racket/distance-from-goal)]
      {:running true
       :ball (ball 400 150)
       :racket-1 (racket/racket-rect racket-1-x middle-y)
       :racket-2 (racket/racket-rect racket-2-x middle-y)}))

