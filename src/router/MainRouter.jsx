/* eslint-disable react/prop-types */
// MainRouter.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import ItemListContainerComponent from '../components/ItemListContainer/ItemListContainerComponent'

const MainRouter = ({productos}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={ productos && <ItemListContainerComponent productos={productos} />} />
        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;

