import { useState, useEffect } from 'react';

function UserData() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          User Information
        </h1>
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-3">
            <p className="text-sm text-gray-500 uppercase tracking-wide">Name</p>
            <p className="text-lg text-gray-800 font-medium">{user.name}</p>
          </div>
          <div className="border-b border-gray-200 pb-3">
            <p className="text-sm text-gray-500 uppercase tracking-wide">Email</p>
            <p className="text-lg text-gray-800">{user.email}</p>
          </div>
          <div className="pb-3">
            <p className="text-sm text-gray-500 uppercase tracking-wide">Phone</p>
            <p className="text-lg text-gray-800">{user.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserData;