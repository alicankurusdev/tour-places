import "./App.scss"
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import {data} from "./utils/data"
function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <Main data={data}/>


    </div>
  );
}

export default App;
