// Compiled by ClojureScript 0.0-2173
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["polyline",null,"rect",null,"svg",null,"path",null,"g",null,"text",null,"circle",null,"textPath",null,"line",null,"clipPath",null,"polygon",null], null), null);
dommy.template.PElement = (function (){var obj6737 = {};return obj6737;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (dommy.template._elem[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (dommy.template._elem["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = dommy.utils.as_str.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((new cljs.core.Keyword(null,"else","else",1017020587))?node_str:null)));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= 0))
{var str_6740 = node_str.substring(base_idx);while(true){
var next_idx_6741 = dommy.template.next_css_index.call(null,str_6740,1);var frag_6742 = (((next_idx_6741 >= 0))?str_6740.substring(0,next_idx_6741):str_6740);var G__6739_6743 = frag_6742.charAt(0);if(cljs.core._EQ_.call(null,"#",G__6739_6743))
{node.setAttribute("id",frag_6742.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__6739_6743))
{dommy.attrs.add_class_BANG_.call(null,node,frag_6742.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_6742.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_6741 >= 0))
{{
var G__6744 = str_6740.substring(next_idx_6741);
str_6740 = G__6744;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__6750 = data;if(G__6750)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__6750.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6750.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6750);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6750);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__6751_6755 = cljs.core.seq.call(null,data);var chunk__6752_6756 = null;var count__6753_6757 = 0;var i__6754_6758 = 0;while(true){
if((i__6754_6758 < count__6753_6757))
{var child_6759 = cljs.core._nth.call(null,chunk__6752_6756,i__6754_6758);__GT_document_fragment.call(null,result_frag,child_6759);
{
var G__6760 = seq__6751_6755;
var G__6761 = chunk__6752_6756;
var G__6762 = count__6753_6757;
var G__6763 = (i__6754_6758 + 1);
seq__6751_6755 = G__6760;
chunk__6752_6756 = G__6761;
count__6753_6757 = G__6762;
i__6754_6758 = G__6763;
continue;
}
} else
{var temp__4092__auto___6764 = cljs.core.seq.call(null,seq__6751_6755);if(temp__4092__auto___6764)
{var seq__6751_6765__$1 = temp__4092__auto___6764;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6751_6765__$1))
{var c__4191__auto___6766 = cljs.core.chunk_first.call(null,seq__6751_6765__$1);{
var G__6767 = cljs.core.chunk_rest.call(null,seq__6751_6765__$1);
var G__6768 = c__4191__auto___6766;
var G__6769 = cljs.core.count.call(null,c__4191__auto___6766);
var G__6770 = 0;
seq__6751_6755 = G__6767;
chunk__6752_6756 = G__6768;
count__6753_6757 = G__6769;
i__6754_6758 = G__6770;
continue;
}
} else
{var child_6771 = cljs.core.first.call(null,seq__6751_6765__$1);__GT_document_fragment.call(null,result_frag,child_6771);
{
var G__6772 = cljs.core.next.call(null,seq__6751_6765__$1);
var G__6773 = null;
var G__6774 = 0;
var G__6775 = 0;
seq__6751_6755 = G__6772;
chunk__6752_6756 = G__6773;
count__6753_6757 = G__6774;
i__6754_6758 = G__6775;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__6777 = data;if(G__6777)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__6777.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6777.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6777);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6777);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__6778){var vec__6798 = p__6778;var tag_name = cljs.core.nth.call(null,vec__6798,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__6798,1,null);var children = cljs.core.nthnext.call(null,vec__6798,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__6800 = maybe_attrs;if(G__6800)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__6800.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6800.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6800);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6800);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__6801_6817 = cljs.core.seq.call(null,attrs);var chunk__6802_6818 = null;var count__6803_6819 = 0;var i__6804_6820 = 0;while(true){
if((i__6804_6820 < count__6803_6819))
{var vec__6805_6821 = cljs.core._nth.call(null,chunk__6802_6818,i__6804_6820);var k_6822 = cljs.core.nth.call(null,vec__6805_6821,0,null);var v_6823 = cljs.core.nth.call(null,vec__6805_6821,1,null);var G__6806_6824 = k_6822;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__6806_6824))
{var seq__6807_6825 = cljs.core.seq.call(null,v_6823);var chunk__6808_6826 = null;var count__6809_6827 = 0;var i__6810_6828 = 0;while(true){
if((i__6810_6828 < count__6809_6827))
{var c_6829 = cljs.core._nth.call(null,chunk__6808_6826,i__6810_6828);dommy.attrs.add_class_BANG_.call(null,n,c_6829);
{
var G__6830 = seq__6807_6825;
var G__6831 = chunk__6808_6826;
var G__6832 = count__6809_6827;
var G__6833 = (i__6810_6828 + 1);
seq__6807_6825 = G__6830;
chunk__6808_6826 = G__6831;
count__6809_6827 = G__6832;
i__6810_6828 = G__6833;
continue;
}
} else
{var temp__4092__auto___6834 = cljs.core.seq.call(null,seq__6807_6825);if(temp__4092__auto___6834)
{var seq__6807_6835__$1 = temp__4092__auto___6834;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6807_6835__$1))
{var c__4191__auto___6836 = cljs.core.chunk_first.call(null,seq__6807_6835__$1);{
var G__6837 = cljs.core.chunk_rest.call(null,seq__6807_6835__$1);
var G__6838 = c__4191__auto___6836;
var G__6839 = cljs.core.count.call(null,c__4191__auto___6836);
var G__6840 = 0;
seq__6807_6825 = G__6837;
chunk__6808_6826 = G__6838;
count__6809_6827 = G__6839;
i__6810_6828 = G__6840;
continue;
}
} else
{var c_6841 = cljs.core.first.call(null,seq__6807_6835__$1);dommy.attrs.add_class_BANG_.call(null,n,c_6841);
{
var G__6842 = cljs.core.next.call(null,seq__6807_6835__$1);
var G__6843 = null;
var G__6844 = 0;
var G__6845 = 0;
seq__6807_6825 = G__6842;
chunk__6808_6826 = G__6843;
count__6809_6827 = G__6844;
i__6810_6828 = G__6845;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__6806_6824))
{dommy.attrs.add_class_BANG_.call(null,n,v_6823);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_6822,v_6823);
} else
{}
}
}
{
var G__6846 = seq__6801_6817;
var G__6847 = chunk__6802_6818;
var G__6848 = count__6803_6819;
var G__6849 = (i__6804_6820 + 1);
seq__6801_6817 = G__6846;
chunk__6802_6818 = G__6847;
count__6803_6819 = G__6848;
i__6804_6820 = G__6849;
continue;
}
} else
{var temp__4092__auto___6850 = cljs.core.seq.call(null,seq__6801_6817);if(temp__4092__auto___6850)
{var seq__6801_6851__$1 = temp__4092__auto___6850;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6801_6851__$1))
{var c__4191__auto___6852 = cljs.core.chunk_first.call(null,seq__6801_6851__$1);{
var G__6853 = cljs.core.chunk_rest.call(null,seq__6801_6851__$1);
var G__6854 = c__4191__auto___6852;
var G__6855 = cljs.core.count.call(null,c__4191__auto___6852);
var G__6856 = 0;
seq__6801_6817 = G__6853;
chunk__6802_6818 = G__6854;
count__6803_6819 = G__6855;
i__6804_6820 = G__6856;
continue;
}
} else
{var vec__6811_6857 = cljs.core.first.call(null,seq__6801_6851__$1);var k_6858 = cljs.core.nth.call(null,vec__6811_6857,0,null);var v_6859 = cljs.core.nth.call(null,vec__6811_6857,1,null);var G__6812_6860 = k_6858;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__6812_6860))
{var seq__6813_6861 = cljs.core.seq.call(null,v_6859);var chunk__6814_6862 = null;var count__6815_6863 = 0;var i__6816_6864 = 0;while(true){
if((i__6816_6864 < count__6815_6863))
{var c_6865 = cljs.core._nth.call(null,chunk__6814_6862,i__6816_6864);dommy.attrs.add_class_BANG_.call(null,n,c_6865);
{
var G__6866 = seq__6813_6861;
var G__6867 = chunk__6814_6862;
var G__6868 = count__6815_6863;
var G__6869 = (i__6816_6864 + 1);
seq__6813_6861 = G__6866;
chunk__6814_6862 = G__6867;
count__6815_6863 = G__6868;
i__6816_6864 = G__6869;
continue;
}
} else
{var temp__4092__auto___6870__$1 = cljs.core.seq.call(null,seq__6813_6861);if(temp__4092__auto___6870__$1)
{var seq__6813_6871__$1 = temp__4092__auto___6870__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6813_6871__$1))
{var c__4191__auto___6872 = cljs.core.chunk_first.call(null,seq__6813_6871__$1);{
var G__6873 = cljs.core.chunk_rest.call(null,seq__6813_6871__$1);
var G__6874 = c__4191__auto___6872;
var G__6875 = cljs.core.count.call(null,c__4191__auto___6872);
var G__6876 = 0;
seq__6813_6861 = G__6873;
chunk__6814_6862 = G__6874;
count__6815_6863 = G__6875;
i__6816_6864 = G__6876;
continue;
}
} else
{var c_6877 = cljs.core.first.call(null,seq__6813_6871__$1);dommy.attrs.add_class_BANG_.call(null,n,c_6877);
{
var G__6878 = cljs.core.next.call(null,seq__6813_6871__$1);
var G__6879 = null;
var G__6880 = 0;
var G__6881 = 0;
seq__6813_6861 = G__6878;
chunk__6814_6862 = G__6879;
count__6815_6863 = G__6880;
i__6816_6864 = G__6881;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__6812_6860))
{dommy.attrs.add_class_BANG_.call(null,n,v_6859);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_6858,v_6859);
} else
{}
}
}
{
var G__6882 = cljs.core.next.call(null,seq__6801_6851__$1);
var G__6883 = null;
var G__6884 = 0;
var G__6885 = 0;
seq__6801_6817 = G__6882;
chunk__6802_6818 = G__6883;
count__6803_6819 = G__6884;
i__6804_6820 = G__6885;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Comment.prototype.dommy$template$PElement$ = true;
Comment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Element.prototype.dommy$template$PElement$ = true;
Element.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
if(typeof HTMLElement !== 'undefined')
{HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof DocumentFragment !== 'undefined')
{DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof Document !== 'undefined')
{Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof HTMLDocument !== 'undefined')
{HTMLDocument.prototype.dommy$template$PElement$ = true;
HTMLDocument.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof SVGElement !== 'undefined')
{SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof Window !== 'undefined')
{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
dommy.template.node = (function node(data){if((function (){var G__6887 = data;if(G__6887)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__6887.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__6887.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6887);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__6887);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});

//# sourceMappingURL=template.js.map