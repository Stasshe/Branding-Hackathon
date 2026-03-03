import Navigator from './components/Navigator';
import Home from './Pages/Home';
import Footer from './components/Footer'; // ★追加
import './App.css';

function App() {
  return (
    <>
      <Navigator />
      <main>
        <Home />
      </main>
      <Footer /> {/* ★一番下に追加 */}
    </>
  );
}

export default App;