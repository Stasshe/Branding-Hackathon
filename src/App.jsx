import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigator from './components/Navigator';
import Home from './Pages/Home';
import About from './Pages/About';
import Schedule from './Pages/Schedule';
import Guideline from './Pages/Guideline';

function App() {
  return (
    <BrowserRouter basename="/Branding-Hackathon">
      <Navigator />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/guideline" element={<Guideline />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
