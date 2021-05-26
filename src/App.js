import React from 'react';
import {useState} from 'react';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import NotFound from "./pages/User-not-found";
import Home from './pages/Home';
import './App.css';


const App = () => {

  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState(false);

  console.log(error)

  const onChangeHandle = (evt) => {
    setUsername(evt.target.value);
  };

  const submitHandler = async (evt) => {
    evt.preventDefault();
    // setLoading(true);


    try {
      const responseForUser = await fetch(`https://api.github.com/users/${username}`);
      const newUser = await responseForUser.json();

      const responseForRepos = await fetch(`https://api.github.com/users/${username}/repos`);
      const newRepos = await responseForRepos.json();
      console.log(newRepos);

      setData(newUser);
      setRepositories(newRepos);


      // setLoading(false);
    } catch (err) {
      console.log(err);
      // setLoading(false);

    }
  }

  if (data.id) {
    return (
      <>
        <Navbar
          username={username}
          submitHandler={submitHandler}
          onChangeHandler={onChangeHandle}
        />
        <Main data={data} repositories={repositories}/>
      </>
    );
  }


  return (
    <div className="App">
      <Navbar
        username={username}
        submitHandler={submitHandler}
        onChangeHandler={onChangeHandle}
      />
      <Home />
    </div>
  );
}

export default App;


