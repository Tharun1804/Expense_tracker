import './App.css';
import Expenses from './component/expenses';
import NewExpense from './new_expense/newexpense';
import Counter from './Counter';

function App() {
  const DUMMY_DATA = [
    {
      id: 'e1',
      title: 'Groceries',
      amount: 101.12,
      date: new Date(2021, 7, 14),
    },
    { id: 'e2',
      title: 'New Mobile',
      amount: 799.49,
      date: new Date(2020, 2, 12) },
    {
      id: 'e3',
      title: 'Car Repair',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New work desk',
      amount: 450.54,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div className="App">
      <NewExpense/>
      <Expenses expenses = {DUMMY_DATA}/>
       {/* <form class="form">
        <div>
          <label>Title</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Amount</label>
          <input type="number"></input>
        </div>
        <div>
        <label>Date</label>
        <input type="date"></input>
        </div>
        <div>
        <button>Add Amount</button>
        <button>cancel</button>
        </div>
      </form> */}
     
    </div>
  );
}
//<Counter/>
function App(){
  const[expenses,setExpenses] = useState
  return(<Counter/>)
}

export default App;