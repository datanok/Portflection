"use client";
import React, { useState } from "react";
import { connect } from "react-redux";
import { setProfileDialog, setUserData } from "./redux/Action";

function profileDialog(props) {
  const handleClose = () => {
    props.setProfileDialog(false);
  };
  const [selectedAvatar, setAvatar] = useState("");

  const Avatars = [
    { name: "avatar1", icon: "/assets/images/avatar1.png" },
    { name: "avatar2", icon: "/assets/images/avatar2.png" },
    { name: "avatar3", icon: "/assets/images/avatar3.png" },
    { name: "avatar4", icon: "/assets/images/avatar4.png" },
    { name: "avatar5", icon: "/assets/images/avatar5.png" },
    { name: "avatar6", icon: "/assets/images/avatar6.png" },
  ];
  const selectAvatar = (avatar) => {
    props.setUserData({ ...props.userData, profileImg: avatar.icon });
    const selAvatar = avatar.name;
    setAvatar(selAvatar);
  };
  return (
    <div
      id="select-modal"
      tabindex="-1"
      aria-hidden="true"
      className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Choose your Avatar
            </h3>
            <button
              type="button"
              onClick={() => handleClose()}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="select-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="flex gap-4 flex-wrap">
            {Avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar.icon}
                alt={avatar.name}
                className={
                  "w-24 h-24 rounded-full  m-2 cursor-pointer hover:ring-4 ring-blue-500 " +
                  (avatar.name === selectedAvatar ? "ring-4 ring-blue-500" : "")
                }
                onClick={() => selectAvatar(avatar)}
              />
            ))}
          </div>
          <div className="p-4 md:p-5">
            <button
              onClick={() => props.setProfileDialog(false)}
              className="text-white inline-flex w-full justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userData: state.userData,
});
const mapDispatchToProps = {
  setUserData,
  setProfileDialog,
};

export default connect(mapStateToProps, mapDispatchToProps)(profileDialog);
