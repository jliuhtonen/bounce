// Compiled by ClojureScript 0.0-2173
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__3443__auto__ = elem.textContent;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__6332 = dommy.template.__GT_node_like.call(null,parent);G__6332.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__6332;
});
var append_BANG___3 = (function() { 
var G__6337__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__6333_6338 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__6334_6339 = null;var count__6335_6340 = 0;var i__6336_6341 = 0;while(true){
if((i__6336_6341 < count__6335_6340))
{var c_6342 = cljs.core._nth.call(null,chunk__6334_6339,i__6336_6341);append_BANG_.call(null,parent__$1,c_6342);
{
var G__6343 = seq__6333_6338;
var G__6344 = chunk__6334_6339;
var G__6345 = count__6335_6340;
var G__6346 = (i__6336_6341 + 1);
seq__6333_6338 = G__6343;
chunk__6334_6339 = G__6344;
count__6335_6340 = G__6345;
i__6336_6341 = G__6346;
continue;
}
} else
{var temp__4092__auto___6347 = cljs.core.seq.call(null,seq__6333_6338);if(temp__4092__auto___6347)
{var seq__6333_6348__$1 = temp__4092__auto___6347;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6333_6348__$1))
{var c__4191__auto___6349 = cljs.core.chunk_first.call(null,seq__6333_6348__$1);{
var G__6350 = cljs.core.chunk_rest.call(null,seq__6333_6348__$1);
var G__6351 = c__4191__auto___6349;
var G__6352 = cljs.core.count.call(null,c__4191__auto___6349);
var G__6353 = 0;
seq__6333_6338 = G__6350;
chunk__6334_6339 = G__6351;
count__6335_6340 = G__6352;
i__6336_6341 = G__6353;
continue;
}
} else
{var c_6354 = cljs.core.first.call(null,seq__6333_6348__$1);append_BANG_.call(null,parent__$1,c_6354);
{
var G__6355 = cljs.core.next.call(null,seq__6333_6348__$1);
var G__6356 = null;
var G__6357 = 0;
var G__6358 = 0;
seq__6333_6338 = G__6355;
chunk__6334_6339 = G__6356;
count__6335_6340 = G__6357;
i__6336_6341 = G__6358;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__6337 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6337__delegate.call(this,parent,child,more_children);};
G__6337.cljs$lang$maxFixedArity = 2;
G__6337.cljs$lang$applyTo = (function (arglist__6359){
var parent = cljs.core.first(arglist__6359);
arglist__6359 = cljs.core.next(arglist__6359);
var child = cljs.core.first(arglist__6359);
var more_children = cljs.core.rest(arglist__6359);
return G__6337__delegate(parent,child,more_children);
});
G__6337.cljs$core$IFn$_invoke$arity$variadic = G__6337__delegate;
return G__6337;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__6368__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__6364_6369 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__6365_6370 = null;var count__6366_6371 = 0;var i__6367_6372 = 0;while(true){
if((i__6367_6372 < count__6366_6371))
{var c_6373 = cljs.core._nth.call(null,chunk__6365_6370,i__6367_6372);prepend_BANG_.call(null,parent__$1,c_6373);
{
var G__6374 = seq__6364_6369;
var G__6375 = chunk__6365_6370;
var G__6376 = count__6366_6371;
var G__6377 = (i__6367_6372 + 1);
seq__6364_6369 = G__6374;
chunk__6365_6370 = G__6375;
count__6366_6371 = G__6376;
i__6367_6372 = G__6377;
continue;
}
} else
{var temp__4092__auto___6378 = cljs.core.seq.call(null,seq__6364_6369);if(temp__4092__auto___6378)
{var seq__6364_6379__$1 = temp__4092__auto___6378;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6364_6379__$1))
{var c__4191__auto___6380 = cljs.core.chunk_first.call(null,seq__6364_6379__$1);{
var G__6381 = cljs.core.chunk_rest.call(null,seq__6364_6379__$1);
var G__6382 = c__4191__auto___6380;
var G__6383 = cljs.core.count.call(null,c__4191__auto___6380);
var G__6384 = 0;
seq__6364_6369 = G__6381;
chunk__6365_6370 = G__6382;
count__6366_6371 = G__6383;
i__6367_6372 = G__6384;
continue;
}
} else
{var c_6385 = cljs.core.first.call(null,seq__6364_6379__$1);prepend_BANG_.call(null,parent__$1,c_6385);
{
var G__6386 = cljs.core.next.call(null,seq__6364_6379__$1);
var G__6387 = null;
var G__6388 = 0;
var G__6389 = 0;
seq__6364_6369 = G__6386;
chunk__6365_6370 = G__6387;
count__6366_6371 = G__6388;
i__6367_6372 = G__6389;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__6368 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6368__delegate.call(this,parent,child,more_children);};
G__6368.cljs$lang$maxFixedArity = 2;
G__6368.cljs$lang$applyTo = (function (arglist__6390){
var parent = cljs.core.first(arglist__6390);
arglist__6390 = cljs.core.next(arglist__6390);
var child = cljs.core.first(arglist__6390);
var more_children = cljs.core.rest(arglist__6390);
return G__6368__delegate(parent,child,more_children);
});
G__6368.cljs$core$IFn$_invoke$arity$variadic = G__6368__delegate;
return G__6368;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null))))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___6391 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___6391))
{var next_6392 = temp__4090__auto___6391;parent.insertBefore(actual_node,next_6392);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null))))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__6394 = dommy.template.__GT_node_like.call(null,parent);G__6394.innerHTML = "";
dommy.core.append_BANG_.call(null,G__6394,node_like);
return G__6394;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__6396 = elem__$1.parentNode;G__6396.removeChild(elem__$1);
return G__6396;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",602947571))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-2051487815,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",19054414,null),new cljs.core.Keyword(null,"container","container",602947571)))))].join('')));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__6402){var vec__6403 = p__6402;var k = cljs.core.nth.call(null,vec__6403,0,null);var v = cljs.core.nth.call(null,vec__6403,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t6404 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t6404 = (function (v,k,vec__6403,p__6402,container,key_selectors_map,template,selector_map,meta6405){
this.v = v;
this.k = k;
this.vec__6403 = vec__6403;
this.p__6402 = p__6402;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta6405 = meta6405;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t6404.cljs$lang$type = true;
dommy.core.t6404.cljs$lang$ctorStr = "dommy.core/t6404";
dommy.core.t6404.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"dommy.core/t6404");
});
dommy.core.t6404.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t6404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6406){var self__ = this;
var _6406__$1 = this;return self__.meta6405;
});
dommy.core.t6404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6406,meta6405__$1){var self__ = this;
var _6406__$1 = this;return (new dommy.core.t6404(self__.v,self__.k,self__.vec__6403,self__.p__6402,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta6405__$1));
});
dommy.core.__GT_t6404 = (function __GT_t6404(v__$1,k__$1,vec__6403__$1,p__6402__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta6405){return (new dommy.core.t6404(v__$1,k__$1,vec__6403__$1,p__6402__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta6405));
});
}
return (new dommy.core.t6404(v,k,vec__6403,p__6402,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__6407_SHARP_){return p1__6407_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return (function (elem){return (matches.indexOf(elem) >= 0);
});
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__6408_SHARP_){return !((p1__6408_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__6409){var vec__6410 = p__6409;var special_mouse_event = cljs.core.nth.call(null,vec__6410,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__6410,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3443__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3431__auto__ = related_target;if(cljs.core.truth_(and__3431__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3431__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),new cljs.core.Keyword(null,"mouseout","mouseout",894298107)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__3431__auto__ = selected_target;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__3431__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3443__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__6411){
var elem = cljs.core.first(arglist__6411);
arglist__6411 = cljs.core.next(arglist__6411);
var f = cljs.core.first(arglist__6411);
var args = cljs.core.rest(arglist__6411);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__6412_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__6412_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__6436_6459 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_6460 = cljs.core.nth.call(null,vec__6436_6459,0,null);var selector_6461 = cljs.core.nth.call(null,vec__6436_6459,1,null);var seq__6437_6462 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__6444_6463 = null;var count__6445_6464 = 0;var i__6446_6465 = 0;while(true){
if((i__6446_6465 < count__6445_6464))
{var vec__6453_6466 = cljs.core._nth.call(null,chunk__6444_6463,i__6446_6465);var orig_type_6467 = cljs.core.nth.call(null,vec__6453_6466,0,null);var f_6468 = cljs.core.nth.call(null,vec__6453_6466,1,null);var seq__6447_6469 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6467,new cljs.core.PersistentArrayMap.fromArray([orig_type_6467,cljs.core.identity], true, false)));var chunk__6449_6470 = null;var count__6450_6471 = 0;var i__6451_6472 = 0;while(true){
if((i__6451_6472 < count__6450_6471))
{var vec__6454_6473 = cljs.core._nth.call(null,chunk__6449_6470,i__6451_6472);var actual_type_6474 = cljs.core.nth.call(null,vec__6454_6473,0,null);var factory_6475 = cljs.core.nth.call(null,vec__6454_6473,1,null);var canonical_f_6476 = (cljs.core.truth_(selector_6461)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6460,selector_6461):cljs.core.identity).call(null,factory_6475.call(null,f_6468));dommy.core.update_event_listeners_BANG_.call(null,elem_6460,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6461,actual_type_6474,f_6468], null),canonical_f_6476);
if(cljs.core.truth_(elem_6460.addEventListener))
{elem_6460.addEventListener(cljs.core.name.call(null,actual_type_6474),canonical_f_6476);
} else
{elem_6460.attachEvent(cljs.core.name.call(null,actual_type_6474),canonical_f_6476);
}
{
var G__6477 = seq__6447_6469;
var G__6478 = chunk__6449_6470;
var G__6479 = count__6450_6471;
var G__6480 = (i__6451_6472 + 1);
seq__6447_6469 = G__6477;
chunk__6449_6470 = G__6478;
count__6450_6471 = G__6479;
i__6451_6472 = G__6480;
continue;
}
} else
{var temp__4092__auto___6481 = cljs.core.seq.call(null,seq__6447_6469);if(temp__4092__auto___6481)
{var seq__6447_6482__$1 = temp__4092__auto___6481;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6447_6482__$1))
{var c__4191__auto___6483 = cljs.core.chunk_first.call(null,seq__6447_6482__$1);{
var G__6484 = cljs.core.chunk_rest.call(null,seq__6447_6482__$1);
var G__6485 = c__4191__auto___6483;
var G__6486 = cljs.core.count.call(null,c__4191__auto___6483);
var G__6487 = 0;
seq__6447_6469 = G__6484;
chunk__6449_6470 = G__6485;
count__6450_6471 = G__6486;
i__6451_6472 = G__6487;
continue;
}
} else
{var vec__6455_6488 = cljs.core.first.call(null,seq__6447_6482__$1);var actual_type_6489 = cljs.core.nth.call(null,vec__6455_6488,0,null);var factory_6490 = cljs.core.nth.call(null,vec__6455_6488,1,null);var canonical_f_6491 = (cljs.core.truth_(selector_6461)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6460,selector_6461):cljs.core.identity).call(null,factory_6490.call(null,f_6468));dommy.core.update_event_listeners_BANG_.call(null,elem_6460,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6461,actual_type_6489,f_6468], null),canonical_f_6491);
if(cljs.core.truth_(elem_6460.addEventListener))
{elem_6460.addEventListener(cljs.core.name.call(null,actual_type_6489),canonical_f_6491);
} else
{elem_6460.attachEvent(cljs.core.name.call(null,actual_type_6489),canonical_f_6491);
}
{
var G__6492 = cljs.core.next.call(null,seq__6447_6482__$1);
var G__6493 = null;
var G__6494 = 0;
var G__6495 = 0;
seq__6447_6469 = G__6492;
chunk__6449_6470 = G__6493;
count__6450_6471 = G__6494;
i__6451_6472 = G__6495;
continue;
}
}
} else
{}
}
break;
}
{
var G__6496 = seq__6437_6462;
var G__6497 = chunk__6444_6463;
var G__6498 = count__6445_6464;
var G__6499 = (i__6446_6465 + 1);
seq__6437_6462 = G__6496;
chunk__6444_6463 = G__6497;
count__6445_6464 = G__6498;
i__6446_6465 = G__6499;
continue;
}
} else
{var temp__4092__auto___6500 = cljs.core.seq.call(null,seq__6437_6462);if(temp__4092__auto___6500)
{var seq__6437_6501__$1 = temp__4092__auto___6500;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6437_6501__$1))
{var c__4191__auto___6502 = cljs.core.chunk_first.call(null,seq__6437_6501__$1);{
var G__6503 = cljs.core.chunk_rest.call(null,seq__6437_6501__$1);
var G__6504 = c__4191__auto___6502;
var G__6505 = cljs.core.count.call(null,c__4191__auto___6502);
var G__6506 = 0;
seq__6437_6462 = G__6503;
chunk__6444_6463 = G__6504;
count__6445_6464 = G__6505;
i__6446_6465 = G__6506;
continue;
}
} else
{var vec__6456_6507 = cljs.core.first.call(null,seq__6437_6501__$1);var orig_type_6508 = cljs.core.nth.call(null,vec__6456_6507,0,null);var f_6509 = cljs.core.nth.call(null,vec__6456_6507,1,null);var seq__6438_6510 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6508,new cljs.core.PersistentArrayMap.fromArray([orig_type_6508,cljs.core.identity], true, false)));var chunk__6440_6511 = null;var count__6441_6512 = 0;var i__6442_6513 = 0;while(true){
if((i__6442_6513 < count__6441_6512))
{var vec__6457_6514 = cljs.core._nth.call(null,chunk__6440_6511,i__6442_6513);var actual_type_6515 = cljs.core.nth.call(null,vec__6457_6514,0,null);var factory_6516 = cljs.core.nth.call(null,vec__6457_6514,1,null);var canonical_f_6517 = (cljs.core.truth_(selector_6461)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6460,selector_6461):cljs.core.identity).call(null,factory_6516.call(null,f_6509));dommy.core.update_event_listeners_BANG_.call(null,elem_6460,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6461,actual_type_6515,f_6509], null),canonical_f_6517);
if(cljs.core.truth_(elem_6460.addEventListener))
{elem_6460.addEventListener(cljs.core.name.call(null,actual_type_6515),canonical_f_6517);
} else
{elem_6460.attachEvent(cljs.core.name.call(null,actual_type_6515),canonical_f_6517);
}
{
var G__6518 = seq__6438_6510;
var G__6519 = chunk__6440_6511;
var G__6520 = count__6441_6512;
var G__6521 = (i__6442_6513 + 1);
seq__6438_6510 = G__6518;
chunk__6440_6511 = G__6519;
count__6441_6512 = G__6520;
i__6442_6513 = G__6521;
continue;
}
} else
{var temp__4092__auto___6522__$1 = cljs.core.seq.call(null,seq__6438_6510);if(temp__4092__auto___6522__$1)
{var seq__6438_6523__$1 = temp__4092__auto___6522__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6438_6523__$1))
{var c__4191__auto___6524 = cljs.core.chunk_first.call(null,seq__6438_6523__$1);{
var G__6525 = cljs.core.chunk_rest.call(null,seq__6438_6523__$1);
var G__6526 = c__4191__auto___6524;
var G__6527 = cljs.core.count.call(null,c__4191__auto___6524);
var G__6528 = 0;
seq__6438_6510 = G__6525;
chunk__6440_6511 = G__6526;
count__6441_6512 = G__6527;
i__6442_6513 = G__6528;
continue;
}
} else
{var vec__6458_6529 = cljs.core.first.call(null,seq__6438_6523__$1);var actual_type_6530 = cljs.core.nth.call(null,vec__6458_6529,0,null);var factory_6531 = cljs.core.nth.call(null,vec__6458_6529,1,null);var canonical_f_6532 = (cljs.core.truth_(selector_6461)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6460,selector_6461):cljs.core.identity).call(null,factory_6531.call(null,f_6509));dommy.core.update_event_listeners_BANG_.call(null,elem_6460,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6461,actual_type_6530,f_6509], null),canonical_f_6532);
if(cljs.core.truth_(elem_6460.addEventListener))
{elem_6460.addEventListener(cljs.core.name.call(null,actual_type_6530),canonical_f_6532);
} else
{elem_6460.attachEvent(cljs.core.name.call(null,actual_type_6530),canonical_f_6532);
}
{
var G__6533 = cljs.core.next.call(null,seq__6438_6523__$1);
var G__6534 = null;
var G__6535 = 0;
var G__6536 = 0;
seq__6438_6510 = G__6533;
chunk__6440_6511 = G__6534;
count__6441_6512 = G__6535;
i__6442_6513 = G__6536;
continue;
}
}
} else
{}
}
break;
}
{
var G__6537 = cljs.core.next.call(null,seq__6437_6501__$1);
var G__6538 = null;
var G__6539 = 0;
var G__6540 = 0;
seq__6437_6462 = G__6537;
chunk__6444_6463 = G__6538;
count__6445_6464 = G__6539;
i__6446_6465 = G__6540;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__6541){
var elem_sel = cljs.core.first(arglist__6541);
var type_fs = cljs.core.rest(arglist__6541);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__6565_6588 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_6589 = cljs.core.nth.call(null,vec__6565_6588,0,null);var selector_6590 = cljs.core.nth.call(null,vec__6565_6588,1,null);var seq__6566_6591 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__6573_6592 = null;var count__6574_6593 = 0;var i__6575_6594 = 0;while(true){
if((i__6575_6594 < count__6574_6593))
{var vec__6582_6595 = cljs.core._nth.call(null,chunk__6573_6592,i__6575_6594);var orig_type_6596 = cljs.core.nth.call(null,vec__6582_6595,0,null);var f_6597 = cljs.core.nth.call(null,vec__6582_6595,1,null);var seq__6576_6598 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6596,new cljs.core.PersistentArrayMap.fromArray([orig_type_6596,cljs.core.identity], true, false)));var chunk__6578_6599 = null;var count__6579_6600 = 0;var i__6580_6601 = 0;while(true){
if((i__6580_6601 < count__6579_6600))
{var vec__6583_6602 = cljs.core._nth.call(null,chunk__6578_6599,i__6580_6601);var actual_type_6603 = cljs.core.nth.call(null,vec__6583_6602,0,null);var __6604 = cljs.core.nth.call(null,vec__6583_6602,1,null);var keys_6605 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6590,actual_type_6603,f_6597], null);var canonical_f_6606 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6589),keys_6605);dommy.core.update_event_listeners_BANG_.call(null,elem_6589,dommy.utils.dissoc_in,keys_6605);
if(cljs.core.truth_(elem_6589.removeEventListener))
{elem_6589.removeEventListener(cljs.core.name.call(null,actual_type_6603),canonical_f_6606);
} else
{elem_6589.detachEvent(cljs.core.name.call(null,actual_type_6603),canonical_f_6606);
}
{
var G__6607 = seq__6576_6598;
var G__6608 = chunk__6578_6599;
var G__6609 = count__6579_6600;
var G__6610 = (i__6580_6601 + 1);
seq__6576_6598 = G__6607;
chunk__6578_6599 = G__6608;
count__6579_6600 = G__6609;
i__6580_6601 = G__6610;
continue;
}
} else
{var temp__4092__auto___6611 = cljs.core.seq.call(null,seq__6576_6598);if(temp__4092__auto___6611)
{var seq__6576_6612__$1 = temp__4092__auto___6611;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6576_6612__$1))
{var c__4191__auto___6613 = cljs.core.chunk_first.call(null,seq__6576_6612__$1);{
var G__6614 = cljs.core.chunk_rest.call(null,seq__6576_6612__$1);
var G__6615 = c__4191__auto___6613;
var G__6616 = cljs.core.count.call(null,c__4191__auto___6613);
var G__6617 = 0;
seq__6576_6598 = G__6614;
chunk__6578_6599 = G__6615;
count__6579_6600 = G__6616;
i__6580_6601 = G__6617;
continue;
}
} else
{var vec__6584_6618 = cljs.core.first.call(null,seq__6576_6612__$1);var actual_type_6619 = cljs.core.nth.call(null,vec__6584_6618,0,null);var __6620 = cljs.core.nth.call(null,vec__6584_6618,1,null);var keys_6621 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6590,actual_type_6619,f_6597], null);var canonical_f_6622 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6589),keys_6621);dommy.core.update_event_listeners_BANG_.call(null,elem_6589,dommy.utils.dissoc_in,keys_6621);
if(cljs.core.truth_(elem_6589.removeEventListener))
{elem_6589.removeEventListener(cljs.core.name.call(null,actual_type_6619),canonical_f_6622);
} else
{elem_6589.detachEvent(cljs.core.name.call(null,actual_type_6619),canonical_f_6622);
}
{
var G__6623 = cljs.core.next.call(null,seq__6576_6612__$1);
var G__6624 = null;
var G__6625 = 0;
var G__6626 = 0;
seq__6576_6598 = G__6623;
chunk__6578_6599 = G__6624;
count__6579_6600 = G__6625;
i__6580_6601 = G__6626;
continue;
}
}
} else
{}
}
break;
}
{
var G__6627 = seq__6566_6591;
var G__6628 = chunk__6573_6592;
var G__6629 = count__6574_6593;
var G__6630 = (i__6575_6594 + 1);
seq__6566_6591 = G__6627;
chunk__6573_6592 = G__6628;
count__6574_6593 = G__6629;
i__6575_6594 = G__6630;
continue;
}
} else
{var temp__4092__auto___6631 = cljs.core.seq.call(null,seq__6566_6591);if(temp__4092__auto___6631)
{var seq__6566_6632__$1 = temp__4092__auto___6631;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6566_6632__$1))
{var c__4191__auto___6633 = cljs.core.chunk_first.call(null,seq__6566_6632__$1);{
var G__6634 = cljs.core.chunk_rest.call(null,seq__6566_6632__$1);
var G__6635 = c__4191__auto___6633;
var G__6636 = cljs.core.count.call(null,c__4191__auto___6633);
var G__6637 = 0;
seq__6566_6591 = G__6634;
chunk__6573_6592 = G__6635;
count__6574_6593 = G__6636;
i__6575_6594 = G__6637;
continue;
}
} else
{var vec__6585_6638 = cljs.core.first.call(null,seq__6566_6632__$1);var orig_type_6639 = cljs.core.nth.call(null,vec__6585_6638,0,null);var f_6640 = cljs.core.nth.call(null,vec__6585_6638,1,null);var seq__6567_6641 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6639,new cljs.core.PersistentArrayMap.fromArray([orig_type_6639,cljs.core.identity], true, false)));var chunk__6569_6642 = null;var count__6570_6643 = 0;var i__6571_6644 = 0;while(true){
if((i__6571_6644 < count__6570_6643))
{var vec__6586_6645 = cljs.core._nth.call(null,chunk__6569_6642,i__6571_6644);var actual_type_6646 = cljs.core.nth.call(null,vec__6586_6645,0,null);var __6647 = cljs.core.nth.call(null,vec__6586_6645,1,null);var keys_6648 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6590,actual_type_6646,f_6640], null);var canonical_f_6649 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6589),keys_6648);dommy.core.update_event_listeners_BANG_.call(null,elem_6589,dommy.utils.dissoc_in,keys_6648);
if(cljs.core.truth_(elem_6589.removeEventListener))
{elem_6589.removeEventListener(cljs.core.name.call(null,actual_type_6646),canonical_f_6649);
} else
{elem_6589.detachEvent(cljs.core.name.call(null,actual_type_6646),canonical_f_6649);
}
{
var G__6650 = seq__6567_6641;
var G__6651 = chunk__6569_6642;
var G__6652 = count__6570_6643;
var G__6653 = (i__6571_6644 + 1);
seq__6567_6641 = G__6650;
chunk__6569_6642 = G__6651;
count__6570_6643 = G__6652;
i__6571_6644 = G__6653;
continue;
}
} else
{var temp__4092__auto___6654__$1 = cljs.core.seq.call(null,seq__6567_6641);if(temp__4092__auto___6654__$1)
{var seq__6567_6655__$1 = temp__4092__auto___6654__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6567_6655__$1))
{var c__4191__auto___6656 = cljs.core.chunk_first.call(null,seq__6567_6655__$1);{
var G__6657 = cljs.core.chunk_rest.call(null,seq__6567_6655__$1);
var G__6658 = c__4191__auto___6656;
var G__6659 = cljs.core.count.call(null,c__4191__auto___6656);
var G__6660 = 0;
seq__6567_6641 = G__6657;
chunk__6569_6642 = G__6658;
count__6570_6643 = G__6659;
i__6571_6644 = G__6660;
continue;
}
} else
{var vec__6587_6661 = cljs.core.first.call(null,seq__6567_6655__$1);var actual_type_6662 = cljs.core.nth.call(null,vec__6587_6661,0,null);var __6663 = cljs.core.nth.call(null,vec__6587_6661,1,null);var keys_6664 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6590,actual_type_6662,f_6640], null);var canonical_f_6665 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6589),keys_6664);dommy.core.update_event_listeners_BANG_.call(null,elem_6589,dommy.utils.dissoc_in,keys_6664);
if(cljs.core.truth_(elem_6589.removeEventListener))
{elem_6589.removeEventListener(cljs.core.name.call(null,actual_type_6662),canonical_f_6665);
} else
{elem_6589.detachEvent(cljs.core.name.call(null,actual_type_6662),canonical_f_6665);
}
{
var G__6666 = cljs.core.next.call(null,seq__6567_6655__$1);
var G__6667 = null;
var G__6668 = 0;
var G__6669 = 0;
seq__6567_6641 = G__6666;
chunk__6569_6642 = G__6667;
count__6570_6643 = G__6668;
i__6571_6644 = G__6669;
continue;
}
}
} else
{}
}
break;
}
{
var G__6670 = cljs.core.next.call(null,seq__6566_6632__$1);
var G__6671 = null;
var G__6672 = 0;
var G__6673 = 0;
seq__6566_6591 = G__6670;
chunk__6573_6592 = G__6671;
count__6574_6593 = G__6672;
i__6575_6594 = G__6673;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__6674){
var elem_sel = cljs.core.first(arglist__6674);
var type_fs = cljs.core.rest(arglist__6674);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__6682_6689 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_6690 = cljs.core.nth.call(null,vec__6682_6689,0,null);var selector_6691 = cljs.core.nth.call(null,vec__6682_6689,1,null);var seq__6683_6692 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__6684_6693 = null;var count__6685_6694 = 0;var i__6686_6695 = 0;while(true){
if((i__6686_6695 < count__6685_6694))
{var vec__6687_6696 = cljs.core._nth.call(null,chunk__6684_6693,i__6686_6695);var type_6697 = cljs.core.nth.call(null,vec__6687_6696,0,null);var f_6698 = cljs.core.nth.call(null,vec__6687_6696,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_6697,((function (seq__6683_6692,chunk__6684_6693,count__6685_6694,i__6686_6695,vec__6687_6696,type_6697,f_6698){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_6697,this_fn);
return f_6698.call(null,e);
});})(seq__6683_6692,chunk__6684_6693,count__6685_6694,i__6686_6695,vec__6687_6696,type_6697,f_6698))
);
{
var G__6699 = seq__6683_6692;
var G__6700 = chunk__6684_6693;
var G__6701 = count__6685_6694;
var G__6702 = (i__6686_6695 + 1);
seq__6683_6692 = G__6699;
chunk__6684_6693 = G__6700;
count__6685_6694 = G__6701;
i__6686_6695 = G__6702;
continue;
}
} else
{var temp__4092__auto___6703 = cljs.core.seq.call(null,seq__6683_6692);if(temp__4092__auto___6703)
{var seq__6683_6704__$1 = temp__4092__auto___6703;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6683_6704__$1))
{var c__4191__auto___6705 = cljs.core.chunk_first.call(null,seq__6683_6704__$1);{
var G__6706 = cljs.core.chunk_rest.call(null,seq__6683_6704__$1);
var G__6707 = c__4191__auto___6705;
var G__6708 = cljs.core.count.call(null,c__4191__auto___6705);
var G__6709 = 0;
seq__6683_6692 = G__6706;
chunk__6684_6693 = G__6707;
count__6685_6694 = G__6708;
i__6686_6695 = G__6709;
continue;
}
} else
{var vec__6688_6710 = cljs.core.first.call(null,seq__6683_6704__$1);var type_6711 = cljs.core.nth.call(null,vec__6688_6710,0,null);var f_6712 = cljs.core.nth.call(null,vec__6688_6710,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_6711,((function (seq__6683_6692,chunk__6684_6693,count__6685_6694,i__6686_6695,vec__6688_6710,type_6711,f_6712,seq__6683_6704__$1,temp__4092__auto___6703){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_6711,this_fn);
return f_6712.call(null,e);
});})(seq__6683_6692,chunk__6684_6693,count__6685_6694,i__6686_6695,vec__6688_6710,type_6711,f_6712,seq__6683_6704__$1,temp__4092__auto___6703))
);
{
var G__6713 = cljs.core.next.call(null,seq__6683_6704__$1);
var G__6714 = null;
var G__6715 = 0;
var G__6716 = 0;
seq__6683_6692 = G__6713;
chunk__6684_6693 = G__6714;
count__6685_6694 = G__6715;
i__6686_6695 = G__6716;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__6717){
var elem_sel = cljs.core.first(arglist__6717);
var type_fs = cljs.core.rest(arglist__6717);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__6718){var vec__6720 = p__6718;var update_event_BANG_ = cljs.core.nth.call(null,vec__6720,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3443__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__6718 = null;if (arguments.length > 2) {
  p__6718 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__6718);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__6721){
var node = cljs.core.first(arglist__6721);
arglist__6721 = cljs.core.next(arglist__6721);
var event_type = cljs.core.first(arglist__6721);
var p__6718 = cljs.core.rest(arglist__6721);
return fire_BANG___delegate(node,event_type,p__6718);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map