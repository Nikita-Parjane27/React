import { useState } from 'react';

const ColorToggle = () => {
  const [isRed, setIsRed] = useState(true);

  const handleToggle = () => {
    setIsRed(!isRed);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Color Toggle Component
        </h1>
        
        <div
          style={{
            backgroundColor: isRed ? 'red' : 'blue',
            color: 'white',
            padding: '40px',
            borderRadius: '12px',
            textAlign: 'center',
            fontSize: '15px',
            fontWeight: 'bold',
            marginBottom: '20px',
            transition: 'background-color 0.3s ease'
          }}
        >
          This div changes color on button click!
          <div style={{ marginTop: '10px', fontSize: '16px' }}>
            Current Color: {isRed ? 'RED' : 'BLUE'}
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="w-full px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors shadow-md"
        >
          Toggle Color
        </button>

        {/* Info Display */}
        <div className="mt-4 text-center text-sm text-gray-600">
          Click the button to toggle between Red and Blue
        </div>
      </div>
    </div>
  );
};

export default ColorToggle;