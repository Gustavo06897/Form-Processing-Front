import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin/index';
import Form from './pages/Form/index';
import Signup from './pages/Signup/index';

function App() {
  const [forms, setForms] = useState([]);
  const [user, setUser] = useState({ name: "Usuário Placeholder" });

  const handleAddForm = (formData) => {
    setForms([...forms, formData]);
  };

return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  </>
);
}

export default App;