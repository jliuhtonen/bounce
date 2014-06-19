(ns cljs-pong.math)

(def pi (.-PI js/Math))
(defn cos [a] ((.-cos js/Math) a))
(defn sin [a] ((.-sin js/Math) a))
(defn abs [a] ((.-abs js/Math) a))
(defn sign [a]
  (if (< a 0.00001)
    1
    (/ (abs a) a)))