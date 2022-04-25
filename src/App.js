import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './pages/components/Navbar'
import Home from './pages/Home'

function App() {
  const lightTheme = createTheme({
    palette: {
      text: {
        //primary: "#000000"
      },
      primary: {
        main: "#667c4d",
        //dark: "#0091ea",
        //light: "#f6ef77"
      },
      secondary: {
        main: '#ffa500',
      },
      background: {
        paper: '#f5f5f5',
        default: "#d3d3d3"
      },
    }
  })

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
