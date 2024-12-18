import React, { useState } from 'react';
import AuthNav from '../../components/Auth/AuthNav';
import { Link } from 'react-router-dom';
import avatar1 from '../../assets/avatar1.png';
import avatar2 from '../../assets/avatar2.png';
import avatar3 from '../../assets/avatar3.png';

const AvatarPage = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const roles = [
    { id: 'Avatar1', label: 'lorem ipsum', img: avatar1 },
    { id: 'Avatar2', label: 'lorem ipsum', img: avatar2 },
    { id: 'Avatar3', label: 'lorem ipsum', img: avatar3 },
    { id: 'Avatar4', label: 'lorem ipsum', img: avatar3 },
  ];
  
  const handleCardClick = (role) => {
    setSelectedRole((prevRole) => (prevRole === role ? null : role)); // Toggle the selection
  };

  return (
    <div className="max-w-7xl w-full h-screen mx-auto">
      <AuthNav />
      <div className="max-w-7xl flex flex-col mt-12 mx-auto text-center">
        <div>
          <h1 className="text-3xl font-bold my-4">Choose Your Bot Avatar</h1>
          <h5 className="text-gray-500 text-xl my-8">Choose A bot avatar to get started!</h5>

          <div className="flex max-w-5xl justify-around mx-auto flex-wrap gap-6">
            {roles.map((role) => (
              <div
                key={role.id}
                onClick={() => handleCardClick(role.id)}
                className={`relative flex flex-col border rounded-2xl py-10 px-12 max-w-xs  items-center cursor-pointer transition ${
                  selectedRole === role.id
                    ? ' text-gray-500  border-primary'
                    : 'hover:bg-gray-100 text-gray-500 border-gray-300'
                }`}
              >
                {/* Radio Button */}
                <input
                  type="radio"
                  name="role"
                  value={role.id}
                  checked={selectedRole === role.id}
                  onChange={() => handleCardClick(role.id)}
                  className="absolute top-4 right-4 cursor-pointer"
                />

                {/* Card Content */}
                <img src={role.img} className="w-32 mb-4" alt={role.label} />
                <p className="text-lg font-medium">{role.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="mt-8">
          <Link to={selectedRole ? `/dashboard/` : '#'}>
            <button
              className={`px-6 py-3 rounded-full font-medium w-1/4 mt-12 text-white ${
                selectedRole
                  ? 'bg-purple-500 hover:bg-purple-600'
                  : 'bg-purple-300 cursor-not-allowed'
              }`}
              disabled={!selectedRole} // Disable the button if no role is selected
            >
              {selectedRole ? `Let's Go` : `Let's Go`}
            </button>
          </Link>
        </div>

        <p className="mt-40 text-sm text-center text-gray-500">
          By creating an account, you agree to our{' '}
          <Link to="/terms" className="text-purple-500 font-medium hover:underline">
            Terms & Conditions
          </Link>{' '}
          and{' '}
          <Link to="/privacy" className="text-purple-500 font-medium hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default AvatarPage;
