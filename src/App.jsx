import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResetPassword from './components/resetpassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
