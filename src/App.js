import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';

function App() {
  return (
    <div>
      hello from app
      <ExpenseForm />
      <ExpenseList />
      <Alert />
    </div>
  );
}

export default App;
