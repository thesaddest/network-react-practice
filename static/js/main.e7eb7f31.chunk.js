(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,n){"use strict";var r=n(7),a=n.n(r),u=n(13),c=n(34),o=n(8),i=n(12),s=function(e,t,n,r){return e.map(function(e){return e[n]===t?Object(o.a)({},e,r):e})};n.d(t,"d",function(){return d}),n.d(t,"e",function(){return E}),n.d(t,"c",function(){return h}),n.d(t,"b",function(){return g}),n.d(t,"f",function(){return v});var l={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},f=function(e){return{type:"FOLLOW",userId:e}},m=function(e){return{type:"UNFOLLOW",userId:e}},d=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},p=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},E=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},h=function(e,t){return function(){var n=Object(u.a)(a.a.mark(function n(r){var u;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(p(!0)),r(d(e)),n.next=4,i.c.getUsers(e,t);case 4:u=n.sent,r(p(!1)),r({type:"SET_USERS",users:u.items}),r({type:"SET_TOTAL_USERS_COUNT",count:u.totalCount});case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()},b=function(){var e=Object(u.a)(a.a.mark(function e(t,n,r,u){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(E(!0,n)),e.next=3,r(n);case 3:0==e.sent.resultCode&&t(u(n)),t(E(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),g=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:b(n,e,i.c.follow.bind(i.c),f);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:b(n,e,i.c.unfollow.bind(i.c),m);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(o.a)({},e,{users:s(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(o.a)({},e,{users:s(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(o.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(o.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(o.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(o.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(o.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!=t.userId})});default:return e}}},12:function(e,t,n){"use strict";n.d(t,"c",function(){return u}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return o});var r=n(119),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"b0da98ff-c4df-4586-9e34-dc9cdc3ab2c9"}}),u={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return a.post("follow/".concat(e)).then(function(e){return e.data})},unfollow:function(e){return a.delete("follow/".concat(e)).then(function(e){return e.data})},getProfile:function(e){return console.warn("Obsolete method. Please use profileApi instead"),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},o={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},124:function(e,t,n){e.exports=n.p+"static/media/preLoader.66658ebc.svg"},150:function(e,t,n){e.exports=n(294)},236:function(e,t,n){},238:function(e,t,n){},241:function(e,t,n){},243:function(e,t,n){},245:function(e,t,n){},294:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,315)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,u=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),u(e),c(e)})},a=n(9),u=n(84),c=n(95),o={},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;arguments.length>1&&arguments[1];return e},s=n(118),l=n(7),f=n.n(l),m=n(13),d=n(8),p=n(12),E=n(28),h={id:null,email:null,login:null,isAuth:!1},b=function(e,t,n,r){return{type:"thesaddest-network/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},g=function(){return function(){var e=Object(m.a)(f.a.mark(function e(t){var n,r,a,u,c;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,u=r.login,c=r.email,t(b(a,c,u,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"thesaddest-network/auth/SET_USER_DATA":return Object(d.a)({},e,t.payload);default:return e}},O=n(121),S=n(117),w={initialized:!1},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return Object(d.a)({},e,{initialized:!0});default:return e}},j=Object(a.c)({profilePage:u.b,dialogsPage:c.a,sidebar:i,usersPage:s.a,auth:v,form:S.a,app:_}),y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,T=Object(a.e)(j,y(Object(a.a)(O.a))),C=n(0),P=n.n(C),I=n(60),k=n.n(I),x=(n(236),n(45)),N=n(46),L=n(48),A=n(47),U=n(49),F=(n(238),n(63)),R=n.n(F),G=n(16),D=function(e){return e.isActive?R.a.active:R.a.item},M=function(){return P.a.createElement("nav",{className:R.a.nav},P.a.createElement("div",null,P.a.createElement(G.b,{to:"/profile",className:D},"Profile")),P.a.createElement("div",null,P.a.createElement(G.b,{to:"/dialogs",className:D},"Messages")),P.a.createElement("div",null,P.a.createElement(G.b,{to:"/users",className:D},"Users")),P.a.createElement("div",null,P.a.createElement(G.b,{to:"/news",className:D},"News")),P.a.createElement("div",null,P.a.createElement(G.b,{to:"/music",className:D},"Music")),P.a.createElement("div",null,P.a.createElement(G.b,{to:"/settings",className:D},"Settings")))},z=(n(241),function(e){return P.a.createElement("div",null,"News")}),H=n(1),B=(n(243),function(e){return P.a.createElement("div",null,"Music")}),W=(n(245),function(e){return P.a.createElement("div",null,"Settings")}),X=n(81),V=n.n(X),q=function(e){return P.a.createElement("header",{className:V.a.header},P.a.createElement("img",{src:"https://i.imgur.com/lhXs7Hg.png"}),P.a.createElement("div",{className:V.a.loginBlock},e.isAuth?P.a.createElement("div",null,e.login," - ",P.a.createElement("button",{onClick:e.logout},"Logout")):P.a.createElement(G.b,{to:"/login"},"Login")))},J=n(17),K=function(e){function t(){return Object(x.a)(this,t),Object(L.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(U.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return P.a.createElement(q,this.props)}}]),t}(P.a.Component),Y=Object(J.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,logout:e.auth.logout}},{logout:function(){return function(){var e=Object(m.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.logout();case 2:0===e.sent.data.resultCode&&t(b(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(K),Z=n(299),Q=n(300),$=n(58),ee=n(78),te=n(39),ne=n.n(te),re=Object(Q.a)({form:"login"})(function(e,t){var n=e.handleSubmit,r=t.error;return P.a.createElement("form",{onSubmit:n},P.a.createElement("div",null,P.a.createElement(Z.a,{placeholder:"Email",validate:[ee.b],name:"email",type:"email",component:$.a})),P.a.createElement("div",null,P.a.createElement(Z.a,{placeholder:"Password",validate:[ee.b],name:"password",type:"password",component:$.a})),P.a.createElement("div",null,P.a.createElement("input",{component:$.a,name:"rememberMe",type:"checkbox"})," Remember me"),r&&P.a.createElement("div",{className:ne.a.formSummaryError},r),P.a.createElement("div",null,P.a.createElement("button",null,"Login")))}),ae=Object(J.b)(function(e){return{isAuth:e.auth.isAuth}},{login:function(e,t,n){return function(){var r=Object(m.a)(f.a.mark(function r(a){var u,c;return f.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p.a.login(e,t,n);case 2:0===(u=r.sent).data.resultCode?a(g()):(c=u.data.messages.length>0?u.data.messages[0]:"Some error",a(Object(E.a)("login",{_error:c})));case 4:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()}})(function(e){return e.isAuth?P.a.createElement(H.a,{to:"/profile"}):P.a.createElement("div",null,P.a.createElement("h1",null,"Login"),P.a.createElement(re,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))}),ue=n(33),ce=P.a.lazy(function(){return n.e(2).then(n.bind(null,318))}),oe=P.a.lazy(function(){return n.e(3).then(n.bind(null,316))}),ie=P.a.lazy(function(){return n.e(4).then(n.bind(null,317))}),se=function(e){function t(){return Object(x.a)(this,t),Object(L.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(U.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?P.a.createElement("div",{className:"app-wrapper"},P.a.createElement(Y,null),P.a.createElement(M,null),P.a.createElement("div",{className:"app-wrapper-content"},P.a.createElement(H.d,null,P.a.createElement(H.b,{path:"/dialogs",element:P.a.createElement(C.Suspense,{fallback:P.a.createElement(ue.a,null)},P.a.createElement(ce,null))}),P.a.createElement(H.b,{path:"/profile/*",element:P.a.createElement(C.Suspense,{fallback:P.a.createElement(ue.a,null)},P.a.createElement(oe,null))}),P.a.createElement(H.b,{path:"/profile/:userId",element:P.a.createElement(C.Suspense,{fallback:P.a.createElement(ue.a,null)},P.a.createElement(oe,null))}),P.a.createElement(H.b,{path:"/login",element:P.a.createElement(ae,null)}),P.a.createElement(H.b,{path:"/news",element:P.a.createElement(z,null)}),P.a.createElement(H.b,{path:"/music",element:P.a.createElement(B,null)}),P.a.createElement(H.b,{path:"/settings",element:P.a.createElement(W,null)}),P.a.createElement(H.b,{path:"/users",element:P.a.createElement(C.Suspense,{fallback:P.a.createElement(ue.a,null)},P.a.createElement(ie,null))})))):P.a.createElement(ue.a,null)}}]),t}(P.a.Component),le=Object(J.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(g());Promise.all([t]).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}})(se);k.a.render(P.a.createElement(G.a,null,P.a.createElement(J.a,{store:T},P.a.createElement(le,null))),document.getElementById("root")),r()},33:function(e,t,n){"use strict";var r=n(124),a=n.n(r),u=n(0),c=n.n(u);t.a=function(e){return c.a.createElement("div",null,c.a.createElement("img",{src:a.a}))}},39:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2c2b6",error:"FormsControls_error__br2mb",formSummaryError:"FormsControls_formSummaryError__3oXwj"}},58:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return l});var r=n(301),a=n(0),u=n.n(a),c=n(39),o=n.n(c),i=function(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return u.a.createElement("div",{className:o.a.formControl+" "+(c?o.a.error:"")},u.a.createElement("div",null,a),u.a.createElement("div",null,c&&u.a.createElement("span",null,r)))},s=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return u.a.createElement(i,e," ",u.a.createElement("textarea",Object.assign({},t,n)))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return u.a.createElement(i,e," ",u.a.createElement("input",Object.assign({},t,n)))}},63:function(e,t,n){e.exports={nav:"Navbar_nav__2K-fv",item:"Navbar_item__3o7tk",active:"Navbar_active__l0q1v"}},78:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},81:function(e,t,n){e.exports={header:"Header_header__3o9Yr",loginBlock:"Header_loginBlock__3xU76"}},84:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"d",function(){return d}),n.d(t,"c",function(){return p}),n.d(t,"g",function(){return E}),n.d(t,"e",function(){return h}),n.d(t,"f",function(){return b});var r=n(7),a=n.n(r),u=n(13),c=n(34),o=n(8),i=n(12),s=n(28),l={posts:[{id:1,message:"Hi, how are you",likesCount:12},{id:2,message:"It's my first post",likesCount:11}],profile:null,status:""},f=function(e){return{type:"ADD-POST",newPostText:e}},m=function(e){return{type:"SET_STATUS",status:e}},d=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(m(r.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(m(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:r.data.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n,r){var u,c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u=r().auth.userId,t.next=3,i.b.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=8;break}n(d(u)),t.next=10;break;case 8:return n(Object(s.a)("edit-profile",{_error:c.data.messages[0]})),t.abrupt("return",Promise.reject(c.data.messages[0]));case 10:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(o.a)({},e,{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case"SET_STATUS":return Object(o.a)({},e,{status:t.status});case"SET_USER_PROFILE":return Object(o.a)({},e,{profile:t.profile});case"DELETE_POST":return Object(o.a)({},e,{posts:e.posts.filter(function(e){return e.id!=t.postId})});case"SAVE_PHOTO_SUCCESS":return Object(o.a)({},e,{profile:Object(o.a)({},e.profile,{photos:t.photos})});default:return e}}},95:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var r=n(34),a=n(8),u={messages:[{id:1,message:"Hi"},{id:2,message:"How are you"},{id:3,message:"Wassup"}],dialogs:[{id:1,name:"Rutim"},{id:2,name:"Temych"},{id:3,name:"Nikitka"}]},c=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}}},[[150,6,5]]]);
//# sourceMappingURL=main.e7eb7f31.chunk.js.map