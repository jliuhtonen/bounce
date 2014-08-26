// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_pong.core');
goog.require('cljs.core');
goog.require('cljs_pong.ui');
goog.require('cljs_pong.ui');
goog.require('cljs_pong.keyhandler');
goog.require('cljs_pong.keyhandler');
goog.require('cljs_pong.game');
goog.require('cljs_pong.game');
goog.require('cljs_pong.draw');
goog.require('cljs_pong.draw');
cljs_pong.core.game_in_progress = cljs.core.atom.call(null,false);
cljs_pong.core.schedule = (function schedule(f){return requestAnimationFrame(f);
});
cljs_pong.core.update_screen_BANG_ = (function update_screen_BANG_(state){cljs_pong.draw.draw_game_BANG_.call(null,state);
if(cljs.core.truth_(new cljs.core.Keyword(null,"score-changed","score-changed",2692466155).cljs$core$IFn$_invoke$arity$1(state)))
{var scores = new cljs.core.Keyword(null,"score","score",1123168772).cljs$core$IFn$_invoke$arity$1(state);cljs_pong.ui.draw_player_1_score_BANG_.call(null,scores);
return cljs_pong.ui.draw_player_2_score_BANG_.call(null,scores);
} else
{return null;
}
});
cljs_pong.core.game_loop = (function game_loop(state){var new_state = cljs_pong.game.update_state.call(null,state,cljs_pong.keyhandler.get_player_actions.call(null));cljs_pong.core.update_screen_BANG_.call(null,new_state);
if(cljs.core.truth_(new cljs.core.Keyword(null,"running","running",2564688177).cljs$core$IFn$_invoke$arity$1(new_state)))
{return cljs_pong.core.schedule.call(null,(function (){return game_loop.call(null,new_state);
}));
} else
{cljs.core.reset_BANG_.call(null,cljs_pong.core.game_in_progress,false);
cljs_pong.ui.show_top_message_BANG_.call(null);
return cljs_pong.ui.show_message_BANG_.call(null,"GAME OVER");
}
});
cljs_pong.core.start_game = (function start_game(){if(cljs.core.not.call(null,cljs.core.deref.call(null,cljs_pong.core.game_in_progress)))
{cljs_pong.ui.hide_top_message_BANG_.call(null);
cljs.core.reset_BANG_.call(null,cljs_pong.core.game_in_progress,true);
return cljs_pong.ui.count_down_BANG_.call(null,3,"GO",(function (){return cljs_pong.core.game_loop.call(null,cljs_pong.game.initial_state);
}));
} else
{return null;
}
});
cljs_pong.core.update_screen_BANG_.call(null,cljs_pong.game.initial_state);
cljs_pong.keyhandler.register_key_handlers_BANG_.call(null,cljs_pong.core.start_game);

//# sourceMappingURL=core.js.map