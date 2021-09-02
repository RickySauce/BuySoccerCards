import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './header'

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
