import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../home/HomePage';
import { MainPage } from '../pages/MainPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/main-page/*' element={<MainPage />} />
    </Routes>
  );
};
