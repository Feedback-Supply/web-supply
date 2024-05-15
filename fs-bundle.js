(function(me,ne){typeof exports=="object"&&typeof module!="undefined"?ne(exports):typeof define=="function"&&define.amd?define(["exports"],ne):(me=typeof globalThis!="undefined"?globalThis:me||self,ne(me.Annotorious={}))})(this,function(me){"use strict";var HS=Object.defineProperty;var US=(me,ne,$)=>ne in me?HS(me,ne,{enumerable:!0,configurable:!0,writable:!0,value:$}):me[ne]=$;var h=(me,ne,$)=>(US(me,typeof ne!="symbol"?ne+"":ne,$),$);var ne,$,Ci,Nt,Ai,wi,Oi,fn={},$i=[],Kc=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Le(t,e){for(var n in e)t[n]=e[n];return t}function xi(t){var e=t.parentNode;e&&e.removeChild(t)}function Q(t,e,n){var r,o,i,a={};for(i in e)i=="key"?r=e[i]:i=="ref"?o=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?ne.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)a[i]===void 0&&(a[i]=t.defaultProps[i]);return Lt(t,a,r,o,null)}function Lt(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o==null?++Ci:o};return o==null&&$.vnode!=null&&$.vnode(i),i}function $r(){return{current:null}}function Ce(t){return t.children}function J(t,e){this.props=t,this.context=e}function pt(t,e){if(e==null)return t.__?pt(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?pt(t):null}function Pi(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Pi(t)}}function xr(t){(!t.__d&&(t.__d=!0)&&Nt.push(t)&&!dn.__r++||wi!==$.debounceRendering)&&((wi=$.debounceRendering)||Ai)(dn)}function dn(){for(var t;dn.__r=Nt.length;)t=Nt.sort(function(e,n){return e.__v.__b-n.__v.__b}),Nt=[],t.some(function(e){var n,r,o,i,a,s;e.__d&&(a=(i=(n=e).__v).__e,(s=n.__P)&&(r=[],(o=Le({},i)).__v=i.__v+1,Pr(s,i,o,n.__n,s.ownerSVGElement!==void 0,i.__h!=null?[a]:null,r,a==null?pt(i):a,i.__h),Ri(r,i),i.__e!=a&&Pi(i)))})}function Di(t,e,n,r,o,i,a,s,l,c){var u,f,d,p,m,b,v,S=r&&r.__k||$i,C=S.length;for(n.__k=[],u=0;u<e.length;u++)if((p=n.__k[u]=(p=e[u])==null||typeof p=="boolean"?null:typeof p=="string"||typeof p=="number"||typeof p=="bigint"?Lt(null,p,null,null,p):Array.isArray(p)?Lt(Ce,{children:p},null,null,null):p.__b>0?Lt(p.type,p.props,p.key,null,p.__v):p)!=null){if(p.__=n,p.__b=n.__b+1,(d=S[u])===null||d&&p.key==d.key&&p.type===d.type)S[u]=void 0;else for(f=0;f<C;f++){if((d=S[f])&&p.key==d.key&&p.type===d.type){S[f]=void 0;break}d=null}Pr(t,p,d=d||fn,o,i,a,s,l,c),m=p.__e,(f=p.ref)&&d.ref!=f&&(v||(v=[]),d.ref&&v.push(d.ref,null,p),v.push(f,p.__c||m,p)),m!=null?(b==null&&(b=m),typeof p.type=="function"&&p.__k===d.__k?p.__d=l=Ti(p,l,t):l=Mi(t,p,d,S,m,l),typeof n.type=="function"&&(n.__d=l)):l&&d.__e==l&&l.parentNode!=t&&(l=pt(d))}for(n.__e=b,u=C;u--;)S[u]!=null&&(typeof n.type=="function"&&S[u].__e!=null&&S[u].__e==n.__d&&(n.__d=pt(r,u+1)),Li(S[u],S[u]));if(v)for(u=0;u<v.length;u++)Ni(v[u],v[++u],v[++u])}function Ti(t,e,n){for(var r,o=t.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=t,e=typeof r.type=="function"?Ti(r,e,n):Mi(n,r,r,o,r.__e,e));return e}function Be(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(n){Be(n,e)}):e.push(t)),e}function Mi(t,e,n,r,o,i){var a,s,l;if(e.__d!==void 0)a=e.__d,e.__d=void 0;else if(n==null||o!=i||o.parentNode==null)e:if(i==null||i.parentNode!==t)t.appendChild(o),a=null;else{for(s=i,l=0;(s=s.nextSibling)&&l<r.length;l+=2)if(s==o)break e;t.insertBefore(o,i),a=i}return a!==void 0?a:o.nextSibling}function Jc(t,e,n,r,o){var i;for(i in n)i==="children"||i==="key"||i in e||pn(t,i,null,n[i],r);for(i in e)o&&typeof e[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===e[i]||pn(t,i,e[i],n[i],r)}function ki(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||Kc.test(e)?n:n+"px"}function pn(t,e,n,r,o){var i;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||ki(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||ki(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?Ii:Fi,i):t.removeEventListener(e,i?Ii:Fi,i);else if(e!=="dangerouslySetInnerHTML"){if(o)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function Fi(t){this.l[t.type+!1]($.event?$.event(t):t)}function Ii(t){this.l[t.type+!0]($.event?$.event(t):t)}function Pr(t,e,n,r,o,i,a,s,l){var c,u,f,d,p,m,b,v,S,C,P,F=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,s=e.__e=n.__e,e.__h=null,i=[s]),(c=$.__b)&&c(e);try{e:if(typeof F=="function"){if(v=e.props,S=(c=F.contextType)&&r[c.__c],C=c?S?S.props.value:c.__:r,n.__c?b=(u=e.__c=n.__c).__=u.__E:("prototype"in F&&F.prototype.render?e.__c=u=new F(v,C):(e.__c=u=new J(v,C),u.constructor=F,u.render=Qc),S&&S.sub(u),u.props=v,u.state||(u.state={}),u.context=C,u.__n=r,f=u.__d=!0,u.__h=[]),u.__s==null&&(u.__s=u.state),F.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=Le({},u.__s)),Le(u.__s,F.getDerivedStateFromProps(v,u.__s))),d=u.props,p=u.state,f)F.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(F.getDerivedStateFromProps==null&&v!==d&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(v,C),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(v,u.__s,C)===!1||e.__v===n.__v){u.props=v,u.state=u.__s,e.__v!==n.__v&&(u.__d=!1),u.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(O){O&&(O.__=e)}),u.__h.length&&a.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(v,u.__s,C),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(d,p,m)})}u.context=C,u.props=v,u.state=u.__s,(c=$.__r)&&c(e),u.__d=!1,u.__v=e,u.__P=t,c=u.render(u.props,u.state,u.context),u.state=u.__s,u.getChildContext!=null&&(r=Le(Le({},r),u.getChildContext())),f||u.getSnapshotBeforeUpdate==null||(m=u.getSnapshotBeforeUpdate(d,p)),P=c!=null&&c.type===Ce&&c.key==null?c.props.children:c,Di(t,Array.isArray(P)?P:[P],e,n,r,o,i,a,s,l),u.base=e.__e,e.__h=null,u.__h.length&&a.push(u),b&&(u.__E=u.__=null),u.__e=!1}else i==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Zc(n.__e,e,n,r,o,i,a,l);(c=$.diffed)&&c(e)}catch(O){e.__v=null,(l||i!=null)&&(e.__e=s,e.__h=!!l,i[i.indexOf(s)]=null),$.__e(O,e,n)}}function Ri(t,e){$.__c&&$.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){$.__e(r,n.__v)}})}function Zc(t,e,n,r,o,i,a,s){var l,c,u,f=n.props,d=e.props,p=e.type,m=0;if(p==="svg"&&(o=!0),i!=null){for(;m<i.length;m++)if((l=i[m])&&"setAttribute"in l==!!p&&(p?l.localName===p:l.nodeType===3)){t=l,i[m]=null;break}}if(t==null){if(p===null)return document.createTextNode(d);t=o?document.createElementNS("http://www.w3.org/2000/svg",p):document.createElement(p,d.is&&d),i=null,s=!1}if(p===null)f===d||s&&t.data===d||(t.data=d);else{if(i=i&&ne.call(t.childNodes),c=(f=n.props||fn).dangerouslySetInnerHTML,u=d.dangerouslySetInnerHTML,!s){if(i!=null)for(f={},m=0;m<t.attributes.length;m++)f[t.attributes[m].name]=t.attributes[m].value;(u||c)&&(u&&(c&&u.__html==c.__html||u.__html===t.innerHTML)||(t.innerHTML=u&&u.__html||""))}if(Jc(t,d,f,o,s),u)e.__k=[];else if(m=e.props.children,Di(t,Array.isArray(m)?m:[m],e,n,r,o&&p!=="foreignObject",i,a,i?i[0]:n.__k&&pt(n,0),s),i!=null)for(m=i.length;m--;)i[m]!=null&&xi(i[m]);s||("value"in d&&(m=d.value)!==void 0&&(m!==f.value||m!==t.value||p==="progress"&&!m)&&pn(t,"value",m,f.value,!1),"checked"in d&&(m=d.checked)!==void 0&&m!==t.checked&&pn(t,"checked",m,f.checked,!1))}return t}function Ni(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){$.__e(r,n)}}function Li(t,e,n){var r,o;if($.unmount&&$.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||Ni(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){$.__e(i,e)}r.base=r.__P=null}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&Li(r[o],e,typeof t.type!="function");n||t.__e==null||xi(t.__e),t.__e=t.__d=void 0}function Qc(t,e,n){return this.constructor(t,n)}function Bt(t,e,n){var r,o,i;$.__&&$.__(t,e),o=(r=typeof n=="function")?null:n&&n.__k||e.__k,i=[],Pr(e,t=(!r&&n||e).__k=Q(Ce,null,[t]),o||fn,fn,e.ownerSVGElement!==void 0,!r&&n?[n]:o?null:e.firstChild?ne.call(e.childNodes):null,i,!r&&n?n:o?o.__e:e.firstChild,r),Ri(i,t)}function Bi(t,e){Bt(t,e,Bi)}function ef(t,e,n){var r,o,i,a=Le({},t.props);for(i in e)i=="key"?r=e[i]:i=="ref"?o=e[i]:a[i]=e[i];return arguments.length>2&&(a.children=arguments.length>3?ne.call(arguments,2):n),Lt(t.type,a,r||t.key,o||t.ref,null)}function Vt(t,e){var n={__c:e="__cC"+Oi++,__:t,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,i;return this.getChildContext||(o=[],(i={})[e]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(a){this.props.value!==a.value&&o.some(xr)},this.sub=function(a){o.push(a);var s=a.componentWillUnmount;a.componentWillUnmount=function(){o.splice(o.indexOf(a),1),s&&s.call(a)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}ne=$i.slice,$={__e:function(t,e){for(var n,r,o;e=e.__;)if((n=e.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(t)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(t),o=n.__d),o)return n.__E=n}catch(i){t=i}throw t}},Ci=0,J.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Le({},this.state),typeof t=="function"&&(t=t(Le({},n),this.props)),t&&Le(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),xr(this))},J.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),xr(this))},J.prototype.render=Ce,Nt=[],Ai=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,dn.__r=0,Oi=0;var et,re,Vi,ht=0,Dr=[],Hi=$.__b,Ui=$.__r,ji=$.diffed,zi=$.__c,Wi=$.unmount;function mt(t,e){$.__h&&$.__h(re,t,ht||e),ht=0;var n=re.__H||(re.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function Ve(t){return ht=1,Tr(Xi,t)}function Tr(t,e,n){var r=mt(et++,2);return r.t=t,r.__c||(r.__=[n?n(e):Xi(void 0,e),function(o){var i=r.t(r.__[0],o);r.__[0]!==i&&(r.__=[i,r.__[1]],r.__c.setState({}))}],r.__c=re),r.__}function tt(t,e){var n=mt(et++,3);!$.__s&&Fr(n.__H,e)&&(n.__=t,n.__H=e,re.__H.__h.push(n))}function Mr(t,e){var n=mt(et++,4);!$.__s&&Fr(n.__H,e)&&(n.__=t,n.__H=e,re.__h.push(n))}function $e(t){return ht=5,He(function(){return{current:t}},[])}function Gi(t,e,n){ht=6,Mr(function(){typeof t=="function"?t(e()):t&&(t.current=e())},n==null?n:n.concat(t))}function He(t,e){var n=mt(et++,7);return Fr(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function xe(t,e){return ht=8,He(function(){return t},e)}function Ht(t){var e=re.context[t.__c],n=mt(et++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(re)),e.props.value):t.__}function qi(t,e){$.useDebugValue&&$.useDebugValue(e?e(t):t)}function tf(t){var e=mt(et++,10),n=Ve();return e.__=t,re.componentDidCatch||(re.componentDidCatch=function(r){e.__&&e.__(r),n[1](r)}),[n[0],function(){n[1](void 0)}]}function nf(){var t;for(Dr.sort(function(e,n){return e.__v.__b-n.__v.__b});t=Dr.pop();)if(t.__P)try{t.__H.__h.forEach(hn),t.__H.__h.forEach(kr),t.__H.__h=[]}catch(e){t.__H.__h=[],$.__e(e,t.__v)}}$.__b=function(t){re=null,Hi&&Hi(t)},$.__r=function(t){Ui&&Ui(t),et=0;var e=(re=t.__c).__H;e&&(e.__h.forEach(hn),e.__h.forEach(kr),e.__h=[])},$.diffed=function(t){ji&&ji(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(Dr.push(e)!==1&&Vi===$.requestAnimationFrame||((Vi=$.requestAnimationFrame)||function(n){var r,o=function(){clearTimeout(i),Yi&&cancelAnimationFrame(r),setTimeout(n)},i=setTimeout(o,100);Yi&&(r=requestAnimationFrame(o))})(nf)),re=null},$.__c=function(t,e){e.some(function(n){try{n.__h.forEach(hn),n.__h=n.__h.filter(function(r){return!r.__||kr(r)})}catch(r){e.some(function(o){o.__h&&(o.__h=[])}),e=[],$.__e(r,n.__v)}}),zi&&zi(t,e)},$.unmount=function(t){Wi&&Wi(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{hn(r)}catch(o){e=o}}),e&&$.__e(e,n.__v))};var Yi=typeof requestAnimationFrame=="function";function hn(t){var e=re,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),re=e}function kr(t){var e=re;t.__c=t.__(),re=e}function Fr(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function Xi(t,e){return typeof e=="function"?e(t):e}function Ki(t,e){for(var n in e)t[n]=e[n];return t}function Ir(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function Ut(t){this.props=t}function Ji(t,e){function n(o){var i=this.props.ref,a=i==o.ref;return!a&&i&&(i.call?i(null):i.current=null),e?!e(this.props,o)||!a:Ir(this.props,o)}function r(o){return this.shouldComponentUpdate=n,Q(t,o)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(Ut.prototype=new J).isPureReactComponent=!0,Ut.prototype.shouldComponentUpdate=function(t,e){return Ir(this.props,t)||Ir(this.state,e)};var Zi=$.__b;$.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),Zi&&Zi(t)};var rf=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Rr(t){function e(n,r){var o=Ki({},n);return delete o.ref,t(o,(r=n.ref||r)&&(typeof r!="object"||"current"in r)?r:null)}return e.$$typeof=rf,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var Qi=function(t,e){return t==null?null:Be(Be(t).map(e))},ea={map:Qi,forEach:Qi,count:function(t){return t?Be(t).length:0},only:function(t){var e=Be(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:Be},of=$.__e;$.__e=function(t,e,n){if(t.then){for(var r,o=e;o=o.__;)if((r=o.__c)&&r.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),r.__c(t,e)}of(t,e,n)};var ta=$.unmount;function jt(){this.__u=0,this.t=null,this.__b=null}function na(t){var e=t.__.__c;return e&&e.__e&&e.__e(t)}function ra(t){var e,n,r;function o(i){if(e||(e=t()).then(function(a){n=a.default||a},function(a){r=a}),r)throw r;if(!n)throw e;return Q(n,i)}return o.displayName="Lazy",o.__f=!0,o}function vt(){this.u=null,this.o=null}$.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),ta&&ta(t)},(jt.prototype=new J).__c=function(t,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var o=na(r.__v),i=!1,a=function(){i||(i=!0,n.__R=null,o?o(s):s())};n.__R=a;var s=function(){if(!--r.__u){if(r.state.__e){var c=r.state.__e;r.__v.__k[0]=function f(d,p,m){return d&&(d.__v=null,d.__k=d.__k&&d.__k.map(function(b){return f(b,p,m)}),d.__c&&d.__c.__P===p&&(d.__e&&m.insertBefore(d.__e,d.__d),d.__c.__e=!0,d.__c.__P=m)),d}(c,c.__c.__P,c.__c.__O)}var u;for(r.setState({__e:r.__b=null});u=r.t.pop();)u.forceUpdate()}},l=e.__h===!0;r.__u++||l||r.setState({__e:r.__b=r.__v.__k[0]}),t.then(a,a)},jt.prototype.componentWillUnmount=function(){this.t=[]},jt.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function i(a,s,l){return a&&(a.__c&&a.__c.__H&&(a.__c.__H.__.forEach(function(c){typeof c.__c=="function"&&c.__c()}),a.__c.__H=null),(a=Ki({},a)).__c!=null&&(a.__c.__P===l&&(a.__c.__P=s),a.__c=null),a.__k=a.__k&&a.__k.map(function(c){return i(c,s,l)})),a}(this.__b,n,r.__O=r.__P)}this.__b=null}var o=e.__e&&Q(Ce,null,t.fallback);return o&&(o.__h=null),[Q(Ce,null,e.__e?null:t.children),o]};var oa=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};function af(t){return this.getChildContext=function(){return t.context},t.children}function sf(t){var e=this,n=t.i;e.componentWillUnmount=function(){Bt(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),t.__v?(e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),e.i.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),e.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.i.removeChild(r)}}),Bt(Q(af,{context:e.context},t.__v),e.l)):e.l&&e.componentWillUnmount()}function Nr(t,e){return Q(sf,{__v:t,i:e})}(vt.prototype=new J).__e=function(t){var e=this,n=na(e.__v),r=e.o.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),oa(e,t,r)):o()};n?n(i):i()}},vt.prototype.render=function(t){this.u=null,this.o=new Map;var e=Be(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},vt.prototype.componentDidUpdate=vt.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){oa(t,n,e)})};var ia=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,uf=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,lf=typeof document!="undefined",cf=function(t){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(t)};function aa(t,e,n){return e.__k==null&&(e.textContent=""),Bt(t,e),typeof n=="function"&&n(),t?t.__c:null}function sa(t,e,n){return Bi(t,e),typeof n=="function"&&n(),t?t.__c:null}J.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(J.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var ua=$.event;function ff(){}function df(){return this.cancelBubble}function pf(){return this.defaultPrevented}$.event=function(t){return ua&&(t=ua(t)),t.persist=ff,t.isPropagationStopped=df,t.isDefaultPrevented=pf,t.nativeEvent=t};var la,ca={configurable:!0,get:function(){return this.class}},fa=$.vnode;$.vnode=function(t){var e=t.type,n=t.props,r=n;if(typeof e=="string"){var o=e.indexOf("-")===-1;for(var i in r={},n){var a=n[i];lf&&i==="children"&&e==="noscript"||i==="value"&&"defaultValue"in n&&a==null||(i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&a===!0?a="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+e)&&!cf(n.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(i)?i=i.toLowerCase():o&&uf.test(i)?i=i.replace(/[A-Z0-9]/,"-$&").toLowerCase():a===null&&(a=void 0),r[i]=a)}e=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=Be(n.children).forEach(function(s){s.props.selected=r.value.indexOf(s.props.value)!=-1})),e=="select"&&r.defaultValue!=null&&(r.value=Be(n.children).forEach(function(s){s.props.selected=r.multiple?r.defaultValue.indexOf(s.props.value)!=-1:r.defaultValue==s.props.value})),t.props=r,n.class!=n.className&&(ca.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",ca))}t.$$typeof=ia,fa&&fa(t)};var da=$.__r;$.__r=function(t){da&&da(t),la=t.__c};var pa={ReactCurrentDispatcher:{current:{readContext:function(t){return la.__n[t.__c].props.value}}}},hf="17.0.2";function ha(t){return Q.bind(null,t)}function Lr(t){return!!t&&t.$$typeof===ia}function ma(t){return Lr(t)?ef.apply(null,arguments):t}function va(t){return!!t.__k&&(Bt(null,t),!0)}function ga(t){return t&&(t.base||t.nodeType===1&&t)||null}var ya=function(t,e){return t(e)},ba=function(t,e){return t(e)},mf=Ce,g={useState:Ve,useReducer:Tr,useEffect:tt,useLayoutEffect:Mr,useRef:$e,useImperativeHandle:Gi,useMemo:He,useCallback:xe,useContext:Ht,useDebugValue:qi,version:"17.0.2",Children:ea,render:aa,hydrate:sa,unmountComponentAtNode:va,createPortal:Nr,createElement:Q,createContext:Vt,createFactory:ha,cloneElement:ma,createRef:$r,Fragment:Ce,isValidElement:Lr,findDOMNode:ga,Component:J,PureComponent:Ut,memo:Ji,forwardRef:Rr,flushSync:ba,unstable_batchedUpdates:ya,StrictMode:Ce,Suspense:jt,SuspenseList:vt,lazy:ra,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:pa},Br=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:g,version:hf,Children:ea,render:aa,hydrate:sa,unmountComponentAtNode:va,createPortal:Nr,createFactory:ha,cloneElement:ma,isValidElement:Lr,findDOMNode:ga,PureComponent:Ut,memo:Ji,forwardRef:Rr,flushSync:ba,unstable_batchedUpdates:ya,StrictMode:mf,Suspense:jt,SuspenseList:vt,lazy:ra,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:pa,createElement:Q,createContext:Vt,createRef:$r,Fragment:Ce,Component:J,useState:Ve,useReducer:Tr,useEffect:tt,useLayoutEffect:Mr,useRef:$e,useImperativeHandle:Gi,useMemo:He,useCallback:xe,useContext:Ht,useDebugValue:qi,useErrorBoundary:tf}),nt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function vf(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Vr(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach(function(n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}),e}var Hr={exports:{}};function Ur(){}Ur.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;for(r;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},Hr.exports=Ur,Hr.exports.TinyEmitter=Ur;var mn=Hr.exports;const B="http://www.w3.org/2000/svg",jr=t=>{const e=t.getAttribute("class");return e?new Set(e.split(" ")):new Set},gt=(t,e)=>{const n=jr(t);n.add(e),t.setAttribute("class",Array.from(n).join(" "))},gf=(t,e)=>{const n=jr(t);n.delete(e),n.size===0?t.removeAttribute("class"):t.setAttribute("class",Array.from(n).join(" "))},Sa=(t,e)=>jr(t).has(e),vn=(t,e)=>{const n=t.selector("FragmentSelector");if(n!=null&&n.conformsTo.startsWith("http://www.w3.org/TR/media-frags")){const{value:r}=n,o=r.includes(":")?r.substring(r.indexOf("=")+1,r.indexOf(":")):"pixel",i=r.includes(":")?r.substring(r.indexOf(":")+1):r.substring(r.indexOf("=")+1);let[a,s,l,c]=i.split(",").map(parseFloat);return o.toLowerCase()==="percent"&&(a=a*e.naturalWidth/100,s=s*e.naturalHeight/100,l=l*e.naturalWidth/100,c=c*e.naturalHeight/100),{x:a,y:s,w:l,h:c}}},yf=(t,e,n,r,o)=>({source:o==null?void 0:o.src,selector:{type:"FragmentSelector",conformsTo:"http://www.w3.org/TR/media-frags/",value:`xywh=pixel:${t},${e},${n},${r}`}}),bf=(t,e,n,r,o)=>{const i=t/o.naturalWidth*100,a=e/o.naturalHeight*100,s=n/o.naturalWidth*100,l=r/o.naturalHeight*100;return{source:o.src,selector:{type:"FragmentSelector",conformsTo:"http://www.w3.org/TR/media-frags/",value:`xywh=percent:${i},${a},${s},${l}`}}},zr=(t,e,n,r,o,i)=>(i==null?void 0:i.toLowerCase())==="percent"?bf(t,e,n,r,o):yf(t,e,n,r,o),gn=(t,e,n,r,o)=>{t.setAttribute("x",e),t.setAttribute("y",n),t.setAttribute("width",r),t.setAttribute("height",o)},yn=(t,e,n)=>{t.setAttribute("cx",e),t.setAttribute("cy",n),t.setAttribute("r",7)},_a=(t,e,n,r,o)=>{const i=document.createElementNS(B,"path");i.setAttribute("fill-rule","evenodd");const{naturalWidth:a,naturalHeight:s}=t;return i.setAttribute("d",`M0 0 h${a} v${s} h-${a} z M${e} ${n} h${r} v${o} h-${r} z`),i},Ea=(t,e,n,r,o,i)=>{const{naturalWidth:a,naturalHeight:s}=e;t.setAttribute("d",`M0 0 h${a} v${s} h-${a} z M${n} ${r} h${o} v${i} h-${o} z`)},Wr=(t,e,n,r)=>{const{x:o,y:i,w:a,h:s}=t.type==="Annotation"||t.type==="Selection"?vn(t,e):{x:t,y:e,w:n,h:r},l=document.createElementNS(B,"g");if(a===0&&s===0){gt(l,"a9s-point"),gt(l,"a9s-non-scaling"),l.setAttribute("transform-origin",`${o} ${i}`);const c=document.createElementNS(B,"circle"),u=document.createElementNS(B,"circle");u.setAttribute("class","a9s-inner"),yn(u,o,i),c.setAttribute("class","a9s-outer"),yn(c,o,i),l.appendChild(c),l.appendChild(u)}else{const c=document.createElementNS(B,"rect"),u=document.createElementNS(B,"rect");u.setAttribute("class","a9s-inner"),gn(u,o,i,a,s),c.setAttribute("class","a9s-outer"),gn(c,o,i,a,s),l.appendChild(c),l.appendChild(u)}return l},Gr=t=>{const e=t.querySelector(".a9s-outer");if(e.nodeName==="rect"){const n=parseFloat(e.getAttribute("x")),r=parseFloat(e.getAttribute("y")),o=parseFloat(e.getAttribute("width")),i=parseFloat(e.getAttribute("height"));return{x:n,y:r,w:o,h:i}}else{const n=parseFloat(e.getAttribute("cx")),r=parseFloat(e.getAttribute("cy"));return{x:n,y:r,w:0,h:0}}},Ca=(t,e,n,r,o)=>{const i=t.querySelector(".a9s-inner"),a=t.querySelector(".a9s-outer");a.nodeName==="rect"?(gn(i,e,n,r,o),gn(a,e,n,r,o)):(yn(i,e,n),yn(a,e,n))},Sf=(t,e)=>{const{w:n,h:r}=vn(t,e);return n*r},bn=t=>{let e=0,n=t.length-1;for(let r=0;r<t.length;r++)e+=(t[n][0]+t[r][0])*(t[n][1]-t[r][1]),n=r;return Math.abs(.5*e)},_f=(t,e)=>{const n=t[0],r=t[1];let o=!1;for(let i=0,a=e.length-1;i<e.length;a=i++){const s=e[i][0],l=e[i][1],c=e[a][0],u=e[a][1];l>r!=u>r&&n<(c-s)*(r-l)/(u-l)+s&&(o=!o)}return o},Ef=(t,e)=>{for(let n of t)if(!_f(n,e))return!1;return!0},Cf=t=>{const e=t.getAttribute("d").split(/(?=M|m|L|l|H|h|V|v|Z|z)/g).map(o=>o.trim()),n=[];let r=[];for(let o of e){const i=o.substring(0,1);if(i.toLowerCase()==="z")n.push([...r]),r=[];else{const a=o.substring(1).split(" ").map(u=>parseFloat(u.trim())),s=i===i.toUpperCase(),l=s?a[0]:a[0]+r[r.length-1][0],c=s?a[1]:a[1]+r[r.length-1][1];r.push([l,c])}}return r.length>0&&n.push([...r]),n},Af=t=>{const r=new XMLSerializer().serializeToString(t.documentElement).replace("<svg>",`<svg xmlns="${B}">`);return new DOMParser().parseFromString(r,"image/svg+xml").documentElement},Aa=t=>{const e=r=>{Array.from(r.attributes).forEach(o=>{o.name.startsWith("on")&&r.removeAttribute(o.name)})},n=t.getElementsByTagName("script");return Array.from(n).reverse().forEach(r=>r.parentNode.removeChild(r)),e(t),Array.from(t.querySelectorAll("*")).forEach(e),t},qr=t=>{const e=t.selector("SvgSelector");if(e){const n=new DOMParser,{value:r}=e,o=n.parseFromString(r,"image/svg+xml"),i=o.lookupPrefix(B),a=o.lookupNamespaceURI(null);return i||a?Aa(o).firstChild:Aa(Af(o)).firstChild}},wa=t=>{const e=qr(t),n=document.createElementNS(B,"g"),r=e.cloneNode(!0);r.setAttribute("class","a9s-inner");const o=e.cloneNode(!0);return o.setAttribute("class","a9s-outer"),n.appendChild(o),n.appendChild(r),n},Yr=(t,e)=>{const n=t.querySelector(".a9s-inner").cloneNode(!0);n.removeAttribute("class"),n.removeAttribute("xmlns");let r=n.outerHTML||new XMLSerializer().serializeToString(n);return r=r.replace(` xmlns="${B}"`,""),{source:e==null?void 0:e.src,selector:{type:"SvgSelector",value:`<svg>${r}</svg>`}}},wf=t=>{const e=qr(t),n=e.nodeName.toLowerCase();if(n==="polygon")return Of(e);if(n==="circle")return $f(e);if(n==="ellipse")return xf(e);if(n=="path")return Pf(e);if(n=="line")return 0;throw`Unsupported SVG shape type: ${n}`},Of=t=>{const e=t.getAttribute("points").trim().split(" ").map(n=>n.split(",").map(r=>parseFloat(r.trim())));return bn(e)},$f=t=>{const e=t.getAttribute("r");return e*e*Math.PI},xf=t=>{const e=t.getAttribute("rx"),n=t.getAttribute("ry");return e*n*Math.PI},Pf=t=>{const e=Cf(t);if(e.length==1)return bn(e[0]);{const n=o=>e.find(i=>{if(o!==i)return Ef(o,i)});let r=0;for(let o of e)n(o)?r-=bn(o):r+=bn(o);return r}},Df={FragmentSelector:Wr,SvgSelector:wa},Tf={FragmentSelector:Sf,SvgSelector:wf},Oa=t=>{const e=t.targets[0];if(e)return Array.isArray(e.selector)?e.selector[0]:e.selector},Mf=(t,e)=>Df[Oa(t).type](t,e),Sn=(t,e)=>Tf[Oa(t).type](t,e);var _n={exports:{}},$a={},yt=Vr(Br),zt={exports:{}},kf="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ff=kf,If=Ff;function xa(){}function Pa(){}Pa.resetWarningCache=xa;var Rf=function(){function t(r,o,i,a,s,l){if(l!==If){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Pa,resetWarningCache:xa};return n.PropTypes=n,n};zt.exports=Rf();function Da(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=Da(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Nf(){for(var t=0,e,n,r="";t<arguments.length;)(e=arguments[t++])&&(n=Da(e))&&(r&&(r+=" "),r+=n);return r}var Lf=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Nf}),Bf=Vr(Lf),q={},Pe={};Object.defineProperty(Pe,"__esModule",{value:!0}),Pe.findInArray=Vf,Pe.isFunction=Hf,Pe.isNum=Uf,Pe.int=jf,Pe.dontSetMe=zf;function Vf(t,e){for(var n=0,r=t.length;n<r;n++)if(e.apply(e,[t[n],n,t]))return t[n]}function Hf(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Function]"}function Uf(t){return typeof t=="number"&&!isNaN(t)}function jf(t){return parseInt(t,10)}function zf(t,e,n){if(t[e])return new Error("Invalid prop ".concat(e," passed to ").concat(n," - do not set this, set it on the child."))}var rt={};Object.defineProperty(rt,"__esModule",{value:!0}),rt.getPrefix=Ta,rt.browserPrefixToKey=Ma,rt.browserPrefixToStyle=Wf,rt.default=void 0;var Xr=["Moz","Webkit","O","ms"];function Ta(){var t,e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window=="undefined")return"";var r=(t=window.document)===null||t===void 0||(e=t.documentElement)===null||e===void 0?void 0:e.style;if(!r||n in r)return"";for(var o=0;o<Xr.length;o++)if(Ma(n,Xr[o])in r)return Xr[o];return""}function Ma(t,e){return e?"".concat(e).concat(Gf(t)):t}function Wf(t,e){return e?"-".concat(e.toLowerCase(),"-").concat(t):t}function Gf(t){for(var e="",n=!0,r=0;r<t.length;r++)n?(e+=t[r].toUpperCase(),n=!1):t[r]==="-"?n=!0:e+=t[r];return e}var qf=Ta();rt.default=qf;function En(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?En=function(n){return typeof n}:En=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},En(t)}Object.defineProperty(q,"__esModule",{value:!0}),q.matchesSelector=La,q.matchesSelectorAndParentsTo=Xf,q.addEvent=Kf,q.removeEvent=Jf,q.outerHeight=Zf,q.outerWidth=Qf,q.innerHeight=ed,q.innerWidth=td,q.offsetXYFromParent=nd,q.createCSSTransform=rd,q.createSVGTransform=od,q.getTranslation=Kr,q.getTouch=id,q.getTouchIdentifier=ad,q.addUserSelectStyles=sd,q.removeUserSelectStyles=ud,q.addClassName=Ba,q.removeClassName=Va;var ge=Pe,ka=Yf(rt);function Fa(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(Fa=function(o){return o?n:e})(t)}function Yf(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||En(t)!=="object"&&typeof t!="function")return{default:t};var n=Fa(e);if(n&&n.has(t))return n.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(i!=="default"&&Object.prototype.hasOwnProperty.call(t,i)){var a=o?Object.getOwnPropertyDescriptor(t,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=t[i]}return r.default=t,n&&n.set(t,r),r}function Ia(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function Ra(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ia(Object(n),!0).forEach(function(r){Na(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ia(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Na(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Cn="";function La(t,e){return Cn||(Cn=(0,ge.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,ge.isFunction)(t[n])})),(0,ge.isFunction)(t[Cn])?t[Cn](e):!1}function Xf(t,e,n){var r=t;do{if(La(r,e))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function Kf(t,e,n,r){if(!!t){var o=Ra({capture:!0},r);t.addEventListener?t.addEventListener(e,n,o):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n}}function Jf(t,e,n,r){if(!!t){var o=Ra({capture:!0},r);t.removeEventListener?t.removeEventListener(e,n,o):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=null}}function Zf(t){var e=t.clientHeight,n=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,ge.int)(n.borderTopWidth),e+=(0,ge.int)(n.borderBottomWidth),e}function Qf(t){var e=t.clientWidth,n=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,ge.int)(n.borderLeftWidth),e+=(0,ge.int)(n.borderRightWidth),e}function ed(t){var e=t.clientHeight,n=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,ge.int)(n.paddingTop),e-=(0,ge.int)(n.paddingBottom),e}function td(t){var e=t.clientWidth,n=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,ge.int)(n.paddingLeft),e-=(0,ge.int)(n.paddingRight),e}function nd(t,e,n){var r=e===e.ownerDocument.body,o=r?{left:0,top:0}:e.getBoundingClientRect(),i=(t.clientX+e.scrollLeft-o.left)/n,a=(t.clientY+e.scrollTop-o.top)/n;return{x:i,y:a}}function rd(t,e){var n=Kr(t,e,"px");return Na({},(0,ka.browserPrefixToKey)("transform",ka.default),n)}function od(t,e){var n=Kr(t,e,"");return n}function Kr(t,e,n){var r=t.x,o=t.y,i="translate(".concat(r).concat(n,",").concat(o).concat(n,")");if(e){var a="".concat(typeof e.x=="string"?e.x:e.x+n),s="".concat(typeof e.y=="string"?e.y:e.y+n);i="translate(".concat(a,", ").concat(s,")")+i}return i}function id(t,e){return t.targetTouches&&(0,ge.findInArray)(t.targetTouches,function(n){return e===n.identifier})||t.changedTouches&&(0,ge.findInArray)(t.changedTouches,function(n){return e===n.identifier})}function ad(t){if(t.targetTouches&&t.targetTouches[0])return t.targetTouches[0].identifier;if(t.changedTouches&&t.changedTouches[0])return t.changedTouches[0].identifier}function sd(t){if(!!t){var e=t.getElementById("react-draggable-style-el");e||(e=t.createElement("style"),e.type="text/css",e.id="react-draggable-style-el",e.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,e.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,t.getElementsByTagName("head")[0].appendChild(e)),t.body&&Ba(t.body,"react-draggable-transparent-selection")}}function ud(t){if(!!t)try{if(t.body&&Va(t.body,"react-draggable-transparent-selection"),t.selection)t.selection.empty();else{var e=(t.defaultView||window).getSelection();e&&e.type!=="Caret"&&e.removeAllRanges()}}catch{}}function Ba(t,e){t.classList?t.classList.add(e):t.className.match(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)")))||(t.className+=" ".concat(e))}function Va(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)"),"g"),"")}var De={};Object.defineProperty(De,"__esModule",{value:!0}),De.getBoundPosition=ld,De.snapToGrid=cd,De.canDragX=fd,De.canDragY=dd,De.getControlPosition=pd,De.createCoreData=hd,De.createDraggableData=md;var ye=Pe,bt=q;function ld(t,e,n){if(!t.props.bounds)return[e,n];var r=t.props.bounds;r=typeof r=="string"?r:vd(r);var o=Jr(t);if(typeof r=="string"){var i=o.ownerDocument,a=i.defaultView,s;if(r==="parent"?s=o.parentNode:s=i.querySelector(r),!(s instanceof a.HTMLElement))throw new Error('Bounds selector "'+r+'" could not find an element.');var l=s,c=a.getComputedStyle(o),u=a.getComputedStyle(l);r={left:-o.offsetLeft+(0,ye.int)(u.paddingLeft)+(0,ye.int)(c.marginLeft),top:-o.offsetTop+(0,ye.int)(u.paddingTop)+(0,ye.int)(c.marginTop),right:(0,bt.innerWidth)(l)-(0,bt.outerWidth)(o)-o.offsetLeft+(0,ye.int)(u.paddingRight)-(0,ye.int)(c.marginRight),bottom:(0,bt.innerHeight)(l)-(0,bt.outerHeight)(o)-o.offsetTop+(0,ye.int)(u.paddingBottom)-(0,ye.int)(c.marginBottom)}}return(0,ye.isNum)(r.right)&&(e=Math.min(e,r.right)),(0,ye.isNum)(r.bottom)&&(n=Math.min(n,r.bottom)),(0,ye.isNum)(r.left)&&(e=Math.max(e,r.left)),(0,ye.isNum)(r.top)&&(n=Math.max(n,r.top)),[e,n]}function cd(t,e,n){var r=Math.round(e/t[0])*t[0],o=Math.round(n/t[1])*t[1];return[r,o]}function fd(t){return t.props.axis==="both"||t.props.axis==="x"}function dd(t){return t.props.axis==="both"||t.props.axis==="y"}function pd(t,e,n){var r=typeof e=="number"?(0,bt.getTouch)(t,e):null;if(typeof e=="number"&&!r)return null;var o=Jr(n),i=n.props.offsetParent||o.offsetParent||o.ownerDocument.body;return(0,bt.offsetXYFromParent)(r||t,i,n.props.scale)}function hd(t,e,n){var r=t.state,o=!(0,ye.isNum)(r.lastX),i=Jr(t);return o?{node:i,deltaX:0,deltaY:0,lastX:e,lastY:n,x:e,y:n}:{node:i,deltaX:e-r.lastX,deltaY:n-r.lastY,lastX:r.lastX,lastY:r.lastY,x:e,y:n}}function md(t,e){var n=t.props.scale;return{node:e.node,x:t.state.x+e.deltaX/n,y:t.state.y+e.deltaY/n,deltaX:e.deltaX/n,deltaY:e.deltaY/n,lastX:t.state.x,lastY:t.state.y}}function vd(t){return{left:t.left,top:t.top,right:t.right,bottom:t.bottom}}function Jr(t){var e=t.findDOMNode();if(!e)throw new Error("<DraggableCore>: Unmounted during event!");return e}var An={},wn={};Object.defineProperty(wn,"__esModule",{value:!0}),wn.default=gd;function gd(){}function Wt(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Wt=function(n){return typeof n}:Wt=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Wt(t)}Object.defineProperty(An,"__esModule",{value:!0}),An.default=void 0;var Zr=bd(yt),be=eo(zt.exports),yd=eo(yt),se=q,ot=De,Qr=Pe,Gt=eo(wn);function eo(t){return t&&t.__esModule?t:{default:t}}function Ha(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(Ha=function(o){return o?n:e})(t)}function bd(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||Wt(t)!=="object"&&typeof t!="function")return{default:t};var n=Ha(e);if(n&&n.has(t))return n.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(i!=="default"&&Object.prototype.hasOwnProperty.call(t,i)){var a=o?Object.getOwnPropertyDescriptor(t,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=t[i]}return r.default=t,n&&n.set(t,r),r}function Sd(t,e){return Ad(t)||Cd(t,e)||Ed(t,e)||_d()}function _d(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ed(t,e){if(!!t){if(typeof t=="string")return Ua(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ua(t,e)}}function Ua(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Cd(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],o=!0,i=!1,a,s;try{for(n=n.call(t);!(o=(a=n.next()).done)&&(r.push(a.value),!(e&&r.length===e));o=!0);}catch(l){i=!0,s=l}finally{try{!o&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ad(t){if(Array.isArray(t))return t}function wd(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ja(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Od(t,e,n){return e&&ja(t.prototype,e),n&&ja(t,n),t}function $d(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&to(t,e)}function to(t,e){return to=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},to(t,e)}function xd(t){var e=Dd();return function(){var r=On(t),o;if(e){var i=On(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return Pd(this,o)}}function Pd(t,e){if(e&&(Wt(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ue(t)}function ue(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Dd(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function On(t){return On=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},On(t)}function Ae(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Oe={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}},Ge=Oe.mouse,$n=function(t){$d(n,t);var e=xd(n);function n(){var r;wd(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=e.call.apply(e,[this].concat(i)),Ae(ue(r),"state",{dragging:!1,lastX:NaN,lastY:NaN,touchIdentifier:null}),Ae(ue(r),"mounted",!1),Ae(ue(r),"handleDragStart",function(s){if(r.props.onMouseDown(s),!r.props.allowAnyClick&&typeof s.button=="number"&&s.button!==0)return!1;var l=r.findDOMNode();if(!l||!l.ownerDocument||!l.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");var c=l.ownerDocument;if(!(r.props.disabled||!(s.target instanceof c.defaultView.Node)||r.props.handle&&!(0,se.matchesSelectorAndParentsTo)(s.target,r.props.handle,l)||r.props.cancel&&(0,se.matchesSelectorAndParentsTo)(s.target,r.props.cancel,l))){s.type==="touchstart"&&s.preventDefault();var u=(0,se.getTouchIdentifier)(s);r.setState({touchIdentifier:u});var f=(0,ot.getControlPosition)(s,u,ue(r));if(f!=null){var d=f.x,p=f.y,m=(0,ot.createCoreData)(ue(r),d,p);(0,Gt.default)("DraggableCore: handleDragStart: %j",m),(0,Gt.default)("calling",r.props.onStart);var b=r.props.onStart(s,m);b===!1||r.mounted===!1||(r.props.enableUserSelectHack&&(0,se.addUserSelectStyles)(c),r.setState({dragging:!0,lastX:d,lastY:p}),(0,se.addEvent)(c,Ge.move,r.handleDrag),(0,se.addEvent)(c,Ge.stop,r.handleDragStop))}}}),Ae(ue(r),"handleDrag",function(s){var l=(0,ot.getControlPosition)(s,r.state.touchIdentifier,ue(r));if(l!=null){var c=l.x,u=l.y;if(Array.isArray(r.props.grid)){var f=c-r.state.lastX,d=u-r.state.lastY,p=(0,ot.snapToGrid)(r.props.grid,f,d),m=Sd(p,2);if(f=m[0],d=m[1],!f&&!d)return;c=r.state.lastX+f,u=r.state.lastY+d}var b=(0,ot.createCoreData)(ue(r),c,u);(0,Gt.default)("DraggableCore: handleDrag: %j",b);var v=r.props.onDrag(s,b);if(v===!1||r.mounted===!1){try{r.handleDragStop(new MouseEvent("mouseup"))}catch{var S=document.createEvent("MouseEvents");S.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),r.handleDragStop(S)}return}r.setState({lastX:c,lastY:u})}}),Ae(ue(r),"handleDragStop",function(s){if(!!r.state.dragging){var l=(0,ot.getControlPosition)(s,r.state.touchIdentifier,ue(r));if(l!=null){var c=l.x,u=l.y,f=(0,ot.createCoreData)(ue(r),c,u),d=r.props.onStop(s,f);if(d===!1||r.mounted===!1)return!1;var p=r.findDOMNode();p&&r.props.enableUserSelectHack&&(0,se.removeUserSelectStyles)(p.ownerDocument),(0,Gt.default)("DraggableCore: handleDragStop: %j",f),r.setState({dragging:!1,lastX:NaN,lastY:NaN}),p&&((0,Gt.default)("DraggableCore: Removing handlers"),(0,se.removeEvent)(p.ownerDocument,Ge.move,r.handleDrag),(0,se.removeEvent)(p.ownerDocument,Ge.stop,r.handleDragStop))}}}),Ae(ue(r),"onMouseDown",function(s){return Ge=Oe.mouse,r.handleDragStart(s)}),Ae(ue(r),"onMouseUp",function(s){return Ge=Oe.mouse,r.handleDragStop(s)}),Ae(ue(r),"onTouchStart",function(s){return Ge=Oe.touch,r.handleDragStart(s)}),Ae(ue(r),"onTouchEnd",function(s){return Ge=Oe.touch,r.handleDragStop(s)}),r}return Od(n,[{key:"componentDidMount",value:function(){this.mounted=!0;var o=this.findDOMNode();o&&(0,se.addEvent)(o,Oe.touch.start,this.onTouchStart,{passive:!1})}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var o=this.findDOMNode();if(o){var i=o.ownerDocument;(0,se.removeEvent)(i,Oe.mouse.move,this.handleDrag),(0,se.removeEvent)(i,Oe.touch.move,this.handleDrag),(0,se.removeEvent)(i,Oe.mouse.stop,this.handleDragStop),(0,se.removeEvent)(i,Oe.touch.stop,this.handleDragStop),(0,se.removeEvent)(o,Oe.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,se.removeUserSelectStyles)(i)}}},{key:"findDOMNode",value:function(){var o,i,a;return(o=(i=this.props)===null||i===void 0||(a=i.nodeRef)===null||a===void 0?void 0:a.current)!==null&&o!==void 0?o:yd.default.findDOMNode(this)}},{key:"render",value:function(){return Zr.cloneElement(Zr.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}]),n}(Zr.Component);An.default=$n,Ae($n,"displayName","DraggableCore"),Ae($n,"propTypes",{allowAnyClick:be.default.bool,disabled:be.default.bool,enableUserSelectHack:be.default.bool,offsetParent:function(e,n){if(e[n]&&e[n].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:be.default.arrayOf(be.default.number),handle:be.default.string,cancel:be.default.string,nodeRef:be.default.object,onStart:be.default.func,onDrag:be.default.func,onStop:be.default.func,onMouseDown:be.default.func,scale:be.default.number,className:Qr.dontSetMe,style:Qr.dontSetMe,transform:Qr.dontSetMe}),Ae($n,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1}),function(t){function e(y){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?e=function(E){return typeof E}:e=function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},e(y)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return c.default}}),t.default=void 0;var n=m(yt),r=d(zt.exports),o=d(yt),i=d(Bf),a=q,s=De,l=Pe,c=d(An),u=d(wn),f=["axis","bounds","children","defaultPosition","defaultClassName","defaultClassNameDragging","defaultClassNameDragged","position","positionOffset","scale"];function d(y){return y&&y.__esModule?y:{default:y}}function p(y){if(typeof WeakMap!="function")return null;var _=new WeakMap,E=new WeakMap;return(p=function(w){return w?E:_})(y)}function m(y,_){if(!_&&y&&y.__esModule)return y;if(y===null||e(y)!=="object"&&typeof y!="function")return{default:y};var E=p(_);if(E&&E.has(y))return E.get(y);var A={},w=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in y)if(D!=="default"&&Object.prototype.hasOwnProperty.call(y,D)){var I=w?Object.getOwnPropertyDescriptor(y,D):null;I&&(I.get||I.set)?Object.defineProperty(A,D,I):A[D]=y[D]}return A.default=y,E&&E.set(y,A),A}function b(){return b=Object.assign||function(y){for(var _=1;_<arguments.length;_++){var E=arguments[_];for(var A in E)Object.prototype.hasOwnProperty.call(E,A)&&(y[A]=E[A])}return y},b.apply(this,arguments)}function v(y,_){if(y==null)return{};var E=S(y,_),A,w;if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(y);for(w=0;w<D.length;w++)A=D[w],!(_.indexOf(A)>=0)&&(!Object.prototype.propertyIsEnumerable.call(y,A)||(E[A]=y[A]))}return E}function S(y,_){if(y==null)return{};var E={},A=Object.keys(y),w,D;for(D=0;D<A.length;D++)w=A[D],!(_.indexOf(w)>=0)&&(E[w]=y[w]);return E}function C(y,_){var E=Object.keys(y);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(y);_&&(A=A.filter(function(w){return Object.getOwnPropertyDescriptor(y,w).enumerable})),E.push.apply(E,A)}return E}function P(y){for(var _=1;_<arguments.length;_++){var E=arguments[_]!=null?arguments[_]:{};_%2?C(Object(E),!0).forEach(function(A){we(y,A,E[A])}):Object.getOwnPropertyDescriptors?Object.defineProperties(y,Object.getOwnPropertyDescriptors(E)):C(Object(E)).forEach(function(A){Object.defineProperty(y,A,Object.getOwnPropertyDescriptor(E,A))})}return y}function F(y,_){return H(y)||X(y,_)||k(y,_)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(y,_){if(!!y){if(typeof y=="string")return x(y,_);var E=Object.prototype.toString.call(y).slice(8,-1);if(E==="Object"&&y.constructor&&(E=y.constructor.name),E==="Map"||E==="Set")return Array.from(y);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return x(y,_)}}function x(y,_){(_==null||_>y.length)&&(_=y.length);for(var E=0,A=new Array(_);E<_;E++)A[E]=y[E];return A}function X(y,_){var E=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(E!=null){var A=[],w=!0,D=!1,I,j;try{for(E=E.call(y);!(w=(I=E.next()).done)&&(A.push(I.value),!(_&&A.length===_));w=!0);}catch(U){D=!0,j=U}finally{try{!w&&E.return!=null&&E.return()}finally{if(D)throw j}}return A}}function H(y){if(Array.isArray(y))return y}function fe(y,_){if(!(y instanceof _))throw new TypeError("Cannot call a class as a function")}function W(y,_){for(var E=0;E<_.length;E++){var A=_[E];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(y,A.key,A)}}function z(y,_,E){return _&&W(y.prototype,_),E&&W(y,E),y}function Y(y,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function");y.prototype=Object.create(_&&_.prototype,{constructor:{value:y,writable:!0,configurable:!0}}),_&&de(y,_)}function de(y,_){return de=Object.setPrototypeOf||function(A,w){return A.__proto__=w,A},de(y,_)}function Ie(y){var _=ln();return function(){var A=Re(y),w;if(_){var D=Re(this).constructor;w=Reflect.construct(A,arguments,D)}else w=A.apply(this,arguments);return he(this,w)}}function he(y,_){if(_&&(e(_)==="object"||typeof _=="function"))return _;if(_!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return te(y)}function te(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}function ln(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Re(y){return Re=Object.setPrototypeOf?Object.getPrototypeOf:function(E){return E.__proto__||Object.getPrototypeOf(E)},Re(y)}function we(y,_,E){return _ in y?Object.defineProperty(y,_,{value:E,enumerable:!0,configurable:!0,writable:!0}):y[_]=E,y}var dt=function(y){Y(E,y);var _=Ie(E);function E(A){var w;return fe(this,E),w=_.call(this,A),we(te(w),"onDragStart",function(D,I){(0,u.default)("Draggable: onDragStart: %j",I);var j=w.props.onStart(D,(0,s.createDraggableData)(te(w),I));if(j===!1)return!1;w.setState({dragging:!0,dragged:!0})}),we(te(w),"onDrag",function(D,I){if(!w.state.dragging)return!1;(0,u.default)("Draggable: onDrag: %j",I);var j=(0,s.createDraggableData)(te(w),I),U={x:j.x,y:j.y};if(w.props.bounds){var Ze=U.x,We=U.y;U.x+=w.state.slackX,U.y+=w.state.slackY;var Qe=(0,s.getBoundPosition)(te(w),U.x,U.y),Ne=F(Qe,2),cn=Ne[0],wr=Ne[1];U.x=cn,U.y=wr,U.slackX=w.state.slackX+(Ze-U.x),U.slackY=w.state.slackY+(We-U.y),j.x=U.x,j.y=U.y,j.deltaX=U.x-w.state.x,j.deltaY=U.y-w.state.y}var Or=w.props.onDrag(D,j);if(Or===!1)return!1;w.setState(U)}),we(te(w),"onDragStop",function(D,I){if(!w.state.dragging)return!1;var j=w.props.onStop(D,(0,s.createDraggableData)(te(w),I));if(j===!1)return!1;(0,u.default)("Draggable: onDragStop: %j",I);var U={dragging:!1,slackX:0,slackY:0},Ze=Boolean(w.props.position);if(Ze){var We=w.props.position,Qe=We.x,Ne=We.y;U.x=Qe,U.y=Ne}w.setState(U)}),w.state={dragging:!1,dragged:!1,x:A.position?A.position.x:A.defaultPosition.x,y:A.position?A.position.y:A.defaultPosition.y,prevPropsPosition:P({},A.position),slackX:0,slackY:0,isElementSVG:!1},A.position&&!(A.onDrag||A.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."),w}return z(E,[{key:"componentDidMount",value:function(){typeof window.SVGElement!="undefined"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}},{key:"componentWillUnmount",value:function(){this.setState({dragging:!1})}},{key:"findDOMNode",value:function(){var w,D,I;return(w=(D=this.props)===null||D===void 0||(I=D.nodeRef)===null||I===void 0?void 0:I.current)!==null&&w!==void 0?w:o.default.findDOMNode(this)}},{key:"render",value:function(){var w,D=this.props;D.axis,D.bounds;var I=D.children,j=D.defaultPosition,U=D.defaultClassName,Ze=D.defaultClassNameDragging,We=D.defaultClassNameDragged,Qe=D.position,Ne=D.positionOffset;D.scale;var cn=v(D,f),wr={},Or=null,BS=Boolean(Qe),qc=!BS||this.state.dragging,Yc=Qe||j,Xc={x:(0,s.canDragX)(this)&&qc?this.state.x:Yc.x,y:(0,s.canDragY)(this)&&qc?this.state.y:Yc.y};this.state.isElementSVG?Or=(0,a.createSVGTransform)(Xc,Ne):wr=(0,a.createCSSTransform)(Xc,Ne);var VS=(0,i.default)(I.props.className||"",U,(w={},we(w,Ze,this.state.dragging),we(w,We,this.state.dragged),w));return n.createElement(c.default,b({},cn,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),n.cloneElement(n.Children.only(I),{className:VS,style:P(P({},I.props.style),wr),transform:Or}))}}],[{key:"getDerivedStateFromProps",value:function(w,D){var I=w.position,j=D.prevPropsPosition;return I&&(!j||I.x!==j.x||I.y!==j.y)?((0,u.default)("Draggable: getDerivedStateFromProps %j",{position:I,prevPropsPosition:j}),{x:I.x,y:I.y,prevPropsPosition:P({},I)}):null}}]),E}(n.Component);t.default=dt,we(dt,"displayName","Draggable"),we(dt,"propTypes",P(P({},c.default.propTypes),{},{axis:r.default.oneOf(["both","x","y","none"]),bounds:r.default.oneOfType([r.default.shape({left:r.default.number,right:r.default.number,top:r.default.number,bottom:r.default.number}),r.default.string,r.default.oneOf([!1])]),defaultClassName:r.default.string,defaultClassNameDragging:r.default.string,defaultClassNameDragged:r.default.string,defaultPosition:r.default.shape({x:r.default.number,y:r.default.number}),positionOffset:r.default.shape({x:r.default.oneOfType([r.default.number,r.default.string]),y:r.default.oneOfType([r.default.number,r.default.string])}),position:r.default.shape({x:r.default.number,y:r.default.number}),className:l.dontSetMe,style:l.dontSetMe,transform:l.dontSetMe})),we(dt,"defaultProps",P(P({},c.default.defaultProps),{},{axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1}))}($a);var za=$a,Wa=za.default,Td=za.DraggableCore;_n.exports=Wa,_n.exports.default=Wa,_n.exports.DraggableCore=Td;var Md=_n.exports,kd=["second","minute","hour","day","week","month","year"];function Fd(t,e){if(e===0)return["just now","right now"];var n=kd[Math.floor(e/2)];return t>1&&(n+="s"),[t+" "+n+" ago","in "+t+" "+n]}var Id=["\u79D2","\u5206\u949F","\u5C0F\u65F6","\u5929","\u5468","\u4E2A\u6708","\u5E74"];function Rd(t,e){if(e===0)return["\u521A\u521A","\u7247\u523B\u540E"];var n=Id[~~(e/2)];return[t+" "+n+"\u524D",t+" "+n+"\u540E"]}var no={},G=function(t,e){no[t]=e},Ga=function(t){return no[t]||no.en_US},it=[60,60,24,7,365/7/12,12];function qa(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(parseInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(t))}function Ya(t,e){var n=t<0?1:0;t=Math.abs(t);for(var r=t,o=0;t>=it[o]&&o<it.length;o++)t/=it[o];return t=Math.floor(t),o*=2,t>(o===0?9:1)&&(o+=1),e(t,o,r)[n].replace("%s",t.toString())}function Xa(t,e){var n=e?qa(e):new Date;return(+n-+qa(t))/1e3}function Nd(t){for(var e=1,n=0,r=Math.abs(t);t>=it[n]&&n<it.length;n++)t/=it[n],e*=it[n];return r=r%e,r=r?e-r:e,Math.ceil(r)}var Ld=function(t,e,n){var r=Xa(t,n&&n.relativeDate);return Ya(r,Ga(e))},Ka="timeago-id";function Bd(t){return t.getAttribute("datetime")}function Vd(t,e){t.setAttribute(Ka,e)}function Ja(t){return parseInt(t.getAttribute(Ka))}var ro={},oo=function(t){clearTimeout(t),delete ro[t]};function Za(t,e,n,r){oo(Ja(t));var o=r.relativeDate,i=r.minInterval,a=Xa(e,o);t.innerText=Ya(a,n);var s=setTimeout(function(){Za(t,e,n,r)},Math.min(Math.max(Nd(a),i||1)*1e3,2147483647));ro[s]=0,Vd(t,s)}function Qa(t){t?oo(Ja(t)):Object.keys(ro).forEach(oo)}function Hd(t,e,n){var r=t.length?t:[t];return r.forEach(function(o){Za(o,Bd(o),Ga(e),n||{})}),r}G("en_US",Fd),G("zh_CN",Rd);var Ud=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)o.hasOwnProperty(i)&&(r[i]=o[i])},t(e,n)};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),io=globalThis&&globalThis.__assign||function(){return io=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},io.apply(this,arguments)},jd=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n},zd=function(t){return""+(t instanceof Date?t.getTime():t)},Wd=function(t){Ud(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.dom=null,n}return e.prototype.componentDidMount=function(){this.renderTimeAgo()},e.prototype.componentDidUpdate=function(){this.renderTimeAgo()},e.prototype.renderTimeAgo=function(){var n=this.props,r=n.live,o=n.datetime,i=n.locale,a=n.opts;Qa(this.dom),r!==!1&&(this.dom.setAttribute("datetime",zd(o)),Hd(this.dom,i,a))},e.prototype.componentWillUnmount=function(){Qa(this.dom)},e.prototype.render=function(){var n=this,r=this.props,o=r.datetime;r.live;var i=r.locale,a=r.opts,s=jd(r,["datetime","live","locale","opts"]);return Q("time",io({ref:function(l){n.dom=l}},s),Ld(o,i,a))},e.defaultProps={live:!0,className:""},e}(Ut);function Gd(t,e){const n=r=>{t.current&&!t.current.contains(event.target)&&e()};tt(()=>(document.addEventListener("mousedown",n),()=>document.removeEventListener("mousedown",n)))}var es=Object.prototype.toString,ts=function(e){var n=es.call(e),r=n==="[object Arguments]";return r||(r=n!=="[object Array]"&&e!==null&&typeof e=="object"&&typeof e.length=="number"&&e.length>=0&&es.call(e.callee)==="[object Function]"),r},ns;if(!Object.keys){var xn=Object.prototype.hasOwnProperty,rs=Object.prototype.toString,qd=ts,os=Object.prototype.propertyIsEnumerable,Yd=!os.call({toString:null},"toString"),Xd=os.call(function(){},"prototype"),Pn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],ao=function(t){var e=t.constructor;return e&&e.prototype===t},Kd={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},Jd=function(){if(typeof window=="undefined")return!1;for(var t in window)try{if(!Kd["$"+t]&&xn.call(window,t)&&window[t]!==null&&typeof window[t]=="object")try{ao(window[t])}catch{return!0}}catch{return!0}return!1}(),Zd=function(t){if(typeof window=="undefined"||!Jd)return ao(t);try{return ao(t)}catch{return!1}};ns=function(e){var n=e!==null&&typeof e=="object",r=rs.call(e)==="[object Function]",o=qd(e),i=n&&rs.call(e)==="[object String]",a=[];if(!n&&!r&&!o)throw new TypeError("Object.keys called on a non-object");var s=Xd&&r;if(i&&e.length>0&&!xn.call(e,0))for(var l=0;l<e.length;++l)a.push(String(l));if(o&&e.length>0)for(var c=0;c<e.length;++c)a.push(String(c));else for(var u in e)!(s&&u==="prototype")&&xn.call(e,u)&&a.push(String(u));if(Yd)for(var f=Zd(e),d=0;d<Pn.length;++d)!(f&&Pn[d]==="constructor")&&xn.call(e,Pn[d])&&a.push(Pn[d]);return a}}var Qd=ns,ep=Array.prototype.slice,tp=ts,is=Object.keys,Dn=is?function(e){return is(e)}:Qd,as=Object.keys;Dn.shim=function(){if(Object.keys){var e=function(){var n=Object.keys(arguments);return n&&n.length===arguments.length}(1,2);e||(Object.keys=function(r){return tp(r)?as(ep.call(r)):as(r)})}else Object.keys=Dn;return Object.keys||Dn};var np=Dn,rp=np,op=typeof Symbol=="function"&&typeof Symbol("foo")=="symbol",ip=Object.prototype.toString,ap=Array.prototype.concat,so=Object.defineProperty,sp=function(t){return typeof t=="function"&&ip.call(t)==="[object Function]"},up=function(){var t={};try{so(t,"x",{enumerable:!1,value:t});for(var e in t)return!1;return t.x===t}catch{return!1}},ss=so&&up(),lp=function(t,e,n,r){e in t&&(!sp(r)||!r())||(ss?so(t,e,{configurable:!0,enumerable:!1,value:n,writable:!0}):t[e]=n)},us=function(t,e){var n=arguments.length>2?arguments[2]:{},r=rp(e);op&&(r=ap.call(r,Object.getOwnPropertySymbols(e)));for(var o=0;o<r.length;o+=1)lp(t,r[o],e[r[o]],n[r[o]])};us.supportsDescriptors=!!ss;var St=us,_t={exports:{}},cp="Function.prototype.bind called on incompatible ",uo=Array.prototype.slice,fp=Object.prototype.toString,dp="[object Function]",pp=function(e){var n=this;if(typeof n!="function"||fp.call(n)!==dp)throw new TypeError(cp+n);for(var r=uo.call(arguments,1),o,i=function(){if(this instanceof o){var u=n.apply(this,r.concat(uo.call(arguments)));return Object(u)===u?u:this}else return n.apply(e,r.concat(uo.call(arguments)))},a=Math.max(0,n.length-r.length),s=[],l=0;l<a;l++)s.push("$"+l);if(o=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")(i),n.prototype){var c=function(){};c.prototype=n.prototype,o.prototype=new c,c.prototype=null}return o},hp=pp,lo=Function.prototype.bind||hp,ls=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},n=Symbol("test"),r=Object(n);if(typeof n=="string"||Object.prototype.toString.call(n)!=="[object Symbol]"||Object.prototype.toString.call(r)!=="[object Symbol]")return!1;var o=42;e[n]=o;for(n in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var i=Object.getOwnPropertySymbols(e);if(i.length!==1||i[0]!==n||!Object.prototype.propertyIsEnumerable.call(e,n))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var a=Object.getOwnPropertyDescriptor(e,n);if(a.value!==o||a.enumerable!==!0)return!1}return!0},cs=typeof Symbol!="undefined"&&Symbol,mp=ls,fs=function(){return typeof cs!="function"||typeof Symbol!="function"||typeof cs("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:mp()},vp=lo,ds=vp.call(Function.call,Object.prototype.hasOwnProperty),R,qt=SyntaxError,ps=Function,Et=TypeError,co=function(t){try{return ps('"use strict"; return ('+t+").constructor;")()}catch{}},at=Object.getOwnPropertyDescriptor;if(at)try{at({},"")}catch{at=null}var fo=function(){throw new Et},gp=at?function(){try{return arguments.callee,fo}catch{try{return at(arguments,"callee").get}catch{return fo}}}():fo,Ct=fs(),qe=Object.getPrototypeOf||function(t){return t.__proto__},At={},yp=typeof Uint8Array=="undefined"?R:qe(Uint8Array),wt={"%AggregateError%":typeof AggregateError=="undefined"?R:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer=="undefined"?R:ArrayBuffer,"%ArrayIteratorPrototype%":Ct?qe([][Symbol.iterator]()):R,"%AsyncFromSyncIteratorPrototype%":R,"%AsyncFunction%":At,"%AsyncGenerator%":At,"%AsyncGeneratorFunction%":At,"%AsyncIteratorPrototype%":At,"%Atomics%":typeof Atomics=="undefined"?R:Atomics,"%BigInt%":typeof BigInt=="undefined"?R:BigInt,"%Boolean%":Boolean,"%DataView%":typeof DataView=="undefined"?R:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array=="undefined"?R:Float32Array,"%Float64Array%":typeof Float64Array=="undefined"?R:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry=="undefined"?R:FinalizationRegistry,"%Function%":ps,"%GeneratorFunction%":At,"%Int8Array%":typeof Int8Array=="undefined"?R:Int8Array,"%Int16Array%":typeof Int16Array=="undefined"?R:Int16Array,"%Int32Array%":typeof Int32Array=="undefined"?R:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":Ct?qe(qe([][Symbol.iterator]())):R,"%JSON%":typeof JSON=="object"?JSON:R,"%Map%":typeof Map=="undefined"?R:Map,"%MapIteratorPrototype%":typeof Map=="undefined"||!Ct?R:qe(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise=="undefined"?R:Promise,"%Proxy%":typeof Proxy=="undefined"?R:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect=="undefined"?R:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set=="undefined"?R:Set,"%SetIteratorPrototype%":typeof Set=="undefined"||!Ct?R:qe(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer=="undefined"?R:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":Ct?qe(""[Symbol.iterator]()):R,"%Symbol%":Ct?Symbol:R,"%SyntaxError%":qt,"%ThrowTypeError%":gp,"%TypedArray%":yp,"%TypeError%":Et,"%Uint8Array%":typeof Uint8Array=="undefined"?R:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray=="undefined"?R:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array=="undefined"?R:Uint16Array,"%Uint32Array%":typeof Uint32Array=="undefined"?R:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap=="undefined"?R:WeakMap,"%WeakRef%":typeof WeakRef=="undefined"?R:WeakRef,"%WeakSet%":typeof WeakSet=="undefined"?R:WeakSet},bp=function t(e){var n;if(e==="%AsyncFunction%")n=co("async function () {}");else if(e==="%GeneratorFunction%")n=co("function* () {}");else if(e==="%AsyncGeneratorFunction%")n=co("async function* () {}");else if(e==="%AsyncGenerator%"){var r=t("%AsyncGeneratorFunction%");r&&(n=r.prototype)}else if(e==="%AsyncIteratorPrototype%"){var o=t("%AsyncGenerator%");o&&(n=qe(o.prototype))}return wt[e]=n,n},hs={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},Tn=lo,Mn=ds,Sp=Tn.call(Function.call,Array.prototype.concat),_p=Tn.call(Function.apply,Array.prototype.splice),ms=Tn.call(Function.call,String.prototype.replace),kn=Tn.call(Function.call,String.prototype.slice),Ep=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,Cp=/\\(\\)?/g,Ap=function(e){var n=kn(e,0,1),r=kn(e,-1);if(n==="%"&&r!=="%")throw new qt("invalid intrinsic syntax, expected closing `%`");if(r==="%"&&n!=="%")throw new qt("invalid intrinsic syntax, expected opening `%`");var o=[];return ms(e,Ep,function(i,a,s,l){o[o.length]=s?ms(l,Cp,"$1"):a||i}),o},wp=function(e,n){var r=e,o;if(Mn(hs,r)&&(o=hs[r],r="%"+o[0]+"%"),Mn(wt,r)){var i=wt[r];if(i===At&&(i=bp(r)),typeof i=="undefined"&&!n)throw new Et("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:o,name:r,value:i}}throw new qt("intrinsic "+e+" does not exist!")},pe=function(e,n){if(typeof e!="string"||e.length===0)throw new Et("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof n!="boolean")throw new Et('"allowMissing" argument must be a boolean');var r=Ap(e),o=r.length>0?r[0]:"",i=wp("%"+o+"%",n),a=i.name,s=i.value,l=!1,c=i.alias;c&&(o=c[0],_p(r,Sp([0,1],c)));for(var u=1,f=!0;u<r.length;u+=1){var d=r[u],p=kn(d,0,1),m=kn(d,-1);if((p==='"'||p==="'"||p==="`"||m==='"'||m==="'"||m==="`")&&p!==m)throw new qt("property names with quotes must have matching quotes");if((d==="constructor"||!f)&&(l=!0),o+="."+d,a="%"+o+"%",Mn(wt,a))s=wt[a];else if(s!=null){if(!(d in s)){if(!n)throw new Et("base intrinsic for "+e+" exists, but the property is not available.");return}if(at&&u+1>=r.length){var b=at(s,d);f=!!b,f&&"get"in b&&!("originalValue"in b.get)?s=b.get:s=s[d]}else f=Mn(s,d),s=s[d];f&&!l&&(wt[a]=s)}}return s};(function(t){var e=lo,n=pe,r=n("%Function.prototype.apply%"),o=n("%Function.prototype.call%"),i=n("%Reflect.apply%",!0)||e.call(o,r),a=n("%Object.getOwnPropertyDescriptor%",!0),s=n("%Object.defineProperty%",!0),l=n("%Math.max%");if(s)try{s({},"a",{value:1})}catch{s=null}t.exports=function(f){var d=i(e,o,arguments);if(a&&s){var p=a(d,"length");p.configurable&&s(d,"length",{value:1+l(0,f.length-(arguments.length-1))})}return d};var c=function(){return i(e,r,arguments)};s?s(t.exports,"apply",{value:c}):t.exports.apply=c})(_t);var vs=pe,gs=_t.exports,Op=gs(vs("String.prototype.indexOf")),st=function(e,n){var r=vs(e,!!n);return typeof r=="function"&&Op(e,".prototype.")>-1?gs(r):r},$p=pe,xp=$p("%TypeError%"),Pp=function(e,n){if(e==null)throw new xp(n||"Cannot call method on "+e);return e},Fn=Pp,Dp=pe,ys=Dp("%Array%"),Tp=!ys.isArray&&st("Object.prototype.toString"),Mp=ys.isArray||function(e){return Tp(e)==="[object Array]"},bs=pe,kp=st,Fp=bs("%TypeError%"),Ip=Mp,Rp=bs("%Reflect.apply%",!0)||kp("%Function.prototype.apply%"),Np=function(e,n){var r=arguments.length>2?arguments[2]:[];if(!Ip(r))throw new Fp("Assertion failed: optional `argumentsList`, if provided, must be a List");return Rp(e,n,r)},Lp={},Bp=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Lp}),Vp=Vr(Bp),po=typeof Map=="function"&&Map.prototype,ho=Object.getOwnPropertyDescriptor&&po?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,In=po&&ho&&typeof ho.get=="function"?ho.get:null,Hp=po&&Map.prototype.forEach,mo=typeof Set=="function"&&Set.prototype,vo=Object.getOwnPropertyDescriptor&&mo?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,Rn=mo&&vo&&typeof vo.get=="function"?vo.get:null,Up=mo&&Set.prototype.forEach,jp=typeof WeakMap=="function"&&WeakMap.prototype,Yt=jp?WeakMap.prototype.has:null,zp=typeof WeakSet=="function"&&WeakSet.prototype,Xt=zp?WeakSet.prototype.has:null,Wp=typeof WeakRef=="function"&&WeakRef.prototype,Ss=Wp?WeakRef.prototype.deref:null,Gp=Boolean.prototype.valueOf,qp=Object.prototype.toString,Yp=Function.prototype.toString,Xp=String.prototype.match,go=String.prototype.slice,Ye=String.prototype.replace,Kp=String.prototype.toUpperCase,_s=String.prototype.toLowerCase,Es=RegExp.prototype.test,Cs=Array.prototype.concat,Te=Array.prototype.join,Jp=Array.prototype.slice,As=Math.floor,yo=typeof BigInt=="function"?BigInt.prototype.valueOf:null,bo=Object.getOwnPropertySymbols,So=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,Ot=typeof Symbol=="function"&&typeof Symbol.iterator=="object",le=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===Ot?"object":"symbol")?Symbol.toStringTag:null,ws=Object.prototype.propertyIsEnumerable,Os=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(t){return t.__proto__}:null);function $s(t,e){if(t===1/0||t===-1/0||t!==t||t&&t>-1e3&&t<1e3||Es.call(/e/,e))return e;var n=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof t=="number"){var r=t<0?-As(-t):As(t);if(r!==t){var o=String(r),i=go.call(e,o.length+1);return Ye.call(o,n,"$&_")+"."+Ye.call(Ye.call(i,/([0-9]{3})/g,"$&_"),/_$/,"")}}return Ye.call(e,n,"$&_")}var _o=Vp.custom,Eo=_o&&Ps(_o)?_o:null,Zp=function t(e,n,r,o){var i=n||{};if(Xe(i,"quoteStyle")&&i.quoteStyle!=="single"&&i.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(Xe(i,"maxStringLength")&&(typeof i.maxStringLength=="number"?i.maxStringLength<0&&i.maxStringLength!==1/0:i.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var a=Xe(i,"customInspect")?i.customInspect:!0;if(typeof a!="boolean"&&a!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(Xe(i,"indent")&&i.indent!==null&&i.indent!=="	"&&!(parseInt(i.indent,10)===i.indent&&i.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(Xe(i,"numericSeparator")&&typeof i.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var s=i.numericSeparator;if(typeof e=="undefined")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return Ts(e,i);if(typeof e=="number"){if(e===0)return 1/0/e>0?"0":"-0";var l=String(e);return s?$s(e,l):l}if(typeof e=="bigint"){var c=String(e)+"n";return s?$s(e,c):c}var u=typeof i.depth=="undefined"?5:i.depth;if(typeof r=="undefined"&&(r=0),r>=u&&u>0&&typeof e=="object")return Co(e)?"[Array]":"[Object]";var f=gh(i,r);if(typeof o=="undefined")o=[];else if(Ds(o,e)>=0)return"[Circular]";function d(Y,de,Ie){if(de&&(o=Jp.call(o),o.push(de)),Ie){var he={depth:i.depth};return Xe(i,"quoteStyle")&&(he.quoteStyle=i.quoteStyle),t(Y,he,r+1,o)}return t(Y,i,r+1,o)}if(typeof e=="function"){var p=uh(e),m=Nn(e,d);return"[Function"+(p?": "+p:" (anonymous)")+"]"+(m.length>0?" { "+Te.call(m,", ")+" }":"")}if(Ps(e)){var b=Ot?Ye.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):So.call(e);return typeof e=="object"&&!Ot?Kt(b):b}if(hh(e)){for(var v="<"+_s.call(String(e.nodeName)),S=e.attributes||[],C=0;C<S.length;C++)v+=" "+S[C].name+"="+xs(Qp(S[C].value),"double",i);return v+=">",e.childNodes&&e.childNodes.length&&(v+="..."),v+="</"+_s.call(String(e.nodeName))+">",v}if(Co(e)){if(e.length===0)return"[]";var P=Nn(e,d);return f&&!vh(P)?"["+wo(P,f)+"]":"[ "+Te.call(P,", ")+" ]"}if(nh(e)){var F=Nn(e,d);return"cause"in e&&!ws.call(e,"cause")?"{ ["+String(e)+"] "+Te.call(Cs.call("[cause]: "+d(e.cause),F),", ")+" }":F.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+Te.call(F,", ")+" }"}if(typeof e=="object"&&a){if(Eo&&typeof e[Eo]=="function")return e[Eo]();if(a!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(lh(e)){var O=[];return Hp.call(e,function(Y,de){O.push(d(de,e,!0)+" => "+d(Y,e))}),Ms("Map",In.call(e),O,f)}if(dh(e)){var k=[];return Up.call(e,function(Y){k.push(d(Y,e))}),Ms("Set",Rn.call(e),k,f)}if(ch(e))return Ao("WeakMap");if(ph(e))return Ao("WeakSet");if(fh(e))return Ao("WeakRef");if(oh(e))return Kt(d(Number(e)));if(ah(e))return Kt(d(yo.call(e)));if(ih(e))return Kt(Gp.call(e));if(rh(e))return Kt(d(String(e)));if(!eh(e)&&!th(e)){var x=Nn(e,d),X=Os?Os(e)===Object.prototype:e instanceof Object||e.constructor===Object,H=e instanceof Object?"":"null prototype",fe=!X&&le&&Object(e)===e&&le in e?go.call(Ke(e),8,-1):H?"Object":"",W=X||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",z=W+(fe||H?"["+Te.call(Cs.call([],fe||[],H||[]),": ")+"] ":"");return x.length===0?z+"{}":f?z+"{"+wo(x,f)+"}":z+"{ "+Te.call(x,", ")+" }"}return String(e)};function xs(t,e,n){var r=(n.quoteStyle||e)==="double"?'"':"'";return r+t+r}function Qp(t){return Ye.call(String(t),/"/g,"&quot;")}function Co(t){return Ke(t)==="[object Array]"&&(!le||!(typeof t=="object"&&le in t))}function eh(t){return Ke(t)==="[object Date]"&&(!le||!(typeof t=="object"&&le in t))}function th(t){return Ke(t)==="[object RegExp]"&&(!le||!(typeof t=="object"&&le in t))}function nh(t){return Ke(t)==="[object Error]"&&(!le||!(typeof t=="object"&&le in t))}function rh(t){return Ke(t)==="[object String]"&&(!le||!(typeof t=="object"&&le in t))}function oh(t){return Ke(t)==="[object Number]"&&(!le||!(typeof t=="object"&&le in t))}function ih(t){return Ke(t)==="[object Boolean]"&&(!le||!(typeof t=="object"&&le in t))}function Ps(t){if(Ot)return t&&typeof t=="object"&&t instanceof Symbol;if(typeof t=="symbol")return!0;if(!t||typeof t!="object"||!So)return!1;try{return So.call(t),!0}catch{}return!1}function ah(t){if(!t||typeof t!="object"||!yo)return!1;try{return yo.call(t),!0}catch{}return!1}var sh=Object.prototype.hasOwnProperty||function(t){return t in this};function Xe(t,e){return sh.call(t,e)}function Ke(t){return qp.call(t)}function uh(t){if(t.name)return t.name;var e=Xp.call(Yp.call(t),/^function\s*([\w$]+)/);return e?e[1]:null}function Ds(t,e){if(t.indexOf)return t.indexOf(e);for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1}function lh(t){if(!In||!t||typeof t!="object")return!1;try{In.call(t);try{Rn.call(t)}catch{return!0}return t instanceof Map}catch{}return!1}function ch(t){if(!Yt||!t||typeof t!="object")return!1;try{Yt.call(t,Yt);try{Xt.call(t,Xt)}catch{return!0}return t instanceof WeakMap}catch{}return!1}function fh(t){if(!Ss||!t||typeof t!="object")return!1;try{return Ss.call(t),!0}catch{}return!1}function dh(t){if(!Rn||!t||typeof t!="object")return!1;try{Rn.call(t);try{In.call(t)}catch{return!0}return t instanceof Set}catch{}return!1}function ph(t){if(!Xt||!t||typeof t!="object")return!1;try{Xt.call(t,Xt);try{Yt.call(t,Yt)}catch{return!0}return t instanceof WeakSet}catch{}return!1}function hh(t){return!t||typeof t!="object"?!1:typeof HTMLElement!="undefined"&&t instanceof HTMLElement?!0:typeof t.nodeName=="string"&&typeof t.getAttribute=="function"}function Ts(t,e){if(t.length>e.maxStringLength){var n=t.length-e.maxStringLength,r="... "+n+" more character"+(n>1?"s":"");return Ts(go.call(t,0,e.maxStringLength),e)+r}var o=Ye.call(Ye.call(t,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,mh);return xs(o,"single",e)}function mh(t){var e=t.charCodeAt(0),n={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return n?"\\"+n:"\\x"+(e<16?"0":"")+Kp.call(e.toString(16))}function Kt(t){return"Object("+t+")"}function Ao(t){return t+" { ? }"}function Ms(t,e,n,r){var o=r?wo(n,r):Te.call(n,", ");return t+" ("+e+") {"+o+"}"}function vh(t){for(var e=0;e<t.length;e++)if(Ds(t[e],`
`)>=0)return!1;return!0}function gh(t,e){var n;if(t.indent==="	")n="	";else if(typeof t.indent=="number"&&t.indent>0)n=Te.call(Array(t.indent+1)," ");else return null;return{base:n,prev:Te.call(Array(e+1),n)}}function wo(t,e){if(t.length===0)return"";var n=`
`+e.prev+e.base;return n+Te.call(t,","+n)+`
`+e.prev}function Nn(t,e){var n=Co(t),r=[];if(n){r.length=t.length;for(var o=0;o<t.length;o++)r[o]=Xe(t,o)?e(t[o],t):""}var i=typeof bo=="function"?bo(t):[],a;if(Ot){a={};for(var s=0;s<i.length;s++)a["$"+i[s]]=i[s]}for(var l in t)!Xe(t,l)||n&&String(Number(l))===l&&l<t.length||Ot&&a["$"+l]instanceof Symbol||(Es.call(/[^\w$]/,l)?r.push(e(l,t)+": "+e(t[l],t)):r.push(l+": "+e(t[l],t)));if(typeof bo=="function")for(var c=0;c<i.length;c++)ws.call(t,i[c])&&r.push("["+e(i[c])+"]: "+e(t[i[c]],t));return r}var ks=function(e){return typeof e=="string"||typeof e=="symbol"},yh=function(e){if(e===null)return"Null";if(typeof e=="undefined")return"Undefined";if(typeof e=="function"||typeof e=="object")return"Object";if(typeof e=="number")return"Number";if(typeof e=="boolean")return"Boolean";if(typeof e=="string")return"String"},bh=yh,Oo=function(e){return typeof e=="symbol"?"Symbol":typeof e=="bigint"?"BigInt":bh(e)},Sh=pe,Fs=Sh("%TypeError%"),_h=Zp,Eh=ks,Ch=Oo,Is=function(e,n){if(Ch(e)!=="Object")throw new Fs("Assertion failed: Type(O) is not Object");if(!Eh(n))throw new Fs("Assertion failed: IsPropertyKey(P) is not true, got "+_h(n));return e[n]},Ah=pe,Rs=Ah("%TypeError%"),wh=ks,Oh=Oo,$h=function(e,n){if(Oh(e)!=="Object")throw new Rs("Assertion failed: `O` must be an Object");if(!wh(n))throw new Rs("Assertion failed: `P` must be a Property Key");return n in e},Ns=Function.prototype.toString,$t=typeof Reflect=="object"&&Reflect!==null&&Reflect.apply,$o,Ln;if(typeof $t=="function"&&typeof Object.defineProperty=="function")try{$o=Object.defineProperty({},"length",{get:function(){throw Ln}}),Ln={},$t(function(){throw 42},null,$o)}catch(t){t!==Ln&&($t=null)}else $t=null;var xh=/^\s*class\b/,xo=function(e){try{var n=Ns.call(e);return xh.test(n)}catch{return!1}},Ph=function(e){try{return xo(e)?!1:(Ns.call(e),!0)}catch{return!1}},Dh=Object.prototype.toString,Th="[object Function]",Mh="[object GeneratorFunction]",kh=typeof Symbol=="function"&&!!Symbol.toStringTag,Ls=typeof document=="object"&&typeof document.all=="undefined"&&document.all!==void 0?document.all:{},Po=$t?function(e){if(e===Ls)return!0;if(!e||typeof e!="function"&&typeof e!="object")return!1;if(typeof e=="function"&&!e.prototype)return!0;try{$t(e,null,$o)}catch(n){if(n!==Ln)return!1}return!xo(e)}:function(e){if(e===Ls)return!0;if(!e||typeof e!="function"&&typeof e!="object")return!1;if(typeof e=="function"&&!e.prototype)return!0;if(kh)return Ph(e);if(xo(e))return!1;var n=Dh.call(e);return n===Th||n===Mh},Fh=Po,Bs=pe,Ih=Bs("%Math%"),Rh=Bs("%Number%"),Nh=Rh.MAX_SAFE_INTEGER||Ih.pow(2,53)-1,Lh=pe,Bh=Lh("%Math.abs%"),Vh=function(e){return Bh(e)},Hh=Math.floor,Uh=function(e){return Hh(e)},Vs=function(e){return e===null||typeof e!="function"&&typeof e!="object"},jh=Object.prototype.toString,Hs=Vs,zh=Po,Us={"[[DefaultValue]]":function(t){var e;if(arguments.length>1?e=arguments[1]:e=jh.call(t)==="[object Date]"?String:Number,e===String||e===Number){var n=e===String?["toString","valueOf"]:["valueOf","toString"],r,o;for(o=0;o<n.length;++o)if(zh(t[n[o]])&&(r=t[n[o]](),Hs(r)))return r;throw new TypeError("No default value")}throw new TypeError("invalid [[DefaultValue]] hint supplied")}},Wh=function(e){return Hs(e)?e:arguments.length>1?Us["[[DefaultValue]]"](e,arguments[1]):Us["[[DefaultValue]]"](e)},Gh=Wh,qh=Gh,Yh=function(e){var n=qh(e,Number);if(typeof n!="string")return+n;var r=n.replace(/^[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+|[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+$/g,"");return/^0[ob]|^[+-]0x/.test(r)?NaN:+r},Xh=Number.isNaN||function(e){return e!==e},Kh=Number.isNaN||function(t){return t!==t},Jh=Number.isFinite||function(t){return typeof t=="number"&&!Kh(t)&&t!==1/0&&t!==-1/0},Zh=function(e){return e>=0?1:-1},Qh=Vh,em=Uh,tm=Yh,nm=Xh,rm=Jh,om=Zh,im=function(e){var n=tm(e);return nm(n)?0:n===0||!rm(n)?n:om(n)*em(Qh(n))},am=pe,sm=am("RegExp.prototype.test"),um=_t.exports,lm=function(e){return um(sm,e)},cm=function(e){return e===null||typeof e!="function"&&typeof e!="object"},fm=ls,js=function(){return fm()&&!!Symbol.toStringTag},dm=Date.prototype.getDay,pm=function(e){try{return dm.call(e),!0}catch{return!1}},hm=Object.prototype.toString,mm="[object Date]",vm=js(),gm=function(e){return typeof e!="object"||e===null?!1:vm?pm(e):hm.call(e)===mm},Do={exports:{}},ym=Object.prototype.toString,bm=fs();if(bm){var Sm=Symbol.prototype.toString,_m=/^Symbol\(.*\)$/,Em=function(e){return typeof e.valueOf()!="symbol"?!1:_m.test(Sm.call(e))};Do.exports=function(e){if(typeof e=="symbol")return!0;if(ym.call(e)!=="[object Symbol]")return!1;try{return Em(e)}catch{return!1}}}else Do.exports=function(e){return!1};var Cm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol",To=Vs,zs=Po,Am=gm,Ws=Do.exports,wm=function(e,n){if(typeof e=="undefined"||e===null)throw new TypeError("Cannot call method on "+e);if(typeof n!="string"||n!=="number"&&n!=="string")throw new TypeError('hint must be "string" or "number"');var r=n==="string"?["toString","valueOf"]:["valueOf","toString"],o,i,a;for(a=0;a<r.length;++a)if(o=e[r[a]],zs(o)&&(i=o.call(e),To(i)))return i;throw new TypeError("No default value")},Om=function(e,n){var r=e[n];if(r!==null&&typeof r!="undefined"){if(!zs(r))throw new TypeError(r+" returned for property "+n+" of object "+e+" is not a function");return r}},$m=function(e){if(To(e))return e;var n="default";arguments.length>1&&(arguments[1]===String?n="string":arguments[1]===Number&&(n="number"));var r;if(Cm&&(Symbol.toPrimitive?r=Om(e,Symbol.toPrimitive):Ws(e)&&(r=Symbol.prototype.valueOf)),typeof r!="undefined"){var o=r.call(e,n);if(To(o))return o;throw new TypeError("unable to convert exotic object to primitive")}return n==="default"&&(Am(e)||Ws(e))&&(n="string"),wm(e,n==="default"?"number":n)},Gs=$m,xm=function(e){return arguments.length>1?Gs(e,arguments[1]):Gs(e)},Bn=pe,qs=Bn("%TypeError%"),Ys=Bn("%Number%"),Pm=Bn("%RegExp%"),Xs=Bn("%parseInt%"),Ks=st,Vn=lm,Dm=cm,Js=Ks("String.prototype.slice"),Tm=Vn(/^0b[01]+$/i),Mm=Vn(/^0o[0-7]+$/i),km=Vn(/^[-+]0x[0-9a-f]+$/i),Fm=["\x85","\u200B","\uFFFE"].join(""),Im=new Pm("["+Fm+"]","g"),Rm=Vn(Im),Zs=[`	
\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003`,"\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028","\u2029\uFEFF"].join(""),Nm=new RegExp("(^["+Zs+"]+)|(["+Zs+"]+$)","g"),Lm=Ks("String.prototype.replace"),Bm=function(t){return Lm(t,Nm,"")},Vm=xm,Hm=function t(e){var n=Dm(e)?e:Vm(e,Ys);if(typeof n=="symbol")throw new qs("Cannot convert a Symbol value to a number");if(typeof n=="bigint")throw new qs("Conversion from 'BigInt' to 'number' is not allowed.");if(typeof n=="string"){if(Tm(n))return t(Xs(Js(n,2),2));if(Mm(n))return t(Xs(Js(n,2),8));if(Rm(n)||km(n))return NaN;var r=Bm(n);if(r!==n)return t(r)}return Ys(n)},Um=im,jm=Hm,zm=function(e){var n=jm(e);return n!==0&&(n=Um(n)),n===0?0:n},Qs=Nh,Wm=zm,Gm=function(e){var n=Wm(e);return n<=0?0:n>Qs?Qs:n},qm=pe,Ym=qm("%TypeError%"),Xm=Is,Km=Gm,Jm=Oo,Zm=function(e){if(Jm(e)!=="Object")throw new Ym("Assertion failed: `obj` must be an Object");return Km(Xm(e,"length"))},Qm=pe,ev=Qm("%Object%"),tv=Fn,nv=function(e){return tv(e),ev(e)},eu=pe,rv=eu("%String%"),ov=eu("%TypeError%"),tu=function(e){if(typeof e=="symbol")throw new ov("Cannot convert a Symbol value to a string");return rv(e)},iv=String.prototype.valueOf,av=function(e){try{return iv.call(e),!0}catch{return!1}},sv=Object.prototype.toString,uv="[object String]",lv=js(),cv=function(e){return typeof e=="string"?!0:typeof e!="object"?!1:lv?av(e):sv.call(e)===uv},fv=pe,dv=st,pv=fv("%TypeError%"),hv=Np,mv=Is,vv=$h,gv=Fh,yv=Zm,bv=nv,Sv=tu,_v=cv,Ev=dv("String.prototype.split"),nu=Object("a"),Cv=nu[0]!=="a"||!(0 in nu),ru=function(e){var n=bv(this),r=Cv&&_v(this)?Ev(this,""):n,o=yv(r);if(!gv(e))throw new pv("Array.prototype.forEach callback must be a function");var i;arguments.length>1&&(i=arguments[1]);for(var a=0;a<o;){var s=Sv(a),l=vv(r,s);if(l){var c=mv(r,s);hv(e,i,[c,a,r])}a+=1}},Av=function(e){var n=!0,r=!0,o=!1;if(typeof e=="function"){try{e.call("f",function(i,a,s){typeof s!="object"&&(n=!1)}),e.call([null],function(){"use strict";r=typeof this=="string"},"x")}catch{o=!0}return!o&&n&&r}return!1},wv=Av,Ov=ru,ou=function(){var e=Array.prototype.forEach;return wv(e)?e:Ov},$v=St,xv=ou,Pv=function(){var e=xv();return $v(Array.prototype,{forEach:e},{forEach:function(){return Array.prototype.forEach!==e}}),e},Dv=St,Tv=_t.exports,Mv=st,kv=Fn,Fv=ru,iu=ou,Iv=iu(),Rv=Pv,Nv=Mv("Array.prototype.slice"),Lv=Tv.apply(Iv),au=function(e,n){return kv(e),Lv(e,Nv(arguments,1))};Dv(au,{getPolyfill:iu,implementation:Fv,shim:Rv});var Bv=au,Vv=Fn,su=st,Hv=su("Object.prototype.propertyIsEnumerable"),Uv=su("Array.prototype.push"),uu=function(e){var n=Vv(e),r=[];for(var o in n)Hv(n,o)&&Uv(r,[o,n[o]]);return r},jv=uu,lu=function(){return typeof Object.entries=="function"?Object.entries:jv},zv=lu,Wv=St,Gv=function(){var e=zv();return Wv(Object,{entries:e},{entries:function(){return Object.entries!==e}}),e},qv=St,Yv=_t.exports,Xv=uu,cu=lu,Kv=Gv,fu=Yv(cu(),Object);qv(fu,{getPolyfill:cu,implementation:Xv,shim:Kv});var Jv=fu,Zv=Fn,Qv=tu,eg=st,du=eg("String.prototype.replace"),tg=/^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/,ng=/[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/,pu=function(){var e=Qv(Zv(this));return du(du(e,tg,""),ng,"")},rg=pu,hu="\u200B",mu=function(){return String.prototype.trim&&hu.trim()===hu?String.prototype.trim:rg},og=St,ig=mu,ag=function(){var e=ig();return og(String.prototype,{trim:e},{trim:function(){return String.prototype.trim!==e}}),e},sg=_t.exports,ug=St,lg=pu,vu=mu,cg=ag,gu=sg(vu());ug(gu,{getPolyfill:vu,implementation:lg,shim:cg});var fg=gu,Hn=Bv,Mo=Jv,yu=ds,dg=fg,pg=function(e){},hg=String.prototype.replace,bu=String.prototype.split,Un="||||",ko=function(t){var e=t%100,n=e%10;return e!==11&&n===1?0:2<=n&&n<=4&&!(e>=12&&e<=14)?1:2},Su={pluralTypes:{arabic:function(t){if(t<3)return t;var e=t%100;return e>=3&&e<=10?3:e>=11?4:5},bosnian_serbian:ko,chinese:function(){return 0},croatian:ko,french:function(t){return t>=2?1:0},german:function(t){return t!==1?1:0},russian:ko,lithuanian:function(t){return t%10===1&&t%100!==11?0:t%10>=2&&t%10<=9&&(t%100<11||t%100>19)?1:2},czech:function(t){return t===1?0:t>=2&&t<=4?1:2},polish:function(t){if(t===1)return 0;var e=t%10;return 2<=e&&e<=4&&(t%100<10||t%100>=20)?1:2},icelandic:function(t){return t%10!==1||t%100===11?1:0},slovenian:function(t){var e=t%100;return e===1?0:e===2?1:e===3||e===4?2:3}},pluralTypeToLanguages:{arabic:["ar"],bosnian_serbian:["bs-Latn-BA","bs-Cyrl-BA","srl-RS","sr-RS"],chinese:["id","id-ID","ja","ko","ko-KR","lo","ms","th","th-TH","zh"],croatian:["hr","hr-HR"],german:["fa","da","de","en","es","fi","el","he","hi-IN","hu","hu-HU","it","nl","no","pt","sv","tr"],french:["fr","tl","pt-br"],russian:["ru","ru-RU"],lithuanian:["lt"],czech:["cs","cs-CZ","sk"],polish:["pl"],icelandic:["is"],slovenian:["sl-SL"]}};function mg(t){var e={};return Hn(Mo(t),function(n){var r=n[0],o=n[1];Hn(o,function(i){e[i]=r})}),e}function vg(t,e){var n=mg(t.pluralTypeToLanguages);return n[e]||n[bu.call(e,/-/,1)[0]]||n.en}function gg(t,e,n){return t.pluralTypes[e](n)}function yg(){var t={};return function(e,n){var r=t[n];return r&&!e.pluralTypes[r]&&(r=null,t[n]=r),r||(r=vg(e,n),r&&(t[n]=r)),r}}function _u(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function bg(t){var e=t&&t.prefix||"%{",n=t&&t.suffix||"}";if(e===Un||n===Un)throw new RangeError('"'+Un+'" token is reserved for pluralization');return new RegExp(_u(e)+"(.*?)"+_u(n),"g")}var Sg=yg(),_g=/%\{(.*?)\}/g;function Fo(t,e,n,r,o){if(typeof t!="string")throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");if(e==null)return t;var i=t,a=r||_g,s=typeof e=="number"?{smart_count:e}:e;if(s.smart_count!=null&&t){var l=o||Su,c=bu.call(t,Un),u=n||"en",f=Sg(l,u),d=gg(l,f,s.smart_count);i=dg(c[d]||c[0])}return i=hg.call(i,a,function(p,m){return!yu(s,m)||s[m]==null?p:s[m]}),i}function Ue(t){var e=t||{};this.phrases={},this.extend(e.phrases||{}),this.currentLocale=e.locale||"en";var n=e.allowMissing?Fo:null;this.onMissingKey=typeof e.onMissingKey=="function"?e.onMissingKey:n,this.warn=e.warn||pg,this.tokenRegex=bg(e.interpolation),this.pluralRules=e.pluralRules||Su}Ue.prototype.locale=function(t){return t&&(this.currentLocale=t),this.currentLocale},Ue.prototype.extend=function(t,e){Hn(Mo(t||{}),function(n){var r=n[0],o=n[1],i=e?e+"."+r:r;typeof o=="object"?this.extend(o,i):this.phrases[i]=o},this)},Ue.prototype.unset=function(t,e){typeof t=="string"?delete this.phrases[t]:Hn(Mo(t||{}),function(n){var r=n[0],o=n[1],i=e?e+"."+r:r;typeof o=="object"?this.unset(o,i):delete this.phrases[i]},this)},Ue.prototype.clear=function(){this.phrases={}},Ue.prototype.replace=function(t){this.clear(),this.extend(t)},Ue.prototype.t=function(t,e){var n,r,o=e==null?{}:e;if(typeof this.phrases[t]=="string")n=this.phrases[t];else if(typeof o._=="string")n=o._;else if(this.onMissingKey){var i=this.onMissingKey;r=i(t,o,this.currentLocale,this.tokenRegex,this.pluralRules)}else this.warn('Missing translation for key: "'+t+'"'),r=t;return typeof n=="string"&&(r=Fo(n,o,this.currentLocale,this.tokenRegex,this.pluralRules)),r},Ue.prototype.has=function(t){return yu(this.phrases,t)},Ue.transformPhrase=function(e,n,r){return Fo(e,n,r)};var Eg=Ue,Cg={"Add a comment...":"\u0625\u0636\u0627\u0641\u0629 \u062A\u0639\u0644\u064A\u0642","Add a reply...":"\u0625\u0636\u0627\u0641\u0629 \u0631\u062F","Add tag...":"\u0625\u0636\u0627\u0641\u0629 \u0639\u0644\u0627\u0645\u0629",Cancel:"\u0625\u0644\u063A\u0627\u0621",Close:"\u0625\u063A\u0644\u0627\u0642",Edit:"Edit",Delete:"Delete",Ok:"\u062A\u0645"},Ag={"Add a comment...":"Napsat koment\xE1\u0159...","Add a reply...":"Odpov\u011Bd\u011Bt...","Add tag...":"P\u0159idat \u0161t\xEDtek...",Cancel:"Zru\u0161it",Close:"Zav\u0159\xEDt",Edit:"Upravit",Delete:"Smazat",Ok:"Ok"},wg={"Add a comment...":"Kommentar schreiben...","Add a reply...":"Antwort schreiben...","Add tag...":"Tag...",Cancel:"Abbrechen",Close:"Schliessen",Edit:"Bearbeiten",Delete:"L\xF6schen",Ok:"Ok"},Og={"Add a comment...":"\u03A3\u03C7\u03BF\u03BB\u03AF\u03B1\u03C3\u03B5...","Add a reply...":"\u0391\u03C0\u03AC\u03BD\u03C4\u03B7\u03C3\u03B5...","Add tag...":"\u03A0\u03C1\u03CC\u03C3\u03B8\u03B5\u03C3\u03B5 tag...",Cancel:"\u0386\u03BA\u03C5\u03C1\u03BF",Close:"\u039A\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF",Edit:"\u0395\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1",Delete:"\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE",Ok:"Ok"},$g={"Add a comment...":"Agregar un comentario...","Add a reply...":"Agregar una respuesta...","Add tag...":"Etiquetar...",Cancel:"Cancelar",Close:"Cerrar",Edit:"Editar",Delete:"Eliminar",Ok:"Ok"},xg={"Add a comment...":"Lis\xE4\xE4 kommentti","Add a reply...":"Lis\xE4\xE4 vastaus","Add tag...":"Lis\xE4\xE4 tunniste",Cancel:"Peruuta",Close:"Sulje",Edit:"Muokkaa",Delete:"Poista",Ok:"Ok"},Pg={"Add a comment...":"Ajouter un commentaire...","Add a reply...":"Ajouter une r\xE9ponse...","Add tag...":"Ajouter une \xE9tiquette...",Cancel:"Annuler",Close:"Fermer",Edit:"\xC9diter",Delete:"Supprimer",Ok:"Ok"},Dg={"Add a comment...":"Engadir un comentario...","Add a reply...":"Engadir unha resposta...","Add tag...":"Etiquetar...",Cancel:"Cancelar",Close:"Pechar",Edit:"Edit",Delete:"Delete",Ok:"Ok"},Tg={"Add a comment...":"\u091F\u093F\u092A\u094D\u092A\u0923\u0940 \u091C\u094B\u0921\u093C\u0947\u0902","Add a reply...":"\u091C\u0935\u093E\u092C \u0926\u0947\u0902","Add tag...":"\u091F\u0948\u0917 \u0932\u0917\u093E\u090F\u0901",Cancel:"\u0930\u0926\u094D\u0926 \u0915\u0930\u0947\u0902",Close:"\u092C\u0902\u0926 \u0915\u0930\u0947\u0902",Edit:"\u0938\u0902\u092A\u093E\u0926\u093F\u0924 \u0915\u0930\u0947\u0902",Delete:"\u0939\u091F\u093E\u090F\u0901",Ok:"\u0920\u0940\u0915 \u0939\u0948"},Mg={"Add a comment...":"Commenta...","Add a reply...":"Rispondi...","Add tag...":"Aggiungi tag...",Cancel:"Annulla",Close:"Chiudi",Edit:"Edit",Delete:"Delete",Ok:"Ok"},kg={"Add a comment...":"\u30B3\u30E1\u30F3\u30C8\u3092\u8FFD\u52A0\u3059\u308B...","Add a reply...":"\u8FD4\u4FE1\u3059\u308B...","Add tag...":"\u30BF\u30B0\u3092\u8FFD\u52A0\u3059\u308B...",Cancel:"\u30AD\u30E3\u30F3\u30BB\u30EB",Close:"\u9589\u3058\u308B",Edit:"\u7DE8\u96C6",Delete:"\u524A\u9664",Ok:"Ok"},Fg={"Add a comment...":"\uB313\uAE00 \uCD94\uAC00","Add a reply...":"\uB2F5\uAE00 \uCD94\uAC00","Add tag...":"\uD0DC\uADF8 \uCD94\uAC00",Cancel:"\uCDE8\uC18C",Close:"\uB2EB\uAE30",Edit:"\uC218\uC815",Delete:"\uC0AD\uC81C",Ok:"\uD655\uC778"},Ig={"Add a comment...":"Commentaar toevoegen...","Add a reply...":"Antwoord toevoegen...","Add tag...":"Tag toevoegen...",Cancel:"Afbreken",Close:"Sluiten",Edit:"Bewerken",Delete:"Verwijderen",Ok:"Ok"},Rg={"Add a comment...":"Adicionar um coment\xE1rio...","Add a reply...":"Adicionar uma resposta...","Add tag...":"Etiquetar...",Cancel:"Cancelar",Close:"Fechar",Edit:"Editar",Delete:"Apagar",Ok:"Ok"},Ng={"Add a comment...":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439...","Add a reply...":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442...","Add tag...":"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u044D\u0433...",Cancel:"\u041E\u0442\u043C\u0435\u043D\u0430",Close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",Edit:"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",Delete:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",Ok:"\u041E\u043A"},Lg={"Add a comment...":"Skriv en kommentar...","Add a reply...":"Skriv ett svar...","Add tag...":"Tagg...",Cancel:"Cancel",Close:"St\xE4ng",Edit:"Edit",Delete:"Delete",Ok:"Ok"},Bg={"Add a comment...":"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E04\u0E2D\u0E21\u0E40\u0E21\u0E19\u0E15\u0E4C...","Add a reply...":"\u0E15\u0E2D\u0E1A\u0E01\u0E25\u0E31\u0E1A...","Add tag...":"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E17\u0E47\u0E01...",Cancel:"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",Close:"\u0E1B\u0E34\u0E14",Edit:"\u0E41\u0E01\u0E49\u0E44\u0E02",Delete:"\u0E25\u0E1A",Ok:"\u0E15\u0E01\u0E25\u0E07"},Vg={"Add a comment...":"Yorum ekle...","Add a reply...":"Cevap ekle...","Add tag...":"Tag Ekle...",Cancel:"\u0130ptal",Close:"Kapat",Edit:"D\xFCzenle",Delete:"Sil",Ok:"Tamam"},Hg={"Add a comment...":"\u062A\u0628\u0635\u0631\u06C1 \u06A9\u0631\u06CC\u06BA","Add a reply...":"\u062C\u0648\u0627\u0628 \u062F\u06CC\u06BA","Add tag...":"\u0679\u06CC\u06AF \u0644\u06AF\u0627\u0626\u06CC\u06BA",Cancel:"\u0645\u0646\u0633\u0648\u062E \u06A9\u0631\u06CC\u06BA",Close:"\u0628\u0646\u062F \u06A9\u0631\u06CC\u06BA",Edit:"\u062A\u0631\u0645\u06CC\u0645 \u06A9\u0631\u06CC\u06BA",Delete:"\u06C1\u0679\u0627\u0626\u06CC\u06BA",Ok:"\u0679\u06BE\u06CC\u06A9 \u06C1\u06D2"},Ug={"Add a comment...":"\u6DFB\u52A0\u6CE8\u91CA...","Add a reply...":"\u6DFB\u52A0\u56DE\u590D...","Add tag...":"\u6807\u7B7E...",Cancel:"\u53D6\u6D88",Close:"\u5173\u95ED",Edit:"\u7F16\u8F91",Delete:"\u5220\u9664",Ok:"\u786E\u8BA4"},jg={"Add a comment...":"\u6DFB\u52A0\u8BC4\u8BBA...","Add a reply...":"\u6DFB\u52A0\u56DE\u590D...","Add tag...":"\u6DFB\u52A0\u6807\u7B7E...",Cancel:"\u53D6\u6D88",Close:"\u5173\u95ED",Edit:"\u7F16\u8F91",Delete:"\u5220\u9664",Ok:"\u786E\u8BA4"},zg={"Add a comment...":"\u6DFB\u52A0\u8A55\u8AD6...","Add a reply...":"\u6DFB\u52A0\u56DE\u8986...","Add tag...":"\u6DFB\u52A0\u6A19\u7C64...",Cancel:"\u53D6\u6D88",Close:"\u95DC\u9589",Edit:"\u7DE8\u8F2F",Delete:"\u522A\u9664",Ok:"\u78BA\u8A8D"},Eu={};Object.defineProperty(Eu,"__esModule",{value:!0});var Io=[["\u062B\u0627\u0646\u064A\u0629","\u062B\u0627\u0646\u064A\u062A\u064A\u0646","%s \u062B\u0648\u0627\u0646","%s \u062B\u0627\u0646\u064A\u0629"],["\u062F\u0642\u064A\u0642\u0629","\u062F\u0642\u064A\u0642\u062A\u064A\u0646","%s \u062F\u0642\u0627\u0626\u0642","%s \u062F\u0642\u064A\u0642\u0629"],["\u0633\u0627\u0639\u0629","\u0633\u0627\u0639\u062A\u064A\u0646","%s \u0633\u0627\u0639\u0627\u062A","%s \u0633\u0627\u0639\u0629"],["\u064A\u0648\u0645","\u064A\u0648\u0645\u064A\u0646","%s \u0623\u064A\u0627\u0645","%s \u064A\u0648\u0645\u0627\u064B"],["\u0623\u0633\u0628\u0648\u0639","\u0623\u0633\u0628\u0648\u0639\u064A\u0646","%s \u0623\u0633\u0627\u0628\u064A\u0639","%s \u0623\u0633\u0628\u0648\u0639\u0627\u064B"],["\u0634\u0647\u0631","\u0634\u0647\u0631\u064A\u0646","%s \u0623\u0634\u0647\u0631","%s \u0634\u0647\u0631\u0627\u064B"],["\u0639\u0627\u0645","\u0639\u0627\u0645\u064A\u0646","%s \u0623\u0639\u0648\u0627\u0645","%s \u0639\u0627\u0645\u0627\u064B"]];function Wg(t,e){return e<3?Io[t][e-1]:e>=3&&e<=10?Io[t][2]:Io[t][3]}function Gg(t,e){if(e===0)return["\u0645\u0646\u0630 \u0644\u062D\u0638\u0627\u062A","\u0628\u0639\u062F \u0644\u062D\u0638\u0627\u062A"];var n=Wg(Math.floor(e/2),t);return["\u0645\u0646\u0630 "+n,"\u0628\u0639\u062F "+n]}var qg=Eu.default=Gg,Cu={};Object.defineProperty(Cu,"__esModule",{value:!0});function Yg(t,e){var n=0,r=e==1||e==3||e==5||e==7||e==9||e==11||e==13;return r&&t>=5&&(n=1),[[["pr\xE1v\u011B te\u010F","pr\xE1v\u011B te\u010F"]],[["p\u0159ed %s vte\u0159inami","za %s vte\u0159iny"],["p\u0159ed %s vte\u0159inami","za %s vte\u0159in"]],[["p\u0159ed minutou","za minutu"]],[["p\u0159ed %s minutami","za %s minuty"],["p\u0159ed %s minutami","za %s minut"]],[["p\u0159ed hodinou","za hodinu"]],[["p\u0159ed %s hodinami","za %s hodiny"],["p\u0159ed %s hodinami","za %s hodin"]],[["v\u010Dera","z\xEDtra"]],[["p\u0159ed %s dny","za %s dny"],["p\u0159ed %s dny","za %s dn\u016F"]],[["minul\xFD t\xFDden","p\u0159\xED\u0161t\xED t\xFDden"]],[["p\u0159ed %s t\xFDdny","za %s t\xFDdny"],["p\u0159ed %s t\xFDdny","za %s t\xFDdn\u016F"]],[["minul\xFD m\u011Bs\xEDc","p\u0159\xEDst\xED m\u011Bs\xEDc"]],[["p\u0159ed %s m\u011Bs\xEDci","za %s m\u011Bs\xEDce"],["p\u0159ed %s m\u011Bs\xEDci","za %s m\u011Bs\xEDc\u016F"]],[["p\u0159ed rokem","p\u0159\xEDst\xED rok"]],[["p\u0159ed %s lety","za %s roky"],["p\u0159ed %s lety","za %s let"]]][e][n]}var Xg=Cu.default=Yg,Au={};Object.defineProperty(Au,"__esModule",{value:!0});function Kg(t,e){return[["gerade eben","vor einer Weile"],["vor %s Sekunden","in %s Sekunden"],["vor 1 Minute","in 1 Minute"],["vor %s Minuten","in %s Minuten"],["vor 1 Stunde","in 1 Stunde"],["vor %s Stunden","in %s Stunden"],["vor 1 Tag","in 1 Tag"],["vor %s Tagen","in %s Tagen"],["vor 1 Woche","in 1 Woche"],["vor %s Wochen","in %s Wochen"],["vor 1 Monat","in 1 Monat"],["vor %s Monaten","in %s Monaten"],["vor 1 Jahr","in 1 Jahr"],["vor %s Jahren","in %s Jahren"]][e]}var Jg=Au.default=Kg,wu={};Object.defineProperty(wu,"__esModule",{value:!0});function Zg(t,e){return[["\u03BC\u03CC\u03BB\u03B9\u03C2 \u03C4\u03CE\u03C1\u03B1","\u03C3\u03B5 \u03BB\u03AF\u03B3\u03BF"],["%s \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1 \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 %s \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1"],["1 \u03BB\u03B5\u03C0\u03C4\u03CC \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 1 \u03BB\u03B5\u03C0\u03C4\u03CC"],["%s \u03BB\u03B5\u03C0\u03C4\u03AC \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 %s \u03BB\u03B5\u03C0\u03C4\u03AC"],["1 \u03CE\u03C1\u03B1 \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 1 \u03CE\u03C1\u03B1"],["%s \u03CE\u03C1\u03B5\u03C2 \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 %s \u03CE\u03C1\u03B5\u03C2"],["1 \u03BC\u03AD\u03C1\u03B1 \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 1 \u03BC\u03AD\u03C1\u03B1"],["%s \u03BC\u03AD\u03C1\u03B5\u03C2 \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 %s \u03BC\u03AD\u03C1\u03B5\u03C2"],["1 \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1 \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 1 \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1"],["%s \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B5\u03C2 \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 %s \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B5\u03C2"],["1 \u03BC\u03AE\u03BD\u03B1 \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 1 \u03BC\u03AE\u03BD\u03B1"],["%s \u03BC\u03AE\u03BD\u03B5\u03C2 \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 %s \u03BC\u03AE\u03BD\u03B5\u03C2"],["1 \u03C7\u03C1\u03CC\u03BD\u03BF \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 1 \u03C7\u03C1\u03CC\u03BD\u03BF"],["%s \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1 \u03C0\u03C1\u03B9\u03BD","\u03C3\u03B5 %s \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1"]][e]}var Qg=wu.default=Zg,Ou={};Object.defineProperty(Ou,"__esModule",{value:!0});function ey(t,e){return[["justo ahora","en un rato"],["hace %s segundos","en %s segundos"],["hace 1 minuto","en 1 minuto"],["hace %s minutos","en %s minutos"],["hace 1 hora","en 1 hora"],["hace %s horas","en %s horas"],["hace 1 d\xEDa","en 1 d\xEDa"],["hace %s d\xEDas","en %s d\xEDas"],["hace 1 semana","en 1 semana"],["hace %s semanas","en %s semanas"],["hace 1 mes","en 1 mes"],["hace %s meses","en %s meses"],["hace 1 a\xF1o","en 1 a\xF1o"],["hace %s a\xF1os","en %s a\xF1os"]][e]}var ty=Ou.default=ey,$u={};Object.defineProperty($u,"__esModule",{value:!0});function ny(t,e){return[["juuri \xE4sken","juuri nyt"],["%s sekuntia sitten","%s sekunnin p\xE4\xE4st\xE4"],["minuutti sitten","minuutin p\xE4\xE4st\xE4"],["%s minuuttia sitten","%s minuutin p\xE4\xE4st\xE4"],["tunti sitten","tunnin p\xE4\xE4st\xE4"],["%s tuntia sitten","%s tunnin p\xE4\xE4st\xE4"],["p\xE4iv\xE4 sitten","p\xE4iv\xE4n p\xE4\xE4st\xE4"],["%s p\xE4iv\xE4\xE4 sitten","%s p\xE4iv\xE4n p\xE4\xE4st\xE4"],["viikko sitten","viikon p\xE4\xE4st\xE4"],["%s viikkoa sitten","%s viikon p\xE4\xE4st\xE4"],["kuukausi sitten","kuukauden p\xE4\xE4st\xE4"],["%s kuukautta sitten","%s kuukauden p\xE4\xE4st\xE4"],["vuosi sitten","vuoden p\xE4\xE4st\xE4"],["%s vuotta sitten","%s vuoden p\xE4\xE4st\xE4"]][e]}var ry=$u.default=ny,xu={};Object.defineProperty(xu,"__esModule",{value:!0});function oy(t,e){return[["\xE0 l'instant","dans un instant"],["il y a %s secondes","dans %s secondes"],["il y a 1 minute","dans 1 minute"],["il y a %s minutes","dans %s minutes"],["il y a 1 heure","dans 1 heure"],["il y a %s heures","dans %s heures"],["il y a 1 jour","dans 1 jour"],["il y a %s jours","dans %s jours"],["il y a 1 semaine","dans 1 semaine"],["il y a %s semaines","dans %s semaines"],["il y a 1 mois","dans 1 mois"],["il y a %s mois","dans %s mois"],["il y a 1 an","dans 1 an"],["il y a %s ans","dans %s ans"]][e]}var iy=xu.default=oy,Pu={};Object.defineProperty(Pu,"__esModule",{value:!0});function ay(t,e){return[["xusto agora","daqu\xED a un pouco"],["hai %s segundos","en %s segundos"],["hai 1 minuto","nun minuto"],["hai %s minutos","en %s minutos"],["hai 1 hora","nunha hora"],["hai %s horas","en %s horas"],["hai 1 d\xEDa","nun d\xEDa"],["hai %s d\xEDas","en %s d\xEDas"],["hai 1 semana","nunha semana"],["hai %s semanas","en %s semanas"],["hai 1 mes","nun mes"],["hai %s meses","en %s meses"],["hai 1 ano","nun ano"],["hai %s anos","en %s anos"]][e]}var sy=Pu.default=ay,Du={};Object.defineProperty(Du,"__esModule",{value:!0});function uy(t,e){return[["\u0905\u092D\u0940","\u0915\u0941\u091B \u0938\u092E\u092F"],["%s \u0938\u0947\u0915\u0902\u0921 \u092A\u0939\u0932\u0947","%s \u0938\u0947\u0915\u0902\u0921 \u092E\u0947\u0902"],["1 \u092E\u093F\u0928\u091F \u092A\u0939\u0932\u0947","1 \u092E\u093F\u0928\u091F \u092E\u0947\u0902"],["%s \u092E\u093F\u0928\u091F \u092A\u0939\u0932\u0947","%s \u092E\u093F\u0928\u091F \u092E\u0947\u0902"],["1 \u0918\u0902\u091F\u0947 \u092A\u0939\u0932\u0947","1 \u0918\u0902\u091F\u0947 \u092E\u0947\u0902"],["%s \u0918\u0902\u091F\u0947 \u092A\u0939\u0932\u0947","%s \u0918\u0902\u091F\u0947 \u092E\u0947\u0902"],["1 \u0926\u093F\u0928 \u092A\u0939\u0932\u0947","1 \u0926\u093F\u0928 \u092E\u0947\u0902"],["%s \u0926\u093F\u0928 \u092A\u0939\u0932\u0947","%s \u0926\u093F\u0928\u094B\u0902 \u092E\u0947\u0902"],["1 \u0938\u092A\u094D\u0924\u093E\u0939 \u092A\u0939\u0932\u0947","1 \u0938\u092A\u094D\u0924\u093E\u0939 \u092E\u0947\u0902"],["%s \u0939\u092B\u094D\u0924\u0947 \u092A\u0939\u0932\u0947","%s \u0939\u092B\u094D\u0924\u094B\u0902 \u092E\u0947\u0902"],["1 \u092E\u0939\u0940\u0928\u0947 \u092A\u0939\u0932\u0947","1 \u092E\u0939\u0940\u0928\u0947 \u092E\u0947\u0902"],["%s \u092E\u0939\u0940\u0928\u0947 \u092A\u0939\u0932\u0947","%s \u092E\u0939\u0940\u0928\u094B\u0902 \u092E\u0947\u0902"],["1 \u0938\u093E\u0932 \u092A\u0939\u0932\u0947","1 \u0938\u093E\u0932 \u092E\u0947\u0902"],["%s \u0938\u093E\u0932 \u092A\u0939\u0932\u0947","%s \u0938\u093E\u0932 \u092E\u0947\u0902"]][e]}var ly=Du.default=uy,Tu={};Object.defineProperty(Tu,"__esModule",{value:!0});function cy(t,e){return[["poco fa","fra poco"],["%s secondi fa","fra %s secondi"],["un minuto fa","fra un minuto"],["%s minuti fa","fra %s minuti"],["un'ora fa","fra un'ora"],["%s ore fa","fra %s ore"],["un giorno fa","fra un giorno"],["%s giorni fa","fra %s giorni"],["una settimana fa","fra una settimana"],["%s settimane fa","fra %s settimane"],["un mese fa","fra un mese"],["%s mesi fa","fra %s mesi"],["un anno fa","fra un anno"],["%s anni fa","fra %s anni"]][e]}var fy=Tu.default=cy,Mu={};Object.defineProperty(Mu,"__esModule",{value:!0});function dy(t,e){return[["\u3059\u3053\u3057\u524D","\u3059\u3050\u306B"],["%s\u79D2\u524D","%s\u79D2\u4EE5\u5185"],["1\u5206\u524D","1\u5206\u4EE5\u5185"],["%s\u5206\u524D","%s\u5206\u4EE5\u5185"],["1\u6642\u9593\u524D","1\u6642\u9593\u4EE5\u5185"],["%s\u6642\u9593\u524D","%s\u6642\u9593\u4EE5\u5185"],["1\u65E5\u524D","1\u65E5\u4EE5\u5185"],["%s\u65E5\u524D","%s\u65E5\u4EE5\u5185"],["1\u9031\u9593\u524D","1\u9031\u9593\u4EE5\u5185"],["%s\u9031\u9593\u524D","%s\u9031\u9593\u4EE5\u5185"],["1\u30F6\u6708\u524D","1\u30F6\u6708\u4EE5\u5185"],["%s\u30F6\u6708\u524D","%s\u30F6\u6708\u4EE5\u5185"],["1\u5E74\u524D","1\u5E74\u4EE5\u5185"],["%s\u5E74\u524D","%s\u5E74\u4EE5\u5185"]][e]}var py=Mu.default=dy,ku={};Object.defineProperty(ku,"__esModule",{value:!0});function hy(t,e){return[["\uBC29\uAE08","\uACE7"],["%s\uCD08 \uC804","%s\uCD08 \uD6C4"],["1\uBD84 \uC804","1\uBD84 \uD6C4"],["%s\uBD84 \uC804","%s\uBD84 \uD6C4"],["1\uC2DC\uAC04 \uC804","1\uC2DC\uAC04 \uD6C4"],["%s\uC2DC\uAC04 \uC804","%s\uC2DC\uAC04 \uD6C4"],["1\uC77C \uC804","1\uC77C \uD6C4"],["%s\uC77C \uC804","%s\uC77C \uD6C4"],["1\uC8FC\uC77C \uC804","1\uC8FC\uC77C \uD6C4"],["%s\uC8FC\uC77C \uC804","%s\uC8FC\uC77C \uD6C4"],["1\uAC1C\uC6D4 \uC804","1\uAC1C\uC6D4 \uD6C4"],["%s\uAC1C\uC6D4 \uC804","%s\uAC1C\uC6D4 \uD6C4"],["1\uB144 \uC804","1\uB144 \uD6C4"],["%s\uB144 \uC804","%s\uB144 \uD6C4"]][e]}var my=ku.default=hy,Fu={};Object.defineProperty(Fu,"__esModule",{value:!0});function vy(t,e){return[["recent","binnenkort"],["%s seconden geleden","binnen %s seconden"],["1 minuut geleden","binnen 1 minuut"],["%s minuten geleden","binnen %s minuten"],["1 uur geleden","binnen 1 uur"],["%s uur geleden","binnen %s uur"],["1 dag geleden","binnen 1 dag"],["%s dagen geleden","binnen %s dagen"],["1 week geleden","binnen 1 week"],["%s weken geleden","binnen %s weken"],["1 maand geleden","binnen 1 maand"],["%s maanden geleden","binnen %s maanden"],["1 jaar geleden","binnen 1 jaar"],["%s jaar geleden","binnen %s jaar"]][e]}var gy=Fu.default=vy,Iu={};Object.defineProperty(Iu,"__esModule",{value:!0});function yy(t,e){return[["agora mesmo","agora"],["h\xE1 %s segundos","em %s segundos"],["h\xE1 um minuto","em um minuto"],["h\xE1 %s minutos","em %s minutos"],["h\xE1 uma hora","em uma hora"],["h\xE1 %s horas","em %s horas"],["h\xE1 um dia","em um dia"],["h\xE1 %s dias","em %s dias"],["h\xE1 uma semana","em uma semana"],["h\xE1 %s semanas","em %s semanas"],["h\xE1 um m\xEAs","em um m\xEAs"],["h\xE1 %s meses","em %s meses"],["h\xE1 um ano","em um ano"],["h\xE1 %s anos","em %s anos"]][e]}var by=Iu.default=yy,Ru={};Object.defineProperty(Ru,"__esModule",{value:!0});function ut(t,e,n,r,o){var i=o%10,a=r;return o===1?a=t:i===1&&o>20?a=e:i>1&&i<5&&(o>20||o<10)&&(a=n),a}var Nu=ut.bind(null,"\u0441\u0435\u043A\u0443\u043D\u0434\u0443","%s \u0441\u0435\u043A\u0443\u043D\u0434\u0443","%s \u0441\u0435\u043A\u0443\u043D\u0434\u044B","%s \u0441\u0435\u043A\u0443\u043D\u0434"),Lu=ut.bind(null,"\u043C\u0438\u043D\u0443\u0442\u0443","%s \u043C\u0438\u043D\u0443\u0442\u0443","%s \u043C\u0438\u043D\u0443\u0442\u044B","%s \u043C\u0438\u043D\u0443\u0442"),Bu=ut.bind(null,"\u0447\u0430\u0441","%s \u0447\u0430\u0441","%s \u0447\u0430\u0441\u0430","%s \u0447\u0430\u0441\u043E\u0432"),Vu=ut.bind(null,"\u0434\u0435\u043D\u044C","%s \u0434\u0435\u043D\u044C","%s \u0434\u043D\u044F","%s \u0434\u043D\u0435\u0439"),Hu=ut.bind(null,"\u043D\u0435\u0434\u0435\u043B\u044E","%s \u043D\u0435\u0434\u0435\u043B\u044E","%s \u043D\u0435\u0434\u0435\u043B\u0438","%s \u043D\u0435\u0434\u0435\u043B\u044C"),Uu=ut.bind(null,"\u043C\u0435\u0441\u044F\u0446","%s \u043C\u0435\u0441\u044F\u0446","%s \u043C\u0435\u0441\u044F\u0446\u0430","%s \u043C\u0435\u0441\u044F\u0446\u0435\u0432"),ju=ut.bind(null,"\u0433\u043E\u0434","%s \u0433\u043E\u0434","%s \u0433\u043E\u0434\u0430","%s \u043B\u0435\u0442");function Sy(t,e){switch(e){case 0:return["\u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E","\u0447\u0435\u0440\u0435\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434"];case 1:return[Nu(t)+" \u043D\u0430\u0437\u0430\u0434","\u0447\u0435\u0440\u0435\u0437 "+Nu(t)];case 2:case 3:return[Lu(t)+" \u043D\u0430\u0437\u0430\u0434","\u0447\u0435\u0440\u0435\u0437 "+Lu(t)];case 4:case 5:return[Bu(t)+" \u043D\u0430\u0437\u0430\u0434","\u0447\u0435\u0440\u0435\u0437 "+Bu(t)];case 6:return["\u0432\u0447\u0435\u0440\u0430","\u0437\u0430\u0432\u0442\u0440\u0430"];case 7:return[Vu(t)+" \u043D\u0430\u0437\u0430\u0434","\u0447\u0435\u0440\u0435\u0437 "+Vu(t)];case 8:case 9:return[Hu(t)+" \u043D\u0430\u0437\u0430\u0434","\u0447\u0435\u0440\u0435\u0437 "+Hu(t)];case 10:case 11:return[Uu(t)+" \u043D\u0430\u0437\u0430\u0434","\u0447\u0435\u0440\u0435\u0437 "+Uu(t)];case 12:case 13:return[ju(t)+" \u043D\u0430\u0437\u0430\u0434","\u0447\u0435\u0440\u0435\u0437 "+ju(t)];default:return["",""]}}var _y=Ru.default=Sy,zu={};Object.defineProperty(zu,"__esModule",{value:!0});function Ey(t,e){return[["just nu","om en stund"],["%s sekunder sedan","om %s sekunder"],["1 minut sedan","om 1 minut"],["%s minuter sedan","om %s minuter"],["1 timme sedan","om 1 timme"],["%s timmar sedan","om %s timmar"],["1 dag sedan","om 1 dag"],["%s dagar sedan","om %s dagar"],["1 vecka sedan","om 1 vecka"],["%s veckor sedan","om %s veckor"],["1 m\xE5nad sedan","om 1 m\xE5nad"],["%s m\xE5nader sedan","om %s m\xE5nader"],["1 \xE5r sedan","om 1 \xE5r"],["%s \xE5r sedan","om %s \xE5r"]][e]}var Cy=zu.default=Ey,Wu={};Object.defineProperty(Wu,"__esModule",{value:!0});function Ay(t,e){return[["\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2A\u0E31\u0E01\u0E04\u0E23\u0E39\u0E48\u0E19\u0E35\u0E49","\u0E2D\u0E35\u0E01\u0E2A\u0E31\u0E01\u0E04\u0E23\u0E39\u0E48"],["%s \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 %s \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35"],["1 \u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 1 \u0E19\u0E32\u0E17\u0E35"],["%s \u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 %s \u0E19\u0E32\u0E17\u0E35"],["1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07"],["%s \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 %s \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07"],["1 \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 1 \u0E27\u0E31\u0E19"],["%s \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 %s \u0E27\u0E31\u0E19"],["1 \u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 1 \u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C"],["%s \u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 %s \u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C"],["1 \u0E40\u0E14\u0E37\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 1 \u0E40\u0E14\u0E37\u0E2D\u0E19"],["%s \u0E40\u0E14\u0E37\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 %s \u0E40\u0E14\u0E37\u0E2D\u0E19"],["1 \u0E1B\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 1 \u0E1B\u0E35"],["%s \u0E1B\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27","\u0E43\u0E19 %s \u0E1B\u0E35"]][e]}var wy=Wu.default=Ay,Gu={};Object.defineProperty(Gu,"__esModule",{value:!0});function Oy(t,e){return[["az \xF6nce","\u015Fimdi"],["%s saniye \xF6nce","%s saniye i\xE7inde"],["1 dakika \xF6nce","1 dakika i\xE7inde"],["%s dakika \xF6nce","%s dakika i\xE7inde"],["1 saat \xF6nce","1 saat i\xE7inde"],["%s saat \xF6nce","%s saat i\xE7inde"],["1 g\xFCn \xF6nce","1 g\xFCn i\xE7inde"],["%s g\xFCn \xF6nce","%s g\xFCn i\xE7inde"],["1 hafta \xF6nce","1 hafta i\xE7inde"],["%s hafta \xF6nce","%s hafta i\xE7inde"],["1 ay \xF6nce","1 ay i\xE7inde"],["%s ay \xF6nce","%s ay i\xE7inde"],["1 y\u0131l \xF6nce","1 y\u0131l i\xE7inde"],["%s y\u0131l \xF6nce","%s y\u0131l i\xE7inde"]][e]}var $y=Gu.default=Oy,qu={};Object.defineProperty(qu,"__esModule",{value:!0});var xy=["\u79D2","\u5206\u949F","\u5C0F\u65F6","\u5929","\u5468","\u4E2A\u6708","\u5E74"];function Py(t,e){if(e===0)return["\u521A\u521A","\u7247\u523B\u540E"];var n=xy[~~(e/2)];return[t+" "+n+"\u524D",t+" "+n+"\u540E"]}var Yu=qu.default=Py,Xu={};Object.defineProperty(Xu,"__esModule",{value:!0});function Dy(t,e){return[["\u525B\u525B","\u7247\u523B\u5F8C"],["%s \u79D2\u524D","%s \u79D2\u5F8C"],["1 \u5206\u9418\u524D","1 \u5206\u9418\u5F8C"],["%s \u5206\u9418\u524D","%s \u5206\u9418\u5F8C"],["1 \u5C0F\u6642\u524D","1 \u5C0F\u6642\u5F8C"],["%s \u5C0F\u6642\u524D","%s \u5C0F\u6642\u5F8C"],["1 \u5929\u524D","1 \u5929\u5F8C"],["%s \u5929\u524D","%s \u5929\u5F8C"],["1 \u9031\u524D","1 \u9031\u5F8C"],["%s \u9031\u524D","%s \u9031\u5F8C"],["1 \u500B\u6708\u524D","1 \u500B\u6708\u5F8C"],["%s \u500B\u6708\u524D","%s \u500B\u6708\u5F8C"],["1 \u5E74\u524D","1 \u5E74\u5F8C"],["%s \u5E74\u524D","%s \u5E74\u5F8C"]][e]}var Ty=Xu.default=Dy;const xt={ar:Cg,cs:Ag,de:wg,el:Og,es:$g,fi:xg,fr:Pg,gl:Dg,hi:Tg,it:Mg,ja:kg,ko:Fg,nl:Ig,pt:Rg,ru:Ng,sv:Lg,th:Bg,tr:Vg,ur:Hg,zh:Ug,"zh-CN":jg,"zh-TW":zg},My=Object.keys(xt),lt=new Eg({allowMissing:!0});lt.init=(t,e)=>{lt.clear(),t&&(lt.locale(t),lt.extend(xt[t])),e&&lt.extend(e)},G("ar",qg),G("cs",Xg),G("de",Jg),G("el",Qg),G("es",ty),G("fi",ry),G("fr",iy),G("gl",sy),G("hi",ly),G("it",fy),G("ja",py),G("ko",my),G("nl",gy),G("pt",by),G("ru",_y),G("sv",Cy),G("th",wy),G("tr",$y),G("zh",Yu),G("zh-CN",Yu),G("zh-TW",Ty),lt.registerMessages=(t,e)=>{xt[t]?xt[t]={...xt[t],...e}:xt[t]=e};var Se=lt,ky=t=>{const e=$e();return Gd(e,()=>t.onClickOutside()),g.createElement("ul",{ref:e,className:"r6o-comment-dropdown-menu"},g.createElement("li",{onClick:t.onEdit},Se.t("Edit")),g.createElement("li",{onClick:t.onDelete},Se.t("Delete")))},Ku={},Ro={},No={exports:{}};/*!
	autosize 4.0.4
	license: MIT
	http://www.jacklmoore.com/autosize
*/(function(t,e){(function(n,r){r(t,e)})(nt,function(n,r){var o=typeof Map=="function"?new Map:function(){var u=[],f=[];return{has:function(p){return u.indexOf(p)>-1},get:function(p){return f[u.indexOf(p)]},set:function(p,m){u.indexOf(p)===-1&&(u.push(p),f.push(m))},delete:function(p){var m=u.indexOf(p);m>-1&&(u.splice(m,1),f.splice(m,1))}}}(),i=function(f){return new Event(f,{bubbles:!0})};try{new Event("test")}catch{i=function(d){var p=document.createEvent("Event");return p.initEvent(d,!0,!1),p}}function a(u){if(!u||!u.nodeName||u.nodeName!=="TEXTAREA"||o.has(u))return;var f=null,d=null,p=null;function m(){var O=window.getComputedStyle(u,null);O.resize==="vertical"?u.style.resize="none":O.resize==="both"&&(u.style.resize="horizontal"),O.boxSizing==="content-box"?f=-(parseFloat(O.paddingTop)+parseFloat(O.paddingBottom)):f=parseFloat(O.borderTopWidth)+parseFloat(O.borderBottomWidth),isNaN(f)&&(f=0),C()}function b(O){{var k=u.style.width;u.style.width="0px",u.offsetWidth,u.style.width=k}u.style.overflowY=O}function v(O){for(var k=[];O&&O.parentNode&&O.parentNode instanceof Element;)O.parentNode.scrollTop&&k.push({node:O.parentNode,scrollTop:O.parentNode.scrollTop}),O=O.parentNode;return k}function S(){if(u.scrollHeight!==0){var O=v(u),k=document.documentElement&&document.documentElement.scrollTop;u.style.height="",u.style.height=u.scrollHeight+f+"px",d=u.clientWidth,O.forEach(function(x){x.node.scrollTop=x.scrollTop}),k&&(document.documentElement.scrollTop=k)}}function C(){S();var O=Math.round(parseFloat(u.style.height)),k=window.getComputedStyle(u,null),x=k.boxSizing==="content-box"?Math.round(parseFloat(k.height)):u.offsetHeight;if(x<O?k.overflowY==="hidden"&&(b("scroll"),S(),x=k.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(u,null).height)):u.offsetHeight):k.overflowY!=="hidden"&&(b("hidden"),S(),x=k.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(u,null).height)):u.offsetHeight),p!==x){p=x;var X=i("autosize:resized");try{u.dispatchEvent(X)}catch{}}}var P=function(){u.clientWidth!==d&&C()},F=function(O){window.removeEventListener("resize",P,!1),u.removeEventListener("input",C,!1),u.removeEventListener("keyup",C,!1),u.removeEventListener("autosize:destroy",F,!1),u.removeEventListener("autosize:update",C,!1),Object.keys(O).forEach(function(k){u.style[k]=O[k]}),o.delete(u)}.bind(u,{height:u.style.height,resize:u.style.resize,overflowY:u.style.overflowY,overflowX:u.style.overflowX,wordWrap:u.style.wordWrap});u.addEventListener("autosize:destroy",F,!1),"onpropertychange"in u&&"oninput"in u&&u.addEventListener("keyup",C,!1),window.addEventListener("resize",P,!1),u.addEventListener("input",C,!1),u.addEventListener("autosize:update",C,!1),u.style.overflowX="hidden",u.style.wordWrap="break-word",o.set(u,{destroy:F,update:C}),m()}function s(u){var f=o.get(u);f&&f.destroy()}function l(u){var f=o.get(u);f&&f.update()}var c=null;typeof window=="undefined"||typeof window.getComputedStyle!="function"?(c=function(f){return f},c.destroy=function(u){return u},c.update=function(u){return u}):(c=function(f,d){return f&&Array.prototype.forEach.call(f.length?f:[f],function(p){return a(p)}),f},c.destroy=function(u){return u&&Array.prototype.forEach.call(u.length?u:[u],s),u},c.update=function(u){return u&&Array.prototype.forEach.call(u.length?u:[u],l),u}),r.default=c,n.exports=r.default})})(No,No.exports);var Fy=function(t,e,n){return n=window.getComputedStyle,(n?n(t):t.currentStyle)[e.replace(/-(\w)/gi,function(r,o){return o.toUpperCase()})]},Iy=Fy,Lo=Iy;function Ry(t){var e=Lo(t,"line-height"),n=parseFloat(e,10);if(e===n+""){var r=t.style.lineHeight;t.style.lineHeight=e+"em",e=Lo(t,"line-height"),n=parseFloat(e,10),r?t.style.lineHeight=r:delete t.style.lineHeight}if(e.indexOf("pt")!==-1?(n*=4,n/=3):e.indexOf("mm")!==-1?(n*=96,n/=25.4):e.indexOf("cm")!==-1?(n*=96,n/=2.54):e.indexOf("in")!==-1?n*=96:e.indexOf("pc")!==-1&&(n*=16),n=Math.round(n),e==="normal"){var o=t.nodeName,i=document.createElement(o);i.innerHTML="&nbsp;",o.toUpperCase()==="TEXTAREA"&&i.setAttribute("rows","1");var a=Lo(t,"font-size");i.style.fontSize=a,i.style.padding="0px",i.style.border="0px";var s=document.body;s.appendChild(i);var l=i.offsetHeight;n=l,s.removeChild(i)}return n}var Ny=Ry,Ly=nt&&nt.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Bo=nt&&nt.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},By=nt&&nt.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]]);return n};Ro.__esModule=!0;var jn=yt,Jt=zt.exports,zn=No.exports,Vy=Ny,Hy=Vy,Ju="autosize:resized",Uy=function(t){Ly(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.state={lineHeight:null},n.textarea=null,n.onResize=function(r){n.props.onResize&&n.props.onResize(r)},n.updateLineHeight=function(){n.textarea&&n.setState({lineHeight:Hy(n.textarea)})},n.onChange=function(r){var o=n.props.onChange;n.currentValue=r.currentTarget.value,o&&o(r)},n}return e.prototype.componentDidMount=function(){var n=this,r=this.props,o=r.maxRows,i=r.async;typeof o=="number"&&this.updateLineHeight(),typeof o=="number"||i?setTimeout(function(){return n.textarea&&zn(n.textarea)}):this.textarea&&zn(this.textarea),this.textarea&&this.textarea.addEventListener(Ju,this.onResize)},e.prototype.componentWillUnmount=function(){this.textarea&&(this.textarea.removeEventListener(Ju,this.onResize),zn.destroy(this.textarea))},e.prototype.render=function(){var n=this,r=this,o=r.props;o.onResize;var i=o.maxRows;o.onChange;var a=o.style;o.innerRef;var s=o.children,l=By(o,["onResize","maxRows","onChange","style","innerRef","children"]),c=r.state.lineHeight,u=i&&c?c*i:null;return jn.createElement("textarea",Bo({},l,{onChange:this.onChange,style:u?Bo({},a,{maxHeight:u}):a,ref:function(f){n.textarea=f,typeof n.props.innerRef=="function"?n.props.innerRef(f):n.props.innerRef&&(n.props.innerRef.current=f)}}),s)},e.prototype.componentDidUpdate=function(){this.textarea&&zn.update(this.textarea)},e.defaultProps={rows:1,async:!1},e.propTypes={rows:Jt.number,maxRows:Jt.number,onResize:Jt.func,innerRef:Jt.any,async:Jt.bool},e}(jn.Component);Ro.TextareaAutosize=jn.forwardRef(function(t,e){return jn.createElement(Uy,Bo({},t,{innerRef:e}))}),function(t){t.__esModule=!0;var e=Ro;t.default=e.TextareaAutosize}(Ku);var jy=vf(Ku);class Zu extends J{constructor(n){super(n);h(this,"onKeyDown",n=>{n.which===13&&n.ctrlKey&&this.props.onSaveAndClose()});h(this,"onKeyUp",n=>{n.which===46&&n.stopPropagation()});this.element=$r()}componentDidMount(){this.props.focus&&this.element.current&&this.element.current.focus({preventScroll:!0})}render(){return g.createElement(jy,{ref:this.element,className:"r6o-editable-text",value:this.props.content,placeholder:this.props.placeholder||Se.t("Add a comment..."),disabled:!this.props.editable,onChange:this.props.onChange,onKeyUp:this.onKeyUp,onKeyDown:this.onKeyDown})}}function T(){return T=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},T.apply(this,arguments)}function zy(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function Wy(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var Gy=function(){function t(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Wy(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=zy(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),ce="-ms-",Wn="-moz-",N="-webkit-",Qu="comm",Vo="rule",Ho="decl",qy="@import",el="@keyframes",Yy="@layer",Xy=Math.abs,Gn=String.fromCharCode,Ky=Object.assign;function Jy(t,e){return oe(t,0)^45?(((e<<2^oe(t,0))<<2^oe(t,1))<<2^oe(t,2))<<2^oe(t,3):0}function tl(t){return t.trim()}function Zy(t,e){return(t=e.exec(t))?t[0]:t}function L(t,e,n){return t.replace(e,n)}function Uo(t,e){return t.indexOf(e)}function oe(t,e){return t.charCodeAt(e)|0}function Zt(t,e,n){return t.slice(e,n)}function Me(t){return t.length}function jo(t){return t.length}function qn(t,e){return e.push(t),t}function Qy(t,e){return t.map(e).join("")}var Yn=1,Pt=1,nl=0,ve=0,K=0,Dt="";function Xn(t,e,n,r,o,i,a){return{value:t,root:e,parent:n,type:r,props:o,children:i,line:Yn,column:Pt,length:a,return:""}}function Qt(t,e){return Ky(Xn("",null,null,"",null,null,0),t,{length:-t.length},e)}function e0(){return K}function t0(){return K=ve>0?oe(Dt,--ve):0,Pt--,K===10&&(Pt=1,Yn--),K}function _e(){return K=ve<nl?oe(Dt,ve++):0,Pt++,K===10&&(Pt=1,Yn++),K}function ke(){return oe(Dt,ve)}function Kn(){return ve}function en(t,e){return Zt(Dt,t,e)}function tn(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rl(t){return Yn=Pt=1,nl=Me(Dt=t),ve=0,[]}function ol(t){return Dt="",t}function Jn(t){return tl(en(ve-1,zo(t===91?t+2:t===40?t+1:t)))}function n0(t){for(;(K=ke())&&K<33;)_e();return tn(t)>2||tn(K)>3?"":" "}function r0(t,e){for(;--e&&_e()&&!(K<48||K>102||K>57&&K<65||K>70&&K<97););return en(t,Kn()+(e<6&&ke()==32&&_e()==32))}function zo(t){for(;_e();)switch(K){case t:return ve;case 34:case 39:t!==34&&t!==39&&zo(K);break;case 40:t===41&&zo(t);break;case 92:_e();break}return ve}function o0(t,e){for(;_e()&&t+K!==47+10;)if(t+K===42+42&&ke()===47)break;return"/*"+en(e,ve-1)+"*"+Gn(t===47?t:_e())}function i0(t){for(;!tn(ke());)_e();return en(t,ve)}function a0(t){return ol(Zn("",null,null,null,[""],t=rl(t),0,[0],t))}function Zn(t,e,n,r,o,i,a,s,l){for(var c=0,u=0,f=a,d=0,p=0,m=0,b=1,v=1,S=1,C=0,P="",F=o,O=i,k=r,x=P;v;)switch(m=C,C=_e()){case 40:if(m!=108&&oe(x,f-1)==58){Uo(x+=L(Jn(C),"&","&\f"),"&\f")!=-1&&(S=-1);break}case 34:case 39:case 91:x+=Jn(C);break;case 9:case 10:case 13:case 32:x+=n0(m);break;case 92:x+=r0(Kn()-1,7);continue;case 47:switch(ke()){case 42:case 47:qn(s0(o0(_e(),Kn()),e,n),l);break;default:x+="/"}break;case 123*b:s[c++]=Me(x)*S;case 125*b:case 59:case 0:switch(C){case 0:case 125:v=0;case 59+u:S==-1&&(x=L(x,/\f/g,"")),p>0&&Me(x)-f&&qn(p>32?al(x+";",r,n,f-1):al(L(x," ","")+";",r,n,f-2),l);break;case 59:x+=";";default:if(qn(k=il(x,e,n,c,u,o,s,P,F=[],O=[],f),i),C===123)if(u===0)Zn(x,e,k,k,F,i,f,s,O);else switch(d===99&&oe(x,3)===110?100:d){case 100:case 108:case 109:case 115:Zn(t,k,k,r&&qn(il(t,k,k,0,0,o,s,P,o,F=[],f),O),o,O,f,s,r?F:O);break;default:Zn(x,k,k,k,[""],O,0,s,O)}}c=u=p=0,b=S=1,P=x="",f=a;break;case 58:f=1+Me(x),p=m;default:if(b<1){if(C==123)--b;else if(C==125&&b++==0&&t0()==125)continue}switch(x+=Gn(C),C*b){case 38:S=u>0?1:(x+="\f",-1);break;case 44:s[c++]=(Me(x)-1)*S,S=1;break;case 64:ke()===45&&(x+=Jn(_e())),d=ke(),u=f=Me(P=x+=i0(Kn())),C++;break;case 45:m===45&&Me(x)==2&&(b=0)}}return i}function il(t,e,n,r,o,i,a,s,l,c,u){for(var f=o-1,d=o===0?i:[""],p=jo(d),m=0,b=0,v=0;m<r;++m)for(var S=0,C=Zt(t,f+1,f=Xy(b=a[m])),P=t;S<p;++S)(P=tl(b>0?d[S]+" "+C:L(C,/&\f/g,d[S])))&&(l[v++]=P);return Xn(t,e,n,o===0?Vo:s,l,c,u)}function s0(t,e,n){return Xn(t,e,n,Qu,Gn(e0()),Zt(t,2,-2),0)}function al(t,e,n,r){return Xn(t,e,n,Ho,Zt(t,0,r),Zt(t,r+1,-1),r)}function Tt(t,e){for(var n="",r=jo(t),o=0;o<r;o++)n+=e(t[o],o,t,e)||"";return n}function u0(t,e,n,r){switch(t.type){case Yy:if(t.children.length)break;case qy:case Ho:return t.return=t.return||t.value;case Qu:return"";case el:return t.return=t.value+"{"+Tt(t.children,r)+"}";case Vo:t.value=t.props.join(",")}return Me(n=Tt(t.children,r))?t.return=t.value+"{"+n+"}":""}function l0(t){var e=jo(t);return function(n,r,o,i){for(var a="",s=0;s<e;s++)a+=t[s](n,r,o,i)||"";return a}}function c0(t){return function(e){e.root||(e=e.return)&&t(e)}}function f0(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var d0=function(e,n,r){for(var o=0,i=0;o=i,i=ke(),o===38&&i===12&&(n[r]=1),!tn(i);)_e();return en(e,ve)},p0=function(e,n){var r=-1,o=44;do switch(tn(o)){case 0:o===38&&ke()===12&&(n[r]=1),e[r]+=d0(ve-1,n,r);break;case 2:e[r]+=Jn(o);break;case 4:if(o===44){e[++r]=ke()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=Gn(o)}while(o=_e());return e},h0=function(e,n){return ol(p0(rl(e),n))},sl=new WeakMap,m0=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,o=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!sl.get(r))&&!o){sl.set(e,!0);for(var i=[],a=h0(n,i),s=r.props,l=0,c=0;l<a.length;l++)for(var u=0;u<s.length;u++,c++)e.props[c]=i[l]?a[l].replace(/&\f/g,s[u]):s[u]+" "+a[l]}}},v0=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function ul(t,e){switch(Jy(t,e)){case 5103:return N+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return N+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return N+t+Wn+t+ce+t+t;case 6828:case 4268:return N+t+ce+t+t;case 6165:return N+t+ce+"flex-"+t+t;case 5187:return N+t+L(t,/(\w+).+(:[^]+)/,N+"box-$1$2"+ce+"flex-$1$2")+t;case 5443:return N+t+ce+"flex-item-"+L(t,/flex-|-self/,"")+t;case 4675:return N+t+ce+"flex-line-pack"+L(t,/align-content|flex-|-self/,"")+t;case 5548:return N+t+ce+L(t,"shrink","negative")+t;case 5292:return N+t+ce+L(t,"basis","preferred-size")+t;case 6060:return N+"box-"+L(t,"-grow","")+N+t+ce+L(t,"grow","positive")+t;case 4554:return N+L(t,/([^-])(transform)/g,"$1"+N+"$2")+t;case 6187:return L(L(L(t,/(zoom-|grab)/,N+"$1"),/(image-set)/,N+"$1"),t,"")+t;case 5495:case 3959:return L(t,/(image-set\([^]*)/,N+"$1$`$1");case 4968:return L(L(t,/(.+:)(flex-)?(.*)/,N+"box-pack:$3"+ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+N+t+t;case 4095:case 3583:case 4068:case 2532:return L(t,/(.+)-inline(.+)/,N+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Me(t)-1-e>6)switch(oe(t,e+1)){case 109:if(oe(t,e+4)!==45)break;case 102:return L(t,/(.+:)(.+)-([^]+)/,"$1"+N+"$2-$3$1"+Wn+(oe(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Uo(t,"stretch")?ul(L(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(oe(t,e+1)!==115)break;case 6444:switch(oe(t,Me(t)-3-(~Uo(t,"!important")&&10))){case 107:return L(t,":",":"+N)+t;case 101:return L(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+N+(oe(t,14)===45?"inline-":"")+"box$3$1"+N+"$2$3$1"+ce+"$2box$3")+t}break;case 5936:switch(oe(t,e+11)){case 114:return N+t+ce+L(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return N+t+ce+L(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return N+t+ce+L(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return N+t+ce+t+t}return t}var g0=function(e,n,r,o){if(e.length>-1&&!e.return)switch(e.type){case Ho:e.return=ul(e.value,e.length);break;case el:return Tt([Qt(e,{value:L(e.value,"@","@"+N)})],o);case Vo:if(e.length)return Qy(e.props,function(i){switch(Zy(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Tt([Qt(e,{props:[L(i,/:(read-\w+)/,":"+Wn+"$1")]})],o);case"::placeholder":return Tt([Qt(e,{props:[L(i,/:(plac\w+)/,":"+N+"input-$1")]}),Qt(e,{props:[L(i,/:(plac\w+)/,":"+Wn+"$1")]}),Qt(e,{props:[L(i,/:(plac\w+)/,ce+"input-$1")]})],o)}return""})}},y0=[g0],b0=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(b){var v=b.getAttribute("data-emotion");v.indexOf(" ")!==-1&&(document.head.appendChild(b),b.setAttribute("data-s",""))})}var o=e.stylisPlugins||y0,i={},a,s=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(b){for(var v=b.getAttribute("data-emotion").split(" "),S=1;S<v.length;S++)i[v[S]]=!0;s.push(b)});var l,c=[m0,v0];{var u,f=[u0,c0(function(b){u.insert(b)})],d=l0(c.concat(o,f)),p=function(v){return Tt(a0(v),d)};l=function(v,S,C,P){u=C,p(v?v+"{"+S.styles+"}":S.styles),P&&(m.inserted[S.name]=!0)}}var m={key:n,sheet:new Gy({key:n,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:l};return m.sheet.hydrate(s),m},ll={exports:{}},V={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee=typeof Symbol=="function"&&Symbol.for,Wo=ee?Symbol.for("react.element"):60103,Go=ee?Symbol.for("react.portal"):60106,Qn=ee?Symbol.for("react.fragment"):60107,er=ee?Symbol.for("react.strict_mode"):60108,tr=ee?Symbol.for("react.profiler"):60114,nr=ee?Symbol.for("react.provider"):60109,rr=ee?Symbol.for("react.context"):60110,qo=ee?Symbol.for("react.async_mode"):60111,or=ee?Symbol.for("react.concurrent_mode"):60111,ir=ee?Symbol.for("react.forward_ref"):60112,ar=ee?Symbol.for("react.suspense"):60113,S0=ee?Symbol.for("react.suspense_list"):60120,sr=ee?Symbol.for("react.memo"):60115,ur=ee?Symbol.for("react.lazy"):60116,_0=ee?Symbol.for("react.block"):60121,E0=ee?Symbol.for("react.fundamental"):60117,C0=ee?Symbol.for("react.responder"):60118,A0=ee?Symbol.for("react.scope"):60119;function Ee(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Wo:switch(t=t.type,t){case qo:case or:case Qn:case tr:case er:case ar:return t;default:switch(t=t&&t.$$typeof,t){case rr:case ir:case ur:case sr:case nr:return t;default:return e}}case Go:return e}}}function cl(t){return Ee(t)===or}V.AsyncMode=qo,V.ConcurrentMode=or,V.ContextConsumer=rr,V.ContextProvider=nr,V.Element=Wo,V.ForwardRef=ir,V.Fragment=Qn,V.Lazy=ur,V.Memo=sr,V.Portal=Go,V.Profiler=tr,V.StrictMode=er,V.Suspense=ar,V.isAsyncMode=function(t){return cl(t)||Ee(t)===qo},V.isConcurrentMode=cl,V.isContextConsumer=function(t){return Ee(t)===rr},V.isContextProvider=function(t){return Ee(t)===nr},V.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wo},V.isForwardRef=function(t){return Ee(t)===ir},V.isFragment=function(t){return Ee(t)===Qn},V.isLazy=function(t){return Ee(t)===ur},V.isMemo=function(t){return Ee(t)===sr},V.isPortal=function(t){return Ee(t)===Go},V.isProfiler=function(t){return Ee(t)===tr},V.isStrictMode=function(t){return Ee(t)===er},V.isSuspense=function(t){return Ee(t)===ar},V.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Qn||t===or||t===tr||t===er||t===ar||t===S0||typeof t=="object"&&t!==null&&(t.$$typeof===ur||t.$$typeof===sr||t.$$typeof===nr||t.$$typeof===rr||t.$$typeof===ir||t.$$typeof===E0||t.$$typeof===C0||t.$$typeof===A0||t.$$typeof===_0)},V.typeOf=Ee,ll.exports=V;var fl=ll.exports,w0={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},O0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dl={};dl[fl.ForwardRef]=w0,dl[fl.Memo]=O0;var $0=!0;function pl(t,e,n){var r="";return n.split(" ").forEach(function(o){t[o]!==void 0?e.push(t[o]+";"):r+=o+" "}),r}var Yo=function(e,n,r){var o=e.key+"-"+n.name;(r===!1||$0===!1)&&e.registered[o]===void 0&&(e.registered[o]=n.styles)},hl=function(e,n,r){Yo(e,n,r);var o=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var i=n;do e.insert(n===i?"."+o:"",i,e.sheet,!0),i=i.next;while(i!==void 0)}};function x0(t){for(var e=0,n,r=0,o=t.length;o>=4;++r,o-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(o){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var P0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},D0=/[A-Z]|^ms/g,T0=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ml=function(e){return e.charCodeAt(1)===45},vl=function(e){return e!=null&&typeof e!="boolean"},Xo=f0(function(t){return ml(t)?t:t.replace(D0,"-$&").toLowerCase()}),gl=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(T0,function(r,o,i){return Fe={name:o,styles:i,next:Fe},o})}return P0[e]!==1&&!ml(e)&&typeof n=="number"&&n!==0?n+"px":n},GE="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function nn(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Fe={name:n.name,styles:n.styles,next:Fe},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Fe={name:r.name,styles:r.styles,next:Fe},r=r.next;var o=n.styles+";";return o}return M0(t,e,n)}case"function":{if(t!==void 0){var i=Fe,a=n(t);return Fe=i,nn(t,e,a)}break}}if(e==null)return n;var s=e[n];return s!==void 0?s:n}function M0(t,e,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=nn(t,e,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object")e!=null&&e[a]!==void 0?r+=i+"{"+e[a]+"}":vl(a)&&(r+=Xo(i)+":"+gl(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(e==null||e[a[0]]===void 0))for(var s=0;s<a.length;s++)vl(a[s])&&(r+=Xo(i)+":"+gl(i,a[s])+";");else{var l=nn(t,e,a);switch(i){case"animation":case"animationName":{r+=Xo(i)+":"+l+";";break}default:r+=i+"{"+l+"}"}}}return r}var yl=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Fe,Ko=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var o=!0,i="";Fe=void 0;var a=e[0];a==null||a.raw===void 0?(o=!1,i+=nn(r,n,a)):i+=a[0];for(var s=1;s<e.length;s++)i+=nn(r,n,e[s]),o&&(i+=a[s]);yl.lastIndex=0;for(var l="",c;(c=yl.exec(i))!==null;)l+="-"+c[1];var u=x0(i)+l;return{name:u,styles:i,next:Fe}},k0=function(e){return e()},F0=Br["useInsertionEffect"]?Br["useInsertionEffect"]:!1,bl=F0||k0,Jo={}.hasOwnProperty,Sl=Vt(typeof HTMLElement!="undefined"?b0({key:"css"}):null);Sl.Provider;var _l=function(e){return Rr(function(n,r){var o=Ht(Sl);return e(n,o,r)})},El=Vt({}),Zo="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",I0=function(e,n){var r={};for(var o in n)Jo.call(n,o)&&(r[o]=n[o]);return r[Zo]=e,r},R0=function(e){var n=e.cache,r=e.serialized,o=e.isStringTag;return Yo(n,r,o),bl(function(){return hl(n,r,o)}),null},N0=_l(function(t,e,n){var r=t.css;typeof r=="string"&&e.registered[r]!==void 0&&(r=e.registered[r]);var o=t[Zo],i=[r],a="";typeof t.className=="string"?a=pl(e.registered,i,t.className):t.className!=null&&(a=t.className+" ");var s=Ko(i,void 0,Ht(El));a+=e.key+"-"+s.name;var l={};for(var c in t)Jo.call(t,c)&&c!=="css"&&c!==Zo&&(l[c]=t[c]);return l.ref=n,l.className=a,Q(Ce,null,Q(R0,{cache:e,serialized:s,isStringTag:typeof o=="string"}),Q(o,l))}),L0=N0,M=function(e,n){var r=arguments;if(n==null||!Jo.call(n,"css"))return Q.apply(void 0,r);var o=r.length,i=new Array(o);i[0]=L0,i[1]=I0(e,n);for(var a=2;a<o;a++)i[a]=r[a];return Q.apply(null,i)};function Qo(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Ko(e)}var B0=function(){var e=Qo.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},V0=function t(e){for(var n=e.length,r=0,o="";r<n;r++){var i=e[r];if(i!=null){var a=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))a=t(i);else{a="";for(var s in i)i[s]&&s&&(a&&(a+=" "),a+=s)}break}default:a=i}a&&(o&&(o+=" "),o+=a)}}return o};function H0(t,e,n){var r=[],o=pl(t,r,n);return r.length<2?n:o+e(r)}var U0=function(e){var n=e.cache,r=e.serializedArr;return bl(function(){for(var o=0;o<r.length;o++)hl(n,r[o],!1)}),null},j0=_l(function(t,e){var n=!1,r=[],o=function(){for(var c=arguments.length,u=new Array(c),f=0;f<c;f++)u[f]=arguments[f];var d=Ko(u,e.registered);return r.push(d),Yo(e,d,!1),e.key+"-"+d.name},i=function(){for(var c=arguments.length,u=new Array(c),f=0;f<c;f++)u[f]=arguments[f];return H0(e.registered,o,V0(u))},a={css:o,cx:i,theme:Ht(El)},s=t.children(a);return n=!0,Q(Ce,null,Q(U0,{cache:e,serializedArr:r}),s)});function z0(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function ei(t,e){if(t==null)return{};var n={},r=Object.keys(t),o,i;for(i=0;i<r.length;i++)o=r[i],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}function Mt(t,e){if(t==null)return{};var n=ei(t,e),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function kt(t){return kt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},kt(t)}var Cl={};Object.defineProperty(Cl,"__esModule",{value:!0});var ti=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Al=function(){function t(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),wl=yt,rn=Ol(wl),W0=zt.exports,Z=Ol(W0);function Ol(t){return t&&t.__esModule?t:{default:t}}function G0(t,e){var n={};for(var r in t)e.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(t,r)||(n[r]=t[r]);return n}function q0(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Y0(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function X0(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var $l={position:"absolute",top:0,left:0,visibility:"hidden",height:0,overflow:"scroll",whiteSpace:"pre"},K0=["extraWidth","injectStyles","inputClassName","inputRef","inputStyle","minWidth","onAutosize","placeholderIsMinWidth"],J0=function(e){return K0.forEach(function(n){return delete e[n]}),e},xl=function(e,n){n.style.fontSize=e.fontSize,n.style.fontFamily=e.fontFamily,n.style.fontWeight=e.fontWeight,n.style.fontStyle=e.fontStyle,n.style.letterSpacing=e.letterSpacing,n.style.textTransform=e.textTransform},Pl=typeof window!="undefined"&&window.navigator?/MSIE |Trident\/|Edge\//.test(window.navigator.userAgent):!1,Dl=function(){return Pl?"_"+Math.random().toString(36).substr(2,12):void 0},ni=function(t){X0(e,t),Al(e,null,[{key:"getDerivedStateFromProps",value:function(r,o){var i=r.id;return i!==o.prevId?{inputId:i||Dl(),prevId:i}:null}}]);function e(n){q0(this,e);var r=Y0(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return r.inputRef=function(o){r.input=o,typeof r.props.inputRef=="function"&&r.props.inputRef(o)},r.placeHolderSizerRef=function(o){r.placeHolderSizer=o},r.sizerRef=function(o){r.sizer=o},r.state={inputWidth:n.minWidth,inputId:n.id||Dl(),prevId:n.id},r}return Al(e,[{key:"componentDidMount",value:function(){this.mounted=!0,this.copyInputStyles(),this.updateInputWidth()}},{key:"componentDidUpdate",value:function(r,o){o.inputWidth!==this.state.inputWidth&&typeof this.props.onAutosize=="function"&&this.props.onAutosize(this.state.inputWidth),this.updateInputWidth()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"copyInputStyles",value:function(){if(!(!this.mounted||!window.getComputedStyle)){var r=this.input&&window.getComputedStyle(this.input);!r||(xl(r,this.sizer),this.placeHolderSizer&&xl(r,this.placeHolderSizer))}}},{key:"updateInputWidth",value:function(){if(!(!this.mounted||!this.sizer||typeof this.sizer.scrollWidth=="undefined")){var r=void 0;this.props.placeholder&&(!this.props.value||this.props.value&&this.props.placeholderIsMinWidth)?r=Math.max(this.sizer.scrollWidth,this.placeHolderSizer.scrollWidth)+2:r=this.sizer.scrollWidth+2;var o=this.props.type==="number"&&this.props.extraWidth===void 0?16:parseInt(this.props.extraWidth)||0;r+=o,r<this.props.minWidth&&(r=this.props.minWidth),r!==this.state.inputWidth&&this.setState({inputWidth:r})}}},{key:"getInput",value:function(){return this.input}},{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"select",value:function(){this.input.select()}},{key:"renderStyles",value:function(){var r=this.props.injectStyles;return Pl&&r?rn.default.createElement("style",{dangerouslySetInnerHTML:{__html:"input#"+this.state.inputId+"::-ms-clear {display: none;}"}}):null}},{key:"render",value:function(){var r=[this.props.defaultValue,this.props.value,""].reduce(function(s,l){return s!=null?s:l}),o=ti({},this.props.style);o.display||(o.display="inline-block");var i=ti({boxSizing:"content-box",width:this.state.inputWidth+"px"},this.props.inputStyle),a=G0(this.props,[]);return J0(a),a.className=this.props.inputClassName,a.id=this.state.inputId,a.style=i,rn.default.createElement("div",{className:this.props.className,style:o},this.renderStyles(),rn.default.createElement("input",ti({},a,{ref:this.inputRef})),rn.default.createElement("div",{ref:this.sizerRef,style:$l},r),this.props.placeholder?rn.default.createElement("div",{ref:this.placeHolderSizerRef,style:$l},this.props.placeholder):null)}}]),e}(wl.Component);ni.propTypes={className:Z.default.string,defaultValue:Z.default.any,extraWidth:Z.default.oneOfType([Z.default.number,Z.default.string]),id:Z.default.string,injectStyles:Z.default.bool,inputClassName:Z.default.string,inputRef:Z.default.func,inputStyle:Z.default.object,minWidth:Z.default.oneOfType([Z.default.number,Z.default.string]),onAutosize:Z.default.func,onChange:Z.default.func,placeholder:Z.default.string,placeholderIsMinWidth:Z.default.bool,style:Z.default.object,value:Z.default.any},ni.defaultProps={minWidth:1,injectStyles:!0};var Z0=Cl.default=ni;function lr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Q0(t,e){if(kt(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(kt(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Tl(t){var e=Q0(t,"string");return kt(e)==="symbol"?e:String(e)}function Ml(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Tl(r.key),r)}}function cr(t,e,n){return e&&Ml(t.prototype,e),n&&Ml(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function fr(t,e){return fr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},fr(t,e)}function dr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&fr(t,e)}function je(t,e,n){return e=Tl(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function eb(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function kl(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function ie(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?kl(Object(n),!0).forEach(function(r){eb(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):kl(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function pr(t){return pr=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},pr(t)}function tb(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function nb(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function rb(t,e){return e&&(typeof e=="object"||typeof e=="function")?e:nb(t)}function hr(t){var e=tb();return function(){var r=pr(t),o;if(e){var i=pr(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return rb(this,o)}}var mr=function(){};function ob(t,e){return e?e[0]==="-"?t+e:t+"__"+e:t}function ib(t,e,n){var r=[n];if(e&&t)for(var o in e)e.hasOwnProperty(o)&&e[o]&&r.push("".concat(ob(t,o)));return r.filter(function(i){return i}).map(function(i){return String(i).trim()}).join(" ")}var Fl=function(e){return Array.isArray(e)?e.filter(Boolean):kt(e)==="object"&&e!==null?[e]:[]},Il=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var n=Mt(e,["className","clearValue","cx","getStyles","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"]);return ie({},n)};function ri(t){return[document.documentElement,document.body,window].indexOf(t)>-1}function Rl(t){return ri(t)?window.pageYOffset:t.scrollTop}function vr(t,e){if(ri(t)){window.scrollTo(0,e);return}t.scrollTop=e}function ab(t){var e=getComputedStyle(t),n=e.position==="absolute",r=/(auto|scroll)/,o=document.documentElement;if(e.position==="fixed")return o;for(var i=t;i=i.parentElement;)if(e=getComputedStyle(i),!(n&&e.position==="static")&&r.test(e.overflow+e.overflowY+e.overflowX))return i;return o}function sb(t,e,n,r){return n*((t=t/r-1)*t*t+1)+e}function gr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:mr,o=Rl(t),i=e-o,a=10,s=0;function l(){s+=a;var c=sb(s,o,i,n);vr(t,c),s<n?window.requestAnimationFrame(l):r(t)}l()}function ub(t,e){var n=t.getBoundingClientRect(),r=e.getBoundingClientRect(),o=e.offsetHeight/3;r.bottom+o>n.bottom?vr(t,Math.min(e.offsetTop+e.clientHeight-t.offsetHeight+o,t.scrollHeight)):r.top-o<n.top&&vr(t,Math.max(e.offsetTop-o,0))}function lb(t){var e=t.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Nl(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function cb(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Ll=!1,fb={get passive(){return Ll=!0}},yr=typeof window!="undefined"?window:{};yr.addEventListener&&yr.removeEventListener&&(yr.addEventListener("p",mr,fb),yr.removeEventListener("p",mr,!1));var db=Ll;function pb(t){var e=t.maxHeight,n=t.menuEl,r=t.minHeight,o=t.placement,i=t.shouldScroll,a=t.isFixedPosition,s=t.theme,l=s.spacing,c=ab(n),u={placement:"bottom",maxHeight:e};if(!n||!n.offsetParent)return u;var f=c.getBoundingClientRect(),d=f.height,p=n.getBoundingClientRect(),m=p.bottom,b=p.height,v=p.top,S=n.offsetParent.getBoundingClientRect(),C=S.top,P=window.innerHeight,F=Rl(c),O=parseInt(getComputedStyle(n).marginBottom,10),k=parseInt(getComputedStyle(n).marginTop,10),x=C-k,X=P-v,H=x+F,fe=d-F-v,W=m-P+F+O,z=F+v-k,Y=160;switch(o){case"auto":case"bottom":if(X>=b)return{placement:"bottom",maxHeight:e};if(fe>=b&&!a)return i&&gr(c,W,Y),{placement:"bottom",maxHeight:e};if(!a&&fe>=r||a&&X>=r){i&&gr(c,W,Y);var de=a?X-O:fe-O;return{placement:"bottom",maxHeight:de}}if(o==="auto"||a){var Ie=e,he=a?x:H;return he>=r&&(Ie=Math.min(he-O-l.controlHeight,e)),{placement:"top",maxHeight:Ie}}if(o==="bottom")return i&&vr(c,W),{placement:"bottom",maxHeight:e};break;case"top":if(x>=b)return{placement:"top",maxHeight:e};if(H>=b&&!a)return i&&gr(c,z,Y),{placement:"top",maxHeight:e};if(!a&&H>=r||a&&x>=r){var te=e;return(!a&&H>=r||a&&x>=r)&&(te=a?x-k:H-k),i&&gr(c,z,Y),{placement:"top",maxHeight:te}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(o,'".'))}return u}function hb(t){var e={bottom:"top",top:"bottom"};return t?e[t]:"bottom"}var oi=function(e){return e==="auto"?"bottom":e},mb=function(e){var n,r=e.placement,o=e.theme,i=o.borderRadius,a=o.spacing,s=o.colors;return n={label:"menu"},je(n,hb(r),"100%"),je(n,"backgroundColor",s.neutral0),je(n,"borderRadius",i),je(n,"boxShadow","0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)"),je(n,"marginBottom",a.menuGutter),je(n,"marginTop",a.menuGutter),je(n,"position","absolute"),je(n,"width","100%"),je(n,"zIndex",1),n},Bl=Vt({getPortalPlacement:null}),Vl=function(t){dr(n,t);var e=hr(n);function n(){var r;lr(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=e.call.apply(e,[this].concat(i)),r.state={maxHeight:r.props.maxMenuHeight,placement:null},r.getPlacement=function(s){var l=r.props,c=l.minMenuHeight,u=l.maxMenuHeight,f=l.menuPlacement,d=l.menuPosition,p=l.menuShouldScrollIntoView,m=l.theme;if(!!s){var b=d==="fixed",v=p&&!b,S=pb({maxHeight:u,menuEl:s,minHeight:c,placement:f,shouldScroll:v,isFixedPosition:b,theme:m}),C=r.context.getPortalPlacement;C&&C(S),r.setState(S)}},r.getUpdatedProps=function(){var s=r.props.menuPlacement,l=r.state.placement||oi(s);return ie(ie({},r.props),{},{placement:l,maxHeight:r.state.maxHeight})},r}return cr(n,[{key:"render",value:function(){var o=this.props.children;return o({ref:this.getPlacement,placerProps:this.getUpdatedProps()})}}]),n}(J);Vl.contextType=Bl;var vb=function(e){var n=e.children,r=e.className,o=e.cx,i=e.getStyles,a=e.innerRef,s=e.innerProps;return M("div",T({css:i("menu",e),className:o({menu:!0},r),ref:a},s),n)},gb=function(e){var n=e.maxHeight,r=e.theme.spacing.baseUnit;return{maxHeight:n,overflowY:"auto",paddingBottom:r,paddingTop:r,position:"relative",WebkitOverflowScrolling:"touch"}},yb=function(e){var n=e.children,r=e.className,o=e.cx,i=e.getStyles,a=e.innerProps,s=e.innerRef,l=e.isMulti;return M("div",T({css:i("menuList",e),className:o({"menu-list":!0,"menu-list--is-multi":l},r),ref:s},a),n)},Hl=function(e){var n=e.theme,r=n.spacing.baseUnit,o=n.colors;return{color:o.neutral40,padding:"".concat(r*2,"px ").concat(r*3,"px"),textAlign:"center"}},bb=Hl,Sb=Hl,Ul=function(e){var n=e.children,r=e.className,o=e.cx,i=e.getStyles,a=e.innerProps;return M("div",T({css:i("noOptionsMessage",e),className:o({"menu-notice":!0,"menu-notice--no-options":!0},r)},a),n)};Ul.defaultProps={children:"No options"};var jl=function(e){var n=e.children,r=e.className,o=e.cx,i=e.getStyles,a=e.innerProps;return M("div",T({css:i("loadingMessage",e),className:o({"menu-notice":!0,"menu-notice--loading":!0},r)},a),n)};jl.defaultProps={children:"Loading..."};var _b=function(e){var n=e.rect,r=e.offset,o=e.position;return{left:n.left,position:o,top:r,width:n.width,zIndex:1}},Eb=function(t){dr(n,t);var e=hr(n);function n(){var r;lr(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=e.call.apply(e,[this].concat(i)),r.state={placement:null},r.getPortalPlacement=function(s){var l=s.placement,c=oi(r.props.menuPlacement);l!==c&&r.setState({placement:l})},r}return cr(n,[{key:"render",value:function(){var o=this.props,i=o.appendTo,a=o.children,s=o.className,l=o.controlElement,c=o.cx,u=o.innerProps,f=o.menuPlacement,d=o.menuPosition,p=o.getStyles,m=d==="fixed";if(!i&&!m||!l)return null;var b=this.state.placement||oi(f),v=lb(l),S=m?0:window.pageYOffset,C=v[b]+S,P={offset:C,position:d,rect:v},F=M("div",T({css:p("menuPortal",P),className:c({"menu-portal":!0},s)},u),a);return M(Bl.Provider,{value:{getPortalPlacement:this.getPortalPlacement}},i?Nr(F,i):F)}}]),n}(J),Cb=function(e){var n=e.isDisabled,r=e.isRtl;return{label:"container",direction:r?"rtl":null,pointerEvents:n?"none":null,position:"relative"}},Ab=function(e){var n=e.children,r=e.className,o=e.cx,i=e.getStyles,a=e.innerProps,s=e.isDisabled,l=e.isRtl;return M("div",T({css:i("container",e),className:o({"--is-disabled":s,"--is-rtl":l},r)},a),n)},wb=function(e){var n=e.theme.spacing;return{alignItems:"center",display:"flex",flex:1,flexWrap:"wrap",padding:"".concat(n.baseUnit/2,"px ").concat(n.baseUnit*2,"px"),WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"}},Ob=function(e){var n=e.children,r=e.className,o=e.cx,i=e.innerProps,a=e.isMulti,s=e.getStyles,l=e.hasValue;return M("div",T({css:s("valueContainer",e),className:o({"value-container":!0,"value-container--is-multi":a,"value-container--has-value":l},r)},i),n)},$b=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},xb=function(e){var n=e.children,r=e.className,o=e.cx,i=e.innerProps,a=e.getStyles;return M("div",T({css:a("indicatorsContainer",e),className:o({indicators:!0},r)},i),n)},zl,Pb={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Wl=function(e){var n=e.size,r=Mt(e,["size"]);return M("svg",T({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Pb},r))},ii=function(e){return M(Wl,T({size:20},e),M("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Gl=function(e){return M(Wl,T({size:20},e),M("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},ql=function(e){var n=e.isFocused,r=e.theme,o=r.spacing.baseUnit,i=r.colors;return{label:"indicatorContainer",color:n?i.neutral60:i.neutral20,display:"flex",padding:o*2,transition:"color 150ms",":hover":{color:n?i.neutral80:i.neutral40}}},Db=ql,Tb=function(e){var n=e.children,r=e.className,o=e.cx,i=e.getStyles,a=e.innerProps;return M("div",T({css:i("dropdownIndicator",e),className:o({indicator:!0,"dropdown-indicator":!0},r)},a),n||M(Gl,null))},Mb=ql,kb=function(e){var n=e.children,r=e.className,o=e.cx,i=e.getStyles,a=e.innerProps;return M("div",T({css:i("clearIndicator",e),className:o({indicator:!0,"clear-indicator":!0},r)},a),n||M(ii,null))},Fb=function(e){var n=e.isDisabled,r=e.theme,o=r.spacing.baseUnit,i=r.colors;return{label:"indicatorSeparator",alignSelf:"stretch",backgroundColor:n?i.neutral10:i.neutral20,marginBottom:o*2,marginTop:o*2,width:1}},Ib=function(e){var n=e.className,r=e.cx,o=e.getStyles,i=e.innerProps;return M("span",T({},i,{css:o("indicatorSeparator",e),className:r({"indicator-separator":!0},n)}))},Rb=B0(zl||(zl=z0([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Nb=function(e){var n=e.isFocused,r=e.size,o=e.theme,i=o.colors,a=o.spacing.baseUnit;return{label:"loadingIndicator",color:n?i.neutral60:i.neutral20,display:"flex",padding:a*2,transition:"color 150ms",alignSelf:"center",fontSize:r,lineHeight:1,marginRight:r,textAlign:"center",verticalAlign:"middle"}},ai=function(e){var n=e.delay,r=e.offset;return M("span",{css:Qo({animation:"".concat(Rb," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":null,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Yl=function(e){var n=e.className,r=e.cx,o=e.getStyles,i=e.innerProps,a=e.isRtl;return M("div",T({css:o("loadingIndicator",e),className:r({indicator:!0,"loading-indicator":!0},n)},i),M(ai,{delay:0,offset:a}),M(ai,{delay:160,offset:!0}),M(ai,{delay:320,offset:!a}))};Yl.defaultProps={size:4};var Lb=function(e){var n=e.isDisabled,r=e.isFocused,o=e.theme,i=o.colors,a=o.borderRadius,s=o.spacing;return{label:"control",alignItems:"center",backgroundColor:n?i.neutral5:i.neutral0,borderColor:n?i.neutral10:r?i.primary:i.neutral20,borderRadius:a,borderStyle:"solid",borderWidth:1,boxShadow:r?"0 0 0 1px ".concat(i.primary):null,cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms","&:hover":{borderColor:r?i.primary:i.neutral30}}},Bb=function(e){var n=e.children,r=e.cx,o=e.getStyles,i=e.className,a=e.isDisabled,s=e.isFocused,l=e.innerRef,c=e.innerProps,u=e.menuIsOpen;return M("div",T({ref:l,css:o("control",e),className:r({control:!0,"control--is-disabled":a,"control--is-focused":s,"control--menu-is-open":u},i)},c),n)},Vb=function(e){var n=e.theme.spacing;return{paddingBottom:n.baseUnit*2,paddingTop:n.baseUnit*2}},Hb=function(e){var n=e.children,r=e.className,o=e.cx,i=e.getStyles,a=e.Heading,s=e.headingProps,l=e.innerProps,c=e.label,u=e.theme,f=e.selectProps;return M("div",T({css:i("group",e),className:o({group:!0},r)},l),M(a,T({},s,{selectProps:f,theme:u,getStyles:i,cx:o}),c),M("div",null,n))},Ub=function(e){var n=e.theme.spacing;return{label:"group",color:"#999",cursor:"default",display:"block",fontSize:"75%",fontWeight:"500",marginBottom:"0.25em",paddingLeft:n.baseUnit*3,paddingRight:n.baseUnit*3,textTransform:"uppercase"}},jb=function(e){var n=e.getStyles,r=e.cx,o=e.className,i=Il(e);i.data;var a=Mt(i,["data"]);return M("div",T({css:n("groupHeading",e),className:r({"group-heading":!0},o)},a))},zb=function(e){var n=e.isDisabled,r=e.theme,o=r.spacing,i=r.colors;return{margin:o.baseUnit/2,paddingBottom:o.baseUnit/2,paddingTop:o.baseUnit/2,visibility:n?"hidden":"visible",color:i.neutral80}},Wb=function(e){return{label:"input",background:0,border:0,fontSize:"inherit",opacity:e?0:1,outline:0,padding:0,color:"inherit"}},Gb=function(e){var n=e.className,r=e.cx,o=e.getStyles,i=Il(e),a=i.innerRef,s=i.isDisabled,l=i.isHidden,c=Mt(i,["innerRef","isDisabled","isHidden"]);return M("div",{css:o("input",e)},M(Z0,T({className:r({input:!0},n),inputRef:a,inputStyle:Wb(l),disabled:s},c)))},qb=function(e){var n=e.theme,r=n.spacing,o=n.borderRadius,i=n.colors;return{label:"multiValue",backgroundColor:i.neutral10,borderRadius:o/2,display:"flex",margin:r.baseUnit/2,minWidth:0}},Yb=function(e){var n=e.theme,r=n.borderRadius,o=n.colors,i=e.cropWithEllipsis;return{borderRadius:r/2,color:o.neutral80,fontSize:"85%",overflow:"hidden",padding:3,paddingLeft:6,textOverflow:i?"ellipsis":null,whiteSpace:"nowrap"}},Xb=function(e){var n=e.theme,r=n.spacing,o=n.borderRadius,i=n.colors,a=e.isFocused;return{alignItems:"center",borderRadius:o/2,backgroundColor:a&&i.dangerLight,display:"flex",paddingLeft:r.baseUnit,paddingRight:r.baseUnit,":hover":{backgroundColor:i.dangerLight,color:i.danger}}},Xl=function(e){var n=e.children,r=e.innerProps;return M("div",r,n)},Kb=Xl,Jb=Xl;function Zb(t){var e=t.children,n=t.innerProps;return M("div",n,e||M(ii,{size:14}))}var Kl=function(e){var n=e.children,r=e.className,o=e.components,i=e.cx,a=e.data,s=e.getStyles,l=e.innerProps,c=e.isDisabled,u=e.removeProps,f=e.selectProps,d=o.Container,p=o.Label,m=o.Remove;return M(j0,null,function(b){var v=b.css,S=b.cx;return M(d,{data:a,innerProps:ie({className:S(v(s("multiValue",e)),i({"multi-value":!0,"multi-value--is-disabled":c},r))},l),selectProps:f},M(p,{data:a,innerProps:{className:S(v(s("multiValueLabel",e)),i({"multi-value__label":!0},r))},selectProps:f},n),M(m,{data:a,innerProps:ie({className:S(v(s("multiValueRemove",e)),i({"multi-value__remove":!0},r))},u),selectProps:f}))})};Kl.defaultProps={cropWithEllipsis:!0};var Qb=function(e){var n=e.isDisabled,r=e.isFocused,o=e.isSelected,i=e.theme,a=i.spacing,s=i.colors;return{label:"option",backgroundColor:o?s.primary:r?s.primary25:"transparent",color:n?s.neutral20:o?s.neutral0:"inherit",cursor:"default",display:"block",fontSize:"inherit",padding:"".concat(a.baseUnit*2,"px ").concat(a.baseUnit*3,"px"),width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",":active":{backgroundColor:!n&&(o?s.primary:s.primary50)}}},e1=function(e){var n=e.children,r=e.className,o=e.cx,i=e.getStyles,a=e.isDisabled,s=e.isFocused,l=e.isSelected,c=e.innerRef,u=e.innerProps;return M("div",T({css:i("option",e),className:o({option:!0,"option--is-disabled":a,"option--is-focused":s,"option--is-selected":l},r),ref:c},u),n)},t1=function(e){var n=e.theme,r=n.spacing,o=n.colors;return{label:"placeholder",color:o.neutral50,marginLeft:r.baseUnit/2,marginRight:r.baseUnit/2,position:"absolute",top:"50%",transform:"translateY(-50%)"}},n1=function(e){var n=e.children,r=e.className,o=e.cx,i=e.getStyles,a=e.innerProps;return M("div",T({css:i("placeholder",e),className:o({placeholder:!0},r)},a),n)},r1=function(e){var n=e.isDisabled,r=e.theme,o=r.spacing,i=r.colors;return{label:"singleValue",color:n?i.neutral40:i.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2,maxWidth:"calc(100% - ".concat(o.baseUnit*2,"px)"),overflow:"hidden",position:"absolute",textOverflow:"ellipsis",whiteSpace:"nowrap",top:"50%",transform:"translateY(-50%)"}},o1=function(e){var n=e.children,r=e.className,o=e.cx,i=e.getStyles,a=e.isDisabled,s=e.innerProps;return M("div",T({css:i("singleValue",e),className:o({"single-value":!0,"single-value--is-disabled":a},r)},s),n)},i1={ClearIndicator:kb,Control:Bb,DropdownIndicator:Tb,DownChevron:Gl,CrossIcon:ii,Group:Hb,GroupHeading:jb,IndicatorsContainer:xb,IndicatorSeparator:Ib,Input:Gb,LoadingIndicator:Yl,Menu:vb,MenuList:yb,MenuPortal:Eb,LoadingMessage:jl,NoOptionsMessage:Ul,MultiValue:Kl,MultiValueContainer:Kb,MultiValueLabel:Jb,MultiValueRemove:Zb,Option:e1,Placeholder:n1,SelectContainer:Ab,SingleValue:o1,ValueContainer:Ob},a1=function(e){return ie(ie({},i1),e.components)};function si(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s1(t){if(Array.isArray(t))return si(t)}function u1(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function l1(t,e){if(!!t){if(typeof t=="string")return si(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return si(t,e)}}function c1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jl(t){return s1(t)||u1(t)||l1(t)||c1()}var Zl=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function f1(t,e){return!!(t===e||Zl(t)&&Zl(e))}function d1(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!f1(t[n],e[n]))return!1;return!0}function p1(t,e){e===void 0&&(e=d1);var n,r=[],o,i=!1;function a(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return i&&n===this&&e(s,r)||(o=t.apply(this,s),i=!0,n=this,r=s),o}return a}for(var h1={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},m1=function(e){return M("span",T({css:h1},e))},v1={guidance:function(e){var n=e.isSearchable,r=e.isMulti,o=e.isDisabled,i=e.tabSelectsValue,a=e.context;switch(a){case"menu":return"Use Up and Down to choose options".concat(o?"":", press Enter to select the currently focused option",", press Escape to exit the menu").concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return"".concat(e["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":"");case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var n=e.action,r=e.label,o=r===void 0?"":r,i=e.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(o,", deselected.");case"select-option":return i?"option ".concat(o," is disabled. Select another option."):"option ".concat(o,", selected.");default:return""}},onFocus:function(e){var n=e.context,r=e.focused,o=r===void 0?{}:r,i=e.options,a=e.label,s=a===void 0?"":a,l=e.selectValue,c=e.isDisabled,u=e.isSelected,f=function(b,v){return b&&b.length?"".concat(b.indexOf(v)+1," of ").concat(b.length):""};if(n==="value"&&l)return"value ".concat(s," focused, ").concat(f(l,o),".");if(n==="menu"){var d=c?" disabled":"",p="".concat(u?"selected":"focused").concat(d);return"option ".concat(s," ").concat(p,", ").concat(f(i,o),".")}return""},onFilter:function(e){var n=e.inputValue,r=e.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},g1=function(e){var n=e.ariaSelection,r=e.focusedOption,o=e.focusedValue,i=e.focusableOptions,a=e.isFocused,s=e.selectValue,l=e.selectProps,c=l.ariaLiveMessages,u=l.getOptionLabel,f=l.inputValue,d=l.isMulti,p=l.isOptionDisabled,m=l.isSearchable,b=l.menuIsOpen,v=l.options,S=l.screenReaderStatus,C=l.tabSelectsValue,P=l["aria-label"],F=l["aria-live"],O=He(function(){return ie(ie({},v1),c||{})},[c]),k=He(function(){var W="";if(n&&O.onChange){var z=n.option,Y=n.removedValue,de=n.value,Ie=function(Re){return Array.isArray(Re)?null:Re},he=Y||z||Ie(de),te=ie({isDisabled:he&&p(he),label:he?u(he):""},n);W=O.onChange(te)}return W},[n,p,u,O]),x=He(function(){var W="",z=r||o,Y=!!(r&&s&&s.includes(r));if(z&&O.onFocus){var de={focused:z,label:u(z),isDisabled:p(z),isSelected:Y,options:v,context:z===r?"menu":"value",selectValue:s};W=O.onFocus(de)}return W},[r,o,u,p,O,v,s]),X=He(function(){var W="";if(b&&v.length&&O.onFilter){var z=S({count:i.length});W=O.onFilter({inputValue:f,resultsMessage:z})}return W},[i,f,b,O,v,S]),H=He(function(){var W="";if(O.guidance){var z=o?"value":b?"menu":"input";W=O.guidance({"aria-label":P,context:z,isDisabled:r&&p(r),isMulti:d,isSearchable:m,tabSelectsValue:C})}return W},[P,r,o,d,p,m,b,O,C]),fe="".concat(x," ").concat(X," ").concat(H);return M(m1,{"aria-live":F,"aria-atomic":"false","aria-relevant":"additions text"},a&&M(g.Fragment,null,M("span",{id:"aria-selection"},k),M("span",{id:"aria-context"},fe)))},ui=[{base:"A",letters:"A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"},{base:"AA",letters:"\uA732"},{base:"AE",letters:"\xC6\u01FC\u01E2"},{base:"AO",letters:"\uA734"},{base:"AU",letters:"\uA736"},{base:"AV",letters:"\uA738\uA73A"},{base:"AY",letters:"\uA73C"},{base:"B",letters:"B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"},{base:"C",letters:"C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"},{base:"D",letters:"D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"},{base:"DZ",letters:"\u01F1\u01C4"},{base:"Dz",letters:"\u01F2\u01C5"},{base:"E",letters:"E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"},{base:"F",letters:"F\u24BB\uFF26\u1E1E\u0191\uA77B"},{base:"G",letters:"G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"},{base:"H",letters:"H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"},{base:"I",letters:"I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"},{base:"J",letters:"J\u24BF\uFF2A\u0134\u0248"},{base:"K",letters:"K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"},{base:"L",letters:"L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"},{base:"LJ",letters:"\u01C7"},{base:"Lj",letters:"\u01C8"},{base:"M",letters:"M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"},{base:"N",letters:"N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"},{base:"NJ",letters:"\u01CA"},{base:"Nj",letters:"\u01CB"},{base:"O",letters:"O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"},{base:"OI",letters:"\u01A2"},{base:"OO",letters:"\uA74E"},{base:"OU",letters:"\u0222"},{base:"P",letters:"P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"},{base:"Q",letters:"Q\u24C6\uFF31\uA756\uA758\u024A"},{base:"R",letters:"R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"},{base:"S",letters:"S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"},{base:"T",letters:"T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"},{base:"TZ",letters:"\uA728"},{base:"U",letters:"U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"},{base:"V",letters:"V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"},{base:"VY",letters:"\uA760"},{base:"W",letters:"W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"},{base:"X",letters:"X\u24CD\uFF38\u1E8A\u1E8C"},{base:"Y",letters:"Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"},{base:"Z",letters:"Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"},{base:"a",letters:"a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"},{base:"aa",letters:"\uA733"},{base:"ae",letters:"\xE6\u01FD\u01E3"},{base:"ao",letters:"\uA735"},{base:"au",letters:"\uA737"},{base:"av",letters:"\uA739\uA73B"},{base:"ay",letters:"\uA73D"},{base:"b",letters:"b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"},{base:"c",letters:"c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"},{base:"d",letters:"d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"},{base:"dz",letters:"\u01F3\u01C6"},{base:"e",letters:"e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"},{base:"f",letters:"f\u24D5\uFF46\u1E1F\u0192\uA77C"},{base:"g",letters:"g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"},{base:"h",letters:"h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"},{base:"hv",letters:"\u0195"},{base:"i",letters:"i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"},{base:"j",letters:"j\u24D9\uFF4A\u0135\u01F0\u0249"},{base:"k",letters:"k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"},{base:"l",letters:"l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"},{base:"lj",letters:"\u01C9"},{base:"m",letters:"m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"},{base:"n",letters:"n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"},{base:"nj",letters:"\u01CC"},{base:"o",letters:"o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"},{base:"oi",letters:"\u01A3"},{base:"ou",letters:"\u0223"},{base:"oo",letters:"\uA74F"},{base:"p",letters:"p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"},{base:"q",letters:"q\u24E0\uFF51\u024B\uA757\uA759"},{base:"r",letters:"r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"},{base:"s",letters:"s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"},{base:"t",letters:"t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"},{base:"tz",letters:"\uA729"},{base:"u",letters:"u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"},{base:"v",letters:"v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"},{base:"vy",letters:"\uA761"},{base:"w",letters:"w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"},{base:"x",letters:"x\u24E7\uFF58\u1E8B\u1E8D"},{base:"y",letters:"y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"},{base:"z",letters:"z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"}],y1=new RegExp("["+ui.map(function(t){return t.letters}).join("")+"]","g"),Ql={},li=0;li<ui.length;li++)for(var ci=ui[li],fi=0;fi<ci.letters.length;fi++)Ql[ci.letters[fi]]=ci.base;var ec=function(e){return e.replace(y1,function(n){return Ql[n]})},b1=p1(ec),tc=function(e){return e.replace(/^\s+|\s+$/g,"")},S1=function(e){return"".concat(e.label," ").concat(e.value)},_1=function(e){return function(n,r){var o=ie({ignoreCase:!0,ignoreAccents:!0,stringify:S1,trim:!0,matchFrom:"any"},e),i=o.ignoreCase,a=o.ignoreAccents,s=o.stringify,l=o.trim,c=o.matchFrom,u=l?tc(r):r,f=l?tc(s(n)):s(n);return i&&(u=u.toLowerCase(),f=f.toLowerCase()),a&&(u=b1(u),f=ec(f)),c==="start"?f.substr(0,u.length)===u:f.indexOf(u)>-1}};function E1(t){t.in,t.out,t.onExited,t.appear,t.enter,t.exit;var e=t.innerRef;t.emotion;var n=Mt(t,["in","out","onExited","appear","enter","exit","innerRef","emotion"]);return M("input",T({ref:e},n,{css:Qo({label:"dummyInput",background:0,border:0,fontSize:"inherit",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(0)"},"","")}))}var C1=function(e){e.preventDefault(),e.stopPropagation()};function A1(t){var e=t.isEnabled,n=t.onBottomArrive,r=t.onBottomLeave,o=t.onTopArrive,i=t.onTopLeave,a=$e(!1),s=$e(!1),l=$e(0),c=$e(null),u=xe(function(v,S){if(c.current!==null){var C=c.current,P=C.scrollTop,F=C.scrollHeight,O=C.clientHeight,k=c.current,x=S>0,X=F-O-P,H=!1;X>S&&a.current&&(r&&r(v),a.current=!1),x&&s.current&&(i&&i(v),s.current=!1),x&&S>X?(n&&!a.current&&n(v),k.scrollTop=F,H=!0,a.current=!0):!x&&-S>P&&(o&&!s.current&&o(v),k.scrollTop=0,H=!0,s.current=!0),H&&C1(v)}},[]),f=xe(function(v){u(v,v.deltaY)},[u]),d=xe(function(v){l.current=v.changedTouches[0].clientY},[]),p=xe(function(v){var S=l.current-v.changedTouches[0].clientY;u(v,S)},[u]),m=xe(function(v){if(!!v){var S=db?{passive:!1}:!1;typeof v.addEventListener=="function"&&v.addEventListener("wheel",f,S),typeof v.addEventListener=="function"&&v.addEventListener("touchstart",d,S),typeof v.addEventListener=="function"&&v.addEventListener("touchmove",p,S)}},[p,d,f]),b=xe(function(v){!v||(typeof v.removeEventListener=="function"&&v.removeEventListener("wheel",f,!1),typeof v.removeEventListener=="function"&&v.removeEventListener("touchstart",d,!1),typeof v.removeEventListener=="function"&&v.removeEventListener("touchmove",p,!1))},[p,d,f]);return tt(function(){if(!!e){var v=c.current;return m(v),function(){b(v)}}},[e,m,b]),function(v){c.current=v}}var nc=["boxSizing","height","overflow","paddingRight","position"],rc={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function oc(t){t.preventDefault()}function ic(t){t.stopPropagation()}function ac(){var t=this.scrollTop,e=this.scrollHeight,n=t+this.offsetHeight;t===0?this.scrollTop=1:n===e&&(this.scrollTop=t-1)}function sc(){return"ontouchstart"in window||navigator.maxTouchPoints}var uc=!!(typeof window!="undefined"&&window.document&&window.document.createElement),on=0,Ft={capture:!1,passive:!1};function w1(t){var e=t.isEnabled,n=t.accountForScrollbars,r=n===void 0?!0:n,o=$e({}),i=$e(null),a=xe(function(l){if(!!uc){var c=document.body,u=c&&c.style;if(r&&nc.forEach(function(m){var b=u&&u[m];o.current[m]=b}),r&&on<1){var f=parseInt(o.current.paddingRight,10)||0,d=document.body?document.body.clientWidth:0,p=window.innerWidth-d+f||0;Object.keys(rc).forEach(function(m){var b=rc[m];u&&(u[m]=b)}),u&&(u.paddingRight="".concat(p,"px"))}c&&sc()&&(c.addEventListener("touchmove",oc,Ft),l&&(l.addEventListener("touchstart",ac,Ft),l.addEventListener("touchmove",ic,Ft))),on+=1}},[]),s=xe(function(l){if(!!uc){var c=document.body,u=c&&c.style;on=Math.max(on-1,0),r&&on<1&&nc.forEach(function(f){var d=o.current[f];u&&(u[f]=d)}),c&&sc()&&(c.removeEventListener("touchmove",oc,Ft),l&&(l.removeEventListener("touchstart",ac,Ft),l.removeEventListener("touchmove",ic,Ft)))}},[]);return tt(function(){if(!!e){var l=i.current;return a(l),function(){s(l)}}},[e,a,s]),function(l){i.current=l}}var O1=function(){return document.activeElement&&document.activeElement.blur()},$1={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function x1(t){var e=t.children,n=t.lockEnabled,r=t.captureEnabled,o=r===void 0?!0:r,i=t.onBottomArrive,a=t.onBottomLeave,s=t.onTopArrive,l=t.onTopLeave,c=A1({isEnabled:o,onBottomArrive:i,onBottomLeave:a,onTopArrive:s,onTopLeave:l}),u=w1({isEnabled:n}),f=function(p){c(p),u(p)};return M(g.Fragment,null,n&&M("div",{onClick:O1,css:$1}),e(f))}var P1=function(e){return e.label},D1=function(e){return e.label},T1=function(e){return e.value},M1=function(e){return!!e.isDisabled},k1={clearIndicator:Mb,container:Cb,control:Lb,dropdownIndicator:Db,group:Vb,groupHeading:Ub,indicatorsContainer:$b,indicatorSeparator:Fb,input:zb,loadingIndicator:Nb,loadingMessage:Sb,menu:mb,menuList:gb,menuPortal:_b,multiValue:qb,multiValueLabel:Yb,multiValueRemove:Xb,noOptionsMessage:bb,option:Qb,placeholder:t1,singleValue:r1,valueContainer:wb},F1={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},I1=4,lc=4,R1=38,N1=lc*2,L1={baseUnit:lc,controlHeight:R1,menuGutter:N1},di={borderRadius:I1,colors:F1,spacing:L1},B1={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Nl(),captureMenuScroll:!Nl(),closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:_1(),formatGroupLabel:P1,getOptionLabel:D1,getOptionValue:T1,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:M1,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!cb(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var n=e.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:"0",tabSelectsValue:!0};function cc(t,e,n,r){var o=mc(t,e,n),i=vc(t,e,n),a=hc(t,e),s=br(t,e);return{type:"option",data:e,isDisabled:o,isSelected:i,label:a,value:s,index:r}}function fc(t,e){return t.options.map(function(n,r){if(n.options){var o=n.options.map(function(a,s){return cc(t,a,e,s)}).filter(function(a){return pc(t,a)});return o.length>0?{type:"group",data:n,options:o,index:r}:void 0}var i=cc(t,n,e,r);return pc(t,i)?i:void 0}).filter(function(n){return!!n})}function dc(t){return t.reduce(function(e,n){return n.type==="group"?e.push.apply(e,Jl(n.options.map(function(r){return r.data}))):e.push(n.data),e},[])}function V1(t,e){return dc(fc(t,e))}function pc(t,e){var n=t.inputValue,r=n===void 0?"":n,o=e.data,i=e.isSelected,a=e.label,s=e.value;return(!yc(t)||!i)&&gc(t,{label:a,value:s,data:o},r)}function H1(t,e){var n=t.focusedValue,r=t.selectValue,o=r.indexOf(n);if(o>-1){var i=e.indexOf(n);if(i>-1)return n;if(o<e.length)return e[o]}return null}function U1(t,e){var n=t.focusedOption;return n&&e.indexOf(n)>-1?n:e[0]}var hc=function(e,n){return e.getOptionLabel(n)},br=function(e,n){return e.getOptionValue(n)};function mc(t,e,n){return typeof t.isOptionDisabled=="function"?t.isOptionDisabled(e,n):!1}function vc(t,e,n){if(n.indexOf(e)>-1)return!0;if(typeof t.isOptionSelected=="function")return t.isOptionSelected(e,n);var r=br(t,e);return n.some(function(o){return br(t,o)===r})}function gc(t,e,n){return t.filterOption?t.filterOption(e,n):!0}var yc=function(e){var n=e.hideSelectedOptions,r=e.isMulti;return n===void 0?r:n},j1=1,bc=function(t){dr(n,t);var e=hr(n);function n(r){var o;return lr(this,n),o=e.call(this,r),o.state={ariaSelection:null,focusedOption:null,focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0},o.blockOptionHover=!1,o.isComposing=!1,o.commonProps=void 0,o.initialTouchX=0,o.initialTouchY=0,o.instancePrefix="",o.openAfterFocus=!1,o.scrollToFocusedOptionOnUpdate=!1,o.userIsDragging=void 0,o.controlRef=null,o.getControlRef=function(i){o.controlRef=i},o.focusedOptionRef=null,o.getFocusedOptionRef=function(i){o.focusedOptionRef=i},o.menuListRef=null,o.getMenuListRef=function(i){o.menuListRef=i},o.inputRef=null,o.getInputRef=function(i){o.inputRef=i},o.focus=o.focusInput,o.blur=o.blurInput,o.onChange=function(i,a){var s=o.props,l=s.onChange,c=s.name;a.name=c,o.ariaOnChange(i,a),l(i,a)},o.setValue=function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"set-value",s=arguments.length>2?arguments[2]:void 0,l=o.props,c=l.closeMenuOnSelect,u=l.isMulti;o.onInputChange("",{action:"set-value"}),c&&(o.setState({inputIsHiddenAfterUpdate:!u}),o.onMenuClose()),o.setState({clearFocusValueOnUpdate:!0}),o.onChange(i,{action:a,option:s})},o.selectOption=function(i){var a=o.props,s=a.blurInputOnSelect,l=a.isMulti,c=a.name,u=o.state.selectValue,f=l&&o.isOptionSelected(i,u),d=o.isOptionDisabled(i,u);if(f){var p=o.getOptionValue(i);o.setValue(u.filter(function(m){return o.getOptionValue(m)!==p}),"deselect-option",i)}else if(!d)l?o.setValue([].concat(Jl(u),[i]),"select-option",i):o.setValue(i,"select-option");else{o.ariaOnChange(i,{action:"select-option",name:c});return}s&&o.blurInput()},o.removeValue=function(i){var a=o.props.isMulti,s=o.state.selectValue,l=o.getOptionValue(i),c=s.filter(function(f){return o.getOptionValue(f)!==l}),u=a?c:c[0]||null;o.onChange(u,{action:"remove-value",removedValue:i}),o.focusInput()},o.clearValue=function(){var i=o.state.selectValue;o.onChange(o.props.isMulti?[]:null,{action:"clear",removedValues:i})},o.popValue=function(){var i=o.props.isMulti,a=o.state.selectValue,s=a[a.length-1],l=a.slice(0,a.length-1),c=i?l:l[0]||null;o.onChange(c,{action:"pop-value",removedValue:s})},o.getValue=function(){return o.state.selectValue},o.cx=function(){for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return ib.apply(void 0,[o.props.classNamePrefix].concat(a))},o.getOptionLabel=function(i){return hc(o.props,i)},o.getOptionValue=function(i){return br(o.props,i)},o.getStyles=function(i,a){var s=k1[i](a);s.boxSizing="border-box";var l=o.props.styles[i];return l?l(s,a):s},o.getElementId=function(i){return"".concat(o.instancePrefix,"-").concat(i)},o.getComponents=function(){return a1(o.props)},o.buildCategorizedOptions=function(){return fc(o.props,o.state.selectValue)},o.getCategorizedOptions=function(){return o.props.menuIsOpen?o.buildCategorizedOptions():[]},o.buildFocusableOptions=function(){return dc(o.buildCategorizedOptions())},o.getFocusableOptions=function(){return o.props.menuIsOpen?o.buildFocusableOptions():[]},o.ariaOnChange=function(i,a){o.setState({ariaSelection:ie({value:i},a)})},o.onMenuMouseDown=function(i){i.button===0&&(i.stopPropagation(),i.preventDefault(),o.focusInput())},o.onMenuMouseMove=function(i){o.blockOptionHover=!1},o.onControlMouseDown=function(i){var a=o.props.openMenuOnClick;o.state.isFocused?o.props.menuIsOpen?i.target.tagName!=="INPUT"&&i.target.tagName!=="TEXTAREA"&&o.onMenuClose():a&&o.openMenu("first"):(a&&(o.openAfterFocus=!0),o.focusInput()),i.target.tagName!=="INPUT"&&i.target.tagName!=="TEXTAREA"&&i.preventDefault()},o.onDropdownIndicatorMouseDown=function(i){if(!(i&&i.type==="mousedown"&&i.button!==0)&&!o.props.isDisabled){var a=o.props,s=a.isMulti,l=a.menuIsOpen;o.focusInput(),l?(o.setState({inputIsHiddenAfterUpdate:!s}),o.onMenuClose()):o.openMenu("first"),i.preventDefault(),i.stopPropagation()}},o.onClearIndicatorMouseDown=function(i){i&&i.type==="mousedown"&&i.button!==0||(o.clearValue(),i.stopPropagation(),o.openAfterFocus=!1,i.type==="touchend"?o.focusInput():setTimeout(function(){return o.focusInput()}))},o.onScroll=function(i){typeof o.props.closeMenuOnScroll=="boolean"?i.target instanceof HTMLElement&&ri(i.target)&&o.props.onMenuClose():typeof o.props.closeMenuOnScroll=="function"&&o.props.closeMenuOnScroll(i)&&o.props.onMenuClose()},o.onCompositionStart=function(){o.isComposing=!0},o.onCompositionEnd=function(){o.isComposing=!1},o.onTouchStart=function(i){var a=i.touches,s=a&&a.item(0);!s||(o.initialTouchX=s.clientX,o.initialTouchY=s.clientY,o.userIsDragging=!1)},o.onTouchMove=function(i){var a=i.touches,s=a&&a.item(0);if(!!s){var l=Math.abs(s.clientX-o.initialTouchX),c=Math.abs(s.clientY-o.initialTouchY),u=5;o.userIsDragging=l>u||c>u}},o.onTouchEnd=function(i){o.userIsDragging||(o.controlRef&&!o.controlRef.contains(i.target)&&o.menuListRef&&!o.menuListRef.contains(i.target)&&o.blurInput(),o.initialTouchX=0,o.initialTouchY=0)},o.onControlTouchEnd=function(i){o.userIsDragging||o.onControlMouseDown(i)},o.onClearIndicatorTouchEnd=function(i){o.userIsDragging||o.onClearIndicatorMouseDown(i)},o.onDropdownIndicatorTouchEnd=function(i){o.userIsDragging||o.onDropdownIndicatorMouseDown(i)},o.handleInputChange=function(i){var a=i.currentTarget.value;o.setState({inputIsHiddenAfterUpdate:!1}),o.onInputChange(a,{action:"input-change"}),o.props.menuIsOpen||o.onMenuOpen()},o.onInputFocus=function(i){o.props.onFocus&&o.props.onFocus(i),o.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(o.openAfterFocus||o.props.openMenuOnFocus)&&o.openMenu("first"),o.openAfterFocus=!1},o.onInputBlur=function(i){if(o.menuListRef&&o.menuListRef.contains(document.activeElement)){o.inputRef.focus();return}o.props.onBlur&&o.props.onBlur(i),o.onInputChange("",{action:"input-blur"}),o.onMenuClose(),o.setState({focusedValue:null,isFocused:!1})},o.onOptionHover=function(i){o.blockOptionHover||o.state.focusedOption===i||o.setState({focusedOption:i})},o.shouldHideSelectedOptions=function(){return yc(o.props)},o.onKeyDown=function(i){var a=o.props,s=a.isMulti,l=a.backspaceRemovesValue,c=a.escapeClearsValue,u=a.inputValue,f=a.isClearable,d=a.isDisabled,p=a.menuIsOpen,m=a.onKeyDown,b=a.tabSelectsValue,v=a.openMenuOnFocus,S=o.state,C=S.focusedOption,P=S.focusedValue,F=S.selectValue;if(!d&&!(typeof m=="function"&&(m(i),i.defaultPrevented))){switch(o.blockOptionHover=!0,i.key){case"ArrowLeft":if(!s||u)return;o.focusValue("previous");break;case"ArrowRight":if(!s||u)return;o.focusValue("next");break;case"Delete":case"Backspace":if(u)return;if(P)o.removeValue(P);else{if(!l)return;s?o.popValue():f&&o.clearValue()}break;case"Tab":if(o.isComposing||i.shiftKey||!p||!b||!C||v&&o.isOptionSelected(C,F))return;o.selectOption(C);break;case"Enter":if(i.keyCode===229)break;if(p){if(!C||o.isComposing)return;o.selectOption(C);break}return;case"Escape":p?(o.setState({inputIsHiddenAfterUpdate:!1}),o.onInputChange("",{action:"menu-close"}),o.onMenuClose()):f&&c&&o.clearValue();break;case" ":if(u)return;if(!p){o.openMenu("first");break}if(!C)return;o.selectOption(C);break;case"ArrowUp":p?o.focusOption("up"):o.openMenu("last");break;case"ArrowDown":p?o.focusOption("down"):o.openMenu("first");break;case"PageUp":if(!p)return;o.focusOption("pageup");break;case"PageDown":if(!p)return;o.focusOption("pagedown");break;case"Home":if(!p)return;o.focusOption("first");break;case"End":if(!p)return;o.focusOption("last");break;default:return}i.preventDefault()}},o.instancePrefix="react-select-"+(o.props.instanceId||++j1),o.state.selectValue=Fl(r.value),o}return cr(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput()}},{key:"componentDidUpdate",value:function(o){var i=this.props,a=i.isDisabled,s=i.menuIsOpen,l=this.state.isFocused;(l&&!a&&o.isDisabled||l&&s&&!o.menuIsOpen)&&this.focusInput(),l&&a&&!o.isDisabled&&this.setState({isFocused:!1},this.onMenuClose),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(ub(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close"}),this.props.onMenuClose()}},{key:"onInputChange",value:function(o,i){this.props.onInputChange(o,i)}},{key:"focusInput",value:function(){!this.inputRef||this.inputRef.focus()}},{key:"blurInput",value:function(){!this.inputRef||this.inputRef.blur()}},{key:"openMenu",value:function(o){var i=this,a=this.state,s=a.selectValue,l=a.isFocused,c=this.buildFocusableOptions(),u=o==="first"?0:c.length-1;if(!this.props.isMulti){var f=c.indexOf(s[0]);f>-1&&(u=f)}this.scrollToFocusedOptionOnUpdate=!(l&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:c[u]},function(){return i.onMenuOpen()})}},{key:"focusValue",value:function(o){var i=this.state,a=i.selectValue,s=i.focusedValue;if(!!this.props.isMulti){this.setState({focusedOption:null});var l=a.indexOf(s);s||(l=-1);var c=a.length-1,u=-1;if(!!a.length){switch(o){case"previous":l===0?u=0:l===-1?u=c:u=l-1;break;case"next":l>-1&&l<c&&(u=l+1);break}this.setState({inputIsHidden:u!==-1,focusedValue:a[u]})}}}},{key:"focusOption",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",i=this.props.pageSize,a=this.state.focusedOption,s=this.getFocusableOptions();if(!!s.length){var l=0,c=s.indexOf(a);a||(c=-1),o==="up"?l=c>0?c-1:s.length-1:o==="down"?l=(c+1)%s.length:o==="pageup"?(l=c-i,l<0&&(l=0)):o==="pagedown"?(l=c+i,l>s.length-1&&(l=s.length-1)):o==="last"&&(l=s.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:s[l],focusedValue:null})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(di):ie(ie({},di),this.props.theme):di}},{key:"getCommonProps",value:function(){var o=this.clearValue,i=this.cx,a=this.getStyles,s=this.getValue,l=this.selectOption,c=this.setValue,u=this.props,f=u.isMulti,d=u.isRtl,p=u.options,m=this.hasValue();return{clearValue:o,cx:i,getStyles:a,getValue:s,hasValue:m,isMulti:f,isRtl:d,options:p,selectOption:l,selectProps:u,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var o=this.state.selectValue;return o.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var o=this.props,i=o.isClearable,a=o.isMulti;return i===void 0?a:i}},{key:"isOptionDisabled",value:function(o,i){return mc(this.props,o,i)}},{key:"isOptionSelected",value:function(o,i){return vc(this.props,o,i)}},{key:"filterOption",value:function(o,i){return gc(this.props,o,i)}},{key:"formatOptionLabel",value:function(o,i){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,s=this.state.selectValue;return this.props.formatOptionLabel(o,{context:i,inputValue:a,selectValue:s})}else return this.getOptionLabel(o)}},{key:"formatGroupLabel",value:function(o){return this.props.formatGroupLabel(o)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var o=this.props,i=o.isDisabled,a=o.isSearchable,s=o.inputId,l=o.inputValue,c=o.tabIndex,u=o.form,f=this.getComponents(),d=f.Input,p=this.state.inputIsHidden,m=this.commonProps,b=s||this.getElementId("input"),v={"aria-autocomplete":"list","aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"]};return a?g.createElement(d,T({},m,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:b,innerRef:this.getInputRef,isDisabled:i,isHidden:p,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:c,form:u,type:"text",value:l},v)):g.createElement(E1,T({id:b,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:mr,onFocus:this.onInputFocus,readOnly:!0,disabled:i,tabIndex:c,form:u,value:""},v))}},{key:"renderPlaceholderOrValue",value:function(){var o=this,i=this.getComponents(),a=i.MultiValue,s=i.MultiValueContainer,l=i.MultiValueLabel,c=i.MultiValueRemove,u=i.SingleValue,f=i.Placeholder,d=this.commonProps,p=this.props,m=p.controlShouldRenderValue,b=p.isDisabled,v=p.isMulti,S=p.inputValue,C=p.placeholder,P=this.state,F=P.selectValue,O=P.focusedValue,k=P.isFocused;if(!this.hasValue()||!m)return S?null:g.createElement(f,T({},d,{key:"placeholder",isDisabled:b,isFocused:k}),C);if(v){var x=F.map(function(H,fe){var W=H===O;return g.createElement(a,T({},d,{components:{Container:s,Label:l,Remove:c},isFocused:W,isDisabled:b,key:"".concat(o.getOptionValue(H)).concat(fe),index:fe,removeProps:{onClick:function(){return o.removeValue(H)},onTouchEnd:function(){return o.removeValue(H)},onMouseDown:function(Y){Y.preventDefault(),Y.stopPropagation()}},data:H}),o.formatOptionLabel(H,"value"))});return x}if(S)return null;var X=F[0];return g.createElement(u,T({},d,{data:X,isDisabled:b}),this.formatOptionLabel(X,"value"))}},{key:"renderClearIndicator",value:function(){var o=this.getComponents(),i=o.ClearIndicator,a=this.commonProps,s=this.props,l=s.isDisabled,c=s.isLoading,u=this.state.isFocused;if(!this.isClearable()||!i||l||!this.hasValue()||c)return null;var f={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return g.createElement(i,T({},a,{innerProps:f,isFocused:u}))}},{key:"renderLoadingIndicator",value:function(){var o=this.getComponents(),i=o.LoadingIndicator,a=this.commonProps,s=this.props,l=s.isDisabled,c=s.isLoading,u=this.state.isFocused;if(!i||!c)return null;var f={"aria-hidden":"true"};return g.createElement(i,T({},a,{innerProps:f,isDisabled:l,isFocused:u}))}},{key:"renderIndicatorSeparator",value:function(){var o=this.getComponents(),i=o.DropdownIndicator,a=o.IndicatorSeparator;if(!i||!a)return null;var s=this.commonProps,l=this.props.isDisabled,c=this.state.isFocused;return g.createElement(a,T({},s,{isDisabled:l,isFocused:c}))}},{key:"renderDropdownIndicator",value:function(){var o=this.getComponents(),i=o.DropdownIndicator;if(!i)return null;var a=this.commonProps,s=this.props.isDisabled,l=this.state.isFocused,c={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return g.createElement(i,T({},a,{innerProps:c,isDisabled:s,isFocused:l}))}},{key:"renderMenu",value:function(){var o=this,i=this.getComponents(),a=i.Group,s=i.GroupHeading,l=i.Menu,c=i.MenuList,u=i.MenuPortal,f=i.LoadingMessage,d=i.NoOptionsMessage,p=i.Option,m=this.commonProps,b=this.state.focusedOption,v=this.props,S=v.captureMenuScroll,C=v.inputValue,P=v.isLoading,F=v.loadingMessage,O=v.minMenuHeight,k=v.maxMenuHeight,x=v.menuIsOpen,X=v.menuPlacement,H=v.menuPosition,fe=v.menuPortalTarget,W=v.menuShouldBlockScroll,z=v.menuShouldScrollIntoView,Y=v.noOptionsMessage,de=v.onMenuScrollToTop,Ie=v.onMenuScrollToBottom;if(!x)return null;var he=function(_,E){var A=_.type,w=_.data,D=_.isDisabled,I=_.isSelected,j=_.label,U=_.value,Ze=b===w,We=D?void 0:function(){return o.onOptionHover(w)},Qe=D?void 0:function(){return o.selectOption(w)},Ne="".concat(o.getElementId("option"),"-").concat(E),cn={id:Ne,onClick:Qe,onMouseMove:We,onMouseOver:We,tabIndex:-1};return g.createElement(p,T({},m,{innerProps:cn,data:w,isDisabled:D,isSelected:I,key:Ne,label:j,type:A,value:U,isFocused:Ze,innerRef:Ze?o.getFocusedOptionRef:void 0}),o.formatOptionLabel(_.data,"menu"))},te;if(this.hasOptions())te=this.getCategorizedOptions().map(function(y){if(y.type==="group"){var _=y.data,E=y.options,A=y.index,w="".concat(o.getElementId("group"),"-").concat(A),D="".concat(w,"-heading");return g.createElement(a,T({},m,{key:w,data:_,options:E,Heading:s,headingProps:{id:D,data:y.data},label:o.formatGroupLabel(y.data)}),y.options.map(function(I){return he(I,"".concat(A,"-").concat(I.index))}))}else if(y.type==="option")return he(y,"".concat(y.index))});else if(P){var ln=F({inputValue:C});if(ln===null)return null;te=g.createElement(f,m,ln)}else{var Re=Y({inputValue:C});if(Re===null)return null;te=g.createElement(d,m,Re)}var we={minMenuHeight:O,maxMenuHeight:k,menuPlacement:X,menuPosition:H,menuShouldScrollIntoView:z},dt=g.createElement(Vl,T({},m,we),function(y){var _=y.ref,E=y.placerProps,A=E.placement,w=E.maxHeight;return g.createElement(l,T({},m,we,{innerRef:_,innerProps:{onMouseDown:o.onMenuMouseDown,onMouseMove:o.onMenuMouseMove},isLoading:P,placement:A}),g.createElement(x1,{captureEnabled:S,onTopArrive:de,onBottomArrive:Ie,lockEnabled:W},function(D){return g.createElement(c,T({},m,{innerRef:function(j){o.getMenuListRef(j),D(j)},isLoading:P,maxHeight:w,focusedOption:b}),te)}))});return fe||H==="fixed"?g.createElement(u,T({},m,{appendTo:fe,controlElement:this.controlRef,menuPlacement:X,menuPosition:H}),dt):dt}},{key:"renderFormField",value:function(){var o=this,i=this.props,a=i.delimiter,s=i.isDisabled,l=i.isMulti,c=i.name,u=this.state.selectValue;if(!(!c||s))if(l)if(a){var f=u.map(function(m){return o.getOptionValue(m)}).join(a);return g.createElement("input",{name:c,type:"hidden",value:f})}else{var d=u.length>0?u.map(function(m,b){return g.createElement("input",{key:"i-".concat(b),name:c,type:"hidden",value:o.getOptionValue(m)})}):g.createElement("input",{name:c,type:"hidden"});return g.createElement("div",null,d)}else{var p=u[0]?this.getOptionValue(u[0]):"";return g.createElement("input",{name:c,type:"hidden",value:p})}}},{key:"renderLiveRegion",value:function(){var o=this.commonProps,i=this.state,a=i.ariaSelection,s=i.focusedOption,l=i.focusedValue,c=i.isFocused,u=i.selectValue,f=this.getFocusableOptions();return g.createElement(g1,T({},o,{ariaSelection:a,focusedOption:s,focusedValue:l,isFocused:c,selectValue:u,focusableOptions:f}))}},{key:"render",value:function(){var o=this.getComponents(),i=o.Control,a=o.IndicatorsContainer,s=o.SelectContainer,l=o.ValueContainer,c=this.props,u=c.className,f=c.id,d=c.isDisabled,p=c.menuIsOpen,m=this.state.isFocused,b=this.commonProps=this.getCommonProps();return g.createElement(s,T({},b,{className:u,innerProps:{id:f,onKeyDown:this.onKeyDown},isDisabled:d,isFocused:m}),this.renderLiveRegion(),g.createElement(i,T({},b,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:d,isFocused:m,menuIsOpen:p}),g.createElement(l,T({},b,{isDisabled:d}),this.renderPlaceholderOrValue(),this.renderInput()),g.createElement(a,T({},b,{isDisabled:d}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(o,i){var a=i.prevProps,s=i.clearFocusValueOnUpdate,l=i.inputIsHiddenAfterUpdate,c=o.options,u=o.value,f=o.menuIsOpen,d=o.inputValue,p={};if(a&&(u!==a.value||c!==a.options||f!==a.menuIsOpen||d!==a.inputValue)){var m=Fl(u),b=f?V1(o,m):[],v=s?H1(i,m):null,S=U1(i,b);p={selectValue:m,focusedOption:S,focusedValue:v,clearFocusValueOnUpdate:!1}}var C=l!=null&&o!==a?{inputIsHidden:l,inputIsHiddenAfterUpdate:void 0}:{};return ie(ie(ie({},p),C),{},{prevProps:o})}}]),n}(J);bc.defaultProps=B1;var z1={defaultInputValue:"",defaultMenuIsOpen:!1,defaultValue:null},W1=function(e){var n,r;return r=n=function(o){dr(a,o);var i=hr(a);function a(){var s;lr(this,a);for(var l=arguments.length,c=new Array(l),u=0;u<l;u++)c[u]=arguments[u];return s=i.call.apply(i,[this].concat(c)),s.select=void 0,s.state={inputValue:s.props.inputValue!==void 0?s.props.inputValue:s.props.defaultInputValue,menuIsOpen:s.props.menuIsOpen!==void 0?s.props.menuIsOpen:s.props.defaultMenuIsOpen,value:s.props.value!==void 0?s.props.value:s.props.defaultValue},s.onChange=function(f,d){s.callProp("onChange",f,d),s.setState({value:f})},s.onInputChange=function(f,d){var p=s.callProp("onInputChange",f,d);s.setState({inputValue:p!==void 0?p:f})},s.onMenuOpen=function(){s.callProp("onMenuOpen"),s.setState({menuIsOpen:!0})},s.onMenuClose=function(){s.callProp("onMenuClose"),s.setState({menuIsOpen:!1})},s}return cr(a,[{key:"focus",value:function(){this.select.focus()}},{key:"blur",value:function(){this.select.blur()}},{key:"getProp",value:function(l){return this.props[l]!==void 0?this.props[l]:this.state[l]}},{key:"callProp",value:function(l){if(typeof this.props[l]=="function"){for(var c,u=arguments.length,f=new Array(u>1?u-1:0),d=1;d<u;d++)f[d-1]=arguments[d];return(c=this.props)[l].apply(c,f)}}},{key:"render",value:function(){var l=this,c=this.props;c.defaultInputValue,c.defaultMenuIsOpen,c.defaultValue;var u=Mt(c,["defaultInputValue","defaultMenuIsOpen","defaultValue"]);return g.createElement(e,T({},u,{ref:function(d){l.select=d},inputValue:this.getProp("inputValue"),menuIsOpen:this.getProp("menuIsOpen"),onChange:this.onChange,onInputChange:this.onInputChange,onMenuClose:this.onMenuClose,onMenuOpen:this.onMenuOpen,value:this.getProp("value")}))}}]),a}(J),n.defaultProps=z1,r},G1=W1(bc),q1=G1;const pi=[{value:"assessing",label:"Assessing"},{value:"bookmarking",label:"Bookmarking"},{value:"classifying",label:"Classifying"},{value:"commenting",label:"Commenting"},{value:"describing",label:"Describing"},{value:"editing",label:"Editing"},{value:"highlighting",label:"Highlighting"},{value:"identifying",label:"Identifying"},{value:"linking",label:"Linking"},{value:"moderating",label:"Moderating"},{value:"questioning",label:"Questioning"},{value:"replying",label:"Replying"},{value:"supplementing",label:"Transcription"}];var Sc=t=>{const e=t.content?pi.find(n=>n.value===t.content):null;return g.createElement("div",{className:"r6o-purposedropdown"},g.createElement(q1,{value:e,onChange:t.onChange,options:pi,isDisabled:!t.editable}))};const Y1=t=>g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 940",width:t.width},g.createElement("metadata",null,"IcoFont Icons"),g.createElement("title",null,"simple-down"),g.createElement("glyph",{glyphName:"simple-down",unicode:"\uEAB2",horizAdvX:"1000"}),g.createElement("path",{fill:"currentColor",d:"M200 392.6l300 300 300-300-85.10000000000002-85.10000000000002-214.89999999999998 214.79999999999995-214.89999999999998-214.89999999999998-85.10000000000002 85.20000000000005z"})),X1=t=>g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"180 150 700 800",width:t.width},g.createElement("metadata",null,"IcoFont Icons"),g.createElement("title",null,"close"),g.createElement("glyph",{glyphName:"close",unicode:"\uEEE4",horizAdvX:"1000"}),g.createElement("path",{fill:"currentColor",d:"M709.8 206.6c-64.39999999999998 65.50000000000003-128.89999999999998 131.20000000000002-194.19999999999993 197.6-8.600000000000023 8.699999999999989-22.400000000000034 8.800000000000011-31 0-65-66-129.70000000000005-131.8-194.5-197.6-8.600000000000023-8.699999999999989-22.400000000000034-8.599999999999994-30.900000000000034 0.09999999999999432-15.699999999999989 16.200000000000017-31.099999999999994 32.30000000000001-47.099999999999994 48.80000000000001-8.5 8.800000000000011-8.299999999999983 23 0.20000000000001705 31.69999999999999 63.099999999999966 64.19999999999999 127.89999999999998 130.10000000000002 193.59999999999997 197 8.600000000000023 8.699999999999989 8.5 22.80000000000001 0 31.599999999999966-65.19999999999999 66.40000000000009-130.2 132.5-194.7 198.10000000000002-8.5 8.700000000000045-8.5 22.800000000000068 0.20000000000001705 31.399999999999977l47.79999999999998 47.90000000000009c8.600000000000023 8.599999999999909 22.600000000000023 8.599999999999909 31.100000000000023-0.10000000000002274l194.2-197.30000000000007c8.600000000000023-8.699999999999932 22.399999999999977-8.699999999999932 31 0 64.70000000000005 65.80000000000007 129.20000000000005 131.4000000000001 194.20000000000005 197.5 8.599999999999909 8.700000000000045 22.5 8.800000000000068 31 0.10000000000002274 16-16.199999999999932 31.699999999999932-32.19999999999993 47.59999999999991-48.299999999999955 8.600000000000023-8.700000000000045 8.600000000000023-22.899999999999977 0.10000000000002274-31.600000000000023-63.799999999999955-65-128.5-130.89999999999998-194.19999999999993-197.79999999999995-8.600000000000023-8.700000000000045-8.600000000000023-22.900000000000034 0-31.600000000000023 65.19999999999993-66.40000000000003 130.0999999999999-132.5 194.5-198.20000000000005 8.599999999999909-8.699999999999989 8.5-22.799999999999955-0.10000000000002274-31.49999999999997l-47.80000000000007-48.099999999999994c-8.5-8.5-22.399999999999977-8.400000000000006-31 0.29999999999998295z"})),K1=t=>g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:t.width},g.createElement("path",{fill:"currentColor",d:"M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"}));var J1=t=>{const[e,n]=Ve(!1),[r,o]=Ve(!1),i=f=>{n(!0),o(!1)},a=f=>{t.onDelete(t.body),o(!1)},s=f=>t.onUpdate(t.body,{...t.body,value:f.target.value}),l=f=>t.onUpdate(t.body,{...t.body,purpose:f.value}),c=t.body.modified||t.body.created,u=t.body.creator&&g.createElement("div",{className:"r6o-lastmodified"},g.createElement("span",{className:"r6o-lastmodified-by"},t.body.creator.name||t.body.creator.id),t.body.created&&g.createElement("span",{className:"r6o-lastmodified-at"},g.createElement(Wd,{datetime:t.env.toClientTime(c),locale:Se.locale()})));return t.readOnly?g.createElement("div",{className:"r6o-widget comment"},g.createElement("div",{className:"r6o-readonly-comment"},t.body.value),u):g.createElement("div",{className:e?"r6o-widget comment editable":"r6o-widget comment"},g.createElement(Zu,{editable:e,content:t.body.value,onChange:s,onSaveAndClose:t.onSaveAndClose}),!e&&u,t.purposeSelector&&g.createElement(Sc,{editable:e,content:t.body.purpose,onChange:l,onSaveAndClose:t.onSaveAndClose}),g.createElement("div",{className:r?"r6o-icon r6o-arrow-down r6o-menu-open":"r6o-icon r6o-arrow-down",onClick:()=>o(!r)},g.createElement(Y1,{width:12})),r&&g.createElement(ky,{onEdit:i,onDelete:a,onClickOutside:()=>o(!1)}))};const Z1=pi.map(t=>t.value),_c=(t,e)=>{const n=e?Z1.indexOf(t.purpose)>-1:t.purpose=="commenting"||t.purpose=="replying";return t.type==="TextualBody"&&(!Object.prototype.hasOwnProperty.call(t,"purpose")||n)},Ec=(t,e)=>{var n,r;if(e.editable===!0)return!1;if(e.editable===!1)return!0;if(e.editable==="MINE_ONLY"){const o=(n=t.creator)==null?void 0:n.id;return((r=e.env.user)==null?void 0:r.id)!==o}return e.readOnly},Q1=(t,e)=>t||{type:"TextualBody",value:"",purpose:e?"replying":"commenting",draft:!0},Cc=t=>{const e=t.annotation?t.annotation.bodies.filter(l=>_c(l,t.purposeSelector)):[],n=Q1(e.find(l=>l.draft==!0),e.length>1),r=e.filter(l=>l!=n),o=l=>{const c=n.value,u=l.target.value;c.length===0&&u.length>0?t.onAppendBody({...n,value:u}):c.length>0&&u.length===0?t.onRemoveBody(n):t.onUpdateBody(n,{...n,value:u})},i=l=>t.onUpdateBody(n,{...n,purpose:l.value}),a=!t.readOnly&&t.annotation,s=r.length===0||!t.disableReply;return g.createElement(g.Fragment,null,r.map((l,c)=>g.createElement(J1,{key:c,env:t.env,purposeSelector:t.purposeSelector,readOnly:Ec(l,t),body:l,onUpdate:t.onUpdateBody,onDelete:t.onRemoveBody,onSaveAndClose:t.onSaveAndClose})),a&&s&&g.createElement("div",{className:"r6o-widget comment editable"},g.createElement(Zu,{focus:t.focus,content:n.value,editable:!0,placeholder:r.length>0?Se.t("Add a reply..."):t.textPlaceHolder||Se.t("Add a comment..."),onChange:o,onSaveAndClose:()=>t.onSaveAndClose()}),t.purposeSelector&&n.value.length>0&&g.createElement(Sc,{editable:!0,content:n.purpose,onChange:i,onSaveAndClose:()=>t.onSaveAndClose()})))};Cc.disableDelete=(t,e)=>t.bodies.filter(r=>_c(r,e.purposeSelector)).some(r=>Ec(r,e));var Ac=Cc;function wc(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,fr(t,e)}function eS(t,e){return t.classList?!!e&&t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function tS(t,e){t.classList?t.classList.add(e):eS(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function Oc(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function nS(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=Oc(t.className,e):t.setAttribute("class",Oc(t.className&&t.className.baseVal||"",e))}var $c={disabled:!1},xc=g.createContext(null),an="unmounted",ct="exited",ft="entering",It="entered",hi="exiting",ze=function(t){wc(e,t);function e(r,o){var i;i=t.call(this,r,o)||this;var a=o,s=a&&!a.isMounting?r.enter:r.appear,l;return i.appearStatus=null,r.in?s?(l=ct,i.appearStatus=ft):l=It:r.unmountOnExit||r.mountOnEnter?l=an:l=ct,i.state={status:l},i.nextCallback=null,i}e.getDerivedStateFromProps=function(o,i){var a=o.in;return a&&i.status===an?{status:ct}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var a=this.state.status;this.props.in?a!==ft&&a!==It&&(i=ft):(a===ft||a===It)&&(i=hi)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,a,s;return i=a=s=o,o!=null&&typeof o!="number"&&(i=o.exit,a=o.enter,s=o.appear!==void 0?o.appear:a),{exit:i,enter:a,appear:s}},n.updateStatus=function(o,i){o===void 0&&(o=!1),i!==null?(this.cancelNextCallback(),i===ft?this.performEnter(o):this.performExit()):this.props.unmountOnExit&&this.state.status===ct&&this.setState({status:an})},n.performEnter=function(o){var i=this,a=this.props.enter,s=this.context?this.context.isMounting:o,l=this.props.nodeRef?[s]:[g.findDOMNode(this),s],c=l[0],u=l[1],f=this.getTimeouts(),d=s?f.appear:f.enter;if(!o&&!a||$c.disabled){this.safeSetState({status:It},function(){i.props.onEntered(c)});return}this.props.onEnter(c,u),this.safeSetState({status:ft},function(){i.props.onEntering(c,u),i.onTransitionEnd(d,function(){i.safeSetState({status:It},function(){i.props.onEntered(c,u)})})})},n.performExit=function(){var o=this,i=this.props.exit,a=this.getTimeouts(),s=this.props.nodeRef?void 0:g.findDOMNode(this);if(!i||$c.disabled){this.safeSetState({status:ct},function(){o.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:hi},function(){o.props.onExiting(s),o.onTransitionEnd(a.exit,function(){o.safeSetState({status:ct},function(){o.props.onExited(s)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,a=!0;return this.nextCallback=function(s){a&&(a=!1,i.nextCallback=null,o(s))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var a=this.props.nodeRef?this.props.nodeRef.current:g.findDOMNode(this),s=o==null&&!this.props.addEndListener;if(!a||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],c=l[0],u=l[1];this.props.addEndListener(c,u)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===an)return null;var i=this.props,a=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var s=ei(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return g.createElement(xc.Provider,{value:null},typeof a=="function"?a(o,s):g.cloneElement(g.Children.only(a),s))},e}(g.Component);ze.contextType=xc,ze.propTypes={};function Rt(){}ze.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Rt,onEntering:Rt,onEntered:Rt,onExit:Rt,onExiting:Rt,onExited:Rt},ze.UNMOUNTED=an,ze.EXITED=ct,ze.ENTERING=ft,ze.ENTERED=It,ze.EXITING=hi;var rS=ze,oS=function(e,n){return e&&n&&n.split(" ").forEach(function(r){return tS(e,r)})},mi=function(e,n){return e&&n&&n.split(" ").forEach(function(r){return nS(e,r)})},vi=function(t){wc(e,t);function e(){for(var r,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=t.call.apply(t,[this].concat(i))||this,r.appliedClasses={appear:{},enter:{},exit:{}},r.onEnter=function(s,l){var c=r.resolveArguments(s,l),u=c[0],f=c[1];r.removeClasses(u,"exit"),r.addClass(u,f?"appear":"enter","base"),r.props.onEnter&&r.props.onEnter(s,l)},r.onEntering=function(s,l){var c=r.resolveArguments(s,l),u=c[0],f=c[1],d=f?"appear":"enter";r.addClass(u,d,"active"),r.props.onEntering&&r.props.onEntering(s,l)},r.onEntered=function(s,l){var c=r.resolveArguments(s,l),u=c[0],f=c[1],d=f?"appear":"enter";r.removeClasses(u,d),r.addClass(u,d,"done"),r.props.onEntered&&r.props.onEntered(s,l)},r.onExit=function(s){var l=r.resolveArguments(s),c=l[0];r.removeClasses(c,"appear"),r.removeClasses(c,"enter"),r.addClass(c,"exit","base"),r.props.onExit&&r.props.onExit(s)},r.onExiting=function(s){var l=r.resolveArguments(s),c=l[0];r.addClass(c,"exit","active"),r.props.onExiting&&r.props.onExiting(s)},r.onExited=function(s){var l=r.resolveArguments(s),c=l[0];r.removeClasses(c,"exit"),r.addClass(c,"exit","done"),r.props.onExited&&r.props.onExited(s)},r.resolveArguments=function(s,l){return r.props.nodeRef?[r.props.nodeRef.current,s]:[s,l]},r.getClassNames=function(s){var l=r.props.classNames,c=typeof l=="string",u=c&&l?l+"-":"",f=c?""+u+s:l[s],d=c?f+"-active":l[s+"Active"],p=c?f+"-done":l[s+"Done"];return{baseClassName:f,activeClassName:d,doneClassName:p}},r}var n=e.prototype;return n.addClass=function(o,i,a){var s=this.getClassNames(i)[a+"ClassName"],l=this.getClassNames("enter"),c=l.doneClassName;i==="appear"&&a==="done"&&c&&(s+=" "+c),a==="active"&&o&&o.scrollTop,s&&(this.appliedClasses[i][a]=s,oS(o,s))},n.removeClasses=function(o,i){var a=this.appliedClasses[i],s=a.base,l=a.active,c=a.done;this.appliedClasses[i]={},s&&mi(o,s),l&&mi(o,l),c&&mi(o,c)},n.render=function(){var o=this.props;o.classNames;var i=ei(o,["classNames"]);return g.createElement(rS,T({},i,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(g.Component);vi.defaultProps={classNames:""},vi.propTypes={};var iS=vi;const aS=(t,e)=>e.filter(n=>(n.label?n.label:n).toLowerCase().startsWith(t.toLowerCase())),sS=(t,e)=>e(t);var uS=t=>{const e=$e(),[n,r]=Ve(t.initialValue||""),[o,i]=Ve([]),[a,s]=Ve(null);tt(()=>{t.focus&&e.current.querySelector("input").focus({preventScroll:!0})},[]),tt(()=>{t.onChange&&t.onChange(n)},[n]);const l=d=>{if(typeof t.vocabulary=="function"){const p=sS(d,t.vocabulary);p.then?p.then(i):i(p)}else{const p=aS(d,t.vocabulary);i(p)}},c=()=>{if(a!==null)t.onSubmit(o[a]);else{const d=n.trim();if(d){const p=Array.isArray(t.vocabulary)?t.vocabulary.find(m=>(m.label||m).toLowerCase()===d.toLowerCase()):null;p?t.onSubmit(p):t.onSubmit(d)}}r(""),i([]),s(null)},u=d=>{if(d.which===13)c();else if(d.which===27)t.onCancel&&t.onCancel();else if(o.length>0){if(d.which===38)if(a===null)s(0);else{const p=Math.max(0,a-1);s(p)}else if(d.which===40)if(a===null)s(0);else{const p=Math.min(o.length-1,a+1);s(p)}}else d.which===40&&Array.isArray(t.vocabulary)&&i(t.vocabulary)},f=d=>{const{value:p}=d.target;r(p),s(null),p?l(p):i([])};return g.createElement("div",{ref:e,className:"r6o-autocomplete"},g.createElement("div",null,g.createElement("input",{onKeyDown:u,onChange:f,value:n,placeholder:t.placeholder})),g.createElement("ul",null,o.length>0&&o.map((d,p)=>g.createElement("li",{key:`${d.label?d.label:d}${p}`,onClick:c,onMouseEnter:()=>s(p),style:a===p?{backgroundColor:"#bde4ff"}:{}},d.label?d.label:d))))};const lS=t=>t||{type:"TextualBody",value:"",purpose:"tagging",draft:!0};var Pc=t=>{const e=t.annotation?t.annotation.bodies.filter(f=>f.purpose==="tagging"):[],n=lS(e.slice().reverse().find(f=>f.draft)),r=e.filter(f=>f!=n),[o,i]=Ve(!1),a=f=>d=>{i(o===f?!1:f)},s=f=>{const d=n.value.trim(),p=f.trim();d.length===0&&p.length>0?t.onAppendBody({...n,value:p}):d.length>0&&p.length===0?t.onRemoveBody(n):d!==p&&t.onUpdateBody(n,{...n,value:p})},l=f=>d=>{d.stopPropagation(),t.onRemoveBody(f)},c=f=>{const d=f.uri?{type:"SpecificResource",purpose:"tagging",source:{id:f.uri,label:f.label}}:{type:"TextualBody",purpose:"tagging",value:f.label||f};n.value.trim().length===0?t.onAppendBody(d):t.onUpdateBody(n,d)},u=f=>f.value||f.source.label;return g.createElement("div",{className:"r6o-widget r6o-tag"},r.length>0&&g.createElement("ul",{className:"r6o-taglist"},r.map(f=>g.createElement("li",{key:u(f),onClick:a(f)},g.createElement("span",{className:"r6o-label"},u(f)),!t.readOnly&&g.createElement(iS,{in:o===f,timeout:200,classNames:"r6o-delete"},g.createElement("span",{className:"r6o-delete-wrapper",onClick:l(f)},g.createElement("span",{className:"r6o-delete"},g.createElement(X1,{width:12}))))))),!t.readOnly&&g.createElement(uS,{focus:t.focus,placeholder:t.textPlaceHolder||Se.t("Add tag..."),vocabulary:t.vocabulary||[],onChange:s,onSubmit:c}))};class Dc extends J{constructor(e){super(e),this.element=g.createRef()}renderWidget(e){const n=this.props.widget({annotation:e.annotation,readOnly:e.readOnly,...e.config,onAppendBody:(r,o)=>e.onAppendBody(r,o),onUpdateBody:(r,o,i)=>e.onUpdateBody(r,o,i),onUpsertBody:(r,o,i)=>e.onUpsertBody(r,o,i),onRemoveBody:(r,o)=>e.onRemoveBody(r,o),onBatchModify:(r,o)=>e.onBatchModify(r,o),onSetProperty:(r,o)=>e.onSetProperty(r,o),onAddContext:r=>e.onAddContext(r),onSaveAndClose:()=>e.onSaveAndClose()});for(;this.element.current.firstChild;)this.element.current.removeChild(this.element.current.lastChild);this.element.current.appendChild(n)}componentDidMount(){this.renderWidget(this.props)}componentWillReceiveProps(e){this.element.current&&this.props.annotation!==e.annotation&&this.renderWidget(e)}render(){return g.createElement("div",{ref:this.element,className:"widget"})}}window.React=g,window.ReactDOM=g;const cS={COMMENT:Ac,TAG:Pc},fS=[g.createElement(Ac,null),g.createElement(Pc,null)],dS=t=>{const e=r=>{var o;return typeof r=="function"&&!!((o=r.prototype)!=null&&o.isReactComponent)},n=r=>typeof r=="function"&&(String(r).match(/return .+\(['|"].+['|"],\s*\{/g)||String(r).match(/return .+preact_compat/)||String(r).match(/return .+\.createElement/g));return e(t)||n(t)},pS=t=>{const e=(n,r,o)=>{if(typeof n=="string"||n instanceof String)return g.createElement(cS[n],r);if((o==null?void 0:o.toLowerCase())==="react")return g.createElement(n,r);if((o==null?void 0:o.toLowerCase())==="plainjs")return g.createElement(Dc,{widget:n,config:r});if(dS(n))return g.createElement(n,r);if(typeof n=="function"||n instanceof Function)return g.createElement(Dc,{widget:n,config:r});throw`${n} is not a valid plugin`};if(t.widget){const{widget:n,force:r,...o}=t;return e(n,o,r)}else return e(t)},Tc=14;var Mc=(t,e,n,r)=>{const o=t.getBoundingClientRect();e.className="r6o-editor r6o-arrow-top r6o-arrow-left";const{left:i,top:a,right:s,bottom:l}=n.getBoundingClientRect();if(e.style.top=`${l-o.top+Tc}px`,e.style.left=`${i-o.left}px`,r){const c=e.children[1].getBoundingClientRect(),{innerWidth:u,innerHeight:f}=t.ownerDocument.defaultView;if(c.right>u&&(e.classList.remove("r6o-arrow-left"),e.classList.add("r6o-arrow-right"),e.style.left=`${s-c.width-o.left}px`),c.bottom>f){e.classList.remove("r6o-arrow-top"),e.classList.add("r6o-arrow-bottom");const p=e.children[1].getBoundingClientRect().height;e.style.top=`${a-o.top-p-Tc}px`}const d=e.children[1].getBoundingClientRect();if(d.top<0){e.classList.add("pushed","down"),e.style.top=`${-o.top}px`;const p=l-o.top;d.height-o.top>p&&e.classList.remove("r6o-arrow-bottom")}d.left<0&&(e.classList.add("pushed","right"),e.style.left=`${-o.left}px`),requestAnimationFrame(()=>e.style.opacity=1)}};const kc=t=>{const{top:e,left:n,width:r,height:o}=t.getBoundingClientRect();return`${e}, ${n}, ${r}, ${o}`};class hS extends J{constructor(n){super(n);h(this,"initResizeObserver",()=>{const n=this.props.autoPosition===void 0?!0:this.props.autoPosition;if(window!=null&&window.ResizeObserver){const r=new ResizeObserver(()=>{this.state.dragged||Mc(this.props.wrapperEl,this.element.current,this.props.selectedElement,n)});return r.observe(this.props.wrapperEl),()=>r.disconnect()}else this.state.dragged||Mc(this.props.wrapperEl,this.element.current,this.props.selectedElement,n)});h(this,"creationMeta",n=>{const r={},{user:o}=this.props.env;return o&&(r.creator={},o.id&&(r.creator.id=o.id),o.displayName&&(r.creator.name=o.displayName),r[n.created?"modified":"created"]=this.props.env.getCurrentTimeAdjusted()),r});h(this,"getCurrentAnnotation",()=>this.state.currentAnnotation.clone());h(this,"hasChanges",()=>{var n;return!((n=this.props.annotation)!=null&&n.isEqual(this.state.currentAnnotation))});h(this,"updateCurrentAnnotation",(n,r)=>{this.setState({currentAnnotation:this.state.currentAnnotation.clone(n)},()=>{r?this.onOk():this.props.onChanged&&this.props.onChanged()})});h(this,"onAppendBody",(n,r)=>this.updateCurrentAnnotation({body:[...this.state.currentAnnotation.bodies,{...n,...this.creationMeta(n)}]},r));h(this,"onUpdateBody",(n,r,o)=>this.updateCurrentAnnotation({body:this.state.currentAnnotation.bodies.map(i=>i===n?{...r,...this.creationMeta(r)}:i)},o));h(this,"onRemoveBody",(n,r)=>this.updateCurrentAnnotation({body:this.state.currentAnnotation.bodies.filter(o=>o!==n)},r));h(this,"onUpsertBody",(n,r,o)=>{if(n==null&&r!=null)this.onAppendBody(r,o);else if(n!=null&&r!=null)this.onUpdateBody(n,r,o);else if(n!=null&&r==null){const i=this.state.currentAnnotation.bodies.find(a=>a.purpose===n.purpose);i?this.onUpdateBody(i,n,o):this.onAppendBody(n,o)}});h(this,"onBatchModify",(n,r)=>{const o=n.filter(c=>c.action==="upsert"&&c.body).map(c=>({previous:this.state.currentAnnotation.bodies.find(u=>u.purpose===c.body.purpose),updated:{...c.body,...this.creationMeta(c.body)}})),i=n.filter(c=>c.action==="remove").map(c=>c.body),a=[...n.filter(c=>c.action==="append"||c.action==="upsert"&&c.updated&&!c.previous).map(c=>({...c.body,...this.creationMeta(c.body)})),...o.filter(c=>!c.previous).map(c=>c.updated)],s=[...n.filter(c=>c.action==="update"||c.action==="upsert"&&c.updated&&c.previous).map(c=>({previous:c.previous,updated:{...c.updated,...this.creationMeta(c.updated)}})),...o.filter(c=>c.previous)],l=[...this.state.currentAnnotation.bodies.filter(c=>!i.includes(c)).map(c=>{const u=s.find(f=>f.previous===c);return u?u.updated:c}),...a];this.updateCurrentAnnotation({body:l},r)});h(this,"onSetProperty",(n,r)=>{if(["@context","id","type","body","target"].includes(n))throw new Exception(`Cannot set ${n} - not allowed`);if(r)this.updateCurrentAnnotation({[n]:r});else{const i=this.currentAnnotation.clone();delete i[n],this.setState({currentAnnotation:i})}});h(this,"onAddContext",n=>{const{currentAnnotation:r}=this.state,o=Array.isArray(r.context)?r.context:[r.context];o.indexOf(n)<0&&(o.push(n),this.updateCurrentAnnotation({"@context":o}))});h(this,"onCancel",()=>this.props.onCancel(this.props.annotation));h(this,"onOk",()=>{const n=o=>o.clone({body:o.bodies.map(({draft:i,...a})=>a)}),{currentAnnotation:r}=this.state;r.bodies.length===0&&!this.props.allowEmpty?r.isSelection?this.onCancel():this.props.onAnnotationDeleted(this.props.annotation):r.isSelection?this.props.onAnnotationCreated(n(r).toAnnotation()):this.props.onAnnotationUpdated(n(r),this.props.annotation)});h(this,"onDelete",()=>this.props.onAnnotationDeleted(this.props.annotation));this.element=g.createRef(),this.state={currentAnnotation:n.annotation,dragged:!1,selectionBounds:kc(n.selectedElement)}}componentWillReceiveProps(n){var i;const{selectionBounds:r}=this.state,o=kc(n.selectedElement);(i=this.props.annotation)!=null&&i.isEqual(n.annotation)?this.setState({selectionBounds:o}):this.setState({currentAnnotation:n.annotation,selectionBounds:o}),this.props.modifiedTarget!=n.modifiedTarget&&this.state.currentAnnotation&&this.updateCurrentAnnotation({target:this.props.modifiedTarget}),r!=o&&this.element.current&&(this.removeObserver&&this.removeObserver(),this.removeObserver=this.initResizeObserver())}componentDidMount(){this.removeObserver=this.initResizeObserver(),new MutationObserver(()=>{this.element.current&&(this.removeObserver&&this.removeObserver(),this.removeObserver=this.initResizeObserver())}).observe(this.element.current,{childList:!0,subtree:!0})}componentWillUnmount(){this.removeObserver&&this.removeObserver()}render(){const{currentAnnotation:n}=this.state,r=this.props.widgets?this.props.widgets.map(pS):fS,o=a=>a.type.disableDelete?a.type.disableDelete(n,{...a.props,readOnly:this.props.readOnly,env:this.props.env}):!1,i=n&&(n.bodies.length>0||this.props.allowEmpty)&&!this.props.readOnly&&!n.isSelection&&!r.some(o);return g.createElement(Md,{disabled:!this.props.detachable,handle:".r6o-draggable",cancel:".r6o-btn, .r6o-btn *",onDrag:()=>this.setState({dragged:!0})},g.createElement("div",{ref:this.element,className:this.state.dragged?"r6o-editor dragged":"r6o-editor"},g.createElement("div",{className:"r6o-arrow"}),g.createElement("div",{className:"r6o-editor-inner"},r.map((a,s)=>g.cloneElement(a,{key:`${s}`,focus:s===0,annotation:n,readOnly:this.props.readOnly,env:this.props.env,onAppendBody:this.onAppendBody,onUpdateBody:this.onUpdateBody,onRemoveBody:this.onRemoveBody,onUpsertBody:this.onUpsertBody,onBatchModify:this.onBatchModify,onSetProperty:this.onSetProperty,onAddContext:this.onAddContext,onSaveAndClose:this.onOk})),this.props.readOnly?g.createElement("div",{className:"r6o-footer"},g.createElement("button",{className:"r6o-btn",onClick:this.onCancel},Se.t("Close"))):g.createElement("div",{className:this.props.detachable?"r6o-footer r6o-draggable":"r6o-footer"},i&&g.createElement("button",{className:"r6o-btn left delete-annotation",title:Se.t("Delete"),onClick:this.onDelete},g.createElement(K1,{width:12})),g.createElement("button",{className:"r6o-btn outline",onClick:this.onCancel},Se.t("Cancel")),g.createElement("button",{className:"r6o-btn ",onClick:this.onOk},Se.t("Ok"))))))}}var Sr,mS=new Uint8Array(16);function vS(){if(!Sr&&(Sr=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Sr))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Sr(mS)}var gS=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function yS(t){return typeof t=="string"&&gS.test(t)}for(var ae=[],gi=0;gi<256;++gi)ae.push((gi+256).toString(16).substr(1));function bS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(ae[t[e+0]]+ae[t[e+1]]+ae[t[e+2]]+ae[t[e+3]]+"-"+ae[t[e+4]]+ae[t[e+5]]+"-"+ae[t[e+6]]+ae[t[e+7]]+"-"+ae[t[e+8]]+ae[t[e+9]]+"-"+ae[t[e+10]]+ae[t[e+11]]+ae[t[e+12]]+ae[t[e+13]]+ae[t[e+14]]+ae[t[e+15]]).toLowerCase();if(!yS(n))throw TypeError("Stringified UUID is invalid");return n}function Fc(t,e,n){t=t||{};var r=t.random||(t.rng||vS)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=r[o];return e}return bS(r)}var SS=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var r,o,i;if(Array.isArray(e)){if(r=e.length,r!=n.length)return!1;for(o=r;o--!==0;)if(!t(e[o],n[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(i=Object.keys(e),r=i.length,r!==Object.keys(n).length)return!1;for(o=r;o--!==0;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;o--!==0;){var a=i[o];if(!t(e[a],n[a]))return!1}return!0}return e!==e&&n!==n},Ic=SS;const Ar=class{constructor(e,n){h(this,"clone",(e,n)=>new Ar({...this.underlying,...e},{...this.opts,...n}));h(this,"selector",e=>{const{target:n}=this.underlying;if(n.selector)return(Array.isArray(n.selector)?n.selector:[n.selector]).find(o=>o.type===e)});this.underlying=e,this.opts=n}isEqual(e){return(e==null?void 0:e.type)!=="Annotation"?!1:this.underlying===e.underlying?!0:!this.underlying.id||!e.underlying.id?!1:Ic(this.underlying,e.underlying)}get readOnly(){var e;return(e=this.opts)==null?void 0:e.readOnly}get id(){return this.underlying.id}get context(){return this.underlying["@context"]}get type(){return this.underlying.type}get motivation(){return this.underlying.motivation}get body(){return this.underlying.body}get target(){return this.underlying.target}get bodies(){return Array.isArray(this.underlying.body)?this.underlying.body:[this.underlying.body]}set bodies(e){this.underlying.body=e}get targets(){return Array.isArray(this.underlying.target)?this.underlying.target:[this.underlying.target]}get quote(){var e;return(e=this.selector("TextQuoteSelector"))==null?void 0:e.exact}get start(){var e;return(e=this.selector("TextPositionSelector"))==null?void 0:e.start}get end(){var e;return(e=this.selector("TextPositionSelector"))==null?void 0:e.end}};let Je=Ar;h(Je,"create",e=>{const n={"@context":"http://www.w3.org/ns/anno.jsonld",type:"Annotation",id:`#${Fc()}`,body:[]};return new Ar({...n,...e})});class sn{constructor(e,n){h(this,"clone",e=>{const n=new sn;return n.underlying=JSON.parse(JSON.stringify(this.underlying)),e&&(n.underlying={...n.underlying,...e}),n});h(this,"selector",e=>{const{target:n}=this.underlying;if(n.selector)return(Array.isArray(n.selector)?n.selector:[n.selector]).find(o=>o.type===e)});h(this,"toAnnotation",()=>{const e=Object.assign({},this.underlying,{type:"Annotation",id:`#${Fc()}`});return new Je(e)});this.underlying={"@context":"http://www.w3.org/ns/anno.jsonld",type:"Selection",body:n||[],target:e}}get context(){return this.underlying["@context"]}get type(){return this.underlying.type}get body(){return this.underlying.body}get target(){return this.underlying.target}get targets(){return Array.isArray(this.underlying.target)?this.underlying.target:[this.underlying.target]}isEqual(e){return e?Ic(this.underlying,e.underlying):!1}get bodies(){return Array.isArray(this.underlying.body)?this.underlying.body:[this.underlying.body]}get quote(){var e;return(e=this.selector("TextQuoteSelector"))==null?void 0:e.exact}get isSelection(){return!0}}let yi=0;var _S=()=>({setServerTime:t=>{const e=Date.now();yi=t-e},getCurrentTimeAdjusted:()=>new Date(Date.now()+yi).toISOString(),toClientTime:t=>Date.parse(t)-yi});const ES=(t,e)=>{if(t){const n=t==="auto"?window.navigator.userLanguage||window.navigator.language:t,r=n.split("-")[0].toLowerCase(),o=[n,r].find(i=>My.includes(i));o||console.warn(`Unsupported locale '${n}'. Falling back to default en.`),Se.init(o,e)}else Se.init(null,e)};class CS{constructor(e,n,r,o,i){h(this,"dragTo",(e,n)=>{this.group.style.display=null,this.opposite=[e,n];const{x:r,y:o,w:i,h:a}=this.bbox;Ea(this.mask,this.env.image,r,o,i,a),Ca(this.rect,r,o,i,a)});h(this,"getBoundingClientRect",()=>this.rect.getBoundingClientRect());h(this,"toSelection",()=>{const{x:e,y:n,w:r,h:o}=this.bbox;return new sn(zr(e,n,r,o,this.env.image,this.config.fragmentUnit))});h(this,"destroy",()=>{this.group.parentNode.removeChild(this.group),this.mask=null,this.rect=null,this.group=null});this.anchor=[e,n],this.opposite=[e,n],this.config=o,this.env=i,this.group=document.createElementNS(B,"g"),this.mask=_a(i.image,e,n,2,2),this.mask.setAttribute("class","a9s-selection-mask"),this.rect=Wr(e,n,2,2),this.rect.setAttribute("class","a9s-selection"),this.group.style.pointerEvents="none",this.group.style.display="none",this.group.appendChild(this.mask),this.group.appendChild(this.rect),r.appendChild(this.group)}get bbox(){const e=this.opposite[0]-this.anchor[0],n=this.opposite[1]-this.anchor[1];return{x:e>0?this.anchor[0]:this.opposite[0],y:n>0?this.anchor[1]:this.opposite[1],w:Math.max(1,Math.abs(e)),h:Math.max(1,Math.abs(n))}}get element(){return this.rect}}const AS={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"},Rc=()=>"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,wS=t=>{let e=null;const n=(o,i)=>new MouseEvent(o,{screenX:i.screenX,screenY:i.screenY,clientX:i.clientX,clientY:i.clientY,pageX:i.pageX,pageY:i.pageY,bubbles:!0}),r=o=>{const i=o.changedTouches[0],a=n(AS[o.type],i);i.target.dispatchEvent(a),o.preventDefault(),(o.type==="touchstart"||o.type==="touchmove")&&(e&&clearTimeout(e),e=setTimeout(()=>{const s=n("dblclick",i);i.target.dispatchEvent(s)},800)),o.type==="touchend"&&e&&clearTimeout(e)};t.addEventListener("touchstart",r,!0),t.addEventListener("touchmove",r,!0),t.addEventListener("touchend",r,!0),t.addEventListener("touchcancel",r,!0)},_r="An implementation is missing",OS=Rc();class Nc extends mn{constructor(n,r,o){super();h(this,"enableResponsive",()=>{window.ResizeObserver&&(this.resizeObserver=new ResizeObserver(()=>{const n=this.svg.getBoundingClientRect(),{width:r,height:o}=this.svg.viewBox.baseVal;this.scale=Math.max(r/n.width,o/n.height),this.onScaleChanged&&this.onScaleChanged(this.scale)}),this.resizeObserver.observe(this.svg.parentNode))});h(this,"getSVGPoint",n=>{const r=this.svg.createSVGPoint();if(OS){const o=this.svg.getBoundingClientRect(),i=n.clientX-o.x,a=n.clientY-o.y,{left:s,top:l}=this.svg.getBoundingClientRect();return r.x=i+s,r.y=a+l,r.matrixTransform(this.g.getScreenCTM().inverse())}else return r.x=n.offsetX,r.y=n.offsetY,r.matrixTransform(this.g.getCTM().inverse())});h(this,"drawHandle",(n,r)=>{const o=document.createElementNS(B,"g");o.setAttribute("class","a9s-handle");const i=document.createElementNS(B,"g"),a=u=>{const f=document.createElementNS(B,"circle");return f.setAttribute("cx",n),f.setAttribute("cy",r),f.setAttribute("r",u),f.setAttribute("transform-origin",`${n} ${r}`),f},s=this.config.handleRadius||6,l=a(s);l.setAttribute("class","a9s-handle-inner");const c=a(s+1);return c.setAttribute("class","a9s-handle-outer"),i.appendChild(c),i.appendChild(l),o.appendChild(i),o});h(this,"setHandleXY",(n,r,o)=>{const i=n.querySelector(".a9s-handle-inner");i.setAttribute("cx",r),i.setAttribute("cy",o),i.setAttribute("transform-origin",`${r} ${o}`);const a=n.querySelector(".a9s-handle-outer");a.setAttribute("cx",r),a.setAttribute("cy",o),a.setAttribute("transform-origin",`${r} ${o}`)});h(this,"getHandleXY",n=>{const r=n.querySelector(".a9s-handle-outer");return{x:parseFloat(r.getAttribute("cx")),y:parseFloat(r.getAttribute("cy"))}});h(this,"scaleHandle",n=>{const r=n.querySelector(".a9s-handle-inner"),o=n.querySelector(".a9s-handle-outer"),i=this.scale*(this.config.handleRadius||6);r.setAttribute("r",i),o.setAttribute("r",i)});this.svg=n.closest("svg"),this.g=n,this.config=r,this.env=o,this.scale=1;const{image:i}=o;(i instanceof Element||i instanceof HTMLDocument)&&this.enableResponsive()}destroy(){this.resizeObserver&&this.resizeObserver.disconnect(),this.resizeObserver=null}}class bi extends Nc{constructor(n,r,o){super(n,r,o);h(this,"attachListeners",({mouseMove:n,mouseUp:r,dblClick:o})=>{n&&(this.mouseMove=i=>{const{x:a,y:s}=this.getSVGPoint(i);this.started||(this.emit("startSelection",{x:a,y:s}),this.started=!0),n(a,s,i)},this.svg.addEventListener("mousemove",this.mouseMove)),r&&(this.mouseUp=i=>{if(i.button!==0)return;const{x:a,y:s}=this.getSVGPoint(i);r(a,s,i)},document.addEventListener("mouseup",this.mouseUp)),o&&(this.dblClick=i=>{const{x:a,y:s}=this.getSVGPoint(i);o(a,s,i)},document.addEventListener("dblclick",this.dblClick))});h(this,"detachListeners",()=>{this.mouseMove&&this.svg.removeEventListener("mousemove",this.mouseMove),this.mouseUp&&document.removeEventListener("mouseup",this.mouseUp),this.dblClick&&document.removeEventListener("dblclick",this.dblClick)});h(this,"start",(n,r)=>{const{x:o,y:i}=this.getSVGPoint(n),{naturalWidth:a,naturalHeight:s}=this.env.image,l=o<0?0:o>a?a:o,c=i<0?0:i>s?s:i;this.startDrawing(l,c,r,n)});h(this,"startDrawing",n=>{throw new Error(_r)});h(this,"createEditableShape",(n,r)=>{throw new Error(_r)});this.started=!1}get isDrawing(){throw new Error(_r)}}bi.supports=t=>{throw new Error(_r)};const Lc="An implementation is missing";class Bc extends Nc{constructor(n,r,o,i){super(r,o,i);h(this,"updateState",n=>{throw new Error(Lc)});this.annotation=n}get element(){throw new Error(Lc)}}const $S=/firefox/i.test(navigator.userAgent),Vc=(t,e,n,r,o)=>{t.setAttribute("width",r),t.setAttribute("height",o),$S?(t.setAttribute("x",0),t.setAttribute("y",0),t.setAttribute("transform",`translate(${e}, ${n})`)):(t.setAttribute("x",e),t.setAttribute("y",n))},xS=(t,e)=>{const{x:n,y:r,width:o,height:i}=e.getBBox(),a=document.createElementNS(B,"svg");a.setAttribute("class","a9s-formatter-el"),Vc(a,n,r,o,i);const s=document.createElementNS(B,"g");s.appendChild(t),a.appendChild(s),e.append(a)},Si=(t,e,n)=>{if(!n)return t;const r=n.reduce((s,l)=>{const c=l(e);if(!c)return s;if(typeof c=="string"||c instanceof String)s.className=s.className?`${s.className} ${c}`:c;else if(c.nodeType===Node.ELEMENT_NODE)s.elements=s.elements?[...s.elements,c]:[c];else{const{className:u,style:f,element:d}=c;u&&(s.className=s.className?`${s.className} ${u}`:u),f&&(s.style=s.style?`${s.style} ${f}`:f),d&&(s.elements=s.elements?[...s.elements,d]:[d])}for(const u in c)c.hasOwnProperty(u)&&u.startsWith("data-")&&(s[u]=c[u]);return s},{}),{className:o,style:i,elements:a}=r;if(o&&gt(t,o),i){const s=t.querySelector(".a9s-outer"),l=t.querySelector(".a9s-inner");s&&l?(s.setAttribute("style","display:none"),l.setAttribute("style",i)):t.setAttribute("style",i)}a&&a.forEach(s=>xS(s,t));for(const s in r)r.hasOwnProperty(s)&&s.startsWith("data-")&&t.setAttribute(s,r[s])},Hc=(t,e,n,r,o)=>{const i=t.querySelector(".a9s-formatter-el");i&&Vc(i,e,n,r,o)},un="corner",Er="edge";class PS extends Bc{constructor(n,r,o,i){super(n,r,o,i);h(this,"onScaleChanged",()=>this.handles.map(this.scaleHandle));h(this,"setSize",(n,r,o,i)=>{Ca(this.rectangle,n,r,o,i),Ea(this.mask,this.env.image,n,r,o,i),Hc(this.elementGroup,n,r,o,i);const[a,s,l,c,u,f,d,p]=this.handles;this.setHandleXY(a,n,r),this.setHandleXY(s,n+o,r),this.setHandleXY(l,n+o,r+i),this.setHandleXY(c,n,r+i),this.enableEdgeControls&&(this.setHandleXY(u,n+o/2,r),this.setHandleXY(f,n+o,r+i/2),this.setHandleXY(d,n+o/2,r+i),this.setHandleXY(p,n,r+i/2))});h(this,"stretchCorners",(n,r,o)=>{const i=this.getHandleXY(r),a=o.x-i.x,s=o.y-i.y,l=a>0?i.x:o.x,c=s>0?i.y:o.y,u=Math.abs(a),f=Math.abs(s);return this.setSize(l,c,u,f),{x:l,y:c,w:u,h:f}});h(this,"stretchEdge",(n,r,o)=>{const i=this.getHandleXY(r),a=Gr(this.rectangle),s=n%2===0,l=s?a.w:o.x-i.x,c=s?o.y-i.y:a.h,u=s?a.x:l>0?i.x:o.x,f=s?c>0?i.y:o.y:a.y,d=Math.abs(l),p=Math.abs(c);return this.setSize(u,f,d,p),{x:u,y:f,w:d,h:p}});h(this,"onGrab",(n,r)=>o=>{if(o.button!==0)return;this.grabbedElem=n,this.grabbedType=r;const i=this.getSVGPoint(o),{x:a,y:s}=Gr(this.rectangle);this.mouseOffset={x:i.x-a,y:i.y-s}});h(this,"onMouseMove",n=>{if(n.button!==0)return;const r=(o,i)=>o<0?0:o>i?i:o;if(this.grabbedElem){const o=this.getSVGPoint(n);if(this.grabbedElem===this.rectangle){const{w:i,h:a}=Gr(this.rectangle),{naturalWidth:s,naturalHeight:l}=this.env.image,c=r(o.x-this.mouseOffset.x,s-i),u=r(o.y-this.mouseOffset.y,l-a);this.setSize(c,u,i,a),this.emit("update",zr(c,u,i,a,this.env.image,this.config.fragmentUnit))}else{const i=this.handles.indexOf(this.grabbedElem),a=this.handles[i^2],{x:s,y:l,w:c,h:u}=this.grabbedType===un?this.stretchCorners(i,a,o):this.stretchEdge(i,a,o);this.emit("update",zr(s,l,c,u,this.env.image,this.config.fragmentUnit))}}});h(this,"onMouseUp",n=>{this.grabbedElem=null,this.grabbedType=null,this.mouseOffset=null});h(this,"updateState",n=>{const{x:r,y:o,w:i,h:a}=vn(n,this.env.image);this.setSize(r,o,i,a)});this.svg.addEventListener("mousemove",this.onMouseMove),this.svg.addEventListener("mouseup",this.onMouseUp);const{x:a,y:s,w:l,h:c}=vn(n,i.image);this.containerGroup=document.createElementNS(B,"g"),this.mask=_a(i.image,a,s,l,c),this.mask.setAttribute("class","a9s-selection-mask"),this.containerGroup.appendChild(this.mask),this.elementGroup=document.createElementNS(B,"g"),this.elementGroup.setAttribute("class","a9s-annotation editable selected"),this.elementGroup.setAttribute("data-id",n.id),this.rectangle=Wr(a,s,l,c),this.rectangle.querySelector(".a9s-inner").addEventListener("mousedown",this.onGrab(this.rectangle)),this.elementGroup.appendChild(this.rectangle),this.enableEdgeControls=o.enableEdgeControls;const u=this.enableEdgeControls?[[a+l/2,s,Er],[a+l,s+c/2,Er],[a+l/2,s+c,Er],[a,s+c/2,Er]]:[];this.handles=[[a,s,un],[a+l,s,un],[a+l,s+c,un],[a,s+c,un],...u].map(f=>{const[d,p,m]=f,b=this.drawHandle(d,p);return b.addEventListener("mousedown",this.onGrab(b,m)),this.elementGroup.appendChild(b),b}),this.containerGroup.appendChild(this.elementGroup),r.appendChild(this.containerGroup),Si(this.rectangle,n,o.formatters),this.grabbedElem=null,this.grabbedType=null,this.mouseOffset=null}get element(){return this.elementGroup}destroy(){this.containerGroup.parentNode.removeChild(this.containerGroup),super.destroy()}}class Cr extends bi{constructor(n,r,o){super(n,r,o);h(this,"startDrawing",(n,r)=>{this.attachListeners({mouseMove:this.onMouseMove,mouseUp:this.onMouseUp}),this.rubberband=new CS(n,r,this.g,this.config,this.env)});h(this,"stop",()=>{this.rubberband&&(this.rubberband.destroy(),this.rubberband=null)});h(this,"onMouseMove",(n,r)=>{const{naturalWidth:o,naturalHeight:i}=this.env.image,a=Math.min(Math.max(n,0),o),s=Math.min(Math.max(r,0),i);this.rubberband.dragTo(a,s)});h(this,"onMouseUp",()=>{this.detachListeners(),this.started=!1;const{width:n,height:r}=this.rubberband.getBoundingClientRect(),o=this.config.minSelectionWidth||4,i=this.config.minSelectionHeight||4;if(n>=o&&r>=i){const{element:a}=this.rubberband;a.annotation=this.rubberband.toSelection(),this.emit("complete",a)}else this.emit("cancel");this.stop()});h(this,"createEditableShape",(n,r)=>new PS(n,this.g,{...this.config,formatters:r},this.env));this.rubberband=null}get isDrawing(){return this.rubberband!=null}}Cr.identifier="rect",Cr.supports=t=>{const e=t.selector("FragmentSelector");return e==null?void 0:e.conformsTo.startsWith("http://www.w3.org/TR/media-frags")};class Uc{constructor(e,n){h(this,"redraw",()=>{this.mask.setAttribute("d",`M0 0 h${this.w} v${this.h} h-${this.w} z M${this.polygon.getAttribute("points")} z`)});h(this,"destroy",()=>this.mask.parentNode.removeChild(this.mask));this.w=e.naturalWidth,this.h=e.naturalHeight,this.polygon=n,this.mask=document.createElementNS(B,"path"),this.mask.setAttribute("fill-rule","evenodd"),this.mask.setAttribute("class","a9s-selection-mask"),this.mask.setAttribute("d",`M0 0 h${this.w} v${this.h} h-${this.w} z M${this.polygon.getAttribute("points")} z`)}get element(){return this.mask}}class DS{constructor(e,n,r){h(this,"setPoints",e=>{const n=e.map(r=>`${r[0]},${r[1]}`).join(" ");this.outer.setAttribute("points",n),this.inner.setAttribute("points",n)});h(this,"getBoundingClientRect",()=>this.outer.getBoundingClientRect());h(this,"dragTo",e=>{this.group.style.display=null,this.mousepos=e;const n=[...this.points,e];this.setPoints(n),this.mask.redraw()});h(this,"addPoint",()=>{const[e,n]=this.mousepos,r=this.points[this.points.length-1];Math.pow(e-r[0],2)+Math.pow(n-r[1],2)>4&&(this.points=[...this.points,this.mousepos],this.setPoints(this.points),this.mask.redraw())});h(this,"destroy",()=>{this.group.parentNode.removeChild(this.group),this.polygon=null,this.group=null});h(this,"toSelection",()=>new sn(Yr(this.group,this.env.image)));this.points=[e],this.env=r,this.mousepos=e,this.group=document.createElementNS(B,"g"),this.polygon=document.createElementNS(B,"g"),this.polygon.setAttribute("class","a9s-selection"),this.outer=document.createElementNS(B,"polygon"),this.outer.setAttribute("class","a9s-outer"),this.inner=document.createElementNS(B,"polygon"),this.inner.setAttribute("class","a9s-inner"),this.setPoints(this.points),this.mask=new Uc(r.image,this.inner),this.polygon.appendChild(this.outer),this.polygon.appendChild(this.inner),this.group.style.display="none",this.group.appendChild(this.mask.element),this.group.appendChild(this.polygon),n.appendChild(this.group)}get element(){return this.polygon}}const _i=t=>{const e=t.querySelector(".a9s-inner").points,n=[];for(let r=0;r<e.numberOfItems;r++)n.push(e.getItem(r));return n},TS=t=>t.querySelector(".a9s-inner").getBBox();class MS extends Bc{constructor(n,r,o,i){super(n,r,o,i);h(this,"onScaleChanged",()=>this.handles.map(this.scaleHandle));h(this,"setPoints",n=>{const r=f=>Math.round(10*f)/10,o=n.map(f=>`${r(f.x)},${r(f.y)}`).join(" ");this.shape.querySelector(".a9s-inner").setAttribute("points",o);const a=this.shape.querySelector(".a9s-outer");a.setAttribute("points",o),this.mask.redraw();const{x:s,y:l,width:c,height:u}=a.getBBox();Hc(this.elementGroup,s,l,c,u)});h(this,"onGrab",n=>r=>{r.button===0&&(this.grabbedElem=n,this.grabbedAt=this.getSVGPoint(r))});h(this,"onMouseMove",n=>{const r=(o,i,a)=>o+i<0?-o:o+i>a?a-o:i;if(this.grabbedElem){const o=this.getSVGPoint(n);if(this.grabbedElem===this.shape){const{x:i,y:a,width:s,height:l}=TS(this.shape),{naturalWidth:c,naturalHeight:u}=this.env.image,f=r(i,o.x-this.grabbedAt.x,c-s),d=r(a,o.y-this.grabbedAt.y,u-l),p=_i(this.shape).map(m=>({x:m.x+f,y:m.y+d}));this.grabbedAt=o,this.setPoints(p),p.forEach((m,b)=>this.setHandleXY(this.handles[b],m.x,m.y)),this.emit("update",Yr(this.shape,this.env.image))}else{const i=this.handles.indexOf(this.grabbedElem),a=_i(this.shape).map((s,l)=>l===i?o:s);this.setPoints(a),this.setHandleXY(this.handles[i],o.x,o.y),this.emit("update",Yr(this.shape,this.env.image))}}});h(this,"onMouseUp",n=>{this.grabbedElem=null,this.grabbedAt=null});h(this,"updateState",n=>{const r=qr(n).getAttribute("points").split(" ").map(o=>{const[i,a]=o.split(",").map(s=>parseFloat(s.trim()));return{x:i,y:a}});this.setPoints(r),r.forEach((o,i)=>this.setHandleXY(this.handles[i],o.x,o.y))});h(this,"destroy",()=>{this.containerGroup.parentNode.removeChild(this.containerGroup),super.destroy()});this.svg.addEventListener("mousemove",this.onMouseMove),this.svg.addEventListener("mouseup",this.onMouseUp),this.containerGroup=document.createElementNS(B,"g"),this.shape=wa(n),this.shape.querySelector(".a9s-inner").addEventListener("mousedown",this.onGrab(this.shape)),this.mask=new Uc(i.image,this.shape.querySelector(".a9s-inner")),this.containerGroup.appendChild(this.mask.element),this.elementGroup=document.createElementNS(B,"g"),this.elementGroup.setAttribute("class","a9s-annotation editable selected"),this.elementGroup.setAttribute("data-id",n.id),this.elementGroup.appendChild(this.shape),this.handles=_i(this.shape).map(a=>{const s=this.drawHandle(a.x,a.y);return s.addEventListener("mousedown",this.onGrab(s)),this.elementGroup.appendChild(s),s}),this.containerGroup.appendChild(this.elementGroup),r.appendChild(this.containerGroup),Si(this.shape,n,o.formatters),this.grabbedElem=null,this.grabbedAt=null}get element(){return this.elementGroup}}class Ei extends bi{constructor(n,r,o){super(n,r,o);h(this,"startDrawing",(n,r,o)=>{this._isDrawing=!0,this._startOnSingleClick=o,this.attachListeners({mouseMove:this.onMouseMove,mouseUp:this.onMouseUp,dblClick:this.onDblClick}),this.rubberband=new DS([n,r],this.g,this.env)});h(this,"stop",()=>{this.detachListeners(),this._isDrawing=!1,this.rubberband&&(this.rubberband.destroy(),this.rubberband=null)});h(this,"onMouseMove",(n,r)=>this.rubberband.dragTo([n,r]));h(this,"onMouseUp",()=>{const{width:n,height:r}=this.rubberband.getBoundingClientRect(),o=this.config.minSelectionWidth||4,i=this.config.minSelectionHeight||4;n>=o||r>=i?this.rubberband.addPoint():this._startOnSingleClick||(this.emit("cancel"),this.stop())});h(this,"onDblClick",()=>{this._isDrawing=!1;const n=this.rubberband.element;n.annotation=this.rubberband.toSelection(),this.emit("complete",n),this.stop()});h(this,"createEditableShape",(n,r)=>new MS(n,this.g,{...this.config,formatters:r},this.env));this._isDrawing=!1,this._startOnSingleClick=!1}get isDrawing(){return this._isDrawing}}Ei.identifier="polygon",Ei.supports=t=>{var n;const e=t.selector("SvgSelector");if(e)return(n=e.value)==null?void 0:n.match(/^<svg.*<polygon/g)};class kS extends mn{constructor(n,r,o){super();h(this,"listTools",()=>this._registered.map(n=>n.identifier));h(this,"registerTool",n=>{const r=n.identifier;this.listTools().includes(r)&&this.unregisterTool(r),this._registered.unshift(n)});h(this,"unregisterTool",n=>this._registered=this._registered.filter(r=>r.identifier!==n));h(this,"setCurrent",n=>{this._current&&this._current.destroy();const r=typeof n=="string"||n instanceof String?this._registered.find(o=>o.identifier===n):n;this._current=new r(this._g,this._config,this._env),this._current.on("startSelection",o=>this.emit("startSelection",o)),this._current.on("complete",o=>this.emit("complete",o)),this._current.on("cancel",o=>this.emit("cancel",o))});h(this,"forAnnotation",n=>{var s;const[r,...o]=n.targets,i=(s=r.renderedVia)==null?void 0:s.name,a=i?this._registered.find(l=>l.identifier===i):this._registered.find(l=>l.supports(n));return a?new a(this._g,this._config,this._env):null});this._g=n,this._config=r,this._env=o,this._registered=[Cr,Ei],this.setCurrent(Cr)}get current(){return this._current}}class FS{constructor(e,n,r){this.svg=e.closest("svg"),this.g=document.createElementNS(B,"g"),this.g.setAttribute("class","a9s-crosshair");const o=document.createElementNS(B,"line"),i=document.createElementNS(B,"line");this.g.appendChild(o),this.g.appendChild(i),e.appendChild(this.g);const a=s=>{const l=this.svg.getBoundingClientRect(),c=s.clientX-l.x,u=s.clientY-l.y,f=this.svg.createSVGPoint(),{left:d,top:p}=this.svg.getBoundingClientRect();return f.x=c+d,f.y=u+p,f.matrixTransform(e.getScreenCTM().inverse())};this.svg.parentElement.addEventListener("pointermove",s=>{const{x:l,y:c}=a(s);o.setAttribute("x1",0),o.setAttribute("y1",c),o.setAttribute("x2",n),o.setAttribute("y2",c),i.setAttribute("x1",l),i.setAttribute("y1",0),i.setAttribute("x2",l),i.setAttribute("y2",r)})}}const jc=(t,e)=>{const r=(Sa(e,".a9s-annotation")?e:e.closest(".a9s-annotation")).querySelector(".a9s-outer"),o=t.naturalWidth/t.width,i=t.naturalHeight/t.height,a=t.getBoundingClientRect(),s=r.getBoundingClientRect(),l=s.x-a.x,c=s.y-a.y,{width:u,height:f}=s,d=document.createElement("CANVAS"),p=d.getContext("2d");return d.width=u*o,d.height=f*i,p.drawImage(t,l*o,c*i,u*o,f*i,0,0,u*o,f*i),{snippet:d,transform:m=>{const b=l*o+m[0],v=c*i+m[1];return[b,v]}}},zc=Rc();class IS extends mn{constructor(n){super();h(this,"_attachMouseListeners",(n,r)=>{n.addEventListener("mouseenter",()=>{var o,i;(i=(o=this.tools)==null?void 0:o.current)!=null&&i.isDrawing||(this.currentHover!==n&&this.emit("mouseEnterAnnotation",r,n),this.currentHover=n)}),n.addEventListener("mouseleave",()=>{var o,i;(i=(o=this.tools)==null?void 0:o.current)!=null&&i.isDrawing||(this.emit("mouseLeaveAnnotation",r,n),this.currentHover=null)}),zc&&(n.addEventListener("touchstart",o=>{o.stopPropagation(),this.currentHover=n}),n.addEventListener("touchend",o=>{const{clientX:i,clientY:a}=o.changedTouches[0],s=document.elementFromPoint(i,a);o.stopPropagation(),n.contains(s)&&(this.currentHover=n,this.selectCurrentHover())}))});h(this,"_lazy",n=>{this.imageEl.naturalWidth?n():this.imageEl.addEventListener("load",()=>n())});h(this,"_onMouseDown",n=>{var r,o;n.button===0&&(this.readOnly||this.selectedShape||this.tools.current.isDrawing?!((o=(r=this.tools)==null?void 0:r.current)!=null&&o.isDrawing)&&this.selectedShape!==this.currentHover&&this.selectCurrentHover():this.tools.current.start(n,this.drawOnSingleClick&&!this.currentHover))});h(this,"_refreshNonScalingAnnotations",()=>{const n=this.getCurrentScale();n!==1/0&&Array.from(this.svg.querySelectorAll(".a9s-non-scaling")).forEach(r=>{r.setAttribute("transform",`scale(${n})`)})});h(this,"_scaleFormatterElements",n=>{const r=this.getCurrentScale();if(r!==1/0)if(n){const o=n.querySelector(".a9s-formatter-el");o&&o.firstChild.setAttribute("transform",`scale(${r})`)}else Array.from(this.g.querySelectorAll(".a9s-formatter-el")).forEach(i=>i.firstChild.setAttribute("transform",`scale(${r})`))});h(this,"addAnnotation",n=>{const r=Mf(n,this.imageEl);return gt(r,"a9s-annotation"),r.setAttribute("data-id",n.id),r.annotation=n,this._attachMouseListeners(r,n),this.g.appendChild(r),Si(r,n,this.formatters),this._scaleFormatterElements(r),r});h(this,"addDrawingTool",n=>{var r;return(r=this.tools)==null?void 0:r.registerTool(n)});h(this,"addOrUpdateAnnotation",(n,r)=>{this.selectedShape&&(this.selectedShape.annotation.isEqual(n)||this.selectedShape.annotation.isEqual(r))&&(this.deselect(),this.emit("select",{})),r&&this.removeAnnotation(r),this.removeAnnotation(n);const o=this.addAnnotation(n);Sa(o,"a9s-non-scaling")&&o.setAttribute("transform",`scale(${this.getCurrentScale()})`),this.redraw()});h(this,"deselect",n=>{var r;if(this.selectedShape){(r=this.tools)==null||r.current.stop();const{annotation:o}=this.selectedShape;this.selectedShape.destroy?(this.selectedShape.destroy(),this.selectedShape=null,o.isSelection||(this.addAnnotation(o),n||this.redraw())):(gf(this.selectedShape,"selected"),this.selectedShape=null)}});h(this,"destroy",()=>{this.deselect(),this.currentHover=null,this.svg.parentNode.removeChild(this.svg)});h(this,"findShape",n=>{const r=n!=null&&n.id?n.id:n;return this.g.querySelector(`.a9s-annotation[data-id="${r}"]`)});h(this,"getAnnotations",()=>Array.from(this.g.querySelectorAll(".a9s-annotation")).map(r=>r.annotation));h(this,"getCurrentScale",()=>{const n=this.svg.getBoundingClientRect(),{width:r,height:o}=this.svg.viewBox.baseVal;return Math.max(r/n.width,o/n.height)});h(this,"getSelectedImageSnippet",()=>{if(this.selectedShape){const n=this.selectedShape.element||this.selectedShape;return jc(this.imageEl,n)}});h(this,"init",n=>{this.deselect(),this.currentHover=null,Array.from(this.g.querySelectorAll(".a9s-annotation")).forEach(o=>this.g.removeChild(o)),this._lazy(()=>{n.sort((o,i)=>Sn(i,this.imageEl)-Sn(o,this.imageEl)),n.forEach(this.addAnnotation)}),this._refreshNonScalingAnnotations()});h(this,"listDrawingTools",()=>{var n;return(n=this.tools)==null?void 0:n.listTools()});h(this,"overrideId",(n,r)=>{const o=this.findShape(n);o.setAttribute("data-id",r);const{annotation:i}=o,a=i.clone({id:r});return o.annotation=a,a});h(this,"redraw",()=>{const n=Array.from(this.g.querySelectorAll(".a9s-annotation:not(.selected)")),r=n.map(o=>o.annotation);r.sort((o,i)=>Sn(i,this.imageEl)-Sn(o,this.imageEl)),n.forEach(o=>this.g.removeChild(o)),r.forEach(this.addAnnotation)});h(this,"removeAnnotation",n=>{var i,a,s;const r=n.type?n.id:n;((i=this.selectedShape)==null?void 0:i.annotation.id)===r&&this.deselect();const o=this.findShape(n);o&&(((a=this.selectedShape)==null?void 0:a.annotation)===o.annotation&&this.deselect(),((s=this.currentHover)==null?void 0:s.annotation)===o.annotation&&(this.currentHover=null),o.parentNode.removeChild(o))});h(this,"removeDrawingTool",n=>{var r;return(r=this.tools)==null?void 0:r.unregisterTool(n)});h(this,"selectAnnotation",(n,r)=>{this.selectedShape&&this.deselect();const o=this.findShape(n);if(o){this.selectShape(o,r);const i=this.selectedShape.element?this.selectedShape.element:this.selectedShape;return{annotation:o.annotation,element:i}}else this.deselect()});h(this,"selectCurrentHover",()=>{this.currentHover?this.disableSelect?this.emit("clickAnnotation",this.currentHover.annotation,this.currentHover):this.selectShape(this.currentHover):(this.deselect(),this.emit("select",{skipEvent:!0}))});h(this,"selectShape",(n,r)=>{var a;if(!r&&!n.annotation.isSelection&&this.emit("clickAnnotation",n.annotation,n),((a=this.selectedShape)==null?void 0:a.annotation)===n.annotation)return;this.selectedShape&&this.selectedShape.annotation!==n.annotation&&this.deselect(!0);const{annotation:o}=n;if(this.readOnly||o.readOnly)gt(n,"selected"),this.selectedShape=n,r||this.emit("select",{annotation:o,element:n,skipEvent:r});else{const s=this.tools.forAnnotation(o);s?(n.parentNode.removeChild(n),this.selectedShape=s.createEditableShape(o,this.formatters),this.selectedShape.element.annotation=o,this._scaleFormatterElements(this.selectedShape.element),this.selectedShape.on("update",l=>{this.selectedShape&&this.emit("updateTarget",this.selectedShape.element,l)}),setTimeout(()=>{var l;this.selectedShape!=null&&this._attachMouseListeners(this.selectedShape.element,o),r||(this.currentHover=(l=this.selectedShape)==null?void 0:l.element)},1)):this.selectedShape=n,r||this.emit("select",{annotation:o,element:this.selectedShape.element||this.selectedShape})}});h(this,"setDrawingTool",n=>{var r;this.tools&&((r=this.tools.current)==null||r.stop(),this.tools.setCurrent(n))});h(this,"setVisible",n=>{n?this.svg.style.display=null:(this.deselect(),this.svg.style.display="none")});h(this,"stopDrawing",()=>{var n,r;(r=(n=this.tools)==null?void 0:n.current)==null||r.stop()});const{wrapperEl:r,config:o,env:i}=n;this.imageEl=i.image,this.readOnly=o.readOnly,o.formatter?this.formatters=[o.formatter]:o.formatters&&(this.formatters=Array.isArray(o.formatters)?o.formatters:[o.formatters]),this.disableSelect=o.disableSelect,this.drawOnSingleClick=o.drawOnSingleClick,this.svg=document.createElementNS(B,"svg"),this.svg.setAttribute("tabindex",0),zc?(this.svg.setAttribute("class","a9s-annotationlayer touch"),wS(this.svg),this.svg.addEventListener("touchstart",()=>{this.currentHover=null,this.selectCurrentHover()})):this.svg.setAttribute("class","a9s-annotationlayer");const{naturalWidth:a,naturalHeight:s}=this.imageEl;if(!a&&!s){const{width:l,height:c}=this.imageEl;this.svg.setAttribute("viewBox",`0 0 ${l} ${c}`),this.imageEl.nodeName.toLowerCase()!=="img"&&(this.imageEl.naturalWidth=l,this.imageEl.naturalHeight=c),this.imageEl.addEventListener("load",()=>{this.emit("load",this.imageEl.src),this.svg.setAttribute("viewBox",`0 0 ${this.imageEl.naturalWidth} ${this.imageEl.naturalHeight}`)})}else this.svg.setAttribute("viewBox",`0 0 ${a} ${s}`);this.g=document.createElementNS(B,"g"),this.svg.appendChild(this.g),r.appendChild(this.svg),o.crosshair&&(this.crosshair=new FS(this.g,a,s),gt(this.svg,"no-cursor")),this.selectedShape=null,this.tools=new kS(this.g,o,i),this.tools.on("startSelection",l=>this.emit("startSelection",l)),this.tools.on("cancel",this.selectCurrentHover),this.tools.on("complete",this.selectShape),this.svg.addEventListener("mousedown",this._onMouseDown),this.currentHover=null,window.ResizeObserver&&(this.resizeObserver=new ResizeObserver(()=>{this._refreshNonScalingAnnotations(),this._scaleFormatterElements()}),this.resizeObserver.observe(this.svg.parentNode))}}var ZE="",RS=0;function Wc(t,e,n,r,o){var i,a,s={};for(a in e)a=="ref"?i=e[a]:s[a]=e[a];var l={type:t,props:s,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--RS,__source:r,__self:o};if(typeof t=="function"&&(i=t.defaultProps))for(a in i)s[a]===void 0&&(s[a]=i[a]);return $.vnode&&$.vnode(l),l}class NS extends J{constructor(n){super(n);h(this,"clearState",n=>this.setState({selectedAnnotation:null,selectedDOMElement:null,modifiedTarget:null,beforeHeadlessModify:null},n));h(this,"forwardEvent",(n,r)=>{this.annotationLayer.on(n,(o,i)=>{this.props[r](o.clone(),i)})});h(this,"onKeyUp",n=>{if(n.which===27){this.annotationLayer.stopDrawing();const{selectedAnnotation:r}=this.state;r&&(this.cancelSelected(),this.props.onCancelSelected(r))}else if(n.which===46){const{disableDeleteKey:r}=this.props.config;if(!r){const{selectedAnnotation:o}=this.state;o&&(o.isSelection?this.onCancelAnnotation(o):this.onDeleteAnnotation(o))}}});h(this,"handleStartSelect",n=>this.props.onSelectionStarted(n));h(this,"handleSelect",(n,r)=>{this.state.editorDisabled?this.onHeadlessSelect(n,r):this.onNormalSelect(n,r)});h(this,"onNormalSelect",(n,r)=>{const{annotation:o,element:i}=n;if(o){const a=l=>{this.setState({selectedAnnotation:o,selectedDOMElement:i,modifiedTarget:null,beforeHeadlessModify:null},()=>{r||(o.isSelection?this.props.onSelectionCreated(o.clone()):this.props.onAnnotationSelected(o.clone(),i)),l&&l()})},{selectedAnnotation:s}=this.state;s&&!s.isEqual(o)?this.clearState(()=>{this.props.onCancelSelected(s.clone()),a(()=>this.props.onChangeSelected(o.clone(),s.clone()))}):a()}else{const{selectedAnnotation:a}=this.state;a?this.clearState(()=>{this.props.onCancelSelected(a)}):this.clearState()}});h(this,"onHeadlessSelect",(n,r)=>{this.saveSelected().then(()=>{this.onNormalSelect(n,r);const{annotation:o}=n;if(o&&!o.isSelection){const i=this.annotationLayer.selectAnnotation(n.annotation,!0);this.setState({selectedDOMElement:i.element})}})});h(this,"handleUpdateTarget",(n,r)=>{this.setState({selectedDOMElement:n,modifiedTarget:r});const o=JSON.parse(JSON.stringify(r));this.props.onSelectionTargetChanged(o)});h(this,"overrideAnnotationId",n=>r=>{const{id:o}=n;this.state.selectedAnnotation?this.clearState(()=>{this.annotationLayer.overrideId(o,r)}):this.annotationLayer.overrideId(o,r)});h(this,"onCreateOrUpdateAnnotation",(n,r)=>(o,i)=>{let a=o.isSelection?o.toAnnotation():o;a=this.state.modifiedTarget?a.clone({target:this.state.modifiedTarget}):a.clone(),this.clearState(()=>{this.annotationLayer.deselect(),this.annotationLayer.addOrUpdateAnnotation(a,i),i?this.props[n](a,i.clone()):this.props[n](a,this.overrideAnnotationId(a)),r&&r()})});h(this,"onDeleteAnnotation",n=>{this.clearState(),this.annotationLayer.removeAnnotation(n),this.props.onAnnotationDeleted(n)});h(this,"onCancelAnnotation",(n,r)=>{this.annotationLayer.deselect(),this.props.onCancelSelected(n),this.clearState(r)});h(this,"addAnnotation",n=>this.annotationLayer.addOrUpdateAnnotation(n.clone()));h(this,"addDrawingTool",n=>this.annotationLayer.addDrawingTool(n));h(this,"cancelSelected",()=>new Promise(n=>{this.annotationLayer.deselect(),this.state.selectedAnnotation?this.clearState(n):n()}));h(this,"getAnnotationById",n=>{var r;return(r=this.annotationLayer.findShape(n))==null?void 0:r.annotation});h(this,"getAnnotations",()=>this.annotationLayer.getAnnotations().map(n=>n.clone()));h(this,"getImageSnippetById",n=>{const r=this.annotationLayer.findShape(n);if(r)return jc(this.props.env.image,r)});h(this,"getSelected",()=>{var n;if(this.state.selectedAnnotation)return this.state.editorDisabled?this.state.selectedAnnotation:(n=this._editor.current)==null?void 0:n.getCurrentAnnotation()});h(this,"getSelectedImageSnippet",()=>this.annotationLayer.getSelectedImageSnippet());h(this,"listDrawingTools",()=>this.annotationLayer.listDrawingTools());h(this,"removeAnnotation",n=>{this.annotationLayer.removeAnnotation(n),this.state.selectedAnnotation&&this.setState({selectedAnnotation:null})});h(this,"removeDrawingTool",n=>this.annotationLayer.removeDrawingTool(n));h(this,"saveSelected",()=>new Promise(n=>{const r=this.state.selectedAnnotation;if(r)if(this._editor.current)this._editor.current.onOk(),n();else if(r.isSelection)r.bodies.length>0||this.props.config.allowEmpty?this.onCreateOrUpdateAnnotation("onAnnotationCreated",n)(r):(this.annotationLayer.deselect(),n());else{const{beforeHeadlessModify:o,modifiedTarget:i}=this.state;o?this.onCreateOrUpdateAnnotation("onAnnotationUpdated",n)(r,o):i?this.onCreateOrUpdateAnnotation("onAnnotationUpdated",n)(r,r):this.onCancelAnnotation(r,n)}else n()}));h(this,"selectAnnotation",n=>{const r=this.annotationLayer.selectAnnotation(n,!0);if(r)return this.handleSelect(r,!0),r.annotation.clone();this.clearState()});h(this,"setAnnotations",n=>this.annotationLayer.init(n.map(r=>r.clone())));h(this,"setDrawingTool",n=>this.annotationLayer.setDrawingTool(n));h(this,"setVisible",n=>{this.annotationLayer.setVisible(n),n||this.clearState()});h(this,"updateSelected",(n,r)=>new Promise(o=>{this.state.selectedAnnotation&&(r?this.state.selectedAnnotation.isSelection?this.onCreateOrUpdateAnnotation("onAnnotationCreated",o)(n):this.onCreateOrUpdateAnnotation("onAnnotationUpdated",o)(n,this.state.selectedAnnotation):this.setState({selectedAnnotation:n,beforeHeadlessModify:this.state.beforeHeadlessModify||this.state.selectedAnnotation},o))}));this.state={selectedAnnotation:null,selectedDOMElement:null,modifiedTarget:null,readOnly:this.props.config.readOnly,editorDisabled:this.props.config.disableEditor,widgets:this.props.config.widgets,beforeHeadlessModify:null},this._editor=g.createRef()}componentDidMount(){this.annotationLayer=new IS(this.props),this.annotationLayer.on("load",this.props.onLoad),this.annotationLayer.on("startSelection",this.handleStartSelect),this.annotationLayer.on("select",this.handleSelect),this.annotationLayer.on("updateTarget",this.handleUpdateTarget),this.forwardEvent("clickAnnotation","onClickAnnotation"),this.forwardEvent("mouseEnterAnnotation","onMouseEnterAnnotation"),this.forwardEvent("mouseLeaveAnnotation","onMouseLeaveAnnotation"),document.addEventListener("keyup",this.onKeyUp)}componentWillUnmount(){this.annotationLayer.destroy(),document.removeEventListener("keyup",this.onKeyUp)}get disableEditor(){return this.state.editorDisabled}set disableEditor(n){this.setState({editorDisabled:n})}get disableSelect(){return this.annotationLayer.disableSelect}set disableSelect(n){this.annotationLayer.disableSelect=n}get formatters(){return this.annotationLayer.formatters}set formatters(n){this.annotationLayer.formatters=n,this.annotationLayer.redraw()}get readOnly(){return this.state.readOnly}set readOnly(n){this.annotationLayer.readOnly=n,this.setState({readOnly:n})}get widgets(){return this.state.widgets}set widgets(n){this.setState({widgets:n})}render(){var o;const n=this.state.selectedAnnotation&&!this.state.editorDisabled,r=this.state.readOnly||((o=this.state.selectedAnnotation)==null?void 0:o.readOnly);return n&&Wc(hS,{ref:this._editor,detachable:!0,wrapperEl:this.props.wrapperEl,annotation:this.state.selectedAnnotation,modifiedTarget:this.state.modifiedTarget,selectedElement:this.state.selectedDOMElement,readOnly:r,allowEmpty:this.props.config.allowEmpty,widgets:this.state.widgets,env:this.props.env,onAnnotationCreated:this.onCreateOrUpdateAnnotation("onAnnotationCreated"),onAnnotationUpdated:this.onCreateOrUpdateAnnotation("onAnnotationUpdated"),onAnnotationDeleted:this.onDeleteAnnotation,onCancel:this.onCancelAnnotation})}}var QE="";class Gc{constructor(e){h(this,"handleAnnotationCreated",(e,n)=>this._emitter.emit("createAnnotation",e.underlying,n));h(this,"handleAnnotationDeleted",e=>this._emitter.emit("deleteAnnotation",e.underlying));h(this,"handleAnnotationSelected",(e,n)=>this._emitter.emit("selectAnnotation",e.underlying,n));h(this,"handleAnnotationUpdated",(e,n)=>this._emitter.emit("updateAnnotation",e.underlying,n.underlying));h(this,"handleCancelSelected",e=>this._emitter.emit("cancelSelected",e.underlying));h(this,"handleChangeSelected",(e,n)=>this._emitter.emit("changeSelected",e.underlying,n.underlying));h(this,"handleClickAnnotation",(e,n)=>this._emitter.emit("clickAnnotation",e.underlying,n));h(this,"handleLoad",e=>this._emitter.emit("load",e));h(this,"handleSelectionCreated",e=>this._emitter.emit("createSelection",e.underlying));h(this,"handleSelectionStarted",e=>this._emitter.emit("startSelection",e));h(this,"handleSelectionTargetChanged",e=>this._emitter.emit("changeSelectionTarget",e));h(this,"handleMouseEnterAnnotation",(e,n)=>this._emitter.emit("mouseEnterAnnotation",e.underlying,n));h(this,"handleMouseLeaveAnnotation",(e,n)=>this._emitter.emit("mouseLeaveAnnotation",e.underlying,n));h(this,"_wrap",e=>(e==null?void 0:e.type)==="Annotation"?new Je(e):e);h(this,"addAnnotation",(e,n)=>this._app.current.addAnnotation(new Je(e,{readOnly:n})));h(this,"addDrawingTool",e=>this._app.current.addDrawingTool(e));h(this,"cancelSelected",()=>this._app.current.cancelSelected());h(this,"clearAnnotations",()=>this.setAnnotations([]));h(this,"clearAuthInfo",()=>this._env.user=null);h(this,"destroy",()=>{g.unmountComponentAtNode(this._appContainerEl),this._element.parentNode.insertBefore(this._env.image,this._element),this._element.parentNode.removeChild(this._element)});h(this,"getAnnotationById",e=>{const n=this._app.current.getAnnotationById(e);return n==null?void 0:n.underlying});h(this,"getAnnotations",()=>this._app.current.getAnnotations().map(n=>n.underlying));h(this,"getImageSnippetById",e=>this._app.current.getImageSnippetById(e));h(this,"getSelected",()=>{const e=this._app.current.getSelected();return e==null?void 0:e.underlying});h(this,"getSelectedImageSnippet",()=>this._app.current.getSelectedImageSnippet());h(this,"listDrawingTools",()=>this._app.current.listDrawingTools());h(this,"loadAnnotations",e=>fetch(e).then(n=>n.json()).then(n=>(this.setAnnotations(n),n)));h(this,"off",(e,n)=>this._emitter.off(e,n));h(this,"on",(e,n)=>this._emitter.on(e,n));h(this,"once",(e,n)=>this._emitter.once(e,n));h(this,"removeAnnotation",e=>this._app.current.removeAnnotation(this._wrap(e)));h(this,"removeDrawingTool",e=>this._app.current.removeDrawingTool(e));h(this,"saveSelected",()=>this._app.current.saveSelected());h(this,"selectAnnotation",e=>{const n=this._app.current.selectAnnotation(this._wrap(e));return n==null?void 0:n.underlying});h(this,"setAnnotations",e=>{const r=(e||[]).map(o=>new Je(o));this._app.current.setAnnotations(r)});h(this,"setAuthInfo",e=>this._env.user=e);h(this,"setDrawingTool",e=>this._app.current.setDrawingTool(e));h(this,"setServerTime",e=>this._env.setServerTime(e));h(this,"setVisible",e=>this._app.current.setVisible(e));h(this,"updateSelected",(e,n)=>{let r=null;e.type==="Annotation"?r=new Je(e):e.type==="Selection"&&(r=new sn(e.target,e.body)),r&&this._app.current.updateSelected(r,n)});this._app=g.createRef(),this._emitter=new mn,e.disableEditor=e.disableEditor||e.headless;const n=e.image.nodeType?e.image:document.getElementById(e.image);n.style.display="block",this._env=_S(),this._env.image=n,ES(e.locale,e.messages),this._element=document.createElement("DIV"),this._element.style.position="relative",this._element.style.display="inline-block",n.parentNode.insertBefore(this._element,n),this._element.appendChild(n),this._appContainerEl=document.createElement("DIV"),this._element.appendChild(this._appContainerEl),g.render(Wc(NS,{ref:this._app,env:this._env,wrapperEl:this._element,config:e,onSelectionStarted:this.handleSelectionStarted,onSelectionCreated:this.handleSelectionCreated,onSelectionTargetChanged:this.handleSelectionTargetChanged,onAnnotationCreated:this.handleAnnotationCreated,onAnnotationSelected:this.handleAnnotationSelected,onAnnotationUpdated:this.handleAnnotationUpdated,onAnnotationDeleted:this.handleAnnotationDeleted,onCancelSelected:this.handleCancelSelected,onChangeSelected:this.handleChangeSelected,onClickAnnotation:this.handleClickAnnotation,onLoad:this.handleLoad,onMouseEnterAnnotation:this.handleMouseEnterAnnotation,onMouseLeaveAnnotation:this.handleMouseLeaveAnnotation}),this._appContainerEl)}get disableEditor(){return this._app.current.disableEditor}set disableEditor(e){this._app.current.disableEditor=e}get disableSelect(){return this._app.current.disableSelect}set disableSelect(e){this._app.current.disableSelect=e}get formatters(){return this._app.current.formatters||[]}set formatters(e){if(e){const n=Array.isArray(e)?e:[e];this._app.current.formatters=n}else this._app.current.formatters=null}get readOnly(){return this._app.current.readOnly}set readOnly(e){this._app.current.readOnly=e}get widgets(){return this._app.current.widgets}set widgets(e){this._app.current.widgets=e}}const LS=t=>new Gc(t);me.Annotorious=Gc,me.init=LS,Object.defineProperty(me,"__esModule",{value:!0}),me[Symbol.toStringTag]="Module"});
//# sourceMappingURL=annotorious.umd.js.map

!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Annotorious=e():(n.Annotorious=n.Annotorious||{},n.Annotorious.Toolbar=e())}(self,(()=>(()=>{"use strict";var n={536:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,c){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&a[u[0]]||(void 0!==c&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=c),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},95:n=>{n.exports=function(n){return n[1]}},450:(n,e,t)=>{t.d(e,{A:()=>i});var r=t(95),o=t.n(r),c=t(536),a=t.n(c)()(o());a.push([n.id,".a9s-toolbar-btn {\n  margin:4px 4px 4px 0;\n  outline:0;\n  border:none;\n  cursor:pointer;\n  background-color:transparent;\n  border-radius:4px;\n  padding:8px;\n  width:45px;\n  height:45px;\n}\n\n.a9s-toolbar-btn:hover {\n  background-color:rgba(0,0,0,0.05);\n}\n\n.a9s-toolbar-btn-inner {\n  display:flex;\n  align-items: center;\n}\n\n.a9s-toolbar-btn svg {\n  overflow:visible;\n  width:100%;\n  height:100%;\n}\n\n.a9s-toolbar-btn svg * {\n  stroke-width:5px;\n  fill:none;\n  stroke:rgba(0,0,0,0.5);\n}\n\n.a9s-toolbar-btn g.handles circle {\n  stroke-width:4px;\n  fill:#fff;\n  stroke:#000;\n}\n\n.a9s-toolbar-btn.mouse path{\n  fill:#000;\n}\n\n.a9s-toolbar-btn.active {\n  background-color:rgba(0,0,0,0.3);\n}\n\n.a9s-toolbar-btn.active svg * {\n  stroke:rgba(255,255,255,0.6);\n}\n\n.a9s-toolbar-btn.active.mouse path{\n  fill: rgba(255,255,255,0.6);\n}\n\n.a9s-toolbar-btn.active g.handles circle {\n  stroke:#fff;\n  fill:rgba(0,0,0,0.2);\n}\n",""]);const i=a},591:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var c={},a=[],i=0;i<n.length;i++){var s=n[i],l=r.base?s[0]+r.base:s[0],u=c[l]||0,d="".concat(l," ").concat(u);c[l]=u+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var g=o(f,r);r.byIndex=i,e.splice(i,0,{identifier:d,updater:g,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var c=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<c.length;a++){var i=t(c[a]);e[i].references--}for(var s=r(n,o),l=0;l<c.length;l++){var u=t(c[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}c=s}}},128:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},51:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},855:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},740:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},656:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var c=e[r]={id:r,exports:{}};return n[r](c,c.exports,t),c.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r={};return(()=>{t.d(r,{default:()=>m});var n=t(591),e=t.n(n),o=t(740),c=t.n(o),a=t(128),i=t.n(a),s=t(855),l=t.n(s),u=t(51),d=t.n(u),p=t(656),f=t.n(p),g=t(450),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=i().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=d(),e()(g.A,v),g.A&&g.A.locals&&g.A.locals;var b,h={mouse:(b=document.createElementNS("http://www.w3.org/2000/svg","svg"),b.setAttribute("viewBox","0 0 320 540"),b.setAttribute("style","width: 29px; height: 20px;"),b.innerHTML='<g>\n\t\t<path d="M0 55.2V426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320H297.9c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z"/>\n\t </g>',b),rect:function(){var n=document.createElementNS("http://www.w3.org/2000/svg","svg");return n.setAttribute("viewBox","0 0 70 50"),n.innerHTML='\n    <g>\n      <rect x="12" y="10" width="46" height="30" />\n      <g class="handles">\n        <circle cx="12"  cy="10"  r="5" />\n        <circle cx="58" cy="10"  r="5" />\n        <circle cx="12"  cy="40" r="5" />\n        <circle cx="58" cy="40" r="5" />\n      </g>\n    </g>\n  ',n}(),polygon:function(){var n=document.createElementNS("http://www.w3.org/2000/svg","svg");return n.setAttribute("viewBox","0 0 70 50"),n.innerHTML='\n    <g>\n      <path d=\'M 5,14 60,5 55,45 18,38 Z\' />\n      <g class="handles">\n        <circle cx="5"  cy="14"  r="5" />\n        <circle cx="60" cy="5"  r="5" />\n        <circle cx="55"  cy="45" r="5" />\n        <circle cx="18" cy="38" r="5" />\n      </g>\n    </g>\n  ',n}(),circle:function(){var n=document.createElementNS("http://www.w3.org/2000/svg","svg");return n.setAttribute("viewBox","0 0 70 50"),n.innerHTML='\n    <g>\n      <circle cx="35" cy="25" r="23" />\n      <g class="handles">\n        <circle cx="35" cy="2"  r="5" />\n        <circle cx="12" cy="25" r="5" />\n        <circle cx="58" cy="25" r="5" />\n        <circle cx="35" cy="48" r="5" />\n      </g>\n    </g>\n  ',n}(),ellipse:function(){var n=document.createElementNS("http://www.w3.org/2000/svg","svg");return n.setAttribute("viewBox","0 0 70 50"),n.innerHTML='\n    <g>\n      <ellipse cx="35" cy="25" rx="30" ry="19" />\n      <g class="handles">\n        <circle cx="35" cy="6"  r="5" />\n        <circle cx="5" cy="25" r="5" />\n        <circle cx="65" cy="25" r="5" />\n        <circle cx="35" cy="44" r="5" />\n      </g>\n    </g>\n  ',n}(),freehand:function(){var n=document.createElementNS("http://www.w3.org/2000/svg","svg");return n.setAttribute("viewBox","0 0 70 50"),n.innerHTML='\n    <g>\n      <path d="m 34.427966,2.7542372 c 0,0 -22.245763,20.7627118 -16.737288,27.7542378 5.508475,6.991525 27.648305,-15.36017 34.639831,-9.11017 6.991525,6.25 -11.440678,13.665255 -13.983051,25.423729" />\n      <g class="handles">\n        <circle cx="34.427966" cy="2.7542372"  r="5" />\n        <circle cx="38.347458" cy="46.822033" r="5" />\n      </g>\n    </g>\n  ',n}(),point:function(){var n=document.createElementNS("http://www.w3.org/2000/svg","svg");return n.setAttribute("viewBox","0 0 70 50"),n.innerHTML='\n    <g>\n      <circle cx="36" cy="24" r="11" />\n      <g class="handles"><circle cx="36" cy="24" r="4" /></g>\n      <line x1="36" y1="3" x2="36" y2="13" />\n      <line x1="36" y1="35" x2="36" y2="45" />\n      <line x1="15" y1="24" x2="25" y2="24" />\n      <line x1="47" y1="24" x2="57" y2="24" />\n    </g>\n  ',n}(),"annotorious-tilted-box":function(){var n=document.createElementNS("http://www.w3.org/2000/svg","svg");return n.setAttribute("viewBox","0 0 70 50"),n.innerHTML='\n    <g>\n      <path d="M 45.14,2.37 60.67,20.76 25.33,50.32 9.9,31.94 Z"/>\n      <g class="handles">\n        <circle cx="45.14" cy="2.37"  r="5" />\n        <circle cx="60.67" cy="20.76"  r="5" />\n        <circle cx="25.33" cy="50.32" r="5" />\n        <circle cx="9.9"   cy="31.94" r="5" />\n      </g>\n    </g>\n  ',n}(),line:function(){var n=document.createElementNS("http://www.w3.org/2000/svg","svg");return n.setAttribute("viewBox","0 0 70 50"),n.innerHTML='\n    <g>\n      <line x1="10" y1="50" x2="60" y2="10"></line>\n      <g class="handles">\n        <circle cx="55" cy="14" r="5"></circle>\n        <circle cx="12" cy="47" r="5"></circle>\n      </g>\n    </g>\n  ',n}()},x={mouse:"",rect:"Rectangle",polygon:"Polygon",circle:"Circle",ellipse:"Ellipse",freehand:"Freehand",point:"Point","annotorious-tilted-box":"Angled Box",line:"Line"};const m=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=!!n.fitBounds,o=document.createElement("div");o.className="a9s-toolbar";var c=function(){var n,e,t=o.querySelector(".a9s-toolbar-btn.active");t&&("active",e=(n=t).getAttribute("class").split(" ").filter((function(n){return"active"!==n})),n.setAttribute("class",e.join(" ")))},a=function(n,e){n=n||o.querySelector(".a9s-toolbar-btn.active").classList[1],r&&"mouse"!=n?e.setDrawingEnabled(!0):r&&"mouse"==n&&e.setDrawingEnabled(!1)},i=function(e,r){var i=h[e];if(i){var s=document.createElement("button");s.className=r?"a9s-toolbar-btn ".concat(e," active"):"a9s-toolbar-btn ".concat(e);var l=x[e]?"Create a ".concat(x[e]," annotation"):"mouse"==e?"Disable annotation creation, move around the image":"Create a ".concat(e," annotation");s.setAttribute("aria-label",l);var u=document.createElement("span");u.className="a9s-toolbar-btn-inner",u.appendChild(i),t.withLabel&&x[e]&&(u.innerHTML+='<span class="a9s-toolbar-btn-label">'.concat(x[e],"</span>")),s.addEventListener("click",(function(){(function(n){var e,t;c(),e=n,(t=new Set(e.getAttribute("class").split(" "))).add("active"),e.setAttribute("class",Array.from(t).join(" "))})(s),"mouse"!=e&&n.setDrawingTool(e),t.infoElement&&(t.infoElement.innerHTML="polygon"==e?"To stop Polygon annotation selection double click.":""),a(e,n)})),s.appendChild(u),o.appendChild(s),t.withMouse&&(n.on("cancelSelected",(function(){a("",n)})),n.on("createAnnotation",(function(e){a("",n)})),n.on("updateAnnotation",(function(e){a("",n)})),n.on("deleteAnnotation",(function(e){a("",n)}))),t.withTooltip&&x[e]&&(s.title=x[e])}};t.withMouse&&i("mouse",!0),(t.drawingTools?t.drawingTools.filter((function(e){return-1!=n.listDrawingTools().indexOf(e)})):n.listDrawingTools()).forEach((function(n,e){i(n,!r&&0===e)})),r&&!t.withMouse&&n.on("createSelection",c),e.appendChild(o)}})(),r.default})()));
/*! FeedbackPlus v1.6.0 | (c) ColonelParrot and other contributors | MIT License */

; (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            global.FeedbackPlus = factory()
}(this, (function () {
    'use strict';
    class FeedbackPlus {

        // create necessary elements for reuse
        // also allows for customization by accessing the modal & backdrop properties
        constructor() {
            
            const modal = document.createElement('div')
            modal.classList.add('feedbackplus', 'feedbackplus-modal')
            modal.innerHTML = `<div class="feedbackplus feedbackplus-header"><h2 style="margin:5px 20px">Edit Screenshot</h2><svg class="feedbackplus feedbackplus-close"fill=#000000 height=24px viewBox="0 0 24 24"width=24px xmlns=http://www.w3.org/2000/svg style=margin-right:10px><path d="M0 0h24v24H0V0z"fill=none /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg></div><div class="feedbackplus feedbackplus-canvas-container"><canvas class="feedbackplus feedbackplus-canvas"></canvas></div><div class="feedbackplus feedbackplus-footer"><div class="feedbackplus feedbackplus-tools"><div class="feedbackplus feedbackplus-button feedbackplus-tool feedbackplus-highlight-tool"><svg class="feedbackplus feedbackplus-tool-icon"fill=#0b57d0 height=20px viewBox="0 0 24 24"width=20px xmlns=http://www.w3.org/2000/svg enable-background="new 0 0 24 24"><g><rect fill=none height=24 width=24 /><path d="M17,5h-2V3h2V5z M15,15v6l2.29-2.29L19.59,21L21,19.59l-2.29-2.29L21,15H15z M19,9h2V7h-2V9z M19,13h2v-2h-2V13z M11,21h2 v-2h-2V21z M7,5h2V3H7V5z M3,17h2v-2H3V17z M5,21v-2H3C3,20.1,3.9,21,5,21z M19,3v2h2C21,3.9,20.1,3,19,3z M11,5h2V3h-2V5z M3,9h2 V7H3V9z M7,21h2v-2H7V21z M3,13h2v-2H3V13z M3,5h2V3C3.9,3,3,3.9,3,5z"/></g></svg> Highlight</div><div class="feedbackplus feedbackplus-button feedbackplus-tool feedbackplus-hide-tool"style="margin-left:10px;margin-right:10px"><svg class="feedbackplus feedbackplus-tool-icon"fill=#0b57d0 height=20px viewBox="0 0 24 24"width=20px xmlns=http://www.w3.org/2000/svg enable-background="new 0 0 24 24"><g><rect fill=none height=24 width=24 /></g><g><g><path d=M19,5v11.17l2,2V5c0-1.1-0.9-2-2-2H5.83l2,2H19z /><path d="M2.81,2.81L1.39,4.22L3,5.83V19c0,1.1,0.9,2,2,2h13.17l1.61,1.61l1.41-1.41L2.81,2.81z M5,19V7.83l7.07,7.07L11.25,16 L9,13l-3,4h8.17l2,2H5z"/></g></g></svg> Hide</div></div><div class="feedbackplus feedbackplus-finish-actions"><div class="feedbackplus feedbackplus-button feedbackplus-cancel"style=margin-right:10px>Cancel</div><div class="feedbackplus feedbackplus-button feedbackplus-complete"style=border-color:#0b57d0;background-color:#0b57d0;color:#fff>Done</div></div></div>`

            const backdrop = document.createElement('div')
            backdrop.classList.add('feedbackplus', 'feedbackplus-backdrop')

            this.modal = modal;
            this.backdrop = backdrop;
        }

        /**
        * Checks whether the base APIs needed are supported. Does not account for the presence of html2canvas
        */
        static isRootSupported() {
            return !!navigator?.mediaDevices?.getDisplayMedia && !!window.HTMLCanvasElement;
        }

        /**
        * Checks whether the library can be used. Accounts for presence of html2canvas
        */
        static isSupported() {
            const isRootSupported = FeedbackPlus.isRootSupported()
            if (!isRootSupported) {
                return !!window.html2canvas
            }
            return isRootSupported
        }

        /**
        * Captures a screenshot of the page. Fallbacks to `html2canvas` if available
        * @param {Number} timeout - Default `500`ms. Timeout between call & capture. Can be used to wait for animations to finish before capture
        * @returns {Promise} promise - A promise that, when resolved, provides an ImageBitmap
        */
        async capture(timeout = 500) {
            if (FeedbackPlus.isSupported()) {
                if (FeedbackPlus.isRootSupported()) {
                    return new Promise((resolve, reject) => {
                        navigator.mediaDevices.getDisplayMedia({ video: true, preferCurrentTab: true }).then(stream => {
                            const video = document.createElement('video')
                            setTimeout(() => { 
                                video.srcObject = stream
                                video.onloadedmetadata = () => {
                                    video.play()
                                    video.pause()
    
                                    const canvas = document.createElement('canvas')
                                    canvas.width = video.videoWidth
                                    canvas.height = video.videoHeight
                                    canvas.getContext('2d').drawImage(video, 0, 0)
                                    stream.getVideoTracks().forEach(track => track.stop())
                                    FeedbackPlus.canvasToBitmap(canvas).then(bitmap => resolve(bitmap))
                                }
                             }, timeout)
                        }).catch(e => reject(e))
                    })
                } else {
                    return new Promise((resolve, reject) => {
                        setTimeout(function () {
                            html2canvas(document.body, { logging: false, windowWidth: window.screen.width + 'px' }).then(function (canvas) {
                                FeedbackPlus.canvasToBitmap(canvas).then(bitmap => {
                                    resolve(bitmap)
                                })
                            }).catch(e => reject(e))
                        }, timeout)
                    })
                }
            }
        }

        /**
        * Shows an edit dialog for an ImageBitmap. Should be used with the ImageBitmap 
        * returned from {@link capture()}
        * @param {ImageBitmap} bitmap - The ImageBitmap to edit
        * @param {Function} onComplete - callback function called when user finishes editing
        * @param {Function} onCancel - callback function called when user cancels edit
        * @param {Object} options - options for edit dialog. See the docs for more details
        * @returns {HTMLCanvasElement} canvas - Canvas passed to `onComplete` function, nothing passed to `onCancel`
        */
        showEditDialog(bitmap, onComplete, onCancel, options) {
            options = options || {};
            options.allowHighlight = options.allowHighlight ?? true;
            options.allowHide = options.allowHide ?? true;
            const { allowHighlight, allowHide } = options;

            function clearListeners() {
                canvasContainer.removeEventListener('mousedown', mousedownListener)
                canvasContainer.removeEventListener('mousemove', mouseMoveListener)
                document.body.removeEventListener('mouseup', mouseUpListener)
                canvasContainer.removeEventListener('mousedown', editDeleteMousedownListener, true)
                doneButton.removeEventListener('click', doneListener)
                cancelButton.removeEventListener('click', cancelListener)
                closeButton.removeEventListener('click', cancelListener)
                modalToolsOptions.forEach(option => {
                    option.removeEventListener('click', modalOptionListener)
                })
                document.body.removeEventListener('keypress', undoListener)
            }
            const { modal, backdrop } = this;
            const modalToolsOptions = modal.querySelectorAll('.feedbackplus.feedbackplus-tool')
            const modalOptionListener = function (e) {
                modalToolsOptions.forEach(option => option.classList.remove('feedbackplus-active'))
                e.target.closest('.feedbackplus.feedbackplus-tool').classList.add('feedbackplus-active')
            }
            modalToolsOptions.forEach(option => {
                option.addEventListener('click', modalOptionListener)
            })
            const canvas = modal.querySelector('.feedbackplus.feedbackplus-canvas')
            canvas.width = bitmap.width;
            canvas.height = bitmap.height;
            canvas.getContext('2d').drawImage(bitmap, 0, 0)

            const cloneCanvas = document.createElement('canvas')
            cloneCanvas.width = bitmap.width;
            cloneCanvas.height = bitmap.height;
            cloneCanvas.getContext('2d').drawImage(bitmap, 0, 0)

            const feedbackHighlightTool = modal.querySelector('.feedbackplus.feedbackplus-highlight-tool')
            const feedbackHideTool = modal.querySelector('.feedbackplus.feedbackplus-hide-tool')

            const feedbackHighlight = document.createElement('div')
            feedbackHighlight.classList.add('feedbackplus', 'feedbackplus-highlight', 'feedbackplus-edit')
            feedbackHighlight.innerHTML = `<svg fill=#000000 height=20px class="feedbackplus feedbackplus-tool-close"style="display:none"viewBox="0 0 24 24"width=20px xmlns=http://www.w3.org/2000/svg><path d="M0 0h24v24H0V0z"fill=none></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>`

            const feedbackHide = document.createElement('div')
            feedbackHide.classList.add('feedbackplus', 'feedbackplus-hide', 'feedbackplus-edit')
            feedbackHide.innerHTML = `<svg fill=#000000 height=20px class="feedbackplus feedbackplus-tool-close"style="display:none"viewBox="0 0 24 24"width=20px xmlns=http://www.w3.org/2000/svg><path d="M0 0h24v24H0V0z"fill=none></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>`
            let highlightElem = null;
            const canvasContainer = modal.querySelector('.feedbackplus.feedbackplus-canvas-container')
            let startX;
            let startY;

            const mousedownListener = function (e) {
                if (highlightElem) {
                    mouseUpListener(e)
                }

                let isHighlight = feedbackHighlightTool.classList.contains('feedbackplus-active')
                if (allowHighlight && isHighlight) {
                    highlightElem = feedbackHighlight.cloneNode(true)
                } else if (allowHide && feedbackHideTool.classList.contains('feedbackplus-active')) {
                    highlightElem = feedbackHide.cloneNode(true)
                } else {
                    return;
                }
                const x = e.pageX;
                const y = e.pageY;
                const offset = canvasContainer.getBoundingClientRect()
                const [realX, realY] = [x - offset.left + canvasContainer.scrollLeft - (isHighlight ? 5 : 0), y - offset.top + canvasContainer.scrollTop - (isHighlight ? 5 : 0)]
                startX = realX;
                startY = realY;
                highlightElem.style.top = startY + "px";
                highlightElem.style.left = startX + "px";
                canvasContainer.appendChild(highlightElem)
            }
            canvasContainer.addEventListener('mousedown', mousedownListener)

            const mouseMoveListener = function (e) {
                if (highlightElem) {
                    e.preventDefault();
                    let isHighlight = feedbackHighlightTool.classList.contains('feedbackplus-active')

                    const offset = canvasContainer.getBoundingClientRect()
                    const x = e.pageX - offset.left + canvasContainer.scrollLeft - (isHighlight ? 5 : 0);
                    const y = e.pageY - offset.top + canvasContainer.scrollTop - (isHighlight ? 5 : 0);
                    const Xdiff = (x - startX);
                    const Ydiff = (y - startY);
                    if (Xdiff < 0) {
                        highlightElem.style.left = startX + Xdiff + "px";
                        highlightElem.style.width = startX - x + "px";
                    } else {
                        highlightElem.style.left = startX + "px";
                        highlightElem.style.width = Xdiff + "px";
                    }
                    if (Ydiff < 0) {
                        highlightElem.style.top = startY + Ydiff + "px";
                        highlightElem.style.height = startY - y + "px";
                    } else {
                        highlightElem.style.top = startY + "px";
                        highlightElem.style.height = Ydiff + "px";
                    }

                }
            }
            canvasContainer.addEventListener('mousemove', mouseMoveListener)

            const mouseUpListener = function (e) {
                if (highlightElem) {
                    highlightElem.querySelector('.feedbackplus.feedbackplus-tool-close').style.removeProperty('display')
                    if (highlightElem.offsetHeight < 30 && highlightElem.offsetWidth < 30) {
                        highlightElem.remove();
                    }
                    highlightElem = null;
                }
            }
            document.body.addEventListener('mouseup', mouseUpListener)

            const editDeleteMousedownListener = function (e) {
                if (e.target.closest('.feedbackplus-tool-close')) {
                    e.stopPropagation()
                    e.target.closest('.feedbackplus-highlight')?.remove()
                    e.target.closest('.feedbackplus-hide')?.remove()
                }
            }
            canvasContainer.addEventListener('mousedown', editDeleteMousedownListener, true)

            const doneListener = () => {
                const edits = canvasContainer.querySelectorAll('.feedbackplus.feedbackplus-edit')
                const cloneCanvasContext = cloneCanvas.getContext('2d')
                cloneCanvasContext.lineWidth = 5
                cloneCanvasContext.strokeStyle = "#FCC934"
                cloneCanvasContext.fillStyle = "black"
                edits.forEach(edit => {
                    let { top, left, width, height } = edit.style;
                    top = +top.slice(0, -2)
                    left = +left.slice(0, -2)
                    width = +width.slice(0, -2)
                    height = +height.slice(0, -2)
                    if (edit.classList.contains('feedbackplus-highlight')) {
                        cloneCanvasContext.strokeRect(left + 2.5, top + 2.5, width + 5, height + 5)
                    } else if (edit.classList.contains('feedbackplus-hide')) {
                        cloneCanvasContext.fillRect(left, top, width, height)
                    }
                })

                clearListeners()
                this.clearEdits()
                onComplete(cloneCanvas)
            }
            const doneButton = modal.querySelector('.feedbackplus.feedbackplus-complete')
            doneButton.addEventListener('click', doneListener)

            const cancelButton = modal.querySelector('.feedbackplus.feedbackplus-cancel')
            const closeButton = modal.querySelector('.feedbackplus.feedbackplus-close')

            const cancelListener = () => {
                clearListeners()
                this.clearEdits()
                onCancel()
            }
            cancelButton.addEventListener('click', cancelListener)
            closeButton.addEventListener('click', cancelListener)

            const undoListener = (e) => {
                if (e.ctrlKey && e.keyCode == 26) {
                    const edits = canvasContainer.querySelectorAll('.feedbackplus.feedbackplus-edit')
                    const lastEdit = edits[edits.length - 1]
                    if (lastEdit) {
                        lastEdit.remove()
                    }
                }
            }

            document.body.addEventListener('keypress', undoListener)

            document.body.appendChild(modal)
            document.body.appendChild(backdrop)

            feedbackHideTool.style.display = allowHide ? "inherit" : "none";
            feedbackHighlightTool.style.display = allowHighlight ? "inherit" : "none";

            const visibleTools = modal.querySelectorAll('.feedbackplus.feedbackplus-tool')
            visibleTools.forEach(e => e.classList.remove('feedbackplus-active'))
            for (const tool of visibleTools) {
                if (window.getComputedStyle(tool).display != "none") {
                    tool.classList.add('feedbackplus-active')
                    break;
                }
            }
        }

        /**
        * Closes the edit dialog. Should be called in the `onComplete` and `onCancel` callbacks for {@link showEditDialog()}
        */
        closeEditDialog() {
            const { modal, backdrop } = this;
            modal.remove()
            backdrop.remove()
        }

        /**
        * Removes all edits made by the user thus far in the edit dialog
        */
        clearEdits() {
            const { modal, backdrop } = this;
            const canvasContainer = modal.querySelector('.feedbackplus.feedbackplus-canvas-container')
            const edits = canvasContainer.querySelectorAll('.feedbackplus.feedbackplus-edit')
            edits.forEach(edit => edit.remove())
        }

        /**
        * Converts a canvas to an ImageBitmap. Can be called on the canvas returned by {@link showEditDialog()} to redraw on canvas
        * @param {HTMLCanvasElement} canvas - The canvas
        * @returns {Promise} promise - A promise which, when resolved, returns the ImageBitmap
        */
        static canvasToBitmap(canvas) {
            return new Promise((resolve, reject) => {
                const canvasContext = canvas.getContext('2d')
                const imageData = canvasContext.getImageData(0, 0, canvas.width, canvas.height)
                createImageBitmap(imageData).then(bitmap => {
                    resolve({
                        bitmap,
                        width: bitmap.width,
                        height: bitmap.height
                    })
                })
            })
        }
    }

    if(typeof module !== 'undefined'){
        module.exports = { FeedbackPlus }
    }
    return FeedbackPlus
})));
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
!function(A,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(A="undefined"!=typeof globalThis?globalThis:A||self).html2canvas=e()}(this,function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var r=function(A,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(A,e){A.__proto__=e}||function(A,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(A[t]=e[t])})(A,e)};function A(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function t(){this.constructor=A}r(A,e),A.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}var h=function(){return(h=Object.assign||function(A){for(var e,t=1,r=arguments.length;t<r;t++)for(var B in e=arguments[t])Object.prototype.hasOwnProperty.call(e,B)&&(A[B]=e[B]);return A}).apply(this,arguments)};function a(A,s,o,i){return new(o=o||Promise)(function(t,e){function r(A){try{n(i.next(A))}catch(A){e(A)}}function B(A){try{n(i.throw(A))}catch(A){e(A)}}function n(A){var e;A.done?t(A.value):((e=A.value)instanceof o?e:new o(function(A){A(e)})).then(r,B)}n((i=i.apply(A,s||[])).next())})}function H(t,r){var B,n,s,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]},A={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(A[Symbol.iterator]=function(){return this}),A;function e(e){return function(A){return function(e){if(B)throw new TypeError("Generator is already executing.");for(;o;)try{if(B=1,n&&(s=2&e[0]?n.return:e[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,e[1])).done)return s;switch(n=0,(e=s?[2&e[0],s.value]:e)[0]){case 0:case 1:s=e;break;case 4:return o.label++,{value:e[1],done:!1};case 5:o.label++,n=e[1],e=[0];continue;case 7:e=o.ops.pop(),o.trys.pop();continue;default:if(!(s=0<(s=o.trys).length&&s[s.length-1])&&(6===e[0]||2===e[0])){o=0;continue}if(3===e[0]&&(!s||e[1]>s[0]&&e[1]<s[3])){o.label=e[1];break}if(6===e[0]&&o.label<s[1]){o.label=s[1],s=e;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(e);break}s[2]&&o.ops.pop(),o.trys.pop();continue}e=r.call(t,o)}catch(A){e=[6,A],n=0}finally{B=s=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,A])}}}function t(A,e,t){if(t||2===arguments.length)for(var r,B=0,n=e.length;B<n;B++)!r&&B in e||((r=r||Array.prototype.slice.call(e,0,B))[B]=e[B]);return A.concat(r||e)}var d=(B.prototype.add=function(A,e,t,r){return new B(this.left+A,this.top+e,this.width+t,this.height+r)},B.fromClientRect=function(A,e){return new B(e.left+A.windowBounds.left,e.top+A.windowBounds.top,e.width,e.height)},B.fromDOMRectList=function(A,e){e=Array.from(e).find(function(A){return 0!==A.width});return e?new B(e.left+A.windowBounds.left,e.top+A.windowBounds.top,e.width,e.height):B.EMPTY},B.EMPTY=new B(0,0,0,0),B);function B(A,e,t,r){this.left=A,this.top=e,this.width=t,this.height=r}for(var f=function(A,e){return d.fromClientRect(A,e.getBoundingClientRect())},Q=function(A){for(var e=[],t=0,r=A.length;t<r;){var B,n=A.charCodeAt(t++);55296<=n&&n<=56319&&t<r?56320==(64512&(B=A.charCodeAt(t++)))?e.push(((1023&n)<<10)+(1023&B)+65536):(e.push(n),t--):e.push(n)}return e},g=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var r=[],B=-1,n="";++B<t;){var s=A[B];s<=65535?r.push(s):(s-=65536,r.push(55296+(s>>10),s%1024+56320)),(B+1===t||16384<r.length)&&(n+=String.fromCharCode.apply(String,r),r.length=0)}return n},e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n="undefined"==typeof Uint8Array?[]:new Uint8Array(256),s=0;s<e.length;s++)n[e.charCodeAt(s)]=s;for(var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c="undefined"==typeof Uint8Array?[]:new Uint8Array(256),i=0;i<o.length;i++)c[o.charCodeAt(i)]=i;function w(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))}var U=(l.prototype.get=function(A){var e;if(0<=A){if(A<55296||56319<A&&A<=65535)return e=this.index[A>>5],this.data[e=(e<<2)+(31&A)];if(A<=65535)return e=this.index[2048+(A-55296>>5)],this.data[e=(e<<2)+(31&A)];if(A<this.highStart)return e=this.index[e=2080+(A>>11)],e=this.index[e+=A>>5&63],this.data[e=(e<<2)+(31&A)];if(A<=1114111)return this.data[this.highValueIndex]}return this.errorValue},l);function l(A,e,t,r,B,n){this.initialValue=A,this.errorValue=e,this.highStart=t,this.highValueIndex=r,this.index=B,this.data=n}for(var C="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u="undefined"==typeof Uint8Array?[]:new Uint8Array(256),F=0;F<C.length;F++)u[C.charCodeAt(F)]=F;function p(A,e,t,r){var B=r[t];if(Array.isArray(A)?-1!==A.indexOf(B):A===B)for(var n=t;n<=r.length;){if((o=r[++n])===e)return 1;if(o!==D)break}if(B===D)for(n=t;0<n;){var s=r[--n];if(Array.isArray(A)?-1!==A.indexOf(s):A===s)for(var o,i=t;i<=r.length;){if((o=r[++i])===e)return 1;if(o!==D)break}if(s!==D)break}}function E(A,e){for(var t=A;0<=t;){var r=e[t];if(r!==D)return r;t--}return 0}function I(t,A){var e=(B=function(A,r){void 0===r&&(r="strict");var B=[],n=[],s=[];return A.forEach(function(A,e){var t=rA.get(A);if(50<t?(s.push(!0),t-=50):s.push(!1),-1!==["normal","auto","loose"].indexOf(r)&&-1!==[8208,8211,12316,12448].indexOf(A))return n.push(e),B.push(16);if(4!==t&&11!==t)return n.push(e),31===t?B.push("strict"===r?O:q):t===AA||29===t?B.push(J):43===t?131072<=A&&A<=196605||196608<=A&&A<=262141?B.push(q):B.push(J):void B.push(t);if(0===e)return n.push(e),B.push(J);t=B[e-1];return-1===iA.indexOf(t)?(n.push(n[e-1]),B.push(t)):(n.push(e),B.push(J))}),[n,B,s]}(t,(A=A||{lineBreak:"normal",wordBreak:"normal"}).lineBreak))[0],r=B[1],B=B[2];return[e,r="break-all"===A.wordBreak||"break-word"===A.wordBreak?r.map(function(A){return-1!==[R,J,AA].indexOf(A)?q:A}):r,"keep-all"===A.wordBreak?B.map(function(A,e){return A&&19968<=t[e]&&t[e]<=40959}):void 0]}var y,K,m,L,b,D=10,v=13,x=15,M=17,S=18,T=19,G=20,O=21,V=22,k=24,R=25,N=26,P=27,X=28,J=30,Y=32,W=33,Z=34,_=35,q=37,j=38,z=39,$=40,AA=42,eA=[9001,65288],tA="×",rA=(m=function(A){var e,t,r,B,n=.75*A.length,s=A.length,o=0;"="===A[A.length-1]&&(n--,"="===A[A.length-2]&&n--);for(var n=new("undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array&&void 0!==Uint8Array.prototype.slice?ArrayBuffer:Array)(n),i=Array.isArray(n)?n:new Uint8Array(n),Q=0;Q<s;Q+=4)e=c[A.charCodeAt(Q)],t=c[A.charCodeAt(Q+1)],r=c[A.charCodeAt(Q+2)],B=c[A.charCodeAt(Q+3)],i[o++]=e<<2|t>>4,i[o++]=(15&t)<<4|r>>2,i[o++]=(3&r)<<6|63&B;return n}(y="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA=="),L=Array.isArray(m)?function(A){for(var e=A.length,t=[],r=0;r<e;r+=4)t.push(A[r+3]<<24|A[r+2]<<16|A[r+1]<<8|A[r]);return t}(m):new Uint32Array(m),b=Array.isArray(m)?function(A){for(var e=A.length,t=[],r=0;r<e;r+=2)t.push(A[r+1]<<8|A[r]);return t}(m):new Uint16Array(m),y=w(b,12,L[4]/2),K=2===L[5]?w(b,(24+L[4])/2):(m=L,b=Math.ceil((24+L[4])/4),m.slice?m.slice(b,K):new Uint32Array(Array.prototype.slice.call(m,b,K))),new U(L[0],L[1],L[2],L[3],y,K)),BA=[J,36],nA=[1,2,3,5],sA=[D,8],oA=[P,N],iA=nA.concat(sA),QA=[j,z,$,Z,_],cA=[x,v],aA=(gA.prototype.slice=function(){return g.apply(void 0,this.codePoints.slice(this.start,this.end))},gA);function gA(A,e,t,r){this.codePoints=A,this.required="!"===e,this.start=t,this.end=r}function wA(A,e){var t=Q(A),r=(e=I(t,e))[0],B=e[1],n=e[2],s=t.length,o=0,i=0;return{next:function(){if(s<=i)return{done:!0,value:null};for(var A=tA;i<s&&(A=function(A,e,t,r,B){if(0===t[r])return tA;var n=r-1;if(Array.isArray(B)&&!0===B[n])return tA;var s=n-1,o=1+n,i=e[n],r=0<=s?e[s]:0,B=e[o];if(2===i&&3===B)return tA;if(-1!==nA.indexOf(i))return"!";if(-1!==nA.indexOf(B))return tA;if(-1!==sA.indexOf(B))return tA;if(8===E(n,e))return"÷";if(11===rA.get(A[n]))return tA;if((i===Y||i===W)&&11===rA.get(A[o]))return tA;if(7===i||7===B)return tA;if(9===i)return tA;if(-1===[D,v,x].indexOf(i)&&9===B)return tA;if(-1!==[M,S,T,k,X].indexOf(B))return tA;if(E(n,e)===V)return tA;if(p(23,V,n,e))return tA;if(p([M,S],O,n,e))return tA;if(p(12,12,n,e))return tA;if(i===D)return"÷";if(23===i||23===B)return tA;if(16===B||16===i)return"÷";if(-1!==[v,x,O].indexOf(B)||14===i)return tA;if(36===r&&-1!==cA.indexOf(i))return tA;if(i===X&&36===B)return tA;if(B===G)return tA;if(-1!==BA.indexOf(B)&&i===R||-1!==BA.indexOf(i)&&B===R)return tA;if(i===P&&-1!==[q,Y,W].indexOf(B)||-1!==[q,Y,W].indexOf(i)&&B===N)return tA;if(-1!==BA.indexOf(i)&&-1!==oA.indexOf(B)||-1!==oA.indexOf(i)&&-1!==BA.indexOf(B))return tA;if(-1!==[P,N].indexOf(i)&&(B===R||-1!==[V,x].indexOf(B)&&e[1+o]===R)||-1!==[V,x].indexOf(i)&&B===R||i===R&&-1!==[R,X,k].indexOf(B))return tA;if(-1!==[R,X,k,M,S].indexOf(B))for(var Q=n;0<=Q;){if((c=e[Q])===R)return tA;if(-1===[X,k].indexOf(c))break;Q--}if(-1!==[P,N].indexOf(B))for(var c,Q=-1!==[M,S].indexOf(i)?s:n;0<=Q;){if((c=e[Q])===R)return tA;if(-1===[X,k].indexOf(c))break;Q--}if(j===i&&-1!==[j,z,Z,_].indexOf(B)||-1!==[z,Z].indexOf(i)&&-1!==[z,$].indexOf(B)||-1!==[$,_].indexOf(i)&&B===$)return tA;if(-1!==QA.indexOf(i)&&-1!==[G,N].indexOf(B)||-1!==QA.indexOf(B)&&i===P)return tA;if(-1!==BA.indexOf(i)&&-1!==BA.indexOf(B))return tA;if(i===k&&-1!==BA.indexOf(B))return tA;if(-1!==BA.concat(R).indexOf(i)&&B===V&&-1===eA.indexOf(A[o])||-1!==BA.concat(R).indexOf(B)&&i===S)return tA;if(41===i&&41===B){for(var a=t[n],g=1;0<a&&41===e[--a];)g++;if(g%2!=0)return tA}return i===Y&&B===W?tA:"÷"}(t,B,r,++i,n))===tA;);if(A===tA&&i!==s)return{done:!0,value:null};var e=new aA(t,A,o,i);return o=i,{value:e,done:!1}}}}function UA(A){return 48<=A&&A<=57}function lA(A){return UA(A)||65<=A&&A<=70||97<=A&&A<=102}function CA(A){return 10===A||9===A||32===A}function uA(A){return 97<=(t=e=A)&&t<=122||65<=(e=e)&&e<=90||128<=A||95===A;var e,t}function FA(A){return uA(A)||UA(A)||45===A}function hA(A,e){return 92===A&&10!==e}function dA(A,e,t){return 45===A?uA(e)||hA(e,t):!!uA(A)||92===A&&10!==e}function fA(A,e,t){return 43===A||45===A?!!UA(e)||46===e&&UA(t):UA(46===A?e:A)}var HA={type:2},pA={type:3},EA={type:4},IA={type:13},yA={type:8},KA={type:21},mA={type:9},LA={type:10},bA={type:11},DA={type:12},vA={type:14},xA={type:23},MA={type:1},SA={type:25},TA={type:24},GA={type:26},OA={type:27},VA={type:28},kA={type:29},RA={type:31},NA={type:32},PA=(XA.prototype.write=function(A){this._value=this._value.concat(Q(A))},XA.prototype.read=function(){for(var A=[],e=this.consumeToken();e!==NA;)A.push(e),e=this.consumeToken();return A},XA.prototype.consumeToken=function(){var A=this.consumeCodePoint();switch(A){case 34:return this.consumeStringToken(34);case 35:var e=this.peekCodePoint(0),t=this.peekCodePoint(1),r=this.peekCodePoint(2);if(FA(e)||hA(t,r)){var B=dA(e,t,r)?2:1;return{type:5,value:this.consumeName(),flags:B}}break;case 36:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),IA;break;case 39:return this.consumeStringToken(39);case 40:return HA;case 41:return pA;case 42:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),vA;break;case 43:if(fA(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case 44:return EA;case 45:var r=A,B=this.peekCodePoint(0),n=this.peekCodePoint(1);if(fA(r,B,n))return this.reconsumeCodePoint(A),this.consumeNumericToken();if(dA(r,B,n))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();if(45===B&&62===n)return this.consumeCodePoint(),this.consumeCodePoint(),TA;break;case 46:if(fA(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case 47:if(42===this.peekCodePoint(0))for(this.consumeCodePoint();;){var s=this.consumeCodePoint();if(42===s&&47===(s=this.consumeCodePoint()))return this.consumeToken();if(-1===s)return this.consumeToken()}break;case 58:return GA;case 59:return OA;case 60:if(33===this.peekCodePoint(0)&&45===this.peekCodePoint(1)&&45===this.peekCodePoint(2))return this.consumeCodePoint(),this.consumeCodePoint(),SA;break;case 64:var n=this.peekCodePoint(0),o=this.peekCodePoint(1),i=this.peekCodePoint(2);if(dA(n,o,i))return{type:7,value:this.consumeName()};break;case 91:return VA;case 92:if(hA(A,this.peekCodePoint(0)))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();break;case 93:return kA;case 61:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),yA;break;case 123:return bA;case 125:return DA;case 117:case 85:o=this.peekCodePoint(0),i=this.peekCodePoint(1);return 43!==o||!lA(i)&&63!==i||(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(A),this.consumeIdentLikeToken();case 124:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),mA;if(124===this.peekCodePoint(0))return this.consumeCodePoint(),KA;break;case 126:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),LA;break;case-1:return NA}return CA(A)?(this.consumeWhiteSpace(),RA):UA(A)?(this.reconsumeCodePoint(A),this.consumeNumericToken()):uA(A)?(this.reconsumeCodePoint(A),this.consumeIdentLikeToken()):{type:6,value:g(A)}},XA.prototype.consumeCodePoint=function(){var A=this._value.shift();return void 0===A?-1:A},XA.prototype.reconsumeCodePoint=function(A){this._value.unshift(A)},XA.prototype.peekCodePoint=function(A){return A>=this._value.length?-1:this._value[A]},XA.prototype.consumeUnicodeRangeToken=function(){for(var A=[],e=this.consumeCodePoint();lA(e)&&A.length<6;)A.push(e),e=this.consumeCodePoint();for(var t=!1;63===e&&A.length<6;)A.push(e),e=this.consumeCodePoint(),t=!0;if(t)return{type:30,start:parseInt(g.apply(void 0,A.map(function(A){return 63===A?48:A})),16),end:parseInt(g.apply(void 0,A.map(function(A){return 63===A?70:A})),16)};var r=parseInt(g.apply(void 0,A),16);if(45===this.peekCodePoint(0)&&lA(this.peekCodePoint(1))){this.consumeCodePoint();for(var e=this.consumeCodePoint(),B=[];lA(e)&&B.length<6;)B.push(e),e=this.consumeCodePoint();return{type:30,start:r,end:parseInt(g.apply(void 0,B),16)}}return{type:30,start:r,end:r}},XA.prototype.consumeIdentLikeToken=function(){var A=this.consumeName();return"url"===A.toLowerCase()&&40===this.peekCodePoint(0)?(this.consumeCodePoint(),this.consumeUrlToken()):40===this.peekCodePoint(0)?(this.consumeCodePoint(),{type:19,value:A}):{type:20,value:A}},XA.prototype.consumeUrlToken=function(){var A=[];if(this.consumeWhiteSpace(),-1===this.peekCodePoint(0))return{type:22,value:""};var e,t=this.peekCodePoint(0);if(39===t||34===t){t=this.consumeStringToken(this.consumeCodePoint());return 0===t.type&&(this.consumeWhiteSpace(),-1===this.peekCodePoint(0)||41===this.peekCodePoint(0))?(this.consumeCodePoint(),{type:22,value:t.value}):(this.consumeBadUrlRemnants(),xA)}for(;;){var r=this.consumeCodePoint();if(-1===r||41===r)return{type:22,value:g.apply(void 0,A)};if(CA(r))return this.consumeWhiteSpace(),-1===this.peekCodePoint(0)||41===this.peekCodePoint(0)?(this.consumeCodePoint(),{type:22,value:g.apply(void 0,A)}):(this.consumeBadUrlRemnants(),xA);if(34===r||39===r||40===r||(0<=(e=r)&&e<=8||11===e||14<=e&&e<=31||127===e))return this.consumeBadUrlRemnants(),xA;if(92===r){if(!hA(r,this.peekCodePoint(0)))return this.consumeBadUrlRemnants(),xA;A.push(this.consumeEscapedCodePoint())}else A.push(r)}},XA.prototype.consumeWhiteSpace=function(){for(;CA(this.peekCodePoint(0));)this.consumeCodePoint()},XA.prototype.consumeBadUrlRemnants=function(){for(;;){var A=this.consumeCodePoint();if(41===A||-1===A)return;hA(A,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},XA.prototype.consumeStringSlice=function(A){for(var e="";0<A;){var t=Math.min(5e4,A);e+=g.apply(void 0,this._value.splice(0,t)),A-=t}return this._value.shift(),e},XA.prototype.consumeStringToken=function(A){for(var e="",t=0;;){var r,B=this._value[t];if(-1===B||void 0===B||B===A)return{type:0,value:e+=this.consumeStringSlice(t)};if(10===B)return this._value.splice(0,t),MA;92!==B||-1!==(r=this._value[t+1])&&void 0!==r&&(10===r?(e+=this.consumeStringSlice(t),t=-1,this._value.shift()):hA(B,r)&&(e+=this.consumeStringSlice(t),e+=g(this.consumeEscapedCodePoint()),t=-1)),t++}},XA.prototype.consumeNumber=function(){var A=[],e=4;for(43!==(t=this.peekCodePoint(0))&&45!==t||A.push(this.consumeCodePoint());UA(this.peekCodePoint(0));)A.push(this.consumeCodePoint());var t=this.peekCodePoint(0),r=this.peekCodePoint(1);if(46===t&&UA(r))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),e=8;UA(this.peekCodePoint(0));)A.push(this.consumeCodePoint());t=this.peekCodePoint(0);var r=this.peekCodePoint(1),B=this.peekCodePoint(2);if((69===t||101===t)&&((43===r||45===r)&&UA(B)||UA(r)))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),e=8;UA(this.peekCodePoint(0));)A.push(this.consumeCodePoint());return[function(A){var e=0,t=1;43!==A[e]&&45!==A[e]||(45===A[e]&&(t=-1),e++);for(var r=[];UA(A[e]);)r.push(A[e++]);var B=r.length?parseInt(g.apply(void 0,r),10):0;46===A[e]&&e++;for(var n=[];UA(A[e]);)n.push(A[e++]);var s=n.length,o=s?parseInt(g.apply(void 0,n),10):0;69!==A[e]&&101!==A[e]||e++;var i=1;43!==A[e]&&45!==A[e]||(45===A[e]&&(i=-1),e++);for(var Q=[];UA(A[e]);)Q.push(A[e++]);var c=Q.length?parseInt(g.apply(void 0,Q),10):0;return t*(B+o*Math.pow(10,-s))*Math.pow(10,i*c)}(A),e]},XA.prototype.consumeNumericToken=function(){var A=this.consumeNumber(),e=A[0],t=A[1],r=this.peekCodePoint(0),B=this.peekCodePoint(1),A=this.peekCodePoint(2);return dA(r,B,A)?{type:15,number:e,flags:t,unit:this.consumeName()}:37===r?(this.consumeCodePoint(),{type:16,number:e,flags:t}):{type:17,number:e,flags:t}},XA.prototype.consumeEscapedCodePoint=function(){var A,e=this.consumeCodePoint();if(lA(e)){for(var t=g(e);lA(this.peekCodePoint(0))&&t.length<6;)t+=g(this.consumeCodePoint());CA(this.peekCodePoint(0))&&this.consumeCodePoint();var r=parseInt(t,16);return 0===r||55296<=(A=r)&&A<=57343||1114111<r?65533:r}return-1===e?65533:e},XA.prototype.consumeName=function(){for(var A="";;){var e=this.consumeCodePoint();if(FA(e))A+=g(e);else{if(!hA(e,this.peekCodePoint(0)))return this.reconsumeCodePoint(e),A;A+=g(this.consumeEscapedCodePoint())}}},XA);function XA(){this._value=[]}var JA=(YA.create=function(A){var e=new PA;return e.write(A),new YA(e.read())},YA.parseValue=function(A){return YA.create(A).parseComponentValue()},YA.parseValues=function(A){return YA.create(A).parseComponentValues()},YA.prototype.parseComponentValue=function(){for(var A=this.consumeToken();31===A.type;)A=this.consumeToken();if(32===A.type)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(A);for(var e=this.consumeComponentValue();31===(A=this.consumeToken()).type;);if(32===A.type)return e;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},YA.prototype.parseComponentValues=function(){for(var A=[];;){var e=this.consumeComponentValue();if(32===e.type)return A;A.push(e),A.push()}},YA.prototype.consumeComponentValue=function(){var A=this.consumeToken();switch(A.type){case 11:case 28:case 2:return this.consumeSimpleBlock(A.type);case 19:return this.consumeFunction(A)}return A},YA.prototype.consumeSimpleBlock=function(A){for(var e={type:A,values:[]},t=this.consumeToken();;){if(32===t.type||ce(t,A))return e;this.reconsumeToken(t),e.values.push(this.consumeComponentValue()),t=this.consumeToken()}},YA.prototype.consumeFunction=function(A){for(var e={name:A.value,values:[],type:18};;){var t=this.consumeToken();if(32===t.type||3===t.type)return e;this.reconsumeToken(t),e.values.push(this.consumeComponentValue())}},YA.prototype.consumeToken=function(){var A=this._tokens.shift();return void 0===A?NA:A},YA.prototype.reconsumeToken=function(A){this._tokens.unshift(A)},YA);function YA(A){this._tokens=A}function WA(A){return 15===A.type}function ZA(A){return 17===A.type}function _A(A){return 20===A.type}function qA(A){return 0===A.type}function jA(A,e){return _A(A)&&A.value===e}function zA(A){return 31!==A.type}function $A(A){return 31!==A.type&&4!==A.type}function Ae(A){var e=[],t=[];return A.forEach(function(A){if(4===A.type){if(0===t.length)throw new Error("Error parsing function args, zero tokens for arg");return e.push(t),void(t=[])}31!==A.type&&t.push(A)}),t.length&&e.push(t),e}function ee(A){return 17===A.type||15===A.type}function te(A){return 16===A.type||ee(A)}function re(A){return 1<A.length?[A[0],A[1]]:[A[0]]}function Be(A,e,t){var r=A[0],A=A[1];return[Ue(r,e),Ue(void 0!==A?A:r,t)]}function ne(A){return 15===A.type&&("deg"===A.unit||"grad"===A.unit||"rad"===A.unit||"turn"===A.unit)}function se(A){switch(A.filter(_A).map(function(A){return A.value}).join(" ")){case"to bottom right":case"to right bottom":case"left top":case"top left":return[ae,ae];case"to top":case"bottom":return Ce(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[ae,we];case"to right":case"left":return Ce(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[we,we];case"to bottom":case"top":return Ce(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[we,ae];case"to left":case"right":return Ce(270)}return 0}function oe(A){return 0==(255&A)}function ie(A){var e=255&A,t=255&A>>8,r=255&A>>16,A=255&A>>24;return e<255?"rgba("+A+","+r+","+t+","+e/255+")":"rgb("+A+","+r+","+t+")"}function Qe(A,e){if(17===A.type)return A.number;if(16!==A.type)return 0;var t=3===e?1:255;return 3===e?A.number/100*t:Math.round(A.number/100*t)}var ce=function(A,e){return 11===e&&12===A.type||(28===e&&29===A.type||2===e&&3===A.type)},ae={type:17,number:0,flags:4},ge={type:16,number:50,flags:4},we={type:16,number:100,flags:4},Ue=function(A,e){if(16===A.type)return A.number/100*e;if(WA(A))switch(A.unit){case"rem":case"em":return 16*A.number;default:return A.number}return A.number},le=function(A,e){if(15===e.type)switch(e.unit){case"deg":return Math.PI*e.number/180;case"grad":return Math.PI/200*e.number;case"rad":return e.number;case"turn":return 2*Math.PI*e.number}throw new Error("Unsupported angle type")},Ce=function(A){return Math.PI*A/180},ue=function(A,e){if(18===e.type){var t=me[e.name];if(void 0===t)throw new Error('Attempting to parse an unsupported color function "'+e.name+'"');return t(A,e.values)}if(5===e.type){if(3===e.value.length){var r=e.value.substring(0,1),B=e.value.substring(1,2),n=e.value.substring(2,3);return Fe(parseInt(r+r,16),parseInt(B+B,16),parseInt(n+n,16),1)}if(4===e.value.length){var r=e.value.substring(0,1),B=e.value.substring(1,2),n=e.value.substring(2,3),s=e.value.substring(3,4);return Fe(parseInt(r+r,16),parseInt(B+B,16),parseInt(n+n,16),parseInt(s+s,16)/255)}if(6===e.value.length){r=e.value.substring(0,2),B=e.value.substring(2,4),n=e.value.substring(4,6);return Fe(parseInt(r,16),parseInt(B,16),parseInt(n,16),1)}if(8===e.value.length){r=e.value.substring(0,2),B=e.value.substring(2,4),n=e.value.substring(4,6),s=e.value.substring(6,8);return Fe(parseInt(r,16),parseInt(B,16),parseInt(n,16),parseInt(s,16)/255)}}if(20===e.type){e=Le[e.value.toUpperCase()];if(void 0!==e)return e}return Le.TRANSPARENT},Fe=function(A,e,t,r){return(A<<24|e<<16|t<<8|Math.round(255*r)<<0)>>>0},he=function(A,e){e=e.filter($A);if(3===e.length){var t=e.map(Qe),r=t[0],B=t[1],t=t[2];return Fe(r,B,t,1)}if(4!==e.length)return 0;e=e.map(Qe),r=e[0],B=e[1],t=e[2],e=e[3];return Fe(r,B,t,e)};function de(A,e,t){return t<0&&(t+=1),1<=t&&--t,t<1/6?(e-A)*t*6+A:t<.5?e:t<2/3?6*(e-A)*(2/3-t)+A:A}function fe(A,e){return ue(A,JA.create(e).parseComponentValue())}function He(A,e){return A=ue(A,e[0]),(e=e[1])&&te(e)?{color:A,stop:e}:{color:A,stop:null}}function pe(A,t){var e=A[0],r=A[A.length-1];null===e.stop&&(e.stop=ae),null===r.stop&&(r.stop=we);for(var B=[],n=0,s=0;s<A.length;s++){var o=A[s].stop;null!==o?(n<(o=Ue(o,t))?B.push(o):B.push(n),n=o):B.push(null)}for(var i=null,s=0;s<B.length;s++){var Q=B[s];if(null===Q)null===i&&(i=s);else if(null!==i){for(var c=s-i,a=(Q-B[i-1])/(1+c),g=1;g<=c;g++)B[i+g-1]=a*g;i=null}}return A.map(function(A,e){return{color:A.color,stop:Math.max(Math.min(1,B[e]/t),0)}})}function Ee(A,e,t){var r="number"==typeof A?A:(s=e/2,r=(n=t)/2,s=Ue((B=A)[0],e)-s,n=r-Ue(B[1],n),(Math.atan2(n,s)+2*Math.PI)%(2*Math.PI)),B=Math.abs(e*Math.sin(r))+Math.abs(t*Math.cos(r)),n=e/2,s=t/2,e=B/2,t=Math.sin(r-Math.PI/2)*e,e=Math.cos(r-Math.PI/2)*e;return[B,n-e,n+e,s-t,s+t]}function Ie(A,e){return Math.sqrt(A*A+e*e)}function ye(A,e,B,n,s){return[[0,0],[0,e],[A,0],[A,e]].reduce(function(A,e){var t=e[0],r=e[1],r=Ie(B-t,n-r);return(s?r<A.optimumDistance:r>A.optimumDistance)?{optimumCorner:e,optimumDistance:r}:A},{optimumDistance:s?1/0:-1/0,optimumCorner:null}).optimumCorner}var Ke=function(A,e){var t=e.filter($A),r=t[0],B=t[1],n=t[2],e=t[3],t=(17===r.type?Ce(r.number):le(A,r))/(2*Math.PI),A=te(B)?B.number/100:0,r=te(n)?n.number/100:0,B=void 0!==e&&te(e)?Ue(e,1):1;if(0==A)return Fe(255*r,255*r,255*r,1);n=r<=.5?r*(1+A):r+A-r*A,e=2*r-n,A=de(e,n,t+1/3),r=de(e,n,t),t=de(e,n,t-1/3);return Fe(255*A,255*r,255*t,B)},me={hsl:Ke,hsla:Ke,rgb:he,rgba:he},Le={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},be={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(A,e){return e.map(function(A){if(_A(A))switch(A.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},De={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Ke=function(t,A){var r=Ce(180),B=[];return Ae(A).forEach(function(A,e){if(0===e){e=A[0];if(20===e.type&&-1!==["top","left","right","bottom"].indexOf(e.value))return void(r=se(A));if(ne(e))return void(r=(le(t,e)+Ce(270))%Ce(360))}A=He(t,A);B.push(A)}),{angle:r,stops:B,type:1}},ve="closest-side",xe="farthest-side",Me="closest-corner",Se="farthest-corner",Te="ellipse",Ge="contain",he=function(r,A){var B=0,n=3,s=[],o=[];return Ae(A).forEach(function(A,e){var t=!0;0===e?t=A.reduce(function(A,e){if(_A(e))switch(e.value){case"center":return o.push(ge),!1;case"top":case"left":return o.push(ae),!1;case"right":case"bottom":return o.push(we),!1}else if(te(e)||ee(e))return o.push(e),!1;return A},t):1===e&&(t=A.reduce(function(A,e){if(_A(e))switch(e.value){case"circle":return B=0,!1;case Te:return!(B=1);case Ge:case ve:return n=0,!1;case xe:return!(n=1);case Me:return!(n=2);case"cover":case Se:return!(n=3)}else if(ee(e)||te(e))return(n=!Array.isArray(n)?[]:n).push(e),!1;return A},t)),t&&(A=He(r,A),s.push(A))}),{size:n,shape:B,stops:s,position:o,type:2}},Oe=function(A,e){if(22===e.type){var t={url:e.value,type:0};return A.cache.addImage(e.value),t}if(18!==e.type)throw new Error("Unsupported image type "+e.type);t=ke[e.name];if(void 0===t)throw new Error('Attempting to parse an unsupported image function "'+e.name+'"');return t(A,e.values)};var Ve,ke={"linear-gradient":function(t,A){var r=Ce(180),B=[];return Ae(A).forEach(function(A,e){if(0===e){e=A[0];if(20===e.type&&"to"===e.value)return void(r=se(A));if(ne(e))return void(r=le(t,e))}A=He(t,A);B.push(A)}),{angle:r,stops:B,type:1}},"-moz-linear-gradient":Ke,"-ms-linear-gradient":Ke,"-o-linear-gradient":Ke,"-webkit-linear-gradient":Ke,"radial-gradient":function(B,A){var n=0,s=3,o=[],i=[];return Ae(A).forEach(function(A,e){var t,r=!0;0===e&&(t=!1,r=A.reduce(function(A,e){if(t)if(_A(e))switch(e.value){case"center":return i.push(ge),A;case"top":case"left":return i.push(ae),A;case"right":case"bottom":return i.push(we),A}else(te(e)||ee(e))&&i.push(e);else if(_A(e))switch(e.value){case"circle":return n=0,!1;case Te:return!(n=1);case"at":return!(t=!0);case ve:return s=0,!1;case"cover":case xe:return!(s=1);case Ge:case Me:return!(s=2);case Se:return!(s=3)}else if(ee(e)||te(e))return(s=!Array.isArray(s)?[]:s).push(e),!1;return A},r)),r&&(A=He(B,A),o.push(A))}),{size:s,shape:n,stops:o,position:i,type:2}},"-moz-radial-gradient":he,"-ms-radial-gradient":he,"-o-radial-gradient":he,"-webkit-radial-gradient":he,"-webkit-gradient":function(r,A){var e=Ce(180),B=[],n=1;return Ae(A).forEach(function(A,e){var t,A=A[0];if(0===e){if(_A(A)&&"linear"===A.value)return void(n=1);if(_A(A)&&"radial"===A.value)return void(n=2)}18===A.type&&("from"===A.name?(t=ue(r,A.values[0]),B.push({stop:ae,color:t})):"to"===A.name?(t=ue(r,A.values[0]),B.push({stop:we,color:t})):"color-stop"!==A.name||2===(A=A.values.filter($A)).length&&(t=ue(r,A[1]),A=A[0],ZA(A)&&B.push({stop:{type:16,number:100*A.number,flags:A.flags},color:t})))}),1===n?{angle:(e+Ce(180))%Ce(360),stops:B,type:n}:{size:3,shape:0,stops:B,position:[],type:n}}},Re={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(e,A){if(0===A.length)return[];var t=A[0];return 20===t.type&&"none"===t.value?[]:A.filter(function(A){return $A(A)&&!(20===(A=A).type&&"none"===A.value||18===A.type&&!ke[A.name])}).map(function(A){return Oe(e,A)})}},Ne={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(A,e){return e.map(function(A){if(_A(A))switch(A.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},Pe={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(A,e){return Ae(e).map(function(A){return A.filter(te)}).map(re)}},Xe={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(A,e){return Ae(e).map(function(A){return A.filter(_A).map(function(A){return A.value}).join(" ")}).map(Je)}},Je=function(A){switch(A){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;default:return 0}};(he=Ve=Ve||{}).AUTO="auto",he.CONTAIN="contain";function Ye(A,e){return _A(A)&&"normal"===A.value?1.2*e:17===A.type?e*A.number:te(A)?Ue(A,e):e}var We,Ze,_e={name:"background-size",initialValue:"0",prefix:!(he.COVER="cover"),type:1,parse:function(A,e){return Ae(e).map(function(A){return A.filter(qe)})}},qe=function(A){return _A(A)||te(A)},he=function(A){return{name:"border-"+A+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},je=he("top"),ze=he("right"),$e=he("bottom"),At=he("left"),he=function(A){return{name:"border-radius-"+A,initialValue:"0 0",prefix:!1,type:1,parse:function(A,e){return re(e.filter(te))}}},et=he("top-left"),tt=he("top-right"),rt=he("bottom-right"),Bt=he("bottom-left"),he=function(A){return{name:"border-"+A+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(A,e){switch(e){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},nt=he("top"),st=he("right"),ot=he("bottom"),it=he("left"),he=function(A){return{name:"border-"+A+"-width",initialValue:"0",type:0,prefix:!1,parse:function(A,e){return WA(e)?e.number:0}}},Qt=he("top"),ct=he("right"),at=he("bottom"),gt=he("left"),wt={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Ut={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(A,e){return"rtl"!==e?0:1}},lt={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(A,e){return e.filter(_A).reduce(function(A,e){return A|Ct(e.value)},0)}},Ct=function(A){switch(A){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},ut={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},Ft={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(A,e){return!(20===e.type&&"normal"===e.value||17!==e.type&&15!==e.type)?e.number:0}},ht={name:"line-break",initialValue:(he=We=We||{}).NORMAL="normal",prefix:!(he.STRICT="strict"),type:2,parse:function(A,e){return"strict"!==e?We.NORMAL:We.STRICT}},dt={name:"line-height",initialValue:"normal",prefix:!1,type:4},ft={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(A,e){return 20===e.type&&"none"===e.value?null:Oe(A,e)}},Ht={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(A,e){return"inside"!==e?1:0}},pt={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;default:return-1}}},he=function(A){return{name:"margin-"+A,initialValue:"0",prefix:!1,type:4}},Et=he("top"),It=he("right"),yt=he("bottom"),Kt=he("left"),mt={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(A,e){return e.filter(_A).map(function(A){switch(A.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;default:return 0}})}},Lt={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){return"break-word"!==e?"normal":"break-word"}},he=function(A){return{name:"padding-"+A,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},bt=he("top"),Dt=he("right"),vt=he("bottom"),xt=he("left"),Mt={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(A,e){switch(e){case"right":return 2;case"center":case"justify":return 1;default:return 0}}},St={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(A,e){switch(e){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},Tt={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(n,A){return 1===A.length&&jA(A[0],"none")?[]:Ae(A).map(function(A){for(var e={color:Le.TRANSPARENT,offsetX:ae,offsetY:ae,blur:ae},t=0,r=0;r<A.length;r++){var B=A[r];ee(B)?(0===t?e.offsetX=B:1===t?e.offsetY=B:e.blur=B,t++):e.color=ue(n,B)}return e})}},Gt={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},Ot={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(A,e){if(20===e.type&&"none"===e.value)return null;if(18!==e.type)return null;var t=Vt[e.name];if(void 0===t)throw new Error('Attempting to parse an unsupported transform function "'+e.name+'"');return t(e.values)}},Vt={matrix:function(A){A=A.filter(function(A){return 17===A.type}).map(function(A){return A.number});return 6===A.length?A:null},matrix3d:function(A){var e=A.filter(function(A){return 17===A.type}).map(function(A){return A.number}),t=e[0],r=e[1];e[2],e[3];var B=e[4],n=e[5];e[6],e[7],e[8],e[9],e[10],e[11];var s=e[12],A=e[13];return e[14],e[15],16===e.length?[t,r,B,n,s,A]:null}},he={type:16,number:50,flags:4},kt=[he,he],Rt={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(A,e){e=e.filter(te);return 2!==e.length?kt:[e[0],e[1]]}},Nt={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"hidden":return 1;case"collapse":return 2;default:return 0}}};(he=Ze=Ze||{}).NORMAL="normal",he.BREAK_ALL="break-all";function Pt(A,e){return 0!=(A&e)}function Xt(A,e,t){return(A=A&&A[Math.min(e,A.length-1)])?t?A.open:A.close:""}var Jt={name:"word-break",initialValue:"normal",prefix:!(he.KEEP_ALL="keep-all"),type:2,parse:function(A,e){switch(e){case"break-all":return Ze.BREAK_ALL;case"keep-all":return Ze.KEEP_ALL;default:return Ze.NORMAL}}},Yt={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(A,e){if(20===e.type)return{auto:!0,order:0};if(ZA(e))return{auto:!1,order:e.number};throw new Error("Invalid z-index number parsed")}},Wt=function(A,e){if(15===e.type)switch(e.unit.toLowerCase()){case"s":return 1e3*e.number;case"ms":return e.number}throw new Error("Unsupported time type")},Zt={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(A,e){return ZA(e)?e.number:1}},_t={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},qt={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(A,e){return e.filter(_A).map(function(A){switch(A.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(A){return 0!==A})}},jt={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(A,e){var t=[],r=[];return e.forEach(function(A){switch(A.type){case 20:case 0:t.push(A.value);break;case 17:t.push(A.number.toString());break;case 4:r.push(t.join(" ")),t.length=0}}),t.length&&r.push(t.join(" ")),r.map(function(A){return-1===A.indexOf(" ")?A:"'"+A+"'"})}},zt={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},$t={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(A,e){return ZA(e)?e.number:!_A(e)||"bold"!==e.value?400:700}},Ar={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.filter(_A).map(function(A){return A.value})}},er={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"oblique":return"oblique";case"italic":return"italic";default:return"normal"}}},tr={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(A,e){if(0===e.length)return[];var t=e[0];return 20===t.type&&"none"===t.value?[]:e}},rr={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(0===e.length)return null;var t=e[0];if(20===t.type&&"none"===t.value)return null;for(var r=[],B=e.filter(zA),n=0;n<B.length;n++){var s=B[n],o=B[n+1];20===s.type&&(o=o&&ZA(o)?o.number:1,r.push({counter:s.value,increment:o}))}return r}},Br={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(0===e.length)return[];for(var t=[],r=e.filter(zA),B=0;B<r.length;B++){var n=r[B],s=r[B+1];_A(n)&&"none"!==n.value&&(s=s&&ZA(s)?s.number:0,t.push({counter:n.value,reset:s}))}return t}},nr={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(e,A){return A.filter(WA).map(function(A){return Wt(e,A)})}},sr={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(0===e.length)return null;var t=e[0];if(20===t.type&&"none"===t.value)return null;var r=[],B=e.filter(qA);if(B.length%2!=0)return null;for(var n=0;n<B.length;n+=2){var s=B[n].value,o=B[n+1].value;r.push({open:s,close:o})}return r}},or={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(n,A){return 1===A.length&&jA(A[0],"none")?[]:Ae(A).map(function(A){for(var e={color:255,offsetX:ae,offsetY:ae,blur:ae,spread:ae,inset:!1},t=0,r=0;r<A.length;r++){var B=A[r];jA(B,"inset")?e.inset=!0:ee(B)?(0===t?e.offsetX=B:1===t?e.offsetY=B:2===t?e.blur=B:e.spread=B,t++):e.color=ue(n,B)}return e})}},ir={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(A,e){var t=[];return e.filter(_A).forEach(function(A){switch(A.value){case"stroke":t.push(1);break;case"fill":t.push(0);break;case"markers":t.push(2)}}),[0,1,2].forEach(function(A){-1===t.indexOf(A)&&t.push(A)}),t}},Qr={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},cr={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(A,e){return WA(e)?e.number:0}},ar=(gr.prototype.isVisible=function(){return 0<this.display&&0<this.opacity&&0===this.visibility},gr.prototype.isTransparent=function(){return oe(this.backgroundColor)},gr.prototype.isTransformed=function(){return null!==this.transform},gr.prototype.isPositioned=function(){return 0!==this.position},gr.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},gr.prototype.isFloating=function(){return 0!==this.float},gr.prototype.isInlineLevel=function(){return Pt(this.display,4)||Pt(this.display,33554432)||Pt(this.display,268435456)||Pt(this.display,536870912)||Pt(this.display,67108864)||Pt(this.display,134217728)},gr);function gr(A,e){this.animationDuration=lr(A,nr,e.animationDuration),this.backgroundClip=lr(A,be,e.backgroundClip),this.backgroundColor=lr(A,De,e.backgroundColor),this.backgroundImage=lr(A,Re,e.backgroundImage),this.backgroundOrigin=lr(A,Ne,e.backgroundOrigin),this.backgroundPosition=lr(A,Pe,e.backgroundPosition),this.backgroundRepeat=lr(A,Xe,e.backgroundRepeat),this.backgroundSize=lr(A,_e,e.backgroundSize),this.borderTopColor=lr(A,je,e.borderTopColor),this.borderRightColor=lr(A,ze,e.borderRightColor),this.borderBottomColor=lr(A,$e,e.borderBottomColor),this.borderLeftColor=lr(A,At,e.borderLeftColor),this.borderTopLeftRadius=lr(A,et,e.borderTopLeftRadius),this.borderTopRightRadius=lr(A,tt,e.borderTopRightRadius),this.borderBottomRightRadius=lr(A,rt,e.borderBottomRightRadius),this.borderBottomLeftRadius=lr(A,Bt,e.borderBottomLeftRadius),this.borderTopStyle=lr(A,nt,e.borderTopStyle),this.borderRightStyle=lr(A,st,e.borderRightStyle),this.borderBottomStyle=lr(A,ot,e.borderBottomStyle),this.borderLeftStyle=lr(A,it,e.borderLeftStyle),this.borderTopWidth=lr(A,Qt,e.borderTopWidth),this.borderRightWidth=lr(A,ct,e.borderRightWidth),this.borderBottomWidth=lr(A,at,e.borderBottomWidth),this.borderLeftWidth=lr(A,gt,e.borderLeftWidth),this.boxShadow=lr(A,or,e.boxShadow),this.color=lr(A,wt,e.color),this.direction=lr(A,Ut,e.direction),this.display=lr(A,lt,e.display),this.float=lr(A,ut,e.cssFloat),this.fontFamily=lr(A,jt,e.fontFamily),this.fontSize=lr(A,zt,e.fontSize),this.fontStyle=lr(A,er,e.fontStyle),this.fontVariant=lr(A,Ar,e.fontVariant),this.fontWeight=lr(A,$t,e.fontWeight),this.letterSpacing=lr(A,Ft,e.letterSpacing),this.lineBreak=lr(A,ht,e.lineBreak),this.lineHeight=lr(A,dt,e.lineHeight),this.listStyleImage=lr(A,ft,e.listStyleImage),this.listStylePosition=lr(A,Ht,e.listStylePosition),this.listStyleType=lr(A,pt,e.listStyleType),this.marginTop=lr(A,Et,e.marginTop),this.marginRight=lr(A,It,e.marginRight),this.marginBottom=lr(A,yt,e.marginBottom),this.marginLeft=lr(A,Kt,e.marginLeft),this.opacity=lr(A,Zt,e.opacity);var t=lr(A,mt,e.overflow);this.overflowX=t[0],this.overflowY=t[1<t.length?1:0],this.overflowWrap=lr(A,Lt,e.overflowWrap),this.paddingTop=lr(A,bt,e.paddingTop),this.paddingRight=lr(A,Dt,e.paddingRight),this.paddingBottom=lr(A,vt,e.paddingBottom),this.paddingLeft=lr(A,xt,e.paddingLeft),this.paintOrder=lr(A,ir,e.paintOrder),this.position=lr(A,St,e.position),this.textAlign=lr(A,Mt,e.textAlign),this.textDecorationColor=lr(A,_t,null!==(t=e.textDecorationColor)&&void 0!==t?t:e.color),this.textDecorationLine=lr(A,qt,null!==(t=e.textDecorationLine)&&void 0!==t?t:e.textDecoration),this.textShadow=lr(A,Tt,e.textShadow),this.textTransform=lr(A,Gt,e.textTransform),this.transform=lr(A,Ot,e.transform),this.transformOrigin=lr(A,Rt,e.transformOrigin),this.visibility=lr(A,Nt,e.visibility),this.webkitTextStrokeColor=lr(A,Qr,e.webkitTextStrokeColor),this.webkitTextStrokeWidth=lr(A,cr,e.webkitTextStrokeWidth),this.wordBreak=lr(A,Jt,e.wordBreak),this.zIndex=lr(A,Yt,e.zIndex)}for(var wr=function(A,e){this.content=lr(A,tr,e.content),this.quotes=lr(A,sr,e.quotes)},Ur=function(A,e){this.counterIncrement=lr(A,rr,e.counterIncrement),this.counterReset=lr(A,Br,e.counterReset)},lr=function(A,e,t){var r=new PA,t=null!=t?t.toString():e.initialValue;r.write(t);var B=new JA(r.read());switch(e.type){case 2:var n=B.parseComponentValue();return e.parse(A,_A(n)?n.value:e.initialValue);case 0:return e.parse(A,B.parseComponentValue());case 1:return e.parse(A,B.parseComponentValues());case 4:return B.parseComponentValue();case 3:switch(e.format){case"angle":return le(A,B.parseComponentValue());case"color":return ue(A,B.parseComponentValue());case"image":return Oe(A,B.parseComponentValue());case"length":var s=B.parseComponentValue();return ee(s)?s:ae;case"length-percentage":s=B.parseComponentValue();return te(s)?s:ae;case"time":return Wt(A,B.parseComponentValue())}}},Cr=function(A,e){A=function(A){switch(A.getAttribute("data-html2canvas-debug")){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}}(A);return 1===A||e===A},ur=function(A,e){this.context=A,this.textNodes=[],this.elements=[],this.flags=0,Cr(e,3),this.styles=new ar(A,window.getComputedStyle(e,null)),JB(e)&&(this.styles.animationDuration.some(function(A){return 0<A})&&(e.style.animationDuration="0s"),null!==this.styles.transform&&(e.style.transform="none")),this.bounds=f(this.context,e),Cr(e,4)&&(this.flags|=16)},Fr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",hr="undefined"==typeof Uint8Array?[]:new Uint8Array(256),dr=0;dr<Fr.length;dr++)hr[Fr.charCodeAt(dr)]=dr;function fr(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))}var Hr=(pr.prototype.get=function(A){var e;if(0<=A){if(A<55296||56319<A&&A<=65535)return e=this.index[A>>5],this.data[e=(e<<2)+(31&A)];if(A<=65535)return e=this.index[2048+(A-55296>>5)],this.data[e=(e<<2)+(31&A)];if(A<this.highStart)return e=this.index[e=2080+(A>>11)],e=this.index[e+=A>>5&63],this.data[e=(e<<2)+(31&A)];if(A<=1114111)return this.data[this.highValueIndex]}return this.errorValue},pr);function pr(A,e,t,r,B,n){this.initialValue=A,this.errorValue=e,this.highStart=t,this.highValueIndex=r,this.index=B,this.data=n}for(var Er="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ir="undefined"==typeof Uint8Array?[]:new Uint8Array(256),yr=0;yr<Er.length;yr++)Ir[Er.charCodeAt(yr)]=yr;function Kr(A){return kr.get(A)}function mr(A){var t=function(A){for(var e=[],t=0,r=A.length;t<r;){var B,n=A.charCodeAt(t++);55296<=n&&n<=56319&&t<r?56320==(64512&(B=A.charCodeAt(t++)))?e.push(((1023&n)<<10)+(1023&B)+65536):(e.push(n),t--):e.push(n)}return e}(A),r=t.length,B=0,n=0,s=t.map(Kr);return{next:function(){if(r<=B)return{done:!0,value:null};for(var A=Rr;B<r&&(A=function(A,e){var t=e-2,r=A[t],B=A[e-1],e=A[e];if(2===B&&3===e)return Rr;if(2===B||3===B||4===B)return"÷";if(2===e||3===e||4===e)return"÷";if(B===Tr&&-1!==[Tr,Gr,Or,Vr].indexOf(e))return Rr;if(!(B!==Or&&B!==Gr||e!==Gr&&10!==e))return Rr;if((B===Vr||10===B)&&10===e)return Rr;if(13===e||5===e)return Rr;if(7===e)return Rr;if(1===B)return Rr;if(13===B&&14===e){for(;5===r;)r=A[--t];if(14===r)return Rr}if(15===B&&15===e){for(var n=0;15===r;)n++,r=A[--t];if(n%2==0)return Rr}return"÷"}(s,++B))===Rr;);if(A===Rr&&B!==r)return{done:!0,value:null};var e=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var r=[],B=-1,n="";++B<t;){var s=A[B];s<=65535?r.push(s):(s-=65536,r.push(55296+(s>>10),s%1024+56320)),(B+1===t||16384<r.length)&&(n+=String.fromCharCode.apply(String,r),r.length=0)}return n}.apply(null,t.slice(n,B));return n=B,{value:e,done:!1}}}}function Lr(A){return 0===A[0]&&255===A[1]&&0===A[2]&&255===A[3]}var br,Dr,vr,xr,Mr,Sr,Tr=8,Gr=9,Or=11,Vr=12,kr=(vr=function(A){var e,t,r,B,n=.75*A.length,s=A.length,o=0;"="===A[A.length-1]&&(n--,"="===A[A.length-2]&&n--);for(var n=new("undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array&&void 0!==Uint8Array.prototype.slice?ArrayBuffer:Array)(n),i=Array.isArray(n)?n:new Uint8Array(n),Q=0;Q<s;Q+=4)e=hr[A.charCodeAt(Q)],t=hr[A.charCodeAt(Q+1)],r=hr[A.charCodeAt(Q+2)],B=hr[A.charCodeAt(Q+3)],i[o++]=e<<2|t>>4,i[o++]=(15&t)<<4|r>>2,i[o++]=(3&r)<<6|63&B;return n}(br="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA="),xr=Array.isArray(vr)?function(A){for(var e=A.length,t=[],r=0;r<e;r+=4)t.push(A[r+3]<<24|A[r+2]<<16|A[r+1]<<8|A[r]);return t}(vr):new Uint32Array(vr),Mr=Array.isArray(vr)?function(A){for(var e=A.length,t=[],r=0;r<e;r+=2)t.push(A[r+1]<<8|A[r]);return t}(vr):new Uint16Array(vr),br=fr(Mr,12,xr[4]/2),Dr=2===xr[5]?fr(Mr,(24+xr[4])/2):(vr=xr,Mr=Math.ceil((24+xr[4])/4),vr.slice?vr.slice(Mr,Dr):new Uint32Array(Array.prototype.slice.call(vr,Mr,Dr))),new Hr(xr[0],xr[1],xr[2],xr[3],br,Dr)),Rr="×",Nr=function(A,e,t,r,B){var n="http://www.w3.org/2000/svg",s=document.createElementNS(n,"svg"),n=document.createElementNS(n,"foreignObject");return s.setAttributeNS(null,"width",A.toString()),s.setAttributeNS(null,"height",e.toString()),n.setAttributeNS(null,"width","100%"),n.setAttributeNS(null,"height","100%"),n.setAttributeNS(null,"x",t.toString()),n.setAttributeNS(null,"y",r.toString()),n.setAttributeNS(null,"externalResourcesRequired","true"),s.appendChild(n),n.appendChild(B),s},Pr=function(r){return new Promise(function(A,e){var t=new Image;t.onload=function(){return A(t)},t.onerror=e,t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent((new XMLSerializer).serializeToString(r))})},Xr={get SUPPORT_RANGE_BOUNDS(){var A=function(A){if(A.createRange){var e=A.createRange();if(e.getBoundingClientRect){var t=A.createElement("boundtest");t.style.height="123px",t.style.display="block",A.body.appendChild(t),e.selectNode(t);e=e.getBoundingClientRect(),e=Math.round(e.height);if(A.body.removeChild(t),123===e)return!0}}return!1}(document);return Object.defineProperty(Xr,"SUPPORT_RANGE_BOUNDS",{value:A}),A},get SUPPORT_WORD_BREAKING(){var A=Xr.SUPPORT_RANGE_BOUNDS&&function(A){var e=A.createElement("boundtest");e.style.width="50px",e.style.display="block",e.style.fontSize="12px",e.style.letterSpacing="0px",e.style.wordSpacing="0px",A.body.appendChild(e);var r=A.createRange();e.innerHTML="function"==typeof"".repeat?"&#128104;".repeat(10):"";var B=e.firstChild,t=Q(B.data).map(function(A){return g(A)}),n=0,s={},t=t.every(function(A,e){r.setStart(B,n),r.setEnd(B,n+A.length);var t=r.getBoundingClientRect();n+=A.length;A=t.x>s.x||t.y>s.y;return s=t,0===e||A});return A.body.removeChild(e),t}(document);return Object.defineProperty(Xr,"SUPPORT_WORD_BREAKING",{value:A}),A},get SUPPORT_SVG_DRAWING(){var A=function(A){var e=new Image,t=A.createElement("canvas"),A=t.getContext("2d");if(!A)return!1;e.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{A.drawImage(e,0,0),t.toDataURL()}catch(A){return!1}return!0}(document);return Object.defineProperty(Xr,"SUPPORT_SVG_DRAWING",{value:A}),A},get SUPPORT_FOREIGNOBJECT_DRAWING(){var A="function"==typeof Array.from&&"function"==typeof window.fetch?function(t){var A=t.createElement("canvas"),r=100;A.width=r,A.height=r;var B=A.getContext("2d");if(!B)return Promise.reject(!1);B.fillStyle="rgb(0, 255, 0)",B.fillRect(0,0,r,r);var e=new Image,n=A.toDataURL();e.src=n;e=Nr(r,r,0,0,e);return B.fillStyle="red",B.fillRect(0,0,r,r),Pr(e).then(function(A){B.drawImage(A,0,0);var e=B.getImageData(0,0,r,r).data;B.fillStyle="red",B.fillRect(0,0,r,r);A=t.createElement("div");return A.style.backgroundImage="url("+n+")",A.style.height="100px",Lr(e)?Pr(Nr(r,r,0,0,A)):Promise.reject(!1)}).then(function(A){return B.drawImage(A,0,0),Lr(B.getImageData(0,0,r,r).data)}).catch(function(){return!1})}(document):Promise.resolve(!1);return Object.defineProperty(Xr,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:A}),A},get SUPPORT_CORS_IMAGES(){var A=void 0!==(new Image).crossOrigin;return Object.defineProperty(Xr,"SUPPORT_CORS_IMAGES",{value:A}),A},get SUPPORT_RESPONSE_TYPE(){var A="string"==typeof(new XMLHttpRequest).responseType;return Object.defineProperty(Xr,"SUPPORT_RESPONSE_TYPE",{value:A}),A},get SUPPORT_CORS_XHR(){var A="withCredentials"in new XMLHttpRequest;return Object.defineProperty(Xr,"SUPPORT_CORS_XHR",{value:A}),A},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var A=!("undefined"==typeof Intl||!Intl.Segmenter);return Object.defineProperty(Xr,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:A}),A}},Jr=function(A,e){this.text=A,this.bounds=e},Yr=function(A,e){var t=e.ownerDocument;if(t){var r=t.createElement("html2canvaswrapper");r.appendChild(e.cloneNode(!0));t=e.parentNode;if(t){t.replaceChild(r,e);A=f(A,r);return r.firstChild&&t.replaceChild(r.firstChild,r),A}}return d.EMPTY},Wr=function(A,e,t){var r=A.ownerDocument;if(!r)throw new Error("Node has no owner document");r=r.createRange();return r.setStart(A,e),r.setEnd(A,e+t),r},Zr=function(A){if(Xr.SUPPORT_NATIVE_TEXT_SEGMENTATION){var e=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(e.segment(A)).map(function(A){return A.segment})}return function(A){for(var e,t=mr(A),r=[];!(e=t.next()).done;)e.value&&r.push(e.value.slice());return r}(A)},_r=function(A,e){return 0!==e.letterSpacing?Zr(A):function(A,e){if(Xr.SUPPORT_NATIVE_TEXT_SEGMENTATION){var t=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(t.segment(A)).map(function(A){return A.segment})}return jr(A,e)}(A,e)},qr=[32,160,4961,65792,65793,4153,4241],jr=function(A,e){for(var t,r=wA(A,{lineBreak:e.lineBreak,wordBreak:"break-word"===e.overflowWrap?"break-word":e.wordBreak}),B=[];!(t=r.next()).done;)!function(){var A,e;t.value&&(A=t.value.slice(),A=Q(A),e="",A.forEach(function(A){-1===qr.indexOf(A)?e+=g(A):(e.length&&B.push(e),B.push(g(A)),e="")}),e.length&&B.push(e))}();return B},zr=function(A,e,t){var B,n,s,o,i;this.text=$r(e.data,t.textTransform),this.textBounds=(B=A,A=this.text,s=e,A=_r(A,n=t),o=[],i=0,A.forEach(function(A){var e,t,r;n.textDecorationLine.length||0<A.trim().length?Xr.SUPPORT_RANGE_BOUNDS?1<(r=Wr(s,i,A.length).getClientRects()).length?(e=Zr(A),t=0,e.forEach(function(A){o.push(new Jr(A,d.fromDOMRectList(B,Wr(s,t+i,A.length).getClientRects()))),t+=A.length})):o.push(new Jr(A,d.fromDOMRectList(B,r))):(r=s.splitText(A.length),o.push(new Jr(A,Yr(B,s))),s=r):Xr.SUPPORT_RANGE_BOUNDS||(s=s.splitText(A.length)),i+=A.length}),o)},$r=function(A,e){switch(e){case 1:return A.toLowerCase();case 3:return A.replace(AB,eB);case 2:return A.toUpperCase();default:return A}},AB=/(^|\s|:|-|\(|\))([a-z])/g,eB=function(A,e,t){return 0<A.length?e+t.toUpperCase():A},tB=(A(rB,Sr=ur),rB);function rB(A,e){A=Sr.call(this,A,e)||this;return A.src=e.currentSrc||e.src,A.intrinsicWidth=e.naturalWidth,A.intrinsicHeight=e.naturalHeight,A.context.cache.addImage(A.src),A}var BB,nB=(A(sB,BB=ur),sB);function sB(A,e){A=BB.call(this,A,e)||this;return A.canvas=e,A.intrinsicWidth=e.width,A.intrinsicHeight=e.height,A}var oB,iB=(A(QB,oB=ur),QB);function QB(A,e){var t=oB.call(this,A,e)||this,r=new XMLSerializer,A=f(A,e);return e.setAttribute("width",A.width+"px"),e.setAttribute("height",A.height+"px"),t.svg="data:image/svg+xml,"+encodeURIComponent(r.serializeToString(e)),t.intrinsicWidth=e.width.baseVal.value,t.intrinsicHeight=e.height.baseVal.value,t.context.cache.addImage(t.svg),t}var cB,aB=(A(gB,cB=ur),gB);function gB(A,e){A=cB.call(this,A,e)||this;return A.value=e.value,A}var wB,UB=(A(lB,wB=ur),lB);function lB(A,e){A=wB.call(this,A,e)||this;return A.start=e.start,A.reversed="boolean"==typeof e.reversed&&!0===e.reversed,A}var CB,uB=[{type:15,flags:0,unit:"px",number:3}],FB=[{type:16,flags:0,number:50}],hB="checkbox",dB="radio",fB="password",HB=707406591,pB=(A(EB,CB=ur),EB);function EB(A,e){var t=CB.call(this,A,e)||this;switch(t.type=e.type.toLowerCase(),t.checked=e.checked,t.value=0===(e=(A=e).type===fB?new Array(A.value.length+1).join("•"):A.value).length?A.placeholder||"":e,t.type!==hB&&t.type!==dB||(t.styles.backgroundColor=3739148031,t.styles.borderTopColor=t.styles.borderRightColor=t.styles.borderBottomColor=t.styles.borderLeftColor=2779096575,t.styles.borderTopWidth=t.styles.borderRightWidth=t.styles.borderBottomWidth=t.styles.borderLeftWidth=1,t.styles.borderTopStyle=t.styles.borderRightStyle=t.styles.borderBottomStyle=t.styles.borderLeftStyle=1,t.styles.backgroundClip=[0],t.styles.backgroundOrigin=[0],t.bounds=(e=t.bounds).width>e.height?new d(e.left+(e.width-e.height)/2,e.top,e.height,e.height):e.width<e.height?new d(e.left,e.top+(e.height-e.width)/2,e.width,e.width):e),t.type){case hB:t.styles.borderTopRightRadius=t.styles.borderTopLeftRadius=t.styles.borderBottomRightRadius=t.styles.borderBottomLeftRadius=uB;break;case dB:t.styles.borderTopRightRadius=t.styles.borderTopLeftRadius=t.styles.borderBottomRightRadius=t.styles.borderBottomLeftRadius=FB}return t}var IB,yB=(A(KB,IB=ur),KB);function KB(A,e){A=IB.call(this,A,e)||this,e=e.options[e.selectedIndex||0];return A.value=e&&e.text||"",A}var mB,LB=(A(bB,mB=ur),bB);function bB(A,e){A=mB.call(this,A,e)||this;return A.value=e.value,A}var DB,vB=(A(xB,DB=ur),xB);function xB(A,e){var t,r,B=DB.call(this,A,e)||this;B.src=e.src,B.width=parseInt(e.width,10)||0,B.height=parseInt(e.height,10)||0,B.backgroundColor=B.styles.backgroundColor;try{e.contentWindow&&e.contentWindow.document&&e.contentWindow.document.documentElement&&(B.tree=kB(A,e.contentWindow.document.documentElement),t=e.contentWindow.document.documentElement?fe(A,getComputedStyle(e.contentWindow.document.documentElement).backgroundColor):Le.TRANSPARENT,r=e.contentWindow.document.body?fe(A,getComputedStyle(e.contentWindow.document.body).backgroundColor):Le.TRANSPARENT,B.backgroundColor=oe(t)?oe(r)?B.styles.backgroundColor:r:t)}catch(A){}return B}function MB(A){return"VIDEO"===A.tagName}function SB(A){return"STYLE"===A.tagName}function TB(A){return 0<A.tagName.indexOf("-")}var GB=["OL","UL","MENU"],OB=function(e,A,t,r){for(var B=A.firstChild;B;B=s){var n,s=B.nextSibling;PB(B)&&0<B.data.trim().length?t.textNodes.push(new zr(e,B,t.styles)):XB(B)&&(rn(B)&&B.assignedNodes?B.assignedNodes().forEach(function(A){return OB(e,A,t,r)}):(n=VB(e,B)).styles.isVisible()&&(RB(B,n,r)?n.flags|=4:NB(n.styles)&&(n.flags|=2),-1!==GB.indexOf(B.tagName)&&(n.flags|=8),t.elements.push(n),B.slot,B.shadowRoot?OB(e,B.shadowRoot,n,r):en(B)||qB(B)||tn(B)||OB(e,B,n,r)))}},VB=function(A,e){return new($B(e)?tB:zB(e)?nB:qB(e)?iB:WB(e)?aB:ZB(e)?UB:_B(e)?pB:tn(e)?yB:en(e)?LB:An(e)?vB:ur)(A,e)},kB=function(A,e){var t=VB(A,e);return t.flags|=4,OB(A,e,t,t),t},RB=function(A,e,t){return e.styles.isPositionedWithZIndex()||e.styles.opacity<1||e.styles.isTransformed()||jB(A)&&t.styles.isTransparent()},NB=function(A){return A.isPositioned()||A.isFloating()},PB=function(A){return A.nodeType===Node.TEXT_NODE},XB=function(A){return A.nodeType===Node.ELEMENT_NODE},JB=function(A){return XB(A)&&void 0!==A.style&&!YB(A)},YB=function(A){return"object"==typeof A.className},WB=function(A){return"LI"===A.tagName},ZB=function(A){return"OL"===A.tagName},_B=function(A){return"INPUT"===A.tagName},qB=function(A){return"svg"===A.tagName},jB=function(A){return"BODY"===A.tagName},zB=function(A){return"CANVAS"===A.tagName},$B=function(A){return"IMG"===A.tagName},An=function(A){return"IFRAME"===A.tagName},en=function(A){return"TEXTAREA"===A.tagName},tn=function(A){return"SELECT"===A.tagName},rn=function(A){return"SLOT"===A.tagName},Bn=(nn.prototype.getCounterValue=function(A){A=this.counters[A];return A&&A.length?A[A.length-1]:1},nn.prototype.getCounterValues=function(A){A=this.counters[A];return A||[]},nn.prototype.pop=function(A){var e=this;A.forEach(function(A){return e.counters[A].pop()})},nn.prototype.parse=function(A){var t=this,e=A.counterIncrement,A=A.counterReset,r=!0;null!==e&&e.forEach(function(A){var e=t.counters[A.counter];e&&0!==A.increment&&(r=!1,e.length||e.push(1),e[Math.max(0,e.length-1)]+=A.increment)});var B=[];return r&&A.forEach(function(A){var e=t.counters[A.counter];B.push(A.counter),(e=e||(t.counters[A.counter]=[])).push(A.reset)}),B},nn);function nn(){this.counters={}}function sn(r,A,e,B,t,n){return r<A||e<r?Fn(r,t,0<n.length):B.integers.reduce(function(A,e,t){for(;e<=r;)r-=e,A+=B.values[t];return A},"")+n}function on(A,e,t,r){for(var B="";t||A--,B=r(A)+B,e<=(A/=e)*e;);return B}function Qn(A,e,t,r,B){var n=t-e+1;return(A<0?"-":"")+(on(Math.abs(A),n,r,function(A){return g(Math.floor(A%n)+e)})+B)}function cn(A,e,t){void 0===t&&(t=". ");var r=e.length;return on(Math.abs(A),r,!1,function(A){return e[Math.floor(A%r)]})+t}function an(A,e,t,r,B,n){if(A<-9999||9999<A)return Fn(A,4,0<B.length);var s=Math.abs(A),o=B;if(0===s)return e[0]+o;for(var i=0;0<s&&i<=4;i++){var Q=s%10;0==Q&&Pt(n,1)&&""!==o?o=e[Q]+o:1<Q||1==Q&&0===i||1==Q&&1===i&&Pt(n,2)||1==Q&&1===i&&Pt(n,4)&&100<A||1==Q&&1<i&&Pt(n,8)?o=e[Q]+(0<i?t[i-1]:"")+o:1==Q&&0<i&&(o=t[i-1]+o),s=Math.floor(s/10)}return(A<0?r:"")+o}var gn,wn={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},Un={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},ln={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},Cn={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},un="마이너스",Fn=function(A,e,t){var r=t?". ":"",B=t?"、":"",n=t?", ":"",s=t?" ":"";switch(e){case 0:return"•"+s;case 1:return"◦"+s;case 2:return"◾"+s;case 5:var o=Qn(A,48,57,!0,r);return o.length<4?"0"+o:o;case 4:return cn(A,"〇一二三四五六七八九",B);case 6:return sn(A,1,3999,wn,3,r).toLowerCase();case 7:return sn(A,1,3999,wn,3,r);case 8:return Qn(A,945,969,!1,r);case 9:return Qn(A,97,122,!1,r);case 10:return Qn(A,65,90,!1,r);case 11:return Qn(A,1632,1641,!0,r);case 12:case 49:return sn(A,1,9999,Un,3,r);case 35:return sn(A,1,9999,Un,3,r).toLowerCase();case 13:return Qn(A,2534,2543,!0,r);case 14:case 30:return Qn(A,6112,6121,!0,r);case 15:return cn(A,"子丑寅卯辰巳午未申酉戌亥",B);case 16:return cn(A,"甲乙丙丁戊己庚辛壬癸",B);case 17:case 48:return an(A,"零一二三四五六七八九","十百千萬","負",B,14);case 47:return an(A,"零壹貳參肆伍陸柒捌玖","拾佰仟萬","負",B,15);case 42:return an(A,"零一二三四五六七八九","十百千萬","负",B,14);case 41:return an(A,"零壹贰叁肆伍陆柒捌玖","拾佰仟萬","负",B,15);case 26:return an(A,"〇一二三四五六七八九","十百千万","マイナス",B,0);case 25:return an(A,"零壱弐参四伍六七八九","拾百千万","マイナス",B,7);case 31:return an(A,"영일이삼사오육칠팔구","십백천만",un,n,7);case 33:return an(A,"零一二三四五六七八九","十百千萬",un,n,0);case 32:return an(A,"零壹貳參四五六七八九","拾百千",un,n,7);case 18:return Qn(A,2406,2415,!0,r);case 20:return sn(A,1,19999,Cn,3,r);case 21:return Qn(A,2790,2799,!0,r);case 22:return Qn(A,2662,2671,!0,r);case 22:return sn(A,1,10999,ln,3,r);case 23:return cn(A,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return cn(A,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return Qn(A,3302,3311,!0,r);case 28:return cn(A,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",B);case 29:return cn(A,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",B);case 34:return Qn(A,3792,3801,!0,r);case 37:return Qn(A,6160,6169,!0,r);case 38:return Qn(A,4160,4169,!0,r);case 39:return Qn(A,2918,2927,!0,r);case 40:return Qn(A,1776,1785,!0,r);case 43:return Qn(A,3046,3055,!0,r);case 44:return Qn(A,3174,3183,!0,r);case 45:return Qn(A,3664,3673,!0,r);case 46:return Qn(A,3872,3881,!0,r);default:return Qn(A,48,57,!0,r)}},hn="data-html2canvas-ignore",dn=(fn.prototype.toIFrame=function(A,r){var e=this,B=pn(A,r);if(!B.contentWindow)return Promise.reject("Unable to find iframe window");var t=A.defaultView.pageXOffset,n=A.defaultView.pageYOffset,s=B.contentWindow,o=s.document,A=In(B).then(function(){return a(e,void 0,void 0,function(){var e,t;return H(this,function(A){switch(A.label){case 0:return this.scrolledElements.forEach(bn),s&&(s.scrollTo(r.left,r.top),!/(iPad|iPhone|iPod)/g.test(navigator.userAgent)||s.scrollY===r.top&&s.scrollX===r.left||(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(s.scrollX-r.left,s.scrollY-r.top,0,0))),e=this.options.onclone,void 0===(t=this.clonedReferenceElement)?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:o.fonts&&o.fonts.ready?[4,o.fonts.ready]:[3,2];case 1:A.sent(),A.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,En(o)]:[3,4];case 3:A.sent(),A.label=4;case 4:return"function"==typeof e?[2,Promise.resolve().then(function(){return e(o,t)}).then(function(){return B})]:[2,B]}})})});return o.open(),o.write(mn(document.doctype)+"<html></html>"),Ln(this.referenceElement.ownerDocument,t,n),o.replaceChild(o.adoptNode(this.documentElement),o.documentElement),o.close(),A},fn.prototype.createElementClone=function(A){if(Cr(A,2),zB(A))return this.createCanvasClone(A);if(MB(A))return this.createVideoClone(A);if(SB(A))return this.createStyleClone(A);var e=A.cloneNode(!1);return $B(e)&&($B(A)&&A.currentSrc&&A.currentSrc!==A.src&&(e.src=A.currentSrc,e.srcset=""),"lazy"===e.loading&&(e.loading="eager")),TB(e)?this.createCustomElementClone(e):e},fn.prototype.createCustomElementClone=function(A){var e=document.createElement("html2canvascustomelement");return Kn(A.style,e),e},fn.prototype.createStyleClone=function(A){try{var e=A.sheet;if(e&&e.cssRules){var t=[].slice.call(e.cssRules,0).reduce(function(A,e){return e&&"string"==typeof e.cssText?A+e.cssText:A},""),r=A.cloneNode(!1);return r.textContent=t,r}}catch(A){if(this.context.logger.error("Unable to access cssRules property",A),"SecurityError"!==A.name)throw A}return A.cloneNode(!1)},fn.prototype.createCanvasClone=function(e){var A;if(this.options.inlineImages&&e.ownerDocument){var t=e.ownerDocument.createElement("img");try{return t.src=e.toDataURL(),t}catch(A){this.context.logger.info("Unable to inline canvas contents, canvas is tainted",e)}}t=e.cloneNode(!1);try{t.width=e.width,t.height=e.height;var r,B,n=e.getContext("2d"),s=t.getContext("2d");return s&&(!this.options.allowTaint&&n?s.putImageData(n.getImageData(0,0,e.width,e.height),0,0):(!(r=null!==(A=e.getContext("webgl2"))&&void 0!==A?A:e.getContext("webgl"))||!1===(null==(B=r.getContextAttributes())?void 0:B.preserveDrawingBuffer)&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",e),s.drawImage(e,0,0))),t}catch(A){this.context.logger.info("Unable to clone canvas as it is tainted",e)}return t},fn.prototype.createVideoClone=function(e){var A=e.ownerDocument.createElement("canvas");A.width=e.offsetWidth,A.height=e.offsetHeight;var t=A.getContext("2d");try{return t&&(t.drawImage(e,0,0,A.width,A.height),this.options.allowTaint||t.getImageData(0,0,A.width,A.height)),A}catch(A){this.context.logger.info("Unable to clone video as it is tainted",e)}A=e.ownerDocument.createElement("canvas");return A.width=e.offsetWidth,A.height=e.offsetHeight,A},fn.prototype.appendChildNode=function(A,e,t){XB(e)&&("SCRIPT"===e.tagName||e.hasAttribute(hn)||"function"==typeof this.options.ignoreElements&&this.options.ignoreElements(e))||this.options.copyStyles&&XB(e)&&SB(e)||A.appendChild(this.cloneNode(e,t))},fn.prototype.cloneChildNodes=function(A,e,t){for(var r,B=this,n=(A.shadowRoot||A).firstChild;n;n=n.nextSibling)XB(n)&&rn(n)&&"function"==typeof n.assignedNodes?(r=n.assignedNodes()).length&&r.forEach(function(A){return B.appendChildNode(e,A,t)}):this.appendChildNode(e,n,t)},fn.prototype.cloneNode=function(A,e){if(PB(A))return document.createTextNode(A.data);if(!A.ownerDocument)return A.cloneNode(!1);var t=A.ownerDocument.defaultView;if(t&&XB(A)&&(JB(A)||YB(A))){var r=this.createElementClone(A);r.style.transitionProperty="none";var B=t.getComputedStyle(A),n=t.getComputedStyle(A,":before"),s=t.getComputedStyle(A,":after");this.referenceElement===A&&JB(r)&&(this.clonedReferenceElement=r),jB(r)&&Mn(r);t=this.counters.parse(new Ur(this.context,B)),n=this.resolvePseudoContent(A,r,n,gn.BEFORE);TB(A)&&(e=!0),MB(A)||this.cloneChildNodes(A,r,e),n&&r.insertBefore(n,r.firstChild);s=this.resolvePseudoContent(A,r,s,gn.AFTER);return s&&r.appendChild(s),this.counters.pop(t),(B&&(this.options.copyStyles||YB(A))&&!An(A)||e)&&Kn(B,r),0===A.scrollTop&&0===A.scrollLeft||this.scrolledElements.push([r,A.scrollLeft,A.scrollTop]),(en(A)||tn(A))&&(en(r)||tn(r))&&(r.value=A.value),r}return A.cloneNode(!1)},fn.prototype.resolvePseudoContent=function(o,A,e,t){var i=this;if(e){var r=e.content,Q=A.ownerDocument;if(Q&&r&&"none"!==r&&"-moz-alt-content"!==r&&"none"!==e.display){this.counters.parse(new Ur(this.context,e));var c=new wr(this.context,e),a=Q.createElement("html2canvaspseudoelement");Kn(e,a),c.content.forEach(function(A){if(0===A.type)a.appendChild(Q.createTextNode(A.value));else if(22===A.type){var e=Q.createElement("img");e.src=A.value,e.style.opacity="1",a.appendChild(e)}else if(18===A.type){var t,r,B,n,s;"attr"===A.name?(e=A.values.filter(_A)).length&&a.appendChild(Q.createTextNode(o.getAttribute(e[0].value)||"")):"counter"===A.name?(B=(r=A.values.filter($A))[0],r=r[1],B&&_A(B)&&(t=i.counters.getCounterValue(B.value),s=r&&_A(r)?pt.parse(i.context,r.value):3,a.appendChild(Q.createTextNode(Fn(t,s,!1))))):"counters"===A.name&&(B=(t=A.values.filter($A))[0],s=t[1],r=t[2],B&&_A(B)&&(B=i.counters.getCounterValues(B.value),n=r&&_A(r)?pt.parse(i.context,r.value):3,s=s&&0===s.type?s.value:"",s=B.map(function(A){return Fn(A,n,!1)}).join(s),a.appendChild(Q.createTextNode(s))))}else if(20===A.type)switch(A.value){case"open-quote":a.appendChild(Q.createTextNode(Xt(c.quotes,i.quoteDepth++,!0)));break;case"close-quote":a.appendChild(Q.createTextNode(Xt(c.quotes,--i.quoteDepth,!1)));break;default:a.appendChild(Q.createTextNode(A.value))}}),a.className=Dn+" "+vn;t=t===gn.BEFORE?" "+Dn:" "+vn;return YB(A)?A.className.baseValue+=t:A.className+=t,a}}},fn.destroy=function(A){return!!A.parentNode&&(A.parentNode.removeChild(A),!0)},fn);function fn(A,e,t){if(this.context=A,this.options=t,this.scrolledElements=[],this.referenceElement=e,this.counters=new Bn,this.quoteDepth=0,!e.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(e.ownerDocument.documentElement,!1)}(he=gn=gn||{})[he.BEFORE=0]="BEFORE",he[he.AFTER=1]="AFTER";function Hn(e){return new Promise(function(A){!e.complete&&e.src?(e.onload=A,e.onerror=A):A()})}var pn=function(A,e){var t=A.createElement("iframe");return t.className="html2canvas-container",t.style.visibility="hidden",t.style.position="fixed",t.style.left="-10000px",t.style.top="0px",t.style.border="0",t.width=e.width.toString(),t.height=e.height.toString(),t.scrolling="no",t.setAttribute(hn,"true"),A.body.appendChild(t),t},En=function(A){return Promise.all([].slice.call(A.images,0).map(Hn))},In=function(B){return new Promise(function(e,A){var t=B.contentWindow;if(!t)return A("No window assigned for iframe");var r=t.document;t.onload=B.onload=function(){t.onload=B.onload=null;var A=setInterval(function(){0<r.body.childNodes.length&&"complete"===r.readyState&&(clearInterval(A),e(B))},50)}})},yn=["all","d","content"],Kn=function(A,e){for(var t=A.length-1;0<=t;t--){var r=A.item(t);-1===yn.indexOf(r)&&e.style.setProperty(r,A.getPropertyValue(r))}return e},mn=function(A){var e="";return A&&(e+="<!DOCTYPE ",A.name&&(e+=A.name),A.internalSubset&&(e+=A.internalSubset),A.publicId&&(e+='"'+A.publicId+'"'),A.systemId&&(e+='"'+A.systemId+'"'),e+=">"),e},Ln=function(A,e,t){A&&A.defaultView&&(e!==A.defaultView.pageXOffset||t!==A.defaultView.pageYOffset)&&A.defaultView.scrollTo(e,t)},bn=function(A){var e=A[0],t=A[1],A=A[2];e.scrollLeft=t,e.scrollTop=A},Dn="___html2canvas___pseudoelement_before",vn="___html2canvas___pseudoelement_after",xn='{\n    content: "" !important;\n    display: none !important;\n}',Mn=function(A){Sn(A,"."+Dn+":before"+xn+"\n         ."+vn+":after"+xn)},Sn=function(A,e){var t=A.ownerDocument;t&&((t=t.createElement("style")).textContent=e,A.appendChild(t))},Tn=(Gn.getOrigin=function(A){var e=Gn._link;return e?(e.href=A,e.href=e.href,e.protocol+e.hostname+e.port):"about:blank"},Gn.isSameOrigin=function(A){return Gn.getOrigin(A)===Gn._origin},Gn.setContext=function(A){Gn._link=A.document.createElement("a"),Gn._origin=Gn.getOrigin(A.location.href)},Gn._origin="about:blank",Gn);function Gn(){}var On=(Vn.prototype.addImage=function(A){var e=Promise.resolve();return this.has(A)||(Yn(A)||Pn(A))&&(this._cache[A]=this.loadImage(A)).catch(function(){}),e},Vn.prototype.match=function(A){return this._cache[A]},Vn.prototype.loadImage=function(s){return a(this,void 0,void 0,function(){var e,r,t,B,n=this;return H(this,function(A){switch(A.label){case 0:return(e=Tn.isSameOrigin(s),r=!Xn(s)&&!0===this._options.useCORS&&Xr.SUPPORT_CORS_IMAGES&&!e,t=!Xn(s)&&!e&&!Yn(s)&&"string"==typeof this._options.proxy&&Xr.SUPPORT_CORS_XHR&&!r,e||!1!==this._options.allowTaint||Xn(s)||Yn(s)||t||r)?(B=s,t?[4,this.proxy(B)]:[3,2]):[2];case 1:B=A.sent(),A.label=2;case 2:return this.context.logger.debug("Added image "+s.substring(0,256)),[4,new Promise(function(A,e){var t=new Image;t.onload=function(){return A(t)},t.onerror=e,(Jn(B)||r)&&(t.crossOrigin="anonymous"),t.src=B,!0===t.complete&&setTimeout(function(){return A(t)},500),0<n._options.imageTimeout&&setTimeout(function(){return e("Timed out ("+n._options.imageTimeout+"ms) loading image")},n._options.imageTimeout)})];case 3:return[2,A.sent()]}})})},Vn.prototype.has=function(A){return void 0!==this._cache[A]},Vn.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},Vn.prototype.proxy=function(s){var o=this,i=this._options.proxy;if(!i)throw new Error("No proxy defined");var Q=s.substring(0,256);return new Promise(function(e,t){var r=Xr.SUPPORT_RESPONSE_TYPE?"blob":"text",B=new XMLHttpRequest;B.onload=function(){var A;200===B.status?"text"==r?e(B.response):((A=new FileReader).addEventListener("load",function(){return e(A.result)},!1),A.addEventListener("error",function(A){return t(A)},!1),A.readAsDataURL(B.response)):t("Failed to proxy resource "+Q+" with status code "+B.status)},B.onerror=t;var A,n=-1<i.indexOf("?")?"&":"?";B.open("GET",i+n+"url="+encodeURIComponent(s)+"&responseType="+r),"text"!=r&&B instanceof XMLHttpRequest&&(B.responseType=r),o._options.imageTimeout&&(A=o._options.imageTimeout,B.timeout=A,B.ontimeout=function(){return t("Timed out ("+A+"ms) proxying "+Q)}),B.send()})},Vn);function Vn(A,e){this.context=A,this._options=e,this._cache={}}var kn=/^data:image\/svg\+xml/i,Rn=/^data:image\/.*;base64,/i,Nn=/^data:image\/.*/i,Pn=function(A){return Xr.SUPPORT_SVG_DRAWING||!Wn(A)},Xn=function(A){return Nn.test(A)},Jn=function(A){return Rn.test(A)},Yn=function(A){return"blob"===A.substr(0,4)},Wn=function(A){return"svg"===A.substr(-3).toLowerCase()||kn.test(A)},Zn=(_n.prototype.add=function(A,e){return new _n(this.x+A,this.y+e)},_n);function _n(A,e){this.type=0,this.x=A,this.y=e}function qn(A,e,t){return new Zn(A.x+(e.x-A.x)*t,A.y+(e.y-A.y)*t)}var jn=(zn.prototype.subdivide=function(A,e){var t=qn(this.start,this.startControl,A),r=qn(this.startControl,this.endControl,A),B=qn(this.endControl,this.end,A),n=qn(t,r,A),r=qn(r,B,A),A=qn(n,r,A);return e?new zn(this.start,t,n,A):new zn(A,r,B,this.end)},zn.prototype.add=function(A,e){return new zn(this.start.add(A,e),this.startControl.add(A,e),this.endControl.add(A,e),this.end.add(A,e))},zn.prototype.reverse=function(){return new zn(this.end,this.endControl,this.startControl,this.start)},zn);function zn(A,e,t,r){this.type=1,this.start=A,this.startControl=e,this.endControl=t,this.end=r}function $n(A){return 1===A.type}var As,es=function(A){var e=A.styles,t=A.bounds,r=(C=Be(e.borderTopLeftRadius,t.width,t.height))[0],B=C[1],n=(u=Be(e.borderTopRightRadius,t.width,t.height))[0],s=u[1],o=(F=Be(e.borderBottomRightRadius,t.width,t.height))[0],i=F[1],Q=(h=Be(e.borderBottomLeftRadius,t.width,t.height))[0],c=h[1];(d=[]).push((r+n)/t.width),d.push((Q+o)/t.width),d.push((B+c)/t.height),d.push((s+i)/t.height),1<(f=Math.max.apply(Math,d))&&(r/=f,B/=f,n/=f,s/=f,o/=f,i/=f,Q/=f,c/=f);var a=t.width-n,g=t.height-i,w=t.width-o,U=t.height-c,l=e.borderTopWidth,C=e.borderRightWidth,u=e.borderBottomWidth,F=e.borderLeftWidth,h=Ue(e.paddingTop,A.bounds.width),d=Ue(e.paddingRight,A.bounds.width),f=Ue(e.paddingBottom,A.bounds.width),A=Ue(e.paddingLeft,A.bounds.width);this.topLeftBorderDoubleOuterBox=0<r||0<B?ss(t.left+F/3,t.top+l/3,r-F/3,B-l/3,As.TOP_LEFT):new Zn(t.left+F/3,t.top+l/3),this.topRightBorderDoubleOuterBox=0<r||0<B?ss(t.left+a,t.top+l/3,n-C/3,s-l/3,As.TOP_RIGHT):new Zn(t.left+t.width-C/3,t.top+l/3),this.bottomRightBorderDoubleOuterBox=0<o||0<i?ss(t.left+w,t.top+g,o-C/3,i-u/3,As.BOTTOM_RIGHT):new Zn(t.left+t.width-C/3,t.top+t.height-u/3),this.bottomLeftBorderDoubleOuterBox=0<Q||0<c?ss(t.left+F/3,t.top+U,Q-F/3,c-u/3,As.BOTTOM_LEFT):new Zn(t.left+F/3,t.top+t.height-u/3),this.topLeftBorderDoubleInnerBox=0<r||0<B?ss(t.left+2*F/3,t.top+2*l/3,r-2*F/3,B-2*l/3,As.TOP_LEFT):new Zn(t.left+2*F/3,t.top+2*l/3),this.topRightBorderDoubleInnerBox=0<r||0<B?ss(t.left+a,t.top+2*l/3,n-2*C/3,s-2*l/3,As.TOP_RIGHT):new Zn(t.left+t.width-2*C/3,t.top+2*l/3),this.bottomRightBorderDoubleInnerBox=0<o||0<i?ss(t.left+w,t.top+g,o-2*C/3,i-2*u/3,As.BOTTOM_RIGHT):new Zn(t.left+t.width-2*C/3,t.top+t.height-2*u/3),this.bottomLeftBorderDoubleInnerBox=0<Q||0<c?ss(t.left+2*F/3,t.top+U,Q-2*F/3,c-2*u/3,As.BOTTOM_LEFT):new Zn(t.left+2*F/3,t.top+t.height-2*u/3),this.topLeftBorderStroke=0<r||0<B?ss(t.left+F/2,t.top+l/2,r-F/2,B-l/2,As.TOP_LEFT):new Zn(t.left+F/2,t.top+l/2),this.topRightBorderStroke=0<r||0<B?ss(t.left+a,t.top+l/2,n-C/2,s-l/2,As.TOP_RIGHT):new Zn(t.left+t.width-C/2,t.top+l/2),this.bottomRightBorderStroke=0<o||0<i?ss(t.left+w,t.top+g,o-C/2,i-u/2,As.BOTTOM_RIGHT):new Zn(t.left+t.width-C/2,t.top+t.height-u/2),this.bottomLeftBorderStroke=0<Q||0<c?ss(t.left+F/2,t.top+U,Q-F/2,c-u/2,As.BOTTOM_LEFT):new Zn(t.left+F/2,t.top+t.height-u/2),this.topLeftBorderBox=0<r||0<B?ss(t.left,t.top,r,B,As.TOP_LEFT):new Zn(t.left,t.top),this.topRightBorderBox=0<n||0<s?ss(t.left+a,t.top,n,s,As.TOP_RIGHT):new Zn(t.left+t.width,t.top),this.bottomRightBorderBox=0<o||0<i?ss(t.left+w,t.top+g,o,i,As.BOTTOM_RIGHT):new Zn(t.left+t.width,t.top+t.height),this.bottomLeftBorderBox=0<Q||0<c?ss(t.left,t.top+U,Q,c,As.BOTTOM_LEFT):new Zn(t.left,t.top+t.height),this.topLeftPaddingBox=0<r||0<B?ss(t.left+F,t.top+l,Math.max(0,r-F),Math.max(0,B-l),As.TOP_LEFT):new Zn(t.left+F,t.top+l),this.topRightPaddingBox=0<n||0<s?ss(t.left+Math.min(a,t.width-C),t.top+l,a>t.width+C?0:Math.max(0,n-C),Math.max(0,s-l),As.TOP_RIGHT):new Zn(t.left+t.width-C,t.top+l),this.bottomRightPaddingBox=0<o||0<i?ss(t.left+Math.min(w,t.width-F),t.top+Math.min(g,t.height-u),Math.max(0,o-C),Math.max(0,i-u),As.BOTTOM_RIGHT):new Zn(t.left+t.width-C,t.top+t.height-u),this.bottomLeftPaddingBox=0<Q||0<c?ss(t.left+F,t.top+Math.min(U,t.height-u),Math.max(0,Q-F),Math.max(0,c-u),As.BOTTOM_LEFT):new Zn(t.left+F,t.top+t.height-u),this.topLeftContentBox=0<r||0<B?ss(t.left+F+A,t.top+l+h,Math.max(0,r-(F+A)),Math.max(0,B-(l+h)),As.TOP_LEFT):new Zn(t.left+F+A,t.top+l+h),this.topRightContentBox=0<n||0<s?ss(t.left+Math.min(a,t.width+F+A),t.top+l+h,a>t.width+F+A?0:n-F+A,s-(l+h),As.TOP_RIGHT):new Zn(t.left+t.width-(C+d),t.top+l+h),this.bottomRightContentBox=0<o||0<i?ss(t.left+Math.min(w,t.width-(F+A)),t.top+Math.min(g,t.height+l+h),Math.max(0,o-(C+d)),i-(u+f),As.BOTTOM_RIGHT):new Zn(t.left+t.width-(C+d),t.top+t.height-(u+f)),this.bottomLeftContentBox=0<Q||0<c?ss(t.left+F+A,t.top+U,Math.max(0,Q-(F+A)),c-(u+f),As.BOTTOM_LEFT):new Zn(t.left+F+A,t.top+t.height-(u+f))};(he=As=As||{})[he.TOP_LEFT=0]="TOP_LEFT",he[he.TOP_RIGHT=1]="TOP_RIGHT",he[he.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",he[he.BOTTOM_LEFT=3]="BOTTOM_LEFT";function ts(A){return[A.topLeftBorderBox,A.topRightBorderBox,A.bottomRightBorderBox,A.bottomLeftBorderBox]}function rs(A){return[A.topLeftPaddingBox,A.topRightPaddingBox,A.bottomRightPaddingBox,A.bottomLeftPaddingBox]}function Bs(A){return 1===A.type}function ns(A,t){return A.length===t.length&&A.some(function(A,e){return A===t[e]})}var ss=function(A,e,t,r,B){var n=(Math.sqrt(2)-1)/3*4,s=t*n,o=r*n,i=A+t,Q=e+r;switch(B){case As.TOP_LEFT:return new jn(new Zn(A,Q),new Zn(A,Q-o),new Zn(i-s,e),new Zn(i,e));case As.TOP_RIGHT:return new jn(new Zn(A,e),new Zn(A+s,e),new Zn(i,Q-o),new Zn(i,Q));case As.BOTTOM_RIGHT:return new jn(new Zn(i,e),new Zn(i,e+o),new Zn(A+s,Q),new Zn(A,Q));default:As.BOTTOM_LEFT;return new jn(new Zn(i,Q),new Zn(i-s,Q),new Zn(A,e+o),new Zn(A,e))}},os=function(A,e,t){this.offsetX=A,this.offsetY=e,this.matrix=t,this.type=0,this.target=6},is=function(A,e){this.path=A,this.target=e,this.type=1},Qs=function(A){this.opacity=A,this.type=2,this.target=6},cs=function(A){this.element=A,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]},as=(gs.prototype.getEffects=function(e){for(var A=-1===[2,3].indexOf(this.container.styles.position),t=this.parent,r=this.effects.slice(0);t;){var B,n,s=t.effects.filter(function(A){return!Bs(A)});A||0!==t.container.styles.position||!t.parent?(r.unshift.apply(r,s),A=-1===[2,3].indexOf(t.container.styles.position),0!==t.container.styles.overflowX&&(B=ts(t.curves),n=rs(t.curves),ns(B,n)||r.unshift(new is(n,6)))):r.unshift.apply(r,s),t=t.parent}return r.filter(function(A){return Pt(A.target,e)})},gs);function gs(A,e){var t,r;this.container=A,this.parent=e,this.effects=[],this.curves=new es(this.container),this.container.styles.opacity<1&&this.effects.push(new Qs(this.container.styles.opacity)),null!==this.container.styles.transform&&(e=this.container.bounds.left+this.container.styles.transformOrigin[0].number,t=this.container.bounds.top+this.container.styles.transformOrigin[1].number,r=this.container.styles.transform,this.effects.push(new os(e,t,r))),0!==this.container.styles.overflowX&&(t=ts(this.curves),r=rs(this.curves),ns(t,r)?this.effects.push(new is(t,6)):(this.effects.push(new is(t,2)),this.effects.push(new is(r,4))))}function ws(A,e){switch(e){case 0:return Hs(A.topLeftBorderBox,A.topLeftPaddingBox,A.topRightBorderBox,A.topRightPaddingBox);case 1:return Hs(A.topRightBorderBox,A.topRightPaddingBox,A.bottomRightBorderBox,A.bottomRightPaddingBox);case 2:return Hs(A.bottomRightBorderBox,A.bottomRightPaddingBox,A.bottomLeftBorderBox,A.bottomLeftPaddingBox);default:return Hs(A.bottomLeftBorderBox,A.bottomLeftPaddingBox,A.topLeftBorderBox,A.topLeftPaddingBox)}}function Us(A){var e=A.bounds,A=A.styles;return e.add(A.borderLeftWidth,A.borderTopWidth,-(A.borderRightWidth+A.borderLeftWidth),-(A.borderTopWidth+A.borderBottomWidth))}function ls(A){var e=A.styles,t=A.bounds,r=Ue(e.paddingLeft,t.width),B=Ue(e.paddingRight,t.width),n=Ue(e.paddingTop,t.width),A=Ue(e.paddingBottom,t.width);return t.add(r+e.borderLeftWidth,n+e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth+r+B),-(e.borderTopWidth+e.borderBottomWidth+n+A))}function Cs(A,e,t){var r=(B=Es(A.styles.backgroundOrigin,e),n=A,0===B?n.bounds:(2===B?ls:Us)(n)),B=(s=Es(A.styles.backgroundClip,e),o=A,0===s?o.bounds:(2===s?ls:Us)(o)),n=ps(Es(A.styles.backgroundSize,e),t,r),s=n[0],o=n[1],t=Be(Es(A.styles.backgroundPosition,e),r.width-s,r.height-o);return[Is(Es(A.styles.backgroundRepeat,e),t,n,r,B),Math.round(r.left+t[0]),Math.round(r.top+t[1]),s,o]}function us(A){return _A(A)&&A.value===Ve.AUTO}function Fs(A){return"number"==typeof A}var hs=function(Q,c,a,g){Q.container.elements.forEach(function(A){var e=Pt(A.flags,4),t=Pt(A.flags,2),r=new as(A,Q);Pt(A.styles.display,2048)&&g.push(r);var B,n,s,o,i=Pt(A.flags,8)?[]:g;e||t?(B=e||A.styles.isPositioned()?a:c,t=new cs(r),A.styles.isPositioned()||A.styles.opacity<1||A.styles.isTransformed()?(n=A.styles.zIndex.order)<0?(s=0,B.negativeZIndex.some(function(A,e){return n>A.element.container.styles.zIndex.order?(s=e,!1):0<s}),B.negativeZIndex.splice(s,0,t)):0<n?(o=0,B.positiveZIndex.some(function(A,e){return n>=A.element.container.styles.zIndex.order?(o=e+1,!1):0<o}),B.positiveZIndex.splice(o,0,t)):B.zeroOrAutoZIndexOrTransformedOrOpacity.push(t):(A.styles.isFloating()?B.nonPositionedFloats:B.nonPositionedInlineLevel).push(t),hs(r,t,e?t:a,i)):((A.styles.isInlineLevel()?c.inlineLevel:c.nonInlineLevel).push(r),hs(r,c,a,i)),Pt(A.flags,8)&&ds(A,i)})},ds=function(A,e){for(var t=A instanceof UB?A.start:1,r=A instanceof UB&&A.reversed,B=0;B<e.length;B++){var n=e[B];n.container instanceof aB&&"number"==typeof n.container.value&&0!==n.container.value&&(t=n.container.value),n.listValue=Fn(t,n.container.styles.listStyleType,!0),t+=r?-1:1}},fs=function(A,e){var t=[];return $n(A)?t.push(A.subdivide(.5,!1)):t.push(A),$n(e)?t.push(e.subdivide(.5,!0)):t.push(e),t},Hs=function(A,e,t,r){var B=[];return $n(A)?B.push(A.subdivide(.5,!1)):B.push(A),$n(t)?B.push(t.subdivide(.5,!0)):B.push(t),$n(r)?B.push(r.subdivide(.5,!0).reverse()):B.push(r),$n(e)?B.push(e.subdivide(.5,!1).reverse()):B.push(e),B},ps=function(A,e,t){var r=e[0],B=e[1],n=e[2],s=A[0],o=A[1];if(!s)return[0,0];if(te(s)&&o&&te(o))return[Ue(s,t.width),Ue(o,t.height)];var i=Fs(n);if(_A(s)&&(s.value===Ve.CONTAIN||s.value===Ve.COVER))return Fs(n)?t.width/t.height<n!=(s.value===Ve.COVER)?[t.width,t.width/n]:[t.height*n,t.height]:[t.width,t.height];var Q=Fs(r),e=Fs(B),A=Q||e;if(us(s)&&(!o||us(o)))return Q&&e?[r,B]:i||A?A&&i?[Q?r:B*n,e?B:r/n]:[Q?r:t.width,e?B:t.height]:[t.width,t.height];if(i){var c=0,a=0;return te(s)?c=Ue(s,t.width):te(o)&&(a=Ue(o,t.height)),us(s)?c=a*n:o&&!us(o)||(a=c/n),[c,a]}c=null,a=null;if(te(s)?c=Ue(s,t.width):o&&te(o)&&(a=Ue(o,t.height)),null!==(c=null!==(a=null!==c&&(!o||us(o))?Q&&e?c/r*B:t.height:a)&&us(s)?Q&&e?a/B*r:t.width:c)&&null!==a)return[c,a];throw new Error("Unable to calculate background-size for element")},Es=function(A,e){e=A[e];return void 0===e?A[0]:e},Is=function(A,e,t,r,B){var n=e[0],s=e[1],o=t[0],i=t[1];switch(A){case 2:return[new Zn(Math.round(r.left),Math.round(r.top+s)),new Zn(Math.round(r.left+r.width),Math.round(r.top+s)),new Zn(Math.round(r.left+r.width),Math.round(i+r.top+s)),new Zn(Math.round(r.left),Math.round(i+r.top+s))];case 3:return[new Zn(Math.round(r.left+n),Math.round(r.top)),new Zn(Math.round(r.left+n+o),Math.round(r.top)),new Zn(Math.round(r.left+n+o),Math.round(r.height+r.top)),new Zn(Math.round(r.left+n),Math.round(r.height+r.top))];case 1:return[new Zn(Math.round(r.left+n),Math.round(r.top+s)),new Zn(Math.round(r.left+n+o),Math.round(r.top+s)),new Zn(Math.round(r.left+n+o),Math.round(r.top+s+i)),new Zn(Math.round(r.left+n),Math.round(r.top+s+i))];default:return[new Zn(Math.round(B.left),Math.round(B.top)),new Zn(Math.round(B.left+B.width),Math.round(B.top)),new Zn(Math.round(B.left+B.width),Math.round(B.height+B.top)),new Zn(Math.round(B.left),Math.round(B.height+B.top))]}},ys="Hidden Text",Ks=(ms.prototype.parseMetrics=function(A,e){var t=this._document.createElement("div"),r=this._document.createElement("img"),B=this._document.createElement("span"),n=this._document.body;t.style.visibility="hidden",t.style.fontFamily=A,t.style.fontSize=e,t.style.margin="0",t.style.padding="0",t.style.whiteSpace="nowrap",n.appendChild(t),r.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",r.width=1,r.height=1,r.style.margin="0",r.style.padding="0",r.style.verticalAlign="baseline",B.style.fontFamily=A,B.style.fontSize=e,B.style.margin="0",B.style.padding="0",B.appendChild(this._document.createTextNode(ys)),t.appendChild(B),t.appendChild(r);e=r.offsetTop-B.offsetTop+2;t.removeChild(B),t.appendChild(this._document.createTextNode(ys)),t.style.lineHeight="normal",r.style.verticalAlign="super";r=r.offsetTop-t.offsetTop+2;return n.removeChild(t),{baseline:e,middle:r}},ms.prototype.getMetrics=function(A,e){var t=A+" "+e;return void 0===this._data[t]&&(this._data[t]=this.parseMetrics(A,e)),this._data[t]},ms);function ms(A){this._data={},this._document=A}var Ls,he=function(A,e){this.context=A,this.options=e},bs=(A(Ds,Ls=he),Ds.prototype.applyEffects=function(A){for(var e=this;this._activeEffects.length;)this.popEffect();A.forEach(function(A){return e.applyEffect(A)})},Ds.prototype.applyEffect=function(A){this.ctx.save(),2===A.type&&(this.ctx.globalAlpha=A.opacity),0===A.type&&(this.ctx.translate(A.offsetX,A.offsetY),this.ctx.transform(A.matrix[0],A.matrix[1],A.matrix[2],A.matrix[3],A.matrix[4],A.matrix[5]),this.ctx.translate(-A.offsetX,-A.offsetY)),Bs(A)&&(this.path(A.path),this.ctx.clip()),this._activeEffects.push(A)},Ds.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},Ds.prototype.renderStack=function(e){return a(this,void 0,void 0,function(){return H(this,function(A){switch(A.label){case 0:return e.element.container.styles.isVisible()?[4,this.renderStackContent(e)]:[3,2];case 1:A.sent(),A.label=2;case 2:return[2]}})})},Ds.prototype.renderNode=function(e){return a(this,void 0,void 0,function(){return H(this,function(A){switch(A.label){case 0:return Pt(e.container.flags,16),e.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(e)]:[3,3];case 1:return A.sent(),[4,this.renderNodeContent(e)];case 2:A.sent(),A.label=3;case 3:return[2]}})})},Ds.prototype.renderTextWithLetterSpacing=function(t,A,r){var B=this;0===A?this.ctx.fillText(t.text,t.bounds.left,t.bounds.top+r):Zr(t.text).reduce(function(A,e){return B.ctx.fillText(e,A,t.bounds.top+r),A+B.ctx.measureText(e).width},t.bounds.left)},Ds.prototype.createFontStyle=function(A){var e=A.fontVariant.filter(function(A){return"normal"===A||"small-caps"===A}).join(""),t=Gs(A.fontFamily).join(", "),r=WA(A.fontSize)?""+A.fontSize.number+A.fontSize.unit:A.fontSize.number+"px";return[[A.fontStyle,e,A.fontWeight,r,t].join(" "),t,r]},Ds.prototype.renderTextNode=function(i,Q){return a(this,void 0,void 0,function(){var e,t,r,B,n,s,o=this;return H(this,function(A){return r=this.createFontStyle(Q),e=r[0],t=r[1],r=r[2],this.ctx.font=e,this.ctx.direction=1===Q.direction?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",r=this.fontMetrics.getMetrics(t,r),B=r.baseline,n=r.middle,s=Q.paintOrder,i.textBounds.forEach(function(t){s.forEach(function(A){switch(A){case 0:o.ctx.fillStyle=ie(Q.color),o.renderTextWithLetterSpacing(t,Q.letterSpacing,B);var e=Q.textShadow;e.length&&t.text.trim().length&&(e.slice(0).reverse().forEach(function(A){o.ctx.shadowColor=ie(A.color),o.ctx.shadowOffsetX=A.offsetX.number*o.options.scale,o.ctx.shadowOffsetY=A.offsetY.number*o.options.scale,o.ctx.shadowBlur=A.blur.number,o.renderTextWithLetterSpacing(t,Q.letterSpacing,B)}),o.ctx.shadowColor="",o.ctx.shadowOffsetX=0,o.ctx.shadowOffsetY=0,o.ctx.shadowBlur=0),Q.textDecorationLine.length&&(o.ctx.fillStyle=ie(Q.textDecorationColor||Q.color),Q.textDecorationLine.forEach(function(A){switch(A){case 1:o.ctx.fillRect(t.bounds.left,Math.round(t.bounds.top+B),t.bounds.width,1);break;case 2:o.ctx.fillRect(t.bounds.left,Math.round(t.bounds.top),t.bounds.width,1);break;case 3:o.ctx.fillRect(t.bounds.left,Math.ceil(t.bounds.top+n),t.bounds.width,1)}}));break;case 1:Q.webkitTextStrokeWidth&&t.text.trim().length&&(o.ctx.strokeStyle=ie(Q.webkitTextStrokeColor),o.ctx.lineWidth=Q.webkitTextStrokeWidth,o.ctx.lineJoin=window.chrome?"miter":"round",o.ctx.strokeText(t.text,t.bounds.left,t.bounds.top+B)),o.ctx.strokeStyle="",o.ctx.lineWidth=0,o.ctx.lineJoin="miter"}})}),[2]})})},Ds.prototype.renderReplacedElement=function(A,e,t){var r;t&&0<A.intrinsicWidth&&0<A.intrinsicHeight&&(r=ls(A),e=rs(e),this.path(e),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(t,0,0,A.intrinsicWidth,A.intrinsicHeight,r.left,r.top,r.width,r.height),this.ctx.restore())},Ds.prototype.renderNodeContent=function(w){return a(this,void 0,void 0,function(){var e,t,r,B,n,s,o,i,Q,c,a,g;return H(this,function(A){switch(A.label){case 0:this.applyEffects(w.getEffects(4)),e=w.container,t=w.curves,r=e.styles,B=0,n=e.textNodes,A.label=1;case 1:return B<n.length?(s=n[B],[4,this.renderTextNode(s,r)]):[3,4];case 2:A.sent(),A.label=3;case 3:return B++,[3,1];case 4:if(!(e instanceof tB))return[3,8];A.label=5;case 5:return A.trys.push([5,7,,8]),[4,this.context.cache.match(e.src)];case 6:return Q=A.sent(),this.renderReplacedElement(e,t,Q),[3,8];case 7:return A.sent(),this.context.logger.error("Error loading image "+e.src),[3,8];case 8:if(e instanceof nB&&this.renderReplacedElement(e,t,e.canvas),!(e instanceof iB))return[3,12];A.label=9;case 9:return A.trys.push([9,11,,12]),[4,this.context.cache.match(e.svg)];case 10:return Q=A.sent(),this.renderReplacedElement(e,t,Q),[3,12];case 11:return A.sent(),this.context.logger.error("Error loading svg "+e.svg.substring(0,255)),[3,12];case 12:return e instanceof vB&&e.tree?[4,new Ds(this.context,{scale:this.options.scale,backgroundColor:e.backgroundColor,x:0,y:0,width:e.width,height:e.height}).render(e.tree)]:[3,14];case 13:s=A.sent(),e.width&&e.height&&this.ctx.drawImage(s,0,0,e.width,e.height,e.bounds.left,e.bounds.top,e.bounds.width,e.bounds.height),A.label=14;case 14:if(e instanceof pB&&(i=Math.min(e.bounds.width,e.bounds.height),e.type===hB?e.checked&&(this.ctx.save(),this.path([new Zn(e.bounds.left+.39363*i,e.bounds.top+.79*i),new Zn(e.bounds.left+.16*i,e.bounds.top+.5549*i),new Zn(e.bounds.left+.27347*i,e.bounds.top+.44071*i),new Zn(e.bounds.left+.39694*i,e.bounds.top+.5649*i),new Zn(e.bounds.left+.72983*i,e.bounds.top+.23*i),new Zn(e.bounds.left+.84*i,e.bounds.top+.34085*i),new Zn(e.bounds.left+.39363*i,e.bounds.top+.79*i)]),this.ctx.fillStyle=ie(HB),this.ctx.fill(),this.ctx.restore()):e.type===dB&&e.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(e.bounds.left+i/2,e.bounds.top+i/2,i/4,0,2*Math.PI,!0),this.ctx.fillStyle=ie(HB),this.ctx.fill(),this.ctx.restore())),xs(e)&&e.value.length){switch(c=this.createFontStyle(r),a=c[0],i=c[1],c=this.fontMetrics.getMetrics(a,i).baseline,this.ctx.font=a,this.ctx.fillStyle=ie(r.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=Ss(e.styles.textAlign),g=ls(e),o=0,e.styles.textAlign){case 1:o+=g.width/2;break;case 2:o+=g.width}i=g.add(o,0,0,-g.height/2+1),this.ctx.save(),this.path([new Zn(g.left,g.top),new Zn(g.left+g.width,g.top),new Zn(g.left+g.width,g.top+g.height),new Zn(g.left,g.top+g.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new Jr(e.value,i),r.letterSpacing,c),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!Pt(e.styles.display,2048))return[3,20];if(null===e.styles.listStyleImage)return[3,19];if(0!==(c=e.styles.listStyleImage).type)return[3,18];Q=void 0,c=c.url,A.label=15;case 15:return A.trys.push([15,17,,18]),[4,this.context.cache.match(c)];case 16:return Q=A.sent(),this.ctx.drawImage(Q,e.bounds.left-(Q.width+10),e.bounds.top),[3,18];case 17:return A.sent(),this.context.logger.error("Error loading list-style-image "+c),[3,18];case 18:return[3,20];case 19:w.listValue&&-1!==e.styles.listStyleType&&(a=this.createFontStyle(r)[0],this.ctx.font=a,this.ctx.fillStyle=ie(r.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",g=new d(e.bounds.left,e.bounds.top+Ue(e.styles.paddingTop,e.bounds.width),e.bounds.width,Ye(r.lineHeight,r.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new Jr(w.listValue,g),r.letterSpacing,Ye(r.lineHeight,r.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),A.label=20;case 20:return[2]}})})},Ds.prototype.renderStackContent=function(C){return a(this,void 0,void 0,function(){var e,t,r,B,n,s,o,i,Q,c,a,g,w,U,l;return H(this,function(A){switch(A.label){case 0:return Pt(C.element.container.flags,16),[4,this.renderNodeBackgroundAndBorders(C.element)];case 1:A.sent(),e=0,t=C.negativeZIndex,A.label=2;case 2:return e<t.length?(l=t[e],[4,this.renderStack(l)]):[3,5];case 3:A.sent(),A.label=4;case 4:return e++,[3,2];case 5:return[4,this.renderNodeContent(C.element)];case 6:A.sent(),r=0,B=C.nonInlineLevel,A.label=7;case 7:return r<B.length?(l=B[r],[4,this.renderNode(l)]):[3,10];case 8:A.sent(),A.label=9;case 9:return r++,[3,7];case 10:n=0,s=C.nonPositionedFloats,A.label=11;case 11:return n<s.length?(l=s[n],[4,this.renderStack(l)]):[3,14];case 12:A.sent(),A.label=13;case 13:return n++,[3,11];case 14:o=0,i=C.nonPositionedInlineLevel,A.label=15;case 15:return o<i.length?(l=i[o],[4,this.renderStack(l)]):[3,18];case 16:A.sent(),A.label=17;case 17:return o++,[3,15];case 18:Q=0,c=C.inlineLevel,A.label=19;case 19:return Q<c.length?(l=c[Q],[4,this.renderNode(l)]):[3,22];case 20:A.sent(),A.label=21;case 21:return Q++,[3,19];case 22:a=0,g=C.zeroOrAutoZIndexOrTransformedOrOpacity,A.label=23;case 23:return a<g.length?(l=g[a],[4,this.renderStack(l)]):[3,26];case 24:A.sent(),A.label=25;case 25:return a++,[3,23];case 26:w=0,U=C.positiveZIndex,A.label=27;case 27:return w<U.length?(l=U[w],[4,this.renderStack(l)]):[3,30];case 28:A.sent(),A.label=29;case 29:return w++,[3,27];case 30:return[2]}})})},Ds.prototype.mask=function(A){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(A.slice(0).reverse()),this.ctx.closePath()},Ds.prototype.path=function(A){this.ctx.beginPath(),this.formatPath(A),this.ctx.closePath()},Ds.prototype.formatPath=function(A){var r=this;A.forEach(function(A,e){var t=$n(A)?A.start:A;0===e?r.ctx.moveTo(t.x,t.y):r.ctx.lineTo(t.x,t.y),$n(A)&&r.ctx.bezierCurveTo(A.startControl.x,A.startControl.y,A.endControl.x,A.endControl.y,A.end.x,A.end.y)})},Ds.prototype.renderRepeat=function(A,e,t,r){this.path(A),this.ctx.fillStyle=e,this.ctx.translate(t,r),this.ctx.fill(),this.ctx.translate(-t,-r)},Ds.prototype.resizeImage=function(A,e,t){if(A.width===e&&A.height===t)return A;var r=(null!==(r=this.canvas.ownerDocument)&&void 0!==r?r:document).createElement("canvas");return r.width=Math.max(1,e),r.height=Math.max(1,t),r.getContext("2d").drawImage(A,0,0,A.width,A.height,0,0,e,t),r},Ds.prototype.renderBackgroundImage=function(f){return a(this,void 0,void 0,function(){var h,e,d,t,r,B;return H(this,function(A){switch(A.label){case 0:h=f.styles.backgroundImage.length-1,e=function(e){var t,r,B,n,s,o,i,Q,c,a,g,w,U,l,C,u,F;return H(this,function(A){switch(A.label){case 0:if(0!==e.type)return[3,5];t=void 0,r=e.url,A.label=1;case 1:return A.trys.push([1,3,,4]),[4,d.context.cache.match(r)];case 2:return t=A.sent(),[3,4];case 3:return A.sent(),d.context.logger.error("Error loading background-image "+r),[3,4];case 4:return t&&(B=Cs(f,h,[t.width,t.height,t.width/t.height]),o=B[0],g=B[1],w=B[2],c=B[3],a=B[4],s=d.ctx.createPattern(d.resizeImage(t,c,a),"repeat"),d.renderRepeat(o,s,g,w)),[3,6];case 5:1===e.type?(F=Cs(f,h,[null,null,null]),o=F[0],g=F[1],w=F[2],c=F[3],a=F[4],C=Ee(e.angle,c,a),l=C[0],B=C[1],i=C[2],u=C[3],Q=C[4],(F=document.createElement("canvas")).width=c,F.height=a,C=F.getContext("2d"),n=C.createLinearGradient(B,u,i,Q),pe(e.stops,l).forEach(function(A){return n.addColorStop(A.stop,ie(A.color))}),C.fillStyle=n,C.fillRect(0,0,c,a),0<c&&0<a&&(s=d.ctx.createPattern(F,"repeat"),d.renderRepeat(o,s,g,w))):2===e.type&&(u=Cs(f,h,[null,null,null]),o=u[0],i=u[1],Q=u[2],c=u[3],a=u[4],l=0===e.position.length?[ge]:e.position,g=Ue(l[0],c),w=Ue(l[l.length-1],a),C=function(A,e,t,r,B){var n,s,o,i,Q=0,c=0;switch(A.size){case 0:0===A.shape?Q=c=Math.min(Math.abs(e),Math.abs(e-r),Math.abs(t),Math.abs(t-B)):1===A.shape&&(Q=Math.min(Math.abs(e),Math.abs(e-r)),c=Math.min(Math.abs(t),Math.abs(t-B)));break;case 2:0===A.shape?Q=c=Math.min(Ie(e,t),Ie(e,t-B),Ie(e-r,t),Ie(e-r,t-B)):1===A.shape&&(n=Math.min(Math.abs(t),Math.abs(t-B))/Math.min(Math.abs(e),Math.abs(e-r)),o=(s=ye(r,B,e,t,!0))[0],i=s[1],c=n*(Q=Ie(o-e,(i-t)/n)));break;case 1:0===A.shape?Q=c=Math.max(Math.abs(e),Math.abs(e-r),Math.abs(t),Math.abs(t-B)):1===A.shape&&(Q=Math.max(Math.abs(e),Math.abs(e-r)),c=Math.max(Math.abs(t),Math.abs(t-B)));break;case 3:0===A.shape?Q=c=Math.max(Ie(e,t),Ie(e,t-B),Ie(e-r,t),Ie(e-r,t-B)):1===A.shape&&(n=Math.max(Math.abs(t),Math.abs(t-B))/Math.max(Math.abs(e),Math.abs(e-r)),o=(s=ye(r,B,e,t,!1))[0],i=s[1],c=n*(Q=Ie(o-e,(i-t)/n)))}return Array.isArray(A.size)&&(Q=Ue(A.size[0],r),c=2===A.size.length?Ue(A.size[1],B):Q),[Q,c]}(e,g,w,c,a),F=C[0],u=C[1],0<F&&0<u&&(U=d.ctx.createRadialGradient(i+g,Q+w,0,i+g,Q+w,F),pe(e.stops,2*F).forEach(function(A){return U.addColorStop(A.stop,ie(A.color))}),d.path(o),d.ctx.fillStyle=U,F!==u?(l=f.bounds.left+.5*f.bounds.width,C=f.bounds.top+.5*f.bounds.height,F=1/(u=u/F),d.ctx.save(),d.ctx.translate(l,C),d.ctx.transform(1,0,0,u,0,0),d.ctx.translate(-l,-C),d.ctx.fillRect(i,F*(Q-C)+C,c,a*F),d.ctx.restore()):d.ctx.fill())),A.label=6;case 6:return h--,[2]}})},d=this,t=0,r=f.styles.backgroundImage.slice(0).reverse(),A.label=1;case 1:return t<r.length?(B=r[t],[5,e(B)]):[3,4];case 2:A.sent(),A.label=3;case 3:return t++,[3,1];case 4:return[2]}})})},Ds.prototype.renderSolidBorder=function(e,t,r){return a(this,void 0,void 0,function(){return H(this,function(A){return this.path(ws(r,t)),this.ctx.fillStyle=ie(e),this.ctx.fill(),[2]})})},Ds.prototype.renderDoubleBorder=function(t,r,B,n){return a(this,void 0,void 0,function(){var e;return H(this,function(A){switch(A.label){case 0:return r<3?[4,this.renderSolidBorder(t,B,n)]:[3,2];case 1:return A.sent(),[2];case 2:return e=function(A,e){switch(e){case 0:return Hs(A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox,A.topRightBorderBox,A.topRightBorderDoubleOuterBox);case 1:return Hs(A.topRightBorderBox,A.topRightBorderDoubleOuterBox,A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox);case 2:return Hs(A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox,A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox);default:return Hs(A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox,A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox)}}(n,B),this.path(e),this.ctx.fillStyle=ie(t),this.ctx.fill(),e=function(A,e){switch(e){case 0:return Hs(A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox,A.topRightBorderDoubleInnerBox,A.topRightPaddingBox);case 1:return Hs(A.topRightBorderDoubleInnerBox,A.topRightPaddingBox,A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox);case 2:return Hs(A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox,A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox);default:return Hs(A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox,A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox)}}(n,B),this.path(e),this.ctx.fill(),[2]}})})},Ds.prototype.renderNodeBackgroundAndBorders=function(c){return a(this,void 0,void 0,function(){var e,t,r,B,n,s,o,i,Q=this;return H(this,function(A){switch(A.label){case 0:return(this.applyEffects(c.getEffects(2)),e=c.container.styles,t=!oe(e.backgroundColor)||e.backgroundImage.length,r=[{style:e.borderTopStyle,color:e.borderTopColor,width:e.borderTopWidth},{style:e.borderRightStyle,color:e.borderRightColor,width:e.borderRightWidth},{style:e.borderBottomStyle,color:e.borderBottomColor,width:e.borderBottomWidth},{style:e.borderLeftStyle,color:e.borderLeftColor,width:e.borderLeftWidth}],B=Ms(Es(e.backgroundClip,0),c.curves),t||e.boxShadow.length)?(this.ctx.save(),this.path(B),this.ctx.clip(),oe(e.backgroundColor)||(this.ctx.fillStyle=ie(e.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(c.container)]):[3,2];case 1:A.sent(),this.ctx.restore(),e.boxShadow.slice(0).reverse().forEach(function(A){Q.ctx.save();var t,r,B,n,e=ts(c.curves),s=A.inset?0:1e4,o=(t=-s+(A.inset?1:-1)*A.spread.number,r=(A.inset?1:-1)*A.spread.number,B=A.spread.number*(A.inset?-2:2),n=A.spread.number*(A.inset?-2:2),e.map(function(A,e){switch(e){case 0:return A.add(t,r);case 1:return A.add(t+B,r);case 2:return A.add(t+B,r+n);case 3:return A.add(t,r+n)}return A}));A.inset?(Q.path(e),Q.ctx.clip(),Q.mask(o)):(Q.mask(e),Q.ctx.clip(),Q.path(o)),Q.ctx.shadowOffsetX=A.offsetX.number+s,Q.ctx.shadowOffsetY=A.offsetY.number,Q.ctx.shadowColor=ie(A.color),Q.ctx.shadowBlur=A.blur.number,Q.ctx.fillStyle=A.inset?ie(A.color):"rgba(0,0,0,1)",Q.ctx.fill(),Q.ctx.restore()}),A.label=2;case 2:s=n=0,o=r,A.label=3;case 3:return s<o.length?0!==(i=o[s]).style&&!oe(i.color)&&0<i.width?2!==i.style?[3,5]:[4,this.renderDashedDottedBorder(i.color,i.width,n,c.curves,2)]:[3,11]:[3,13];case 4:return A.sent(),[3,11];case 5:return 3!==i.style?[3,7]:[4,this.renderDashedDottedBorder(i.color,i.width,n,c.curves,3)];case 6:return A.sent(),[3,11];case 7:return 4!==i.style?[3,9]:[4,this.renderDoubleBorder(i.color,i.width,n,c.curves)];case 8:return A.sent(),[3,11];case 9:return[4,this.renderSolidBorder(i.color,n,c.curves)];case 10:A.sent(),A.label=11;case 11:n++,A.label=12;case 12:return s++,[3,3];case 13:return[2]}})})},Ds.prototype.renderDashedDottedBorder=function(g,w,U,l,C){return a(this,void 0,void 0,function(){var e,t,r,B,n,s,o,i,Q,c,a;return H(this,function(A){return this.ctx.save(),Q=function(A,e){switch(e){case 0:return fs(A.topLeftBorderStroke,A.topRightBorderStroke);case 1:return fs(A.topRightBorderStroke,A.bottomRightBorderStroke);case 2:return fs(A.bottomRightBorderStroke,A.bottomLeftBorderStroke);default:return fs(A.bottomLeftBorderStroke,A.topLeftBorderStroke)}}(l,U),e=ws(l,U),2===C&&(this.path(e),this.ctx.clip()),s=$n(e[0])?(t=e[0].start.x,e[0].start.y):(t=e[0].x,e[0].y),o=$n(e[1])?(r=e[1].end.x,e[1].end.y):(r=e[1].x,e[1].y),B=0===U||2===U?Math.abs(t-r):Math.abs(s-o),this.ctx.beginPath(),3===C?this.formatPath(Q):this.formatPath(e.slice(0,2)),n=w<3?3*w:2*w,s=w<3?2*w:w,3===C&&(s=n=w),o=!0,B<=2*n?o=!1:B<=2*n+s?(n*=i=B/(2*n+s),s*=i):(Q=Math.floor((B+s)/(n+s)),i=(B-Q*n)/(Q-1),s=(Q=(B-(Q+1)*n)/Q)<=0||Math.abs(s-i)<Math.abs(s-Q)?i:Q),o&&(3===C?this.ctx.setLineDash([0,n+s]):this.ctx.setLineDash([n,s])),3===C?(this.ctx.lineCap="round",this.ctx.lineWidth=w):this.ctx.lineWidth=2*w+1.1,this.ctx.strokeStyle=ie(g),this.ctx.stroke(),this.ctx.setLineDash([]),2===C&&($n(e[0])&&(c=e[3],a=e[0],this.ctx.beginPath(),this.formatPath([new Zn(c.end.x,c.end.y),new Zn(a.start.x,a.start.y)]),this.ctx.stroke()),$n(e[1])&&(c=e[1],a=e[2],this.ctx.beginPath(),this.formatPath([new Zn(c.end.x,c.end.y),new Zn(a.start.x,a.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},Ds.prototype.render=function(B){return a(this,void 0,void 0,function(){return H(this,function(A){switch(A.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=ie(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),t=new as(e=B,null),r=new cs(t),hs(t,r,r,e=[]),ds(t.container,e),[4,this.renderStack(r)];case 1:return A.sent(),this.applyEffects([]),[2,this.canvas]}var e,t,r})})},Ds);function Ds(A,e){A=Ls.call(this,A,e)||this;return A._activeEffects=[],A.canvas=e.canvas||document.createElement("canvas"),A.ctx=A.canvas.getContext("2d"),e.canvas||(A.canvas.width=Math.floor(e.width*e.scale),A.canvas.height=Math.floor(e.height*e.scale),A.canvas.style.width=e.width+"px",A.canvas.style.height=e.height+"px"),A.fontMetrics=new Ks(document),A.ctx.scale(A.options.scale,A.options.scale),A.ctx.translate(-e.x,-e.y),A.ctx.textBaseline="bottom",A._activeEffects=[],A.context.logger.debug("Canvas renderer initialized ("+e.width+"x"+e.height+") with scale "+e.scale),A}var vs,xs=function(A){return A instanceof LB||(A instanceof yB||A instanceof pB&&A.type!==dB&&A.type!==hB)},Ms=function(A,e){switch(A){case 0:return ts(e);case 2:return[e.topLeftContentBox,e.topRightContentBox,e.bottomRightContentBox,e.bottomLeftContentBox];default:return rs(e)}},Ss=function(A){switch(A){case 1:return"center";case 2:return"right";default:return"left"}},Ts=["-apple-system","system-ui"],Gs=function(A){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?A.filter(function(A){return-1===Ts.indexOf(A)}):A},Os=(A(Vs,vs=he),Vs.prototype.render=function(t){return a(this,void 0,void 0,function(){var e;return H(this,function(A){switch(A.label){case 0:return e=Nr(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,t),[4,ks(e)];case 1:return e=A.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=ie(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(e,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},Vs);function Vs(A,e){A=vs.call(this,A,e)||this;return A.canvas=e.canvas||document.createElement("canvas"),A.ctx=A.canvas.getContext("2d"),A.options=e,A.canvas.width=Math.floor(e.width*e.scale),A.canvas.height=Math.floor(e.height*e.scale),A.canvas.style.width=e.width+"px",A.canvas.style.height=e.height+"px",A.ctx.scale(A.options.scale,A.options.scale),A.ctx.translate(-e.x,-e.y),A.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+e.width+"x"+e.height+" at "+e.x+","+e.y+") with scale "+e.scale),A}var ks=function(r){return new Promise(function(A,e){var t=new Image;t.onload=function(){A(t)},t.onerror=e,t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent((new XMLSerializer).serializeToString(r))})},Rs=(Ns.prototype.debug=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&("undefined"!=typeof window&&window.console&&"function"==typeof console.debug?console.debug.apply(console,t([this.id,this.getTime()+"ms"],A)):this.info.apply(this,A))},Ns.prototype.getTime=function(){return Date.now()-this.start},Ns.prototype.info=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&"undefined"!=typeof window&&window.console&&"function"==typeof console.info&&console.info.apply(console,t([this.id,this.getTime()+"ms"],A))},Ns.prototype.warn=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&("undefined"!=typeof window&&window.console&&"function"==typeof console.warn?console.warn.apply(console,t([this.id,this.getTime()+"ms"],A)):this.info.apply(this,A))},Ns.prototype.error=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&("undefined"!=typeof window&&window.console&&"function"==typeof console.error?console.error.apply(console,t([this.id,this.getTime()+"ms"],A)):this.info.apply(this,A))},Ns.instances={},Ns);function Ns(A){var e=A.id,A=A.enabled;this.id=e,this.enabled=A,this.start=Date.now()}var Ps=(Xs.instanceCount=1,Xs);function Xs(A,e){this.windowBounds=e,this.instanceName="#"+Xs.instanceCount++,this.logger=new Rs({id:this.instanceName,enabled:A.logging}),this.cache=null!==(e=A.cache)&&void 0!==e?e:new On(this,A)}"undefined"!=typeof window&&Tn.setContext(window);var Js=function(u,F){return a(void 0,void 0,void 0,function(){var e,t,r,B,n,s,o,i,Q,c,a,g,w,U,l,C;return H(this,function(A){switch(A.label){case 0:if(!u||"object"!=typeof u)return[2,Promise.reject("Invalid element provided as first argument")];if(!(e=u.ownerDocument))throw new Error("Element is not attached to a Document");if(!(t=e.defaultView))throw new Error("Document is not attached to a Window");return w={allowTaint:null!==(U=F.allowTaint)&&void 0!==U&&U,imageTimeout:null!==(c=F.imageTimeout)&&void 0!==c?c:15e3,proxy:F.proxy,useCORS:null!==(a=F.useCORS)&&void 0!==a&&a},U=h({logging:null===(g=F.logging)||void 0===g||g,cache:F.cache},w),c={windowWidth:null!==(c=F.windowWidth)&&void 0!==c?c:t.innerWidth,windowHeight:null!==(a=F.windowHeight)&&void 0!==a?a:t.innerHeight,scrollX:null!==(g=F.scrollX)&&void 0!==g?g:t.pageXOffset,scrollY:null!==(w=F.scrollY)&&void 0!==w?w:t.pageYOffset},a=new d(c.scrollX,c.scrollY,c.windowWidth,c.windowHeight),g=new Ps(U,a),c=null!==(w=F.foreignObjectRendering)&&void 0!==w&&w,w={allowTaint:null!==(U=F.allowTaint)&&void 0!==U&&U,onclone:F.onclone,ignoreElements:F.ignoreElements,inlineImages:c,copyStyles:c},g.logger.debug("Starting document clone with size "+a.width+"x"+a.height+" scrolled to "+-a.left+","+-a.top),U=new dn(g,u,w),(w=U.clonedReferenceElement)?[4,U.toIFrame(e,a)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return(r=A.sent(),l=jB(w)||"HTML"===w.tagName?function(A){var e=A.body,t=A.documentElement;if(!e||!t)throw new Error("Unable to get document size");A=Math.max(Math.max(e.scrollWidth,t.scrollWidth),Math.max(e.offsetWidth,t.offsetWidth),Math.max(e.clientWidth,t.clientWidth)),t=Math.max(Math.max(e.scrollHeight,t.scrollHeight),Math.max(e.offsetHeight,t.offsetHeight),Math.max(e.clientHeight,t.clientHeight));return new d(0,0,A,t)}(w.ownerDocument):f(g,w),B=l.width,n=l.height,s=l.left,o=l.top,i=Ys(g,w,F.backgroundColor),l={canvas:F.canvas,backgroundColor:i,scale:null!==(l=null!==(l=F.scale)&&void 0!==l?l:t.devicePixelRatio)&&void 0!==l?l:1,x:(null!==(l=F.x)&&void 0!==l?l:0)+s,y:(null!==(l=F.y)&&void 0!==l?l:0)+o,width:null!==(l=F.width)&&void 0!==l?l:Math.ceil(B),height:null!==(l=F.height)&&void 0!==l?l:Math.ceil(n)},c)?(g.logger.debug("Document cloned, using foreign object rendering"),[4,new Os(g,l).render(w)]):[3,3];case 2:return Q=A.sent(),[3,5];case 3:return g.logger.debug("Document cloned, element located at "+s+","+o+" with size "+B+"x"+n+" using computed rendering"),g.logger.debug("Starting DOM parsing"),C=kB(g,w),i===C.styles.backgroundColor&&(C.styles.backgroundColor=Le.TRANSPARENT),g.logger.debug("Starting renderer for element at "+l.x+","+l.y+" with size "+l.width+"x"+l.height),[4,new bs(g,l).render(C)];case 4:Q=A.sent(),A.label=5;case 5:return null!==(C=F.removeContainer)&&void 0!==C&&!C||dn.destroy(r)||g.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore"),g.logger.debug("Finished rendering"),[2,Q]}})})},Ys=function(A,e,t){var r=e.ownerDocument,B=r.documentElement?fe(A,getComputedStyle(r.documentElement).backgroundColor):Le.TRANSPARENT,n=r.body?fe(A,getComputedStyle(r.body).backgroundColor):Le.TRANSPARENT,t="string"==typeof t?fe(A,t):null===t?Le.TRANSPARENT:4294967295;return e===r.documentElement?oe(B)?oe(n)?t:n:B:t};return function(A,e){return Js(A,e=void 0===e?{}:e)}});
/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-shiv-cssclasses-prefixed-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.csstransitions=function(){return D("transition")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,e.prefixed=function(a,b,c){return b?D(a,b,c):D(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
const feedbackPlus = new FeedbackPlus();

class FeedbackSupply{

	constructor(){
		this.imageBitmap;
		this.previewWidth = window.innerWidth * 0.95;
		this.container = document.querySelector( 'div.container' ),
		this.triggerBttn = document.getElementById( 'trigger-overlay' ),
		this.transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		this.transEndEventName = this.transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		this.support = { transitions : Modernizr.csstransitions };
	}

	fsFloatingButton(){
		var fsFloatingButton = document.createElement('a');
		fsFloatingButton.href = '#';
		fsFloatingButton.className = 'float';
		fsFloatingButton.id = 'take';
		fsFloatingButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/></svg>';
		fsFloatingButton.addEventListener('click', this.start.bind(this));
		document.body.appendChild(fsFloatingButton);
		this.button = fsFloatingButton;

	}

	fsProgressButtonFillBack(){
		
		var progressBtn = this.submitFeedbackButton;
			  
		if (!progressBtn.classList.contains("active")) {
			progressBtn.classList.add("active");
			setTimeout(function() {
				progressBtn.classList.remove("active");
			}, 10000);
		}
	}

	fsSendButton(){
		const button = document.createElement('button');
		
		button.className = 'feedback-supply-progress-button';
		button.textContent = 'Submit Feedback';
		
		button.addEventListener('click', this.submitFeedback.bind(this));
		this.submitFeedbackButton = button;
		
	}

	fsToolbarContainer(){

		this.fsToolbar();
		this.fsSendButton();
		
		var fsToolbarContainer = document.createElement('div');
		fsToolbarContainer.id = 'fs-toolbar-container';
		fsToolbarContainer.className = 'fs-toolbar-container';
		this.overlay.appendChild(fsToolbarContainer);
		this.toolbarContainer = fsToolbarContainer;
		this.toolbarContainer.appendChild(this.toolbar);
	}

	fsToolbar(){
		var fsToolbar = document.createElement('div');
		fsToolbar.id = 'fs-toolbar';
		fsToolbar.className = 'fs-toolbar';
		this.toolbar = fsToolbar;
	}

	fsOverlay(){
		
		const xclose = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg>';
		
		const fsOverlay = document.createElement('div');
		fsOverlay.className = 'overlay overlay-contentscale';
		fsOverlay.innerHTML = '<div style="float:right"><button type="button" class="feedbacksupply-overlay-close-button" id="feedbacksupply-overlay-close-button" style="margin:10px;">' + xclose + '</button></div><div id="result" style="margin: 10px;" class="feedbacksupply-canvas-container"><canvas id="feedback-supply-canvas"></canvas></div>';
		document.body.appendChild(fsOverlay);
		this.overlay = fsOverlay;
		this.closeBttn = document.getElementById('feedbacksupply-overlay-close-button');

		this.closeBttn.addEventListener('click', this.toggleOverlay.bind(this));

		this.canvas = document.getElementById('feedback-supply-canvas');
		this.button = document.getElementById('take');

	}

	drawBitmapToCanvas({bitmap, width, height}) {
		const previewHeight = (height / width) * this.previewWidth;
		this.canvas.width = this.previewWidth;
		this.canvas.height = previewHeight;
		this.canvas.getContext("2d").drawImage(bitmap, 0, 0, this.previewWidth, previewHeight);
	}

	createMeta(uuid, imageUUID){
		return {
			feedbackId: uuid,
            authToken: this.token,
            userName: this.username,
            userData: "",
            images: [imageUUID + ".png"]
		};
	}

	async sendNotification(meta){
		return await fetch('https://api-private.feedbacksupply.com/feedback', {
			method: 'POST',
			body: JSON.stringify(meta),
			headers: {
				'auth-key': this.token,
				'Content-Type': 'application/json'
			}
		});
	}

	async submitFeedback(){
		this.fsProgressButtonFillBack();
		const uuid = crypto.randomUUID();
		const imageUUID = crypto.randomUUID();
		
		//zip files
		const zip = new JSZip();
		const canvasBlob = await new Promise(resolve => this.canvas.toBlob(resolve));
		const canvasBlobUrl = URL.createObjectURL(canvasBlob);
		const canvasBlobName = imageUUID + '.png';
		const canvasBlobType = canvasBlob.type;
		const canvasBlobSize = canvasBlob.size;
		const canvasBlobData = await new Response(canvasBlob).arrayBuffer();
		const canvasBlobArray = new Uint8Array(canvasBlobData);
		zip.file(canvasBlobName, canvasBlobArray);
		const meta = this.createMeta(uuid, imageUUID);
		zip.file('meta.json', JSON.stringify(meta));
		
		const token = this.token;
		this.promise = zip.generateAsync({type:"blob"})
		.then(async function(content) {
			//saveAs(content, "feedback.zip");

			//send fedback
			try{
				const response = await fetch('https://api-private.feedbacksupply.com/zip/'+uuid+'.zip', {
					method: 'PUT',
					body: content,
					headers: {
						'Content-Type': 'application/zip',
						'auth-key': token
					}
				});


				console.log({"Feedback Supply": "Feedback uploaded with response " + response.status});
				
			}catch(e){
				console.error({"Feedback Supply": e});
			}
			
		});

		this.promiseNotification = this.sendNotification(meta)
		.then(response => {
			console.log({"Feedback Supply": "Notification sent with response " + response.status});
		}
		).catch(e => {
			console.error({"Feedback Supply": e});
		});
	}

	initAnnotorious() {
		
				
				var anno = Annotorious.init({
				  image: this.canvas, // image element or ID
				  widgets: [
					'COMMENT'
				  ]
				});
				
				this.fsToolbarContainer();

				Annotorious.Toolbar(anno, document.getElementById('fs-toolbar-container'), {'drawingTools': [ 'annotorious-tilted-box', 'rect', 'polygon', 'circle', 'ellipse', 'freehand', 'point', 'line']});
				this.anno = anno;
				this.toolbarContainer.appendChild(this.submitFeedbackButton);
	}

	toggleOverlay() {
		if( this.overlay.classList.contains('open') )  {
			window.document.scrollBy(0, 80);
			
			this.toolbarContainer.remove();
			
			this.overlay.classList.remove('open');
			this.container.classList.remove('overlay-open');
			this.overlay.classList.add( 'close');
			const overlay = this.overlay;
			var onEndTransitionFn = function( ev ) {
				overlay.classList.remove('close');
				
			};

			if( this.support.transitions ) {
				this.overlay.addEventListener( this.transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
			
			
		}
		else if( !this.overlay.classList.contains('close') ) {
			this.overlay.classList.add('open');
			
		}
	}

	start(){
		feedbackPlus.capture().then(result => {
			this.drawBitmapToCanvas(result);
			this.canvas.style.display = "block";
			this.imageBitmap = result.bitmap;
			this.toggleOverlay();
			this.initAnnotorious();
		});
		
	}

	init(config){ {
		
		if(config.fsFloatingButton){
			
			this.fsFloatingButton();
			this.fsOverlay();
			//this.button.addEventListener('click', this.capture.bind(this));
			
			
		}else if(config.clickableElement){
			//clickableElement.addEventListener('click', this.capture.bind(this));
			this.fsOverlay();
		}else{
			console.error('Feedback Supply: No clickable element found');
		}

		if(config.token && config.token.length > 0){
			console.log(config.token);
			this.token = config.token;
		}else{
			console.error('Feedback Supply: Please provide a valid token');
		}
		
	}
}
}



/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.JSZip = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var utils = require("./utils");
var support = require("./support");
// private property
var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";


// public method for encoding
exports.encode = function(input) {
    var output = [];
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0, len = input.length, remainingBytes = len;

    var isArray = utils.getTypeOf(input) !== "string";
    while (i < input.length) {
        remainingBytes = len - i;

        if (!isArray) {
            chr1 = input.charCodeAt(i++);
            chr2 = i < len ? input.charCodeAt(i++) : 0;
            chr3 = i < len ? input.charCodeAt(i++) : 0;
        } else {
            chr1 = input[i++];
            chr2 = i < len ? input[i++] : 0;
            chr3 = i < len ? input[i++] : 0;
        }

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = remainingBytes > 1 ? (((chr2 & 15) << 2) | (chr3 >> 6)) : 64;
        enc4 = remainingBytes > 2 ? (chr3 & 63) : 64;

        output.push(_keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4));

    }

    return output.join("");
};

// public method for decoding
exports.decode = function(input) {
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0, resultIndex = 0;

    var dataUrlPrefix = "data:";

    if (input.substr(0, dataUrlPrefix.length) === dataUrlPrefix) {
        // This is a common error: people give a data url
        // (data:image/png;base64,iVBOR...) with a {base64: true} and
        // wonders why things don't work.
        // We can detect that the string input looks like a data url but we
        // *can't* be sure it is one: removing everything up to the comma would
        // be too dangerous.
        throw new Error("Invalid base64 input, it looks like a data url.");
    }

    input = input.replace(/[^A-Za-z0-9+/=]/g, "");

    var totalLength = input.length * 3 / 4;
    if(input.charAt(input.length - 1) === _keyStr.charAt(64)) {
        totalLength--;
    }
    if(input.charAt(input.length - 2) === _keyStr.charAt(64)) {
        totalLength--;
    }
    if (totalLength % 1 !== 0) {
        // totalLength is not an integer, the length does not match a valid
        // base64 content. That can happen if:
        // - the input is not a base64 content
        // - the input is *almost* a base64 content, with a extra chars at the
        //   beginning or at the end
        // - the input uses a base64 variant (base64url for example)
        throw new Error("Invalid base64 input, bad content length.");
    }
    var output;
    if (support.uint8array) {
        output = new Uint8Array(totalLength|0);
    } else {
        output = new Array(totalLength|0);
    }

    while (i < input.length) {

        enc1 = _keyStr.indexOf(input.charAt(i++));
        enc2 = _keyStr.indexOf(input.charAt(i++));
        enc3 = _keyStr.indexOf(input.charAt(i++));
        enc4 = _keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output[resultIndex++] = chr1;

        if (enc3 !== 64) {
            output[resultIndex++] = chr2;
        }
        if (enc4 !== 64) {
            output[resultIndex++] = chr3;
        }

    }

    return output;
};

},{"./support":30,"./utils":32}],2:[function(require,module,exports){
"use strict";

var external = require("./external");
var DataWorker = require("./stream/DataWorker");
var Crc32Probe = require("./stream/Crc32Probe");
var DataLengthProbe = require("./stream/DataLengthProbe");

/**
 * Represent a compressed object, with everything needed to decompress it.
 * @constructor
 * @param {number} compressedSize the size of the data compressed.
 * @param {number} uncompressedSize the size of the data after decompression.
 * @param {number} crc32 the crc32 of the decompressed file.
 * @param {object} compression the type of compression, see lib/compressions.js.
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the compressed data.
 */
function CompressedObject(compressedSize, uncompressedSize, crc32, compression, data) {
    this.compressedSize = compressedSize;
    this.uncompressedSize = uncompressedSize;
    this.crc32 = crc32;
    this.compression = compression;
    this.compressedContent = data;
}

CompressedObject.prototype = {
    /**
     * Create a worker to get the uncompressed content.
     * @return {GenericWorker} the worker.
     */
    getContentWorker: function () {
        var worker = new DataWorker(external.Promise.resolve(this.compressedContent))
            .pipe(this.compression.uncompressWorker())
            .pipe(new DataLengthProbe("data_length"));

        var that = this;
        worker.on("end", function () {
            if (this.streamInfo["data_length"] !== that.uncompressedSize) {
                throw new Error("Bug : uncompressed data size mismatch");
            }
        });
        return worker;
    },
    /**
     * Create a worker to get the compressed content.
     * @return {GenericWorker} the worker.
     */
    getCompressedWorker: function () {
        return new DataWorker(external.Promise.resolve(this.compressedContent))
            .withStreamInfo("compressedSize", this.compressedSize)
            .withStreamInfo("uncompressedSize", this.uncompressedSize)
            .withStreamInfo("crc32", this.crc32)
            .withStreamInfo("compression", this.compression)
        ;
    }
};

/**
 * Chain the given worker with other workers to compress the content with the
 * given compression.
 * @param {GenericWorker} uncompressedWorker the worker to pipe.
 * @param {Object} compression the compression object.
 * @param {Object} compressionOptions the options to use when compressing.
 * @return {GenericWorker} the new worker compressing the content.
 */
CompressedObject.createWorkerFrom = function (uncompressedWorker, compression, compressionOptions) {
    return uncompressedWorker
        .pipe(new Crc32Probe())
        .pipe(new DataLengthProbe("uncompressedSize"))
        .pipe(compression.compressWorker(compressionOptions))
        .pipe(new DataLengthProbe("compressedSize"))
        .withStreamInfo("compression", compression);
};

module.exports = CompressedObject;

},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(require,module,exports){
"use strict";

var GenericWorker = require("./stream/GenericWorker");

exports.STORE = {
    magic: "\x00\x00",
    compressWorker : function () {
        return new GenericWorker("STORE compression");
    },
    uncompressWorker : function () {
        return new GenericWorker("STORE decompression");
    }
};
exports.DEFLATE = require("./flate");

},{"./flate":7,"./stream/GenericWorker":28}],4:[function(require,module,exports){
"use strict";

var utils = require("./utils");

/**
 * The following functions come from pako, from pako/lib/zlib/crc32.js
 * released under the MIT license, see pako https://github.com/nodeca/pako/
 */

// Use ordinary array, since untyped makes no boost here
function makeTable() {
    var c, table = [];

    for(var n =0; n < 256; n++){
        c = n;
        for(var k =0; k < 8; k++){
            c = ((c&1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
        }
        table[n] = c;
    }

    return table;
}

// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();


function crc32(crc, buf, len, pos) {
    var t = crcTable, end = pos + len;

    crc = crc ^ (-1);

    for (var i = pos; i < end; i++ ) {
        crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
    }

    return (crc ^ (-1)); // >>> 0;
}

// That's all for the pako functions.

/**
 * Compute the crc32 of a string.
 * This is almost the same as the function crc32, but for strings. Using the
 * same function for the two use cases leads to horrible performances.
 * @param {Number} crc the starting value of the crc.
 * @param {String} str the string to use.
 * @param {Number} len the length of the string.
 * @param {Number} pos the starting position for the crc32 computation.
 * @return {Number} the computed crc32.
 */
function crc32str(crc, str, len, pos) {
    var t = crcTable, end = pos + len;

    crc = crc ^ (-1);

    for (var i = pos; i < end; i++ ) {
        crc = (crc >>> 8) ^ t[(crc ^ str.charCodeAt(i)) & 0xFF];
    }

    return (crc ^ (-1)); // >>> 0;
}

module.exports = function crc32wrapper(input, crc) {
    if (typeof input === "undefined" || !input.length) {
        return 0;
    }

    var isArray = utils.getTypeOf(input) !== "string";

    if(isArray) {
        return crc32(crc|0, input, input.length, 0);
    } else {
        return crc32str(crc|0, input, input.length, 0);
    }
};

},{"./utils":32}],5:[function(require,module,exports){
"use strict";
exports.base64 = false;
exports.binary = false;
exports.dir = false;
exports.createFolders = true;
exports.date = null;
exports.compression = null;
exports.compressionOptions = null;
exports.comment = null;
exports.unixPermissions = null;
exports.dosPermissions = null;

},{}],6:[function(require,module,exports){
"use strict";

// load the global object first:
// - it should be better integrated in the system (unhandledRejection in node)
// - the environment may have a custom Promise implementation (see zone.js)
var ES6Promise = null;
if (typeof Promise !== "undefined") {
    ES6Promise = Promise;
} else {
    ES6Promise = require("lie");
}

/**
 * Let the user use/change some implementations.
 */
module.exports = {
    Promise: ES6Promise
};

},{"lie":37}],7:[function(require,module,exports){
"use strict";
var USE_TYPEDARRAY = (typeof Uint8Array !== "undefined") && (typeof Uint16Array !== "undefined") && (typeof Uint32Array !== "undefined");

var pako = require("pako");
var utils = require("./utils");
var GenericWorker = require("./stream/GenericWorker");

var ARRAY_TYPE = USE_TYPEDARRAY ? "uint8array" : "array";

exports.magic = "\x08\x00";

/**
 * Create a worker that uses pako to inflate/deflate.
 * @constructor
 * @param {String} action the name of the pako function to call : either "Deflate" or "Inflate".
 * @param {Object} options the options to use when (de)compressing.
 */
function FlateWorker(action, options) {
    GenericWorker.call(this, "FlateWorker/" + action);

    this._pako = null;
    this._pakoAction = action;
    this._pakoOptions = options;
    // the `meta` object from the last chunk received
    // this allow this worker to pass around metadata
    this.meta = {};
}

utils.inherits(FlateWorker, GenericWorker);

/**
 * @see GenericWorker.processChunk
 */
FlateWorker.prototype.processChunk = function (chunk) {
    this.meta = chunk.meta;
    if (this._pako === null) {
        this._createPako();
    }
    this._pako.push(utils.transformTo(ARRAY_TYPE, chunk.data), false);
};

/**
 * @see GenericWorker.flush
 */
FlateWorker.prototype.flush = function () {
    GenericWorker.prototype.flush.call(this);
    if (this._pako === null) {
        this._createPako();
    }
    this._pako.push([], true);
};
/**
 * @see GenericWorker.cleanUp
 */
FlateWorker.prototype.cleanUp = function () {
    GenericWorker.prototype.cleanUp.call(this);
    this._pako = null;
};

/**
 * Create the _pako object.
 * TODO: lazy-loading this object isn't the best solution but it's the
 * quickest. The best solution is to lazy-load the worker list. See also the
 * issue #446.
 */
FlateWorker.prototype._createPako = function () {
    this._pako = new pako[this._pakoAction]({
        raw: true,
        level: this._pakoOptions.level || -1 // default compression
    });
    var self = this;
    this._pako.onData = function(data) {
        self.push({
            data : data,
            meta : self.meta
        });
    };
};

exports.compressWorker = function (compressionOptions) {
    return new FlateWorker("Deflate", compressionOptions);
};
exports.uncompressWorker = function () {
    return new FlateWorker("Inflate", {});
};

},{"./stream/GenericWorker":28,"./utils":32,"pako":38}],8:[function(require,module,exports){
"use strict";

var utils = require("../utils");
var GenericWorker = require("../stream/GenericWorker");
var utf8 = require("../utf8");
var crc32 = require("../crc32");
var signature = require("../signature");

/**
 * Transform an integer into a string in hexadecimal.
 * @private
 * @param {number} dec the number to convert.
 * @param {number} bytes the number of bytes to generate.
 * @returns {string} the result.
 */
var decToHex = function(dec, bytes) {
    var hex = "", i;
    for (i = 0; i < bytes; i++) {
        hex += String.fromCharCode(dec & 0xff);
        dec = dec >>> 8;
    }
    return hex;
};

/**
 * Generate the UNIX part of the external file attributes.
 * @param {Object} unixPermissions the unix permissions or null.
 * @param {Boolean} isDir true if the entry is a directory, false otherwise.
 * @return {Number} a 32 bit integer.
 *
 * adapted from http://unix.stackexchange.com/questions/14705/the-zip-formats-external-file-attribute :
 *
 * TTTTsstrwxrwxrwx0000000000ADVSHR
 * ^^^^____________________________ file type, see zipinfo.c (UNX_*)
 *     ^^^_________________________ setuid, setgid, sticky
 *        ^^^^^^^^^________________ permissions
 *                 ^^^^^^^^^^______ not used ?
 *                           ^^^^^^ DOS attribute bits : Archive, Directory, Volume label, System file, Hidden, Read only
 */
var generateUnixExternalFileAttr = function (unixPermissions, isDir) {

    var result = unixPermissions;
    if (!unixPermissions) {
        // I can't use octal values in strict mode, hence the hexa.
        //  040775 => 0x41fd
        // 0100664 => 0x81b4
        result = isDir ? 0x41fd : 0x81b4;
    }
    return (result & 0xFFFF) << 16;
};

/**
 * Generate the DOS part of the external file attributes.
 * @param {Object} dosPermissions the dos permissions or null.
 * @param {Boolean} isDir true if the entry is a directory, false otherwise.
 * @return {Number} a 32 bit integer.
 *
 * Bit 0     Read-Only
 * Bit 1     Hidden
 * Bit 2     System
 * Bit 3     Volume Label
 * Bit 4     Directory
 * Bit 5     Archive
 */
var generateDosExternalFileAttr = function (dosPermissions) {
    // the dir flag is already set for compatibility
    return (dosPermissions || 0)  & 0x3F;
};

/**
 * Generate the various parts used in the construction of the final zip file.
 * @param {Object} streamInfo the hash with information about the compressed file.
 * @param {Boolean} streamedContent is the content streamed ?
 * @param {Boolean} streamingEnded is the stream finished ?
 * @param {number} offset the current offset from the start of the zip file.
 * @param {String} platform let's pretend we are this platform (change platform dependents fields)
 * @param {Function} encodeFileName the function to encode the file name / comment.
 * @return {Object} the zip parts.
 */
var generateZipParts = function(streamInfo, streamedContent, streamingEnded, offset, platform, encodeFileName) {
    var file = streamInfo["file"],
        compression = streamInfo["compression"],
        useCustomEncoding = encodeFileName !== utf8.utf8encode,
        encodedFileName = utils.transformTo("string", encodeFileName(file.name)),
        utfEncodedFileName = utils.transformTo("string", utf8.utf8encode(file.name)),
        comment = file.comment,
        encodedComment = utils.transformTo("string", encodeFileName(comment)),
        utfEncodedComment = utils.transformTo("string", utf8.utf8encode(comment)),
        useUTF8ForFileName = utfEncodedFileName.length !== file.name.length,
        useUTF8ForComment = utfEncodedComment.length !== comment.length,
        dosTime,
        dosDate,
        extraFields = "",
        unicodePathExtraField = "",
        unicodeCommentExtraField = "",
        dir = file.dir,
        date = file.date;


    var dataInfo = {
        crc32 : 0,
        compressedSize : 0,
        uncompressedSize : 0
    };

    // if the content is streamed, the sizes/crc32 are only available AFTER
    // the end of the stream.
    if (!streamedContent || streamingEnded) {
        dataInfo.crc32 = streamInfo["crc32"];
        dataInfo.compressedSize = streamInfo["compressedSize"];
        dataInfo.uncompressedSize = streamInfo["uncompressedSize"];
    }

    var bitflag = 0;
    if (streamedContent) {
        // Bit 3: the sizes/crc32 are set to zero in the local header.
        // The correct values are put in the data descriptor immediately
        // following the compressed data.
        bitflag |= 0x0008;
    }
    if (!useCustomEncoding && (useUTF8ForFileName || useUTF8ForComment)) {
        // Bit 11: Language encoding flag (EFS).
        bitflag |= 0x0800;
    }


    var extFileAttr = 0;
    var versionMadeBy = 0;
    if (dir) {
        // dos or unix, we set the dos dir flag
        extFileAttr |= 0x00010;
    }
    if(platform === "UNIX") {
        versionMadeBy = 0x031E; // UNIX, version 3.0
        extFileAttr |= generateUnixExternalFileAttr(file.unixPermissions, dir);
    } else { // DOS or other, fallback to DOS
        versionMadeBy = 0x0014; // DOS, version 2.0
        extFileAttr |= generateDosExternalFileAttr(file.dosPermissions, dir);
    }

    // date
    // @see http://www.delorie.com/djgpp/doc/rbinter/it/52/13.html
    // @see http://www.delorie.com/djgpp/doc/rbinter/it/65/16.html
    // @see http://www.delorie.com/djgpp/doc/rbinter/it/66/16.html

    dosTime = date.getUTCHours();
    dosTime = dosTime << 6;
    dosTime = dosTime | date.getUTCMinutes();
    dosTime = dosTime << 5;
    dosTime = dosTime | date.getUTCSeconds() / 2;

    dosDate = date.getUTCFullYear() - 1980;
    dosDate = dosDate << 4;
    dosDate = dosDate | (date.getUTCMonth() + 1);
    dosDate = dosDate << 5;
    dosDate = dosDate | date.getUTCDate();

    if (useUTF8ForFileName) {
        // set the unicode path extra field. unzip needs at least one extra
        // field to correctly handle unicode path, so using the path is as good
        // as any other information. This could improve the situation with
        // other archive managers too.
        // This field is usually used without the utf8 flag, with a non
        // unicode path in the header (winrar, winzip). This helps (a bit)
        // with the messy Windows' default compressed folders feature but
        // breaks on p7zip which doesn't seek the unicode path extra field.
        // So for now, UTF-8 everywhere !
        unicodePathExtraField =
            // Version
            decToHex(1, 1) +
            // NameCRC32
            decToHex(crc32(encodedFileName), 4) +
            // UnicodeName
            utfEncodedFileName;

        extraFields +=
            // Info-ZIP Unicode Path Extra Field
            "\x75\x70" +
            // size
            decToHex(unicodePathExtraField.length, 2) +
            // content
            unicodePathExtraField;
    }

    if(useUTF8ForComment) {

        unicodeCommentExtraField =
            // Version
            decToHex(1, 1) +
            // CommentCRC32
            decToHex(crc32(encodedComment), 4) +
            // UnicodeName
            utfEncodedComment;

        extraFields +=
            // Info-ZIP Unicode Path Extra Field
            "\x75\x63" +
            // size
            decToHex(unicodeCommentExtraField.length, 2) +
            // content
            unicodeCommentExtraField;
    }

    var header = "";

    // version needed to extract
    header += "\x0A\x00";
    // general purpose bit flag
    header += decToHex(bitflag, 2);
    // compression method
    header += compression.magic;
    // last mod file time
    header += decToHex(dosTime, 2);
    // last mod file date
    header += decToHex(dosDate, 2);
    // crc-32
    header += decToHex(dataInfo.crc32, 4);
    // compressed size
    header += decToHex(dataInfo.compressedSize, 4);
    // uncompressed size
    header += decToHex(dataInfo.uncompressedSize, 4);
    // file name length
    header += decToHex(encodedFileName.length, 2);
    // extra field length
    header += decToHex(extraFields.length, 2);


    var fileRecord = signature.LOCAL_FILE_HEADER + header + encodedFileName + extraFields;

    var dirRecord = signature.CENTRAL_FILE_HEADER +
        // version made by (00: DOS)
        decToHex(versionMadeBy, 2) +
        // file header (common to file and central directory)
        header +
        // file comment length
        decToHex(encodedComment.length, 2) +
        // disk number start
        "\x00\x00" +
        // internal file attributes TODO
        "\x00\x00" +
        // external file attributes
        decToHex(extFileAttr, 4) +
        // relative offset of local header
        decToHex(offset, 4) +
        // file name
        encodedFileName +
        // extra field
        extraFields +
        // file comment
        encodedComment;

    return {
        fileRecord: fileRecord,
        dirRecord: dirRecord
    };
};

/**
 * Generate the EOCD record.
 * @param {Number} entriesCount the number of entries in the zip file.
 * @param {Number} centralDirLength the length (in bytes) of the central dir.
 * @param {Number} localDirLength the length (in bytes) of the local dir.
 * @param {String} comment the zip file comment as a binary string.
 * @param {Function} encodeFileName the function to encode the comment.
 * @return {String} the EOCD record.
 */
var generateCentralDirectoryEnd = function (entriesCount, centralDirLength, localDirLength, comment, encodeFileName) {
    var dirEnd = "";
    var encodedComment = utils.transformTo("string", encodeFileName(comment));

    // end of central dir signature
    dirEnd = signature.CENTRAL_DIRECTORY_END +
        // number of this disk
        "\x00\x00" +
        // number of the disk with the start of the central directory
        "\x00\x00" +
        // total number of entries in the central directory on this disk
        decToHex(entriesCount, 2) +
        // total number of entries in the central directory
        decToHex(entriesCount, 2) +
        // size of the central directory   4 bytes
        decToHex(centralDirLength, 4) +
        // offset of start of central directory with respect to the starting disk number
        decToHex(localDirLength, 4) +
        // .ZIP file comment length
        decToHex(encodedComment.length, 2) +
        // .ZIP file comment
        encodedComment;

    return dirEnd;
};

/**
 * Generate data descriptors for a file entry.
 * @param {Object} streamInfo the hash generated by a worker, containing information
 * on the file entry.
 * @return {String} the data descriptors.
 */
var generateDataDescriptors = function (streamInfo) {
    var descriptor = "";
    descriptor = signature.DATA_DESCRIPTOR +
        // crc-32                          4 bytes
        decToHex(streamInfo["crc32"], 4) +
        // compressed size                 4 bytes
        decToHex(streamInfo["compressedSize"], 4) +
        // uncompressed size               4 bytes
        decToHex(streamInfo["uncompressedSize"], 4);

    return descriptor;
};


/**
 * A worker to concatenate other workers to create a zip file.
 * @param {Boolean} streamFiles `true` to stream the content of the files,
 * `false` to accumulate it.
 * @param {String} comment the comment to use.
 * @param {String} platform the platform to use, "UNIX" or "DOS".
 * @param {Function} encodeFileName the function to encode file names and comments.
 */
function ZipFileWorker(streamFiles, comment, platform, encodeFileName) {
    GenericWorker.call(this, "ZipFileWorker");
    // The number of bytes written so far. This doesn't count accumulated chunks.
    this.bytesWritten = 0;
    // The comment of the zip file
    this.zipComment = comment;
    // The platform "generating" the zip file.
    this.zipPlatform = platform;
    // the function to encode file names and comments.
    this.encodeFileName = encodeFileName;
    // Should we stream the content of the files ?
    this.streamFiles = streamFiles;
    // If `streamFiles` is false, we will need to accumulate the content of the
    // files to calculate sizes / crc32 (and write them *before* the content).
    // This boolean indicates if we are accumulating chunks (it will change a lot
    // during the lifetime of this worker).
    this.accumulate = false;
    // The buffer receiving chunks when accumulating content.
    this.contentBuffer = [];
    // The list of generated directory records.
    this.dirRecords = [];
    // The offset (in bytes) from the beginning of the zip file for the current source.
    this.currentSourceOffset = 0;
    // The total number of entries in this zip file.
    this.entriesCount = 0;
    // the name of the file currently being added, null when handling the end of the zip file.
    // Used for the emitted metadata.
    this.currentFile = null;



    this._sources = [];
}
utils.inherits(ZipFileWorker, GenericWorker);

/**
 * @see GenericWorker.push
 */
ZipFileWorker.prototype.push = function (chunk) {

    var currentFilePercent = chunk.meta.percent || 0;
    var entriesCount = this.entriesCount;
    var remainingFiles = this._sources.length;

    if(this.accumulate) {
        this.contentBuffer.push(chunk);
    } else {
        this.bytesWritten += chunk.data.length;

        GenericWorker.prototype.push.call(this, {
            data : chunk.data,
            meta : {
                currentFile : this.currentFile,
                percent : entriesCount ? (currentFilePercent + 100 * (entriesCount - remainingFiles - 1)) / entriesCount : 100
            }
        });
    }
};

/**
 * The worker started a new source (an other worker).
 * @param {Object} streamInfo the streamInfo object from the new source.
 */
ZipFileWorker.prototype.openedSource = function (streamInfo) {
    this.currentSourceOffset = this.bytesWritten;
    this.currentFile = streamInfo["file"].name;

    var streamedContent = this.streamFiles && !streamInfo["file"].dir;

    // don't stream folders (because they don't have any content)
    if(streamedContent) {
        var record = generateZipParts(streamInfo, streamedContent, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        this.push({
            data : record.fileRecord,
            meta : {percent:0}
        });
    } else {
        // we need to wait for the whole file before pushing anything
        this.accumulate = true;
    }
};

/**
 * The worker finished a source (an other worker).
 * @param {Object} streamInfo the streamInfo object from the finished source.
 */
ZipFileWorker.prototype.closedSource = function (streamInfo) {
    this.accumulate = false;
    var streamedContent = this.streamFiles && !streamInfo["file"].dir;
    var record = generateZipParts(streamInfo, streamedContent, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);

    this.dirRecords.push(record.dirRecord);
    if(streamedContent) {
        // after the streamed file, we put data descriptors
        this.push({
            data : generateDataDescriptors(streamInfo),
            meta : {percent:100}
        });
    } else {
        // the content wasn't streamed, we need to push everything now
        // first the file record, then the content
        this.push({
            data : record.fileRecord,
            meta : {percent:0}
        });
        while(this.contentBuffer.length) {
            this.push(this.contentBuffer.shift());
        }
    }
    this.currentFile = null;
};

/**
 * @see GenericWorker.flush
 */
ZipFileWorker.prototype.flush = function () {

    var localDirLength = this.bytesWritten;
    for(var i = 0; i < this.dirRecords.length; i++) {
        this.push({
            data : this.dirRecords[i],
            meta : {percent:100}
        });
    }
    var centralDirLength = this.bytesWritten - localDirLength;

    var dirEnd = generateCentralDirectoryEnd(this.dirRecords.length, centralDirLength, localDirLength, this.zipComment, this.encodeFileName);

    this.push({
        data : dirEnd,
        meta : {percent:100}
    });
};

/**
 * Prepare the next source to be read.
 */
ZipFileWorker.prototype.prepareNextSource = function () {
    this.previous = this._sources.shift();
    this.openedSource(this.previous.streamInfo);
    if (this.isPaused) {
        this.previous.pause();
    } else {
        this.previous.resume();
    }
};

/**
 * @see GenericWorker.registerPrevious
 */
ZipFileWorker.prototype.registerPrevious = function (previous) {
    this._sources.push(previous);
    var self = this;

    previous.on("data", function (chunk) {
        self.processChunk(chunk);
    });
    previous.on("end", function () {
        self.closedSource(self.previous.streamInfo);
        if(self._sources.length) {
            self.prepareNextSource();
        } else {
            self.end();
        }
    });
    previous.on("error", function (e) {
        self.error(e);
    });
    return this;
};

/**
 * @see GenericWorker.resume
 */
ZipFileWorker.prototype.resume = function () {
    if(!GenericWorker.prototype.resume.call(this)) {
        return false;
    }

    if (!this.previous && this._sources.length) {
        this.prepareNextSource();
        return true;
    }
    if (!this.previous && !this._sources.length && !this.generatedError) {
        this.end();
        return true;
    }
};

/**
 * @see GenericWorker.error
 */
ZipFileWorker.prototype.error = function (e) {
    var sources = this._sources;
    if(!GenericWorker.prototype.error.call(this, e)) {
        return false;
    }
    for(var i = 0; i < sources.length; i++) {
        try {
            sources[i].error(e);
        } catch(e) {
            // the `error` exploded, nothing to do
        }
    }
    return true;
};

/**
 * @see GenericWorker.lock
 */
ZipFileWorker.prototype.lock = function () {
    GenericWorker.prototype.lock.call(this);
    var sources = this._sources;
    for(var i = 0; i < sources.length; i++) {
        sources[i].lock();
    }
};

module.exports = ZipFileWorker;

},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(require,module,exports){
"use strict";

var compressions = require("../compressions");
var ZipFileWorker = require("./ZipFileWorker");

/**
 * Find the compression to use.
 * @param {String} fileCompression the compression defined at the file level, if any.
 * @param {String} zipCompression the compression defined at the load() level.
 * @return {Object} the compression object to use.
 */
var getCompression = function (fileCompression, zipCompression) {

    var compressionName = fileCompression || zipCompression;
    var compression = compressions[compressionName];
    if (!compression) {
        throw new Error(compressionName + " is not a valid compression method !");
    }
    return compression;
};

/**
 * Create a worker to generate a zip file.
 * @param {JSZip} zip the JSZip instance at the right root level.
 * @param {Object} options to generate the zip file.
 * @param {String} comment the comment to use.
 */
exports.generateWorker = function (zip, options, comment) {

    var zipFileWorker = new ZipFileWorker(options.streamFiles, comment, options.platform, options.encodeFileName);
    var entriesCount = 0;
    try {

        zip.forEach(function (relativePath, file) {
            entriesCount++;
            var compression = getCompression(file.options.compression, options.compression);
            var compressionOptions = file.options.compressionOptions || options.compressionOptions || {};
            var dir = file.dir, date = file.date;

            file._compressWorker(compression, compressionOptions)
                .withStreamInfo("file", {
                    name : relativePath,
                    dir : dir,
                    date : date,
                    comment : file.comment || "",
                    unixPermissions : file.unixPermissions,
                    dosPermissions : file.dosPermissions
                })
                .pipe(zipFileWorker);
        });
        zipFileWorker.entriesCount = entriesCount;
    } catch (e) {
        zipFileWorker.error(e);
    }

    return zipFileWorker;
};

},{"../compressions":3,"./ZipFileWorker":8}],10:[function(require,module,exports){
"use strict";

/**
 * Representation a of zip file in js
 * @constructor
 */
function JSZip() {
    // if this constructor is used without `new`, it adds `new` before itself:
    if(!(this instanceof JSZip)) {
        return new JSZip();
    }

    if(arguments.length) {
        throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
    }

    // object containing the files :
    // {
    //   "folder/" : {...},
    //   "folder/data.txt" : {...}
    // }
    // NOTE: we use a null prototype because we do not
    // want filenames like "toString" coming from a zip file
    // to overwrite methods and attributes in a normal Object.
    this.files = Object.create(null);

    this.comment = null;

    // Where we are in the hierarchy
    this.root = "";
    this.clone = function() {
        var newObj = new JSZip();
        for (var i in this) {
            if (typeof this[i] !== "function") {
                newObj[i] = this[i];
            }
        }
        return newObj;
    };
}
JSZip.prototype = require("./object");
JSZip.prototype.loadAsync = require("./load");
JSZip.support = require("./support");
JSZip.defaults = require("./defaults");

// TODO find a better way to handle this version,
// a require('package.json').version doesn't work with webpack, see #327
JSZip.version = "3.10.1";

JSZip.loadAsync = function (content, options) {
    return new JSZip().loadAsync(content, options);
};

JSZip.external = require("./external");
module.exports = JSZip;

},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(require,module,exports){
"use strict";
var utils = require("./utils");
var external = require("./external");
var utf8 = require("./utf8");
var ZipEntries = require("./zipEntries");
var Crc32Probe = require("./stream/Crc32Probe");
var nodejsUtils = require("./nodejsUtils");

/**
 * Check the CRC32 of an entry.
 * @param {ZipEntry} zipEntry the zip entry to check.
 * @return {Promise} the result.
 */
function checkEntryCRC32(zipEntry) {
    return new external.Promise(function (resolve, reject) {
        var worker = zipEntry.decompressed.getContentWorker().pipe(new Crc32Probe());
        worker.on("error", function (e) {
            reject(e);
        })
            .on("end", function () {
                if (worker.streamInfo.crc32 !== zipEntry.decompressed.crc32) {
                    reject(new Error("Corrupted zip : CRC32 mismatch"));
                } else {
                    resolve();
                }
            })
            .resume();
    });
}

module.exports = function (data, options) {
    var zip = this;
    options = utils.extend(options || {}, {
        base64: false,
        checkCRC32: false,
        optimizedBinaryString: false,
        createFolders: false,
        decodeFileName: utf8.utf8decode
    });

    if (nodejsUtils.isNode && nodejsUtils.isStream(data)) {
        return external.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file."));
    }

    return utils.prepareContent("the loaded zip file", data, true, options.optimizedBinaryString, options.base64)
        .then(function (data) {
            var zipEntries = new ZipEntries(options);
            zipEntries.load(data);
            return zipEntries;
        }).then(function checkCRC32(zipEntries) {
            var promises = [external.Promise.resolve(zipEntries)];
            var files = zipEntries.files;
            if (options.checkCRC32) {
                for (var i = 0; i < files.length; i++) {
                    promises.push(checkEntryCRC32(files[i]));
                }
            }
            return external.Promise.all(promises);
        }).then(function addFiles(results) {
            var zipEntries = results.shift();
            var files = zipEntries.files;
            for (var i = 0; i < files.length; i++) {
                var input = files[i];

                var unsafeName = input.fileNameStr;
                var safeName = utils.resolve(input.fileNameStr);

                zip.file(safeName, input.decompressed, {
                    binary: true,
                    optimizedBinaryString: true,
                    date: input.date,
                    dir: input.dir,
                    comment: input.fileCommentStr.length ? input.fileCommentStr : null,
                    unixPermissions: input.unixPermissions,
                    dosPermissions: input.dosPermissions,
                    createFolders: options.createFolders
                });
                if (!input.dir) {
                    zip.file(safeName).unsafeOriginalName = unsafeName;
                }
            }
            if (zipEntries.zipComment.length) {
                zip.comment = zipEntries.zipComment;
            }

            return zip;
        });
};

},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(require,module,exports){
"use strict";

var utils = require("../utils");
var GenericWorker = require("../stream/GenericWorker");

/**
 * A worker that use a nodejs stream as source.
 * @constructor
 * @param {String} filename the name of the file entry for this stream.
 * @param {Readable} stream the nodejs stream.
 */
function NodejsStreamInputAdapter(filename, stream) {
    GenericWorker.call(this, "Nodejs stream input adapter for " + filename);
    this._upstreamEnded = false;
    this._bindStream(stream);
}

utils.inherits(NodejsStreamInputAdapter, GenericWorker);

/**
 * Prepare the stream and bind the callbacks on it.
 * Do this ASAP on node 0.10 ! A lazy binding doesn't always work.
 * @param {Stream} stream the nodejs stream to use.
 */
NodejsStreamInputAdapter.prototype._bindStream = function (stream) {
    var self = this;
    this._stream = stream;
    stream.pause();
    stream
        .on("data", function (chunk) {
            self.push({
                data: chunk,
                meta : {
                    percent : 0
                }
            });
        })
        .on("error", function (e) {
            if(self.isPaused) {
                this.generatedError = e;
            } else {
                self.error(e);
            }
        })
        .on("end", function () {
            if(self.isPaused) {
                self._upstreamEnded = true;
            } else {
                self.end();
            }
        });
};
NodejsStreamInputAdapter.prototype.pause = function () {
    if(!GenericWorker.prototype.pause.call(this)) {
        return false;
    }
    this._stream.pause();
    return true;
};
NodejsStreamInputAdapter.prototype.resume = function () {
    if(!GenericWorker.prototype.resume.call(this)) {
        return false;
    }

    if(this._upstreamEnded) {
        this.end();
    } else {
        this._stream.resume();
    }

    return true;
};

module.exports = NodejsStreamInputAdapter;

},{"../stream/GenericWorker":28,"../utils":32}],13:[function(require,module,exports){
"use strict";

var Readable = require("readable-stream").Readable;

var utils = require("../utils");
utils.inherits(NodejsStreamOutputAdapter, Readable);

/**
* A nodejs stream using a worker as source.
* @see the SourceWrapper in http://nodejs.org/api/stream.html
* @constructor
* @param {StreamHelper} helper the helper wrapping the worker
* @param {Object} options the nodejs stream options
* @param {Function} updateCb the update callback.
*/
function NodejsStreamOutputAdapter(helper, options, updateCb) {
    Readable.call(this, options);
    this._helper = helper;

    var self = this;
    helper.on("data", function (data, meta) {
        if (!self.push(data)) {
            self._helper.pause();
        }
        if(updateCb) {
            updateCb(meta);
        }
    })
        .on("error", function(e) {
            self.emit("error", e);
        })
        .on("end", function () {
            self.push(null);
        });
}


NodejsStreamOutputAdapter.prototype._read = function() {
    this._helper.resume();
};

module.exports = NodejsStreamOutputAdapter;

},{"../utils":32,"readable-stream":16}],14:[function(require,module,exports){
"use strict";

module.exports = {
    /**
     * True if this is running in Nodejs, will be undefined in a browser.
     * In a browser, browserify won't include this file and the whole module
     * will be resolved an empty object.
     */
    isNode : typeof Buffer !== "undefined",
    /**
     * Create a new nodejs Buffer from an existing content.
     * @param {Object} data the data to pass to the constructor.
     * @param {String} encoding the encoding to use.
     * @return {Buffer} a new Buffer.
     */
    newBufferFrom: function(data, encoding) {
        if (Buffer.from && Buffer.from !== Uint8Array.from) {
            return Buffer.from(data, encoding);
        } else {
            if (typeof data === "number") {
                // Safeguard for old Node.js versions. On newer versions,
                // Buffer.from(number) / Buffer(number, encoding) already throw.
                throw new Error("The \"data\" argument must not be a number");
            }
            return new Buffer(data, encoding);
        }
    },
    /**
     * Create a new nodejs Buffer with the specified size.
     * @param {Integer} size the size of the buffer.
     * @return {Buffer} a new Buffer.
     */
    allocBuffer: function (size) {
        if (Buffer.alloc) {
            return Buffer.alloc(size);
        } else {
            var buf = new Buffer(size);
            buf.fill(0);
            return buf;
        }
    },
    /**
     * Find out if an object is a Buffer.
     * @param {Object} b the object to test.
     * @return {Boolean} true if the object is a Buffer, false otherwise.
     */
    isBuffer : function(b){
        return Buffer.isBuffer(b);
    },

    isStream : function (obj) {
        return obj &&
            typeof obj.on === "function" &&
            typeof obj.pause === "function" &&
            typeof obj.resume === "function";
    }
};

},{}],15:[function(require,module,exports){
"use strict";
var utf8 = require("./utf8");
var utils = require("./utils");
var GenericWorker = require("./stream/GenericWorker");
var StreamHelper = require("./stream/StreamHelper");
var defaults = require("./defaults");
var CompressedObject = require("./compressedObject");
var ZipObject = require("./zipObject");
var generate = require("./generate");
var nodejsUtils = require("./nodejsUtils");
var NodejsStreamInputAdapter = require("./nodejs/NodejsStreamInputAdapter");


/**
 * Add a file in the current folder.
 * @private
 * @param {string} name the name of the file
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data of the file
 * @param {Object} originalOptions the options of the file
 * @return {Object} the new file.
 */
var fileAdd = function(name, data, originalOptions) {
    // be sure sub folders exist
    var dataType = utils.getTypeOf(data),
        parent;


    /*
     * Correct options.
     */

    var o = utils.extend(originalOptions || {}, defaults);
    o.date = o.date || new Date();
    if (o.compression !== null) {
        o.compression = o.compression.toUpperCase();
    }

    if (typeof o.unixPermissions === "string") {
        o.unixPermissions = parseInt(o.unixPermissions, 8);
    }

    // UNX_IFDIR  0040000 see zipinfo.c
    if (o.unixPermissions && (o.unixPermissions & 0x4000)) {
        o.dir = true;
    }
    // Bit 4    Directory
    if (o.dosPermissions && (o.dosPermissions & 0x0010)) {
        o.dir = true;
    }

    if (o.dir) {
        name = forceTrailingSlash(name);
    }
    if (o.createFolders && (parent = parentFolder(name))) {
        folderAdd.call(this, parent, true);
    }

    var isUnicodeString = dataType === "string" && o.binary === false && o.base64 === false;
    if (!originalOptions || typeof originalOptions.binary === "undefined") {
        o.binary = !isUnicodeString;
    }


    var isCompressedEmpty = (data instanceof CompressedObject) && data.uncompressedSize === 0;

    if (isCompressedEmpty || o.dir || !data || data.length === 0) {
        o.base64 = false;
        o.binary = true;
        data = "";
        o.compression = "STORE";
        dataType = "string";
    }

    /*
     * Convert content to fit.
     */

    var zipObjectContent = null;
    if (data instanceof CompressedObject || data instanceof GenericWorker) {
        zipObjectContent = data;
    } else if (nodejsUtils.isNode && nodejsUtils.isStream(data)) {
        zipObjectContent = new NodejsStreamInputAdapter(name, data);
    } else {
        zipObjectContent = utils.prepareContent(name, data, o.binary, o.optimizedBinaryString, o.base64);
    }

    var object = new ZipObject(name, zipObjectContent, o);
    this.files[name] = object;
    /*
    TODO: we can't throw an exception because we have async promises
    (we can have a promise of a Date() for example) but returning a
    promise is useless because file(name, data) returns the JSZip
    object for chaining. Should we break that to allow the user
    to catch the error ?

    return external.Promise.resolve(zipObjectContent)
    .then(function () {
        return object;
    });
    */
};

/**
 * Find the parent folder of the path.
 * @private
 * @param {string} path the path to use
 * @return {string} the parent folder, or ""
 */
var parentFolder = function (path) {
    if (path.slice(-1) === "/") {
        path = path.substring(0, path.length - 1);
    }
    var lastSlash = path.lastIndexOf("/");
    return (lastSlash > 0) ? path.substring(0, lastSlash) : "";
};

/**
 * Returns the path with a slash at the end.
 * @private
 * @param {String} path the path to check.
 * @return {String} the path with a trailing slash.
 */
var forceTrailingSlash = function(path) {
    // Check the name ends with a /
    if (path.slice(-1) !== "/") {
        path += "/"; // IE doesn't like substr(-1)
    }
    return path;
};

/**
 * Add a (sub) folder in the current folder.
 * @private
 * @param {string} name the folder's name
 * @param {boolean=} [createFolders] If true, automatically create sub
 *  folders. Defaults to false.
 * @return {Object} the new folder.
 */
var folderAdd = function(name, createFolders) {
    createFolders = (typeof createFolders !== "undefined") ? createFolders : defaults.createFolders;

    name = forceTrailingSlash(name);

    // Does this folder already exist?
    if (!this.files[name]) {
        fileAdd.call(this, name, null, {
            dir: true,
            createFolders: createFolders
        });
    }
    return this.files[name];
};

/**
* Cross-window, cross-Node-context regular expression detection
* @param  {Object}  object Anything
* @return {Boolean}        true if the object is a regular expression,
* false otherwise
*/
function isRegExp(object) {
    return Object.prototype.toString.call(object) === "[object RegExp]";
}

// return the actual prototype of JSZip
var out = {
    /**
     * @see loadAsync
     */
    load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
    },


    /**
     * Call a callback function for each entry at this folder level.
     * @param {Function} cb the callback function:
     * function (relativePath, file) {...}
     * It takes 2 arguments : the relative path and the file.
     */
    forEach: function(cb) {
        var filename, relativePath, file;
        // ignore warning about unwanted properties because this.files is a null prototype object
        /* eslint-disable-next-line guard-for-in */
        for (filename in this.files) {
            file = this.files[filename];
            relativePath = filename.slice(this.root.length, filename.length);
            if (relativePath && filename.slice(0, this.root.length) === this.root) { // the file is in the current root
                cb(relativePath, file); // TODO reverse the parameters ? need to be clean AND consistent with the filter search fn...
            }
        }
    },

    /**
     * Filter nested files/folders with the specified function.
     * @param {Function} search the predicate to use :
     * function (relativePath, file) {...}
     * It takes 2 arguments : the relative path and the file.
     * @return {Array} An array of matching elements.
     */
    filter: function(search) {
        var result = [];
        this.forEach(function (relativePath, entry) {
            if (search(relativePath, entry)) { // the file matches the function
                result.push(entry);
            }

        });
        return result;
    },

    /**
     * Add a file to the zip file, or search a file.
     * @param   {string|RegExp} name The name of the file to add (if data is defined),
     * the name of the file to find (if no data) or a regex to match files.
     * @param   {String|ArrayBuffer|Uint8Array|Buffer} data  The file data, either raw or base64 encoded
     * @param   {Object} o     File options
     * @return  {JSZip|Object|Array} this JSZip object (when adding a file),
     * a file (when searching by string) or an array of files (when searching by regex).
     */
    file: function(name, data, o) {
        if (arguments.length === 1) {
            if (isRegExp(name)) {
                var regexp = name;
                return this.filter(function(relativePath, file) {
                    return !file.dir && regexp.test(relativePath);
                });
            }
            else { // text
                var obj = this.files[this.root + name];
                if (obj && !obj.dir) {
                    return obj;
                } else {
                    return null;
                }
            }
        }
        else { // more than one argument : we have data !
            name = this.root + name;
            fileAdd.call(this, name, data, o);
        }
        return this;
    },

    /**
     * Add a directory to the zip file, or search.
     * @param   {String|RegExp} arg The name of the directory to add, or a regex to search folders.
     * @return  {JSZip} an object with the new directory as the root, or an array containing matching folders.
     */
    folder: function(arg) {
        if (!arg) {
            return this;
        }

        if (isRegExp(arg)) {
            return this.filter(function(relativePath, file) {
                return file.dir && arg.test(relativePath);
            });
        }

        // else, name is a new folder
        var name = this.root + arg;
        var newFolder = folderAdd.call(this, name);

        // Allow chaining by returning a new object with this folder as the root
        var ret = this.clone();
        ret.root = newFolder.name;
        return ret;
    },

    /**
     * Delete a file, or a directory and all sub-files, from the zip
     * @param {string} name the name of the file to delete
     * @return {JSZip} this JSZip object
     */
    remove: function(name) {
        name = this.root + name;
        var file = this.files[name];
        if (!file) {
            // Look for any folders
            if (name.slice(-1) !== "/") {
                name += "/";
            }
            file = this.files[name];
        }

        if (file && !file.dir) {
            // file
            delete this.files[name];
        } else {
            // maybe a folder, delete recursively
            var kids = this.filter(function(relativePath, file) {
                return file.name.slice(0, name.length) === name;
            });
            for (var i = 0; i < kids.length; i++) {
                delete this.files[kids[i].name];
            }
        }

        return this;
    },

    /**
     * @deprecated This method has been removed in JSZip 3.0, please check the upgrade guide.
     */
    generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
    },

    /**
     * Generate the complete zip file as an internal stream.
     * @param {Object} options the options to generate the zip file :
     * - compression, "STORE" by default.
     * - type, "base64" by default. Values are : string, base64, uint8array, arraybuffer, blob.
     * @return {StreamHelper} the streamed zip file.
     */
    generateInternalStream: function(options) {
        var worker, opts = {};
        try {
            opts = utils.extend(options || {}, {
                streamFiles: false,
                compression: "STORE",
                compressionOptions : null,
                type: "",
                platform: "DOS",
                comment: null,
                mimeType: "application/zip",
                encodeFileName: utf8.utf8encode
            });

            opts.type = opts.type.toLowerCase();
            opts.compression = opts.compression.toUpperCase();

            // "binarystring" is preferred but the internals use "string".
            if(opts.type === "binarystring") {
                opts.type = "string";
            }

            if (!opts.type) {
                throw new Error("No output type specified.");
            }

            utils.checkSupport(opts.type);

            // accept nodejs `process.platform`
            if(
                opts.platform === "darwin" ||
                opts.platform === "freebsd" ||
                opts.platform === "linux" ||
                opts.platform === "sunos"
            ) {
                opts.platform = "UNIX";
            }
            if (opts.platform === "win32") {
                opts.platform = "DOS";
            }

            var comment = opts.comment || this.comment || "";
            worker = generate.generateWorker(this, opts, comment);
        } catch (e) {
            worker = new GenericWorker("error");
            worker.error(e);
        }
        return new StreamHelper(worker, opts.type || "string", opts.mimeType);
    },
    /**
     * Generate the complete zip file asynchronously.
     * @see generateInternalStream
     */
    generateAsync: function(options, onUpdate) {
        return this.generateInternalStream(options).accumulate(onUpdate);
    },
    /**
     * Generate the complete zip file asynchronously.
     * @see generateInternalStream
     */
    generateNodeStream: function(options, onUpdate) {
        options = options || {};
        if (!options.type) {
            options.type = "nodebuffer";
        }
        return this.generateInternalStream(options).toNodejsStream(onUpdate);
    }
};
module.exports = out;

},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(require,module,exports){
"use strict";
/*
 * This file is used by module bundlers (browserify/webpack/etc) when
 * including a stream implementation. We use "readable-stream" to get a
 * consistent behavior between nodejs versions but bundlers often have a shim
 * for "stream". Using this shim greatly improve the compatibility and greatly
 * reduce the final size of the bundle (only one stream implementation, not
 * two).
 */
module.exports = require("stream");

},{"stream":undefined}],17:[function(require,module,exports){
"use strict";
var DataReader = require("./DataReader");
var utils = require("../utils");

function ArrayReader(data) {
    DataReader.call(this, data);
    for(var i = 0; i < this.data.length; i++) {
        data[i] = data[i] & 0xFF;
    }
}
utils.inherits(ArrayReader, DataReader);
/**
 * @see DataReader.byteAt
 */
ArrayReader.prototype.byteAt = function(i) {
    return this.data[this.zero + i];
};
/**
 * @see DataReader.lastIndexOfSignature
 */
ArrayReader.prototype.lastIndexOfSignature = function(sig) {
    var sig0 = sig.charCodeAt(0),
        sig1 = sig.charCodeAt(1),
        sig2 = sig.charCodeAt(2),
        sig3 = sig.charCodeAt(3);
    for (var i = this.length - 4; i >= 0; --i) {
        if (this.data[i] === sig0 && this.data[i + 1] === sig1 && this.data[i + 2] === sig2 && this.data[i + 3] === sig3) {
            return i - this.zero;
        }
    }

    return -1;
};
/**
 * @see DataReader.readAndCheckSignature
 */
ArrayReader.prototype.readAndCheckSignature = function (sig) {
    var sig0 = sig.charCodeAt(0),
        sig1 = sig.charCodeAt(1),
        sig2 = sig.charCodeAt(2),
        sig3 = sig.charCodeAt(3),
        data = this.readData(4);
    return sig0 === data[0] && sig1 === data[1] && sig2 === data[2] && sig3 === data[3];
};
/**
 * @see DataReader.readData
 */
ArrayReader.prototype.readData = function(size) {
    this.checkOffset(size);
    if(size === 0) {
        return [];
    }
    var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = ArrayReader;

},{"../utils":32,"./DataReader":18}],18:[function(require,module,exports){
"use strict";
var utils = require("../utils");

function DataReader(data) {
    this.data = data; // type : see implementation
    this.length = data.length;
    this.index = 0;
    this.zero = 0;
}
DataReader.prototype = {
    /**
     * Check that the offset will not go too far.
     * @param {string} offset the additional offset to check.
     * @throws {Error} an Error if the offset is out of bounds.
     */
    checkOffset: function(offset) {
        this.checkIndex(this.index + offset);
    },
    /**
     * Check that the specified index will not be too far.
     * @param {string} newIndex the index to check.
     * @throws {Error} an Error if the index is out of bounds.
     */
    checkIndex: function(newIndex) {
        if (this.length < this.zero + newIndex || newIndex < 0) {
            throw new Error("End of data reached (data length = " + this.length + ", asked index = " + (newIndex) + "). Corrupted zip ?");
        }
    },
    /**
     * Change the index.
     * @param {number} newIndex The new index.
     * @throws {Error} if the new index is out of the data.
     */
    setIndex: function(newIndex) {
        this.checkIndex(newIndex);
        this.index = newIndex;
    },
    /**
     * Skip the next n bytes.
     * @param {number} n the number of bytes to skip.
     * @throws {Error} if the new index is out of the data.
     */
    skip: function(n) {
        this.setIndex(this.index + n);
    },
    /**
     * Get the byte at the specified index.
     * @param {number} i the index to use.
     * @return {number} a byte.
     */
    byteAt: function() {
        // see implementations
    },
    /**
     * Get the next number with a given byte size.
     * @param {number} size the number of bytes to read.
     * @return {number} the corresponding number.
     */
    readInt: function(size) {
        var result = 0,
            i;
        this.checkOffset(size);
        for (i = this.index + size - 1; i >= this.index; i--) {
            result = (result << 8) + this.byteAt(i);
        }
        this.index += size;
        return result;
    },
    /**
     * Get the next string with a given byte size.
     * @param {number} size the number of bytes to read.
     * @return {string} the corresponding string.
     */
    readString: function(size) {
        return utils.transformTo("string", this.readData(size));
    },
    /**
     * Get raw data without conversion, <size> bytes.
     * @param {number} size the number of bytes to read.
     * @return {Object} the raw data, implementation specific.
     */
    readData: function() {
        // see implementations
    },
    /**
     * Find the last occurrence of a zip signature (4 bytes).
     * @param {string} sig the signature to find.
     * @return {number} the index of the last occurrence, -1 if not found.
     */
    lastIndexOfSignature: function() {
        // see implementations
    },
    /**
     * Read the signature (4 bytes) at the current position and compare it with sig.
     * @param {string} sig the expected signature
     * @return {boolean} true if the signature matches, false otherwise.
     */
    readAndCheckSignature: function() {
        // see implementations
    },
    /**
     * Get the next date.
     * @return {Date} the date.
     */
    readDate: function() {
        var dostime = this.readInt(4);
        return new Date(Date.UTC(
            ((dostime >> 25) & 0x7f) + 1980, // year
            ((dostime >> 21) & 0x0f) - 1, // month
            (dostime >> 16) & 0x1f, // day
            (dostime >> 11) & 0x1f, // hour
            (dostime >> 5) & 0x3f, // minute
            (dostime & 0x1f) << 1)); // second
    }
};
module.exports = DataReader;

},{"../utils":32}],19:[function(require,module,exports){
"use strict";
var Uint8ArrayReader = require("./Uint8ArrayReader");
var utils = require("../utils");

function NodeBufferReader(data) {
    Uint8ArrayReader.call(this, data);
}
utils.inherits(NodeBufferReader, Uint8ArrayReader);

/**
 * @see DataReader.readData
 */
NodeBufferReader.prototype.readData = function(size) {
    this.checkOffset(size);
    var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = NodeBufferReader;

},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(require,module,exports){
"use strict";
var DataReader = require("./DataReader");
var utils = require("../utils");

function StringReader(data) {
    DataReader.call(this, data);
}
utils.inherits(StringReader, DataReader);
/**
 * @see DataReader.byteAt
 */
StringReader.prototype.byteAt = function(i) {
    return this.data.charCodeAt(this.zero + i);
};
/**
 * @see DataReader.lastIndexOfSignature
 */
StringReader.prototype.lastIndexOfSignature = function(sig) {
    return this.data.lastIndexOf(sig) - this.zero;
};
/**
 * @see DataReader.readAndCheckSignature
 */
StringReader.prototype.readAndCheckSignature = function (sig) {
    var data = this.readData(4);
    return sig === data;
};
/**
 * @see DataReader.readData
 */
StringReader.prototype.readData = function(size) {
    this.checkOffset(size);
    // this will work because the constructor applied the "& 0xff" mask.
    var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = StringReader;

},{"../utils":32,"./DataReader":18}],21:[function(require,module,exports){
"use strict";
var ArrayReader = require("./ArrayReader");
var utils = require("../utils");

function Uint8ArrayReader(data) {
    ArrayReader.call(this, data);
}
utils.inherits(Uint8ArrayReader, ArrayReader);
/**
 * @see DataReader.readData
 */
Uint8ArrayReader.prototype.readData = function(size) {
    this.checkOffset(size);
    if(size === 0) {
        // in IE10, when using subarray(idx, idx), we get the array [0x00] instead of [].
        return new Uint8Array(0);
    }
    var result = this.data.subarray(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = Uint8ArrayReader;

},{"../utils":32,"./ArrayReader":17}],22:[function(require,module,exports){
"use strict";

var utils = require("../utils");
var support = require("../support");
var ArrayReader = require("./ArrayReader");
var StringReader = require("./StringReader");
var NodeBufferReader = require("./NodeBufferReader");
var Uint8ArrayReader = require("./Uint8ArrayReader");

/**
 * Create a reader adapted to the data.
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data to read.
 * @return {DataReader} the data reader.
 */
module.exports = function (data) {
    var type = utils.getTypeOf(data);
    utils.checkSupport(type);
    if (type === "string" && !support.uint8array) {
        return new StringReader(data);
    }
    if (type === "nodebuffer") {
        return new NodeBufferReader(data);
    }
    if (support.uint8array) {
        return new Uint8ArrayReader(utils.transformTo("uint8array", data));
    }
    return new ArrayReader(utils.transformTo("array", data));
};

},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(require,module,exports){
"use strict";
exports.LOCAL_FILE_HEADER = "PK\x03\x04";
exports.CENTRAL_FILE_HEADER = "PK\x01\x02";
exports.CENTRAL_DIRECTORY_END = "PK\x05\x06";
exports.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x06\x07";
exports.ZIP64_CENTRAL_DIRECTORY_END = "PK\x06\x06";
exports.DATA_DESCRIPTOR = "PK\x07\x08";

},{}],24:[function(require,module,exports){
"use strict";

var GenericWorker = require("./GenericWorker");
var utils = require("../utils");

/**
 * A worker which convert chunks to a specified type.
 * @constructor
 * @param {String} destType the destination type.
 */
function ConvertWorker(destType) {
    GenericWorker.call(this, "ConvertWorker to " + destType);
    this.destType = destType;
}
utils.inherits(ConvertWorker, GenericWorker);

/**
 * @see GenericWorker.processChunk
 */
ConvertWorker.prototype.processChunk = function (chunk) {
    this.push({
        data : utils.transformTo(this.destType, chunk.data),
        meta : chunk.meta
    });
};
module.exports = ConvertWorker;

},{"../utils":32,"./GenericWorker":28}],25:[function(require,module,exports){
"use strict";

var GenericWorker = require("./GenericWorker");
var crc32 = require("../crc32");
var utils = require("../utils");

/**
 * A worker which calculate the crc32 of the data flowing through.
 * @constructor
 */
function Crc32Probe() {
    GenericWorker.call(this, "Crc32Probe");
    this.withStreamInfo("crc32", 0);
}
utils.inherits(Crc32Probe, GenericWorker);

/**
 * @see GenericWorker.processChunk
 */
Crc32Probe.prototype.processChunk = function (chunk) {
    this.streamInfo.crc32 = crc32(chunk.data, this.streamInfo.crc32 || 0);
    this.push(chunk);
};
module.exports = Crc32Probe;

},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(require,module,exports){
"use strict";

var utils = require("../utils");
var GenericWorker = require("./GenericWorker");

/**
 * A worker which calculate the total length of the data flowing through.
 * @constructor
 * @param {String} propName the name used to expose the length
 */
function DataLengthProbe(propName) {
    GenericWorker.call(this, "DataLengthProbe for " + propName);
    this.propName = propName;
    this.withStreamInfo(propName, 0);
}
utils.inherits(DataLengthProbe, GenericWorker);

/**
 * @see GenericWorker.processChunk
 */
DataLengthProbe.prototype.processChunk = function (chunk) {
    if(chunk) {
        var length = this.streamInfo[this.propName] || 0;
        this.streamInfo[this.propName] = length + chunk.data.length;
    }
    GenericWorker.prototype.processChunk.call(this, chunk);
};
module.exports = DataLengthProbe;


},{"../utils":32,"./GenericWorker":28}],27:[function(require,module,exports){
"use strict";

var utils = require("../utils");
var GenericWorker = require("./GenericWorker");

// the size of the generated chunks
// TODO expose this as a public variable
var DEFAULT_BLOCK_SIZE = 16 * 1024;

/**
 * A worker that reads a content and emits chunks.
 * @constructor
 * @param {Promise} dataP the promise of the data to split
 */
function DataWorker(dataP) {
    GenericWorker.call(this, "DataWorker");
    var self = this;
    this.dataIsReady = false;
    this.index = 0;
    this.max = 0;
    this.data = null;
    this.type = "";

    this._tickScheduled = false;

    dataP.then(function (data) {
        self.dataIsReady = true;
        self.data = data;
        self.max = data && data.length || 0;
        self.type = utils.getTypeOf(data);
        if(!self.isPaused) {
            self._tickAndRepeat();
        }
    }, function (e) {
        self.error(e);
    });
}

utils.inherits(DataWorker, GenericWorker);

/**
 * @see GenericWorker.cleanUp
 */
DataWorker.prototype.cleanUp = function () {
    GenericWorker.prototype.cleanUp.call(this);
    this.data = null;
};

/**
 * @see GenericWorker.resume
 */
DataWorker.prototype.resume = function () {
    if(!GenericWorker.prototype.resume.call(this)) {
        return false;
    }

    if (!this._tickScheduled && this.dataIsReady) {
        this._tickScheduled = true;
        utils.delay(this._tickAndRepeat, [], this);
    }
    return true;
};

/**
 * Trigger a tick a schedule an other call to this function.
 */
DataWorker.prototype._tickAndRepeat = function() {
    this._tickScheduled = false;
    if(this.isPaused || this.isFinished) {
        return;
    }
    this._tick();
    if(!this.isFinished) {
        utils.delay(this._tickAndRepeat, [], this);
        this._tickScheduled = true;
    }
};

/**
 * Read and push a chunk.
 */
DataWorker.prototype._tick = function() {

    if(this.isPaused || this.isFinished) {
        return false;
    }

    var size = DEFAULT_BLOCK_SIZE;
    var data = null, nextIndex = Math.min(this.max, this.index + size);
    if (this.index >= this.max) {
        // EOF
        return this.end();
    } else {
        switch(this.type) {
        case "string":
            data = this.data.substring(this.index, nextIndex);
            break;
        case "uint8array":
            data = this.data.subarray(this.index, nextIndex);
            break;
        case "array":
        case "nodebuffer":
            data = this.data.slice(this.index, nextIndex);
            break;
        }
        this.index = nextIndex;
        return this.push({
            data : data,
            meta : {
                percent : this.max ? this.index / this.max * 100 : 0
            }
        });
    }
};

module.exports = DataWorker;

},{"../utils":32,"./GenericWorker":28}],28:[function(require,module,exports){
"use strict";

/**
 * A worker that does nothing but passing chunks to the next one. This is like
 * a nodejs stream but with some differences. On the good side :
 * - it works on IE 6-9 without any issue / polyfill
 * - it weights less than the full dependencies bundled with browserify
 * - it forwards errors (no need to declare an error handler EVERYWHERE)
 *
 * A chunk is an object with 2 attributes : `meta` and `data`. The former is an
 * object containing anything (`percent` for example), see each worker for more
 * details. The latter is the real data (String, Uint8Array, etc).
 *
 * @constructor
 * @param {String} name the name of the stream (mainly used for debugging purposes)
 */
function GenericWorker(name) {
    // the name of the worker
    this.name = name || "default";
    // an object containing metadata about the workers chain
    this.streamInfo = {};
    // an error which happened when the worker was paused
    this.generatedError = null;
    // an object containing metadata to be merged by this worker into the general metadata
    this.extraStreamInfo = {};
    // true if the stream is paused (and should not do anything), false otherwise
    this.isPaused = true;
    // true if the stream is finished (and should not do anything), false otherwise
    this.isFinished = false;
    // true if the stream is locked to prevent further structure updates (pipe), false otherwise
    this.isLocked = false;
    // the event listeners
    this._listeners = {
        "data":[],
        "end":[],
        "error":[]
    };
    // the previous worker, if any
    this.previous = null;
}

GenericWorker.prototype = {
    /**
     * Push a chunk to the next workers.
     * @param {Object} chunk the chunk to push
     */
    push : function (chunk) {
        this.emit("data", chunk);
    },
    /**
     * End the stream.
     * @return {Boolean} true if this call ended the worker, false otherwise.
     */
    end : function () {
        if (this.isFinished) {
            return false;
        }

        this.flush();
        try {
            this.emit("end");
            this.cleanUp();
            this.isFinished = true;
        } catch (e) {
            this.emit("error", e);
        }
        return true;
    },
    /**
     * End the stream with an error.
     * @param {Error} e the error which caused the premature end.
     * @return {Boolean} true if this call ended the worker with an error, false otherwise.
     */
    error : function (e) {
        if (this.isFinished) {
            return false;
        }

        if(this.isPaused) {
            this.generatedError = e;
        } else {
            this.isFinished = true;

            this.emit("error", e);

            // in the workers chain exploded in the middle of the chain,
            // the error event will go downward but we also need to notify
            // workers upward that there has been an error.
            if(this.previous) {
                this.previous.error(e);
            }

            this.cleanUp();
        }
        return true;
    },
    /**
     * Add a callback on an event.
     * @param {String} name the name of the event (data, end, error)
     * @param {Function} listener the function to call when the event is triggered
     * @return {GenericWorker} the current object for chainability
     */
    on : function (name, listener) {
        this._listeners[name].push(listener);
        return this;
    },
    /**
     * Clean any references when a worker is ending.
     */
    cleanUp : function () {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null;
        this._listeners = [];
    },
    /**
     * Trigger an event. This will call registered callback with the provided arg.
     * @param {String} name the name of the event (data, end, error)
     * @param {Object} arg the argument to call the callback with.
     */
    emit : function (name, arg) {
        if (this._listeners[name]) {
            for(var i = 0; i < this._listeners[name].length; i++) {
                this._listeners[name][i].call(this, arg);
            }
        }
    },
    /**
     * Chain a worker with an other.
     * @param {Worker} next the worker receiving events from the current one.
     * @return {worker} the next worker for chainability
     */
    pipe : function (next) {
        return next.registerPrevious(this);
    },
    /**
     * Same as `pipe` in the other direction.
     * Using an API with `pipe(next)` is very easy.
     * Implementing the API with the point of view of the next one registering
     * a source is easier, see the ZipFileWorker.
     * @param {Worker} previous the previous worker, sending events to this one
     * @return {Worker} the current worker for chainability
     */
    registerPrevious : function (previous) {
        if (this.isLocked) {
            throw new Error("The stream '" + this + "' has already been used.");
        }

        // sharing the streamInfo...
        this.streamInfo = previous.streamInfo;
        // ... and adding our own bits
        this.mergeStreamInfo();
        this.previous =  previous;
        var self = this;
        previous.on("data", function (chunk) {
            self.processChunk(chunk);
        });
        previous.on("end", function () {
            self.end();
        });
        previous.on("error", function (e) {
            self.error(e);
        });
        return this;
    },
    /**
     * Pause the stream so it doesn't send events anymore.
     * @return {Boolean} true if this call paused the worker, false otherwise.
     */
    pause : function () {
        if(this.isPaused || this.isFinished) {
            return false;
        }
        this.isPaused = true;

        if(this.previous) {
            this.previous.pause();
        }
        return true;
    },
    /**
     * Resume a paused stream.
     * @return {Boolean} true if this call resumed the worker, false otherwise.
     */
    resume : function () {
        if(!this.isPaused || this.isFinished) {
            return false;
        }
        this.isPaused = false;

        // if true, the worker tried to resume but failed
        var withError = false;
        if(this.generatedError) {
            this.error(this.generatedError);
            withError = true;
        }
        if(this.previous) {
            this.previous.resume();
        }

        return !withError;
    },
    /**
     * Flush any remaining bytes as the stream is ending.
     */
    flush : function () {},
    /**
     * Process a chunk. This is usually the method overridden.
     * @param {Object} chunk the chunk to process.
     */
    processChunk : function(chunk) {
        this.push(chunk);
    },
    /**
     * Add a key/value to be added in the workers chain streamInfo once activated.
     * @param {String} key the key to use
     * @param {Object} value the associated value
     * @return {Worker} the current worker for chainability
     */
    withStreamInfo : function (key, value) {
        this.extraStreamInfo[key] = value;
        this.mergeStreamInfo();
        return this;
    },
    /**
     * Merge this worker's streamInfo into the chain's streamInfo.
     */
    mergeStreamInfo : function () {
        for(var key in this.extraStreamInfo) {
            if (!Object.prototype.hasOwnProperty.call(this.extraStreamInfo, key)) {
                continue;
            }
            this.streamInfo[key] = this.extraStreamInfo[key];
        }
    },

    /**
     * Lock the stream to prevent further updates on the workers chain.
     * After calling this method, all calls to pipe will fail.
     */
    lock: function () {
        if (this.isLocked) {
            throw new Error("The stream '" + this + "' has already been used.");
        }
        this.isLocked = true;
        if (this.previous) {
            this.previous.lock();
        }
    },

    /**
     *
     * Pretty print the workers chain.
     */
    toString : function () {
        var me = "Worker " + this.name;
        if (this.previous) {
            return this.previous + " -> " + me;
        } else {
            return me;
        }
    }
};

module.exports = GenericWorker;

},{}],29:[function(require,module,exports){
"use strict";

var utils = require("../utils");
var ConvertWorker = require("./ConvertWorker");
var GenericWorker = require("./GenericWorker");
var base64 = require("../base64");
var support = require("../support");
var external = require("../external");

var NodejsStreamOutputAdapter = null;
if (support.nodestream) {
    try {
        NodejsStreamOutputAdapter = require("../nodejs/NodejsStreamOutputAdapter");
    } catch(e) {
        // ignore
    }
}

/**
 * Apply the final transformation of the data. If the user wants a Blob for
 * example, it's easier to work with an U8intArray and finally do the
 * ArrayBuffer/Blob conversion.
 * @param {String} type the name of the final type
 * @param {String|Uint8Array|Buffer} content the content to transform
 * @param {String} mimeType the mime type of the content, if applicable.
 * @return {String|Uint8Array|ArrayBuffer|Buffer|Blob} the content in the right format.
 */
function transformZipOutput(type, content, mimeType) {
    switch(type) {
    case "blob" :
        return utils.newBlob(utils.transformTo("arraybuffer", content), mimeType);
    case "base64" :
        return base64.encode(content);
    default :
        return utils.transformTo(type, content);
    }
}

/**
 * Concatenate an array of data of the given type.
 * @param {String} type the type of the data in the given array.
 * @param {Array} dataArray the array containing the data chunks to concatenate
 * @return {String|Uint8Array|Buffer} the concatenated data
 * @throws Error if the asked type is unsupported
 */
function concat (type, dataArray) {
    var i, index = 0, res = null, totalLength = 0;
    for(i = 0; i < dataArray.length; i++) {
        totalLength += dataArray[i].length;
    }
    switch(type) {
    case "string":
        return dataArray.join("");
    case "array":
        return Array.prototype.concat.apply([], dataArray);
    case "uint8array":
        res = new Uint8Array(totalLength);
        for(i = 0; i < dataArray.length; i++) {
            res.set(dataArray[i], index);
            index += dataArray[i].length;
        }
        return res;
    case "nodebuffer":
        return Buffer.concat(dataArray);
    default:
        throw new Error("concat : unsupported type '"  + type + "'");
    }
}

/**
 * Listen a StreamHelper, accumulate its content and concatenate it into a
 * complete block.
 * @param {StreamHelper} helper the helper to use.
 * @param {Function} updateCallback a callback called on each update. Called
 * with one arg :
 * - the metadata linked to the update received.
 * @return Promise the promise for the accumulation.
 */
function accumulate(helper, updateCallback) {
    return new external.Promise(function (resolve, reject){
        var dataArray = [];
        var chunkType = helper._internalType,
            resultType = helper._outputType,
            mimeType = helper._mimeType;
        helper
            .on("data", function (data, meta) {
                dataArray.push(data);
                if(updateCallback) {
                    updateCallback(meta);
                }
            })
            .on("error", function(err) {
                dataArray = [];
                reject(err);
            })
            .on("end", function (){
                try {
                    var result = transformZipOutput(resultType, concat(chunkType, dataArray), mimeType);
                    resolve(result);
                } catch (e) {
                    reject(e);
                }
                dataArray = [];
            })
            .resume();
    });
}

/**
 * An helper to easily use workers outside of JSZip.
 * @constructor
 * @param {Worker} worker the worker to wrap
 * @param {String} outputType the type of data expected by the use
 * @param {String} mimeType the mime type of the content, if applicable.
 */
function StreamHelper(worker, outputType, mimeType) {
    var internalType = outputType;
    switch(outputType) {
    case "blob":
    case "arraybuffer":
        internalType = "uint8array";
        break;
    case "base64":
        internalType = "string";
        break;
    }

    try {
        // the type used internally
        this._internalType = internalType;
        // the type used to output results
        this._outputType = outputType;
        // the mime type
        this._mimeType = mimeType;
        utils.checkSupport(internalType);
        this._worker = worker.pipe(new ConvertWorker(internalType));
        // the last workers can be rewired without issues but we need to
        // prevent any updates on previous workers.
        worker.lock();
    } catch(e) {
        this._worker = new GenericWorker("error");
        this._worker.error(e);
    }
}

StreamHelper.prototype = {
    /**
     * Listen a StreamHelper, accumulate its content and concatenate it into a
     * complete block.
     * @param {Function} updateCb the update callback.
     * @return Promise the promise for the accumulation.
     */
    accumulate : function (updateCb) {
        return accumulate(this, updateCb);
    },
    /**
     * Add a listener on an event triggered on a stream.
     * @param {String} evt the name of the event
     * @param {Function} fn the listener
     * @return {StreamHelper} the current helper.
     */
    on : function (evt, fn) {
        var self = this;

        if(evt === "data") {
            this._worker.on(evt, function (chunk) {
                fn.call(self, chunk.data, chunk.meta);
            });
        } else {
            this._worker.on(evt, function () {
                utils.delay(fn, arguments, self);
            });
        }
        return this;
    },
    /**
     * Resume the flow of chunks.
     * @return {StreamHelper} the current helper.
     */
    resume : function () {
        utils.delay(this._worker.resume, [], this._worker);
        return this;
    },
    /**
     * Pause the flow of chunks.
     * @return {StreamHelper} the current helper.
     */
    pause : function () {
        this._worker.pause();
        return this;
    },
    /**
     * Return a nodejs stream for this helper.
     * @param {Function} updateCb the update callback.
     * @return {NodejsStreamOutputAdapter} the nodejs stream.
     */
    toNodejsStream : function (updateCb) {
        utils.checkSupport("nodestream");
        if (this._outputType !== "nodebuffer") {
            // an object stream containing blob/arraybuffer/uint8array/string
            // is strange and I don't know if it would be useful.
            // I you find this comment and have a good usecase, please open a
            // bug report !
            throw new Error(this._outputType + " is not supported by this method");
        }

        return new NodejsStreamOutputAdapter(this, {
            objectMode : this._outputType !== "nodebuffer"
        }, updateCb);
    }
};


module.exports = StreamHelper;

},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(require,module,exports){
"use strict";

exports.base64 = true;
exports.array = true;
exports.string = true;
exports.arraybuffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
exports.nodebuffer = typeof Buffer !== "undefined";
// contains true if JSZip can read/generate Uint8Array, false otherwise.
exports.uint8array = typeof Uint8Array !== "undefined";

if (typeof ArrayBuffer === "undefined") {
    exports.blob = false;
}
else {
    var buffer = new ArrayBuffer(0);
    try {
        exports.blob = new Blob([buffer], {
            type: "application/zip"
        }).size === 0;
    }
    catch (e) {
        try {
            var Builder = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
            var builder = new Builder();
            builder.append(buffer);
            exports.blob = builder.getBlob("application/zip").size === 0;
        }
        catch (e) {
            exports.blob = false;
        }
    }
}

try {
    exports.nodestream = !!require("readable-stream").Readable;
} catch(e) {
    exports.nodestream = false;
}

},{"readable-stream":16}],31:[function(require,module,exports){
"use strict";

var utils = require("./utils");
var support = require("./support");
var nodejsUtils = require("./nodejsUtils");
var GenericWorker = require("./stream/GenericWorker");

/**
 * The following functions come from pako, from pako/lib/utils/strings
 * released under the MIT license, see pako https://github.com/nodeca/pako/
 */

// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new Array(256);
for (var i=0; i<256; i++) {
    _utf8len[i] = (i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1);
}
_utf8len[254]=_utf8len[254]=1; // Invalid sequence start

// convert string to array (typed, when possible)
var string2buf = function (str) {
    var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

    // count binary size
    for (m_pos = 0; m_pos < str_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && (m_pos+1 < str_len)) {
            c2 = str.charCodeAt(m_pos+1);
            if ((c2 & 0xfc00) === 0xdc00) {
                c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
                m_pos++;
            }
        }
        buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
    }

    // allocate buffer
    if (support.uint8array) {
        buf = new Uint8Array(buf_len);
    } else {
        buf = new Array(buf_len);
    }

    // convert
    for (i=0, m_pos = 0; i < buf_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && (m_pos+1 < str_len)) {
            c2 = str.charCodeAt(m_pos+1);
            if ((c2 & 0xfc00) === 0xdc00) {
                c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
                m_pos++;
            }
        }
        if (c < 0x80) {
            /* one byte */
            buf[i++] = c;
        } else if (c < 0x800) {
            /* two bytes */
            buf[i++] = 0xC0 | (c >>> 6);
            buf[i++] = 0x80 | (c & 0x3f);
        } else if (c < 0x10000) {
            /* three bytes */
            buf[i++] = 0xE0 | (c >>> 12);
            buf[i++] = 0x80 | (c >>> 6 & 0x3f);
            buf[i++] = 0x80 | (c & 0x3f);
        } else {
            /* four bytes */
            buf[i++] = 0xf0 | (c >>> 18);
            buf[i++] = 0x80 | (c >>> 12 & 0x3f);
            buf[i++] = 0x80 | (c >>> 6 & 0x3f);
            buf[i++] = 0x80 | (c & 0x3f);
        }
    }

    return buf;
};

// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
var utf8border = function(buf, max) {
    var pos;

    max = max || buf.length;
    if (max > buf.length) { max = buf.length; }

    // go back from last position, until start of sequence found
    pos = max-1;
    while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

    // Fuckup - very small and broken sequence,
    // return max, because we should return something anyway.
    if (pos < 0) { return max; }

    // If we came to start of buffer - that means vuffer is too small,
    // return max too.
    if (pos === 0) { return max; }

    return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};

// convert array to string
var buf2string = function (buf) {
    var i, out, c, c_len;
    var len = buf.length;

    // Reserve max possible length (2 words per char)
    // NB: by unknown reasons, Array is significantly faster for
    //     String.fromCharCode.apply than Uint16Array.
    var utf16buf = new Array(len*2);

    for (out=0, i=0; i<len;) {
        c = buf[i++];
        // quick process ascii
        if (c < 0x80) { utf16buf[out++] = c; continue; }

        c_len = _utf8len[c];
        // skip 5 & 6 byte codes
        if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len-1; continue; }

        // apply mask on first byte
        c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
        // join the rest
        while (c_len > 1 && i < len) {
            c = (c << 6) | (buf[i++] & 0x3f);
            c_len--;
        }

        // terminated by end of string?
        if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

        if (c < 0x10000) {
            utf16buf[out++] = c;
        } else {
            c -= 0x10000;
            utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
            utf16buf[out++] = 0xdc00 | (c & 0x3ff);
        }
    }

    // shrinkBuf(utf16buf, out)
    if (utf16buf.length !== out) {
        if(utf16buf.subarray) {
            utf16buf = utf16buf.subarray(0, out);
        } else {
            utf16buf.length = out;
        }
    }

    // return String.fromCharCode.apply(null, utf16buf);
    return utils.applyFromCharCode(utf16buf);
};


// That's all for the pako functions.


/**
 * Transform a javascript string into an array (typed if possible) of bytes,
 * UTF-8 encoded.
 * @param {String} str the string to encode
 * @return {Array|Uint8Array|Buffer} the UTF-8 encoded string.
 */
exports.utf8encode = function utf8encode(str) {
    if (support.nodebuffer) {
        return nodejsUtils.newBufferFrom(str, "utf-8");
    }

    return string2buf(str);
};


/**
 * Transform a bytes array (or a representation) representing an UTF-8 encoded
 * string into a javascript string.
 * @param {Array|Uint8Array|Buffer} buf the data de decode
 * @return {String} the decoded string.
 */
exports.utf8decode = function utf8decode(buf) {
    if (support.nodebuffer) {
        return utils.transformTo("nodebuffer", buf).toString("utf-8");
    }

    buf = utils.transformTo(support.uint8array ? "uint8array" : "array", buf);

    return buf2string(buf);
};

/**
 * A worker to decode utf8 encoded binary chunks into string chunks.
 * @constructor
 */
function Utf8DecodeWorker() {
    GenericWorker.call(this, "utf-8 decode");
    // the last bytes if a chunk didn't end with a complete codepoint.
    this.leftOver = null;
}
utils.inherits(Utf8DecodeWorker, GenericWorker);

/**
 * @see GenericWorker.processChunk
 */
Utf8DecodeWorker.prototype.processChunk = function (chunk) {

    var data = utils.transformTo(support.uint8array ? "uint8array" : "array", chunk.data);

    // 1st step, re-use what's left of the previous chunk
    if (this.leftOver && this.leftOver.length) {
        if(support.uint8array) {
            var previousData = data;
            data = new Uint8Array(previousData.length + this.leftOver.length);
            data.set(this.leftOver, 0);
            data.set(previousData, this.leftOver.length);
        } else {
            data = this.leftOver.concat(data);
        }
        this.leftOver = null;
    }

    var nextBoundary = utf8border(data);
    var usableData = data;
    if (nextBoundary !== data.length) {
        if (support.uint8array) {
            usableData = data.subarray(0, nextBoundary);
            this.leftOver = data.subarray(nextBoundary, data.length);
        } else {
            usableData = data.slice(0, nextBoundary);
            this.leftOver = data.slice(nextBoundary, data.length);
        }
    }

    this.push({
        data : exports.utf8decode(usableData),
        meta : chunk.meta
    });
};

/**
 * @see GenericWorker.flush
 */
Utf8DecodeWorker.prototype.flush = function () {
    if(this.leftOver && this.leftOver.length) {
        this.push({
            data : exports.utf8decode(this.leftOver),
            meta : {}
        });
        this.leftOver = null;
    }
};
exports.Utf8DecodeWorker = Utf8DecodeWorker;

/**
 * A worker to endcode string chunks into utf8 encoded binary chunks.
 * @constructor
 */
function Utf8EncodeWorker() {
    GenericWorker.call(this, "utf-8 encode");
}
utils.inherits(Utf8EncodeWorker, GenericWorker);

/**
 * @see GenericWorker.processChunk
 */
Utf8EncodeWorker.prototype.processChunk = function (chunk) {
    this.push({
        data : exports.utf8encode(chunk.data),
        meta : chunk.meta
    });
};
exports.Utf8EncodeWorker = Utf8EncodeWorker;

},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(require,module,exports){
"use strict";

var support = require("./support");
var base64 = require("./base64");
var nodejsUtils = require("./nodejsUtils");
var external = require("./external");
require("setimmediate");


/**
 * Convert a string that pass as a "binary string": it should represent a byte
 * array but may have > 255 char codes. Be sure to take only the first byte
 * and returns the byte array.
 * @param {String} str the string to transform.
 * @return {Array|Uint8Array} the string in a binary format.
 */
function string2binary(str) {
    var result = null;
    if (support.uint8array) {
        result = new Uint8Array(str.length);
    } else {
        result = new Array(str.length);
    }
    return stringToArrayLike(str, result);
}

/**
 * Create a new blob with the given content and the given type.
 * @param {String|ArrayBuffer} part the content to put in the blob. DO NOT use
 * an Uint8Array because the stock browser of android 4 won't accept it (it
 * will be silently converted to a string, "[object Uint8Array]").
 *
 * Use only ONE part to build the blob to avoid a memory leak in IE11 / Edge:
 * when a large amount of Array is used to create the Blob, the amount of
 * memory consumed is nearly 100 times the original data amount.
 *
 * @param {String} type the mime type of the blob.
 * @return {Blob} the created blob.
 */
exports.newBlob = function(part, type) {
    exports.checkSupport("blob");

    try {
        // Blob constructor
        return new Blob([part], {
            type: type
        });
    }
    catch (e) {

        try {
            // deprecated, browser only, old way
            var Builder = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
            var builder = new Builder();
            builder.append(part);
            return builder.getBlob(type);
        }
        catch (e) {

            // well, fuck ?!
            throw new Error("Bug : can't construct the Blob.");
        }
    }


};
/**
 * The identity function.
 * @param {Object} input the input.
 * @return {Object} the same input.
 */
function identity(input) {
    return input;
}

/**
 * Fill in an array with a string.
 * @param {String} str the string to use.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to fill in (will be mutated).
 * @return {Array|ArrayBuffer|Uint8Array|Buffer} the updated array.
 */
function stringToArrayLike(str, array) {
    for (var i = 0; i < str.length; ++i) {
        array[i] = str.charCodeAt(i) & 0xFF;
    }
    return array;
}

/**
 * An helper for the function arrayLikeToString.
 * This contains static information and functions that
 * can be optimized by the browser JIT compiler.
 */
var arrayToStringHelper = {
    /**
     * Transform an array of int into a string, chunk by chunk.
     * See the performances notes on arrayLikeToString.
     * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
     * @param {String} type the type of the array.
     * @param {Integer} chunk the chunk size.
     * @return {String} the resulting string.
     * @throws Error if the chunk is too big for the stack.
     */
    stringifyByChunk: function(array, type, chunk) {
        var result = [], k = 0, len = array.length;
        // shortcut
        if (len <= chunk) {
            return String.fromCharCode.apply(null, array);
        }
        while (k < len) {
            if (type === "array" || type === "nodebuffer") {
                result.push(String.fromCharCode.apply(null, array.slice(k, Math.min(k + chunk, len))));
            }
            else {
                result.push(String.fromCharCode.apply(null, array.subarray(k, Math.min(k + chunk, len))));
            }
            k += chunk;
        }
        return result.join("");
    },
    /**
     * Call String.fromCharCode on every item in the array.
     * This is the naive implementation, which generate A LOT of intermediate string.
     * This should be used when everything else fail.
     * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
     * @return {String} the result.
     */
    stringifyByChar: function(array){
        var resultStr = "";
        for(var i = 0; i < array.length; i++) {
            resultStr += String.fromCharCode(array[i]);
        }
        return resultStr;
    },
    applyCanBeUsed : {
        /**
         * true if the browser accepts to use String.fromCharCode on Uint8Array
         */
        uint8array : (function () {
            try {
                return support.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
            } catch (e) {
                return false;
            }
        })(),
        /**
         * true if the browser accepts to use String.fromCharCode on nodejs Buffer.
         */
        nodebuffer : (function () {
            try {
                return support.nodebuffer && String.fromCharCode.apply(null, nodejsUtils.allocBuffer(1)).length === 1;
            } catch (e) {
                return false;
            }
        })()
    }
};

/**
 * Transform an array-like object to a string.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
 * @return {String} the result.
 */
function arrayLikeToString(array) {
    // Performances notes :
    // --------------------
    // String.fromCharCode.apply(null, array) is the fastest, see
    // see http://jsperf.com/converting-a-uint8array-to-a-string/2
    // but the stack is limited (and we can get huge arrays !).
    //
    // result += String.fromCharCode(array[i]); generate too many strings !
    //
    // This code is inspired by http://jsperf.com/arraybuffer-to-string-apply-performance/2
    // TODO : we now have workers that split the work. Do we still need that ?
    var chunk = 65536,
        type = exports.getTypeOf(array),
        canUseApply = true;
    if (type === "uint8array") {
        canUseApply = arrayToStringHelper.applyCanBeUsed.uint8array;
    } else if (type === "nodebuffer") {
        canUseApply = arrayToStringHelper.applyCanBeUsed.nodebuffer;
    }

    if (canUseApply) {
        while (chunk > 1) {
            try {
                return arrayToStringHelper.stringifyByChunk(array, type, chunk);
            } catch (e) {
                chunk = Math.floor(chunk / 2);
            }
        }
    }

    // no apply or chunk error : slow and painful algorithm
    // default browser on android 4.*
    return arrayToStringHelper.stringifyByChar(array);
}

exports.applyFromCharCode = arrayLikeToString;


/**
 * Copy the data from an array-like to an other array-like.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} arrayFrom the origin array.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} arrayTo the destination array which will be mutated.
 * @return {Array|ArrayBuffer|Uint8Array|Buffer} the updated destination array.
 */
function arrayLikeToArrayLike(arrayFrom, arrayTo) {
    for (var i = 0; i < arrayFrom.length; i++) {
        arrayTo[i] = arrayFrom[i];
    }
    return arrayTo;
}

// a matrix containing functions to transform everything into everything.
var transform = {};

// string to ?
transform["string"] = {
    "string": identity,
    "array": function(input) {
        return stringToArrayLike(input, new Array(input.length));
    },
    "arraybuffer": function(input) {
        return transform["string"]["uint8array"](input).buffer;
    },
    "uint8array": function(input) {
        return stringToArrayLike(input, new Uint8Array(input.length));
    },
    "nodebuffer": function(input) {
        return stringToArrayLike(input, nodejsUtils.allocBuffer(input.length));
    }
};

// array to ?
transform["array"] = {
    "string": arrayLikeToString,
    "array": identity,
    "arraybuffer": function(input) {
        return (new Uint8Array(input)).buffer;
    },
    "uint8array": function(input) {
        return new Uint8Array(input);
    },
    "nodebuffer": function(input) {
        return nodejsUtils.newBufferFrom(input);
    }
};

// arraybuffer to ?
transform["arraybuffer"] = {
    "string": function(input) {
        return arrayLikeToString(new Uint8Array(input));
    },
    "array": function(input) {
        return arrayLikeToArrayLike(new Uint8Array(input), new Array(input.byteLength));
    },
    "arraybuffer": identity,
    "uint8array": function(input) {
        return new Uint8Array(input);
    },
    "nodebuffer": function(input) {
        return nodejsUtils.newBufferFrom(new Uint8Array(input));
    }
};

// uint8array to ?
transform["uint8array"] = {
    "string": arrayLikeToString,
    "array": function(input) {
        return arrayLikeToArrayLike(input, new Array(input.length));
    },
    "arraybuffer": function(input) {
        return input.buffer;
    },
    "uint8array": identity,
    "nodebuffer": function(input) {
        return nodejsUtils.newBufferFrom(input);
    }
};

// nodebuffer to ?
transform["nodebuffer"] = {
    "string": arrayLikeToString,
    "array": function(input) {
        return arrayLikeToArrayLike(input, new Array(input.length));
    },
    "arraybuffer": function(input) {
        return transform["nodebuffer"]["uint8array"](input).buffer;
    },
    "uint8array": function(input) {
        return arrayLikeToArrayLike(input, new Uint8Array(input.length));
    },
    "nodebuffer": identity
};

/**
 * Transform an input into any type.
 * The supported output type are : string, array, uint8array, arraybuffer, nodebuffer.
 * If no output type is specified, the unmodified input will be returned.
 * @param {String} outputType the output type.
 * @param {String|Array|ArrayBuffer|Uint8Array|Buffer} input the input to convert.
 * @throws {Error} an Error if the browser doesn't support the requested output type.
 */
exports.transformTo = function(outputType, input) {
    if (!input) {
        // undefined, null, etc
        // an empty string won't harm.
        input = "";
    }
    if (!outputType) {
        return input;
    }
    exports.checkSupport(outputType);
    var inputType = exports.getTypeOf(input);
    var result = transform[inputType][outputType](input);
    return result;
};

/**
 * Resolve all relative path components, "." and "..", in a path. If these relative components
 * traverse above the root then the resulting path will only contain the final path component.
 *
 * All empty components, e.g. "//", are removed.
 * @param {string} path A path with / or \ separators
 * @returns {string} The path with all relative path components resolved.
 */
exports.resolve = function(path) {
    var parts = path.split("/");
    var result = [];
    for (var index = 0; index < parts.length; index++) {
        var part = parts[index];
        // Allow the first and last component to be empty for trailing slashes.
        if (part === "." || (part === "" && index !== 0 && index !== parts.length - 1)) {
            continue;
        } else if (part === "..") {
            result.pop();
        } else {
            result.push(part);
        }
    }
    return result.join("/");
};

/**
 * Return the type of the input.
 * The type will be in a format valid for JSZip.utils.transformTo : string, array, uint8array, arraybuffer.
 * @param {Object} input the input to identify.
 * @return {String} the (lowercase) type of the input.
 */
exports.getTypeOf = function(input) {
    if (typeof input === "string") {
        return "string";
    }
    if (Object.prototype.toString.call(input) === "[object Array]") {
        return "array";
    }
    if (support.nodebuffer && nodejsUtils.isBuffer(input)) {
        return "nodebuffer";
    }
    if (support.uint8array && input instanceof Uint8Array) {
        return "uint8array";
    }
    if (support.arraybuffer && input instanceof ArrayBuffer) {
        return "arraybuffer";
    }
};

/**
 * Throw an exception if the type is not supported.
 * @param {String} type the type to check.
 * @throws {Error} an Error if the browser doesn't support the requested type.
 */
exports.checkSupport = function(type) {
    var supported = support[type.toLowerCase()];
    if (!supported) {
        throw new Error(type + " is not supported by this platform");
    }
};

exports.MAX_VALUE_16BITS = 65535;
exports.MAX_VALUE_32BITS = -1; // well, "\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF" is parsed as -1

/**
 * Prettify a string read as binary.
 * @param {string} str the string to prettify.
 * @return {string} a pretty string.
 */
exports.pretty = function(str) {
    var res = "",
        code, i;
    for (i = 0; i < (str || "").length; i++) {
        code = str.charCodeAt(i);
        res += "\\x" + (code < 16 ? "0" : "") + code.toString(16).toUpperCase();
    }
    return res;
};

/**
 * Defer the call of a function.
 * @param {Function} callback the function to call asynchronously.
 * @param {Array} args the arguments to give to the callback.
 */
exports.delay = function(callback, args, self) {
    setImmediate(function () {
        callback.apply(self || null, args || []);
    });
};

/**
 * Extends a prototype with an other, without calling a constructor with
 * side effects. Inspired by nodejs' `utils.inherits`
 * @param {Function} ctor the constructor to augment
 * @param {Function} superCtor the parent constructor to use
 */
exports.inherits = function (ctor, superCtor) {
    var Obj = function() {};
    Obj.prototype = superCtor.prototype;
    ctor.prototype = new Obj();
};

/**
 * Merge the objects passed as parameters into a new one.
 * @private
 * @param {...Object} var_args All objects to merge.
 * @return {Object} a new object with the data of the others.
 */
exports.extend = function() {
    var result = {}, i, attr;
    for (i = 0; i < arguments.length; i++) { // arguments is not enumerable in some browsers
        for (attr in arguments[i]) {
            if (Object.prototype.hasOwnProperty.call(arguments[i], attr) && typeof result[attr] === "undefined") {
                result[attr] = arguments[i][attr];
            }
        }
    }
    return result;
};

/**
 * Transform arbitrary content into a Promise.
 * @param {String} name a name for the content being processed.
 * @param {Object} inputData the content to process.
 * @param {Boolean} isBinary true if the content is not an unicode string
 * @param {Boolean} isOptimizedBinaryString true if the string content only has one byte per character.
 * @param {Boolean} isBase64 true if the string content is encoded with base64.
 * @return {Promise} a promise in a format usable by JSZip.
 */
exports.prepareContent = function(name, inputData, isBinary, isOptimizedBinaryString, isBase64) {

    // if inputData is already a promise, this flatten it.
    var promise = external.Promise.resolve(inputData).then(function(data) {


        var isBlob = support.blob && (data instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(data)) !== -1);

        if (isBlob && typeof FileReader !== "undefined") {
            return new external.Promise(function (resolve, reject) {
                var reader = new FileReader();

                reader.onload = function(e) {
                    resolve(e.target.result);
                };
                reader.onerror = function(e) {
                    reject(e.target.error);
                };
                reader.readAsArrayBuffer(data);
            });
        } else {
            return data;
        }
    });

    return promise.then(function(data) {
        var dataType = exports.getTypeOf(data);

        if (!dataType) {
            return external.Promise.reject(
                new Error("Can't read the data of '" + name + "'. Is it " +
                          "in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?")
            );
        }
        // special case : it's way easier to work with Uint8Array than with ArrayBuffer
        if (dataType === "arraybuffer") {
            data = exports.transformTo("uint8array", data);
        } else if (dataType === "string") {
            if (isBase64) {
                data = base64.decode(data);
            }
            else if (isBinary) {
                // optimizedBinaryString === true means that the file has already been filtered with a 0xFF mask
                if (isOptimizedBinaryString !== true) {
                    // this is a string, not in a base64 format.
                    // Be sure that this is a correct "binary string"
                    data = string2binary(data);
                }
            }
        }
        return data;
    });
};

},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"setimmediate":54}],33:[function(require,module,exports){
"use strict";
var readerFor = require("./reader/readerFor");
var utils = require("./utils");
var sig = require("./signature");
var ZipEntry = require("./zipEntry");
var support = require("./support");
//  class ZipEntries {{{
/**
 * All the entries in the zip file.
 * @constructor
 * @param {Object} loadOptions Options for loading the stream.
 */
function ZipEntries(loadOptions) {
    this.files = [];
    this.loadOptions = loadOptions;
}
ZipEntries.prototype = {
    /**
     * Check that the reader is on the specified signature.
     * @param {string} expectedSignature the expected signature.
     * @throws {Error} if it is an other signature.
     */
    checkSignature: function(expectedSignature) {
        if (!this.reader.readAndCheckSignature(expectedSignature)) {
            this.reader.index -= 4;
            var signature = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature " + "(" + utils.pretty(signature) + ", expected " + utils.pretty(expectedSignature) + ")");
        }
    },
    /**
     * Check if the given signature is at the given index.
     * @param {number} askedIndex the index to check.
     * @param {string} expectedSignature the signature to expect.
     * @return {boolean} true if the signature is here, false otherwise.
     */
    isSignature: function(askedIndex, expectedSignature) {
        var currentIndex = this.reader.index;
        this.reader.setIndex(askedIndex);
        var signature = this.reader.readString(4);
        var result = signature === expectedSignature;
        this.reader.setIndex(currentIndex);
        return result;
    },
    /**
     * Read the end of the central directory.
     */
    readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2);
        this.diskWithCentralDirStart = this.reader.readInt(2);
        this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
        this.centralDirRecords = this.reader.readInt(2);
        this.centralDirSize = this.reader.readInt(4);
        this.centralDirOffset = this.reader.readInt(4);

        this.zipCommentLength = this.reader.readInt(2);
        // warning : the encoding depends of the system locale
        // On a linux machine with LANG=en_US.utf8, this field is utf8 encoded.
        // On a windows machine, this field is encoded with the localized windows code page.
        var zipComment = this.reader.readData(this.zipCommentLength);
        var decodeParamType = support.uint8array ? "uint8array" : "array";
        // To get consistent behavior with the generation part, we will assume that
        // this is utf8 encoded unless specified otherwise.
        var decodeContent = utils.transformTo(decodeParamType, zipComment);
        this.zipComment = this.loadOptions.decodeFileName(decodeContent);
    },
    /**
     * Read the end of the Zip 64 central directory.
     * Not merged with the method readEndOfCentral :
     * The end of central can coexist with its Zip64 brother,
     * I don't want to read the wrong number of bytes !
     */
    readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8);
        this.reader.skip(4);
        // this.versionMadeBy = this.reader.readString(2);
        // this.versionNeeded = this.reader.readInt(2);
        this.diskNumber = this.reader.readInt(4);
        this.diskWithCentralDirStart = this.reader.readInt(4);
        this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
        this.centralDirRecords = this.reader.readInt(8);
        this.centralDirSize = this.reader.readInt(8);
        this.centralDirOffset = this.reader.readInt(8);

        this.zip64ExtensibleData = {};
        var extraDataSize = this.zip64EndOfCentralSize - 44,
            index = 0,
            extraFieldId,
            extraFieldLength,
            extraFieldValue;
        while (index < extraDataSize) {
            extraFieldId = this.reader.readInt(2);
            extraFieldLength = this.reader.readInt(4);
            extraFieldValue = this.reader.readData(extraFieldLength);
            this.zip64ExtensibleData[extraFieldId] = {
                id: extraFieldId,
                length: extraFieldLength,
                value: extraFieldValue
            };
        }
    },
    /**
     * Read the end of the Zip 64 central directory locator.
     */
    readBlockZip64EndOfCentralLocator: function() {
        this.diskWithZip64CentralDirStart = this.reader.readInt(4);
        this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
        this.disksCount = this.reader.readInt(4);
        if (this.disksCount > 1) {
            throw new Error("Multi-volumes zip are not supported");
        }
    },
    /**
     * Read the local files, based on the offset read in the central part.
     */
    readLocalFiles: function() {
        var i, file;
        for (i = 0; i < this.files.length; i++) {
            file = this.files[i];
            this.reader.setIndex(file.localHeaderOffset);
            this.checkSignature(sig.LOCAL_FILE_HEADER);
            file.readLocalPart(this.reader);
            file.handleUTF8();
            file.processAttributes();
        }
    },
    /**
     * Read the central directory.
     */
    readCentralDir: function() {
        var file;

        this.reader.setIndex(this.centralDirOffset);
        while (this.reader.readAndCheckSignature(sig.CENTRAL_FILE_HEADER)) {
            file = new ZipEntry({
                zip64: this.zip64
            }, this.loadOptions);
            file.readCentralPart(this.reader);
            this.files.push(file);
        }

        if (this.centralDirRecords !== this.files.length) {
            if (this.centralDirRecords !== 0 && this.files.length === 0) {
                // We expected some records but couldn't find ANY.
                // This is really suspicious, as if something went wrong.
                throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
            } else {
                // We found some records but not all.
                // Something is wrong but we got something for the user: no error here.
                // console.warn("expected", this.centralDirRecords, "records in central dir, got", this.files.length);
            }
        }
    },
    /**
     * Read the end of central directory.
     */
    readEndOfCentral: function() {
        var offset = this.reader.lastIndexOfSignature(sig.CENTRAL_DIRECTORY_END);
        if (offset < 0) {
            // Check if the content is a truncated zip or complete garbage.
            // A "LOCAL_FILE_HEADER" is not required at the beginning (auto
            // extractible zip for example) but it can give a good hint.
            // If an ajax request was used without responseType, we will also
            // get unreadable data.
            var isGarbage = !this.isSignature(0, sig.LOCAL_FILE_HEADER);

            if (isGarbage) {
                throw new Error("Can't find end of central directory : is this a zip file ? " +
                                "If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
            } else {
                throw new Error("Corrupted zip: can't find end of central directory");
            }

        }
        this.reader.setIndex(offset);
        var endOfCentralDirOffset = offset;
        this.checkSignature(sig.CENTRAL_DIRECTORY_END);
        this.readBlockEndOfCentral();


        /* extract from the zip spec :
            4)  If one of the fields in the end of central directory
                record is too small to hold required data, the field
                should be set to -1 (0xFFFF or 0xFFFFFFFF) and the
                ZIP64 format record should be created.
            5)  The end of central directory record and the
                Zip64 end of central directory locator record must
                reside on the same disk when splitting or spanning
                an archive.
         */
        if (this.diskNumber === utils.MAX_VALUE_16BITS || this.diskWithCentralDirStart === utils.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === utils.MAX_VALUE_16BITS || this.centralDirRecords === utils.MAX_VALUE_16BITS || this.centralDirSize === utils.MAX_VALUE_32BITS || this.centralDirOffset === utils.MAX_VALUE_32BITS) {
            this.zip64 = true;

            /*
            Warning : the zip64 extension is supported, but ONLY if the 64bits integer read from
            the zip file can fit into a 32bits integer. This cannot be solved : JavaScript represents
            all numbers as 64-bit double precision IEEE 754 floating point numbers.
            So, we have 53bits for integers and bitwise operations treat everything as 32bits.
            see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Bitwise_Operators
            and http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf section 8.5
            */

            // should look for a zip64 EOCD locator
            offset = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
            if (offset < 0) {
                throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            }
            this.reader.setIndex(offset);
            this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
            this.readBlockZip64EndOfCentralLocator();

            // now the zip64 EOCD record
            if (!this.isSignature(this.relativeOffsetEndOfZip64CentralDir, sig.ZIP64_CENTRAL_DIRECTORY_END)) {
                // console.warn("ZIP64 end of central directory not where expected.");
                this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
                if (this.relativeOffsetEndOfZip64CentralDir < 0) {
                    throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
                }
            }
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
            this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
            this.readBlockZip64EndOfCentral();
        }

        var expectedEndOfCentralDirOffset = this.centralDirOffset + this.centralDirSize;
        if (this.zip64) {
            expectedEndOfCentralDirOffset += 20; // end of central dir 64 locator
            expectedEndOfCentralDirOffset += 12 /* should not include the leading 12 bytes */ + this.zip64EndOfCentralSize;
        }

        var extraBytes = endOfCentralDirOffset - expectedEndOfCentralDirOffset;

        if (extraBytes > 0) {
            // console.warn(extraBytes, "extra bytes at beginning or within zipfile");
            if (this.isSignature(endOfCentralDirOffset, sig.CENTRAL_FILE_HEADER)) {
                // The offsets seem wrong, but we have something at the specified offset.
                // So… we keep it.
            } else {
                // the offset is wrong, update the "zero" of the reader
                // this happens if data has been prepended (crx files for example)
                this.reader.zero = extraBytes;
            }
        } else if (extraBytes < 0) {
            throw new Error("Corrupted zip: missing " + Math.abs(extraBytes) + " bytes.");
        }
    },
    prepareReader: function(data) {
        this.reader = readerFor(data);
    },
    /**
     * Read a zip file and create ZipEntries.
     * @param {String|ArrayBuffer|Uint8Array|Buffer} data the binary string representing a zip file.
     */
    load: function(data) {
        this.prepareReader(data);
        this.readEndOfCentral();
        this.readCentralDir();
        this.readLocalFiles();
    }
};
// }}} end of ZipEntries
module.exports = ZipEntries;

},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(require,module,exports){
"use strict";
var readerFor = require("./reader/readerFor");
var utils = require("./utils");
var CompressedObject = require("./compressedObject");
var crc32fn = require("./crc32");
var utf8 = require("./utf8");
var compressions = require("./compressions");
var support = require("./support");

var MADE_BY_DOS = 0x00;
var MADE_BY_UNIX = 0x03;

/**
 * Find a compression registered in JSZip.
 * @param {string} compressionMethod the method magic to find.
 * @return {Object|null} the JSZip compression object, null if none found.
 */
var findCompression = function(compressionMethod) {
    for (var method in compressions) {
        if (!Object.prototype.hasOwnProperty.call(compressions, method)) {
            continue;
        }
        if (compressions[method].magic === compressionMethod) {
            return compressions[method];
        }
    }
    return null;
};

// class ZipEntry {{{
/**
 * An entry in the zip file.
 * @constructor
 * @param {Object} options Options of the current file.
 * @param {Object} loadOptions Options for loading the stream.
 */
function ZipEntry(options, loadOptions) {
    this.options = options;
    this.loadOptions = loadOptions;
}
ZipEntry.prototype = {
    /**
     * say if the file is encrypted.
     * @return {boolean} true if the file is encrypted, false otherwise.
     */
    isEncrypted: function() {
        // bit 1 is set
        return (this.bitFlag & 0x0001) === 0x0001;
    },
    /**
     * say if the file has utf-8 filename/comment.
     * @return {boolean} true if the filename/comment is in utf-8, false otherwise.
     */
    useUTF8: function() {
        // bit 11 is set
        return (this.bitFlag & 0x0800) === 0x0800;
    },
    /**
     * Read the local part of a zip file and add the info in this object.
     * @param {DataReader} reader the reader to use.
     */
    readLocalPart: function(reader) {
        var compression, localExtraFieldsLength;

        // we already know everything from the central dir !
        // If the central dir data are false, we are doomed.
        // On the bright side, the local part is scary  : zip64, data descriptors, both, etc.
        // The less data we get here, the more reliable this should be.
        // Let's skip the whole header and dash to the data !
        reader.skip(22);
        // in some zip created on windows, the filename stored in the central dir contains \ instead of /.
        // Strangely, the filename here is OK.
        // I would love to treat these zip files as corrupted (see http://www.info-zip.org/FAQ.html#backslashes
        // or APPNOTE#4.4.17.1, "All slashes MUST be forward slashes '/'") but there are a lot of bad zip generators...
        // Search "unzip mismatching "local" filename continuing with "central" filename version" on
        // the internet.
        //
        // I think I see the logic here : the central directory is used to display
        // content and the local directory is used to extract the files. Mixing / and \
        // may be used to display \ to windows users and use / when extracting the files.
        // Unfortunately, this lead also to some issues : http://seclists.org/fulldisclosure/2009/Sep/394
        this.fileNameLength = reader.readInt(2);
        localExtraFieldsLength = reader.readInt(2); // can't be sure this will be the same as the central dir
        // the fileName is stored as binary data, the handleUTF8 method will take care of the encoding.
        this.fileName = reader.readData(this.fileNameLength);
        reader.skip(localExtraFieldsLength);

        if (this.compressedSize === -1 || this.uncompressedSize === -1) {
            throw new Error("Bug or corrupted zip : didn't get enough information from the central directory " + "(compressedSize === -1 || uncompressedSize === -1)");
        }

        compression = findCompression(this.compressionMethod);
        if (compression === null) { // no compression found
            throw new Error("Corrupted zip : compression " + utils.pretty(this.compressionMethod) + " unknown (inner file : " + utils.transformTo("string", this.fileName) + ")");
        }
        this.decompressed = new CompressedObject(this.compressedSize, this.uncompressedSize, this.crc32, compression, reader.readData(this.compressedSize));
    },

    /**
     * Read the central part of a zip file and add the info in this object.
     * @param {DataReader} reader the reader to use.
     */
    readCentralPart: function(reader) {
        this.versionMadeBy = reader.readInt(2);
        reader.skip(2);
        // this.versionNeeded = reader.readInt(2);
        this.bitFlag = reader.readInt(2);
        this.compressionMethod = reader.readString(2);
        this.date = reader.readDate();
        this.crc32 = reader.readInt(4);
        this.compressedSize = reader.readInt(4);
        this.uncompressedSize = reader.readInt(4);
        var fileNameLength = reader.readInt(2);
        this.extraFieldsLength = reader.readInt(2);
        this.fileCommentLength = reader.readInt(2);
        this.diskNumberStart = reader.readInt(2);
        this.internalFileAttributes = reader.readInt(2);
        this.externalFileAttributes = reader.readInt(4);
        this.localHeaderOffset = reader.readInt(4);

        if (this.isEncrypted()) {
            throw new Error("Encrypted zip are not supported");
        }

        // will be read in the local part, see the comments there
        reader.skip(fileNameLength);
        this.readExtraFields(reader);
        this.parseZIP64ExtraField(reader);
        this.fileComment = reader.readData(this.fileCommentLength);
    },

    /**
     * Parse the external file attributes and get the unix/dos permissions.
     */
    processAttributes: function () {
        this.unixPermissions = null;
        this.dosPermissions = null;
        var madeBy = this.versionMadeBy >> 8;

        // Check if we have the DOS directory flag set.
        // We look for it in the DOS and UNIX permissions
        // but some unknown platform could set it as a compatibility flag.
        this.dir = this.externalFileAttributes & 0x0010 ? true : false;

        if(madeBy === MADE_BY_DOS) {
            // first 6 bits (0 to 5)
            this.dosPermissions = this.externalFileAttributes & 0x3F;
        }

        if(madeBy === MADE_BY_UNIX) {
            this.unixPermissions = (this.externalFileAttributes >> 16) & 0xFFFF;
            // the octal permissions are in (this.unixPermissions & 0x01FF).toString(8);
        }

        // fail safe : if the name ends with a / it probably means a folder
        if (!this.dir && this.fileNameStr.slice(-1) === "/") {
            this.dir = true;
        }
    },

    /**
     * Parse the ZIP64 extra field and merge the info in the current ZipEntry.
     * @param {DataReader} reader the reader to use.
     */
    parseZIP64ExtraField: function() {
        if (!this.extraFields[0x0001]) {
            return;
        }

        // should be something, preparing the extra reader
        var extraReader = readerFor(this.extraFields[0x0001].value);

        // I really hope that these 64bits integer can fit in 32 bits integer, because js
        // won't let us have more.
        if (this.uncompressedSize === utils.MAX_VALUE_32BITS) {
            this.uncompressedSize = extraReader.readInt(8);
        }
        if (this.compressedSize === utils.MAX_VALUE_32BITS) {
            this.compressedSize = extraReader.readInt(8);
        }
        if (this.localHeaderOffset === utils.MAX_VALUE_32BITS) {
            this.localHeaderOffset = extraReader.readInt(8);
        }
        if (this.diskNumberStart === utils.MAX_VALUE_32BITS) {
            this.diskNumberStart = extraReader.readInt(4);
        }
    },
    /**
     * Read the central part of a zip file and add the info in this object.
     * @param {DataReader} reader the reader to use.
     */
    readExtraFields: function(reader) {
        var end = reader.index + this.extraFieldsLength,
            extraFieldId,
            extraFieldLength,
            extraFieldValue;

        if (!this.extraFields) {
            this.extraFields = {};
        }

        while (reader.index + 4 < end) {
            extraFieldId = reader.readInt(2);
            extraFieldLength = reader.readInt(2);
            extraFieldValue = reader.readData(extraFieldLength);

            this.extraFields[extraFieldId] = {
                id: extraFieldId,
                length: extraFieldLength,
                value: extraFieldValue
            };
        }

        reader.setIndex(end);
    },
    /**
     * Apply an UTF8 transformation if needed.
     */
    handleUTF8: function() {
        var decodeParamType = support.uint8array ? "uint8array" : "array";
        if (this.useUTF8()) {
            this.fileNameStr = utf8.utf8decode(this.fileName);
            this.fileCommentStr = utf8.utf8decode(this.fileComment);
        } else {
            var upath = this.findExtraFieldUnicodePath();
            if (upath !== null) {
                this.fileNameStr = upath;
            } else {
                // ASCII text or unsupported code page
                var fileNameByteArray =  utils.transformTo(decodeParamType, this.fileName);
                this.fileNameStr = this.loadOptions.decodeFileName(fileNameByteArray);
            }

            var ucomment = this.findExtraFieldUnicodeComment();
            if (ucomment !== null) {
                this.fileCommentStr = ucomment;
            } else {
                // ASCII text or unsupported code page
                var commentByteArray =  utils.transformTo(decodeParamType, this.fileComment);
                this.fileCommentStr = this.loadOptions.decodeFileName(commentByteArray);
            }
        }
    },

    /**
     * Find the unicode path declared in the extra field, if any.
     * @return {String} the unicode path, null otherwise.
     */
    findExtraFieldUnicodePath: function() {
        var upathField = this.extraFields[0x7075];
        if (upathField) {
            var extraReader = readerFor(upathField.value);

            // wrong version
            if (extraReader.readInt(1) !== 1) {
                return null;
            }

            // the crc of the filename changed, this field is out of date.
            if (crc32fn(this.fileName) !== extraReader.readInt(4)) {
                return null;
            }

            return utf8.utf8decode(extraReader.readData(upathField.length - 5));
        }
        return null;
    },

    /**
     * Find the unicode comment declared in the extra field, if any.
     * @return {String} the unicode comment, null otherwise.
     */
    findExtraFieldUnicodeComment: function() {
        var ucommentField = this.extraFields[0x6375];
        if (ucommentField) {
            var extraReader = readerFor(ucommentField.value);

            // wrong version
            if (extraReader.readInt(1) !== 1) {
                return null;
            }

            // the crc of the comment changed, this field is out of date.
            if (crc32fn(this.fileComment) !== extraReader.readInt(4)) {
                return null;
            }

            return utf8.utf8decode(extraReader.readData(ucommentField.length - 5));
        }
        return null;
    }
};
module.exports = ZipEntry;

},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(require,module,exports){
"use strict";

var StreamHelper = require("./stream/StreamHelper");
var DataWorker = require("./stream/DataWorker");
var utf8 = require("./utf8");
var CompressedObject = require("./compressedObject");
var GenericWorker = require("./stream/GenericWorker");

/**
 * A simple object representing a file in the zip file.
 * @constructor
 * @param {string} name the name of the file
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data
 * @param {Object} options the options of the file
 */
var ZipObject = function(name, data, options) {
    this.name = name;
    this.dir = options.dir;
    this.date = options.date;
    this.comment = options.comment;
    this.unixPermissions = options.unixPermissions;
    this.dosPermissions = options.dosPermissions;

    this._data = data;
    this._dataBinary = options.binary;
    // keep only the compression
    this.options = {
        compression : options.compression,
        compressionOptions : options.compressionOptions
    };
};

ZipObject.prototype = {
    /**
     * Create an internal stream for the content of this object.
     * @param {String} type the type of each chunk.
     * @return StreamHelper the stream.
     */
    internalStream: function (type) {
        var result = null, outputType = "string";
        try {
            if (!type) {
                throw new Error("No output type specified.");
            }
            outputType = type.toLowerCase();
            var askUnicodeString = outputType === "string" || outputType === "text";
            if (outputType === "binarystring" || outputType === "text") {
                outputType = "string";
            }
            result = this._decompressWorker();

            var isUnicodeString = !this._dataBinary;

            if (isUnicodeString && !askUnicodeString) {
                result = result.pipe(new utf8.Utf8EncodeWorker());
            }
            if (!isUnicodeString && askUnicodeString) {
                result = result.pipe(new utf8.Utf8DecodeWorker());
            }
        } catch (e) {
            result = new GenericWorker("error");
            result.error(e);
        }

        return new StreamHelper(result, outputType, "");
    },

    /**
     * Prepare the content in the asked type.
     * @param {String} type the type of the result.
     * @param {Function} onUpdate a function to call on each internal update.
     * @return Promise the promise of the result.
     */
    async: function (type, onUpdate) {
        return this.internalStream(type).accumulate(onUpdate);
    },

    /**
     * Prepare the content as a nodejs stream.
     * @param {String} type the type of each chunk.
     * @param {Function} onUpdate a function to call on each internal update.
     * @return Stream the stream.
     */
    nodeStream: function (type, onUpdate) {
        return this.internalStream(type || "nodebuffer").toNodejsStream(onUpdate);
    },

    /**
     * Return a worker for the compressed content.
     * @private
     * @param {Object} compression the compression object to use.
     * @param {Object} compressionOptions the options to use when compressing.
     * @return Worker the worker.
     */
    _compressWorker: function (compression, compressionOptions) {
        if (
            this._data instanceof CompressedObject &&
            this._data.compression.magic === compression.magic
        ) {
            return this._data.getCompressedWorker();
        } else {
            var result = this._decompressWorker();
            if(!this._dataBinary) {
                result = result.pipe(new utf8.Utf8EncodeWorker());
            }
            return CompressedObject.createWorkerFrom(result, compression, compressionOptions);
        }
    },
    /**
     * Return a worker for the decompressed content.
     * @private
     * @return Worker the worker.
     */
    _decompressWorker : function () {
        if (this._data instanceof CompressedObject) {
            return this._data.getContentWorker();
        } else if (this._data instanceof GenericWorker) {
            return this._data;
        } else {
            return new DataWorker(this._data);
        }
    }
};

var removedMethods = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"];
var removedFn = function () {
    throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
};

for(var i = 0; i < removedMethods.length; i++) {
    ZipObject.prototype[removedMethods[i]] = removedFn;
}
module.exports = ZipObject;

},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(require,module,exports){
(function (global){
'use strict';
var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],37:[function(require,module,exports){
'use strict';
var immediate = require('immediate');

/* istanbul ignore next */
function INTERNAL() {}

var handlers = {};

var REJECTED = ['REJECTED'];
var FULFILLED = ['FULFILLED'];
var PENDING = ['PENDING'];

module.exports = Promise;

function Promise(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('resolver must be a function');
  }
  this.state = PENDING;
  this.queue = [];
  this.outcome = void 0;
  if (resolver !== INTERNAL) {
    safelyResolveThenable(this, resolver);
  }
}

Promise.prototype["finally"] = function (callback) {
  if (typeof callback !== 'function') {
    return this;
  }
  var p = this.constructor;
  return this.then(resolve, reject);

  function resolve(value) {
    function yes () {
      return value;
    }
    return p.resolve(callback()).then(yes);
  }
  function reject(reason) {
    function no () {
      throw reason;
    }
    return p.resolve(callback()).then(no);
  }
};
Promise.prototype["catch"] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
    typeof onRejected !== 'function' && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}

handlers.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return handlers.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    safelyResolveThenable(self, thenable);
  } else {
    self.state = FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
handlers.reject = function (self, error) {
  self.state = REJECTED;
  self.outcome = error;
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}

function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }

  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}

Promise.resolve = resolve;
function resolve(value) {
  if (value instanceof this) {
    return value;
  }
  return handlers.resolve(new this(INTERNAL), value);
}

Promise.reject = reject;
function reject(reason) {
  var promise = new this(INTERNAL);
  return handlers.reject(promise, reason);
}

Promise.all = all;
function all(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len && !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}

Promise.race = race;
function race(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}

},{"immediate":36}],38:[function(require,module,exports){
// Top level file is just a mixin of submodules & constants
'use strict';

var assign    = require('./lib/utils/common').assign;

var deflate   = require('./lib/deflate');
var inflate   = require('./lib/inflate');
var constants = require('./lib/zlib/constants');

var pako = {};

assign(pako, deflate, inflate, constants);

module.exports = pako;

},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(require,module,exports){
'use strict';


var zlib_deflate = require('./zlib/deflate');
var utils        = require('./utils/common');
var strings      = require('./utils/strings');
var msg          = require('./zlib/messages');
var ZStream      = require('./zlib/zstream');

var toString = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

var Z_NO_FLUSH      = 0;
var Z_FINISH        = 4;

var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_SYNC_FLUSH    = 2;

var Z_DEFAULT_COMPRESSION = -1;

var Z_DEFAULT_STRATEGY    = 0;

var Z_DEFLATED  = 8;

/* ===========================================================================*/


/**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/

/* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overriden.
 **/

/**
 * Deflate.result -> Uint8Array|Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param)  or if you
 * push a chunk with explicit flush (call [[Deflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/

/**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/


/**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/
function Deflate(options) {
  if (!(this instanceof Deflate)) return new Deflate(options);

  this.options = utils.assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY,
    to: ''
  }, options || {});

  var opt = this.options;

  if (opt.raw && (opt.windowBits > 0)) {
    opt.windowBits = -opt.windowBits;
  }

  else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
    opt.windowBits += 16;
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm = new ZStream();
  this.strm.avail_out = 0;

  var status = zlib_deflate.deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy
  );

  if (status !== Z_OK) {
    throw new Error(msg[status]);
  }

  if (opt.header) {
    zlib_deflate.deflateSetHeader(this.strm, opt.header);
  }

  if (opt.dictionary) {
    var dict;
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      // If we need to compress text, change encoding to utf8.
      dict = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }

    status = zlib_deflate.deflateSetDictionary(this.strm, dict);

    if (status !== Z_OK) {
      throw new Error(msg[status]);
    }

    this._dict_set = true;
  }
}

/**
 * Deflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` meansh Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Deflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the compression context.
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * array format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Deflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var status, _mode;

  if (this.ended) { return false; }

  _mode = (mode === ~~mode) ? mode : ((mode === true) ? Z_FINISH : Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    status = zlib_deflate.deflate(strm, _mode);    /* no bad return value */

    if (status !== Z_STREAM_END && status !== Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }
    if (strm.avail_out === 0 || (strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH))) {
      if (this.options.to === 'string') {
        this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
      } else {
        this.onData(utils.shrinkBuf(strm.output, strm.next_out));
      }
    }
  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);

  // Finalize on the last chunk.
  if (_mode === Z_FINISH) {
    status = zlib_deflate.deflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === Z_SYNC_FLUSH) {
    this.onEnd(Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): ouput data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Deflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Deflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK) {
    if (this.options.to === 'string') {
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * deflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , data = Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/
function deflate(input, options) {
  var deflator = new Deflate(options);

  deflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (deflator.err) { throw deflator.msg || msg[deflator.err]; }

  return deflator.result;
}


/**
 * deflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function deflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return deflate(input, options);
}


/**
 * gzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/
function gzip(input, options) {
  options = options || {};
  options.gzip = true;
  return deflate(input, options);
}


exports.Deflate = Deflate;
exports.deflate = deflate;
exports.deflateRaw = deflateRaw;
exports.gzip = gzip;

},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(require,module,exports){
'use strict';


var zlib_inflate = require('./zlib/inflate');
var utils        = require('./utils/common');
var strings      = require('./utils/strings');
var c            = require('./zlib/constants');
var msg          = require('./zlib/messages');
var ZStream      = require('./zlib/zstream');
var GZheader     = require('./zlib/gzheader');

var toString = Object.prototype.toString;

/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/

/* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overriden.
 **/

/**
 * Inflate.result -> Uint8Array|Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
 * push a chunk with explicit flush (call [[Inflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/

/**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/


/**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/
function Inflate(options) {
  if (!(this instanceof Inflate)) return new Inflate(options);

  this.options = utils.assign({
    chunkSize: 16384,
    windowBits: 0,
    to: ''
  }, options || {});

  var opt = this.options;

  // Force window size for `raw` data, if not set directly,
  // because we have no header for autodetect.
  if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) { opt.windowBits = -15; }
  }

  // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
  if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
      !(options && options.windowBits)) {
    opt.windowBits += 32;
  }

  // Gzip header has no info about windows size, we can do autodetect only
  // for deflate. So, if window size not set, force it to max when gzip possible
  if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
    // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm   = new ZStream();
  this.strm.avail_out = 0;

  var status  = zlib_inflate.inflateInit2(
    this.strm,
    opt.windowBits
  );

  if (status !== c.Z_OK) {
    throw new Error(msg[status]);
  }

  this.header = new GZheader();

  zlib_inflate.inflateGetHeader(this.strm, this.header);
}

/**
 * Inflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` meansh Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the decompression context.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Inflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var dictionary = this.options.dictionary;
  var status, _mode;
  var next_out_utf8, tail, utf8str;
  var dict;

  // Flag to properly process Z_BUF_ERROR on testing inflate call
  // when we check that all output data was flushed.
  var allowBufError = false;

  if (this.ended) { return false; }
  _mode = (mode === ~~mode) ? mode : ((mode === true) ? c.Z_FINISH : c.Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // Only binary strings can be decompressed on practice
    strm.input = strings.binstring2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);    /* no bad return value */

    if (status === c.Z_NEED_DICT && dictionary) {
      // Convert data if needed
      if (typeof dictionary === 'string') {
        dict = strings.string2buf(dictionary);
      } else if (toString.call(dictionary) === '[object ArrayBuffer]') {
        dict = new Uint8Array(dictionary);
      } else {
        dict = dictionary;
      }

      status = zlib_inflate.inflateSetDictionary(this.strm, dict);

    }

    if (status === c.Z_BUF_ERROR && allowBufError === true) {
      status = c.Z_OK;
      allowBufError = false;
    }

    if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }

    if (strm.next_out) {
      if (strm.avail_out === 0 || status === c.Z_STREAM_END || (strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH))) {

        if (this.options.to === 'string') {

          next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

          tail = strm.next_out - next_out_utf8;
          utf8str = strings.buf2string(strm.output, next_out_utf8);

          // move tail
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) { utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0); }

          this.onData(utf8str);

        } else {
          this.onData(utils.shrinkBuf(strm.output, strm.next_out));
        }
      }
    }

    // When no more input data, we should check that internal inflate buffers
    // are flushed. The only way to do it when avail_out = 0 - run one more
    // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
    // Here we set flag to process this error properly.
    //
    // NOTE. Deflate does not return error in this case and does not needs such
    // logic.
    if (strm.avail_in === 0 && strm.avail_out === 0) {
      allowBufError = true;
    }

  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);

  if (status === c.Z_STREAM_END) {
    _mode = c.Z_FINISH;
  }

  // Finalize on the last chunk.
  if (_mode === c.Z_FINISH) {
    status = zlib_inflate.inflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === c.Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === c.Z_SYNC_FLUSH) {
    this.onEnd(c.Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): ouput data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Inflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Inflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === c.Z_OK) {
    if (this.options.to === 'string') {
      // Glue & convert here, until we teach pako to send
      // utf8 alligned strings to onData
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * inflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
 *   , output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err)
 *   console.log(err);
 * }
 * ```
 **/
function inflate(input, options) {
  var inflator = new Inflate(options);

  inflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (inflator.err) { throw inflator.msg || msg[inflator.err]; }

  return inflator.result;
}


/**
 * inflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function inflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return inflate(input, options);
}


/**
 * ungzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/


exports.Inflate = Inflate;
exports.inflate = inflate;
exports.inflateRaw = inflateRaw;
exports.ungzip  = inflate;

},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(require,module,exports){
'use strict';


var TYPED_OK =  (typeof Uint8Array !== 'undefined') &&
                (typeof Uint16Array !== 'undefined') &&
                (typeof Int32Array !== 'undefined');


exports.assign = function (obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    var source = sources.shift();
    if (!source) { continue; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (var p in source) {
      if (source.hasOwnProperty(p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
};


// reduce buffer size, avoiding mem copy
exports.shrinkBuf = function (buf, size) {
  if (buf.length === size) { return buf; }
  if (buf.subarray) { return buf.subarray(0, size); }
  buf.length = size;
  return buf;
};


var fnTyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    if (src.subarray && dest.subarray) {
      dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
      return;
    }
    // Fallback to ordinary array
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    var i, l, len, pos, chunk, result;

    // calculate data length
    len = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      len += chunks[i].length;
    }

    // join chunks
    result = new Uint8Array(len);
    pos = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      chunk = chunks[i];
      result.set(chunk, pos);
      pos += chunk.length;
    }

    return result;
  }
};

var fnUntyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    return [].concat.apply([], chunks);
  }
};


// Enable/Disable typed arrays use, for testing
//
exports.setTyped = function (on) {
  if (on) {
    exports.Buf8  = Uint8Array;
    exports.Buf16 = Uint16Array;
    exports.Buf32 = Int32Array;
    exports.assign(exports, fnTyped);
  } else {
    exports.Buf8  = Array;
    exports.Buf16 = Array;
    exports.Buf32 = Array;
    exports.assign(exports, fnUntyped);
  }
};

exports.setTyped(TYPED_OK);

},{}],42:[function(require,module,exports){
// String encode/decode helpers
'use strict';


var utils = require('./common');


// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safary
//
var STR_APPLY_OK = true;
var STR_APPLY_UIA_OK = true;

try { String.fromCharCode.apply(null, [ 0 ]); } catch (__) { STR_APPLY_OK = false; }
try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new utils.Buf8(256);
for (var q = 0; q < 256; q++) {
  _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
}
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


// convert string to array (typed, when possible)
exports.string2buf = function (str) {
  var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

  // count binary size
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }

  // allocate buffer
  buf = new utils.Buf8(buf_len);

  // convert
  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xC0 | (c >>> 6);
      buf[i++] = 0x80 | (c & 0x3f);
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xE0 | (c >>> 12);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | (c >>> 18);
      buf[i++] = 0x80 | (c >>> 12 & 0x3f);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    }
  }

  return buf;
};

// Helper (used in 2 places)
function buf2binstring(buf, len) {
  // use fallback for big arrays to avoid stack overflow
  if (len < 65537) {
    if ((buf.subarray && STR_APPLY_UIA_OK) || (!buf.subarray && STR_APPLY_OK)) {
      return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
    }
  }

  var result = '';
  for (var i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
}


// Convert byte array to binary string
exports.buf2binstring = function (buf) {
  return buf2binstring(buf, buf.length);
};


// Convert binary string (typed, when possible)
exports.binstring2buf = function (str) {
  var buf = new utils.Buf8(str.length);
  for (var i = 0, len = buf.length; i < len; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
};


// convert array to string
exports.buf2string = function (buf, max) {
  var i, out, c, c_len;
  var len = max || buf.length;

  // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.
  var utf16buf = new Array(len * 2);

  for (out = 0, i = 0; i < len;) {
    c = buf[i++];
    // quick process ascii
    if (c < 0x80) { utf16buf[out++] = c; continue; }

    c_len = _utf8len[c];
    // skip 5 & 6 byte codes
    if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

    // apply mask on first byte
    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
    // join the rest
    while (c_len > 1 && i < len) {
      c = (c << 6) | (buf[i++] & 0x3f);
      c_len--;
    }

    // terminated by end of string?
    if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
      utf16buf[out++] = 0xdc00 | (c & 0x3ff);
    }
  }

  return buf2binstring(utf16buf, out);
};


// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
exports.utf8border = function (buf, max) {
  var pos;

  max = max || buf.length;
  if (max > buf.length) { max = buf.length; }

  // go back from last position, until start of sequence found
  pos = max - 1;
  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

  // Fuckup - very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos < 0) { return max; }

  // If we came to start of buffer - that means vuffer is too small,
  // return max too.
  if (pos === 0) { return max; }

  return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};

},{"./common":41}],43:[function(require,module,exports){
'use strict';

// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It doesn't worth to make additional optimizationa as in original.
// Small size is preferable.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function adler32(adler, buf, len, pos) {
  var s1 = (adler & 0xffff) |0,
      s2 = ((adler >>> 16) & 0xffff) |0,
      n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 << 16)) |0;
}


module.exports = adler32;

},{}],44:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {

  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH:         0,
  Z_PARTIAL_FLUSH:    1,
  Z_SYNC_FLUSH:       2,
  Z_FULL_FLUSH:       3,
  Z_FINISH:           4,
  Z_BLOCK:            5,
  Z_TREES:            6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK:               0,
  Z_STREAM_END:       1,
  Z_NEED_DICT:        2,
  Z_ERRNO:           -1,
  Z_STREAM_ERROR:    -2,
  Z_DATA_ERROR:      -3,
  //Z_MEM_ERROR:     -4,
  Z_BUF_ERROR:       -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION:         0,
  Z_BEST_SPEED:             1,
  Z_BEST_COMPRESSION:       9,
  Z_DEFAULT_COMPRESSION:   -1,


  Z_FILTERED:               1,
  Z_HUFFMAN_ONLY:           2,
  Z_RLE:                    3,
  Z_FIXED:                  4,
  Z_DEFAULT_STRATEGY:       0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY:                 0,
  Z_TEXT:                   1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN:                2,

  /* The deflate compression method */
  Z_DEFLATED:               8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};

},{}],45:[function(require,module,exports){
'use strict';

// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// Use ordinary array, since untyped makes no boost here
function makeTable() {
  var c, table = [];

  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }

  return table;
}

// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();


function crc32(crc, buf, len, pos) {
  var t = crcTable,
      end = pos + len;

  crc ^= -1;

  for (var i = pos; i < end; i++) {
    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return (crc ^ (-1)); // >>> 0;
}


module.exports = crc32;

},{}],46:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils   = require('../utils/common');
var trees   = require('./trees');
var adler32 = require('./adler32');
var crc32   = require('./crc32');
var msg     = require('./messages');

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
var Z_NO_FLUSH      = 0;
var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
//var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
//var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
//var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;


/* compression levels */
//var Z_NO_COMPRESSION      = 0;
//var Z_BEST_SPEED          = 1;
//var Z_BEST_COMPRESSION    = 9;
var Z_DEFAULT_COMPRESSION = -1;


var Z_FILTERED            = 1;
var Z_HUFFMAN_ONLY        = 2;
var Z_RLE                 = 3;
var Z_FIXED               = 4;
var Z_DEFAULT_STRATEGY    = 0;

/* Possible values of the data_type field (though see inflate()) */
//var Z_BINARY              = 0;
//var Z_TEXT                = 1;
//var Z_ASCII               = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;


/* The deflate compression method */
var Z_DEFLATED  = 8;

/*============================================================================*/


var MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */
var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_MEM_LEVEL = 8;


var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */
var LITERALS      = 256;
/* number of literal bytes 0..255 */
var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */
var D_CODES       = 30;
/* number of distance codes */
var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */
var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */
var MAX_BITS  = 15;
/* All codes must not exceed MAX_BITS bits */

var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

var PRESET_DICT = 0x20;

var INIT_STATE = 42;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;

var BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
var BS_BLOCK_DONE     = 2; /* block flush performed */
var BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
var BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */

var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

function err(strm, errorCode) {
  strm.msg = msg[errorCode];
  return errorCode;
}

function rank(f) {
  return ((f) << 1) - ((f) > 4 ? 9 : 0);
}

function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }


/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */
function flush_pending(strm) {
  var s = strm.state;

  //_tr_flush_bits(s);
  var len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) { return; }

  utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
}


function flush_block_only(s, last) {
  trees._tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
}


function put_byte(s, b) {
  s.pending_buf[s.pending++] = b;
}


/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */
function putShortMSB(s, b) {
//  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
  s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
  s.pending_buf[s.pending++] = b & 0xff;
}


/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */
function read_buf(strm, buf, start, size) {
  var len = strm.avail_in;

  if (len > size) { len = size; }
  if (len === 0) { return 0; }

  strm.avail_in -= len;

  // zmemcpy(buf, strm->next_in, len);
  utils.arraySet(buf, strm.input, strm.next_in, len, start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32(strm.adler, buf, len, start);
  }

  else if (strm.state.wrap === 2) {
    strm.adler = crc32(strm.adler, buf, len, start);
  }

  strm.next_in += len;
  strm.total_in += len;

  return len;
}


/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */
function longest_match(s, cur_match) {
  var chain_length = s.max_chain_length;      /* max hash chain length */
  var scan = s.strstart; /* current string */
  var match;                       /* matched string */
  var len;                           /* length of current match */
  var best_len = s.prev_length;              /* best match length so far */
  var nice_match = s.nice_match;             /* stop if match long enough */
  var limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
      s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;

  var _win = s.window; // shortcut

  var wmask = s.w_mask;
  var prev  = s.prev;

  /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  var strend = s.strstart + MAX_MATCH;
  var scan_end1  = _win[scan + best_len - 1];
  var scan_end   = _win[scan + best_len];

  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */
  if (nice_match > s.lookahead) { nice_match = s.lookahead; }

  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

  do {
    // Assert(cur_match < s->strstart, "no future");
    match = cur_match;

    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len]     !== scan_end  ||
        _win[match + best_len - 1] !== scan_end1 ||
        _win[match]                !== _win[scan] ||
        _win[++match]              !== _win[scan + 1]) {
      continue;
    }

    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */
    scan += 2;
    match++;
    // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */
    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             scan < strend);

    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;

    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1  = _win[scan + best_len - 1];
      scan_end   = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
}


/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */
function fill_window(s) {
  var _w_size = s.w_size;
  var p, n, m, more, str;

  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart;

    // JS ints have 32 bit, block below not needed
    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) <= 2) {
    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}


    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

      utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart >= MAX_DIST */
      s.block_start -= _w_size;

      /* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */

      n = s.hash_size;
      p = n;
      do {
        m = s.head[--p];
        s.head[p] = (m >= _w_size ? m - _w_size : 0);
      } while (--n);

      n = _w_size;
      p = n;
      do {
        m = s.prev[--p];
        s.prev[p] = (m >= _w_size ? m - _w_size : 0);
        /* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */
      } while (--n);

      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }

    /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */
    //Assert(more >= 2, "more < 2");
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;

    /* Initialize the hash value now that we have some input: */
    if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];

      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + 1]) & s.hash_mask;
//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
      while (s.insert) {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */

  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
//  if (s.high_water < s.window_size) {
//    var curr = s.strstart + s.lookahead;
//    var init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
}

/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */
function deflate_stored(s, flush) {
  /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */
  var max_block_size = 0xffff;

  if (max_block_size > s.pending_buf_size - 5) {
    max_block_size = s.pending_buf_size - 5;
  }

  /* Copy as much as possible from input to output: */
  for (;;) {
    /* Fill the window as much as possible: */
    if (s.lookahead <= 1) {

      //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
      //  s->block_start >= (long)s->w_size, "slide too late");
//      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
//        s.block_start >= s.w_size)) {
//        throw  new Error("slide too late");
//      }

      fill_window(s);
      if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }

      if (s.lookahead === 0) {
        break;
      }
      /* flush the current block */
    }
    //Assert(s->block_start >= 0L, "block gone");
//    if (s.block_start < 0) throw new Error("block gone");

    s.strstart += s.lookahead;
    s.lookahead = 0;

    /* Emit a stored block if pending_buf will be full: */
    var max_start = s.block_start + max_block_size;

    if (s.strstart === 0 || s.strstart >= max_start) {
      /* strstart == 0 is possible when wraparound on 16-bit machine */
      s.lookahead = s.strstart - max_start;
      s.strstart = max_start;
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/


    }
    /* Flush if we may have to slide, otherwise block_start may become
     * negative and the data will be gone:
     */
    if (s.strstart - s.block_start >= (s.w_size - MIN_LOOKAHEAD)) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }

  s.insert = 0;

  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }

  if (s.strstart > s.block_start) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_NEED_MORE;
}

/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
function deflate_fast(s, flush) {
  var hash_head;        /* head of the hash chain */
  var bflush;           /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break; /* flush the current block */
      }
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */
    if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }
    if (s.match_length >= MIN_MATCH) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;

      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */
      if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
        s.match_length--; /* string at strstart already in table */
        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);
        s.strstart++;
      } else
      {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + 1]) & s.hash_mask;

//#if MIN_MATCH != 3
//                Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif
        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = ((s.strstart < (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
function deflate_slow(s, flush) {
  var hash_head;          /* head of hash chain */
  var bflush;              /* set if current block must be flushed */

  var max_insert;

  /* Process the input block. */
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     */
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;

    if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
        s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */

      if (s.match_length <= 5 &&
         (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {

        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        s.match_length = MIN_MATCH - 1;
      }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      /* Do not insert strings in hash table beyond this. */

      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/
      bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }

    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  //Assert (flush != Z_NO_FLUSH, "no flush?");
  if (s.match_available) {
    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
}


/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */
function deflate_rle(s, flush) {
  var bflush;            /* set if current block must be flushed */
  var prev;              /* byte at distance one to match */
  var scan, strend;      /* scan goes up to strend for length of run */

  var _win = s.window;

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* See how many times the previous byte repeats */
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
    }

    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
    if (s.match_length >= MIN_MATCH) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s->window[s->strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */
function deflate_huff(s, flush) {
  var bflush;             /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        break;      /* flush the current block */
      }
    }

    /* Output a literal byte */
    s.match_length = 0;
    //Tracevv((stderr,"%c", s->window[s->strstart]));
    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}

var configuration_table;

configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),          /* 3 */

  new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
];


/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */
function lm_init(s) {
  s.window_size = 2 * s.w_size;

  /*** CLEAR_HASH(s); ***/
  zero(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;

  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
}


function DeflateState() {
  this.strm = null;            /* pointer back to this zlib stream */
  this.status = 0;            /* as the name implies */
  this.pending_buf = null;      /* output still pending */
  this.pending_buf_size = 0;  /* size of pending_buf */
  this.pending_out = 0;       /* next pending byte to output to the stream */
  this.pending = 0;           /* nb of bytes in the pending buffer */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.gzhead = null;         /* gzip header information to write */
  this.gzindex = 0;           /* where in extra, name, or comment */
  this.method = Z_DEFLATED; /* can only be DEFLATED */
  this.last_flush = -1;   /* value of flush param for previous deflate call */

  this.w_size = 0;  /* LZ77 window size (32K by default) */
  this.w_bits = 0;  /* log2(w_size)  (8..16) */
  this.w_mask = 0;  /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null;   /* Heads of the hash chains or NIL. */

  this.ins_h = 0;       /* hash index of string to be inserted */
  this.hash_size = 0;   /* number of elements in hash table */
  this.hash_bits = 0;   /* log2(hash_size) */
  this.hash_mask = 0;   /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0;      /* length of best match */
  this.prev_match = 0;        /* previous match */
  this.match_available = 0;   /* set if previous match exists */
  this.strstart = 0;          /* start of string to insert */
  this.match_start = 0;       /* start of matching string */
  this.lookahead = 0;         /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;
  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */

  this.level = 0;     /* compression level (1..9) */
  this.strategy = 0;  /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0; /* Stop searching when current match exceeds this */

              /* used by trees.c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */

  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective
  this.dyn_ltree  = new utils.Buf16(HEAP_SIZE * 2);
  this.dyn_dtree  = new utils.Buf16((2 * D_CODES + 1) * 2);
  this.bl_tree    = new utils.Buf16((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);

  this.l_desc   = null;         /* desc. for literal tree */
  this.d_desc   = null;         /* desc. for distance tree */
  this.bl_desc  = null;         /* desc. for bit length tree */

  //ush bl_count[MAX_BITS+1];
  this.bl_count = new utils.Buf16(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
  this.heap = new utils.Buf16(2 * L_CODES + 1);  /* heap used to build the Huffman trees */
  zero(this.heap);

  this.heap_len = 0;               /* number of elements in the heap */
  this.heap_max = 0;               /* element of largest frequency */
  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */

  this.depth = new utils.Buf16(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
  zero(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.l_buf = 0;          /* buffer index for literals or lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.last_lit = 0;      /* running index in l_buf */

  this.d_buf = 0;
  /* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */

  this.opt_len = 0;       /* bit length of current block with optimal trees */
  this.static_len = 0;    /* bit length of current block with static trees */
  this.matches = 0;       /* number of string matches in current block */
  this.insert = 0;        /* bytes at end of window left to insert */


  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */
  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */

  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;
  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}


function deflateResetKeep(strm) {
  var s;

  if (!strm || !strm.state) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;

  s = strm.state;
  s.pending = 0;
  s.pending_out = 0;

  if (s.wrap < 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }
  s.status = (s.wrap ? INIT_STATE : BUSY_STATE);
  strm.adler = (s.wrap === 2) ?
    0  // crc32(0, Z_NULL, 0)
  :
    1; // adler32(0, Z_NULL, 0)
  s.last_flush = Z_NO_FLUSH;
  trees._tr_init(s);
  return Z_OK;
}


function deflateReset(strm) {
  var ret = deflateResetKeep(strm);
  if (ret === Z_OK) {
    lm_init(strm.state);
  }
  return ret;
}


function deflateSetHeader(strm, head) {
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  if (strm.state.wrap !== 2) { return Z_STREAM_ERROR; }
  strm.state.gzhead = head;
  return Z_OK;
}


function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
  if (!strm) { // === Z_NULL
    return Z_STREAM_ERROR;
  }
  var wrap = 1;

  if (level === Z_DEFAULT_COMPRESSION) {
    level = 6;
  }

  if (windowBits < 0) { /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  }

  else if (windowBits > 15) {
    wrap = 2;           /* write gzip wrapper instead */
    windowBits -= 16;
  }


  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED ||
    windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
    strategy < 0 || strategy > Z_FIXED) {
    return err(strm, Z_STREAM_ERROR);
  }


  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */

  var s = new DeflateState();

  strm.state = s;
  s.strm = strm;

  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;

  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

  s.window = new utils.Buf8(s.w_size * 2);
  s.head = new utils.Buf16(s.hash_size);
  s.prev = new utils.Buf16(s.w_size);

  // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s->window yet */

  s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */

  s.pending_buf_size = s.lit_bufsize * 4;

  //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
  //s->pending_buf = (uchf *) overlay;
  s.pending_buf = new utils.Buf8(s.pending_buf_size);

  // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
  //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
  s.d_buf = 1 * s.lit_bufsize;

  //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
  s.l_buf = (1 + 2) * s.lit_bufsize;

  s.level = level;
  s.strategy = strategy;
  s.method = method;

  return deflateReset(strm);
}

function deflateInit(strm, level) {
  return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
}


function deflate(strm, flush) {
  var old_flush, s;
  var beg, val; // for gzip header write only

  if (!strm || !strm.state ||
    flush > Z_BLOCK || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
  }

  s = strm.state;

  if (!strm.output ||
      (!strm.input && strm.avail_in !== 0) ||
      (s.status === FINISH_STATE && flush !== Z_FINISH)) {
    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR : Z_STREAM_ERROR);
  }

  s.strm = strm; /* just in case */
  old_flush = s.last_flush;
  s.last_flush = flush;

  /* Write the header */
  if (s.status === INIT_STATE) {

    if (s.wrap === 2) { // GZIP header
      strm.adler = 0;  //crc32(0L, Z_NULL, 0);
      put_byte(s, 31);
      put_byte(s, 139);
      put_byte(s, 8);
      if (!s.gzhead) { // s->gzhead == Z_NULL
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, OS_CODE);
        s.status = BUSY_STATE;
      }
      else {
        put_byte(s, (s.gzhead.text ? 1 : 0) +
                    (s.gzhead.hcrc ? 2 : 0) +
                    (!s.gzhead.extra ? 0 : 4) +
                    (!s.gzhead.name ? 0 : 8) +
                    (!s.gzhead.comment ? 0 : 16)
                );
        put_byte(s, s.gzhead.time & 0xff);
        put_byte(s, (s.gzhead.time >> 8) & 0xff);
        put_byte(s, (s.gzhead.time >> 16) & 0xff);
        put_byte(s, (s.gzhead.time >> 24) & 0xff);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, s.gzhead.os & 0xff);
        if (s.gzhead.extra && s.gzhead.extra.length) {
          put_byte(s, s.gzhead.extra.length & 0xff);
          put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
        }
        if (s.gzhead.hcrc) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
        }
        s.gzindex = 0;
        s.status = EXTRA_STATE;
      }
    }
    else // DEFLATE header
    {
      var header = (Z_DEFLATED + ((s.w_bits - 8) << 4)) << 8;
      var level_flags = -1;

      if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
        level_flags = 0;
      } else if (s.level < 6) {
        level_flags = 1;
      } else if (s.level === 6) {
        level_flags = 2;
      } else {
        level_flags = 3;
      }
      header |= (level_flags << 6);
      if (s.strstart !== 0) { header |= PRESET_DICT; }
      header += 31 - (header % 31);

      s.status = BUSY_STATE;
      putShortMSB(s, header);

      /* Save the adler32 of the preset dictionary: */
      if (s.strstart !== 0) {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 0xffff);
      }
      strm.adler = 1; // adler32(0L, Z_NULL, 0);
    }
  }

//#ifdef GZIP
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */

      while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            break;
          }
        }
        put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
        s.gzindex++;
      }
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (s.gzindex === s.gzhead.extra.length) {
        s.gzindex = 0;
        s.status = NAME_STATE;
      }
    }
    else {
      s.status = NAME_STATE;
    }
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.gzindex = 0;
        s.status = COMMENT_STATE;
      }
    }
    else {
      s.status = COMMENT_STATE;
    }
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.status = HCRC_STATE;
      }
    }
    else {
      s.status = HCRC_STATE;
    }
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
      }
      if (s.pending + 2 <= s.pending_buf_size) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, (strm.adler >> 8) & 0xff);
        strm.adler = 0; //crc32(0L, Z_NULL, 0);
        s.status = BUSY_STATE;
      }
    }
    else {
      s.status = BUSY_STATE;
    }
  }
//#endif

  /* Flush as much pending output as possible */
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK;
    }

    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
    flush !== Z_FINISH) {
    return err(strm, Z_BUF_ERROR);
  }

  /* User must not provide more input after the first FINISH: */
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR);
  }

  /* Start a new block or continue the current one.
   */
  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
    (flush !== Z_NO_FLUSH && s.status !== FINISH_STATE)) {
    var bstate = (s.strategy === Z_HUFFMAN_ONLY) ? deflate_huff(s, flush) :
      (s.strategy === Z_RLE ? deflate_rle(s, flush) :
        configuration_table[s.level].func(s, flush));

    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }
      return Z_OK;
      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        trees._tr_align(s);
      }
      else if (flush !== Z_BLOCK) { /* FULL_FLUSH or SYNC_FLUSH */

        trees._tr_stored_block(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */
        if (flush === Z_FULL_FLUSH) {
          /*** CLEAR_HASH(s); ***/             /* forget history */
          zero(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
        return Z_OK;
      }
    }
  }
  //Assert(strm->avail_out > 0, "bug2");
  //if (strm.avail_out <= 0) { throw new Error("bug2");}

  if (flush !== Z_FINISH) { return Z_OK; }
  if (s.wrap <= 0) { return Z_STREAM_END; }

  /* Write the trailer */
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 0xff);
    put_byte(s, (strm.adler >> 8) & 0xff);
    put_byte(s, (strm.adler >> 16) & 0xff);
    put_byte(s, (strm.adler >> 24) & 0xff);
    put_byte(s, strm.total_in & 0xff);
    put_byte(s, (strm.total_in >> 8) & 0xff);
    put_byte(s, (strm.total_in >> 16) & 0xff);
    put_byte(s, (strm.total_in >> 24) & 0xff);
  }
  else
  {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 0xffff);
  }

  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */
  if (s.wrap > 0) { s.wrap = -s.wrap; }
  /* write the trailer only once! */
  return s.pending !== 0 ? Z_OK : Z_STREAM_END;
}

function deflateEnd(strm) {
  var status;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  status = strm.state.status;
  if (status !== INIT_STATE &&
    status !== EXTRA_STATE &&
    status !== NAME_STATE &&
    status !== COMMENT_STATE &&
    status !== HCRC_STATE &&
    status !== BUSY_STATE &&
    status !== FINISH_STATE
  ) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.state = null;

  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
}


/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */
function deflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var s;
  var str, n;
  var wrap;
  var avail;
  var next;
  var input;
  var tmpDict;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  s = strm.state;
  wrap = s.wrap;

  if (wrap === 2 || (wrap === 1 && s.status !== INIT_STATE) || s.lookahead) {
    return Z_STREAM_ERROR;
  }

  /* when using zlib wrappers, compute Adler-32 for provided dictionary */
  if (wrap === 1) {
    /* adler32(strm->adler, dictionary, dictLength); */
    strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
  }

  s.wrap = 0;   /* avoid computing Adler-32 in read_buf */

  /* if dictionary would fill window, just replace the history */
  if (dictLength >= s.w_size) {
    if (wrap === 0) {            /* already empty otherwise */
      /*** CLEAR_HASH(s); ***/
      zero(s.head); // Fill with NIL (= 0);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    /* use the tail */
    // dictionary = dictionary.slice(dictLength - s.w_size);
    tmpDict = new utils.Buf8(s.w_size);
    utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  /* insert dictionary into window and hash */
  avail = strm.avail_in;
  next = strm.next_in;
  input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead >= MIN_MATCH) {
    str = s.strstart;
    n = s.lookahead - (MIN_MATCH - 1);
    do {
      /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

      s.prev[str & s.w_mask] = s.head[s.ins_h];

      s.head[s.ins_h] = str;
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK;
}


exports.deflateInit = deflateInit;
exports.deflateInit2 = deflateInit2;
exports.deflateReset = deflateReset;
exports.deflateResetKeep = deflateResetKeep;
exports.deflateSetHeader = deflateSetHeader;
exports.deflate = deflate;
exports.deflateEnd = deflateEnd;
exports.deflateSetDictionary = deflateSetDictionary;
exports.deflateInfo = 'pako deflate (from Nodeca project)';

/* Not implemented
exports.deflateBound = deflateBound;
exports.deflateCopy = deflateCopy;
exports.deflateParams = deflateParams;
exports.deflatePending = deflatePending;
exports.deflatePrime = deflatePrime;
exports.deflateTune = deflateTune;
*/

},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function GZheader() {
  /* true if compressed data believed to be text */
  this.text       = 0;
  /* modification time */
  this.time       = 0;
  /* extra flags (not used when writing a gzip file) */
  this.xflags     = 0;
  /* operating system */
  this.os         = 0;
  /* pointer to extra field or Z_NULL if none */
  this.extra      = null;
  /* extra field length (valid if extra != Z_NULL) */
  this.extra_len  = 0; // Actually, we don't need it in JS,
                       // but leave for few code modifications

  //
  // Setup limits is not necessary because in js we should not preallocate memory
  // for inflate use constant limit in 65536 bytes
  //

  /* space at extra (only when reading header) */
  // this.extra_max  = 0;
  /* pointer to zero-terminated file name or Z_NULL */
  this.name       = '';
  /* space at name (only when reading header) */
  // this.name_max   = 0;
  /* pointer to zero-terminated comment or Z_NULL */
  this.comment    = '';
  /* space at comment (only when reading header) */
  // this.comm_max   = 0;
  /* true if there was or will be a header crc */
  this.hcrc       = 0;
  /* true when done reading gzip header (not used when writing a gzip file) */
  this.done       = false;
}

module.exports = GZheader;

},{}],48:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// See state defs from inflate.js
var BAD = 30;       /* got a data error -- remain here until reset */
var TYPE = 12;      /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */
module.exports = function inflate_fast(strm, start) {
  var state;
  var _in;                    /* local strm.input */
  var last;                   /* have enough input while in < last */
  var _out;                   /* local strm.output */
  var beg;                    /* inflate()'s initial strm.output */
  var end;                    /* while out < end, enough space available */
//#ifdef INFLATE_STRICT
  var dmax;                   /* maximum distance from zlib header */
//#endif
  var wsize;                  /* window size or zero if not using window */
  var whave;                  /* valid bytes in the window */
  var wnext;                  /* window write index */
  // Use `s_window` instead `window`, avoid conflict with instrumentation tools
  var s_window;               /* allocated sliding window, if wsize != 0 */
  var hold;                   /* local strm.hold */
  var bits;                   /* local strm.bits */
  var lcode;                  /* local strm.lencode */
  var dcode;                  /* local strm.distcode */
  var lmask;                  /* mask for first level of length codes */
  var dmask;                  /* mask for first level of distance codes */
  var here;                   /* retrieved table entry */
  var op;                     /* code bits, operation, extra bits, or */
                              /*  window position, window bytes to copy */
  var len;                    /* match length, unused bytes */
  var dist;                   /* match distance */
  var from;                   /* where to copy match from */
  var from_source;


  var input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
//#ifdef INFLATE_STRICT
  dmax = state.dmax;
//#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;


  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top:
  do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }

    here = lcode[hold & lmask];

    dolen:
    for (;;) { // Goto emulation
      op = here >>> 24/*here.bits*/;
      hold >>>= op;
      bits -= op;
      op = (here >>> 16) & 0xff/*here.op*/;
      if (op === 0) {                          /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here & 0xffff/*here.val*/;
      }
      else if (op & 16) {                     /* length base */
        len = here & 0xffff/*here.val*/;
        op &= 15;                           /* number of extra bits */
        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }
          len += hold & ((1 << op) - 1);
          hold >>>= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\n", len));
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = dcode[hold & dmask];

        dodist:
        for (;;) { // goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;

          if (op & 16) {                      /* distance base */
            dist = here & 0xffff/*here.val*/;
            op &= 15;                       /* number of extra bits */
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }
            dist += hold & ((1 << op) - 1);
//#ifdef INFLATE_STRICT
            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break top;
            }
//#endif
            hold >>>= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\n", dist));
            op = _out - beg;                /* max distance in output */
            if (dist > op) {                /* see if copy from window */
              op = dist - op;               /* distance back in window */
              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD;
                  break top;
                }

// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
              }
              from = 0; // window index
              from_source = s_window;
              if (wnext === 0) {           /* very common case */
                from += wsize - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              else if (wnext < op) {      /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op < len) {         /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext < len) {  /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;      /* rest from output */
                    from_source = output;
                  }
                }
              }
              else {                      /* contiguous in window */
                from += wnext - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            }
            else {
              from = _out - dist;          /* copy direct from output */
              do {                        /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);
              if (len) {
                output[_out++] = output[from++];
                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          }
          else if ((op & 64) === 0) {          /* 2nd level distance code */
            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dodist;
          }
          else {
            strm.msg = 'invalid distance code';
            state.mode = BAD;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      }
      else if ((op & 64) === 0) {              /* 2nd level length code */
        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
        continue dolen;
      }
      else if (op & 32) {                     /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE;
        break top;
      }
      else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);

  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
  state.hold = hold;
  state.bits = bits;
  return;
};

},{}],49:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils         = require('../utils/common');
var adler32       = require('./adler32');
var crc32         = require('./crc32');
var inflate_fast  = require('./inffast');
var inflate_table = require('./inftrees');

var CODES = 0;
var LENS = 1;
var DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
//var Z_NO_FLUSH      = 0;
//var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
//var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;

/* The deflate compression method */
var Z_DEFLATED  = 8;


/* STATES ====================================================================*/
/* ===========================================================================*/


var    HEAD = 1;       /* i: waiting for magic header */
var    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
var    TIME = 3;       /* i: waiting for modification time (gzip) */
var    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
var    EXLEN = 5;      /* i: waiting for extra length (gzip) */
var    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
var    NAME = 7;       /* i: waiting for end of file name (gzip) */
var    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
var    HCRC = 9;       /* i: waiting for header crc (gzip) */
var    DICTID = 10;    /* i: waiting for dictionary check value */
var    DICT = 11;      /* waiting for inflateSetDictionary() call */
var        TYPE = 12;      /* i: waiting for type bits, including last-flag bit */
var        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
var        STORED = 14;    /* i: waiting for stored size (length and complement) */
var        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
var        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
var        TABLE = 17;     /* i: waiting for dynamic block table lengths */
var        LENLENS = 18;   /* i: waiting for code length code lengths */
var        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
var            LEN_ = 20;      /* i: same as LEN below, but only first time in */
var            LEN = 21;       /* i: waiting for length/lit/eob code */
var            LENEXT = 22;    /* i: waiting for length extra bits */
var            DIST = 23;      /* i: waiting for distance code */
var            DISTEXT = 24;   /* i: waiting for distance extra bits */
var            MATCH = 25;     /* o: waiting for output space to copy string */
var            LIT = 26;       /* o: waiting for output space to write literal */
var    CHECK = 27;     /* i: waiting for 32-bit check value */
var    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
var    DONE = 29;      /* finished check, done -- remain here until reset */
var    BAD = 30;       /* got a data error -- remain here until reset */
var    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
var    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/



var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_WBITS = MAX_WBITS;


function zswap32(q) {
  return  (((q >>> 24) & 0xff) +
          ((q >>> 8) & 0xff00) +
          ((q & 0xff00) << 8) +
          ((q & 0xff) << 24));
}


function InflateState() {
  this.mode = 0;             /* current inflate mode */
  this.last = false;          /* true if processing last block */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.havedict = false;      /* true if dictionary provided */
  this.flags = 0;             /* gzip header method and flags (0 if zlib) */
  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0;             /* protected copy of check value */
  this.total = 0;             /* protected copy of output count */
  // TODO: may be {}
  this.head = null;           /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0;             /* log base 2 of requested window size */
  this.wsize = 0;             /* window size or zero if not using window */
  this.whave = 0;             /* valid bytes in the window */
  this.wnext = 0;             /* window write index */
  this.window = null;         /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0;              /* input bit accumulator */
  this.bits = 0;              /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0;            /* literal or length of data to copy */
  this.offset = 0;            /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0;             /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null;          /* starting table for length/literal codes */
  this.distcode = null;         /* starting table for distance codes */
  this.lenbits = 0;           /* index bits for lencode */
  this.distbits = 0;          /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0;             /* number of code length code lengths */
  this.nlen = 0;              /* number of length code lengths */
  this.ndist = 0;             /* number of distance code lengths */
  this.have = 0;              /* number of code lengths in lens[] */
  this.next = null;              /* next available space in codes[] */

  this.lens = new utils.Buf16(320); /* temporary storage for code lengths */
  this.work = new utils.Buf16(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
  this.sane = 0;                   /* if false, allow invalid distance too far */
  this.back = 0;                   /* bits back of last unprocessed length/lit */
  this.was = 0;                    /* initial length of match */
}

function inflateResetKeep(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) {       /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null/*Z_NULL*/;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
  state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);

  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\n"));
  return Z_OK;
}

function inflateReset(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);

}

function inflateReset2(strm, windowBits) {
  var wrap;
  var state;

  /* get the state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  }
  else {
    wrap = (windowBits >> 4) + 1;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
}

function inflateInit2(strm, windowBits) {
  var ret;
  var state;

  if (!strm) { return Z_STREAM_ERROR; }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));
  strm.state = state;
  state.window = null/*Z_NULL*/;
  ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK) {
    strm.state = null/*Z_NULL*/;
  }
  return ret;
}

function inflateInit(strm) {
  return inflateInit2(strm, DEF_WBITS);
}


/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
var virgin = true;

var lenfix, distfix; // We have no pointers in JS, so keep tables separate

function fixedtables(state) {
  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    var sym;

    lenfix = new utils.Buf32(512);
    distfix = new utils.Buf32(32);

    /* literal/length table */
    sym = 0;
    while (sym < 144) { state.lens[sym++] = 8; }
    while (sym < 256) { state.lens[sym++] = 9; }
    while (sym < 280) { state.lens[sym++] = 7; }
    while (sym < 288) { state.lens[sym++] = 8; }

    inflate_table(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

    /* distance table */
    sym = 0;
    while (sym < 32) { state.lens[sym++] = 5; }

    inflate_table(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

    /* do this just once */
    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
}


/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
function updatewindow(strm, src, end, copy) {
  var dist;
  var state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;

    state.window = new utils.Buf8(state.wsize);
  }

  /* copy state->wsize or less output bytes into the circular window */
  if (copy >= state.wsize) {
    utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  }
  else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    //zmemcpy(state->window + state->wnext, end - copy, dist);
    utils.arraySet(state.window, src, end - copy, dist, state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      utils.arraySet(state.window, src, end - copy, copy, 0);
      state.wnext = copy;
      state.whave = state.wsize;
    }
    else {
      state.wnext += dist;
      if (state.wnext === state.wsize) { state.wnext = 0; }
      if (state.whave < state.wsize) { state.whave += dist; }
    }
  }
  return 0;
}

function inflate(strm, flush) {
  var state;
  var input, output;          // input/output buffers
  var next;                   /* next input INDEX */
  var put;                    /* next output INDEX */
  var have, left;             /* available input and output */
  var hold;                   /* bit buffer */
  var bits;                   /* bits in bit buffer */
  var _in, _out;              /* save starting available input and output */
  var copy;                   /* number of stored or match bytes to copy */
  var from;                   /* where to copy match bytes from */
  var from_source;
  var here = 0;               /* current decoding table entry */
  var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //var last;                   /* parent table entry */
  var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  var len;                    /* length to copy for repeats, bits to drop */
  var ret;                    /* return code */
  var hbuf = new utils.Buf8(4);    /* buffer for gzip header crc calculation */
  var opts;

  var n; // temporary var for NEED_BITS

  var order = /* permutation of code lengths */
    [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];


  if (!strm || !strm.state || !strm.output ||
      (!strm.input && strm.avail_in !== 0)) {
    return Z_STREAM_ERROR;
  }

  state = strm.state;
  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK;

  inf_leave: // goto emulation
  for (;;) {
    switch (state.mode) {
    case HEAD:
      if (state.wrap === 0) {
        state.mode = TYPEDO;
        break;
      }
      //=== NEEDBITS(16);
      while (bits < 16) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
        state.check = 0/*crc32(0L, Z_NULL, 0)*/;
        //=== CRC2(state.check, hold);
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        state.check = crc32(state.check, hbuf, 2, 0);
        //===//

        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = FLAGS;
        break;
      }
      state.flags = 0;           /* expect zlib header */
      if (state.head) {
        state.head.done = false;
      }
      if (!(state.wrap & 1) ||   /* check if zlib header allowed */
        (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
        strm.msg = 'incorrect header check';
        state.mode = BAD;
        break;
      }
      if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
        strm.msg = 'unknown compression method';
        state.mode = BAD;
        break;
      }
      //--- DROPBITS(4) ---//
      hold >>>= 4;
      bits -= 4;
      //---//
      len = (hold & 0x0f)/*BITS(4)*/ + 8;
      if (state.wbits === 0) {
        state.wbits = len;
      }
      else if (len > state.wbits) {
        strm.msg = 'invalid window size';
        state.mode = BAD;
        break;
      }
      state.dmax = 1 << len;
      //Tracev((stderr, "inflate:   zlib header ok\n"));
      strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
      state.mode = hold & 0x200 ? DICTID : TYPE;
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      break;
    case FLAGS:
      //=== NEEDBITS(16); */
      while (bits < 16) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      state.flags = hold;
      if ((state.flags & 0xff) !== Z_DEFLATED) {
        strm.msg = 'unknown compression method';
        state.mode = BAD;
        break;
      }
      if (state.flags & 0xe000) {
        strm.msg = 'unknown header flags set';
        state.mode = BAD;
        break;
      }
      if (state.head) {
        state.head.text = ((hold >> 8) & 1);
      }
      if (state.flags & 0x0200) {
        //=== CRC2(state.check, hold);
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        state.check = crc32(state.check, hbuf, 2, 0);
        //===//
      }
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = TIME;
      /* falls through */
    case TIME:
      //=== NEEDBITS(32); */
      while (bits < 32) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if (state.head) {
        state.head.time = hold;
      }
      if (state.flags & 0x0200) {
        //=== CRC4(state.check, hold)
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        hbuf[2] = (hold >>> 16) & 0xff;
        hbuf[3] = (hold >>> 24) & 0xff;
        state.check = crc32(state.check, hbuf, 4, 0);
        //===
      }
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = OS;
      /* falls through */
    case OS:
      //=== NEEDBITS(16); */
      while (bits < 16) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if (state.head) {
        state.head.xflags = (hold & 0xff);
        state.head.os = (hold >> 8);
      }
      if (state.flags & 0x0200) {
        //=== CRC2(state.check, hold);
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        state.check = crc32(state.check, hbuf, 2, 0);
        //===//
      }
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = EXLEN;
      /* falls through */
    case EXLEN:
      if (state.flags & 0x0400) {
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.length = hold;
        if (state.head) {
          state.head.extra_len = hold;
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
      }
      else if (state.head) {
        state.head.extra = null/*Z_NULL*/;
      }
      state.mode = EXTRA;
      /* falls through */
    case EXTRA:
      if (state.flags & 0x0400) {
        copy = state.length;
        if (copy > have) { copy = have; }
        if (copy) {
          if (state.head) {
            len = state.head.extra_len - state.length;
            if (!state.head.extra) {
              // Use untyped array for more conveniend processing later
              state.head.extra = new Array(state.head.extra_len);
            }
            utils.arraySet(
              state.head.extra,
              input,
              next,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              copy,
              /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
              len
            );
            //zmemcpy(state.head.extra + len, next,
            //        len + copy > state.head.extra_max ?
            //        state.head.extra_max - len : copy);
          }
          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          state.length -= copy;
        }
        if (state.length) { break inf_leave; }
      }
      state.length = 0;
      state.mode = NAME;
      /* falls through */
    case NAME:
      if (state.flags & 0x0800) {
        if (have === 0) { break inf_leave; }
        copy = 0;
        do {
          // TODO: 2 or 1 bytes?
          len = input[next + copy++];
          /* use constant limit because in js we should not preallocate memory */
          if (state.head && len &&
              (state.length < 65536 /*state.head.name_max*/)) {
            state.head.name += String.fromCharCode(len);
          }
        } while (len && copy < have);

        if (state.flags & 0x0200) {
          state.check = crc32(state.check, input, copy, next);
        }
        have -= copy;
        next += copy;
        if (len) { break inf_leave; }
      }
      else if (state.head) {
        state.head.name = null;
      }
      state.length = 0;
      state.mode = COMMENT;
      /* falls through */
    case COMMENT:
      if (state.flags & 0x1000) {
        if (have === 0) { break inf_leave; }
        copy = 0;
        do {
          len = input[next + copy++];
          /* use constant limit because in js we should not preallocate memory */
          if (state.head && len &&
              (state.length < 65536 /*state.head.comm_max*/)) {
            state.head.comment += String.fromCharCode(len);
          }
        } while (len && copy < have);
        if (state.flags & 0x0200) {
          state.check = crc32(state.check, input, copy, next);
        }
        have -= copy;
        next += copy;
        if (len) { break inf_leave; }
      }
      else if (state.head) {
        state.head.comment = null;
      }
      state.mode = HCRC;
      /* falls through */
    case HCRC:
      if (state.flags & 0x0200) {
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (hold !== (state.check & 0xffff)) {
          strm.msg = 'header crc mismatch';
          state.mode = BAD;
          break;
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
      }
      if (state.head) {
        state.head.hcrc = ((state.flags >> 9) & 1);
        state.head.done = true;
      }
      strm.adler = state.check = 0;
      state.mode = TYPE;
      break;
    case DICTID:
      //=== NEEDBITS(32); */
      while (bits < 32) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      strm.adler = state.check = zswap32(hold);
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = DICT;
      /* falls through */
    case DICT:
      if (state.havedict === 0) {
        //--- RESTORE() ---
        strm.next_out = put;
        strm.avail_out = left;
        strm.next_in = next;
        strm.avail_in = have;
        state.hold = hold;
        state.bits = bits;
        //---
        return Z_NEED_DICT;
      }
      strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
      state.mode = TYPE;
      /* falls through */
    case TYPE:
      if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
      /* falls through */
    case TYPEDO:
      if (state.last) {
        //--- BYTEBITS() ---//
        hold >>>= bits & 7;
        bits -= bits & 7;
        //---//
        state.mode = CHECK;
        break;
      }
      //=== NEEDBITS(3); */
      while (bits < 3) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      state.last = (hold & 0x01)/*BITS(1)*/;
      //--- DROPBITS(1) ---//
      hold >>>= 1;
      bits -= 1;
      //---//

      switch ((hold & 0x03)/*BITS(2)*/) {
      case 0:                             /* stored block */
        //Tracev((stderr, "inflate:     stored block%s\n",
        //        state.last ? " (last)" : ""));
        state.mode = STORED;
        break;
      case 1:                             /* fixed block */
        fixedtables(state);
        //Tracev((stderr, "inflate:     fixed codes block%s\n",
        //        state.last ? " (last)" : ""));
        state.mode = LEN_;             /* decode codes */
        if (flush === Z_TREES) {
          //--- DROPBITS(2) ---//
          hold >>>= 2;
          bits -= 2;
          //---//
          break inf_leave;
        }
        break;
      case 2:                             /* dynamic block */
        //Tracev((stderr, "inflate:     dynamic codes block%s\n",
        //        state.last ? " (last)" : ""));
        state.mode = TABLE;
        break;
      case 3:
        strm.msg = 'invalid block type';
        state.mode = BAD;
      }
      //--- DROPBITS(2) ---//
      hold >>>= 2;
      bits -= 2;
      //---//
      break;
    case STORED:
      //--- BYTEBITS() ---// /* go to byte boundary */
      hold >>>= bits & 7;
      bits -= bits & 7;
      //---//
      //=== NEEDBITS(32); */
      while (bits < 32) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
        strm.msg = 'invalid stored block lengths';
        state.mode = BAD;
        break;
      }
      state.length = hold & 0xffff;
      //Tracev((stderr, "inflate:       stored length %u\n",
      //        state.length));
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = COPY_;
      if (flush === Z_TREES) { break inf_leave; }
      /* falls through */
    case COPY_:
      state.mode = COPY;
      /* falls through */
    case COPY:
      copy = state.length;
      if (copy) {
        if (copy > have) { copy = have; }
        if (copy > left) { copy = left; }
        if (copy === 0) { break inf_leave; }
        //--- zmemcpy(put, next, copy); ---
        utils.arraySet(output, input, next, copy, put);
        //---//
        have -= copy;
        next += copy;
        left -= copy;
        put += copy;
        state.length -= copy;
        break;
      }
      //Tracev((stderr, "inflate:       stored end\n"));
      state.mode = TYPE;
      break;
    case TABLE:
      //=== NEEDBITS(14); */
      while (bits < 14) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
      //--- DROPBITS(5) ---//
      hold >>>= 5;
      bits -= 5;
      //---//
      state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
      //--- DROPBITS(5) ---//
      hold >>>= 5;
      bits -= 5;
      //---//
      state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
      //--- DROPBITS(4) ---//
      hold >>>= 4;
      bits -= 4;
      //---//
//#ifndef PKZIP_BUG_WORKAROUND
      if (state.nlen > 286 || state.ndist > 30) {
        strm.msg = 'too many length or distance symbols';
        state.mode = BAD;
        break;
      }
//#endif
      //Tracev((stderr, "inflate:       table sizes ok\n"));
      state.have = 0;
      state.mode = LENLENS;
      /* falls through */
    case LENLENS:
      while (state.have < state.ncode) {
        //=== NEEDBITS(3);
        while (bits < 3) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
        //--- DROPBITS(3) ---//
        hold >>>= 3;
        bits -= 3;
        //---//
      }
      while (state.have < 19) {
        state.lens[order[state.have++]] = 0;
      }
      // We have separate tables & no pointers. 2 commented lines below not needed.
      //state.next = state.codes;
      //state.lencode = state.next;
      // Switch to use dynamic table
      state.lencode = state.lendyn;
      state.lenbits = 7;

      opts = { bits: state.lenbits };
      ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
      state.lenbits = opts.bits;

      if (ret) {
        strm.msg = 'invalid code lengths set';
        state.mode = BAD;
        break;
      }
      //Tracev((stderr, "inflate:       code lengths ok\n"));
      state.have = 0;
      state.mode = CODELENS;
      /* falls through */
    case CODELENS:
      while (state.have < state.nlen + state.ndist) {
        for (;;) {
          here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if (here_val < 16) {
          //--- DROPBITS(here.bits) ---//
          hold >>>= here_bits;
          bits -= here_bits;
          //---//
          state.lens[state.have++] = here_val;
        }
        else {
          if (here_val === 16) {
            //=== NEEDBITS(here.bits + 2);
            n = here_bits + 2;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            if (state.have === 0) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            len = state.lens[state.have - 1];
            copy = 3 + (hold & 0x03);//BITS(2);
            //--- DROPBITS(2) ---//
            hold >>>= 2;
            bits -= 2;
            //---//
          }
          else if (here_val === 17) {
            //=== NEEDBITS(here.bits + 3);
            n = here_bits + 3;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            len = 0;
            copy = 3 + (hold & 0x07);//BITS(3);
            //--- DROPBITS(3) ---//
            hold >>>= 3;
            bits -= 3;
            //---//
          }
          else {
            //=== NEEDBITS(here.bits + 7);
            n = here_bits + 7;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            len = 0;
            copy = 11 + (hold & 0x7f);//BITS(7);
            //--- DROPBITS(7) ---//
            hold >>>= 7;
            bits -= 7;
            //---//
          }
          if (state.have + copy > state.nlen + state.ndist) {
            strm.msg = 'invalid bit length repeat';
            state.mode = BAD;
            break;
          }
          while (copy--) {
            state.lens[state.have++] = len;
          }
        }
      }

      /* handle error breaks in while */
      if (state.mode === BAD) { break; }

      /* check for end-of-block code (better have one) */
      if (state.lens[256] === 0) {
        strm.msg = 'invalid code -- missing end-of-block';
        state.mode = BAD;
        break;
      }

      /* build code tables -- note: do not change the lenbits or distbits
         values here (9 and 6) without reading the comments in inftrees.h
         concerning the ENOUGH constants, which depend on those values */
      state.lenbits = 9;

      opts = { bits: state.lenbits };
      ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
      // We have separate tables & no pointers. 2 commented lines below not needed.
      // state.next_index = opts.table_index;
      state.lenbits = opts.bits;
      // state.lencode = state.next;

      if (ret) {
        strm.msg = 'invalid literal/lengths set';
        state.mode = BAD;
        break;
      }

      state.distbits = 6;
      //state.distcode.copy(state.codes);
      // Switch to use dynamic table
      state.distcode = state.distdyn;
      opts = { bits: state.distbits };
      ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
      // We have separate tables & no pointers. 2 commented lines below not needed.
      // state.next_index = opts.table_index;
      state.distbits = opts.bits;
      // state.distcode = state.next;

      if (ret) {
        strm.msg = 'invalid distances set';
        state.mode = BAD;
        break;
      }
      //Tracev((stderr, 'inflate:       codes ok\n'));
      state.mode = LEN_;
      if (flush === Z_TREES) { break inf_leave; }
      /* falls through */
    case LEN_:
      state.mode = LEN;
      /* falls through */
    case LEN:
      if (have >= 6 && left >= 258) {
        //--- RESTORE() ---
        strm.next_out = put;
        strm.avail_out = left;
        strm.next_in = next;
        strm.avail_in = have;
        state.hold = hold;
        state.bits = bits;
        //---
        inflate_fast(strm, _out);
        //--- LOAD() ---
        put = strm.next_out;
        output = strm.output;
        left = strm.avail_out;
        next = strm.next_in;
        input = strm.input;
        have = strm.avail_in;
        hold = state.hold;
        bits = state.bits;
        //---

        if (state.mode === TYPE) {
          state.back = -1;
        }
        break;
      }
      state.back = 0;
      for (;;) {
        here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
        here_bits = here >>> 24;
        here_op = (here >>> 16) & 0xff;
        here_val = here & 0xffff;

        if (here_bits <= bits) { break; }
        //--- PULLBYTE() ---//
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
        //---//
      }
      if (here_op && (here_op & 0xf0) === 0) {
        last_bits = here_bits;
        last_op = here_op;
        last_val = here_val;
        for (;;) {
          here = state.lencode[last_val +
                  ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((last_bits + here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        //--- DROPBITS(last.bits) ---//
        hold >>>= last_bits;
        bits -= last_bits;
        //---//
        state.back += last_bits;
      }
      //--- DROPBITS(here.bits) ---//
      hold >>>= here_bits;
      bits -= here_bits;
      //---//
      state.back += here_bits;
      state.length = here_val;
      if (here_op === 0) {
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        state.mode = LIT;
        break;
      }
      if (here_op & 32) {
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.back = -1;
        state.mode = TYPE;
        break;
      }
      if (here_op & 64) {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break;
      }
      state.extra = here_op & 15;
      state.mode = LENEXT;
      /* falls through */
    case LENEXT:
      if (state.extra) {
        //=== NEEDBITS(state.extra);
        n = state.extra;
        while (bits < n) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
        //--- DROPBITS(state.extra) ---//
        hold >>>= state.extra;
        bits -= state.extra;
        //---//
        state.back += state.extra;
      }
      //Tracevv((stderr, "inflate:         length %u\n", state.length));
      state.was = state.length;
      state.mode = DIST;
      /* falls through */
    case DIST:
      for (;;) {
        here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
        here_bits = here >>> 24;
        here_op = (here >>> 16) & 0xff;
        here_val = here & 0xffff;

        if ((here_bits) <= bits) { break; }
        //--- PULLBYTE() ---//
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
        //---//
      }
      if ((here_op & 0xf0) === 0) {
        last_bits = here_bits;
        last_op = here_op;
        last_val = here_val;
        for (;;) {
          here = state.distcode[last_val +
                  ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((last_bits + here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        //--- DROPBITS(last.bits) ---//
        hold >>>= last_bits;
        bits -= last_bits;
        //---//
        state.back += last_bits;
      }
      //--- DROPBITS(here.bits) ---//
      hold >>>= here_bits;
      bits -= here_bits;
      //---//
      state.back += here_bits;
      if (here_op & 64) {
        strm.msg = 'invalid distance code';
        state.mode = BAD;
        break;
      }
      state.offset = here_val;
      state.extra = (here_op) & 15;
      state.mode = DISTEXT;
      /* falls through */
    case DISTEXT:
      if (state.extra) {
        //=== NEEDBITS(state.extra);
        n = state.extra;
        while (bits < n) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
        //--- DROPBITS(state.extra) ---//
        hold >>>= state.extra;
        bits -= state.extra;
        //---//
        state.back += state.extra;
      }
//#ifdef INFLATE_STRICT
      if (state.offset > state.dmax) {
        strm.msg = 'invalid distance too far back';
        state.mode = BAD;
        break;
      }
//#endif
      //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
      state.mode = MATCH;
      /* falls through */
    case MATCH:
      if (left === 0) { break inf_leave; }
      copy = _out - left;
      if (state.offset > copy) {         /* copy from window */
        copy = state.offset - copy;
        if (copy > state.whave) {
          if (state.sane) {
            strm.msg = 'invalid distance too far back';
            state.mode = BAD;
            break;
          }
// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\n"));
//          copy -= state.whave;
//          if (copy > state.length) { copy = state.length; }
//          if (copy > left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
        }
        if (copy > state.wnext) {
          copy -= state.wnext;
          from = state.wsize - copy;
        }
        else {
          from = state.wnext - copy;
        }
        if (copy > state.length) { copy = state.length; }
        from_source = state.window;
      }
      else {                              /* copy from output */
        from_source = output;
        from = put - state.offset;
        copy = state.length;
      }
      if (copy > left) { copy = left; }
      left -= copy;
      state.length -= copy;
      do {
        output[put++] = from_source[from++];
      } while (--copy);
      if (state.length === 0) { state.mode = LEN; }
      break;
    case LIT:
      if (left === 0) { break inf_leave; }
      output[put++] = state.length;
      left--;
      state.mode = LEN;
      break;
    case CHECK:
      if (state.wrap) {
        //=== NEEDBITS(32);
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          // Use '|' insdead of '+' to make sure that result is signed
          hold |= input[next++] << bits;
          bits += 8;
        }
        //===//
        _out -= left;
        strm.total_out += _out;
        state.total += _out;
        if (_out) {
          strm.adler = state.check =
              /*UPDATE(state.check, put - _out, _out);*/
              (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));

        }
        _out = left;
        // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
        if ((state.flags ? hold : zswap32(hold)) !== state.check) {
          strm.msg = 'incorrect data check';
          state.mode = BAD;
          break;
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        //Tracev((stderr, "inflate:   check matches trailer\n"));
      }
      state.mode = LENGTH;
      /* falls through */
    case LENGTH:
      if (state.wrap && state.flags) {
        //=== NEEDBITS(32);
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (hold !== (state.total & 0xffffffff)) {
          strm.msg = 'incorrect length check';
          state.mode = BAD;
          break;
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        //Tracev((stderr, "inflate:   length matches trailer\n"));
      }
      state.mode = DONE;
      /* falls through */
    case DONE:
      ret = Z_STREAM_END;
      break inf_leave;
    case BAD:
      ret = Z_DATA_ERROR;
      break inf_leave;
    case MEM:
      return Z_MEM_ERROR;
    case SYNC:
      /* falls through */
    default:
      return Z_STREAM_ERROR;
    }
  }

  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                      (state.mode < CHECK || flush !== Z_FINISH))) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap && _out) {
    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
      (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) +
                    (state.mode === TYPE ? 128 : 0) +
                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
    ret = Z_BUF_ERROR;
  }
  return ret;
}

function inflateEnd(strm) {

  if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
    return Z_STREAM_ERROR;
  }

  var state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK;
}

function inflateGetHeader(strm, head) {
  var state;

  /* check state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR; }

  /* save header structure */
  state.head = head;
  head.done = false;
  return Z_OK;
}

function inflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var state;
  var dictid;
  var ret;

  /* check state */
  if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) { return Z_STREAM_ERROR; }
  state = strm.state;

  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR;
  }

  /* check for correct dictionary identifier */
  if (state.mode === DICT) {
    dictid = 1; /* adler32(0, null, 0)*/
    /* dictid = adler32(dictid, dictionary, dictLength); */
    dictid = adler32(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR;
    }
  }
  /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR;
  }
  state.havedict = 1;
  // Tracev((stderr, "inflate:   dictionary set\n"));
  return Z_OK;
}

exports.inflateReset = inflateReset;
exports.inflateReset2 = inflateReset2;
exports.inflateResetKeep = inflateResetKeep;
exports.inflateInit = inflateInit;
exports.inflateInit2 = inflateInit2;
exports.inflate = inflate;
exports.inflateEnd = inflateEnd;
exports.inflateGetHeader = inflateGetHeader;
exports.inflateSetDictionary = inflateSetDictionary;
exports.inflateInfo = 'pako inflate (from Nodeca project)';

/* Not implemented
exports.inflateCopy = inflateCopy;
exports.inflateGetDictionary = inflateGetDictionary;
exports.inflateMark = inflateMark;
exports.inflatePrime = inflatePrime;
exports.inflateSync = inflateSync;
exports.inflateSyncPoint = inflateSyncPoint;
exports.inflateUndermine = inflateUndermine;
*/

},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils = require('../utils/common');

var MAXBITS = 15;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

var CODES = 0;
var LENS = 1;
var DISTS = 2;

var lbase = [ /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
];

var lext = [ /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
];

var dbase = [ /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0
];

var dext = [ /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
  28, 28, 29, 29, 64, 64
];

module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts)
{
  var bits = opts.bits;
      //here = opts.here; /* table entry for duplication */

  var len = 0;               /* a code's length in bits */
  var sym = 0;               /* index of code symbols */
  var min = 0, max = 0;          /* minimum and maximum code lengths */
  var root = 0;              /* number of index bits for root table */
  var curr = 0;              /* number of index bits for current table */
  var drop = 0;              /* code bits to drop for sub-table */
  var left = 0;                   /* number of prefix codes available */
  var used = 0;              /* code entries in table used */
  var huff = 0;              /* Huffman code */
  var incr;              /* for incrementing code, index */
  var fill;              /* index for replicating entries */
  var low;               /* low bits for current root entry */
  var mask;              /* mask for low root bits */
  var next;             /* next available space in table */
  var base = null;     /* base value table to use */
  var base_index = 0;
//  var shoextra;    /* extra bits table to use */
  var end;                    /* use base and extra for symbol > end */
  var count = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
  var offs = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
  var extra = null;
  var extra_index = 0;

  var here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) { break; }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {                     /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;


    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;

    opts.bits = 1;
    return 0;     /* no symbols, but wait for decoding to report error */
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) { break; }
  }
  if (root < min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }        /* over-subscribed */
  }
  if (left > 0 && (type === CODES || max !== 1)) {
    return -1;                      /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES) {
    base = extra = work;    /* dummy value--not used */
    end = 19;

  } else if (type === LENS) {
    base = lbase;
    base_index -= 257;
    extra = lext;
    extra_index -= 257;
    end = 256;

  } else {                    /* DISTS */
    base = dbase;
    extra = dext;
    end = -1;
  }

  /* initialize opts for loop */
  huff = 0;                   /* starting code */
  sym = 0;                    /* starting code symbol */
  len = min;                  /* starting code length */
  next = table_index;              /* current table to fill in */
  curr = root;                /* current table index bits */
  drop = 0;                   /* current bits to drop from code for index */
  low = -1;                   /* trigger new sub-table when len > root */
  used = 1 << root;          /* use root table entries */
  mask = used - 1;            /* mask for comparing low */

  /* check available table space */
  if ((type === LENS && used > ENOUGH_LENS) ||
    (type === DISTS && used > ENOUGH_DISTS)) {
    return 1;
  }

  /* process all codes and make table entries */
  for (;;) {
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] < end) {
      here_op = 0;
      here_val = work[sym];
    }
    else if (work[sym] > end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base[base_index + work[sym]];
    }
    else {
      here_op = 32 + 64;         /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 << (len - drop);
    fill = 1 << curr;
    min = fill;                 /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 << (len - 1);
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) { break; }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min;            /* here min is 1 << curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) { break; }
        curr++;
        left <<= 1;
      }

      /* check for enough space */
      used += 1 << curr;
      if ((type === LENS && used > ENOUGH_LENS) ||
        (type === DISTS && used > ENOUGH_DISTS)) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
};

},{"../utils/common":41}],51:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {
  2:      'need dictionary',     /* Z_NEED_DICT       2  */
  1:      'stream end',          /* Z_STREAM_END      1  */
  0:      '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};

},{}],52:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils = require('../utils/common');

/* Public constants ==========================================================*/
/* ===========================================================================*/


//var Z_FILTERED          = 1;
//var Z_HUFFMAN_ONLY      = 2;
//var Z_RLE               = 3;
var Z_FIXED               = 4;
//var Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */
var Z_BINARY              = 0;
var Z_TEXT                = 1;
//var Z_ASCII             = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;

/*============================================================================*/


function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }

// From zutil.h

var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES    = 2;
/* The three kinds of block type */

var MIN_MATCH    = 3;
var MAX_MATCH    = 258;
/* The minimum and maximum match lengths */

// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */

var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */

var LITERALS      = 256;
/* number of literal bytes 0..255 */

var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */

var D_CODES       = 30;
/* number of distance codes */

var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */

var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */

var MAX_BITS      = 15;
/* All codes must not exceed MAX_BITS bits */

var Buf_size      = 16;
/* size of bit buffer in bi_buf */


/* ===========================================================================
 * Constants
 */

var MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

var END_BLOCK   = 256;
/* end of block literal code */

var REP_3_6     = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

var REPZ_3_10   = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

var REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

/* eslint-disable comma-spacing,array-bracket-spacing */
var extra_lbits =   /* extra bits for each length code */
  [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];

var extra_dbits =   /* extra bits for each distance code */
  [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];

var extra_blbits =  /* extra bits for each bit length code */
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];

var bl_order =
  [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
/* eslint-enable comma-spacing,array-bracket-spacing */

/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */

// We pre-fill arrays with 0 to avoid uninitialized gaps

var DIST_CODE_LEN = 512; /* see definition of array dist_code below */

// !!!! Use flat array insdead of structure, Freq = i*2, Len = i*2+1
var static_ltree  = new Array((L_CODES + 2) * 2);
zero(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

var static_dtree  = new Array(D_CODES * 2);
zero(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

var _dist_code    = new Array(DIST_CODE_LEN);
zero(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

var _length_code  = new Array(MAX_MATCH - MIN_MATCH + 1);
zero(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

var base_length   = new Array(LENGTH_CODES);
zero(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

var base_dist     = new Array(D_CODES);
zero(base_dist);
/* First normalized distance for each code (0 = distance of 1) */


function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {

  this.static_tree  = static_tree;  /* static tree or NULL */
  this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
  this.extra_base   = extra_base;   /* base index for extra_bits */
  this.elems        = elems;        /* max number of elements in the tree */
  this.max_length   = max_length;   /* max bit length for the codes */

  // show if `static_tree` has data or dummy - needed for monomorphic objects
  this.has_stree    = static_tree && static_tree.length;
}


var static_l_desc;
var static_d_desc;
var static_bl_desc;


function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;     /* the dynamic tree */
  this.max_code = 0;            /* largest code with non zero frequency */
  this.stat_desc = stat_desc;   /* the corresponding static tree */
}



function d_code(dist) {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
}


/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */
function put_short(s, w) {
//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
  s.pending_buf[s.pending++] = (w) & 0xff;
  s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
}


/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */
function send_bits(s, value, length) {
  if (s.bi_valid > (Buf_size - length)) {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> (Buf_size - s.bi_valid);
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    s.bi_valid += length;
  }
}


function send_code(s, c, tree) {
  send_bits(s, tree[c * 2]/*.Code*/, tree[c * 2 + 1]/*.Len*/);
}


/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */
function bi_reverse(code, len) {
  var res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
}


/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */
function bi_flush(s) {
  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;

  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
}


/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
function gen_bitlen(s, desc)
//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */
{
  var tree            = desc.dyn_tree;
  var max_code        = desc.max_code;
  var stree           = desc.stat_desc.static_tree;
  var has_stree       = desc.stat_desc.has_stree;
  var extra           = desc.stat_desc.extra_bits;
  var base            = desc.stat_desc.extra_base;
  var max_length      = desc.stat_desc.max_length;
  var h;              /* heap index */
  var n, m;           /* iterate over the tree elements */
  var bits;           /* bit length */
  var xbits;          /* extra bits */
  var f;              /* frequency */
  var overflow = 0;   /* number of elements with bit length too large */

  for (bits = 0; bits <= MAX_BITS; bits++) {
    s.bl_count[bits] = 0;
  }

  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */
  tree[s.heap[s.heap_max] * 2 + 1]/*.Len*/ = 0; /* root of the heap */

  for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1]/*.Len*/ = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n > max_code) { continue; } /* not a leaf node */

    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2]/*.Freq*/;
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1]/*.Len*/ + xbits);
    }
  }
  if (overflow === 0) { return; }

  // Trace((stderr,"\nbit length overflow\n"));
  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) { bits--; }
    s.bl_count[bits]--;      /* move one leaf down the tree */
    s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
  } while (overflow > 0);

  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) { continue; }
      if (tree[m * 2 + 1]/*.Len*/ !== bits) {
        // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m * 2 + 1]/*.Len*/) * tree[m * 2]/*.Freq*/;
        tree[m * 2 + 1]/*.Len*/ = bits;
      }
      n--;
    }
  }
}


/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */
function gen_codes(tree, max_code, bl_count)
//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{
  var next_code = new Array(MAX_BITS + 1); /* next code value for each bit length */
  var code = 0;              /* running code value */
  var bits;                  /* bit index */
  var n;                     /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */
  for (bits = 1; bits <= MAX_BITS; bits++) {
    next_code[bits] = code = (code + bl_count[bits - 1]) << 1;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

  for (n = 0;  n <= max_code; n++) {
    var len = tree[n * 2 + 1]/*.Len*/;
    if (len === 0) { continue; }
    /* Now reverse the bits */
    tree[n * 2]/*.Code*/ = bi_reverse(next_code[len]++, len);

    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
}


/* ===========================================================================
 * Initialize the various 'constant' tables.
 */
function tr_static_init() {
  var n;        /* iterates over tree elements */
  var bits;     /* bit counter */
  var length;   /* length value */
  var code;     /* code value */
  var dist;     /* distance index */
  var bl_count = new Array(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */
/*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/

  /* Initialize the mapping length (0..255) -> length code (0..28) */
  length = 0;
  for (code = 0; code < LENGTH_CODES - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < (1 << extra_lbits[code]); n++) {
      _length_code[length++] = code;
    }
  }
  //Assert (length == 256, "tr_static_init: length != 256");
  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */
  _length_code[length - 1] = code;

  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < (1 << extra_dbits[code]); n++) {
      _dist_code[dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: dist != 256");
  dist >>= 7; /* from now on, all distances are divided by 128 */
  for (; code < D_CODES; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */
  for (bits = 0; bits <= MAX_BITS; bits++) {
    bl_count[bits] = 0;
  }

  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1]/*.Len*/ = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1]/*.Len*/ = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */
  gen_codes(static_ltree, L_CODES + 1, bl_count);

  /* The static distance tree is trivial: */
  for (n = 0; n < D_CODES; n++) {
    static_dtree[n * 2 + 1]/*.Len*/ = 5;
    static_dtree[n * 2]/*.Code*/ = bi_reverse(n, 5);
  }

  // Now data ready and we can init static trees
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES, MAX_BITS);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES, MAX_BL_BITS);

  //static_init_done = true;
}


/* ===========================================================================
 * Initialize a new block.
 */
function init_block(s) {
  var n; /* iterates over tree elements */

  /* Initialize the trees. */
  for (n = 0; n < L_CODES;  n++) { s.dyn_ltree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < D_CODES;  n++) { s.dyn_dtree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < BL_CODES; n++) { s.bl_tree[n * 2]/*.Freq*/ = 0; }

  s.dyn_ltree[END_BLOCK * 2]/*.Freq*/ = 1;
  s.opt_len = s.static_len = 0;
  s.last_lit = s.matches = 0;
}


/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */
function bi_windup(s)
{
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
}

/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */
function copy_block(s, buf, len, header)
//DeflateState *s;
//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */
{
  bi_windup(s);        /* align on byte boundary */

  if (header) {
    put_short(s, len);
    put_short(s, ~len);
  }
//  while (len--) {
//    put_byte(s, *buf++);
//  }
  utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
  s.pending += len;
}

/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
function smaller(tree, n, m, depth) {
  var _n2 = n * 2;
  var _m2 = m * 2;
  return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
         (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
}

/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
function pqdownheap(s, tree, k)
//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{
  var v = s.heap[k];
  var j = k << 1;  /* left son of k */
  while (j <= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j < s.heap_len &&
      smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */
    if (smaller(tree, v, s.heap[j], s.depth)) { break; }

    /* Exchange v with the smallest son */
    s.heap[k] = s.heap[j];
    k = j;

    /* And continue down the tree, setting j to the left son of k */
    j <<= 1;
  }
  s.heap[k] = v;
}


// inlined manually
// var SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */
function compress_block(s, ltree, dtree)
//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{
  var dist;           /* distance of matched string */
  var lc;             /* match length or unmatched char (if dist == 0) */
  var lx = 0;         /* running index in l_buf */
  var code;           /* the code to send */
  var extra;          /* number of extra bits to send */

  if (s.last_lit !== 0) {
    do {
      dist = (s.pending_buf[s.d_buf + lx * 2] << 8) | (s.pending_buf[s.d_buf + lx * 2 + 1]);
      lc = s.pending_buf[s.l_buf + lx];
      lx++;

      if (dist === 0) {
        send_code(s, lc, ltree); /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code + LITERALS + 1, ltree); /* send the length code */
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);       /* send the extra length bits */
        }
        dist--; /* dist is now the match distance - 1 */
        code = d_code(dist);
        //Assert (code < D_CODES, "bad d_code");

        send_code(s, code, dtree);       /* send the distance code */
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);   /* send the extra distance bits */
        }
      } /* literal or match pair ? */

      /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
      //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
      //       "pendingBuf overflow");

    } while (lx < s.last_lit);
  }

  send_code(s, END_BLOCK, ltree);
}


/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
function build_tree(s, desc)
//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */
{
  var tree     = desc.dyn_tree;
  var stree    = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var elems    = desc.stat_desc.elems;
  var n, m;          /* iterate over heap elements */
  var max_code = -1; /* largest code with non zero frequency */
  var node;          /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE;

  for (n = 0; n < elems; n++) {
    if (tree[n * 2]/*.Freq*/ !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;

    } else {
      tree[n * 2 + 1]/*.Len*/ = 0;
    }
  }

  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
    tree[node * 2]/*.Freq*/ = 1;
    s.depth[node] = 0;
    s.opt_len--;

    if (has_stree) {
      s.static_len -= stree[node * 2 + 1]/*.Len*/;
    }
    /* node is 0 or 1 so it does not have extra bits */
  }
  desc.max_code = max_code;

  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */
  for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }

  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */
  node = elems;              /* next internal node of the tree */
  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */
    /*** pqremove ***/
    n = s.heap[1/*SMALLEST*/];
    s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1/*SMALLEST*/);
    /***/

    m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */

    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
    s.heap[--s.heap_max] = m;

    /* Create a new node father of n and m */
    tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1]/*.Dad*/ = tree[m * 2 + 1]/*.Dad*/ = node;

    /* and insert the new node in the heap */
    s.heap[1/*SMALLEST*/] = node++;
    pqdownheap(s, tree, 1/*SMALLEST*/);

  } while (s.heap_len >= 2);

  s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];

  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */
  gen_bitlen(s, desc);

  /* The field len is now set, we can generate the bit codes */
  gen_codes(tree, max_code, s.bl_count);
}


/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */
function scan_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1]/*.Len*/ = 0xffff; /* guard */

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      s.bl_tree[curlen * 2]/*.Freq*/ += count;

    } else if (curlen !== 0) {

      if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
      s.bl_tree[REP_3_6 * 2]/*.Freq*/++;

    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2]/*.Freq*/++;

    } else {
      s.bl_tree[REPZ_11_138 * 2]/*.Freq*/++;
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */
function send_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  /* tree[max_code+1].Len = -1; */  /* guard already set */
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);

    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      //Assert(count >= 3 && count <= 6, " 3_6?");
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);

    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);

    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }

    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
function build_bl_tree(s) {
  var max_blindex;  /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

  /* Build the bit length tree: */
  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */
  for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1]/*.Len*/ !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
  //        s->opt_len, s->static_len));

  return max_blindex;
}


/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */
function send_all_trees(s, lcodes, dcodes, blcodes)
//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{
  var rank;                    /* index in bl_order */

  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\nbl counts: "));
  send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
  send_bits(s, dcodes - 1,   5);
  send_bits(s, blcodes - 4,  4); /* not -3 as stated in appnote.txt */
  for (rank = 0; rank < blcodes; rank++) {
    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]/*.Len*/, 3);
  }
  //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
}


/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */
function detect_data_type(s) {
  /* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  var black_mask = 0xf3ffc07f;
  var n;

  /* Check for non-textual ("black-listed") bytes. */
  for (n = 0; n <= 31; n++, black_mask >>>= 1) {
    if ((black_mask & 1) && (s.dyn_ltree[n * 2]/*.Freq*/ !== 0)) {
      return Z_BINARY;
    }
  }

  /* Check for textual ("white-listed") bytes. */
  if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
      s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS; n++) {
    if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
      return Z_TEXT;
    }
  }

  /* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */
  return Z_BINARY;
}


var static_init_done = false;

/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */
function _tr_init(s)
{

  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }

  s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

  s.bi_buf = 0;
  s.bi_valid = 0;

  /* Initialize the first block of the first file: */
  init_block(s);
}


/* ===========================================================================
 * Send a stored block
 */
function _tr_stored_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);    /* send block type */
  copy_block(s, buf, stored_len, true); /* with header */
}


/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */
function _tr_align(s) {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
}


/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */
function _tr_flush_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  var opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
  var max_blindex = 0;        /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */
  if (s.level > 0) {

    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN) {
      s.strm.data_type = detect_data_type(s);
    }

    /* Construct the literal and distance trees */
    build_tree(s, s.l_desc);
    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    build_tree(s, s.d_desc);
    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = build_bl_tree(s);

    /* Determine the best encoding. Compute the block lengths in bytes. */
    opt_lenb = (s.opt_len + 3 + 7) >>> 3;
    static_lenb = (s.static_len + 3 + 7) >>> 3;

    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
    //        s->last_lit));

    if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }

  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
  }

  if ((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block(s, buf, stored_len, last);

  } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {

    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);

  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */
  init_block(s);

  if (last) {
    bi_windup(s);
  }
  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
  //       s->compressed_len-7*last));
}

/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
function _tr_tally(s, dist, lc)
//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{
  //var out_length, in_length, dcode;

  s.pending_buf[s.d_buf + s.last_lit * 2]     = (dist >>> 8) & 0xff;
  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;

  s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
  s.last_lit++;

  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc * 2]/*.Freq*/++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */
    dist--;             /* dist = match distance - 1 */
    //Assert((ush)dist < (ush)MAX_DIST(s) &&
    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]/*.Freq*/++;
    s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
  }

// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility

//#ifdef TRUNCATE_BLOCK
//  /* Try to guess if it is profitable to stop the current block here */
//  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
//    /* Compute an upper bound for the compressed length */
//    out_length = s.last_lit*8;
//    in_length = s.strstart - s.block_start;
//
//    for (dcode = 0; dcode < D_CODES; dcode++) {
//      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
//    }
//    out_length >>>= 3;
//    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
//    //       s->last_lit, in_length, out_length,
//    //       100L - out_length*100L/in_length));
//    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
//      return true;
//    }
//  }
//#endif

  return (s.last_lit === s.lit_bufsize - 1);
  /* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */
}

exports._tr_init  = _tr_init;
exports._tr_stored_block = _tr_stored_block;
exports._tr_flush_block  = _tr_flush_block;
exports._tr_tally = _tr_tally;
exports._tr_align = _tr_align;

},{"../utils/common":41}],53:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

module.exports = ZStream;

},{}],54:[function(require,module,exports){
(function (global){
(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[10])(10)
});
/*
* FileSaver.js
* A saveAs() FileSaver implementation.
*
* By Eli Grey, http://eligrey.com
*
* License : https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md (MIT)
* source  : http://purl.eligrey.com/github/FileSaver.js
*/

// The one and only way of getting global scope in all environments
// https://stackoverflow.com/q/3277182/1008999
var _global = typeof window === 'object' && window.window === window
  ? window : typeof self === 'object' && self.self === self
  ? self : typeof global === 'object' && global.global === global
  ? global
  : this

function bom (blob, opts) {
  if (typeof opts === 'undefined') opts = { autoBom: false }
  else if (typeof opts !== 'object') {
    console.warn('Deprecated: Expected third argument to be a object')
    opts = { autoBom: !opts }
  }

  // prepend BOM for UTF-8 XML and text/* types (including HTML)
  // note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
  if (opts.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
    return new Blob([String.fromCharCode(0xFEFF), blob], { type: blob.type })
  }
  return blob
}

function download (url, name, opts) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.responseType = 'blob'
  xhr.onload = function () {
    saveAs(xhr.response, name, opts)
  }
  xhr.onerror = function () {
    console.error('could not download file')
  }
  xhr.send()
}

function corsEnabled (url) {
  var xhr = new XMLHttpRequest()
  // use sync to avoid popup blocker
  xhr.open('HEAD', url, false)
  try {
    xhr.send()
  } catch (e) {}
  return xhr.status >= 200 && xhr.status <= 299
}

// `a.click()` doesn't work for all browsers (#465)
function click (node) {
  try {
    node.dispatchEvent(new MouseEvent('click'))
  } catch (e) {
    var evt = document.createEvent('MouseEvents')
    evt.initMouseEvent('click', true, true, window, 0, 0, 0, 80,
                          20, false, false, false, false, 0, null)
    node.dispatchEvent(evt)
  }
}

// Detect WebView inside a native macOS app by ruling out all browsers
// We just need to check for 'Safari' because all other browsers (besides Firefox) include that too
// https://www.whatismybrowser.com/guides/the-latest-user-agent/macos
var isMacOSWebView = _global.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent)

var saveAs = _global.saveAs || (
  // probably in some web worker
  (typeof window !== 'object' || window !== _global)
    ? function saveAs () { /* noop */ }

  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView
  : ('download' in HTMLAnchorElement.prototype && !isMacOSWebView)
  ? function saveAs (blob, name, opts) {
    var URL = _global.URL || _global.webkitURL
    // Namespace is used to prevent conflict w/ Chrome Poper Blocker extension (Issue #561)
    var a = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
    name = name || blob.name || 'download'

    a.download = name
    a.rel = 'noopener' // tabnabbing

    // TODO: detect chrome extensions & packaged apps
    // a.target = '_blank'

    if (typeof blob === 'string') {
      // Support regular links
      a.href = blob
      if (a.origin !== location.origin) {
        corsEnabled(a.href)
          ? download(blob, name, opts)
          : click(a, a.target = '_blank')
      } else {
        click(a)
      }
    } else {
      // Support blobs
      a.href = URL.createObjectURL(blob)
      setTimeout(function () { URL.revokeObjectURL(a.href) }, 4E4) // 40s
      setTimeout(function () { click(a) }, 0)
    }
  }

  // Use msSaveOrOpenBlob as a second approach
  : 'msSaveOrOpenBlob' in navigator
  ? function saveAs (blob, name, opts) {
    name = name || blob.name || 'download'

    if (typeof blob === 'string') {
      if (corsEnabled(blob)) {
        download(blob, name, opts)
      } else {
        var a = document.createElement('a')
        a.href = blob
        a.target = '_blank'
        setTimeout(function () { click(a) })
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name)
    }
  }

  // Fallback to using FileReader and a popup
  : function saveAs (blob, name, opts, popup) {
    // Open a popup immediately do go around popup blocker
    // Mostly only available on user interaction and the fileReader is async so...
    popup = popup || open('', '_blank')
    if (popup) {
      popup.document.title =
      popup.document.body.innerText = 'downloading...'
    }

    if (typeof blob === 'string') return download(blob, name, opts)

    var force = blob.type === 'application/octet-stream'
    var isSafari = /constructor/i.test(_global.HTMLElement) || _global.safari
    var isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent)

    if ((isChromeIOS || (force && isSafari) || isMacOSWebView) && typeof FileReader !== 'undefined') {
      // Safari doesn't allow downloading of blob URLs
      var reader = new FileReader()
      reader.onloadend = function () {
        var url = reader.result
        url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, 'data:attachment/file;')
        if (popup) popup.location.href = url
        else location = url
        popup = null // reverse-tabnabbing #460
      }
      reader.readAsDataURL(blob)
    } else {
      var URL = _global.URL || _global.webkitURL
      var url = URL.createObjectURL(blob)
      if (popup) popup.location = url
      else location.href = url
      popup = null // reverse-tabnabbing #460
      setTimeout(function () { URL.revokeObjectURL(url) }, 4E4) // 40s
    }
  }
)

_global.saveAs = saveAs.saveAs = saveAs

if (typeof module !== 'undefined') {
  module.exports = saveAs;
}
