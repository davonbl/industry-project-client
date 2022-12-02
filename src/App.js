import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer'
import { Map } from './components/Map/Map'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Map />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;