import {
  BrowserRouter as Router,
} from "react-router-dom";
import Header from './components/header'
import Banner from './components/banner'
import Footer from './components/footer'
import './app.css'
import Main from "./components/main";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Banner/>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
