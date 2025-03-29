import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import Productlist from './Productlist';
import Showuser from './Showuser';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <div className="App">
      <Profile> </Profile>
      <Productlist></Productlist>
      <Showuser></Showuser>
      <CreateUser></CreateUser>
    </div>
  );
}

export default App;
