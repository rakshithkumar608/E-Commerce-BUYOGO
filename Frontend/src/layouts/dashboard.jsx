import React from "react";

const Dashboard = () => {
  const token = localStorage.getItem("token");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">🎉 Welcome to Dashboard</h1>
        <p className="text-gray-500">
          You are logged in successfully.
        </p>

        {token && (
          <p className="text-xs text-gray-400 mt-4 break-all">
            Token: {token}
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
