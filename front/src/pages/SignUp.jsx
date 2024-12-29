import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setMessage(
        'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some((user) => user.email === email);

    if (userExists) {
      setMessage('User already exists.');
    } else {
      const newUser = { name, email, password, phone };
      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));
      setMessage('User registered successfully.');

      // Redirect to the home page after successful signup
      navigate('/');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-purple-100 text-gray-800 font-sans">
      <section className="bg-white py-16 flex-grow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold text-purple-700 mb-4">Sign Up</h2>
          <p className="text-xl text-purple-600 mb-8">
            Join us today and start exploring your personality!
          </p>
          <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-left text-purple-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-purple-300 rounded"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-purple-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-purple-300 rounded"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-purple-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full px-3 py-2 border border-purple-300 rounded"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="mt-2 text-left">
                <input
                  type="checkbox"
                  id="showPassword"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                <label htmlFor="showPassword" className="ml-2 text-purple-700">
                  Show Password
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-left text-purple-700 mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-3 py-2 border border-purple-300 rounded"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-purple-700 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-purple-800 transition duration-300"
            >
              Sign Up
            </button>
          </form>
          {message && <p className="mt-4 text-purple-700">{message}</p>}
        </div>
      </section>
    </div>
  );
};

export default SignUp;
