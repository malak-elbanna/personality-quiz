import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/tailwind.css';
import QuizCollection from './pages/QuizCollection';
import  Home from './pages/Home';


const App = () => {
  return (
    <Router>
    
   
      <Routes>
      <Route path="/" element={<Home/>} />
      
        
      </Routes>  
    
    
    </Router>
  );
}

export default App;
