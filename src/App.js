import './App.css';
import Home from './components/Home'
import InfoSecond from './components/InfoSecond';
import HowItWorks from './components/HowItSection';
import Book from './components/Book'
import Offer from './components/Offer'
import BookOnline from './Pages/BookOnline';
import Services from './Pages/Services';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<><Home /> <InfoSecond /><HowItWorks /><Book /><Offer /></>} />
        {/* <Route path='/info' element={<InfoSecond />} />
        <Route path='/how' element={<HowItWorks />} />
        <Route path='/bookfirst' element={<Book />} />
        <Route path='/offer' element={<Offer />} /> */}
        <Route path='/services' element={<Services />} />
        <Route exact path="/bookonline" element={<BookOnline />} />
      </Routes>
    </>
  );
}

export default App;
