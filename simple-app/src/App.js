import React ,{useState, useEffect}from 'react';
import {Input,List, Placeholder} from 'semantic-ui-react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Amplify, {API,graphqlOperation} from 'aws-amplify';
import awsconfig from './aws-exports';

import * as queries from './graphql/queries';
import * as mutation from './graphql/mutations';

Amplify.configure(awsconfig);

// const NewTodo = () => {
//   const [name, setName] = useState('')
  
//   const handleSubmit = async(e) => {
//     await API.graphql(graphqlOperation(mutation.createTodo,{input:{
//       name
//     }}));
//     window.location.reload();
//   }
//   return (
//     <Input
//       placeholder='new todo'
//       action={{
//         content:'Create',
//         onClick: handleSubmit
//       }}
//       onChange={(e) => setName(e.target.value)}/>
//   )
// }

const TodoList =() => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const result = await API.graphql(graphqlOperation(queries.listTodos));
      setTodos(result.data.listTodos.items);
    }
    fetchData();
  },[])

  const todoItemps = () => {
    return todos
    .map((todo) => <List.Item key={todo.id}>
      {todo.createdAt}
      {todo.name}

    </List.Item>)
  }
  return (
    <List>
      {todoItemps()}
    </List>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Route path='/' component={NewTodo}/> */}
        <Route path='/' component={TodoList}/>
      </Router>
    </div>
  );
}

export default App;
