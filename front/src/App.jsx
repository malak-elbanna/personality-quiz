import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/tailwind.css';
import QuizCollection from './pages/QuizCollection';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/collection' element={<QuizCollection />} />
      </Routes>  
    </Router>
  );
}

export default App;
