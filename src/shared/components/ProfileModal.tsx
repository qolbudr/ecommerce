import React from 'react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
  userName: string;
  userEmail: string;
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  onLogout,
  userName,
  userEmail,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-opacity-5 flex justify-end pt-3"
      style={{ zIndex: 1000 }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xs pt-5 bg-white rounded-lg shadow-xl border border-gray-200 absolute top-20 right-5"
      >

        <div className="flex justify-center mb-4">
          <img src={`https://ui-avatars.com/api/?name=${userName}`} className="size-20 rounded-full"></img>
        </div>

        <p className="text-lg font-bold text-center mb-1">
          {userName}
        </p>

        <p className="text-sm text-gray-600 text-center mb-5">
          {userEmail}
        </p>

        <button
          onClick={onLogout}
          className="w-full py-3 cursor-pointer text-red-600 font-bold bg-white hover:bg-red-50 transition duration-150 border-t border-gray-200 flex items-center justify-center gap-2"
        >
          <span className="text-xl">&#x23FB;</span>
          KELUAR
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;