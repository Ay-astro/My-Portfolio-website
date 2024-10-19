import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer';
import About from './component/About';
import { PorfolioProvider } from './component/PorfolioContext';
import './App.css';
import Repos from './component/Repos';

function App() {
  return (
    <PorfolioProvider>
    <div className="App">
      <Router>
        <div className='App-container w-screen flex flex-col justify-between h-screen'>
        <Navbar/>
        <main className='container mx-auto px-3 xl:px-55 pb-12'> 
          <Routes>
            <Route exact path='/' element={<About/>}/>
            <Route exact path='/repos' element={<Repos/>}/>
          </Routes>
        </main>
        <Footer/>
        </div>

      </Router>
    </div>
    </PorfolioProvider>
  );
}

export default App;
