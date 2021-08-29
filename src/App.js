import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from './components/navbar/Navbar.jsx';
import Navbar2 from './components/navbar/Navbar2.jsx'
import HomePage from './components/home/HomePage.jsx';
import Project from './components/projects/Project.jsx';
import AboutPage from './components/about/AboutPage.jsx';
import Blogs from './components/blogs/Blogs.jsx'

function App() {

  return (
    <Router>
      <main>
        <Navbar2 />
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/projects" exact component={Project}/>
          <Route path="/about" exact component={AboutPage}/>
          <Route path="/blogs" exact component={Blogs}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
