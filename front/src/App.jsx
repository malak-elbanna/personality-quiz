import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/tailwind.css';
import QuizCollection from './pages/QuizCollection';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Quiz1 from './pages/Quiz1';
import Quiz2 from './pages/Quiz2';
import Quiz3 from './pages/Quiz3';
import Gallery from './pages/Gallery';
import Success from './pages/Success';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/gallery" element={<Gallery />}/>

        {/* Quiz Collection */}
        <Route path="/collection" element={<QuizCollection />} />
        
        {/* Quizzes */}
        <Route path="/quiz/1" element={<Quiz1 />} />
        <Route path="/quiz/2" element={<Quiz2 />} />
        <Route path="/quiz/3" element={<Quiz3 />} />
        <Route path="/success" element={<Success />}/>
      </Routes>
    </Router>
  );
}

export default App;
