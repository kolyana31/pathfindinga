import{R as N}from"./vendor.d4e1d999.js";const F=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function d(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerpolicy&&(c.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?c.credentials="include":e.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(e){if(e.ep)return;e.ep=!0;const c=d(e);fetch(e.href,c)}};F();function O(t){let n=0,d=0,i=0,e=0;t.onmousedown=c;function c(u){document.dragMenu=!0,u=u||window.event,u.preventDefault(),i=u.clientX,e=u.clientY,document.onmouseup=m,document.onmousemove=l}function l(u){u=u||window.event,u.preventDefault(),n=i-u.clientX,d=e-u.clientY,i=u.clientX,e=u.clientY,t.offsetLeft+t.offsetWidth<=document.documentElement.clientWidth-10?t.style.left=t.offsetLeft-n+"px":t.offsetLeft+t.offsetWidth>=document.documentElement.clientWidth-10&&(t.style.left=document.documentElement.clientWidth-t.offsetWidth-20+"px",m()),t.offsetLeft<=0&&(t.style.left=20+"px",m()),t.offsetTop+t.offsetHeight<=document.documentElement.clientHeight-10?t.style.top=t.offsetTop-d+"px":t.offsetTop+t.offsetHeight>=document.documentElement.clientHeight-10&&(t.style.top=document.documentElement.clientHeight-t.offsetHeight-20+"px",m()),t.offsetTop<=0&&(t.style.top=20+"px",m())}function m(){document.onmouseup=null,document.onmousemove=null,document.dragMenu=!1}}function X(t,n){return(Math.abs(t.x-n.x)+Math.abs(t.y-n.y))*document.GridStep}function Y(t,n){let d=Math.abs(t.x-n.x),i=Math.abs(t.y-n.y);return Math.sqrt(d*d+i*i)*document.GridStep}function j(t,n){return(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))*document.GridStep}const g=()=>{document.SearchMode?(document.getElementById("SearchStarter").removeAttribute("disabled"),document.getElementById("ClearWalls").removeAttribute("disabled"),document.getElementById("Pause").setAttribute("disabled",!0),Array.from(document.querySelectorAll('input[name="methods"]')).forEach(t=>{t.removeAttribute("disabled")}),document.SearchMode=!1,document.SearchPause=!1):(document.getElementById("ClearWalls").setAttribute("disabled",!0),document.getElementById("SearchStarter").setAttribute("disabled",!0),document.getElementById("Pause").removeAttribute("disabled"),Array.from(document.querySelectorAll('input[name="methods"]')).forEach(t=>{t.setAttribute("disabled",!0)}),document.SearchMode=!0)},f=()=>{document.resultPath.remove(),document.GridArr.forEach(t=>{t.forEach(n=>{n.startPoint==!1&&(n.parent=null,n.weight=0,n.aprocDist,n.move=0,n.show())})})};class p{constructor(n,d,i,e,c=!1,l){this.x=n,this.y=d,this.center={x:n*l+l/2,y:d*l+l/2},this.rect=i,this.startPoint=!1,this.endPoint=!1,this.wall=e==null?c:!1,this.parent=null,e&&(this.weight=0,this.aprocDist,this.move=0,this.parent=NaN),e!==null&&(this.startPoint=e,this.endPoint=!e),this.rect.mouseover(()=>{!document.SearchMode&&document.mouseDown&&!document.dragMenu&&document.setWallsMode!=this.wall&&!(this.startPoint||this.endPoint)&&!(document.dragStartPointMode||document.dragEndPointMode)?(this.rect.animate({transform:"s1.2"},100,()=>{this.rect.animate({transform:"s1"},100)}),this.wall=!this.wall,this.show()):document.dragStartPointMode?!this.wall&&this.endPoint!==!0&&!(document.startPoint.x==this.x&&document.startPoint.y==this.y)&&(this.startPoint=!0,document.GridArr[document.startPoint.y][document.startPoint.x].startPoint=!1,document.GridArr[document.startPoint.y][document.startPoint.x].show(),document.startPoint={x:this.x,y:this.y},this.show()):document.dragEndPointMode&&!this.wall&&this.startPoint!==!0&&!(document.endPoint.x==this.x&&document.endPoint.y==this.y)&&(this.endPoint=!0,document.GridArr[document.endPoint.y][document.endPoint.x].endPoint=!1,document.GridArr[document.endPoint.y][document.endPoint.x].show(),document.endPoint={x:this.x,y:this.y},this.show())}),this.rect.mousedown(()=>{document.SearchMode||(document.SearchTry&&(document.SearchTry=!1,f(),document.getElementById("SearchResults").innerHTML='<i style="color: lightgreen;">Start Search to get results</i>'),this.startPoint||this.endPoint?this.startPoint?(document.dragStartPointMode=!0,document.startPoint={x:n,y:d}):this.endPoint&&(document.dragEndPointMode=!0,document.endPoint={x:n,y:d}):(this.rect.animate({transform:"s1.2"},100,()=>{this.rect.animate({transform:"s1"},100)}),this.wall=!this.wall,document.setWallsMode=this.wall,this.show()))}),this.show()}show(n=!1,d=!1){this.startPoint?(this.weight=0,this.aprocDist,this.move=0,this.parent=NaN,this.rect.attr({fill:"greenyellow",stroke:"#000",opacity:1,"stroke-width":1})):this.endPoint?this.rect.attr({fill:"tomato",stroke:"#000",opacity:1,"stroke-width":1}):this.rect.attr({fill:"whitesmoke",stroke:"black",opacity:.3,"stroke-width":.5}),n==!0&&!(this.startPoint||this.endPoint)&&this.rect.attr({fill:"yellow",stroke:"black",opacity:.3,"stroke-width":.5}),d==!0&&!(this.startPoint||this.endPoint)&&this.rect.attr({fill:"blue",stroke:"black",opacity:.3,"stroke-width":.5}),this.wall&&this.rect.attr({fill:"black",opacity:.3})}}const K={1:X,2:Y,3:j};let h=N(0,0,document.documentElement.clientWidth,document.documentElement.clientHeight-1),s=30,P=document.documentElement.clientWidth/s,S=document.documentElement.clientHeight/s;document.resultPath=h.path();document.GridArr=[];for(let t=0;t<S;t++){let n=[];for(let d=0;d<P;d++){let i;t==Math.floor(S/2)&&d==Math.floor(P/2.5)&&!document.StartPoint?(i=new p(d,t,h.rect(d*s,t*s,s,s),!0,!1,s),document.startPoint={x:d,y:t},console.log(document.startPoint)):t==Math.floor(S/2)&&d==Math.floor(P/1.5)&&!document.EndPoint?(i=new p(d,t,h.rect(d*s,t*s,s,s),!1,!1,s),document.endPoint={x:d,y:t}):i=new p(d,t,h.rect(d*s,t*s,s,s),null,Math.random()<0,s),n.push(i)}document.GridArr.push(n)}const V=()=>{let t=[document.GridArr[document.startPoint.y][document.startPoint.x]],n=!1,d=0;document.SearchResults={},document.getElementById("SearchResults").innerHTML='<i style="color: orange;">Processing...</i>';let i=setInterval(()=>{var c,l,m,u,w,x,A,E,G,M,b,v,I,L,k,B,D,W,H,T,C,R,$,q;if(document.SearchCanceled){clearInterval(i),g(),document.SearchCanceled=!1;return}if(document.SearchPause)return;if(t.length==0||n){n?document.getElementById("SearchResults").innerHTML=`<i style="color: lightgreen;">
                        Step weight Hor/Ver: ${document.GridStep} <br>
                        Step weight Diag: ${document.GridStep*1.4} <br>
                        Iterations: ${d} <br>
                        Steps: ${document.SearchResults.steps} <br>
                        Path Weight: ${document.SearchResults.pathLength} <br>
                    </i>`:(document.SearchResults=null,document.getElementById("SearchResults").innerHTML='<i style="color: tomato;">Can`t find path</i>'),clearInterval(i),g();return}d++;let e=t.reduce(function(o,r){return o.weight<r.weight?o:r});t=t.filter(o=>!(o.x==e.x&&o.y==e.y));for(let o=e.x-1;o<=e.x+1&&!n;o++)for(let r=e.y-1;r<=e.y+1;r++)if(o>=0&&o<document.GridArr[0].length&&r>=0&&r<document.GridArr.length){if(document.AllowDiagonale==!1&&(o==e.x+1&&r==e.y+1||o==e.x-1&&r==e.y+1||o==e.x-1&&r==e.y-1||o==e.x+1&&r==e.y-1))continue;if(!(o==e.x&&r==e.y)&&!document.GridArr[r][o].wall&&document.GridArr[r][o].parent==null&&!(((m=(l=(c=document.GridArr)==null?void 0:c[e.y])==null?void 0:l[e.x+1])==null?void 0:m.wall)&&((x=(w=(u=document.GridArr)==null?void 0:u[e.y+1])==null?void 0:w[e.x])==null?void 0:x.wall)&&o==e.x+1&&r==e.y+1||((G=(E=(A=document.GridArr)==null?void 0:A[e.y])==null?void 0:E[e.x-1])==null?void 0:G.wall)&&((v=(b=(M=document.GridArr)==null?void 0:M[e.y+1])==null?void 0:b[e.x])==null?void 0:v.wall)&&o==e.x-1&&r==e.y+1||((k=(L=(I=document.GridArr)==null?void 0:I[e.y])==null?void 0:L[e.x-1])==null?void 0:k.wall)&&((W=(D=(B=document.GridArr)==null?void 0:B[e.y-1])==null?void 0:D[e.x])==null?void 0:W.wall)&&o==e.x-1&&r==e.y-1||((C=(T=(H=document.GridArr)==null?void 0:H[e.y-1])==null?void 0:T[e.x])==null?void 0:C.wall)&&((q=($=(R=document.GridArr)==null?void 0:R[e.y])==null?void 0:$[e.x+1])==null?void 0:q.wall)&&o==e.x+1&&r==e.y-1)){if(document.GridArr[r][o].parent=e,document.GridArr[r][o].move=e.move,(document.GridArr[r][o].x<e.x||document.GridArr[r][o].x>e.x)&&document.GridArr[r][o].y==e.y||(document.GridArr[r][o].y<e.y||document.GridArr[r][o].y>e.y)&&document.GridArr[r][o].x==e.x?document.GridArr[r][o].move+=document.GridStep:document.GridArr[r][o].move+=document.GridStep*1.4,document.GridArr[r][o].aprocDist=K[document.Method]({x:document.GridArr[r][o].x,y:document.GridArr[r][o].y},document.endPoint),document.GridArr[r][o].weight=document.GridArr[r][o].aprocDist+document.GridArr[r][o].move,document.GridArr[r][o].x==document.endPoint.x&&document.GridArr[r][o].y==document.endPoint.y){n=!0;let a=document.GridArr[r][o];document.SearchResults.steps=0,document.SearchResults.pathLength=a.move;let y=`M${a.center.x} ${a.center.y}`;for(;a==null?void 0:a.parent;)document.SearchResults.steps++,y+=`L${a.center.x} ${a.center.y}M${a.center.x} ${a.center.y}`,a=a.parent;y+=`L${a.center.x} ${a.center.y}`,document.resultPath=h.path(y);break}t.push(document.GridArr[r][o])}}t.forEach((o,r)=>{document.GridArr[o.y][o.x].show(!0)})},30)};O(document.getElementById("detachedMenu"));document.mouseDown=!1;document.GridStep=10;document.Method=document.querySelector('input[name="methods"]:checked').value;document.SearchMode=!1;document.SearchTry=!1;document.AllowDiagonale=!0;document.SearchPause=!1;document.SearchResults={};document.getElementById("AllowDiagonale").addEventListener("change",({target:t})=>{document.AllowDiagonale=t.checked});document.addEventListener("mousedown",()=>{document.mouseDown=!0});document.addEventListener("mouseup",()=>{document.mouseDown=!1,document.dragStartPointMode=!1,document.dragEndPointMode=!1});document.getElementById("MethodsForm").addEventListener("change",({target:t})=>{document.Method=t.value});document.getElementById("ClearWalls").addEventListener("click",()=>{document.SearchPause?(document.SearchPause=!1,document.SearchCanceled=!0,f(),document.getElementById("ClearWalls").innerText=document.SearchPause?"Cancel Search":"Clear Field"):(f(),document.GridArr.forEach(t=>{t.forEach(n=>{n.wall=!1,n.show()})})),document.getElementById("SearchResults").innerHTML='<i style="color: lightgreen;">Start Search to get results</i>'});document.getElementById("Pause").addEventListener("click",({target:t})=>{document.SearchPause=!document.SearchPause,t.innerText=document.SearchPause?"Resume Search":"Pause Search",document.getElementById("ClearWalls").innerText=document.SearchPause?"Cancel Search":"Clear Field",document.SearchPause&&document.SearchMode?document.getElementById("ClearWalls").removeAttribute("disabled"):document.SearchMode&&document.getElementById("ClearWalls").setAttribute("disabled",!0)});document.getElementById("SearchStarter").addEventListener("click",()=>{document.SearchMode||(document.SearchTry=!0,g(),f(),V())});