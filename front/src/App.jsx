import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/tailwind.css';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQs';
import QuizCollection from './pages/QuizCollection';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Quiz1 from './pages/Quiz1';
import Quiz2 from './pages/Quiz2';
import Quiz3 from './pages/Quiz3';
import Success from './pages/Success';
import SignUp from './pages/SignUp';
import Blog from './pages/Blog';
import PersonalityType from './pages/PersonalityType';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* Quiz Collection */}
        <Route path="/collection" element={<QuizCollection />} />
        
        {/* Quizzes */}
        <Route path="/quiz/1" element={<Quiz1 />} />
        <Route path="/quiz/2" element={<Quiz2 />} />
        <Route path="/quiz/3" element={<Quiz3 />} />
        <Route path="/success" element={<Success />} />

        {/* Sign Up */}
        <Route path="/signup" element={<SignUp />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />

        {/* Personality Type */}
        <Route path="/personality-type" element={<PersonalityType />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        {/* 404 Page */}
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;