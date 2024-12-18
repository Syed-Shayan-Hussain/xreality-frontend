import React, { useState } from "react";

import NotificationItem from '../../components/Dashboard/NotificationItem.jsx'
import img from '../../assets/no-notification.png'
import { FaChevronDown } from "react-icons/fa";


const notifications = [
  { id: 1, name: "You", action: "searched for", subject: " ways to calculate atomic mass.", time: "08:46pm", day: "Today", isRead: true },
  { id: 5, name: "You", action: " asked assistant for", subject: " calculus metholody.", time: "08:49pm", day: "Today", isRead: true },
  { id: 6, name: "You", action: "took", subject: " chemistry chapter 12 test", time: "08:06pm", day: "Yesterday", isRead: true },
  // { id: 2, name: "Wajiha Wahaj", action: "added a new assignment", subject: "in Physics.", time: "08:46pm", day: "Today", isRead: false },
  // { id: 3, name: "Wajiha Wahaj", action: "added a new assignment", subject: "in Physics.", time: "08:46pm", day: "Yesterday", isRead: false },
  // { id: 4, name: "Wajiha Wahaj", action: "added a new assignment", subject: "in Physics.", time: "08:46pm", day: "Yesterday", isRead: true },
];



const RecentActitvityPage = () => {




  return (
    <div className="max-w-7xl w-[95%] h-screen font-custom3 mx-auto bg-white p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800">Recent Activity</h2>
    

      {/* Notifications Display */}
      <div className="mt-4">
        {notifications.length > 0 ? (
          <>
            {["Today", "Yesterday"].map((day) => (
              <div key={day} className="mt-4">
                <p className="font-semibold text-sm text-gray-500">{day}</p>
                {notifications
                  .filter((n) => n.day === day)
                  .map((notification) => (
                    <NotificationItem key={notification.id} notification={notification} />
                  ))}
              </div>
            ))
            }
            <p className="text-center text-gray-400 flex items-center justify-center cursor-pointer gap-1  text-sm mt-8">See more ▼ </p>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center mt-40">
            
            <img
              src={img} // Replace with your image later
              alt="No Notifications"
              className="w-32 h-32"
            />
            <p className="text-gray-500  mt-4">No notifications Available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentActitvityPage;
