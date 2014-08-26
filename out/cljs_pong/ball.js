// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_pong.ball');
goog.require('cljs.core');
goog.require('cljs_pong.config');
goog.require('cljs_pong.config');
goog.require('cljs_pong.math');
goog.require('cljs_pong.math');
cljs_pong.ball.radius = 4;
cljs_pong.ball.max_speed = 8;
cljs_pong.ball.paddle_speed_effect_multiplier = 0.6;
cljs_pong.ball.point = (function point(x,y){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),x,new cljs.core.Keyword(null,"y","y",1013904363),y], null);
});
cljs_pong.ball.ball_edge_points = (function ball_edge_points(ball){var x = new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(ball);var y = new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(ball);var r = new cljs.core.Keyword(null,"radius","radius",4370292740).cljs$core$IFn$_invoke$arity$1(ball);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_pong.ball.point.call(null,x,(y - r)),cljs_pong.ball.point.call(null,(x + r),y),cljs_pong.ball.point.call(null,x,(y + r)),cljs_pong.ball.point.call(null,(x - r),y)], null);
});
cljs_pong.ball.point_in_rect = (function point_in_rect(point,rect){var point_x = new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(point);var point_y = new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(point);var rect_x = new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(rect);var rect_y = new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(rect);var rect_width = new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(rect);var rect_height = new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(rect);var and__3431__auto__ = "x's";if(cljs.core.truth_(and__3431__auto__))
{var and__3431__auto____$1 = (point_x >= rect_x);if(and__3431__auto____$1)
{var and__3431__auto____$2 = (point_x <= (rect_x + rect_width));if(and__3431__auto____$2)
{var and__3431__auto____$3 = "y's";if(cljs.core.truth_(and__3431__auto____$3))
{return ((point_y >= rect_y)) && ((point_y <= (rect_y + rect_height)));
} else
{return and__3431__auto____$3;
}
} else
{return and__3431__auto____$2;
}
} else
{return and__3431__auto____$1;
}
} else
{return and__3431__auto__;
}
});
cljs_pong.ball.points_in_rect = (function points_in_rect(points,rect){return cljs.core.some.call(null,(function (p1__4793_SHARP_){return cljs_pong.ball.point_in_rect.call(null,p1__4793_SHARP_,rect);
}),points);
});
cljs_pong.ball.ball_hits_rects = (function ball_hits_rects(ball,rects){var points = cljs_pong.ball.ball_edge_points.call(null,ball);return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__4794_SHARP_){return cljs_pong.ball.points_in_rect.call(null,points,p1__4794_SHARP_);
}),rects));
});
cljs_pong.ball.next_ball_pos = (function next_ball_pos(ball){var angle = new cljs.core.Keyword(null,"angle","angle",1106865221).cljs$core$IFn$_invoke$arity$1(ball);var x = new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(ball);var y = new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(ball);var delta_h = new cljs.core.Keyword(null,"speed","speed",1123546041).cljs$core$IFn$_invoke$arity$1(ball);var delta_x = (delta_h * cljs_pong.math.cos.call(null,angle));var delta_y = (delta_h * cljs_pong.math.sin.call(null,angle));var new_x = (x + delta_x);var new_y = (y + delta_y);return cljs.core.assoc.call(null,ball,new cljs.core.Keyword(null,"x","x",1013904362),new_x,new cljs.core.Keyword(null,"y","y",1013904363),new_y);
});
cljs_pong.ball.bounce_angle = (function bounce_angle(ball,hit){var angle = new cljs.core.Keyword(null,"angle","angle",1106865221).cljs$core$IFn$_invoke$arity$1(ball);var ball_y = new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(ball);var hit_top_y = new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(hit);var hit_bottom_y = (hit_top_y + new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(hit));if(((hit_top_y < ball_y)) && ((ball_y < hit_bottom_y)))
{return (cljs_pong.math.pi - angle);
} else
{return ((2 * cljs_pong.math.pi) - angle);
}
});
cljs_pong.ball.paddle_hit_effect = (function paddle_hit_effect(ball_speed,ball_angle,paddle){var delta_h = ball_speed;var delta_x = (delta_h * cljs_pong.math.cos.call(null,ball_angle));var delta_y = (delta_h * cljs_pong.math.sin.call(null,ball_angle));var new_delta_y = (delta_y + (cljs_pong.ball.paddle_speed_effect_multiplier * new cljs.core.Keyword(null,"velocity","velocity",3148165199).cljs$core$IFn$_invoke$arity$1(paddle)));var new_delta_h = cljs_pong.math.sqrt.call(null,(cljs_pong.math.squared.call(null,delta_x) + cljs_pong.math.squared.call(null,new_delta_y)));var new_angle = cljs_pong.math.atan2.call(null,new_delta_y,delta_x);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"angle","angle",1106865221),new_angle,new cljs.core.Keyword(null,"speed","speed",1123546041),cljs_pong.math.minimum.call(null,new_delta_h,cljs_pong.ball.max_speed)], null);
});
cljs_pong.ball.bounce_effects = (function bounce_effects(ball,hit,paddle_1,paddle_2){var bounce_angle = cljs_pong.ball.bounce_angle.call(null,ball,hit);var ball_velocity = new cljs.core.Keyword(null,"speed","speed",1123546041).cljs$core$IFn$_invoke$arity$1(ball);if(cljs.core._EQ_.call(null,hit,paddle_1))
{return cljs_pong.ball.paddle_hit_effect.call(null,ball_velocity,bounce_angle,paddle_1);
} else
{if(cljs.core._EQ_.call(null,hit,paddle_2))
{return cljs_pong.ball.paddle_hit_effect.call(null,ball_velocity,bounce_angle,paddle_2);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"angle","angle",1106865221),bounce_angle], null);
} else
{return null;
}
}
}
});
cljs_pong.ball.move_ball = (function move_ball(state){var ball = new cljs.core.Keyword(null,"ball","ball",1016920433).cljs$core$IFn$_invoke$arity$1(state);var ball_next_pos = cljs_pong.ball.next_ball_pos.call(null,ball);var walls = new cljs.core.Keyword(null,"walls","walls",1126800219).cljs$core$IFn$_invoke$arity$1(state);var paddle_1 = new cljs.core.Keyword(null,"paddle-1","paddle-1",1787260416).cljs$core$IFn$_invoke$arity$1(state);var paddle_2 = new cljs.core.Keyword(null,"paddle-2","paddle-2",1787260417).cljs$core$IFn$_invoke$arity$1(state);var hittable_rects = cljs.core.conj.call(null,walls,paddle_1,paddle_2);var hit = cljs_pong.ball.ball_hits_rects.call(null,ball_next_pos,hittable_rects);if(cljs.core.truth_(hit))
{return cljs_pong.ball.next_ball_pos.call(null,cljs.core.merge.call(null,ball,cljs_pong.ball.bounce_effects.call(null,ball,hit,paddle_1,paddle_2)));
} else
{return ball_next_pos;
}
});
cljs_pong.ball.random_ball_pass_angle = (function random_ball_pass_angle(){var random_num = cljs_pong.math.random.call(null);var p1_min = ((3 * cljs_pong.math.pi) / 4);var p1_max = ((5 * cljs_pong.math.pi) / 4);var p2_max = (cljs_pong.math.pi / 4);var p2_min = ((-1 * cljs_pong.math.pi) / 4);if((random_num < 0.5))
{return cljs_pong.math.random_between.call(null,p1_min,p1_max);
} else
{return cljs_pong.math.random_between.call(null,p2_min,p2_max);
}
});
cljs_pong.ball.new_ball = (function new_ball(){var x = (new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs_pong.config.field) / 2);var y = (new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(cljs_pong.config.field) / 2);return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",1013904362),x,new cljs.core.Keyword(null,"y","y",1013904363),y,new cljs.core.Keyword(null,"radius","radius",4370292740),cljs_pong.ball.radius,new cljs.core.Keyword(null,"angle","angle",1106865221),cljs_pong.ball.random_ball_pass_angle.call(null),new cljs.core.Keyword(null,"speed","speed",1123546041),4], null);
});

//# sourceMappingURL=ball.js.map