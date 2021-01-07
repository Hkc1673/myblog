import './App.css';
import Header from "./components/Header"
import Feed from "./components/Feed"
import Description from "./components/Description"
import Projects from "./components/Projects"
import Articles from "./components/Articles"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app">
    <Header />
    <Feed />
    <Description />
    <Projects />
    <Articles />
    <Footer />
    </div>
  );
}

export default App;
