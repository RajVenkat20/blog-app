import './App.css';
import NavBar from './NavBar';
import Home from './pages/Home';
import About from './pages/About';
import ArticlesList from './pages/ArticlesList';
import Article from './pages/Article';

// use react-router-dom to render only that page whose route we are on
// importing stuff from react-router-dom that will allow us to define when these pages get displayed
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // Wrap the enter user interface inside a BrowserRouter
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          {/* To define when each of these pages get displayed, we will wrap them inside the Routes component */}
          <Routes>
            {/* For each of these pages, we are going to define a separate Route component */}
            {/* 'path' property tells where the page should be loaded on what route and 
                'element' property tells which page needs to be loaded */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/articles/:articleId" element={<Article />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
