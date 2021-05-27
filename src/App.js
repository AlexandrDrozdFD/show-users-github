import React from 'react';
import {useState} from 'react';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Home from './pages/Home';
import Loading from "./components/Loading";
import './App.css';


const App = () => {

  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  const onChangeHandle = (evt) => {
    setUsername(evt.target.value);
  };

  const submitHandler = async (evt) => {
    evt.preventDefault();
    setLoading(true);

    try {
      const responseForUser = await fetch(`https://api.github.com/users/${username}`);
      const newUser = await responseForUser.json();

      const responseForRepos = await fetch(`https://api.github.com/users/${username}/repos`);
      const newRepos = await responseForRepos.json();

      setData(newUser);
      setRepositories(newRepos);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="App">
        <Navbar
          username={username}
          submitHandler={submitHandler}
          onChangeHandler={onChangeHandle}
        />
        <Loading/>
      </div>
    );
  }

  if (data.id) {
    return (
      <div className="App">
        <Navbar
          username={username}
          submitHandler={submitHandler}
          onChangeHandler={onChangeHandle}
        />
        <Main data={data} repositories={repositories}/>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar
        username={username}
        submitHandler={submitHandler}
        onChangeHandler={onChangeHandle}
      />
      <Home/>
    </div>
  );
}

export default App;


