// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Interface with union</h1>`;

interface RunOptions { 
  program:string; 
  commandline:string[]|string|(()=>string)|number; //union type
} 

var options:RunOptions = {program:"test1",commandline:"Hello"}; 
console.log(options.commandline)  

options = {program:"test1",commandline:["Hello","World"]}; 
console.log(options.commandline[0]+" "+options.commandline[1]); 


options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 
var fn:any = options.commandline; 
console.log(fn()); 
options={program:"test1",commandline:19}
console.log(options.commandline);


