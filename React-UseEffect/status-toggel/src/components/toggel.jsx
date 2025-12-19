import { useState } from 'react';

const StatusToggle = () => {
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    setStatus(!status);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Status Toggle Component
        </h1>
        
        <div className="text-center">
          <button
            onClick={handleToggle}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
          >
            Toggle Status
          </button>
          
          <div className="mt-4 text-sm text-gray-600">
            Current Status: <span className="font-bold">{status ? 'TRUE' : 'FALSE'}</span>
          </div>
        </div>

        {/* Conditional Rendering using ternary operator */}
        {status ? <ComponentA /> : <ComponentB />}
      </div>
    </div>
  );
};

export default StatusToggle;
