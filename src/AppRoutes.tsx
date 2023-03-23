import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import HomePage from './pages/HomePage';
import PeoplePage from './pages/PeoplePage';

const AppRoutes =() =>{

  return (
    <Router> 
      <Routes> 
          <Route path="/" element={<HomePage/>}/>
          <Route path="/peoplepage" element={<PeoplePage />}/>
      </Routes>
    </Router>
  )
}

export default AppRoutes;