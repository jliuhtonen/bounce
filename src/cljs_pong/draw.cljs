(ns cljs-pong.draw)

(def draw-color "rgba(255, 255, 255, 1)")

(def draw-surface (let [canvas (.getElementById js/document "canvas")
                        ctx (.getContext canvas "2d")]
                    (set! (.-fillStyle ctx) draw-color)
                    (set! (.-strokeStyle ctx) draw-color)
                    ctx))

(defn- set-line-width! [w] (set! (.-lineWidth draw-surface) w))

(defn clear []
  (.clearRect draw-surface 0 0 800 300))

(defn- draw-court []
  (set-line-width! 2)
  (.beginPath draw-surface)
  (.moveTo draw-surface 400 0)
  (.lineTo draw-surface 400 300)
  (.stroke draw-surface)
  (.closePath draw-surface)
  (set-line-width! 5)
  (.strokeRect draw-surface 0 0 800 300))

(defn- draw-ball [ball]
  (set-line-width! 1)
  (.beginPath draw-surface)
  (let [x (:x ball)
        y (:y ball)
        r (:radius ball)
        arc-start 0
        arc-length (* 2 (.-PI js/Math))]
    (.arc draw-surface x y r arc-start arc-length))
  (.fill draw-surface)
  (.closePath draw-surface))

(defn- draw-paddle [paddle]
  (set-line-width! 1)
  (let [x (:x paddle)
        y (:y paddle)
        width (:width paddle)
        height (:height paddle)]
    (.fillRect draw-surface x y width height)))

(defn draw-game [state]
  (clear)
  (draw-court)
  (draw-ball (:ball state))
  (draw-paddle (:paddle-1 state))
  (draw-paddle (:paddle-2 state)))
