import { Outlet, Route, Routes } from 'react-router-dom';
import MyNav from './components/nav/MyNav';
import Maps from './components/maps/Maps';
import Home from './components/home/Header';
import Header from './components/home/Header';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <MyNav />
            <Outlet />
          </>
        }
      >
        <Route index element={<Header />} />
        <Route path="/maps" element={<Maps />} />
      </Route>
    </Routes>
  );
};
export default App;
