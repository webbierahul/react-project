import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SideNav from "./components/SideNav";
import DocContainer from "./components/DocContainer";

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <div className="wrapper">
      <SideNav/>
      <DocContainer/>
        
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
