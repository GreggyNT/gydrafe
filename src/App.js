import { Routes, Route } from 'react-router-dom';
import Catalog from './Catalog';
import FullInfo from './FullInfo';



const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/items/:id" element={<FullInfo />} />
       </Routes>
    </>
 );
};

export default App;