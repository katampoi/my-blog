import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <BrowserRouter>
      <div className="app bg-purple-100 ">
        <h1 className="text-3xl bg-purple-500 shadow-md flex justify-center font-bold ">
          My Awesome App
        </h1>
        <div className="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticleListPage />} />
            <Route path="/articles/:id" element={<ArticlePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
