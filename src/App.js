import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppointmentForm from './AppointmentForm';
import Home from './Home';
import Chat from './Chat';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/appointment-form" element={<AppointmentForm />} />
        <Route path="/" element={<Home />} />
        <Route path='/chat' element={<Chat/>}/>

      </Routes>
    </Router>
  );
}

export default App;

