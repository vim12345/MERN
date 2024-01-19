// frontend/src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import MultiStepFormPage from './pages/MultiStepFormPage';
import SubmissionTablePage from './pages/SubmissionTablePage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/form" component={MultiStepFormPage} />
        <Route path="/submissions" component={SubmissionTablePage} />
        {/* Add additional routes for other pages/components */}
      </Switch>
    </Router>
  );
};

export default App;
