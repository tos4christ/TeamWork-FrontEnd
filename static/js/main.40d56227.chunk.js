(this.webpackJsonpteamworksng=this.webpackJsonpteamworksng||[]).push([[0],{76:function(e,t,a){e.exports=a(95)},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=(a(81),a(7)),i=a(8),s=a(10),m=a(9),u=a(11),p=(a(82),a(83),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("h1",null," Powered by teamworksng v1. "),r.a.createElement("p",null,"Contact us: +23490089"))}}]),t}(r.a.Component)),h=(a(44),a(12)),f=a(26),d=a(4),E=a.n(d),b=a(126),g=a(142),v=a(127),y=a(130),j=a(129),O=a(128),k=a(47),C=a.n(k),w=a(122);a(141);function N(e){return{id:"scrollable-force-tab-".concat(e),"aria-controls":"scrollable-force-tabpanel-".concat(e)}}var S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e,t){a.setState({value:t})},a.state={value:0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t,a=this.props.location.pathname;"/"!==a&&"/api/v1/auth/signin"!==a&&"/signout"!==a&&E.a.get("token")?(e="/signout",t="Sign Out"):(e="/api/v1/auth/signin",t="Sign In");var n=this.state.value;return r.a.createElement("div",null,r.a.createElement(b.a,{position:"static",color:"default"},r.a.createElement(g.a,{value:n,onChange:this.handleChange,variant:"scrollable",scrollButtons:"on",indicatorColor:"primary",textColor:"primary","aria-label":"scrollable force tabs example"},r.a.createElement(v.a,Object.assign({component:h.c,label:t,to:e,icon:r.a.createElement(O.a,null)},N(0))),r.a.createElement(v.a,Object.assign({component:h.c,label:"Tour",to:"#",icon:r.a.createElement(j.a,null)},N(1))),r.a.createElement(v.a,Object.assign({component:h.c,label:"Contact",to:"#",icon:r.a.createElement(y.a,null)},N(2))),r.a.createElement(v.a,Object.assign({component:h.c,label:"About",to:"#",icon:r.a.createElement(C.a,null)},N(3))))))}}]),t}(r.a.Component),x=Object(f.f)(S),T=(a(92),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault();var t={firstName:a.firstName.value,lastName:a.lastName.value,email:a.email.value,password:a.password.value,gender:a.gender.value,jobRole:a.jobRole.value,department:a.department.value,address:a.address.value};fetch("https://teamworksng.herokuapp.com/api/v1/auth/create-user",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:"Bearer "+E.a.get("token")},mode:"cors"}).then((function(e){return e.json()})).then((function(e){console.log(e);a.props.history.push("/api/v1/admin")}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"create",onSubmit:this.handleSubmit},r.a.createElement("h3",null," Create New Employee Profile"),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"firstName",placeholder:"First Name",ref:function(t){return e.firstName=t}})),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"lastName",placeholder:"Last Name",ref:function(t){return e.lastName=t},required:!0})),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"email",name:"email",placeholder:"Email",ref:function(t){return e.email=t},required:!0})),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"password",name:"password",placeholder:"Temporary Password",ref:function(t){return e.password=t},required:!0})),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("p",null,"Gender"),r.a.createElement("select",{name:"gender",ref:function(t){return e.gender=t}},r.a.createElement("option",{value:"Male"},"Male"),r.a.createElement("option",{value:"Female"},"Female"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"jobRole",placeholder:"Job Role",ref:function(t){return e.jobRole=t},required:!0})),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"department",placeholder:"Department",ref:function(t){return e.department=t},required:!0})),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"address",placeholder:"Address",ref:function(t){return e.address=t},required:!0}))," ",r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(r.a.Component)),A=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"rule dashhead"},r.a.createElement("span",{className:"material-icons"},"dashboard")," Dashboard"),r.a.createElement("div",{className:"rule dashboard"},r.a.createElement("button",null," ",r.a.createElement("i",{className:"material-icons md-10"},"edit"),r.a.createElement("span",null," Edit Profile")," "),r.a.createElement("button",null," ",r.a.createElement(h.c,{to:"/admin/changePassword"},r.a.createElement("i",{className:"material-icons md-10"},"restore")," ",r.a.createElement("span",null," Change Password"))," "),r.a.createElement("button",null,r.a.createElement(h.c,{to:"".concat(this.props.match.url,"/createUser")},r.a.createElement("i",{className:"material-icons md-10"},"how_to_reg")," ",r.a.createElement("span",null,"New Employee"))),r.a.createElement("button",null,r.a.createElement("i",{className:"material-icons md-10"},"delete")," ",r.a.createElement("span",null," Delete Articles")),r.a.createElement("button",null,r.a.createElement("i",{className:"material-icons md-10"},"delete")," ",r.a.createElement("span",null," Delete Gifs")," "),r.a.createElement("button",null,r.a.createElement("i",{className:"material-icons md-10"},"delete")," ",r.a.createElement("span",null," Delete Comments "))),r.a.createElement(f.a,{path:"".concat(this.props.match.url,"/createUser"),component:T}))}}]),t}(r.a.Component),P=Object(f.f)(A),D=(a(93),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.props.match.path),r.a.createElement("div",{className:"homepage"},r.a.createElement("h2",null," This is the home page"),r.a.createElement("p",null,r.a.createElement("h4",null,"Kindly Enter your user name and password and select Employee ")," ",r.a.createElement("br",null),r.a.createElement("h6",null,"You can do the following on this page for now")," ",r.a.createElement("br",null),"1) You can post an article for a starter, your article can have a title and body message ",r.a.createElement("br",null),"2) You can post only gif images with a title ",r.a.createElement("br",null),"3) You can delete your own articles and gifs ",r.a.createElement("br",null),"4) You can delete your own comments ",r.a.createElement("br",null),"5) You can make comments on articles and gifs posted by others ",r.a.createElement("br",null),"6) You can view Articles and Gifs posted by others when you click on the feeds tab ",r.a.createElement("br",null)),r.a.createElement("button",null,r.a.createElement(h.b,{to:"/api/v1/auth/signin"}," Enter the Site")," "))}}]),t}(r.a.Component)),G=Object(f.f)(D),L=(a(94),a(139)),B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSubmission=function(e){console.log("okay"),e.preventDefault();var t={email:a.email.value,password:a.password.value};fetch("https://teamworksng.herokuapp.com/api/v1/auth/signin",{method:"POST",mode:"cors",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){E.a.set("userDetails",e.data.allDetails),E.a.set("profile_pic",e.data.allDetails.profile_pic),a.setToken(e.data.token,e.data.userId,e.data.userName),a.admin.checked?a.props.history.push("/api/v1/admin"):a.emp.checked&&a.props.history.push("/api/v1/employee/feed")})).catch((function(e){return console.error(e)}))},a.setToken=function(e,t,n){E.a.set("token",e),E.a.set("userId",t),E.a.set("userName",n),setTimeout((function(){a.props.history.push("/signout"),E.a.remove("token"),E.a.remove("userId"),E.a.remove("userName"),E.a.remove("profile_pic"),E.a.remove("userDetails")}),6e5)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"signinBody"},r.a.createElement("form",{onSubmit:this.handleSubmission,autoComplete:"on"},r.a.createElement("h2",null,"Sign In"),r.a.createElement("div",{className:"inputDiv"},r.a.createElement(L.a,{type:"email",variant:"outlined",required:!0,inputRef:function(t){return e.email=t},autoFocus:!0,label:"Email",className:"signInput"})),r.a.createElement("div",{className:"inputDiv"},r.a.createElement(L.a,{type:"password",variant:"outlined",required:!0,inputRef:function(t){return e.password=t},label:"Password",className:"signInput"})),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"role",value:"admin",ref:function(t){return e.admin=t},disabled:!0,required:!0}),r.a.createElement("span",null," Admin"),r.a.createElement("input",{type:"radio",name:"role",value:"employee",ref:function(t){return e.emp=t},required:!0}),r.a.createElement("span",null," Employee")),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"submit"}))))}}]),t}(r.a.Component),I=Object(f.f)(B),R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleSubmission=function(e){e.preventDefault();var t={title:a.title.value,article:a.article.value,tag:a.select.value};fetch("https://teamworksng.herokuapp.com/api/v1/articles",{method:"POST",mode:"cors",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:"Bearer "+E.a.get("token")}}).then((function(e){return e.json()})).then((function(e){a.props.history.push("/api/v1/employee/articles/get/".concat(e.data.articleId))}))},a.state={article:"",articleClass:"hidden"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"articlePost"},r.a.createElement("form",{onSubmit:this.handleSubmission},r.a.createElement("h3",null,"Post an Article"),r.a.createElement("label",null,r.a.createElement("input",{type:"text",name:"title",placeholder:"Title",ref:function(t){return e.title=t}})),r.a.createElement("label",null,r.a.createElement("p",null,"Tag"),r.a.createElement("select",{ref:function(t){return e.select=t}},r.a.createElement("option",null," Commerce ")," ",r.a.createElement("option",null," Finance ")," ",r.a.createElement("option",null," Politics "),r.a.createElement("option",null," Science "),r.a.createElement("option",null," Economy ")," ",r.a.createElement("option",null," Religion ")))," ",r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("textarea",{name:"article",ref:function(t){return e.article=t},rows:"15",cols:"100",placeholder:"Article"})),r.a.createElement("br",null),r.a.createElement("button",{className:"button",type:"submit"}," Post Article")))}}]),t}(r.a.Component),U=Object(f.f)(R),z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).postGif=function(e){e.preventDefault();var t=new FormData;t.append("image",e.target.gifPost.files[0]),t.append("title",e.target.title.value);fetch("https://teamworksng.herokuapp.com/api/v1/gifs",{method:"POST",mode:"cors",headers:{Authorization:"Bearer "+E.a.get("token")},body:t}).then((function(e){return e.json()})).then((function(e){a.props.history.push("/api/v1/employee/gifs/get")})).catch((function(e){return console.error(e)}))},a.showImage=function(e){if(e.target.files[0]){var t=URL.createObjectURL(e.target.files[0]);a.setState((function(e){return e.img=t,e.imgClass="seen",{img:e.img,imgClass:e.imgClass}}))}else e.target.files[0]||a.setState({img:"",imgClass:"hidden"})},a.state={img:"",imgClass:"hidden"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"gifPost"},r.a.createElement("form",{encType:"multipart/form-data",name:"GifPost",onSubmit:this.postGif},r.a.createElement("p",null," Gif Title"),r.a.createElement("input",{type:"text",name:"title",placeholder:"Gif Title",id:"gifTitle"}),r.a.createElement("input",{type:"file",name:"gifPost",ref:function(t){return e.img=t},onChange:this.showImage,accept:"image/gif"}),r.a.createElement("br",null),r.a.createElement("img",{src:this.state.img,className:this.state.imgClass,alt:"gif upload"}),r.a.createElement("button",{className:"button"}," Upload ")))}}]),t}(r.a.Component),F=Object(f.f)(z),_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={flag:"",up:0,down:0,status:"",id:a.props.Id},a.flag=function(){a.setState({flag:""===a.state.flag?"flag":""})},a.removeComment=function(e){a.props.removeComment(e)},a.deleteComment=function(){var e,t=a.props.comment.commentid,n=a.props.Id;"gifs"===a.props.type?e="gifs":"articles"===a.props.type&&(e="articles");var r="https://teamworksng.herokuapp.com/api/v1/".concat(e,"/").concat(n,"/commented/").concat(t);fetch(r,{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+E.a.get("token")}}).then((function(e){return e.json()})).then((function(e){a.removeComment(a.props.Id)}))},a.countUp=function(){a.setState((function(e){return e.up=1,{up:e.up}}))},a.countDown=function(){a.setState((function(e){return e.down=1,{down:e.down}}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=Date(this.props.comment.createdon);return r.a.createElement("div",{className:"commentDiv"},r.a.createElement("span",null,this.props.comment.authorid," ",this.props.comment.commentid," "),r.a.createElement("p",null,this.props.comment.comment," "),r.a.createElement("span",null,e),r.a.createElement("div",{className:"icons"},r.a.createElement("span",{onClick:this.countUp},r.a.createElement("i",{className:"fas fa-thumbs-up fa-1x"}),this.state.up," "),r.a.createElement("span",{onClick:this.countDown},r.a.createElement("i",{className:"fas fa-thumbs-down fa-1x"}),this.state.down," "),r.a.createElement("span",{onClick:this.flag},r.a.createElement("i",{className:"fas fa-flag fa-1x ".concat(this.state.flag)})," "),r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-comment fa-1x"})),r.a.createElement("span",{onClick:this.deleteComment},r.a.createElement("i",{className:"fas fa-minus-circle fa-1x"})," ")))}}]),t}(r.a.Component),q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){var t=a.props.item,n=a.props.id;e.preventDefault();var r={comment:a.comment.value},l="https://teamworksng.herokuapp.com/api/v1/".concat(t,"/").concat(n,"/comment");fetch(l,{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json",Authorization:"Bearer "+E.a.get("token")},mode:"cors"}).then((function(e){return e.json()})).then((function(e){a.setState({display:""}),a.props.addComment(a.comment.value),a.comment.value=""}))},a.state={display:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"comment",onSubmit:this.handleSubmit,style:{display:this.state.display}},r.a.createElement("h4",null," Leave a Comment "),r.a.createElement("label",null,r.a.createElement("input",{type:"textarea",name:"comment",column:"50",placeholder:"Leave a comments",ref:function(t){return e.comment=t},required:!0})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Submit"))}}]),t}(r.a.Component),J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).reveal=function(){a.setState({commentClass:"seen"===a.state.commentClass?"hidden":"seen"})},a.removeComment=function(e){var t=a.state.comments.filter((function(t){return t.commentid!==e}));a.setState((function(e){return e.comments=t,{comments:e.comments}}))},a.flag=function(){a.setState({flag:""===a.state.flag?"flag":""})},a.countUp=function(){a.setState((function(e){return e.up=1,{up:e.up}}))},a.countDown=function(){a.setState((function(e){return e.down=1,{down:e.down}}))},a.delete=function(){var e=a.state.id,t="https://teamworksng.herokuapp.com/api/v1/articles/".concat(e);fetch(t,{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+E.a.get("token")}}).then((function(e){return e.json()})).then((function(){a.setState((function(e){return e.display="none",{display:e.display}}))}))},a.addComment=function(e){var t={};void 0===a.state.comments?(t.commentid=1,t.comment=e,a.setState({comments:[t]})):(t.commentid=a.state.comments.length+1,t.comment=e,a.setState((function(e){var n=a.state.comments;return n.push(t),e.comments=n,{comments:e.comments}})))},a.state={up:0,down:0,flag:"",commentClass:"hidden",id:a.props.article.id,article:a.props.article,comments:a.props.article.comments,display:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.article,a=this.state.comments,n=0;a&&(n=a.length,this.commentArray=[],a.filter((function(e,t){return t<=10})).forEach((function(t){return e.commentArray.push(r.a.createElement(_,{comment:t,key:t.commentid,Id:t.commentid,removeComment:e.removeComment,type:"articles"}))})));return r.a.createElement("div",{className:"article-container",style:{display:this.state.display}},r.a.createElement("div",{className:"article"},this.props.match.params.id?r.a.createElement("h2",null,t.title):r.a.createElement(h.b,{to:"".concat(this.props.match.path,"/").concat(t.id)},r.a.createElement("h2",null,t.title)),r.a.createElement("p",null,t.article,"  ",r.a.createElement("span",null," \xa0 ",t.id," ")," ",t.tag?r.a.createElement("span",null,"\xa0  Tags: ",t.tag):""),r.a.createElement("p",null," Article By ",t.author," ")),r.a.createElement("div",{className:"icons"},r.a.createElement("span",{onClick:this.countUp},r.a.createElement("i",{className:"fas fa-thumbs-up fa-1x"}),this.state.up," "),r.a.createElement("span",{onClick:this.countDown},r.a.createElement("i",{className:"fas fa-thumbs-down fa-1x"}),this.state.down," "),r.a.createElement("span",{onClick:this.flag},r.a.createElement("i",{className:"fas fa-flag fa-1x ".concat(this.state.flag)})," "),r.a.createElement("span",{onClick:this.reveal},r.a.createElement("i",{className:"fas fa-comment fa-1x"}),n),r.a.createElement("span",{onClick:this.delete},r.a.createElement("i",{className:"fas fa-minus-circle fa-1x"})," ")),r.a.createElement("div",{className:this.state.commentClass+" comments"},r.a.createElement("ul",null,r.a.createElement(q,{item:"articles",id:t.id,addComment:this.addComment}),this.commentArray)))}}]),t}(r.a.Component),Y=Object(f.f)(J),M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).check=function(e){console.log(e.target.value)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log(this.select.value)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{margin:"5px 20px"}},r.a.createElement("label",null,"Filter by Article Tag")," ",r.a.createElement("br",null),r.a.createElement("select",{onChange:this.check,ref:function(t){return e.select=t}},r.a.createElement("option",null),r.a.createElement("option",null,"Commerce"),r.a.createElement("option",null,"Religion"),r.a.createElement("option",null,"Science")))}}]),t}(r.a.Component),W=Object(f.f)(M),H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).nextPage=function(){a.setState((function(e){return e.lower+=10,e.upper+=10,{upper:e.upper,lower:e.lower}}))},a.previousPage=function(){a.setState((function(e){return e.lower-=10,e.upper-=10,{upper:e.upper,lower:e.lower}}))},a.getAllArticles=function(){var e=E.a.get("userId"),t="https://teamworksng.herokuapp.com/api/v1/articles/all/".concat(e);fetch(t,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+E.a.get("token")}}).then((function(e){return e.json()})).then((function(e){a.setState((function(t){return t.article=e.data.articles,t.isLoaded=!0,{article:t.article,isLoaded:t.isLoaded}}))})).catch((function(e){return console.error(e)}))},a.sort=function(e){},a.filterArticle=function(){a.setState((function(e){return e.filterText=a.search.value,{filterText:e.filterText}}))},a.state={start:a.getAllArticles(),article:"",isLoaded:!1,upper:9,lower:0,filterText:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=[];this.state.isLoaded&&this.state.article.filter((function(t,a){return a>=e.state.lower&&a<=e.state.upper&&t.title.includes(e.state.filterText)})).forEach((function(e){return t.push(r.a.createElement(Y,{article:e,key:e.id}))}));return r.a.createElement("div",{className:"articles"},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(W,{sort:this.sort}),r.a.createElement("input",{type:"text",placeholder:"search item by title",ref:function(t){return e.search=t},className:"searchBar",onChange:this.filterArticle})),t,t.length<1?r.a.createElement("h2",null,"Start by Posting an Article or Gif photos"):r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("input",{type:"button",value:"NEXT",onClick:this.nextPage}),r.a.createElement("input",{type:"button",value:"PREVIOUS",onClick:this.previousPage})))}}]),t}(r.a.Component),V=Object(f.f)(H),X=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).getAnArticle=function(){var e=a.props.match.params.id,t="https://teamworksng.herokuapp.com/api/v1/articles/".concat(e);fetch(t,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+E.a.get("token")}}).then((function(e){return e.json()})).then((function(e){a.setState((function(t){return t.article=e.data,t.isLoaded=!0,{article:t.article,isLoaded:t.isLoaded}}))})).catch((function(e){return console.error(e)}))},a.state={start:a.getAnArticle(),article:"",isLoaded:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e;return this.state.isLoaded&&(e=r.a.createElement(Y,{article:this.state.article})),r.a.createElement("div",null," ",e," ")}}]),t}(r.a.Component),K=Object(f.f)(X),$=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).reveal=function(){a.setState({commentClass:"seen"===a.state.commentClass?"hidden":"seen"})},a.flag=function(){a.setState({flag:""===a.state.flag?"flag":""})},a.countUp=function(){a.setState((function(e){return e.up=1,{up:e.up}}))},a.countDown=function(){a.setState((function(e){return e.down=1,{down:e.down}}))},a.removeComment=function(e){var t=a.state.comments.filter((function(t){return t.commentid!==e}));a.setState((function(e){return e.comments=t,{comments:e.comments}}))},a.delete=function(){var e=a.state.id,t="https://teamworksng.herokuapp.com/api/v1/gifs/".concat(e);fetch(t,{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+E.a.get("token")}}).then((function(e){return e.json()})).then((function(){a.setState((function(e){return e.display="none",{display:e.display}}))})).catch((function(e){return console.error(e)}))},a.addComment=function(e){var t={};void 0===a.state.comments?(t.commentid=1,t.comment=e,a.setState({comments:[t]})):(t.commentid=a.state.comments.length+1,t.comment=e,a.setState((function(e){var n=a.state.comments;return n.push(t),e.comments=n,{comments:e.comments}})))},a.state={up:0,down:0,flag:"",commentClass:"hidden",id:a.props.gif.id,gif:a.props.gif,comments:a.props.gif.comments,display:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.gif,a=this.state.comments,n=0;a&&(n=a.length,this.commentArray=[],a.filter((function(e,t){return t<=10})).forEach((function(t){return e.commentArray.push(r.a.createElement(_,{comment:t,key:t.commentid,Id:t.commentid,removeComment:e.removeComment,type:"gifs"}))})));return r.a.createElement("div",{className:"gif-container",style:{display:this.state.display}},r.a.createElement("div",{className:"gif"},this.props.match.params.id?r.a.createElement("h2",null," ",t.title):r.a.createElement(h.b,{to:"".concat(this.props.match.path,"/").concat(t.id)}," ",r.a.createElement("h2",null," ",t.title),"  "),r.a.createElement("img",{src:t.url,alt:"gif Post"}),r.a.createElement("p",null," Gif by ",t.author," ")),r.a.createElement("div",{className:"icons"},r.a.createElement("span",{onClick:this.countUp},r.a.createElement("i",{className:"fas fa-thumbs-up fa-1x"}),this.state.up," "),r.a.createElement("span",{onClick:this.countDown},r.a.createElement("i",{className:"fas fa-thumbs-down fa-1x"}),this.state.down," "),r.a.createElement("span",{onClick:this.flag},r.a.createElement("i",{className:"fas fa-flag fa-1x ".concat(this.state.flag)})," "),r.a.createElement("span",{onClick:this.reveal},r.a.createElement("i",{className:"fas fa-comment fa-1x"}),n),r.a.createElement("span",{onClick:this.delete},r.a.createElement("i",{className:"fas fa-minus-circle fa-1x"})," ")),r.a.createElement("div",{className:this.state.commentClass+" comments"},r.a.createElement("ul",null,r.a.createElement(q,{item:"gifs",id:t.id,addComment:this.addComment}),this.commentArray)))}}]),t}(r.a.Component),Q=Object(f.f)($),Z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).nextPage=function(){a.setState((function(e){return e.lower+=10,e.upper+=10,{upper:e.upper,lower:e.lower}}))},a.previousPage=function(){a.setState((function(e){return e.lower-=10,e.upper-=10,{upper:e.upper,lower:e.lower}}))},a.getAllGifs=function(){var e=E.a.get("userId"),t="https://teamworksng.herokuapp.com/api/v1/gifs/all/".concat(e);fetch(t,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+E.a.get("token")}}).then((function(e){return e.json()})).then((function(e){a.setState((function(t){return t.Gifs=e.data,t.isLoaded=!0,{Gifs:t.Gifs,isLoaded:t.isLoaded}}))})).catch((function(e){return console.error(e)}))},a.filterGif=function(){a.setState((function(e){return e.filterText=a.search.value,{filterText:e.filterText}}))},a.state={start:a.getAllGifs(),Gifs:"",isLoaded:!1,upper:9,lower:0,filterText:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=[];this.state.isLoaded&&this.state.Gifs.filter((function(t,a){return a>=e.state.lower&&a<=e.state.upper&&t.title.includes(e.state.filterText)})).forEach((function(e){return t.push(r.a.createElement(Q,{gif:e,key:e.id}))}));return r.a.createElement("div",{className:"gifs"},r.a.createElement("input",{type:"text",placeholder:"search item by title",ref:function(t){return e.search=t},className:"searchBar",onChange:this.filterGif}),t,t.length<1?r.a.createElement("h2",null,"Start by Posting an Article or Gif photos"):r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("input",{type:"button",value:"NEXT",onClick:this.nextPage}),r.a.createElement("input",{type:"button",value:"PREVIOUS",onClick:this.previousPage})))}}]),t}(r.a.Component),ee=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).getAGif=function(){var e=a.props.match.params.id,t="https://teamworksng.herokuapp.com/api/v1/gifs/".concat(e);fetch(t,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+E.a.get("token")}}).then((function(e){return e.json()})).then((function(e){a.setState((function(t){return t.gif=e.data,t.isLoaded=!0,{gif:t.gif,isLoaded:t.isLoaded}}))})).catch((function(e){return console.error(e)}))},a.state={start:a.getAGif(),gif:"",isLoaded:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e;return this.state.isLoaded&&(e=r.a.createElement(Q,{gif:this.state.gif})),r.a.createElement("div",null," ",e," ")}}]),t}(r.a.Component),te=Object(f.f)(ee),ae=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).getFeeds=function(){fetch("https://teamworksng.herokuapp.com/api/v1/feed",{mode:"cors",method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+E.a.get("token")}}).then((function(e){return e.json()})).then((function(e){a.setState({feeds:e.data})}))},a.filterArticle=function(){a.setState((function(e){return e.filterText=a.search.value,{filterText:e.filterText}}))},a.state={start:a.getFeeds(),feeds:"",isLoaded:!1,filterText:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("feedpage")}},{key:"render",value:function(){var e=this,t=[];return this.state.feeds&&this.state.feeds.forEach((function(a){a.url&&a.title.includes(e.state.filterText)&&t.push(r.a.createElement(Q,{gif:a,key:a.id})),a.article&&a.title.includes(e.state.filterText)&&t.push(r.a.createElement(Y,{article:a,key:a.id}))})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"search item by title",ref:function(t){return e.search=t},className:"searchBar",onChange:this.filterArticle}),t)}}]),t}(r.a.Component),ne=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).getProfile=function(){var e=E.a.get("userId"),t="https://teamworksng.herokuapp.com/api/v1/profile/".concat(e);fetch(t,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer "+E.a.get("token")}}).then((function(e){return e.json()})).then((function(e){a.setState({profile:e.data.profile})})).catch((function(e){return console.error(e)}))},a.uploadPic=function(e){e.preventDefault();var t=new FormData;t.append("image",e.target.image.files[0]);fetch("https://teamworksng.herokuapp.com/api/v1/profile",{method:"POST",mode:"cors",headers:{Authorization:"Bearer "+E.a.get("token")},body:t}).then((function(e){return e.json()})).then((function(e){E.a.set("profile_pic",e.data.imageUrl),a.props.pp(),a.pic.value=""})).catch((function(e){return console.error(e)}))},a.state={start:a.getProfile(),profile:"",profilePic:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=E.a.get("userDetails");return r.a.createElement("div",{className:"profile"},r.a.createElement("h4",null,"Profile"),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"First Name:"),"  ",t.firstName," "),r.a.createElement("p",null,r.a.createElement("strong",null,"Last Name:")," ",t.lastName," "),r.a.createElement("p",null,r.a.createElement("strong",null,"Gender:")," ",t.gender," "),r.a.createElement("p",null,r.a.createElement("strong",null,"Email:")," ",t.email," "),r.a.createElement("p",null,r.a.createElement("strong",null,"Address:")," ",t.address||"Lagos Nigeria"," "),r.a.createElement("p",null,r.a.createElement("strong",null,"Department:")," ",t.department," "),r.a.createElement("p",null,r.a.createElement("strong",null,"Job Role:")," ",t.jobRole," ")),r.a.createElement("div",null,r.a.createElement("h4",null," Edit Profile"),r.a.createElement("form",{encType:"multipart/formdata",name:"image",onSubmit:this.uploadPic},r.a.createElement("label",null,"Upload profile pics"),r.a.createElement("input",{type:"file",name:"image",ref:function(t){return e.pic=t},onChange:this.setProfilePic,accept:"image/**"}),r.a.createElement("input",{type:"submit"}))))}}]),t}(r.a.Component),re=a(131),le=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(re.a,{maxWidth:"fixed"},r.a.createElement(w.a,{component:"div",style:{backgroundColor:"#cfe8fc",height:"100vh"}},r.a.createElement("div",{className:"chat"},r.a.createElement("h2",null," Chat room"),r.a.createElement("section",{className:"user-name"},r.a.createElement("input",{type:"text",name:"user-name"})),r.a.createElement("section",{className:"feedback"},r.a.createElement("section",{className:"chat-room"})),r.a.createElement("section",{className:"message"},r.a.createElement("input",{type:"text",name:"message"}),r.a.createElement("button",{onClick:this.chat},"Click")))))}}]),t}(r.a.Component),ce=Object(f.f)(le),oe=a(133),ie=a(134),se=a(135),me=a(136),ue=a(137),pe=a(138),he=a(132);function fe(e){return{id:"scrollable-force-tab-".concat(e),"aria-controls":"scrollable-force-tabpanel-".concat(e)}}var de=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).setPic=function(){a.setState({profile_pic:E.a.get("profile_pic")})},a.handleChange=function(e,t){a.setState({value:t})},a.state={employee:"Oluwatosin Fetuga",profile_pic:E.a.get("profile_pic"),value:0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.value;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",{className:"rule dashhead"},r.a.createElement("span",{className:"material-icons"},"dashboard")," Dashboard"),r.a.createElement("div",{className:"employee-dashboard"},r.a.createElement("h3",null," Welcome ",E.a.get("userName")," "),r.a.createElement("img",{src:this.state.profile_pic,className:"pic",alt:"profile pics",width:"20",heigth:"30"}),r.a.createElement("div",{className:"rule dashboard"},r.a.createElement(b.a,{position:"static",color:"default"},r.a.createElement(g.a,{value:t,onChange:this.handleChange,variant:"scrollable",scrollButtons:"on",indicatorColor:"secondary",textColor:"primary","aria-label":"scrollable force tabs example"},r.a.createElement(v.a,Object.assign({component:h.c,label:"Profile",to:"".concat(this.props.match.url,"/profile"),icon:r.a.createElement(he.a,null)},fe(0))),r.a.createElement(v.a,Object.assign({component:h.c,label:"Gifs",to:"".concat(this.props.match.url,"/gifs/get"),icon:r.a.createElement(oe.a,null)},fe(1))),r.a.createElement(v.a,Object.assign({component:h.c,label:"Articles",to:"".concat(this.props.match.url,"/articles/get"),icon:r.a.createElement(ie.a,null)},fe(2))),r.a.createElement(v.a,Object.assign({component:h.c,label:"Post Gif",to:"".concat(this.props.match.url,"/gifs"),icon:r.a.createElement(se.a,null)},fe(3))),r.a.createElement(v.a,Object.assign({component:h.c,label:"Post Article",to:"".concat(this.props.match.url,"/articles"),icon:r.a.createElement(me.a,null)},fe(4))),r.a.createElement(v.a,Object.assign({component:h.c,label:"Feeds",to:"".concat(this.props.match.url,"/feed"),icon:r.a.createElement(ue.a,null)},fe(5))),r.a.createElement(v.a,Object.assign({component:h.c,label:"Chat",to:"".concat(this.props.match.url,"/chat"),icon:r.a.createElement(pe.a,null)},fe(6))))))),r.a.createElement("div",{className:"display"})),r.a.createElement(f.a,{exact:!0,path:"".concat(this.props.match.path,"/gifs")}," ",r.a.createElement(F,null)," "),r.a.createElement(f.a,{exact:!0,path:"".concat(this.props.match.path,"/articles")}," ",r.a.createElement(U,null)),r.a.createElement(f.a,{exact:!0,path:"".concat(this.props.match.path,"/articles/get")}," ",r.a.createElement(V,null)),r.a.createElement(f.a,{path:"".concat(this.props.match.path,"/articles/get/:id"),render:function(){return r.a.createElement(K,null)}}),r.a.createElement(f.a,{exact:!0,path:"".concat(this.props.match.path,"/gifs/get")}," ",r.a.createElement(Z,null)," "),r.a.createElement(f.a,{path:"".concat(this.props.match.path,"/gifs/get/:id"),render:function(){return r.a.createElement(te,null)}}),r.a.createElement(f.a,{exact:!0,path:"".concat(this.props.match.path,"/feed"),render:function(){return r.a.createElement(ae,null)}}),r.a.createElement(f.a,{path:"".concat(this.props.match.path,"/profile"),render:function(){return r.a.createElement(ne,{pp:e.setPic})}}),r.a.createElement(f.a,{path:"".concat(this.props.match.path,"/chat"),render:function(){return r.a.createElement(ce,null)}}))}}]),t}(r.a.Component),Ee=Object(f.f)(de),be=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){E.a.remove("token"),E.a.remove("userId"),E.a.remove("userName"),E.a.remove("profile_pic"),E.a.remove("userDetails")}},{key:"render",value:function(){return r.a.createElement("div",{className:"signout"},r.a.createElement(h.b,{to:"/api/v1/auth/signin"}," ",r.a.createElement("h2",null,"Go back home"),"  "))}}]),t}(r.a.Component),ge=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(){return r.a.createElement(G,null)}}),r.a.createElement(f.a,{exact:!0,path:"/TeamWork-FrontEnd",render:function(){return r.a.createElement(G,null)}}),r.a.createElement(f.a,{exact:!0,path:"/signout",render:function(){return r.a.createElement(be,{setHead:e.setOut})}}),r.a.createElement(f.a,{exact:!0,path:"/api/v1/auth/signin",render:function(){return r.a.createElement(I,{setHead:e.setHead})}}),r.a.createElement(f.a,{exact:!0,path:"/api/v1/admin",render:function(){return r.a.createElement(P,null)}}),r.a.createElement(f.a,{path:"/api/v1/employee",render:function(){return r.a.createElement(Ee,null)}})),r.a.createElement(p,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[76,1,2]]]);
//# sourceMappingURL=main.40d56227.chunk.js.map