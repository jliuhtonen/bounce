// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_pong.math');
goog.require('cljs.core');
cljs_pong.math.pi = Math.PI;
cljs_pong.math.cos = (function cos(a){return Math.cos.call(null,a);
});
cljs_pong.math.sin = (function sin(a){return Math.sin.call(null,a);
});
cljs_pong.math.sqrt = (function sqrt(a){return Math.sqrt.call(null,a);
});
cljs_pong.math.pow = (function pow(a,b){return Math.pow.call(null,a,b);
});
cljs_pong.math.squared = (function squared(a){return cljs_pong.math.pow.call(null,a,2);
});
cljs_pong.math.minimum = (function minimum(a,b){return Math.min.call(null,a,b);
});
cljs_pong.math.atan2 = (function atan2(a,b){return Math.atan2.call(null,a,b);
});
cljs_pong.math.abs = (function abs(a){return Math.abs.call(null,a);
});
cljs_pong.math.floor = (function floor(a){return Math.floor.call(null,a);
});
cljs_pong.math.sign = (function sign(a){if((a < 0))
{return -1;
} else
{return 1;
}
});
cljs_pong.math.random = (function random(){return Math.random.call(null);
});
cljs_pong.math.random_between = (function random_between(a,b){return ((cljs_pong.math.random.call(null) * (b - a)) + a);
});

//# sourceMappingURL=math.js.map