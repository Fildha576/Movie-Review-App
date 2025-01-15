import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import ViewReviews from './components/ViewReviews';
import AddReview from './components/AddReview';
import Home from './components/Home';
import Singlereview from './components/Singlereview';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
     <Route path="/addreview" element={<AddReview/>}/>
     <Route path="/viewreviews" element={<ViewReviews/>}/>
     <Route path="/review/:id" element={<Singlereview/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
