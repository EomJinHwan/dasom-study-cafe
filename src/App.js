import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
// import { FaUser } from "react-icons/fa";  //icon info => https://react-icons.github.io/react-icons/

import MainPage from "./Main/MainPage"
import ChargeInfoPage from "./ChargeInfo/ChargeInfoPage";
import GalleryPage from "./Gallery/GalleryPage";
import MapPage from "./Map/MapPage";
import AnnouncementPage from "./Announcement/AnnouncementPage";
import ReservationPage from "./Reservation/ReservationPage";
import LoginPage from "./Login/LoginPage";
// import SignUpPage from "./SignUp/SignUpPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav className="nav-bar">
            <ul>
              <li>
                <Link to="/" className="btn btn-header">
                <span>홈</span>
                </Link>
              </li>
              <li>
                <Link to="/chargeinfo" className="btn btn-header">
                <span>이용 요금 및 이용 안내</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="btn btn-header">
                <span>갤러리</span>
                </Link>
              </li>
              <li>
                <Link to="/map" className="btn btn-header">
                <span>오시는 길</span>
                </Link>
              </li>
              <li>
                <Link to="/announcement" className="btn btn-header">
                <span>공지사항</span>
                </Link>
              </li>
              <li>
                <Link to="/reservation" className="btn btn-header">
                <span>예약하기</span>
                </Link>
              </li>
            </ul>
          </nav>
          <LoginPage />
        </header>
        
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/chargeinfo" element={<ChargeInfoPage/>}/>
          <Route path="/gallery" element={<GalleryPage/>}/>
          <Route path="/map" element={<MapPage/>}/>
          <Route path="/announcement" element={<AnnouncementPage/>}/>
          <Route path="/reservation" element={<ReservationPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
