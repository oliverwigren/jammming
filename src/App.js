import Header from './components/Header';
import SearchBarArea from './components/SearchBarArea';
import "./App.css";
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBarArea />

      <Main />
    </div>
  );
}

export default App;
