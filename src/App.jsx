import './App.scss';
import AboutComp from './components/AboutComp/AboutComp';
import HowUse from './components/HowUse/HowUse';
import WhoEats from './components/WhoEats/WhoEats';

function App() {
  return (
    <div className="App">
      <AboutComp />
      <WhoEats />
      <HowUse />
    </div>
  );
}

export default App;
