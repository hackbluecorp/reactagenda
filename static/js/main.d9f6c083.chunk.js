(this.webpackJsonpreactagenda=this.webpackJsonpreactagenda||[]).push([[0],{170:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(39),c=a.n(l),o=a(9),i=a(7),s=(a(56),a(90),a(23)),m=a(24),d=a(26),u=a(25),h=(a(70),a(54));a(106);h.initializeApp({apiKey:"AIzaSyBvEExkkpTBf3VYfL7PVScolkMQtP_3q5E",authDomain:"reactagenda-93ffc.firebaseapp.com",databaseURL:"https://reactagenda-93ffc.firebaseio.com",projectId:"reactagenda-93ffc",storageBucket:"reactagenda-93ffc.appspot.com",messagingSenderId:"753510908364",appId:"1:753510908364:web:5396f044547c92efdf9d69"}),h.firestore().settings({});var E=h,p=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onCollectionUpdate=function(e){var t=[];e.forEach((function(e){var a=e.data(),n=a.title,r=a.description,l=a.author,c=a.confirmed,o=a.dateFormatDate;t.push({key:e.id,doc:e,title:n,description:r,author:l,confirmed:c,dateFormatDate:o})})),n.setState({coments:t})},n.ref=E.firestore().collection("coments").orderBy("dateFormatDate","desc"),n.unsubscribe=null,n.state={coments:[],date:new Date},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribe=this.ref.onSnapshot(this.onCollectionUpdate),this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"panel panel-default"},r.a.createElement("div",{class:"panel-heading"},r.a.createElement("h2",{style:{color:"red"}},"APLICATIVO DE AGENDAMIENTO - VERSION DE PRUEBA - BETA 0.0.2"),r.a.createElement("hr",null),r.a.createElement("h3",{class:"panel-title"},"SERVICIOS AGENDADOS")),r.a.createElement("div",{class:"panel-body"},r.a.createElement("h4",null,r.a.createElement(o.b,{to:"/create",class:"btn btn-primary"},"Agendar Nuevo Servicio")),r.a.createElement("div",null,r.a.createElement("strong",null,"Fecha y hora actual ")),r.a.createElement("div",null,r.a.createElement("label",null,this.state.date.toLocaleString("es-Co",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:"false"}))),r.a.createElement("table",{class:"table table-stripe"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Tipo de Servicio"),r.a.createElement("th",null,"Fecha y Hora"),r.a.createElement("th",null,"Nombre del Cliente"),r.a.createElement("th",null,"Agenda Confirmada"))),this.state.coments.map((function(t){return t.dateFormatDate.toDate().toLocaleDateString("en-EN")>e.state.date.toLocaleDateString("en-EN")?r.a.createElement("tbody",null,r.a.createElement("tr",{bgcolor:"#fff"},r.a.createElement("td",null,r.a.createElement(o.b,{to:"/show/".concat(t.key)},t.title)),r.a.createElement("td",null,t.description),r.a.createElement("td",null,t.author),r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",checked:t.confirmed,disabled:!0})))):t.dateFormatDate.toDate().toLocaleDateString("en-EN")==e.state.date.toLocaleDateString("en-EN")?t.dateFormatDate.toDate().toLocaleTimeString("en-GB")>e.state.date.toLocaleTimeString("en-GB")?r.a.createElement("tbody",null,r.a.createElement("tr",{bgcolor:"#fff"},r.a.createElement("td",null,r.a.createElement(o.b,{to:"/show/".concat(t.key)},t.title)),r.a.createElement("td",null,t.description),r.a.createElement("td",null,t.author),r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",checked:t.confirmed,disabled:!0})))):r.a.createElement("tbody",null,r.a.createElement("tr",{bgcolor:"#ddd"},r.a.createElement("td",null,r.a.createElement("s",null,r.a.createElement(o.b,{to:"/show/".concat(t.key)},t.title))),r.a.createElement("td",null,r.a.createElement("s",null,t.description)),r.a.createElement("td",null,r.a.createElement("s",null,t.author)),r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",checked:t.confirmed,disabled:!0})))):t.dateFormatDate.toDate().toLocaleDateString("en-EN")<e.state.date.toLocaleDateString("en-EN")?r.a.createElement("tbody",null,r.a.createElement("tr",{bgcolor:"#ddd"},r.a.createElement("td",null,r.a.createElement("s",null,r.a.createElement(o.b,{to:"/show/".concat(t.key)},t.title))),r.a.createElement("td",null,r.a.createElement("s",null,t.description)),r.a.createElement("td",null,r.a.createElement("s",null,t.author)),r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",checked:t.confirmed,disabled:!0})))):void 0}))))))}}]),a}(n.Component),f=a(43),v=a(34),b=a(42),g=a.n(b),y=(a(73),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n,r;Object(s.a)(this,a);return(r=t.call(this,e)).onChangeOnlyLetters=function(e){var t=r.state;t[e.target.name]=e.target.value,t[e.target.name]=t[e.target.name].replace(/[^A-Za-z\xc0-\xff]/gi," "),r.setState(t)},r.onChangeChecked=function(e){r.setState({confirmed:e.target.checked})},r.onChange=function(e){var t=r.state;t[e.target.name]=e.target.value,r.setState({Coment:t})},r.onSubmit=function(e){e.preventDefault();var t=r.state,a=t.title,n=t.description,l=t.author,c=t.confirmed,o=t.dateFormatDate;E.firestore().collection("coments").doc(r.state.key).set({title:a,description:n,author:l,confirmed:c,dateFormatDate:o}).then((function(e){r.setState({key:"",title:"",description:"",author:"",confirmed:!1,dateFormatDate:""}),r.props.history.push("/")})).catch((function(e){console.error("Error adding document: ",e)}))},r.state=(n={key:"",title:"",description:""},Object(f.a)(n,"description",(new Date).toLocaleString("es-Co",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:"false"})),Object(f.a)(n,"author",""),Object(f.a)(n,"confirmed",!1),Object(f.a)(n,"dateFormatDate",""),n),r.handleChange=r.handleChange.bind(Object(v.a)(r)),r}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.firestore().collection("coments").doc(this.props.match.params.id).get().then((function(t){if(t.exists){var a=t.data();e.setState({key:t.id,title:a.title,description:a.description,author:a.author,confirmed:a.confirmed,dateFormatDate:a.dateFormatDate})}else console.log("No such document!")}))}},{key:"handleChange",value:function(e){this.setState({startDate:e,description:e.toLocaleString("es-Co",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:"false"}),dateFormatDate:e})}},{key:"render",value:function(){return r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"panel panel-default"},r.a.createElement("div",{class:"panel-heading"},r.a.createElement("h2",{style:{color:"red"}},"APLICATIVO DE AGENDAMIENTO - VERSION DE PRUEBA - BETA 0.0.2"),r.a.createElement("hr",null),r.a.createElement("h3",{class:"panel-title"},"EDITAR AGENDAMIENTO")),r.a.createElement("div",{class:"panel-body"},r.a.createElement("h4",null,r.a.createElement(o.b,{to:"/show/".concat(this.state.key),class:"btn btn-primary"},"Volver")),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"select-service"},"Tipo de Servicio"),r.a.createElement("div",null,r.a.createElement("select",{name:"title",id:"select-service",value:this.state.title,onChange:this.onChange,required:!0},r.a.createElement("option",{value:"",selected:!0,disabled:!0,hidden:!0},"Escoge un Servicio..."),r.a.createElement("option",{value:"Servicio 1"},"Servicio 1"),",",r.a.createElement("option",{value:"Servicio 2"},"Servicio 2"),",",r.a.createElement("option",{value:"Servicio 3"},"Servicio 3")))),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"description"},"Fecha y Hora"),r.a.createElement("div",null,r.a.createElement(g.a,{selected:this.state.startDate,onChange:this.handleChange,showTimeSelect:!0,locale:"es",timeFormat:"h:mm aa",name:"startDate",timeIntervals:15,timeCaption:"Hora",dateFormat:"d MMMM, yyyy h:mm aa",className:"form-control",placeholderText:this.state.description}))),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"author"},"Nombre del Cliente"),r.a.createElement("input",{type:"text",class:"form-control",name:"author",value:this.state.author,onChange:this.onChangeOnlyLetters,placeholder:"Nombre del Cliente",required:!0})),r.a.createElement("div",{class:"form-group"},r.a.createElement("div",null,r.a.createElement("label",{for:"confirmed"},"Agenda Confirmada"),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",value:this.state.confirmed,checked:this.state.confirmed,onChange:this.onChangeChecked})))),r.a.createElement("button",{type:"submit",class:"btn btn-success"},"Guardar Cambios")))))}}]),a}(n.Component)),D=a(84);Object(b.registerLocale)("es",D.a);var C=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(s.a)(this,a);return(n=t.call(this,e)).onChangeOnlyLetters=function(e){var t=n.state;t[e.target.name]=e.target.value,t[e.target.name]=t[e.target.name].replace(/[^A-Za-z\xc0-\xff]/gi," "),n.setState(t)},n.onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,a=t.title,r=t.description,l=t.author,c=t.confirmed,o=t.dateFormatDate;n.ref.add({title:a,description:r,author:l,confirmed:c,dateFormatDate:o}).then((function(e){n.setState({title:"",description:"",author:"",confirmed:!1,dateFormatDate:""}),n.props.history.push("/")})).catch((function(e){console.error("Error adding document: ",e)}))},n.ref=E.firestore().collection("coments"),n.state={title:"",description:(new Date).toLocaleString("es-Co",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:"false"}),author:"",confirmed:!1,dateFormatDate:"",startDate:new Date},n.handleChange=n.handleChange.bind(Object(v.a)(n)),n}return Object(m.a)(a,[{key:"handleChange",value:function(e){this.setState({startDate:e,description:e.toLocaleString("es-Co",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:"false"}),dateFormatDate:e})}},{key:"render",value:function(){var e=this.state,t=e.title,a=(e.description,e.author);e.confirmed;return r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"panel panel-default"},r.a.createElement("div",{class:"panel-heading"},r.a.createElement("h2",{style:{color:"red"}},"APLICATIVO DE AGENDAMIENTO - VERSION DE PRUEBA - BETA 0.0.2"),r.a.createElement("hr",null),r.a.createElement("h3",{class:"panel-title"},"AGENDAR NUEVO SERVICIO")),r.a.createElement("div",{class:"panel-body"},r.a.createElement("h4",null,r.a.createElement(o.b,{to:"/",class:"btn btn-primary"},"Volver")),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"select-service"},"Tipo de Servicio"),r.a.createElement("div",null,r.a.createElement("select",{name:"title",id:"select-service",value:t,onChange:this.onChange,required:!0},r.a.createElement("option",{value:"",selected:!0,disabled:!0,hidden:!0},"Escoge un Servicio..."),r.a.createElement("option",{value:"Servicio 1"},"Servicio 1"),",",r.a.createElement("option",{value:"Servicio 2"},"Servicio 2"),",",r.a.createElement("option",{value:"Servicio 3"},"Servicio 3")))),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"description"},"Fecha y Hora"),r.a.createElement("div",null,r.a.createElement(g.a,{selected:this.state.startDate,onChange:this.handleChange,showTimeSelect:!0,locale:"es",timeFormat:"h:mm aa",name:"startDate",timeIntervals:15,timeCaption:"Hora",dateFormat:"d MMMM, yyyy h:mm aa",className:"form-control",required:!0}))),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"author"},"Nombre del Cliente"),r.a.createElement("input",{type:"text",class:"form-control",name:"author",value:a,onChange:this.onChangeOnlyLetters,placeholder:"Nombre del Cliente",required:!0})),r.a.createElement("div",{class:"form-group"},r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",disabled:!0,hidden:!0}))),r.a.createElement("button",{type:"submit",class:"btn btn-success"},"Aceptar")))))}}]),a}(n.Component),S=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={Coment:{},key:""},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.firestore().collection("coments").doc(this.props.match.params.id).get().then((function(t){t.exists?e.setState({Coment:t.data(),key:t.id,isLoading:!1}):console.log("No such document!")}))}},{key:"delete",value:function(e){var t=this;E.firestore().collection("coments").doc(e).delete().then((function(){alert("Registro Eliminado Exitosamente!!"),console.log("Document successfully deleted!"),t.props.history.push("/")})).catch((function(e){console.error("Error removing document: ",e)}))}},{key:"render",value:function(){return r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"panel panel-default"},r.a.createElement("div",{class:"panel-heading"},r.a.createElement("h2",{style:{color:"red"}},"APLICATIVO DE AGENDAMIENTO - VERSION DE PRUEBA - BETA 0.0.2"),r.a.createElement("hr",null),r.a.createElement("h3",{class:"panel-title"},"DETALLE DEL AGENDAMIENTO"),r.a.createElement("h4",null,r.a.createElement(o.b,{to:"/",class:"btn btn-primary"},"Volver")),r.a.createElement("h3",{class:"panel-title"},this.state.Coment.title)),r.a.createElement("div",{class:"panel-body"},r.a.createElement("dl",null,r.a.createElement("dt",null,"Fecha y Hora"),r.a.createElement("dd",null,this.state.Coment.description),r.a.createElement("dt",null,"Nombre del Cliente"),r.a.createElement("dd",null,this.state.Coment.author),r.a.createElement("dt",null,"Agenda Confirmada"),r.a.createElement("dd",null,r.a.createElement("input",{type:"checkbox",checked:this.state.Coment.confirmed,disabled:!0}))),r.a.createElement(o.b,{to:"/edit/".concat(this.state.key),class:"btn btn-success"},"Editar"),"\xa0",r.a.createElement("button",{onClick:this.delete.bind(this,this.state.key),class:"btn btn-danger"},"Eliminar"))))}}]),a}(n.Component);c.a.render(r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(i.a,{exact:!0,path:"/",component:p}),r.a.createElement(i.a,{path:"/edit/:id",component:y}),r.a.createElement(i.a,{path:"/create",component:C}),r.a.createElement(i.a,{path:"/show/:id",component:S}))),document.getElementById("root"))},70:function(e,t,a){},85:function(e,t,a){e.exports=a(170)},90:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.d9f6c083.chunk.js.map