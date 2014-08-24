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

(defn- handle-down-keycode [key-code]
  (if-let [action (key-code-to-action key-code)]
    (swap! player-action conj action)))

(defn- handle-up-keycode [key-code game-starter]
  (if (= game-start-key key-code)
    (game-starter)
    (if-let [action (key-code-to-action key-code)]
      (let [player (first action)
            current-player-action (get @player-action player)
            handle-up-keycode-player-action (last action)]
        (if (= current-player-action handle-up-keycode-player-action)
          (swap! player-action conj [player :none]))))))

(defn- key-event-handler [handle-keycode]
  (fn [event]
    (let [key-code (.-keyCode event)]
      (handle-keycode key-code)
      (.preventDefault event)
      (.stopPropagation event))))

(defn get-player-actions [] @player-action)

(defn register-key-handlers [game-starter]
    (set! (.-onkeydown js/document) (key-event-handler handle-down-keycode))
    (set! (.-onkeyup js/document) (key-event-handler #(handle-up-keycode % game-starter))))
