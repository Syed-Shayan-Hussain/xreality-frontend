import {   FaUserCircle  } from "react-icons/fa";
 const NotificationItem = ({ notification }) => (
    <div className="flex items-center border-b border-gray-200 justify-between py-4">
      <div className="flex items-center space-x-3">
        {/* <img
          src="https://via.placeholder.com/40"
          alt="profile"
          className="w-10 h-10 rounded-full"
        /> */}
          <FaUserCircle className="text-primary mx-2 text-4xl" />
        <p className="text-gray-700 text-sm">
          <span className="font-medium">{notification.name}</span> {notification.action}{" "}
          <span className="text-primary font-medium">{notification.subject}</span>
        </p>
      </div>
      <span className="text-gray-500 text-xs">{notification.time}</span>
    </div>
  );
  export default NotificationItem;