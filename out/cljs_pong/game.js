// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_pong.game');
goog.require('cljs.core');
goog.require('cljs_pong.config');
goog.require('cljs_pong.config');
goog.require('cljs_pong.math');
goog.require('cljs_pong.math');
goog.require('cljs_pong.ball');
goog.require('cljs_pong.ball');
goog.require('cljs_pong.paddle');
goog.require('cljs_pong.paddle');
cljs_pong.game.wall_height = 5;
cljs_pong.game.top_wall = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",1013904362),0,new cljs.core.Keyword(null,"y","y",1013904363),0,new cljs.core.Keyword(null,"width","width",1127031096),new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs_pong.config.field),new cljs.core.Keyword(null,"height","height",4087841945),cljs_pong.game.wall_height], null);
cljs_pong.game.bottom_wall = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",1013904362),0,new cljs.core.Keyword(null,"y","y",1013904363),(new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(cljs_pong.config.field) - cljs_pong.game.wall_height),new cljs.core.Keyword(null,"width","width",1127031096),new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs_pong.config.field),new cljs.core.Keyword(null,"height","height",4087841945),cljs_pong.game.wall_height], null);
cljs_pong.game.goals_to_win = 10;
cljs_pong.game.initial_state = (function (){var middle_y = (new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(cljs_pong.config.field) / 2);var paddle_1_x = cljs_pong.paddle.distance_from_goal;var paddle_2_x = (new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs_pong.config.field) - cljs_pong.paddle.distance_from_goal);return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"running","running",2564688177),true,new cljs.core.Keyword(null,"score","score",1123168772),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player-1","player-1",2893176759),0,new cljs.core.Keyword(null,"player-2","player-2",2893176760),0], null),new cljs.core.Keyword(null,"ball","ball",1016920433),cljs_pong.ball.new_ball.call(null),new cljs.core.Keyword(null,"paddle-1","paddle-1",1787260416),cljs_pong.paddle.paddle_rect.call(null,paddle_1_x,middle_y),new cljs.core.Keyword(null,"paddle-2","paddle-2",1787260417),cljs_pong.paddle.paddle_rect.call(null,paddle_2_x,middle_y),new cljs.core.Keyword(null,"walls","walls",1126800219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_pong.game.top_wall,cljs_pong.game.bottom_wall], null),new cljs.core.Keyword(null,"score-changed","score-changed",2692466155),true], null);
})();
cljs_pong.game.update_score = (function update_score(score,ball){var x = new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(ball);var p1_goal = 0;var p2_goal = new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs_pong.config.field);var p1_score = new cljs.core.Keyword(null,"player-1","player-1",2893176759).cljs$core$IFn$_invoke$arity$1(score);var p2_score = new cljs.core.Keyword(null,"player-2","player-2",2893176760).cljs$core$IFn$_invoke$arity$1(score);if((x < p1_goal))
{return cljs.core.assoc.call(null,score,new cljs.core.Keyword(null,"player-2","player-2",2893176760),(p2_score + 1));
} else
{if((x > p2_goal))
{return cljs.core.assoc.call(null,score,new cljs.core.Keyword(null,"player-1","player-1",2893176759),(p1_score + 1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return score;
} else
{return null;
}
}
}
});
cljs_pong.game.running_QMARK_ = (function running_QMARK_(score){return cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5271_SHARP_){return cljs.core._EQ_.call(null,p1__5271_SHARP_,cljs_pong.game.goals_to_win);
}),cljs.core.vals.call(null,score)));
});
cljs_pong.game.update_state = (function update_state(state,actions){var player_1 = new cljs.core.Keyword(null,"player-1","player-1",2893176759).cljs$core$IFn$_invoke$arity$1(actions);var player_2 = new cljs.core.Keyword(null,"player-2","player-2",2893176760).cljs$core$IFn$_invoke$arity$1(actions);var score = new cljs.core.Keyword(null,"score","score",1123168772).cljs$core$IFn$_invoke$arity$1(state);var updated_paddle_1 = cljs_pong.paddle.move_paddle.call(null,new cljs.core.Keyword(null,"paddle-1","paddle-1",1787260416).cljs$core$IFn$_invoke$arity$1(state),player_1);var updated_paddle_2 = cljs_pong.paddle.move_paddle.call(null,new cljs.core.Keyword(null,"paddle-2","paddle-2",1787260417).cljs$core$IFn$_invoke$arity$1(state),player_2);var moved_ball = cljs_pong.ball.move_ball.call(null,state);var updated_score = cljs_pong.game.update_score.call(null,new cljs.core.Keyword(null,"score","score",1123168772).cljs$core$IFn$_invoke$arity$1(state),moved_ball);var score_changed = !(cljs.core._EQ_.call(null,score,updated_score));var updated_ball = ((score_changed)?cljs_pong.ball.new_ball.call(null):moved_ball);var still_running = cljs_pong.game.running_QMARK_.call(null,updated_score);return cljs.core.apply.call(null,cljs.core.assoc,state,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paddle-1","paddle-1",1787260416),updated_paddle_1,new cljs.core.Keyword(null,"paddle-2","paddle-2",1787260417),updated_paddle_2,new cljs.core.Keyword(null,"ball","ball",1016920433),updated_ball,new cljs.core.Keyword(null,"score","score",1123168772),updated_score,new cljs.core.Keyword(null,"running","running",2564688177),still_running,new cljs.core.Keyword(null,"score-changed","score-changed",2692466155),score_changed], null));
});

//# sourceMappingURL=game.js.map