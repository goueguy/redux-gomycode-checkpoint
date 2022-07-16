import { Route, Routes } from 'react-router-dom';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AddTask/>}/>
        <Route path="/task/:id/edit" element={<EditTask/>}/>
      </Routes>
    </div>
  );
}

export default App;
