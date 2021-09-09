import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header'
import './app.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header/>
      </div>
    </Router>
  );
}

export default App;
