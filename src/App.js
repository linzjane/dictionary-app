import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        <a href="https://github.com/linzjane/dictionary-app">Coded</a> by{" "}
        <a href="https://lyndsey-thompson.netlify.app/">Lyndsey Thompson</a>
      </footer>
    </div>
  );
}
