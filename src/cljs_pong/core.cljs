(ns cljs-pong.core
  (:require [cljs-pong.draw :as draw]
            [cljs-pong.game :as logic]))

(enable-console-print!)

(def fps 60)
(def next-update-in-ms (/ 1 fps))
(def player-action (atom {:player-1 :none}))

(declare game-loop)

(defn- schedule [f t] (js/setTimeout f t))

(defn- key-code-to-action [key-code]
  (case key-code
    81 [:player-1 :up] ;q
    65 [:player-1 :down]
    :unknown)) ;a

(defn key-down [key-code]
  (let [action (key-code-to-action key-code)]
    (if (not (= :unknown action))
      (swap! player-action conj action))))

(defn key-up [key-code]
  (let [action (key-code-to-action key-code)]
    (if (not (= :unknown action))
      (swap! player-action conj (assoc (key-code-to-action key-code) 1 :none)))))

(defn register-key-handlers []
  (set! (.-onkeydown js/document) #(key-down (.-keyCode %)))
  (set! (.-onkeyup js/document) #(key-up (.-keyCode %))))

(defn- schedule-next [state]
  (schedule #(game-loop state) next-update-in-ms))

(defn- game-loop [state]
  (let [new-state (logic/update-state state @player-action)]
    (draw/draw-game new-state)
    (if (:running new-state)
      (schedule-next new-state))))

(defn start-game []
  (game-loop logic/initial-state))

(println "moi")

(register-key-handlers)
(start-game)
