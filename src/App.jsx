import "./App.css";
import { Row } from "./components/Row";
import categories from "./api";
import { Banner } from "./components/Banner";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      {categories.map((e) => (
        <Row key={e.name} title={e.title} path={e.path} isLarge={e.isLarge} />
      ))}
    </div>
  );
}

export default App;
