import { Row } from "./components/Row";
import categories from "./api";
import { Banner } from "./components/Banner";
import { Navbar } from "./components/Navbar";
import { FcAbout } from "react-icons/fc";


import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      {categories.map((e) => (
        <Row key={e.name} title={e.title} path={e.path} isLarge={e.isLarge} />
      ))}
      <footer> 
      <a href="https://www.linkedin.com/in/danilo-vieira-10515123a/"><div className="container-footer"> Desenvolvido por Danilo Vieira  <FcAbout size={25}/>  </div></a>
      </footer>
    </div>
  );
}

export default App;
