import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name="Dhaka"></District>
      <District name="Faridpur"></District>
      <District name="Naogoan"></District>

    </div>
  );
}

function LoadPosts(){
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setPosts(data))
  },[])
  return (
    <div>
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post => <Post title = {post.title} body = {post.body}></Post>)
      }
    </div>
  )
}

function Post(props){
  return (
    <div style={districtStyle}>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
}

const districtStyle ={
  backgroundColor: '#87CEEB',
  margin:'20px',
  borderRadius:'20px',
  padding: '20px',
}

function District(props){
  const [power, setPrower] = useState(1);
  const boostPower = () => {
    const newPower = power *2;
    setPrower(newPower);

  }
  const lowerPower = () => {
    const newPower = power / 2;
    setPrower(newPower);
  }
  return(
    <div style={districtStyle}>
      <h2>Name: {props.name} </h2>
      <p> Specialty: </p>
      <h4> Power: {power}</h4>
      <button onClick={boostPower}>Boost the power</button>
      <button onClick={lowerPower}>Lower the power</button>
    </div>
  )
}

export default App;
