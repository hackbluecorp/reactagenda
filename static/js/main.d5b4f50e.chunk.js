(this.webpackJsonpreactagenda=this.webpackJsonpreactagenda||[]).push([[0],{160:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(38),c=a.n(l),o=a(9),i=a(7),s=(a(52),a(89),a(22)),m=a(23),d=a(25),u=a(24),h=(a(36),a(12)),E=(a(54),a(55),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onCollectionUpdate=function(e){var t=[];e.forEach((function(e){var a=e.data(),n=a.service,r=a.dateFormatString,l=a.client,c=a.confirmed,o=a.dateFormatDate;t.push({key:e.id,doc:e,service:n,dateFormatString:r,client:l,confirmed:c,dateFormatDate:o})})),n.setState({agendas:t})},n.ref=h.firestore().collection("agendas").orderBy("dateFormatDate","desc"),n.unsubscribe=null,n.state={agendas:[],date:new Date},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribe=this.ref.onSnapshot(this.onCollectionUpdate),this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"activeDate",value:function(e){return r.a.createElement("tbody",null,r.a.createElement("tr",{bgcolor:"#fff"},r.a.createElement("td",null,r.a.createElement(o.b,{to:"/show/".concat(e.key),class:"btn btn-primary btn-sm"},"Detalle")),r.a.createElement("td",null,e.service),r.a.createElement("td",null,e.dateFormatString),r.a.createElement("td",null,e.client),r.a.createElement("td",null,r.a.createElement("input",{style:{width:16,height:16},type:"checkbox",checked:e.confirmed}))))}},{key:"noActiveDate",value:function(e){return r.a.createElement("tbody",null,r.a.createElement("tr",{bgcolor:"#ddd"},r.a.createElement("td",null,r.a.createElement(o.b,{to:"/show/".concat(e.key),class:"btn btn-primary btn-sm"},"Detalle")),r.a.createElement("td",null,r.a.createElement("s",null,e.service)),r.a.createElement("td",null,r.a.createElement("s",null,e.dateFormatString)),r.a.createElement("td",null,r.a.createElement("s",null,e.client)),r.a.createElement("td",null,r.a.createElement("input",{style:{width:16,height:16},type:"checkbox",checked:e.confirmed}))))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"panel panel-default"},r.a.createElement("div",{class:"panel-heading"},r.a.createElement("h3",{class:"panel-title"},"SERVICIOS AGENDADOS")),r.a.createElement("div",{class:"panel-body"},r.a.createElement("h4",null,r.a.createElement(o.b,{to:"/create",class:"btn btn-primary"},"Agendar Nuevo Servicio")),r.a.createElement("div",null,r.a.createElement("strong",null,"Fecha y hora actual ")),r.a.createElement("div",null,r.a.createElement("label",null,this.state.date.toLocaleString("es-Co",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:"false"}))),r.a.createElement("table",{class:"table table-stripe"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Detalle del Servicio"),r.a.createElement("th",null,"Tipo de Servicio"),r.a.createElement("th",null,"Fecha y Hora"),r.a.createElement("th",null,"Nombre del Cliente"),r.a.createElement("th",null,"Agenda Confirmada"))),this.state.agendas.map((function(t){if(t.dateFormatDate.toDate().getFullYear("en-EN")>e.state.date.getFullYear("en-EN"))return e.activeDate(t);if(t.dateFormatDate.toDate().getFullYear("en-EN")<e.state.date.getFullYear("en-EN"))return e.noActiveDate(t);if(t.dateFormatDate.toDate().getFullYear("en-EN")==e.state.date.getFullYear("en-EN")){if(t.dateFormatDate.toDate().getMonth("en-EN")>e.state.date.getMonth("en-EN"))return e.activeDate(t);if(t.dateFormatDate.toDate().getMonth("en-EN")<e.state.date.getMonth("en-EN"))return e.noActiveDate(t);if(t.dateFormatDate.toDate().getMonth("en-EN")==e.state.date.getMonth("en-EN")){if(t.dateFormatDate.toDate().getDate("en-EN")>e.state.date.getDate("en-EN"))return e.activeDate(t);if(t.dateFormatDate.toDate().getDate("en-EN")<e.state.date.getDate("en-EN"))return e.noActiveDate(t);if(t.dateFormatDate.toDate().getDate("en-EN")==e.state.date.getDate("en-EN")){if(t.dateFormatDate.toDate().getHours("en-EN")>e.state.date.getHours("en-EN"))return e.activeDate(t);if(t.dateFormatDate.toDate().getHours("en-EN")<e.state.date.getHours("en-EN"))return e.noActiveDate(t);if(t.dateFormatDate.toDate().getHours("en-EN")==e.state.date.getHours("en-EN")){if(t.dateFormatDate.toDate().getMinutes("en-EN")>e.state.date.getMinutes("en-EN"))return e.activeDate(t);if(t.dateFormatDate.toDate().getMinutes("en-EN")<e.state.date.getMinutes("en-EN"))return e.noActiveDate(t);if(t.dateFormatDate.toDate().getMinutes("en-EN")==e.state.date.getMinutes("en-EN"))return t.dateFormatDate.toDate().getSeconds("en-EN")>=e.state.date.getSeconds("en-EN")?e.activeDate(t):e.noActiveDate(t)}}}}}))))))}}]),a}(n.Component)),g=a(35),v=a(31),f=a(41),p=a.n(f),b=(a(72),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n,r;Object(s.a)(this,a);return(r=t.call(this,e)).onChangeOnlyLetters=function(e){var t=r.state;t[e.target.name]=e.target.value,t[e.target.name]=t[e.target.name].replace(/[^A-Za-z\xc0-\xff]/gi," "),r.setState(t)},r.onChangeChecked=function(e){r.setState({confirmed:e.target.checked})},r.onChange=function(e){var t=r.state;t[e.target.name]=e.target.value,r.setState({Coment:t})},r.onSubmit=function(e){e.preventDefault();var t=r.state,a=t.service,n=t.dateFormatString,l=t.client,c=t.confirmed,o=t.dateFormatDate;h.firestore().collection("agendas").doc(r.state.key).set({service:a,dateFormatString:n,client:l,confirmed:c,dateFormatDate:o}).then((function(e){r.setState({key:"",service:"",dateFormatString:"",client:"",confirmed:!1,dateFormatDate:""}),r.props.history.push("/")})).catch((function(e){console.error("Error adding document: ",e)})),alert("Registro Editado Exitosamente!!")},r.state=(n={service:"",dateFormatString:""},Object(g.a)(n,"dateFormatString",(new Date).toLocaleString("es-Co",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:"false"})),Object(g.a)(n,"client",""),Object(g.a)(n,"confirmed",!1),Object(g.a)(n,"key",""),Object(g.a)(n,"dateFormatDate",""),n),r.handleChange=r.handleChange.bind(Object(v.a)(r)),r}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.firestore().collection("agendas").doc(this.props.match.params.id).get().then((function(t){if(t.exists){var a=t.data();e.setState({key:t.id,service:a.service,dateFormatString:a.dateFormatString,client:a.client,confirmed:a.confirmed,dateFormatDate:a.dateFormatDate})}else console.log("No such document!")}))}},{key:"handleChange",value:function(e){this.setState({startDate:e,dateFormatString:e.toLocaleString("es-Co",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:"false"}),dateFormatDate:e})}},{key:"render",value:function(){return r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"panel panel-default"},r.a.createElement("div",{class:"panel-heading"},r.a.createElement("h3",{class:"panel-title"},"EDITAR AGENDAMIENTO")),r.a.createElement("div",{class:"panel-body"},r.a.createElement("h4",null,r.a.createElement(o.b,{to:"/show/".concat(this.state.key),class:"btn btn-primary"},"Volver")),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"select-service"},"Tipo de Servicio"),r.a.createElement("div",null,r.a.createElement("select",{name:"title",id:"select-service",value:this.state.service,onChange:this.onChange,required:!0},r.a.createElement("option",{value:"",selected:!0,disabled:!0,hidden:!0},"Escoge un Servicio..."),r.a.createElement("option",{value:"Servicio 1"},"Servicio 1"),",",r.a.createElement("option",{value:"Servicio 2"},"Servicio 2"),",",r.a.createElement("option",{value:"Servicio 3"},"Servicio 3")))),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"dateFormatString"},"Fecha y Hora"),r.a.createElement("div",null,r.a.createElement(p.a,{selected:this.state.startDate,onChange:this.handleChange,showTimeSelect:!0,locale:"es",timeFormat:"h:mm aa",name:"startDate",timeIntervals:30,timeCaption:"Hora",dateFormat:"d MMMM, yyyy h:mm aa",className:"form-control",placeholderText:this.state.dateFormatString}))),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"client"},"Nombre del Cliente"),r.a.createElement("input",{type:"text",class:"form-control",name:"client",value:this.state.client,onChange:this.onChangeOnlyLetters,placeholder:"Nombre del Cliente",minlength:"5",maxlength:"40",required:!0})),r.a.createElement("div",{class:"form-group"},r.a.createElement("div",null,r.a.createElement("label",{for:"confirmed"},"Agenda Confirmada"),r.a.createElement("div",null,r.a.createElement("input",{style:{width:16,height:16},type:"checkbox",value:this.state.confirmed,checked:this.state.confirmed,onChange:this.onChangeChecked})))),r.a.createElement("button",{type:"submit",class:"btn btn-success"},"Guardar Cambios")))))}}]),a}(n.Component));h.initializeApp({apiKey:"AIzaSyBr3_c6K2hMVNIa1A-rtFcYgqXZznzRVrs",authDomain:"reactagenda-5ed74.firebaseapp.com",databaseURL:"https://reactagenda-5ed74.firebaseio.com",projectId:"reactagenda-5ed74",storageBucket:"reactagenda-5ed74.appspot.com",messagingSenderId:"931384845335",appId:"1:931384845335:web:31aa6d2bf2b72e1c7e6852"}),h.firestore().settings({});var D=h,y=a(83);Object(f.registerLocale)("es",y.a);var S=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(s.a)(this,a);return(n=t.call(this,e)).onChangeOnlyLetters=function(e){var t=n.state;t[e.target.name]=e.target.value,t[e.target.name]=t[e.target.name].replace(/[^A-Za-z\xc0-\xff]/gi," "),n.setState(t)},n.onChange=function(e){var t=n.state;t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t=n.state,a=t.service,r=t.dateFormatString,l=t.client,c=t.confirmed,o=t.dateFormatDate;n.ref.add({service:a,dateFormatString:r,client:l,confirmed:c,dateFormatDate:o}).then((function(e){n.setState({service:"",dateFormatString:"",client:"",confirmed:!1,dateFormatDate:""}),n.props.history.push("/")})).catch((function(e){console.error("Error adding document: ",e)})),alert("Registro Creado Exitosamente!!")},n.ref=D.firestore().collection("agendas"),n.state={service:"",dateFormatString:(new Date).toLocaleString("es-Co",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:"false"}),client:"",confirmed:!1,dateFormatDate:new Date,startDate:""},n.handleChange=n.handleChange.bind(Object(v.a)(n)),n}return Object(m.a)(a,[{key:"handleChange",value:function(e){this.setState({startDate:e,dateFormatString:e.toLocaleString("es-Co",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:"false"}),dateFormatDate:e})}},{key:"render",value:function(){var e=this.state,t=e.service,a=(e.dateFormatString,e.client);e.confirmed;return r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"panel panel-default"},r.a.createElement("div",{class:"panel-heading"},r.a.createElement("h3",{class:"panel-title"},"AGENDAR NUEVO SERVICIO")),r.a.createElement("div",{class:"panel-body"},r.a.createElement("h4",null,r.a.createElement(o.b,{to:"/",class:"btn btn-primary"},"Volver")),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"select-service"},"Tipo de Servicio"),r.a.createElement("div",null,r.a.createElement("select",{name:"service",id:"select-service",value:t,onChange:this.onChange,required:!0},r.a.createElement("option",{value:"",selected:!0,disabled:!0,hidden:!0},"Escoge un Servicio..."),r.a.createElement("option",{value:"Servicio 1"},"Servicio 1"),",",r.a.createElement("option",{value:"Servicio 2"},"Servicio 2"),",",r.a.createElement("option",{value:"Servicio 3"},"Servicio 3")))),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"dateFormatString"},"Fecha y Hora"),r.a.createElement("div",null,r.a.createElement(p.a,{selected:this.state.startDate,onChange:this.handleChange,showTimeSelect:!0,locale:"es",timeFormat:"h:mm aa",name:"startDate",timeIntervals:30,timeCaption:"Hora",dateFormat:"d MMMM, yyyy h:mm aa",className:"form-control",placeholderText:"Click para Escoger una Fecha",required:!0}))),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"client"},"Nombre del Cliente"),r.a.createElement("input",{type:"text",class:"form-control",name:"client",value:a,onChange:this.onChangeOnlyLetters,placeholder:"Nombre del Cliente",minlength:"5",maxlength:"40",required:!0})),r.a.createElement("div",{class:"form-group"},r.a.createElement("div",null,r.a.createElement("input",{style:{width:16,height:16},type:"checkbox",disabled:!0,hidden:!0}))),r.a.createElement("button",{type:"submit",class:"btn btn-success"},"Aceptar")))))}}]),a}(n.Component),F=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={Coment:{},key:""},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.firestore().collection("agendas").doc(this.props.match.params.id).get().then((function(t){t.exists?e.setState({Coment:t.data(),key:t.id,isLoading:!1}):console.log("No such document!")}))}},{key:"delete",value:function(e){var t=this;h.firestore().collection("agendas").doc(e).delete().then((function(){alert("Registro Eliminado Exitosamente!!"),console.log("Document successfully deleted!"),t.props.history.push("/")})).catch((function(e){console.error("Error removing document: ",e)}))}},{key:"render",value:function(){return r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"panel panel-default"},r.a.createElement("div",{class:"panel-heading"},r.a.createElement("h3",{class:"panel-title"},"DETALLE DEL AGENDAMIENTO"),r.a.createElement("h4",null,r.a.createElement(o.b,{to:"/",class:"btn btn-primary"},"Volver"))),r.a.createElement("hr",null),r.a.createElement("div",{class:"panel-body"},r.a.createElement("dl",null,r.a.createElement("dt",null,"Tipo de Servicio"),r.a.createElement("dd",null,this.state.Coment.service),r.a.createElement("dt",null,"Fecha y Hora"),r.a.createElement("dd",null,this.state.Coment.dateFormatString),r.a.createElement("dt",null,"Nombre del Cliente"),r.a.createElement("dd",null,this.state.Coment.client),r.a.createElement("dt",null,"Agenda Confirmada"),r.a.createElement("dd",null,r.a.createElement("input",{style:{width:16,height:16},type:"checkbox",checked:this.state.Coment.confirmed}))),r.a.createElement(o.b,{to:"/edit/".concat(this.state.key),class:"btn btn-success"},"Editar"),"\xa0",r.a.createElement("button",{onClick:this.delete.bind(this,this.state.key),class:"btn btn-danger"},"Eliminar"))))}}]),a}(n.Component);c.a.render(r.a.createElement(o.a,{basename:"/reactagenda"},r.a.createElement("div",null,r.a.createElement(i.a,{exact:!0,path:"/",component:E}),r.a.createElement(i.a,{path:"/edit/:id",component:b}),r.a.createElement(i.a,{path:"/create",component:S}),r.a.createElement(i.a,{path:"/show/:id",component:F}))),document.getElementById("root"))},36:function(e,t,a){},84:function(e,t,a){e.exports=a(160)},89:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.d5b4f50e.chunk.js.map