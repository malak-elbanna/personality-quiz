import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/tailwind.css';
import QuizCollection from './pages/QuizCollection';
import Quiz1 from './pages/Quiz1';
import Quiz2 from './pages/Quiz2';
import Quiz3 from './pages/Quiz3';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/collection' element={<QuizCollection />} />
        <Route path="/quiz/1" element={<Quiz1 />} />
        <Route path="/quiz/2" element={<Quiz2 />} />
        <Route path="/quiz/3" element={<Quiz3 />} />
      </Routes>  
    </Router>
  );
}

export default App;
