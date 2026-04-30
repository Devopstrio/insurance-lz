import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import InsuranceDashboard from './pages/InsuranceDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-navy-900 border border-navy-800 p-8 rounded-2xl text-center">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400 max-w-md mx-auto">The insurance governance engine is synchronizing cross-border policy baselines. This secure module will be operational following the completion of the audit cycle.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<InsuranceDashboard />} />
          <Route path="/landingzones" element={<Placeholder name="Insurance Landing Zones" />} />
          <Route path="/claims" element={<Placeholder name="Automated Claims Processing" />} />
          <Route path="/policy" element={<Placeholder name="Policy Administration System" />} />
          <Route path="/analytics" element={<Placeholder name="Actuarial Data Analytics" />} />
          <Route path="/compliance" element={<Placeholder name="Regulatory Compliance & Audit" />} />
          <Route path="/identity" element={<Placeholder name="Insurance Identity Governance" />} />
          <Route path="/security" element={<Placeholder name="Data Protection & Encryption" />} />
          <Route path="/broker" element={<Placeholder name="Broker & Partner Gateway" />} />
          <Route path="/health" element={<Placeholder name="Operational Health & SLAs" />} />
          <Route path="/settings" element={<Placeholder name="Platform & Entity Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
