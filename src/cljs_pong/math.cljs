(ns cljs-pong.math)

(def pi (.-PI js/Math))
(defn cos [a] ((.-cos js/Math) a))
(defn sin [a] ((.-sin js/Math) a))
