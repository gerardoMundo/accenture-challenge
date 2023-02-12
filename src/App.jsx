import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { GlobalStyles } from './style/styles';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppRouter />
    </BrowserRouter>
  );
};
