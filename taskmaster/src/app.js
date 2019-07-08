import React, {useState, useEffect} from 'react';
import './app.css';

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const apiData = 'http://taskmaster-dev.us-east-2.elasticbeanstalk.com/tasks';
//const apiData = 'http://localhost:5000/tasks';

function Tasks() {
const [tasks, setTasks] = useState([]);

const _getTasks = () => {
fetch(proxyurl+apiData)
.then( data => data.json() )
.then( task => setTasks(task) )
.catch( console.error);
};

useEffect(_getTasks, []);

return (
<ul>
{tasks.map((task) =>
<li key={task.id}>
<summary>
<p>Title: <span>{task.title}</span></p>
<p>description: <span>{task.description}</span></p>
<p>Status: <span>{task.status}</span></p>
<p>Assignee: <span>{task.assignee}</span></p>
<hr></hr>
</summary>
</li>
)}
</ul>
)
}

function App() {
return (
<>
<h1> Task Master App</h1>
<main>
<Tasks />
</main>
</>
);
}

export default App;
