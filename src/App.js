import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import CryptoList from "./components/CryptoList";
import Pagination from "./components/Pagination";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="card users-container">
          <Search />
          <CryptoList />
          <Pagination />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
