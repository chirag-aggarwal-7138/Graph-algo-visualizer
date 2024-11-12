(this["webpackJsonpgraph-algo-visualizer"]=this["webpackJsonpgraph-algo-visualizer"]||[]).push([[0],{39:function(e,t,a){},40:function(e,t,a){},48:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_bootstrap__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(17),react_bootstrap__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(37),vis_data__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(35),vis_data__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(vis_data__WEBPACK_IMPORTED_MODULE_3__),_form_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(65),_form_css__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_form_css__WEBPACK_IMPORTED_MODULE_4__),_Network__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(49);class FormInput extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{constructor(e){super(e),this.tempdata={value1:"",value2:"",value3:"",value4:"",value1prereq:"",value2prereq:"",value3prereq:"",value4prereq:""},this.temptaskCounter=1,this.tempgraph={nodes:[],edges:[]},this.tempanswer="",this.state={data:{value1:"",value2:"",value3:"",value4:"",value1prereq:"",value2prereq:"",value3prereq:"",value4prereq:""},taskCounter:1,graph:{nodes:[],edges:[]},answer:"",open:!1},this.createNetwork=this.createNetwork.bind(this),this.handlebuttonclick=this.handlebuttonclick.bind(this),this.topologicalSort=this.topologicalSort.bind(this),this.hasCycle=this.hasCycle.bind(this),this.hasCycleUtil=this.hasCycle.bind(this),this.computeInDegree=this.computeInDegree.bind(this),this.generateFormInput=this.generateFormInput.bind(this),this.visualizeNetwork=this.visualizeNetwork.bind(this),this.handleChange=this.handleChange.bind(this),this.handleSubmit=this.handleSubmit.bind(this),this.resetForm=this.resetForm.bind(this)}resetForm(){this.temptaskCounter=1;for(let e=1;e<4;e++)this.formmanage.children[e].hidden=!0}handlebuttonclick(){this.setState({open:!this.state.open})}generateFormInput(e){e.preventDefault(),this.temptaskCounter+=1,4===this.temptaskCounter&&(e.target.disabled=!0),e.target.parentElement.children[this.temptaskCounter-1].hidden=!1}computeInDegree(e){let t=new Map;for(let[a,s]of e){t.has(a)||t.set(a,0);for(let e of s)t.has(e)?t.set(e,t.get(e)+1):t.set(e,1)}return t}hasCycleUtil(e,t,a,s,i){if(a[e])return!0;if(t[e])return!1;t[e]=!0,a[e]=!0;let n=s[e];for(let r=0;r<n.length;r++)if(this.hasCycleUtil(n,t,a,s))return!0;return a[e]=!1,!1}hasCycle(e){let t=new Array(this.temptaskCounter),a=new Array(this.temptaskCounter);for(let s=0;s<this.temptaskCounter;s++)t[s]=!1,a[s]=!1;for(let s=0;s<this.temptaskCounter;s++)if(this.hasCycleUtil(s,t,a,e,s%2))return!0;return!1}topologicalSort(e,t){let a=[];for(let[i,n]of t)0===n&&a.push(i);let s=[];for(;a.length;){let i=a.shift();s.push(i);let n=e.get(i);for(let e=0;e<n.length;++e)t.set(n[e],t.get(n[e])-1),0===t.get(n[e])&&a.push(n[e])}s.length<this.temptaskCounter?this.tempanswer="Topological Sort is not possible since given graph has cycle":this.tempanswer="Order Of Execution = "+s.toString()}visualizeNetwork(){const e=this.tempdata;let t=new Map;for(let a=0;a<this.temptaskCounter;a++){let s=Object.values(e).at(a).toLowerCase().trim();if(!s)continue;let i=Object.values(e).at(a+4).split(",");i=i.filter((e=>e.trim().length>0));for(let e=0;e<i.length;++e)i[e]=i[e].toLowerCase().trim(),t.has(i[e])?t.get(i[e]).push(s):t.set(i[e],[s]);s&&!t.has(s)&&t.set(s,[])}this.createNetwork(t),this.topologicalSort(t,this.computeInDegree(t))}createNetwork(e){let t=[],a=[];for(let[i,n]of e){t.push({id:i,label:i});for(let e=0;e<n.length;++e)a.push({from:i,to:n[e],width:1})}let s={nodes:new vis_data__WEBPACK_IMPORTED_MODULE_3__.DataSet(t),edges:new vis_data__WEBPACK_IMPORTED_MODULE_3__.DataSet(a)};this.tempgraph=s}handleChange(event){eval("this.tempdata."+event.target.name+'="'+event.target.value+'";')}handleSubmit(e){e.preventDefault(),this.temptaskCounter>=1&&""!==this.tempdata.value1&&(e.target.parentElement.children[4].hidden=!1),this.visualizeNetwork(),this.setState({data:this.tempdata,taskCounter:this.temptaskCounter,graph:this.tempgraph,answer:this.tempanswer}),this.messagesEnd.scrollIntoView({behavior:"smooth"}),console.log(this.state.answer)}render(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:" pt-2 pb-2 text-light container-float",style:{backgroundColor:"#262626"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"navbar-brand ml-4 "},"Topological Sorting")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:"topological-helper",className:"mt-2"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"lead"},"Task Scheduling can be done via ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"Topological Sorting"),"."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"text-muted"},"Topological Sorting is applicable only on ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("abbr",{title:"Directed Acyclic Graphs"},"DAGs"),"."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"text-muted"},"Here we are visualizing ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"Topological Sorting")," by ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b",null,"Kahn's Algorithm")," using List of tasks below"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.a,{className:"btn m-2",onClick:this.handlebuttonclick},"Topological Sorting"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.a,{in:this.state.open,className:"m-4"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("blockquote",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"In computer science, a topological sort or topological ordering of a directed graph is a linear ordering of its vertices such that for every directed edge uv from vertex u to vertex v, u comes before v in the ordering. For instance, the vertices of the graph may represent tasks to be performed, and the edges may represent constraints that one task must be performed before another; in this application, a topological ordering is just a valid sequence for the tasks. A topological ordering is possible if and only if the graph has no directed cycles, that is, if it is a directed acyclic graph (DAG)")))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"m-2"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b",null,"Enter Tasks Data:")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form",{onSubmit:this.handleSubmit,ref:e=>{this.formmanage=e}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",name:"value1",placeholder:"Task 1",onChange:this.handleChange,className:"m-2 input-field"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",name:"value1prereq",placeholder:"Task1 - Prerequisite",onChange:this.handleChange,className:"m-2 input-field"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{hidden:!0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",name:"value2",placeholder:"Task 2",onChange:this.handleChange,className:"m-2 input-field"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",name:"value2prereq",placeholder:"Task2 - Prerequisite",onChange:this.handleChange,className:"m-2 input-field"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{hidden:!0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",name:"value3",placeholder:"Task 3",onChange:this.handleChange,className:"m-2 input-field"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",name:"value3prereq",placeholder:"Task3 - Prerequisite",onChange:this.handleChange,className:"m-2 input-field"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{hidden:!0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",name:"value4",placeholder:"Task 4",onChange:this.handleChange,className:"m-2 input-field"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",name:"value4prereq",placeholder:"Task4 - Prerequisite",onChange:this.handleChange,className:"m-2 input-field"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"button",value:"Add More",onClick:this.generateFormInput,className:"mt-2 ml-2 mr-1 button"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"submit",value:"Visualize",className:"mt-2 mr-2 ml-1 button"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"result",hidden:!1,ref:e=>{this.messagesEnd=e}},this.state.answer),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"vis-react m-1"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Network__WEBPACK_IMPORTED_MODULE_5__.a,{value1:this.state.graph})))}}__webpack_exports__.a=FormInput},49:function(e,t,a){"use strict";var s=a(0),i=a.n(s),n=a(50);t.a=e=>{const t=Object(s.useRef)(null),a=Object(s.useRef)(null),r={autoResize:!0,locale:"en",clickToUse:!1,edges:{arrows:{to:{enabled:!0}},color:{color:"#1168d9",highlight:"#051d38"}},nodes:{color:{background:"#1e2431",border:"#1e2431",highlight:{background:"#1e2431",border:"#1e2431"}},shape:"circle",font:{color:"#cfddef"}}};return Object(s.useEffect)((()=>{a.current=new n.a(t.current,e.value1,r)}),[t,a,e.value1,r]),i.a.createElement("div",{className:"mainDiv",ref:t})}},58:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=a(14),r=a.n(n);a(58),a(39);class l extends s.Component{constructor(){super(...arguments),this.state={},this.getClassName=()=>{let e="node";return!0===this.props.isStart?e+=" startNode":!0===this.props.isEnd?e+=" endNode":!0===this.props.isWall?e+=" wall-true":this.props.weight>0&&(e+=" weight-present"),!0===this.props.visitedNode&&(e+=" node-visited"),!0===this.props.pathNode&&(e+=" node-shortestPath"),!0===this.props.pathNode&&this.props.weight>0?e="node weight-present-path":!0===this.props.visitedNode&&this.props.weight>0&&(e="node weight-present-visited"),e}}render(){const{row:e,column:t,onMouseDown:a,onMouseUp:s,onMouseEnter:n,onMouseLeave:r}=this.props;return i.a.createElement("div",{className:this.getClassName(),id:`node-${e}-${t}`,onMouseDown:()=>a(e,t),onMouseEnter:()=>n(e,t),onMouseUp:()=>s(e,t),onMouseLeave:()=>r(e,t)})}}var o=l,h=a(26),c=a(11),d=a(22),u=a(17);a(40);const _=e=>i.a.createElement("input",Object.assign({type:"checkbox"},e));class m extends s.Component{constructor(){super(...arguments),this.state={currentAlgo:"Choose Algorithm",addWeights:"false"},this.forDijkstra=()=>{this.setState({currentAlgo:"Dijkstra"}),this.props.handleDescription("Dijkstra")},this.forAstar=()=>{this.setState({currentAlgo:"A* Search"}),this.props.handleDescription("Astar")},this.forBFS=()=>{this.setState({currentAlgo:"Breadth First Search"}),this.props.handleDescription("BFS")},this.forDFS=()=>{this.setState({currentAlgo:"Depth First Search"}),this.props.handleDescription("DFS")},this.visualize=()=>{"Dijkstra"===this.state.currentAlgo?this.props.handleDijkstra():"A* Search"===this.state.currentAlgo?this.props.handleAstar():"Breadth First Search"===this.state.currentAlgo?this.props.handleBFS():"Depth First Search"===this.state.currentAlgo&&this.props.handleDFS()},this.handleCheckboxChange=()=>{console.log(this.state.addWeights),this.setState({addWeights:!this.state.addWeights})}}render(){const{handleClearAlgorithm:e,handleClearGrid:t,addWeights:a,handleCheckboxChange:s,timeComplexity:n,pathLength:r,pathCost:l}=this.props;return i.a.createElement(h.a,{variant:"dark",expand:"lg",sticky:"top",style:{backgroundColor:"#262626"}},i.a.createElement(h.a.Brand,{className:"mr-4"},"Path Finding Visualizer"),i.a.createElement(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(h.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(c.a,{className:"mr-auto"},i.a.createElement(d.a,{title:this.state.currentAlgo,id:"basic-nav-dropdown"},i.a.createElement(d.a.Item,{onClick:this.forDijkstra},"Dijkstra"),i.a.createElement(d.a.Item,{onClick:this.forAstar},"A* Search"),i.a.createElement(d.a.Item,{onClick:this.forBFS},"Breadth First Search"),i.a.createElement(d.a.Item,{onClick:this.forDFS},"Depth First Search")),i.a.createElement(u.a,{variant:"success",className:"mx-4",onClick:this.visualize,id:"visualize"},"Visualize!"),i.a.createElement(u.a,{variant:"info",className:"mx-4",id:"clearAlgo",onClick:e},"Clear Algorithm"),i.a.createElement(u.a,{variant:"info",className:"mx-4",onClick:t,id:"clearGrid"},"Clear Grid"),i.a.createElement("label",{className:"mx-3"},i.a.createElement(_,{checked:a,onChange:s}),i.a.createElement("span",{className:"checkBox"},"Switch to Weights")),i.a.createElement("label",{className:"checkBox mx-3"},"Path Length : ",r),i.a.createElement("label",{className:"checkBox mx-3"},"Path Cost : ",l),i.a.createElement("label",{className:"checkBox mx-3"},"Time Complexity : ",n))))}}var p=m;function g(e){e.sort(((e,t)=>e.distance-t.distance))}function E(e,t){const a=function(e,t){const a=[],{row:s,column:i}=e;s-1>=0&&!0!==t[s-1][i].isVisited&&a.push(t[s-1][i]);s+1<t.length&&!0!==t[s+1][i].isVisited&&a.push(t[s+1][i]);i-1>=0&&!0!==t[s][i-1].isVisited&&a.push(t[s][i-1]);i+1<t[0].length&&!0!==t[s][i+1].isVisited&&a.push(t[s][i+1]);return a}(e,t);for(let s of a)s.distance>e.distance+s.weight&&(s.distance=e.distance+s.weight+1,s.previousNode=e);return a}function f(e){e.sort(((e,t)=>e.distance-t.distance))}function v(e,t,a){const s=function(e,t){const a=[],{row:s,column:i}=e;s-1>=0&&!0!==t[s-1][i].isVisited&&a.push(t[s-1][i]);s+1<t.length&&!0!==t[s+1][i].isVisited&&a.push(t[s+1][i]);i-1>=0&&!0!==t[s][i-1].isVisited&&a.push(t[s][i-1]);i+1<t[0].length&&!0!==t[s][i+1].isVisited&&a.push(t[s][i+1]);return a}(e,a),i=Math.abs(e.row-t.row)+Math.abs(e.column-t.column),n=e.distance-i;for(let r of s){let a=n+r.weight+1,s=Math.abs(r.row-t.row)+Math.abs(r.column-t.column);r.distance>a+s&&(r.distance=a+s,r.previousNode=e)}return s}function C(e,t,a){const s=function(e,t){const a=[],s=t.row,i=t.column;s-1>=0&&!e[s-1][i].isVisited&&a.push(e[s-1][i]);i-1>=0&&!e[s][i-1].isVisited&&a.push(e[s][i-1]);s+1<e.length&&!e[s+1][i].isVisited&&a.push(e[s+1][i]);i+1<e[0].length&&!e[s][i+1].isVisited&&a.push(e[s][i+1]);return a}(e,a);for(let i of s)i.isVisited=!0,i.previousNode=a,t.push(i)}function M(e,t,a){const s=function(e,t){const a=[],s=t.row,i=t.column;s-1>=0&&!1===e[s-1][i].isVisited&&a.push(e[s-1][i]);i-1>=0&&!1===e[s][i-1].isVisited&&a.push(e[s][i-1]);s+1<e.length&&!1===e[s+1][i].isVisited&&a.push(e[s+1][i]);i+1<e[0].length&&!1===e[s][i+1].isVisited&&a.push(e[s][i+1]);return a}(e,a);for(let i of s)null===i.previousNode&&(i.previousNode=a),i.isVisited=!0,t.push(i)}var w=5,D=10,b=10,k=37;class P extends s.Component{constructor(){super(...arguments),this.state={grid:[],isMousePressed:!1,timeComplexity:0,pathCost:0,pathLength:0,isMovingStart:!1,isMovingEnd:!1,addWeights:!1,processActive:!1,description:"Selecting the Nodes in the grid creates Obstacles/Weights. To switch from Obstacles to Weight and vice versa, use the checkbox at Navbar and select an Algorithm"},this.getNewGridWithWallToggled=(e,t)=>{const a=this.state.grid.slice(),s=a[e][t],i={...s,isWall:!s.isWall,weight:0};return a[e][t]=i,a},this.getNewGridWithWeights=(e,t)=>{const a=this.state.grid.slice(),s=a[e][t];let i=0;i=0===s.weight?10:-10;const n={...s,isWall:!1,weight:s.weight+i};return a[e][t]=n,a},this.handleMouseDown=(e,t)=>{if(!0!==this.state.processActive)if(e===w&&t===D||e===b&&t===k){if(this.setState({isMousePressed:!0}),e===w&&t===D){const a=this.state.grid.slice(),s={...a[e][t],isStart:!1};a[e][t]=s,this.setState({grid:a,isMovingStart:!0})}else if(e===b&&t===k){const a=this.state.grid.slice(),s={...a[e][t],isEnd:!1};a[e][t]=s,this.setState({grid:a,isMovingEnd:!0})}}else{let a;a=this.state.addWeights?this.getNewGridWithWeights(e,t):this.getNewGridWithWallToggled(e,t),this.setState({grid:a,isMousePressed:!0})}},this.handleMouseEnter=(e,t)=>{if(this.state.isMousePressed||this.state.processActive){if(this.state.isMovingStart){const a=this.state.grid;a[w][D].isStart=!1,a[e][t].isStart=!0,w=e,D=t,this.setState({grid:a})}else if(this.state.isMovingEnd){const a=this.state.grid;a[b][k].isEnd=!1,a[e][t].isEnd=!0,b=e,k=t,this.setState({grid:a})}if(this.state.isMousePressed&&!(e===w&&t===D||e===b&&t===k)){let a;a=this.state.addWeights?this.getNewGridWithWeights(e,t):this.getNewGridWithWallToggled(e,t),this.setState({grid:a})}}else if(!(e===w&&t===D||e===b&&t===k)){let a;a=this.state.addWeights?this.getNewGridWithWeights(e,t):this.getNewGridWithWallToggled(e,t),this.setState({grid:a})}},this.handleMouseUp=(e,t)=>{if(!0!==this.state.processActive)if(this.setState({isMousePressed:!1}),!0===this.state.isMovingStart){const a=this.state.grid.slice(),s={...a[e][t],isWall:!1,isStart:!0};a[e][t]=s,this.setState({grid:a,isMovingStart:!1}),w=e,D=t}else if(!0===this.state.isMovingEnd){const a=this.state.grid.slice(),s={...a[e][t],isWall:!1,isEnd:!0};a[e][t]=s,this.setState({grid:a,isMovingEnd:!1}),b=e,k=t}},this.handleMouseLeave=(e,t)=>{if(this.state.isMousePressed||this.state.processActive);else if(!(e===w&&t===D||e===b&&t===k)){let a;a=this.state.addWeights?this.getNewGridWithWeights(e,t):this.getNewGridWithWallToggled(e,t),this.setState({grid:a})}},this.animateAlgo=(e,t)=>{this.setState({processActive:!0}),document.getElementById("visualize").disabled=!0,document.getElementById("clearAlgo").disabled=!0,document.getElementById("clearGrid").disabled=!0;const a=this.state.grid.slice();for(let s=1;s<e.length;s++){if(s===e.length-1){for(let e=0;e<t.length;e++)setTimeout((()=>{setTimeout((()=>{const s=t[e],i={...a[s.row][s.column],pathNode:!0};a[s.row][s.column]=i,"node weight-present-visited"===document.getElementById(`node-${s.row}-${s.column}`).className?document.getElementById(`node-${s.row}-${s.column}`).className="node weight-present-path":document.getElementById(`node-${s.row}-${s.column}`).className="node node-shortestPath"}),50*e)}),25*s);return void setTimeout((()=>{setTimeout((()=>{this.setState({processActive:!1}),document.getElementById("visualize").disabled=!1,document.getElementById("clearAlgo").disabled=!1,document.getElementById("clearGrid").disabled=!1,this.setState({grid:a})}),50*t.length)}),25*e.length)}setTimeout((()=>{const t=e[s],i={...a[t.row][t.column],visitedNode:!0};a[t.row][t.column]=i,"node weight-present"===document.getElementById(`node-${t.row}-${t.column}`).className?document.getElementById(`node-${t.row}-${t.column}`).className="node weight-present-visited":document.getElementById(`node-${t.row}-${t.column}`).className="node node-visited"}),25*s)}},this.visualizeDijkstra=()=>{this.clearAlgo();const{grid:e}=this.state,t=e[w][D],a=e[b][k],s=function(e,t,a){const s=[];t.distance=0;const i=function(e){let t=[];for(let a of e)for(let e of a)t.push(e);return t}(e);for(;i.length;){g(i);const t=i.shift();if(t.isVisited=!0,t.distance===1/0)return s;if(!0!==t.isWall){if(s.push(t),t===a)return s;E(t,e)}}}(e,t,a),i=function(e,t,a){const s=[];let i=a.previousNode;if(null===i)return s;for(;i!==t;)s.push(i),i=i.previousNode;return s.reverse(),s}(0,t,a),n=function(e,t){let a=0;for(let s of t)0===s.weight?a+=1:a=a+s.weight+1;return a}(0,i);this.animateAlgo(s,i),this.setState({timeComplexity:s.length,pathLength:i.length,pathCost:n})},this.visualizeAstar=()=>{this.clearAlgo();const{grid:e}=this.state,t=e[w][D],a=e[b][k],s=function(e,t,a){const s=[];t.distance=Math.abs(t.row-a.row)+Math.abs(t.column-a.column);const i=function(e){const t=[];for(let a of e)for(let e of a)t.push(e);return t}(e);for(;i.length;){f(i);const t=i.shift();if(t.distance===1/0)return s;if(!t.isWall){if(t.isVisited=!0,s.push(t),t===a)return s;v(t,a,e)}}}(e,t,a),i=function(e,t,a){const s=[];let i=a.previousNode;if(null===i)return s;for(;i!==t;)s.push(i),i=i.previousNode;return s.reverse(),s}(0,t,a),n=function(e,t){let a=0;for(let s of t)0===s.weight?a+=1:a=a+s.weight+1;return a}(0,i);this.animateAlgo(s,i),this.setState({timeComplexity:s.length,pathLength:i.length,pathCost:n})},this.visualizeBFS=()=>{this.clearAlgo();const{grid:e}=this.state,t=e[w][D],a=e[b][k],s=function(e,t,a){const s=[];t.isVisited=!0;const i=[];for(i.push(t);i.length;){const t=i.shift();if(t===a)return s;t.isWall||(s.push(t),C(e,i,t))}return s}(e,t,a),i=function(e,t,a){const s=[];let i=a.previousNode;if(null===i)return s;for(;i!==t;)s.push(i),i=i.previousNode;return s.reverse(),s}(0,t,a);this.animateAlgo(s,i);const n=function(e,t){let a=0;for(let s of t)0===s.weight?a+=1:a=a+s.weight+1;return a}(0,i);this.setState({timeComplexity:s.length,pathLength:i.length,pathCost:n})},this.visualizeDFS=()=>{this.clearAlgo();const{grid:e}=this.state,t=e[w][D],a=e[b][k],s=function(e,t,a){const s=[],i=[];for(t.isVisited=!0,i.push(t);i.length;){const t=i.pop();if(!0!==t.isWall){if(s.push(t),t===a)return s;M(e,i,t)}}return s}(e,t,a),i=function(e,t,a){const s=[];let i=a.previousNode;if(null===i)return s;for(;i!==t;)s.push(i),i=i.previousNode;return s.reverse(),s}(0,t,a);this.animateAlgo(s,i);const n=function(e,t){let a=0;for(let s of t)0===s.weight?a+=1:a=a+s.weight+1;return a}(0,i);this.setState({timeComplexity:s.length,pathLength:i.length,pathCost:n})},this.clearAlgo=()=>{const e=this.state.grid;for(let t=0;t<18;t++)for(let a=0;a<45;a++)e[t][a].distance=1/0,e[t][a].isVisited=!1,e[t][a].previousNode=null,e[t][a].visitedNode=!1,e[t][a].pathNode=!1,t===w&&a===D||t===b&&a===k||!0===e[t][a].isWall||(e[t][a].weight>0?document.getElementById(`node-${t}-${a}`).className="node weight-present":document.getElementById(`node-${t}-${a}`).className="node");this.setState({grid:e,timeComplexity:0,pathLength:0,pathCost:0})},this.undoAlgoAndWalls=()=>{const e=this.state.grid;for(let t=0;t<18;t++)for(let a=0;a<45;a++)e[t][a].distance=1/0,e[t][a].isVisited=!1,e[t][a].previousNode=null,e[t][a].isWall=!1,e[t][a].weight=0,e[t][a].visitedNode=!1,e[t][a].pathNode=!1,t===w&&a===D||t===b&&a===k||(document.getElementById(`node-${t}-${a}`).className="node");this.setState({grid:e,timeComplexity:0,pathLength:0,pathCost:0})},this.handleCheckboxChange=()=>{this.setState({addWeights:!this.state.addWeights})},this.getDescription=e=>{"Dijkstra"===e?this.setState({description:"Dijkstra's Algorithm is Weighted and guarantees the Shortest Path!"}):"Astar"===e?this.setState({description:"A* Search (AI based Algorithm) is Weighted and guarantees the Shortest Path!"}):"BFS"===e?this.setState({description:"Breath-first Search is Unweighted and guarantees the Shortest Path!"}):"DFS"===e&&this.setState({description:"Depth-first Search is Unweighted and does not guarantee the Shortest path!"})}}componentDidMount(){const e=[];for(let t=0;t<18;t++){const a=[];for(let e=0;e<45;e++){const s={row:t,column:e,isStart:t===w&&e===D,isEnd:t===b&&e===k,distance:1/0,weight:0,isVisited:!1,previousNode:null,isWall:!1,visitedNode:!1,pathNode:!1};a.push(s)}e.push(a)}this.setState({grid:e})}render(){const{grid:e}=this.state;return i.a.createElement("div",null,i.a.createElement(p,{addWeights:this.state.addWeights,handleDijkstra:this.visualizeDijkstra,handleAstar:this.visualizeAstar,handleBFS:this.visualizeBFS,handleDFS:this.visualizeDFS,handleClearAlgorithm:this.clearAlgo,handleClearGrid:this.undoAlgoAndWalls,handleCheckboxChange:this.handleCheckboxChange,processActive:this.state.processActive,timeComplexity:this.state.timeComplexity,pathCost:this.state.pathCost,pathLength:this.state.pathLength,handleDescription:e=>this.getDescription(e)}),i.a.createElement("div",{className:"labels mt-3"},i.a.createElement("li",{className:"node startNode ml-5"}),"  Start node",i.a.createElement("li",{className:"node endNode ml-5"}),"  End Node",i.a.createElement("li",{className:"node node-visited ml-5"}),"  Visited node",i.a.createElement("li",{className:"node node-shortestPath ml-5"}),"  Path Node",i.a.createElement("li",{className:"node wall-true ml-5"}),"  Obstacle Node",i.a.createElement("li",{className:"node weight-present ml-5"}),"  Weight Node",i.a.createElement("li",{className:"node ml-5"}),"  Unvisited Node"),i.a.createElement("div",{className:"description mt-3"},this.state.description),i.a.createElement("div",{className:"grid"},e.map(((e,t)=>i.a.createElement("div",{key:t},e.map(((e,t)=>i.a.createElement(o,{key:t,row:e.row,column:e.column,isStart:e.isStart,isEnd:e.isEnd,distance:e.distance,isVisited:e.isVisited,previousNode:e.previousNode,isWall:e.isWall,weight:e.weight,visitedNode:e.visitedNode,pathNode:e.pathNode,onMouseDown:(e,t)=>this.handleMouseDown(e,t),onMouseEnter:(e,t)=>this.handleMouseEnter(e,t),onMouseUp:(e,t)=>this.handleMouseUp(e,t),onMouseLeave:(e,t)=>this.handleMouseLeave(e,t)}))))))))}}var N=P;a(64);class A extends i.a.Component{constructor(){super(...arguments),this.state={coord:[],minimumCost:0}}newCanvas(){const e=this.canvas.getContext("2d");this.setState({coord:[]},(function(){this.props.draw(this.canvas,e,this.state.coord)}))}setCost(e){this.setState({minimumCost:e})}prims(){let e=[],t=[],a=[],s=0;for(let r in this.state.coord)t.push(this.state.coord[r]),a.push(this.state.coord[r]);let i=t.length,n=t[0];for(e.push(n),t.splice(0,1);i>1;){let a=1/0,n=null,r=null;for(let s in e)for(let i in t){let l=this.calWeight(e[s][0],e[s][1],t[i][0],t[i][1]);a>l&&(a=l,r=i,n=s)}a/=5,a=Math.round(a),s+=a,console.log(this.state.totalCount),this.props.drawPrims(a,n,r,e,t,this.canvas,this.canvas.getContext("2d")),e.push(t[r]),t.splice(r,1),i-=1}this.setCost(s)}calWeight(e,t,a,s){let i=Math.pow(e-a,2),n=Math.pow(t-s,2);return Math.sqrt(i+n)}componentDidMount(){const e=this.canvas.getContext("2d");this.props.outline(this.canvas,e)}render(){let e=window.innerWidth-45,t=.6*window.innerHeight;return i.a.createElement("div",{id:"head"},i.a.createElement("div",{className:" pt-2 pb-2 text-light container-float",style:{backgroundColor:"#262626"}},i.a.createElement("div",{className:"navbar-brand ml-4 "},"Minimum Spanning Tree")),i.a.createElement("div",{className:"mt-2 mt-2 d-flex justify-content-center"},"You can start drawing the MST by clicking on canvas.\xa0\xa0",i.a.createElement("b",null,"Left-Click"),"\xa0to Add |\xa0",i.a.createElement("b",null,"Right-Click"),"\xa0to Remove."),i.a.createElement("div",{className:"mt-2 d-flex justify-content-center"},"Generated by\xa0",i.a.createElement("b",null,"Prim's Algorithm"),"\xa0using\xa0",i.a.createElement("b",null,"Euclidean Distances"),"\xa0as weights of graph"),i.a.createElement("br",null),i.a.createElement("div",{className:"mt-2 justify-content-center",style:{display:"flex"}},i.a.createElement("div",{style:{color:"darkblue",fontSize:"large"}},i.a.createElement("b",null,0===this.state.minimumCost?"Minimum Spanning Tree Cost is displayed here ":"Minimum Spanning Tree Cost : "+this.state.minimumCost," ")),i.a.createElement("button",{className:"btn btn-outline-dark mr-4 pt-2",style:{position:"absolute",right:"0"},onClick:()=>{this.newCanvas(),this.setCost(0)}},i.a.createElement("b",null,"Clear Canvas"))),i.a.createElement("br",null),i.a.createElement("canvas",{className:"mr-4 ml-4 mt-2 bg-light",onClick:e=>{const t=this.canvas.getContext("2d");let a=[],s=[];if(a.push(e.clientX),a.push(e.clientY),s.push(a),0===this.state.coord.length)this.setState({coord:s},(function(){this.props.draw(this.canvas,t,this.state.coord)}));else{let e=this.state.coord;e.push(s[0]),this.setState({coord:e},(function(){this.props.draw(this.canvas,t,this.state.coord),this.prims()}))}},onContextMenu:e=>{e.preventDefault();const t=this.canvas.getContext("2d");let a=e.clientX,s=e.clientY,i=this.state.coord;for(let n in this.state.coord){if(Math.sqrt(Math.pow(i[n][0]-a,2)+Math.pow(i[n][1]-s,2))<8){i.splice(n,1);break}}this.setState({coord:i},(function(){this.props.draw(this.canvas,t,this.state.coord),this.prims()}))},ref:e=>this.canvas=e,width:e,height:t}),i.a.createElement("p",null,i.a.createElement("br",null)))}}var S=A;a(41);class O extends i.a.Component{constructor(e){super(e),this.ChildElement=i.a.createRef()}render(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(S,{width:1405,height:500,outline:(e,t)=>{t.strokeRect(0,0,e.width,e.height)},draw:(e,t,a)=>{let s=e.getBoundingClientRect();t.clearRect(0,0,e.width,e.height),t.strokeRect(0,0,e.width,e.height);for(let i in a)t.fillStyle="#1e2433",t.beginPath(),t.arc(a[i][0]-s.left,a[i][1]-s.top,10,0,2*Math.PI),t.fill()},drawPrims:(e,t,a,s,i,n,r)=>{let l=n.getBoundingClientRect();r.strokeStyle="#1e1e33",r.beginPath(),r.moveTo(s[t][0]-l.left,s[t][1]-l.top);let o=s[t][0]-l.left+i[a][0]-l.left;o/=2;let h=s[t][1]-l.top+i[a][1]-l.top;h/=2,r.font="12px Roboto sans-serif",r.lineTo(i[a][0]-l.left,i[a][1]-l.top),r.stroke(),r.strokeStyle="blue",r.strokeText(e,o,h)}}))}}var W=O,T=a(48),I=a(20),B=a(3);a(66);var y=()=>i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{justify:!0,variant:"pills",defaultActiveKey:"/gav",className:"navstyle",style:{backgroundColor:"#262626"}},i.a.createElement(c.a.Item,null,i.a.createElement(I.b,{to:"/gav"},i.a.createElement(c.a.Link,{href:"/gav",className:"nav-link-style"},"Path Finding Visualizer"))),i.a.createElement(c.a.Item,null,i.a.createElement(I.b,{to:"/mst"},i.a.createElement(c.a.Link,{href:"/mst",className:"nav-link-style",eventKey:"link-1"},"Minimum Spanning Tree"))),i.a.createElement(c.a.Item,null,i.a.createElement(I.b,{to:"/TopologicalSorting"},i.a.createElement(c.a.Link,{href:"/TopologicalSorting",className:"nav-link-style",eventKey:"link-2"},"Topological Sorting")))));a(67);function L(){return i.a.createElement("div",{className:"footer"},i.a.createElement("p",null,"Hosted on"," ",i.a.createElement("a",{href:"https://github.com/kushgupta-official/Graph-algo-visualizer",target:"_blank",rel:"noopener noreferrer"},"GitHub"),", Developed by KKK (",i.a.createElement("a",{href:"https://www.linkedin.com/in/karanipec22/",target:"_blank",rel:"noopener noreferrer"},"Karan Kohli"),","," ",i.a.createElement("a",{href:"https://www.linkedin.com/in/krishna-kumar-a4611123b/",target:"_blank",rel:"noopener noreferrer"},"Krishna Kumar"),","," ",i.a.createElement("a",{href:"https://www.linkedin.com/in/kush-gupta-in/",target:"_blank",rel:"noopener noreferrer"},"Kush Gupta"),")"))}class x extends s.Component{constructor(){super(...arguments),this.state={}}render(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(I.a,null,i.a.createElement(y,null),i.a.createElement(B.c,null,i.a.createElement(B.a,{exact:!0,path:"/",element:i.a.createElement(N,null)}),i.a.createElement(B.a,{exact:!0,path:"/Graph-Algo-Visualizer",element:i.a.createElement(N,null)}),i.a.createElement(B.a,{exact:!0,path:"/gav",element:i.a.createElement(N,null)}),i.a.createElement(B.a,{exact:!0,path:"/mst",element:i.a.createElement(W,null)}),i.a.createElement(B.a,{exact:!0,path:"/TopologicalSorting",element:i.a.createElement(T.a,null)}))),i.a.createElement(L,null))}}var U=x;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=a(36);K.a.initialize("UA-179559461-1"),K.a.pageview(window.location.pathname+window.location.search),r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()})).catch((e=>{console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.7767a87a.chunk.js.map