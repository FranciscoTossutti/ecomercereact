import logo from './logo.svg';
import './App.css';
import Menu from './componentes/Menu';
import ItemListConteiner from './componentes/itemListConteiner';

function App() {
  return (
    <div className="App">
      <Menu />
      <h1>Ecommerce</h1>
      <ItemListConteiner 
       producto1='Parlante'/>
    </div>
  );
}

export default App;
