import {Login} from './pages/Login'
import { Home } from './pages/Home';
import Rooms from './pages/Rooms'
import Assets from './pages/Assets'
import Faultyequip from './pages/Faultyequipreport';
import { Navbar } from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AssetsTable from './pages/AssetsTable';
import QrTable from './pages/qrgenerator';
import Faultyequipreview from './pages/Faultyequipreview';
import Assetsmod from './pages/Assetsmod';
import Assetstablemod from './pages/Assetstablemod';
import Editasset from './pages/Editasset';
import Editassetmod from './pages/Editassetmod';
import Reviewdetails from './pages/Reviewdetails';
import Reviewdetailsedit from './pages/Reviewdetailsedit';
import { StudentDatabase } from './pages/Studentdatabase';
import LendAsset from './pages/Lendasset';
import Lendcart from './pages/Lendcart';
import Returnasset from './pages/Returnasset';
import Studentdbtable from './pages/Studentdbtable';

function App() {
  return (
    <>
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={
          <>
          <Login />
         </>
        } />
        <Route path="home" element={
        <>
        <Navbar />
        <Home />
        </> } />
        <Route path="labs" element={<><Navbar />
        <Rooms /></>} />
        <Route path="assets" element={<><Navbar />
        <Assets /></>} />
        <Route path="assetstable" element={<><Navbar />
        <AssetsTable /></>} />
        <Route path="assetsmod" element={<><Navbar />
        <Assetsmod /></>} />
        <Route path="editasset" element={<><Navbar />
        <Editasset /></>} />
        <Route path="editassetmod" element={<><Navbar />
        <Editassetmod /></>} />
        <Route path="assetstablemod" element={<><Navbar />
        <Assetstablemod /></>} />
        <Route path="faultyeqre" element={<><Navbar />
        <Faultyequip /></>} />
        <Route path="faultyeqrev" element={<><Navbar />
        <Faultyequipreview /></>} />
        <Route path="reviewdetails" element={<><Navbar />
        <Reviewdetails /></>} />
        <Route path="reviewdetailsedit" element={<><Navbar />
        <Reviewdetailsedit /></>} />
        <Route path="studentdb" element={<><Navbar />
        <StudentDatabase /></>} />
        <Route path="studentdbtable" element={<><Navbar />
        <Studentdbtable /></>} />
        <Route path="qrtable" element={<><Navbar />
        <QrTable /></>} />
        <Route path="lendtable" element={<><Navbar />
        <LendAsset /></>} />
        <Route path="lendcart" element={<><Navbar />
        <Lendcart /></>} />
        <Route path="returnasset" element={<><Navbar />
        <Returnasset /></>} />
      </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;