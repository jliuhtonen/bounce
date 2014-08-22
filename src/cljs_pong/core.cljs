(ns cljs-pong.core
  (:require [cljs-pong.draw :as draw]
            [cljs-pong.game :as logic]
            [cljs-pong.keyhandler :as keyhandler]
            [dommy.core :as dommy])
  (:use-macros
   [dommy.macros :only [sel sel1]]))

(def game-in-progress (atom false))

(enable-console-print!)

(defn- schedule [f] (js/requestAnimationFrame f))

(defn- game-loop [state]
  (let [new-state (logic/update-state state (keyhandler/get-player-actions))]
    (draw/draw-game new-state)
    (if (:running new-state)
      (schedule #(game-loop new-state))
      (do
        (reset! game-in-progress false)
        (-> :#top-message
            sel1
            dommy/show!)
        (-> :#message
            sel1
            (dommy/set-text! "GAME OVER")
            (dommy/remove-class! :hidden))))))

(defn- count-down [n start-msg f]
  (let [msg (sel1 :#message)]
    (if
      (> n 0)
      (do
        (-> msg
            (dommy/remove-class! :hidden)
            (dommy/set-text! n))
        (js/setTimeout #(count-down (dec n) start-msg f) 1000))
      (do
        (-> msg
            (dommy/set-text! start-msg)
            (dommy/add-class! :hidden))
        (f)))))

(defn start-game []
  (if (not @game-in-progress)
    (do
      (-> :#top-message sel1 dommy/hide!)
      (reset! game-in-progress true)
      (count-down 3 "GO" #(game-loop logic/initial-state)))))

(draw/draw-game logic/initial-state)
(keyhandler/register-key-handlers start-game)
