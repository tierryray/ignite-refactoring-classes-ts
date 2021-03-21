import { GlobalStyle } from './styles/global';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  );
};