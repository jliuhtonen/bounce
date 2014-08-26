// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_pong.ui');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('dommy.core');
cljs_pong.ui.show_top_message_BANG_ = (function show_top_message_BANG_(){return dommy.core.show_BANG_.call(null,document.getElementById("top-message"));
});
cljs_pong.ui.hide_top_message_BANG_ = (function hide_top_message_BANG_(){return dommy.core.hide_BANG_.call(null,document.getElementById("top-message"));
});
cljs_pong.ui.show_message_BANG_ = (function show_message_BANG_(msg){return dommy.core.remove_class_BANG_.call(null,dommy.core.set_text_BANG_.call(null,dommy.core.show_BANG_.call(null,document.getElementById("message")),msg),new cljs.core.Keyword(null,"hidden","hidden",4091384092));
});
cljs_pong.ui.count_down_BANG_ = (function count_down_BANG_(n,start_msg,f){var msg = document.getElementById("message");if((n > 0))
{dommy.core.set_text_BANG_.call(null,dommy.core.remove_class_BANG_.call(null,msg,new cljs.core.Keyword(null,"hidden","hidden",4091384092)),n);
return setTimeout((function (){return count_down_BANG_.call(null,(n - 1),start_msg,f);
}),1000);
} else
{dommy.core.add_class_BANG_.call(null,dommy.core.set_text_BANG_.call(null,msg,start_msg),new cljs.core.Keyword(null,"hidden","hidden",4091384092));
setTimeout((function (){return dommy.core.hide_BANG_.call(null,msg);
}),1100);
return f.call(null);
}
});
cljs_pong.ui.draw_score_BANG_ = (function draw_score_BANG_(id,score){return dommy.core.set_text_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,id)),[cljs.core.str(score)].join(''));
});
cljs_pong.ui.draw_player_1_score_BANG_ = (function draw_player_1_score_BANG_(scores){return cljs_pong.ui.draw_score_BANG_.call(null,new cljs.core.Keyword(null,"#player-1-score","#player-1-score",1569468767),new cljs.core.Keyword(null,"player-1","player-1",2893176759).cljs$core$IFn$_invoke$arity$1(scores));
});
cljs_pong.ui.draw_player_2_score_BANG_ = (function draw_player_2_score_BANG_(scores){return cljs_pong.ui.draw_score_BANG_.call(null,new cljs.core.Keyword(null,"#player-2-score","#player-2-score",2456972448),new cljs.core.Keyword(null,"player-2","player-2",2893176760).cljs$core$IFn$_invoke$arity$1(scores));
});

//# sourceMappingURL=ui.js.map