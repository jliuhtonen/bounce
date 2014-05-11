(ns cljs-pong.core
  (:require [cljs-pong.draw :as draw]
            [cljs-pong.game :as logic]))

(enable-console-print!)

(def fps 30)
(def next-update-in-ms (/ 1 fps))
(def player-action (atom {:player-1 :none}))

(defn- schedule [f t] (js/setTimeout f t))

(defn- key-code-to-action [key-code]
  (case key-code
    81 [:player-1 :up] ;q
    65 [:player-1 :down])) ;a

(defn key-down [key-code]
  (swap! player-action conj (key-code-to-action key-code)))

(defn key-up [key-code]
  (swap! player-action conj (assoc (key-code-to-action key-code) 1 :none)))

(defn register-key-handlers []
  (set! (.-onkeydown js/document) #(key-down (.-keyCode %)))
  (set! (.-onkeyup js/document) #(key-up (.-keyCode %))))

(defn- game-loop [state]
  (let [new-state (logic/update-state state @player-action)]
    (draw/draw-game new-state)
    (if (:running new-state)
      (schedule #(game-loop new-state) next-update-in-ms))))

(defn start-game []
  (game-loop logic/initial-state))

(println "moi")

(register-key-handlers)
(start-game)
