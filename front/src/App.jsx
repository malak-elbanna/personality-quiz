import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/tailwind.css';
import AboutUs from './pages/AboutUs';
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
import FunFacts from './pages/FunFacts';
import PersonalityTypeCompatibility from './pages/PersonalityTypeCompatibility';
import FAQs from './pages/FAQs';
import Signin from './pages/Signin';
import QuizHistory from './pages/QuizHistory';
import Results from './pages/Results';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Gallery */}
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
        <Route path="/signin" element={<Signin />} />

        {/* FAQs */}
        <Route path="/faqs" element={<FAQs />} />

        {/* Personality Type */}
        <Route path="/personalitytype" element={<PersonalityType />} />

        {/* About Us */}
        <Route path="/aboutus" element={<AboutUs />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />

        {/* Personality Type Compatibility */}
        <Route path="/personalitytypecompatibility" element={<PersonalityTypeCompatibility />} />

        {/* Fun Facts */}
        <Route path="/funfacts" element={<FunFacts />} />
        {/* Quiz History*/}
        <Route path="/Quizhistory" element={<QuizHistory/>} />

        <Route path="/results" element={<Results/>} />


        {/* Catch-all Route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
