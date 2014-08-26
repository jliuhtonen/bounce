// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_pong.paddle');
goog.require('cljs.core');
goog.require('cljs_pong.config');
goog.require('cljs_pong.config');
goog.require('cljs_pong.math');
goog.require('cljs_pong.math');
cljs_pong.paddle.distance_from_goal = 50;
cljs_pong.paddle.width = 6;
cljs_pong.paddle.height = 80;
cljs_pong.paddle.acceleration = 0.8;
cljs_pong.paddle.deceleration = 0.4;
cljs_pong.paddle.max_speed = 8;
cljs_pong.paddle.speed_loss_in_collision = 0.5;
cljs_pong.paddle.paddle = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"distance-from-goal","distance-from-goal",3812587248),50,new cljs.core.Keyword(null,"width","width",1127031096),10,new cljs.core.Keyword(null,"height","height",4087841945),80,new cljs.core.Keyword(null,"velocity","velocity",3148165199),0], null);
cljs_pong.paddle.paddle_rect = (function paddle_rect(pos_x,pos_y){return cljs.core.assoc.call(null,cljs_pong.paddle.paddle,new cljs.core.Keyword(null,"x","x",1013904362),(pos_x - (new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs_pong.paddle.paddle) / 2)),new cljs.core.Keyword(null,"y","y",1013904363),(pos_y - (cljs_pong.paddle.height / 2)),new cljs.core.Keyword(null,"pos-y","pos-y",1120757426),pos_y);
});
cljs_pong.paddle.paddle_bottom_y = (function paddle_bottom_y(paddle){return (new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(paddle) + new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(paddle));
});
cljs_pong.paddle.new_paddle_position = (function new_paddle_position(paddle,velocity){var pos_y = (new cljs.core.Keyword(null,"pos-y","pos-y",1120757426).cljs$core$IFn$_invoke$arity$1(paddle) + velocity);return cljs.core.assoc.call(null,paddle,new cljs.core.Keyword(null,"y","y",1013904363),(pos_y - (cljs_pong.paddle.height / 2)),new cljs.core.Keyword(null,"pos-y","pos-y",1120757426),pos_y,new cljs.core.Keyword(null,"velocity","velocity",3148165199),velocity);
});
cljs_pong.paddle.change_position = (function change_position(paddle,velocity){if((((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(paddle) + velocity) <= 0)) || (((cljs_pong.paddle.paddle_bottom_y.call(null,paddle) + velocity) >= new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(cljs_pong.config.field))))
{return cljs_pong.paddle.new_paddle_position.call(null,paddle,((-1 * velocity) * cljs_pong.paddle.speed_loss_in_collision));
} else
{return cljs_pong.paddle.new_paddle_position.call(null,paddle,velocity);
}
});
cljs_pong.paddle.accelerate = (function accelerate(f,velocity){var new_velocity = f.call(null,velocity,cljs_pong.paddle.acceleration);if((cljs_pong.math.abs.call(null,new_velocity) < cljs_pong.paddle.max_speed))
{return new_velocity;
} else
{return f.call(null,0,cljs_pong.paddle.max_speed);
}
});
cljs_pong.paddle.decelerate = (function decelerate(velocity){if((cljs_pong.math.abs.call(null,velocity) < cljs_pong.paddle.deceleration))
{return 0;
} else
{return (velocity + ((-1 * cljs_pong.math.sign.call(null,velocity)) * cljs_pong.paddle.deceleration));
}
});
cljs_pong.paddle.calculate_new_velocity = (function calculate_new_velocity(velocity,action){var G__5276 = action;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"down","down",1016993812),G__5276))
{return cljs_pong.paddle.accelerate.call(null,cljs.core._PLUS_,velocity);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up","up",1013907981),G__5276))
{return cljs_pong.paddle.accelerate.call(null,cljs.core._,velocity);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs_pong.paddle.decelerate.call(null,velocity);
} else
{return null;
}
}
}
});
cljs_pong.paddle.move_paddle = (function move_paddle(paddle,action){var new_velocity = cljs_pong.paddle.calculate_new_velocity.call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199).cljs$core$IFn$_invoke$arity$1(paddle),action);return cljs_pong.paddle.change_position.call(null,paddle,new_velocity);
});

//# sourceMappingURL=paddle.js.map