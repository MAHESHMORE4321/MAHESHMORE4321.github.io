(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,a,t){e.exports=t(56)},56:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),c=t.n(r),s=t(1),i=t(2),m=t(4),o=t(3),d=t(5),p="https://sym-api-dev.herokuapp.com/sym-api/",u=p+"emailservice/send-feedback-email",h=t(7),E=t.n(h),f=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={sidebar_:[]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://sym-api-dev.herokuapp.com/sym-api/me/sidebar").then(function(a){e.setState({sidebar_:a.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state.sidebar_;return l.a.createElement(l.a.Fragment,null,l.a.createElement("aside",{id:"sym-aside",className:"border js-fullheight",style:{backgroundImage:"url(".concat(e.background_picture_link,")"),backgroundSize:"cover"}},l.a.createElement("div",{className:"text-center"},l.a.createElement("div",{className:"author-img",style:{backgroundImage:"url(".concat(e.profile_picture_link,")")}}),l.a.createElement("h1",{id:"sym-logo"},l.a.createElement("a",{href:"index.html"},e.name)),l.a.createElement("span",{className:"position"},e.job_title),l.a.createElement("div",{className:"sym-footer margin-top-bottom"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:e.facebook_link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-facebook2"}))),l.a.createElement("li",null,l.a.createElement("a",{href:e.twitter_link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-twitter2"}))),l.a.createElement("li",null,l.a.createElement("a",{href:e.instgram_link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-instagram"}))),l.a.createElement("li",null,l.a.createElement("a",{href:e.linkedin_link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-linkedin2"}))),l.a.createElement("li",null,l.a.createElement("a",{href:e.github_link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-github"}))),l.a.createElement("li",null,l.a.createElement("a",{href:e.website_link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-blogger2"})))))),l.a.createElement("nav",{id:"sym-main-menu",role:"navigation",className:"navbar"},l.a.createElement("div",{id:"navbar",className:"collapse"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#aboutme","data-nav-section":"aboutme",className:"fontSize15"},"About_Me")),l.a.createElement("li",null,l.a.createElement("a",{href:"#education","data-nav-section":"education",className:"fontSize15"},"Education")),l.a.createElement("li",null,l.a.createElement("a",{href:"#skill","data-nav-section":"skill",className:"fontSize15"},"Skill")),l.a.createElement("li",null,l.a.createElement("a",{href:"#experience","data-nav-section":"experience",className:"fontSize15"},"Experience")),l.a.createElement("li",null,l.a.createElement("a",{href:"#project","data-nav-section":"project",className:"fontSize15"},"Project")),l.a.createElement("li",null,l.a.createElement("a",{href:"#contactme","data-nav-section":"contactme",className:"fontSize15"},"Contact_Me"))))),l.a.createElement("div",{className:"sym-footer margin-top-bottom"},l.a.createElement("small",{className:"fontSize15"},"Made with ",l.a.createElement("i",{className:"icon-heart","aria-hidden":"true"})," and ",l.a.createElement("i",{className:"icon-beer","aria-hidden":"true"})),l.a.createElement("br",null),l.a.createElement("small",null,"Copyright \xa92020 All rights reserved")),l.a.createElement("div",{className:"sym-footer margin-top-bottom"},l.a.createElement("small",null,"Thanks ",l.a.createElement("a",{href:"https://colorlib.com/wp/template/jackson/",target:"_blank",rel:"noopener noreferrer"},"Colorlib")," for inspiration"))))}}]),a}(n.Component),v=t(6),g=t.n(v),b=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{style:{backgroundImage:"url(".concat(this.props.data&&void 0!==this.props.data.backgroundImg&&this.props.data.backgroundImg,")")}},l.a.createElement("div",{className:"overlay"}),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text"},l.a.createElement("div",{className:"slider-text-inner js-fullheight"},l.a.createElement("div",{className:"desc"},l.a.createElement("h1",null,this.props.data&&void 0!==this.props.data.headerLine&&g()(this.props.data.headerLine)),l.a.createElement("p",null,l.a.createElement("a",{className:"btn btn-primary btn-learn",href:this.props.data&&void 0!==this.props.data.link&&this.props.data.link,rel:"noopener noreferrer"},this.props.data&&void 0!==this.props.data.text&&g()(this.props.data.text),l.a.createElement("i",{className:this.props.data&&void 0!==this.props.data.icon&&this.props.data.icon}))))))))))}}]),a}(n.Component),N=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={heroarea_:[]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this;E.a.get("https://sym-api-dev.herokuapp.com/sym-api/me/heroarea").then(function(a){e.setState({heroarea_:a.data})}).catch(function(e){console.log("error :: "+e)})}},{key:"componentDidMount",value:function(){y()}},{key:"componentDidUpdate",value:function(){y()}},{key:"render",value:function(){var e=this.state.heroarea_;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"sym-hero",className:"js-fullheight","data-section":"home"},l.a.createElement("div",{className:"flexslider js-fullheight"},l.a.createElement("ul",{className:"slides"},e.map(function(e){return l.a.createElement(b,{key:e.icon,data:e})})))))}}]),a}(n.Component);function y(){var e=document.createElement("script");e.src="/js/main.js",document.getElementsByTagName("head")[0].appendChild(e)}var j=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"col-md-4 text-center animate-box"},l.a.createElement("div",{className:this.props.data&&void 0!==this.props.data.services_color&&this.props.data.services_color},l.a.createElement("span",{className:"icon"},l.a.createElement("i",{className:this.props.data&&void 0!==this.props.data.icon&&this.props.data.icon})),l.a.createElement("div",{className:"desc"},l.a.createElement("h3",null,this.props.data&&void 0!==this.props.data.desc&&this.props.data.desc))))}}]),a}(n.Component),k=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={intro_Str:"",intro_ExpertieList:[]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this;E.a.get("https://sym-api-dev.herokuapp.com/sym-api/me/introduction").then(function(a){e.setState({intro_Str:a.data.introduction}),e.setState({intro_ExpertieList:a.data.introExpertieList})}).catch(function(e){console.log("error :: "+e)})}},{key:"componentDidMount",value:function(){O()}},{key:"componentDidUpdate",value:function(){O()}},{key:"render",value:function(){var e=this.state,a=e.intro_Str,t=e.intro_ExpertieList;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"sym-about","data-section":"aboutme"},l.a.createElement("div",{className:"sym-narrow-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"row row-bottom-padded-sm animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"about-desc"},l.a.createElement("span",{className:"heading-meta"},"About Me"),l.a.createElement("h2",{className:"sym-heading"},"Who Am I?"),a&&g()(a)))))))),l.a.createElement("hr",{style:{margin:"0px"}}),l.a.createElement("section",{className:"sym-services","data-section":"aboutme1"},l.a.createElement("div",{className:"sym-narrow-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-md-offset-3 col-md-pull-3 animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("span",{className:"heading-meta"},"What I do?"),l.a.createElement("h2",{className:"sym-heading"},"Here are some of my expertise"))),l.a.createElement("div",{className:"row row-pt-md"},t.map(function(e){return l.a.createElement(j,{key:e.icon,data:e})})))))}}]),a}(n.Component);function O(){var e=document.createElement("script");e.src="/js/main.js",document.getElementsByTagName("head")[0].appendChild(e)}var x=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("article",{className:"timeline-entry animate-box fadeInLeft animated","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"timeline-entry-inner"},l.a.createElement("div",{className:this.props.data.icon},l.a.createElement("i",{className:"icon-pen2"})),l.a.createElement("div",{className:"timeline-label",style:{padding:"0px"}},l.a.createElement("div",{className:"panel panel-default"},l.a.createElement("div",{className:"panel-heading",role:"tab",id:"headingOne",style:{border:"none"}},l.a.createElement("h4",{className:"panel-title"},l.a.createElement("a",{"data-toggle":"collapse","data-parent":"#accordion",href:"#"+this.props.data.id,"aria-expanded":"false","aria-controls":"collapseOne",className:"collapsed"},l.a.createElement("p",{style:{margin:"0"}},g()(this.props.data.std_branch)),l.a.createElement("p",{style:{margin:"0"}},g()(this.props.data.institute)),l.a.createElement("p",{style:{margin:"0"}},g()(this.props.data.university)),l.a.createElement("p",{style:{margin:"0"}},g()(this.props.data.year))))),l.a.createElement("div",{id:this.props.data.id,className:"panel-collapse collapse",role:"tabpanel","aria-labelledby":"headingOne","aria-expanded":"false",style:{height:"0px"}},this.props.data.desc&&l.a.createElement("div",{className:"panel-body"},l.a.createElement("div",{className:"row"},l.a.createElement("p",{style:{lineheight:"1.4",margin:"0"}},g()(this.props.data.desc))))))))))}}]),a}(n.Component),_=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={education_:[],loaded:!1},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this;E.a.get("https://sym-api-dev.herokuapp.com/sym-api/me/education").then(function(a){e.setState({education_:a.data})}).catch(function(e){console.log("error :: "+e)})}},{key:"render",value:function(){var e=this.state.education_;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"sym-experience","data-section":"education"},l.a.createElement("div",{className:"sym-narrow-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-md-offset-3 col-md-pull-3 animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("span",{className:"heading-meta"},"Academics"),l.a.createElement("h2",{className:"sym-heading animate-box"},"Education")),l.a.createElement("div",{className:"row",style:{margintop:"20px"}},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"timeline-centered"},e.map(function(e){return l.a.createElement(x,{key:e.id,data:e})}),l.a.createElement("article",{className:"timeline-entry begin animate-box","data-animate-effect":"fadeInBottom"},l.a.createElement("div",{className:"timeline-entry-inner"},l.a.createElement("div",{className:"timeline-icon color-none"}))))))))))}}]),a}(n.Component),w=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"panel panel-default"},l.a.createElement("div",{className:"panel-heading",role:"tab",id:"headingTwo"},l.a.createElement("h4",{className:"panel-title"},l.a.createElement("a",{className:"collapsed","data-toggle":"collapse","data-parent":"#accordion",href:"#"+this.props.data.id,"aria-expanded":"false","aria-controls":"collapseTwo"},this.props.data.skillHeader))),l.a.createElement("div",{id:this.props.data.id,className:"panel-collapse collapse",role:"tabpanel","aria-labelledby":"headingTwo"},l.a.createElement("div",{className:"panel-body"},l.a.createElement("div",{className:"row"},this.props.data.skillList.map(function(e){return l.a.createElement("div",{key:e,className:"col-3 col-md-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xs-3"},l.a.createElement("p",{style:{lineheight:"1.4",margin:"0"}},l.a.createElement("i",{className:"fa fa-circle","aria-hidden":"true",style:{verticalalign:"middle",fontsize:"8px"}},"\xa0\xa0"),g()(e)))})))))}}]),a}(n.Component),S=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={skill_:[],loaded:!1},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this;E.a.get("https://sym-api-dev.herokuapp.com/sym-api/me/skill").then(function(a){e.setState({skill_:a.data})}).catch(function(e){console.log("error :: "+e)})}},{key:"render",value:function(){var e=this.state.skill_;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"sym-skills","data-section":"skill"},l.a.createElement("div",{className:"sym-narrow-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-md-offset-3 col-md-pull-3 animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("span",{className:"heading-meta"},"My Skills"),l.a.createElement("h2",{className:"sym-heading animate-box"},"Technical Skills"))),l.a.createElement("div",{className:"row",style:{margintop:"15px"}},l.a.createElement("div",{className:"col-md-12 animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"fancy-collapse-panel"},l.a.createElement("div",{className:"panel-group",id:"accordion",role:"tablist","aria-multiselectable":"true"},e.map(function(e){return l.a.createElement(w,{key:e.id,data:e})}))))))))}}]),a}(n.Component),I=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("article",{className:"timeline-entry animate-box fadeInLeft animated","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"timeline-entry-inner"},l.a.createElement("div",{className:this.props.data.icon},l.a.createElement("i",{className:"icon-pen2"})),l.a.createElement("div",{className:"timeline-label",style:{padding:"0px"}},l.a.createElement("div",{className:"panel panel-default"},l.a.createElement("div",{className:"panel-heading",role:"tab",id:"headingOne",style:{border:"none"}},l.a.createElement("h4",{className:"panel-title"},l.a.createElement("a",{"data-toggle":"collapse","data-parent":"#accordion",href:"#"+this.props.data.id,"aria-expanded":"false","aria-controls":"collapseOne",className:"collapsed"},l.a.createElement("p",{style:{margin:"0"}},g()(this.props.data.job_compy_desig)),l.a.createElement("p",{style:{margin:"0"}},g()(this.props.data.job_duration))))),l.a.createElement("div",{id:this.props.data.id,className:"panel-collapse collapse",role:"tabpanel","aria-labelledby":"headingOne","aria-expanded":"false",style:{height:"0px"}},l.a.createElement("div",{className:"panel-body"},l.a.createElement("div",{className:"row"},this.props.data.job_desc.map(function(e){return l.a.createElement("p",{key:e,style:{lineheight:"1.4",margin:"0"}},l.a.createElement("i",{className:"fa fa-circle","aria-hidden":"true",style:{verticalalign:"middle",fontsize:"8px"}},"\xa0\xa0"),g()(e))})))))))))}}]),a}(n.Component),C=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={experience_:[],loaded:!1},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this;E.a.get("https://sym-api-dev.herokuapp.com/sym-api/me/experience").then(function(a){e.setState({experience_:a.data})}).catch(function(e){console.log("error :: "+e)})}},{key:"render",value:function(){var e=this.state.experience_;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"sym-experience","data-section":"experience"},l.a.createElement("div",{className:"sym-narrow-content"},l.a.createElement("div",{className:"row",style:{marginbottom:"2em"}},l.a.createElement("div",{className:"col-md-6 col-md-offset-3 col-md-pull-3 animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("span",{className:"heading-meta"},"Experience"),l.a.createElement("h2",{className:"sym-heading animate-box"},"Work Experience"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"timeline-centered"},e.map(function(e){return l.a.createElement(I,{key:e.id,data:e})}),l.a.createElement("article",{className:"timeline-entry begin animate-box","data-animate-effect":"fadeInBottom"},l.a.createElement("div",{className:"timeline-entry-inner"},l.a.createElement("div",{className:"timeline-icon color-none"})))))))))}}]),a}(n.Component),L=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("article",{className:"timeline-entry animate-box fadeInLeft animated","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"timeline-entry-inner"},l.a.createElement("div",{className:this.props.data.prj_icon},l.a.createElement("i",{className:"icon-pen2"})),l.a.createElement("div",{className:"timeline-label",style:{padding:"0px"}},l.a.createElement("div",{className:"panel panel-default"},l.a.createElement("div",{className:"panel-heading",role:"tab",id:"headingOne",style:{border:"none"}},l.a.createElement("h4",{className:"panel-title"},l.a.createElement("a",{"data-toggle":"collapse","data-parent":"#accordion",href:"#"+this.props.data.id,"aria-expanded":"false","aria-controls":"collapseOne",className:"collapsed"},l.a.createElement("p",{style:{margin:"0"}},g()(this.props.data.prj_nm)),l.a.createElement("p",{style:{margin:"0"}},g()(this.props.data.prj_org)),l.a.createElement("p",{style:{margin:"0"}},g()(this.props.data.prj_clnt)),l.a.createElement("p",{style:{margin:"0"}},g()(this.props.data.prj_dur))))),l.a.createElement("div",{id:this.props.data.id,className:"panel-collapse collapse",role:"tabpanel","aria-labelledby":"headingOne","aria-expanded":"false",style:{height:"0px"}},l.a.createElement("div",{className:"panel-body"},l.a.createElement("div",{className:"row"},l.a.createElement("p",{style:{lineheight:"1.4",margin:"0"}},g()(this.props.data.prj_tec)),l.a.createElement("p",{style:{lineheight:"1.4",margin:"0"}},g()(this.props.data.prj_typ)),l.a.createElement("p",{style:{lineheight:"1.4",margin:"0"}},g()(this.props.data.prj_env)),l.a.createElement("p",{style:{lineheight:"1.4",margin:"0"}},g()(this.props.data.prj_role)),l.a.createElement("p",{style:{lineheight:"1.4",margin:"0"}},g()(this.props.data.prj_tmsz)),l.a.createElement("br",null),l.a.createElement("p",{style:{margin:"0"}},l.a.createElement("b",null,"Project Description")," : "),l.a.createElement("p",{style:{lineheight:"1.4",margin:"0"}},g()(this.props.data.prj_desc)),l.a.createElement("br",null),l.a.createElement("p",{style:{margin:"0"}},l.a.createElement("b",null,"Roles and Responsibilities")," : "),this.props.data.prj_rl_desc.map(function(e){return l.a.createElement("p",{key:e,style:{lineheight:"1.4",margin:"0"}},l.a.createElement("i",{className:"fa fa-circle","aria-hidden":"true",style:{verticalalign:"middle",fontsize:"8px"}},"\xa0\xa0"),g()(e))})))))))))}}]),a}(n.Component),M=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={project_:[],loaded:!1},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this;E.a.get("https://sym-api-dev.herokuapp.com/sym-api/me/project").then(function(a){e.setState({project_:a.data})}).catch(function(e){console.log("error :: "+e)})}},{key:"render",value:function(){var e=this.state.project_;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"sym-experience","data-section":"project"},l.a.createElement("div",{className:"sym-narrow-content"},l.a.createElement("div",{className:"row",style:{marginbottom:"2em"}},l.a.createElement("div",{className:"col-md-6 col-md-offset-3 col-md-pull-3 animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("span",{className:"heading-meta"},"Project"),l.a.createElement("h2",{className:"sym-heading animate-box"},"Professional Project"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"timeline-centered"},e.map(function(e){return l.a.createElement(L,{key:e.id,data:e})}),l.a.createElement("article",{className:"timeline-entry begin animate-box","data-animate-effect":"fadeInBottom"},l.a.createElement("div",{className:"timeline-entry-inner"},l.a.createElement("div",{className:"timeline-icon color-none"})))))))))}}]),a}(n.Component),z=t(21),F=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).changeHandler=function(e){t.setState(Object(z.a)({},e.target.name,e.target.value))},t.submtHandler=function(e){e.preventDefault(),t.setState({loading:!0}),E.a.post(u,t.state).then(function(e){t.setState({loading:!1}),e.data.mailSendResponseFlag?alert("Message Succesfully sent, i will get back you soon"):alert("It's Seems That the Server Error, But you still contact me over mail, i will get back you soon")}).catch(function(e){t.setState({loading:!1}),console.log(e),alert("It's Seems That the Server Error, But you still contact me over mail, i will get back you soon")})},t.state={name:"",email:"",subject:"",message:"",feedback:"my-portfolio",loading:!1,contactme_:[]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://sym-api-dev.herokuapp.com/sym-api/me/contactme").then(function(a){e.setState({contactme_:a.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state,a=e.contactme_,t=e.name,n=e.email,r=e.subject,c=e.message,s=e.loading;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 animate-box fadeInLeft animated","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"hire"},l.a.createElement("h2",null,"Something coming soon !!!")))),l.a.createElement("section",{id:"sec_contactme",className:"sym-contact","data-section":"contactme"},l.a.createElement("div",{className:"sym-narrow-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-md-offset-3 col-md-pull-3 animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("span",{className:"heading-meta"},"Get in Touch"),l.a.createElement("h2",{className:"sym-heading"},"Contact"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-5"},l.a.createElement("div",{className:"sym-feature sym-feature-sm animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"sym-icon"},l.a.createElement("i",{className:"icon-globe-outline"})),l.a.createElement("div",{className:"sym-text"},l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:"+a.emailId},a.emailId)))),l.a.createElement("div",{className:"sym-feature sym-feature-sm animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"sym-icon"},l.a.createElement("i",{className:"icon-map"})),l.a.createElement("div",{className:"sym-text"},l.a.createElement("p",null,a.address))),l.a.createElement("div",{className:"sym-feature sym-feature-sm animate-box","data-animate-effect":"fadeInLeft"},l.a.createElement("div",{className:"sym-icon"},l.a.createElement("i",{className:"icon-phone"})),l.a.createElement("div",{className:"sym-text"},l.a.createElement("p",null,l.a.createElement("a",{href:"tel://"},a.mobileNumber))))),l.a.createElement("div",{className:"col-md-7 col-md-push-1"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-10 col-md-offset-1 col-md-pull-1 animate-box","data-animate-effect":"fadeInRight"},l.a.createElement("form",{onSubmit:this.submtHandler},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.changeHandler,className:"form-control",placeholder:"Name",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"email",value:n,onChange:this.changeHandler,className:"form-control",placeholder:"Email",required:!0,pattern:"^[a-zA-Z0-9]+(\\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*(\\.[a-zA-Z]{2,15})$"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"subject",value:r,onChange:this.changeHandler,className:"form-control",placeholder:"Subject",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{name:"message",value:c,onChange:this.changeHandler,id:"message",cols:"30",rows:"7",className:"form-control",placeholder:"Message",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-send-message"},s&&l.a.createElement("i",{className:"fa fa-refresh fa-spin",style:{marginRight:"5px"}}),s&&l.a.createElement("span",null,"Sending Message"),!s&&l.a.createElement("span",null,"Send Message")))))))))))}}]),a}(n.Component),W=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"sym-main"},l.a.createElement("hr",{className:"no-margin"}),l.a.createElement(N,null),l.a.createElement("hr",{className:"no-margin"}),l.a.createElement(k,null),l.a.createElement("hr",{className:"no-margin"}),l.a.createElement(_,null),l.a.createElement("hr",{className:"no-margin"}),l.a.createElement(S,null),l.a.createElement("hr",{className:"no-margin"}),l.a.createElement(C,null),l.a.createElement("hr",{className:"no-margin"}),l.a.createElement(M,null),l.a.createElement("hr",{className:"no-margin"}),l.a.createElement(F,null),l.a.createElement("hr",{className:"no-margin"}))}}]),a}(n.Component),A=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"sym-page"},l.a.createElement("a",{href:"# ",className:"js-sym-nav-toggle sym-nav-toggle","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"},l.a.createElement("i",null)),l.a.createElement(f,null),l.a.createElement(W,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.841f7d09.chunk.js.map