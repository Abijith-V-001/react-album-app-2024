import logo from './logo.svg';
import './App.css';
import AddImage from './Components/AddImage';
import SearchImage from './Components/SearchImage';
import DeleteImage from './Components/DeleteImage';
import Viewall from './Components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddImage/>}/>
      <Route path='/search' element={<SearchImage/>}/>
      <Route path='/delete' element={<DeleteImage/>}/>
      <Route path='/viewall' element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
