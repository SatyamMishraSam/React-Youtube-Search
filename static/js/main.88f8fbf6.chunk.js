(this["webpackJsonputube-videos-app"]=this["webpackJsonputube-videos-app"]||[]).push([[0],{44:function(e,t,i){},45:function(e,t,i){"use strict";i.r(t);var n=i(2),s=i.n(n),c=i(17),a=i.n(c),r=i(8),o=i.n(r),d=i(18),l=i(3),u=i(4),j=i(6),m=i(5),b=i(0),v=function(e){Object(j.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(l.a)(this,i);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(u.a)(i,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"search-bar ui segment ",children:Object(b.jsx)("form",{onSubmit:this.onFormSubmit,className:"ui form ",children:Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Search Youtube  Videos:"}),Object(b.jsx)("input",{type:"text",value:this.state.term,onChange:this.onInputChange})]})})})}}]),i}(s.a.Component),p=i(19),h=i.n(p).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:10,key:"AIzaSyDetPegnPmjY8G3sFGfPp8-_7vPFt5M5FQ"}}),O=(i(44),function(e){var t=e.video,i=e.onVideoSelect;return Object(b.jsxs)("div",{style:{border:"3px solid red"},onClick:function(){return i(t)},className:"video-item item",children:[Object(b.jsx)("img",{alt:t.snippet.title,className:"ui image",src:t.snippet.thumbnails.medium.url}),Object(b.jsx)("div",{className:"content",children:Object(b.jsx)("div",{className:"header",children:t.snippet.title})})]})}),x=function(e){var t=e.videos,i=e.onVideoSelect,n=t.map((function(e){return Object(b.jsx)(O,{onVideoSelect:i,video:e},e.id.videoId)}));return Object(b.jsx)("div",{className:"ui relaxed divided list",children:n})},f=function(e){var t=e.video;if(!t)return Object(b.jsx)("div",{});var i="https://www.youtube.com/embed/".concat(t.id.videoId);return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"ui embed",children:Object(b.jsx)("iframe",{title:"videoPlayer",src:i})}),Object(b.jsxs)("div",{className:"ui segment",children:[Object(b.jsx)("h4",{className:"ui header",children:t.snippet.title}),Object(b.jsx)("p",{children:t.snippet.description})]})]})},S=function(e){Object(j.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(l.a)(this,i);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var t=Object(d.a)(o.a.mark((function t(i){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get("/search",{params:{q:i}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(u.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("div",{style:{border:"3px solid red"},className:"ui container ",children:[Object(b.jsx)(v,{onFormSubmit:this.onTermSubmit}),Object(b.jsx)("div",{className:"ui grid",children:Object(b.jsxs)("div",{className:"ui row",children:[Object(b.jsx)("div",{className:"eleven wide column",children:Object(b.jsx)(f,{video:this.state.selectedVideo})}),Object(b.jsx)("div",{className:"five wide column",children:Object(b.jsx)(x,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})})]})})]})}}]),i}(s.a.Component);a.a.render(Object(b.jsx)(S,{}),document.querySelector("#root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.88f8fbf6.chunk.js.map