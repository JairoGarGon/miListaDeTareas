(this.webpackJsonplista_tareas=this.webpackJsonplista_tareas||[]).push([[0],{18:function(a,t,e){},19:function(a,t,e){},26:function(a,t,e){"use strict";e.r(t);var r=e(2),c=e.n(r),s=e(12),o=e.n(s),n=(e(18),e(5)),i=(e(19),e(4)),l=e(3),u=e(0),m=function(a){var t=a.mostrarCompletadas,e=a.cambiarMostrarCompletadas,r=function(){e(!t)};return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("h1",{className:"header__titulo",children:"Lista de Tareas"}),t?Object(u.jsxs)("button",{onClick:function(){return r()},className:"header__boton",children:["No mostrar completadas",Object(u.jsx)(i.a,{icon:l.d,className:"header__icono-boton"})]}):Object(u.jsxs)("button",{onClick:function(){return r()},className:"header__boton",children:["Mostrar completadas",Object(u.jsx)(i.a,{icon:l.c,className:"header__icono-boton"})]})]})},j=e(13),b=e(28),d=function(a){var t=a.tareas,e=a.cambiarTareas,c=Object(r.useState)(""),s=Object(n.a)(c,2),o=s[0],m=s[1];return Object(u.jsxs)("form",{action:"",className:"formulario-tareas",onSubmit:function(a){a.preventDefault(),e([].concat(Object(j.a)(t),[{id:b.a,texto:o,completada:!1}])),m("")},children:[Object(u.jsx)("input",{type:"text",className:"formulario-tareas__input",placeholder:"Escribe una tarea",value:o,onChange:function(a){return function(a){m(a.target.value)}(a)}}),Object(u.jsx)("button",{type:"submit",className:"formulario-tareas__btn",children:Object(u.jsx)(i.a,{icon:l.e,className:"formulario-tareas__icono-btn"})})]})},O=e(8),f=function(a){var t=a.tarea,e=a.toggleCompletada,c=a.editarTarea,s=a.borrarTarea,o=Object(r.useState)(!1),m=Object(n.a)(o,2),j=m[0],b=m[1],d=Object(r.useState)(t.texto),O=Object(n.a)(d,2),f=O[0],_=O[1];return Object(u.jsxs)("li",{className:"lista-tareas__tarea",children:[Object(u.jsx)(i.a,{icon:t.completada?l.a:l.f,className:"lista-tareas__icono lista-tareas__icono-check",onClick:function(){return e(t.id)}}),Object(u.jsx)("div",{className:"lista-tareas__texto",children:j?Object(u.jsxs)("form",{action:"",className:"formulario-editar-tarea",onSubmit:function(a){a.preventDefault(),c(t.id,f),b(!1)},children:[Object(u.jsx)("input",{type:"text",className:"formulario-editar-tarea__input",value:f,onChange:function(a){return _(a.target.value)}}),Object(u.jsx)("button",{type:"submit",className:"formulario-editar-tarea__btn",children:"Actualizar"})]}):t.texto}),Object(u.jsxs)("div",{className:"lista-tareas__contenedor-botones",children:[Object(u.jsx)(i.a,{icon:l.b,className:"lista-tareas__icono lista-tareas__icono-accion",onClick:function(){return b(!j)}}),Object(u.jsx)(i.a,{icon:l.g,className:"lista-tareas__icono lista-tareas__icono-accion",onClick:function(){return s(t.id)}})]})]})},_=function(a){var t=a.tareas,e=a.cambiarTareas,r=a.mostrarCompletadas,c=function(a){e(t.map((function(t){return t.id===a?Object(O.a)(Object(O.a)({},t),{},{completada:!t.completada}):t})))},s=function(a,r){e(t.map((function(t){return t.id===a?Object(O.a)(Object(O.a)({},t),{},{texto:r}):t})))},o=function(a){e(t.filter((function(t){if(t.id!==a)return t})))};return Object(u.jsx)("ul",{className:"lista-tareas",children:t.length>0?t.map((function(a){return r?Object(u.jsx)(f,{tarea:a,toggleCompletada:c,editarTarea:s,borrarTarea:o},a.id):a.completada?void 0:Object(u.jsx)(f,{tarea:a,toggleCompletada:c,editarTarea:s,borrarTarea:o},a.id)})):Object(u.jsx)("div",{className:"lista-tareas__mensaje",children:"No hay tareas agregadas"})})},p=function(){var a=localStorage.getItem("tareas")?JSON.parse(localStorage.getItem("tareas")):[],t=Object(r.useState)(a),e=Object(n.a)(t,2),c=e[0],s=e[1];Object(r.useEffect)((function(){localStorage.setItem("tareas",JSON.stringify(c))}),[c]);var o="";o=null===localStorage.getItem("mostrarCompletadas")||"true"===localStorage.getItem("mostrarCompletadas");var i=Object(r.useState)(o),l=Object(n.a)(i,2),j=l[0],b=l[1];return Object(r.useEffect)((function(){localStorage.setItem("mostrarCompletadas",j.toString())}),[j]),Object(u.jsxs)("div",{className:"contenedor",children:[Object(u.jsx)(m,{mostrarCompletadas:j,cambiarMostrarCompletadas:b}),Object(u.jsx)(d,{tareas:c,cambiarTareas:s}),Object(u.jsx)(_,{tareas:c,cambiarTareas:s,mostrarCompletadas:j})]})};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.2f95de5f.chunk.js.map