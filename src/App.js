import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header'
import Banner from './components/banner'
import './app.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Banner/>
        <Header/>
        <p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          hello
        </p>
      </div>
    </Router>
  );
}

export default App;
