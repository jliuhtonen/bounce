(ns cljs-pong.ui
  (:require [dommy.core :as dommy])
  (:use-macros [dommy.macros :only [sel1]]))

(defn show-top-message! []
  (-> :#top-message
            sel1
            dommy/show!))

(defn hide-top-message! []
  (dommy/hide! (sel1 :#top-message)))

(defn show-message! [msg]
  (-> (sel1 :#message)
      (dommy/show!)
      (dommy/set-text! msg)
      (dommy/remove-class! :hidden)))

(defn count-down! [n start-msg f]
  (let [msg (sel1 :#message)]
    (if (> n 0)
      (do
        (-> msg
            (dommy/remove-class! :hidden)
            (dommy/set-text! n))
        (js/setTimeout #(count-down! (dec n) start-msg f) 1000))
      (do
        (-> msg
            (dommy/set-text! start-msg)
            (dommy/add-class! :hidden))
        (js/setTimeout #(dommy/hide! msg) 1100)
        (f)))))

(defn- draw-score! [id score]
  (-> (sel1 id)
      (dommy/set-text! (str score))))

(defn draw-player-1-score! [scores]
  (draw-score! :#player-1-score (:player-1 scores)))

(defn draw-player-2-score! [scores]
  (draw-score! :#player-2-score (:player-2 scores)))

