import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux"; //we have to bind the action creators before diaptching
import { actionCreators } from "./state_reducer/index";

function App() {

  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);

  //console.log(AC);
  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(1000)}> Deposit </button>
      <button onClick={() => withdrawMoney(1000)}> Withdraw </button>
    </div>
  );
}

export default App;
