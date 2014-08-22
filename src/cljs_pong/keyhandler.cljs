(ns cljs-pong.keyhandler)

(def player-action (atom {:player-1 :none
                          :player-2 :none}))

(def game-start-key 32)

(defn- key-code-to-action [key-code]
  (case key-code
    81 [:player-1 :up] ;q
    65 [:player-1 :down] ;a
    80 [:player-2 :up] ;p
    76 [:player-2 :down]
    nil))

(defn- key-down [key-code]
  (if-let [action (key-code-to-action key-code)]
    (swap! player-action conj action)))

(defn- key-up [key-code game-starter]
  (if (= game-start-key key-code)
    (game-starter)
    (if-let [action (key-code-to-action key-code)]
      (let [player (first action)
            current-player-action (get @player-action player)
            key-up-player-action (last action)]
        (if (= current-player-action key-up-player-action)
          (swap! player-action conj [player :none]))))))

(defn get-player-actions [] @player-action)

(defn register-key-handlers [game-starter]
  (set! (.-onkeydown js/document) #(key-down (.-keyCode %)))
  (set! (.-onkeyup js/document) #(key-up (.-keyCode %) game-starter)))
