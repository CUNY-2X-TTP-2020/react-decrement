(this["webpackJsonpreact-decrement"]=this["webpackJsonpreact-decrement"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),u=(n(12),n(13),n(3)),s=n(4),l=n(6),m=n(5),i=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleDecrement=function(e){if(e.counter-e.amount<0)return alert("Cannot be less than zero!");a.setState({counter:e.counter-e.amount})},a.state={counter:void 0!==e.start?e.start:10,amount:void 0!==e.amount?e.amount:1},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.state.counter,r.a.createElement("button",{className:"decrement-button",onClick:function(){return e.handleDecrement(e.state)}},"Decrement ",this.state.amount))}}]),n}(a.Component);var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Decrement"),r.a.createElement(i,null),r.a.createElement(i,{start:20,amount:1}),r.a.createElement(i,{start:50,amount:5}),r.a.createElement(i,{start:100,amount:10}),r.a.createElement(i,{start:2020,amount:199})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.69de5aee.chunk.js.map