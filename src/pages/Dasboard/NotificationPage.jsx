import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaEllipsisV } from "react-icons/fa";
import NotificationItem from "../../components/Dashboard/NotificationItem.jsx";
import img from "../../assets/no-notification.png";

const notifications = [
  { id: 1, name: "Wajiha Wahaj", action: "added a new assignment", subject: "in Physics.", time: "08:46pm", day: "Today", isRead: true },
  { id: 5, name: "Wajiha Wahaj", action: "added a new assignment", subject: "in Physics.", time: "08:49pm", day: "Today", isRead: true },
  { id: 6, name: "Wajiha Wahaj", action: "added a new assignment", subject: "in Physics.", time: "08:06pm", day: "Yesterday", isRead: true },
];

const NotificationPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const getFilteredNotifications = () => {
    if (activeTab === "All") {
      return notifications;
    } else if (activeTab === "New") {
      return notifications.filter((n) => !n.isRead);
    } else if (activeTab === "Unread") {
      return notifications.filter((n) => !n.isRead && n.day === "Today");
    }
    return [];
  };

  const filteredNotifications = getFilteredNotifications();

  const markAllAsRead = () => {
    // Logic for marking all as read
    console.log("Marking all as read");
  };

  const deleteAllNotifications = () => {
    // Logic for deleting notifications
    console.log("Deleting all notifications");
  };

  return (
    <div className="max-w-7xl w-[95%] h-screen mx-auto bg-white p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800">Notifications</h2>
        {/* Dropdown Menu */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-gray-600 focus:outline-none p-2 rounded-full hover:bg-gray-100"
          >
            <FaEllipsisV size={18} />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 w-40 mt-2 bg-white border border-gray-200 rounded-lg shadow-md z-10">
              <button
                onClick={markAllAsRead}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Mark all as read
              </button>
              <button
                onClick={deleteAllNotifications} className="block px-4 py-2 text-sm text-gray-700 hover
                w-full text-left" > Delete </button> </div> )} </div> </div>
                  <div className="flex border-b border-gray-200 mt-4">
    {["All", "New", "Unread"].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`text-sm px-4 py-2 ${
          activeTab === tab
            ? "text-primary border-b-2 border-purple-600"
            : "text-gray-500"
        }`}
      >
        {tab}
      </button>
    ))}
    <Link to="/dashboard/activity" className="text-sm px-4 py-2 text-gray-500">
      Recent Activity
    </Link>
    <Link to="/dashboard/tasks" className="text-sm px-4 py-2 text-gray-500">
      Upcoming Tasks
    </Link>
  </div>

  {/* Notifications Display */}
  <div className="mt-4">
    {filteredNotifications.length > 0 ? (
      <>
        {["Today", "Yesterday"].map((day) => (
          <div key={day} className="my-6">
            <p className="font-semibold text-gray-500">{day}</p>
            {filteredNotifications
              .filter((n) => n.day === day)
              .map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
              ))}
          </div>
        ))}
        <p className="text-center text-gray-400 flex items-center justify-center cursor-pointer gap-1 text-sm mt-8">
          See more ▼
        </p>
      </>
    ) : (
      <div className="flex flex-col items-center justify-center mt-40">
        <img
          src={img}
          alt="No Notifications"
          className="w-32 h-32"
        />
        <p className="text-gray-500 mt-4">No notifications available</p>
      </div>
    )}
  </div>
</div>
); };

export default NotificationPage;
