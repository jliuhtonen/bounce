// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_pong.keyhandler');
goog.require('cljs.core');
cljs_pong.keyhandler.player_action = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player-1","player-1",2893176759),new cljs.core.Keyword(null,"none","none",1017291434),new cljs.core.Keyword(null,"player-2","player-2",2893176760),new cljs.core.Keyword(null,"none","none",1017291434)], null));
cljs_pong.keyhandler.game_start_key = 32;
cljs_pong.keyhandler.key_code_to_action = (function key_code_to_action(key_code){var G__5273 = key_code;if(cljs.core._EQ_.call(null,76,G__5273))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-2","player-2",2893176760),new cljs.core.Keyword(null,"down","down",1016993812)], null);
} else
{if(cljs.core._EQ_.call(null,80,G__5273))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-2","player-2",2893176760),new cljs.core.Keyword(null,"up","up",1013907981)], null);
} else
{if(cljs.core._EQ_.call(null,65,G__5273))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-1","player-1",2893176759),new cljs.core.Keyword(null,"down","down",1016993812)], null);
} else
{if(cljs.core._EQ_.call(null,81,G__5273))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-1","player-1",2893176759),new cljs.core.Keyword(null,"up","up",1013907981)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
});
cljs_pong.keyhandler.handle_down_keycode = (function handle_down_keycode(key_code){var temp__4090__auto__ = cljs_pong.keyhandler.key_code_to_action.call(null,key_code);if(cljs.core.truth_(temp__4090__auto__))
{var action = temp__4090__auto__;return cljs.core.swap_BANG_.call(null,cljs_pong.keyhandler.player_action,cljs.core.conj,action);
} else
{return null;
}
});
cljs_pong.keyhandler.handle_up_keycode = (function handle_up_keycode(key_code,game_starter){if(cljs.core._EQ_.call(null,cljs_pong.keyhandler.game_start_key,key_code))
{return game_starter.call(null);
} else
{var temp__4090__auto__ = cljs_pong.keyhandler.key_code_to_action.call(null,key_code);if(cljs.core.truth_(temp__4090__auto__))
{var action = temp__4090__auto__;var player = cljs.core.first.call(null,action);var current_player_action = cljs.core.get.call(null,cljs.core.deref.call(null,cljs_pong.keyhandler.player_action),player);var handle_up_keycode_player_action = cljs.core.last.call(null,action);if(cljs.core._EQ_.call(null,current_player_action,handle_up_keycode_player_action))
{return cljs.core.swap_BANG_.call(null,cljs_pong.keyhandler.player_action,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [player,new cljs.core.Keyword(null,"none","none",1017291434)], null));
} else
{return null;
}
} else
{return null;
}
}
});
cljs_pong.keyhandler.key_event_handler = (function key_event_handler(handle_keycode){return (function (event){var key_code = event.keyCode;handle_keycode.call(null,key_code);
event.preventDefault();
return event.stopPropagation();
});
});
cljs_pong.keyhandler.get_player_actions = (function get_player_actions(){return cljs.core.deref.call(null,cljs_pong.keyhandler.player_action);
});
cljs_pong.keyhandler.register_key_handlers_BANG_ = (function register_key_handlers_BANG_(game_starter){document.onkeydown = cljs_pong.keyhandler.key_event_handler.call(null,cljs_pong.keyhandler.handle_down_keycode);
return document.onkeyup = cljs_pong.keyhandler.key_event_handler.call(null,(function (p1__5274_SHARP_){return cljs_pong.keyhandler.handle_up_keycode.call(null,p1__5274_SHARP_,game_starter);
}));
});

//# sourceMappingURL=keyhandler.js.map