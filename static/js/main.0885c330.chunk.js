(this["webpackJsonpweather-app-react"]=this["webpackJsonpweather-app-react"]||[]).push([[0],{12:function(e,t,a){e.exports=a(18)},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c),o=(a(9),a(7)),s=a.n(o),l=a(11),m=a(2),u=a(3),p=a(5),d=a(4),h=a(6),v=a(1),f=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={location:""},a.handleChange=function(e){a.setState(Object(v.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.getWeather(a.state.location)},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e;return r.a.createElement("div",null,r.a.createElement("form",{id:"form",className:"valign-wrapper",onSubmit:this.handleSubmit},r.a.createElement("input",(e={id:"form-input",type:"text",onChange:this.handleChange},Object(v.a)(e,"id","location"),Object(v.a)(e,"name","location"),Object(v.a)(e,"placeholder","Enter your location here..."),e)),r.a.createElement("button",{className:"btn-flat"},r.a.createElement("i",{id:"search-button",className:"material-icons"},"search"))))}}]),t}(n.Component),g=function(e){var t=e.currentForecast,a=e.tempUnitConverter,n=e.tempUnit;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"weather-card",className:"card blue-grey darken-1"},r.a.createElement("div",{id:"main-details",className:"row"},r.a.createElement("div",{id:"location",className:"col s8"},r.a.createElement("span",{className:"flow-text"},t.country,", ",t.city),r.a.createElement("p",null,t.description)),r.a.createElement("div",{id:"weather-icon",className:"col s4"},r.a.createElement("img",{id:"weather-icon-img",alt:"#",src:t.icon}))),r.a.createElement("div",{id:"temperature-details",className:"row"},r.a.createElement("div",{id:"temperature",className:"col s6"},t.temperature,n),r.a.createElement("div",{id:"details",className:"col s6"},r.a.createElement("div",null,"Humidity: ",t.humidity),r.a.createElement("div",null,"Wind: ",t.wind))),r.a.createElement("div",{id:"temp-unit-row",className:"row s12 center-align"},r.a.createElement("button",{id:"temperature-button",className:"btn-flat col s12",onClick:function(){a()}},n))))},w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={currentForecast:null,tempUnit:"C"},a.getWeather=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.openweathermap.org/data/2.5/weather?q="+t+"&appid=177d6d27801e937fa431c833a1fa8013",{mode:"cors"});case 2:return n=e.sent,e.next=5,n.json();case 5:return 200===(r=e.sent).cod?(a.processWeather(r),console.log(r)):console.log("city not found"),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.processWeather=function(e){var t={country:e.sys.country,city:e.name,description:e.weather[0].description,temperature:Math.round(e.main.temp-273.15),humidity:e.main.humidity+"%",wind:Math.round(2.237*e.wind.speed)+"mph",icon:"http://openweathermap.org/img/wn/"+e.weather[0].icon+"@2x.png"};a.setState({currentForecast:t}),console.log(a.state)},a.tempUnitConverter=function(){var e=JSON.parse(JSON.stringify(a.state.currentForecast)),t=a.state.tempUnit;"C"===t?(e.temperature=Math.round(1.8*e.temperature+32),t="F"):(e.temperature=Math.round(.55555556*(e.temperature-32)),t="C"),a.setState({currentForecast:e,tempUnit:t})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App "},r.a.createElement("div",{className:"nav-wrapper valign-wrapper indigo grey lighten-1"},r.a.createElement("i",{id:"logo",className:"material-icons"},"cloud_queue"),r.a.createElement("span",{id:"logo-text",className:"brand-logo"},"Weather App")),r.a.createElement("div",{className:"container"},r.a.createElement(f,{getWeather:this.getWeather}),this.state.currentForecast?r.a.createElement(g,{currentForecast:this.state.currentForecast,tempUnitConverter:this.tempUnitConverter,tempUnit:this.state.tempUnit}):null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.0885c330.chunk.js.map