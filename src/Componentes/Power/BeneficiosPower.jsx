import React from 'react';
import { FaChartLine, FaUsers, FaLock, FaPuzzlePiece, FaSyncAlt, FaRobot, FaFileAlt, FaBolt } from 'react-icons/fa';

function BeneficiosPower() {
  return (
    <div className="bg-gray-50 py-16 font-dmsans">
      <div className="container mx-auto px-4 text-center">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mt-2">Beneficios Power</h2>
          <p className="text-gray-600 mt-4">
            We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaBolt className="text-yellow-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800">Realtime analytics</h3>
            <p className="text-gray-600 mt-2">Create reports with an easy-to-use drag-and-drop designer.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaUsers className="text-pink-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800">Collaborate securely</h3>
            <p className="text-gray-600 mt-2">Share/publish your reports with your colleagues.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaPuzzlePiece className="text-red-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800">Embedded analytics</h3>
            <p className="text-gray-600 mt-2">Get a personalized analytics tool in your own brand voice.</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaLock className="text-purple-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800">Easy and intuitive</h3>
            <p className="text-gray-600 mt-2">Create complex models with simple everyday language.</p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaSyncAlt className="text-blue-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800">Seamless data sync</h3>
            <p className="text-gray-600 mt-2">Synchronize your reports with your team.</p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaRobot className="text-green-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800">AI data predictions</h3>
            <p className="text-gray-600 mt-2">Get automated analytics results with AI-driven tools.</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BeneficiosPower;
