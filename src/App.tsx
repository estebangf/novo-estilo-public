import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import CircularProgress from './Components/Loading/CircularProgress';
import { useApp } from './Tools/Hooks';
import AuthProvider from './Auth/AuthProvider';
import { GetTurn, MyTurns } from './Pages/Turns';

function App() {
  const app = useApp()

  return (
    <AuthProvider>
      {!app.isReady ?
        <CircularProgress loading={!app.isReady} />
        :
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<GetTurn />} />
            <Route path="/get-turn" element={<GetTurn />} />
            <Route path="/my-turns" element={<MyTurns />} />
            <Route path="/about" element={<About />} />

            <Route path="*" element={<NotFound />} />

          </Routes>
        </BrowserRouter>
      }
      <CircularProgress loading={app.loading} />
    </AuthProvider >
  );
}


export default App;
