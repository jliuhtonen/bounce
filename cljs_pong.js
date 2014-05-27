goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.array', 'goog.object', 'goog.string.StringBuffer']);
goog.addDependency("../cljs_pong/racket.js", ['cljs_pong.racket'], ['cljs.core']);
goog.addDependency("../cljs_pong/math.js", ['cljs_pong.math'], ['cljs.core']);
goog.addDependency("../cljs_pong/keyhandler.js", ['cljs_pong.keyhandler'], ['cljs.core']);
goog.addDependency("../cljs_pong/ball.js", ['cljs_pong.ball'], ['cljs_pong.math', 'cljs.core']);
goog.addDependency("../cljs_pong/game.js", ['cljs_pong.game'], ['cljs_pong.racket', 'cljs_pong.math', 'cljs.core', 'cljs_pong.ball']);
goog.addDependency("../cljs_pong/draw.js", ['cljs_pong.draw'], ['cljs.core']);
goog.addDependency("../cljs_pong/core.js", ['cljs_pong.core'], ['cljs.core', 'cljs_pong.draw', 'cljs_pong.game', 'cljs_pong.keyhandler']);