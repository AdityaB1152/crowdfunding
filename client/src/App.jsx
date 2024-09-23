import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import CreateCampaign from './pages/CreateCampaign';

function App() {
  const isSmallScreen = window.innerWidth >= 640
  return (
    <div className="relative sm:-8 p-4 bg-[] min-h-screen flex flex-row" style={{ position: 'relative',
      padding: '1rem',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#13131a',  // Replace 'someColor' with your desired background color
      marginTop: '-8px',
    }}>
      <div style={{
        display: isSmallScreen ? 'flex' : 'none',
        marginRight: '2.5rem',
        position: 'relative',
      }}>
        <Sidebar />
      </div>
      <div style={{
        flexGrow: 1,
        width: window.innerWidth < 640 ? '100%' : 'auto', // Full width for small screens
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingRight: isSmallScreen ? '1.25rem' : '0', // Padding for small screens and up
      }}>

        <NavBar />
        
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} /> */}
          <Route path="/create-campaign" element={<CreateCampaign />} />
          {/* <Route path="/campaign-details/:id" element={<CampaignDetails />} /> */}
        </Routes>
      </div>
      </div>
  );
}

export default App;
