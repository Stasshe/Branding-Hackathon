// src/App.jsx

import Navigator from './components/Navigator';
import Home from './Pages/Home';
// import Footer from './components/Footer'; // ★これを削除（またはコメントアウト）

function App() {
  return (
    <>
      <Navigator />
      <main>
        <Home />
      </main>
      {/* <Footer /> */} {/* ★ここを削除してください */}
    </>
  );
}

export default App;