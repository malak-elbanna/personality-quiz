import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/tailwind.css';
import QuizCollection from './pages/QuizCollection';
import Home from './pages/Home';
import Quiz1 from './pages/Quiz1';
import Quiz2 from './pages/Quiz2';
import Quiz3 from './pages/Quiz3';
import Gallery from './pages/Gallery';
import Success from './pages/Success';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import FAQs from './pages/FAQs';
import Blog from './pages/Blog';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        

        <Route path="/gallery" element={<Gallery />}/>

        {/* Quiz Collection */}
        <Route path="/collection" element={<QuizCollection />} />
        <Route path="/about" element={<AboutUs />} />
        
        {/* Quizzes */}
        <Route path="/quiz/1" element={<Quiz1 />} />
        <Route path="/quiz/2" element={<Quiz2 />} />
        <Route path="/quiz/3" element={<Quiz3 />} />
        <Route path="/success" element={<Success />} />

        {/* Sign Up */}
        <Route path="/signup" element={<SignUp />} />

        {/* FAQs */}
        <Route path="/FAQs" element={<FAQs />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
