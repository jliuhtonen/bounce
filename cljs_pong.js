goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.array', 'goog.object', 'goog.string.StringBuffer']);
goog.addDependency("../cljs_pong/keyhandler.js", ['cljs_pong.keyhandler'], ['cljs.core']);
goog.addDependency("../cljs_pong/game.js", ['cljs_pong.game'], ['cljs.core']);
goog.addDependency("../cljs_pong/draw.js", ['cljs_pong.draw'], ['cljs.core']);
goog.addDependency("../cljs_pong/core.js", ['cljs_pong.core'], ['cljs.core', 'cljs_pong.draw', 'cljs_pong.game', 'cljs_pong.keyhandler']);