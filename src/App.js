import './App.css';
import {Social} from './components/socialProfile/Social'
import { Statistic } from './components/Statistic/Statistic';
import { Friends } from './components/Friends/Friends';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <div className="App">
      <Social/>

    <Statistic/>

    <Friends/>

    <TransactionHistory/>
    </div>
  );
}

export default App;
