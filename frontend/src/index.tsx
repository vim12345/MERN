// frontend/src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import MultiStepFormPage from './pages/MultiStepFormPage';
import SubmissionTablePage from './pages/SubmissionTablePage';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/form" component={MultiStepFormPage} />
        <Route path="/submissions" component={SubmissionTablePage} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
export default App;
