
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContaner/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {Routes,Route} from 'react-router-dom'
import Error from './components/Error/Error';
function App() {

  return (
    <div className="App">
    <NavBar></NavBar>
    <Routes>
        <Route path="/" element= {<ItemListContainer greeting="AfterClass Navegation-Routing"/>}/>
        <Route path="/category/:catID"  element= {<ItemListContainer greeting="AfterClass Navegation-Routing"/>}/>     
        <Route path="/product/:itemID"  element= {<ItemDetailContainer/>}/>     
        <Route path="*"  element= {<Error></Error>}/>     

    </Routes>

    </div>
  );
}

export default App;


// const categories= [
//   {id: '001', address:'/',text:'Todas '},
//   {id:'002', address:'/category/Terror',text:'Terror'},
//   {id: '003', address:'/category/Acción',text:'Acción'},
//   {id: '004', address:'/category/Aventura',text:'Aventura'},
//   {id: '006', address:'/category/Drama',text:'Drama'}
// ];