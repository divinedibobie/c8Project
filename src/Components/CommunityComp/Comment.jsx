import React from "react";
import avatar from "../../assets/images/6596121.png";
import { Link } from "react-router-dom";

const Comment = ({ name, comment, logo, history }) => {
  const handleNavigateToProfile = () => {
    console.log("Navigating to user profile page");
    history.push("/profile");
  };

  return (
    <div className="flex items-center mt-2 w-full">
      <Link to="/profile" onClick={handleNavigateToProfile}>
        <div className="flex -space-x-1 overflow-hidden">
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src={logo || avatar}
            alt="image"
          />
        </div>
      </Link>
      <div className="flex flex-col items-start bg-gray-100 rounded-2xl p-1 max-w-[600px]">
        <p className="font-roboto text-black text-sm no tracking-normal leading-none p-1 font-medium">
          {name}
        </p>
        <p className="font-roboto text-black text-sm no tracking-normal leading-none p-1 font-medium">
          {comment}
        </p>
      </div>
    </div>
  );
};

export default Comment;
