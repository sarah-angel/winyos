import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Toolbar, 
  CssBaseline,
} from '@mui/material'

import Header from './pages/components/Navbar/index'
import Footer from './pages/components/Footer'
import Home from './pages/Home/index'

function App() {
  const lightTheme = createTheme({
    palette: {
      text: {
        //primary: "#000000"
      },
      primary: {
        main: "#f17b49",
        //dark: "#0091ea",
        //light: "#f6ef77"
      },
      secondary: {
        main: '#ffa500',
      },
      background: {
        paper: '#f5f5f5',
        default: '#fff7e6',
      },
    },
    typography: {
      fontFamily: [
        'Nunito',
      ]
    }
  })

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <CssBaseline />
        <div className="App">
          <Header />
          
          {/* <Toolbar /> */}
          
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
