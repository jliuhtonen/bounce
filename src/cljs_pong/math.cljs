(ns cljs-pong.math)

(def pi (.-PI js/Math))
(defn cos [a] ((.-cos js/Math) a))
(defn sin [a] ((.-sin js/Math) a))
(defn abs [a] ((.-abs js/Math) a))
(defn floor [a] ((.-floor js/Math) a))
(defn sign [a] (if (< a 0) -1 1))
(defn random [] ((.-random js/Math)))
(defn random-between [a b]
  (+
   (* (random) (- b a))
   a))
