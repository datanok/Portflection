"use client";
import React, { Suspense, useEffect, useState } from "react";
import { getUser, setShowDeleteDialog } from "@components/redux/Action";
import { connect } from "react-redux";
import ProfileLoading from "./ProfileLoading";
import Image from "next/image";
import DeleteDialog from "@components/DeleteDialog";
import Alert from "@components/Alert";
import AlertManager from "@components/AlertManager";

function Page(props) {
  useEffect(() => {
    props.getUser();
  }, []);

  const handleClose = () => {
    props.setShowDeleteDialog(false);
  };
  return (
    <>
      <Suspense fallback={<ProfileLoading />}>
        {props.loading ? (
          <ProfileLoading />
        ) : (
          <div class=" w-fit mx-auto  bg-gray-200 p-4 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center pb-10">
              <Image
                src={props.userProfileData?.image}
                alt="Profile Picture"
                width={100}
                height={100}
                className="rounded-full shadow-lg"
              />

              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {props.userProfileData?.username}
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                {props.userProfileData?.email}
              </span>
              <div class="flex mt-4 md:mt-6">
                <a
                  href="#"
                  onClick={() => props.setShowDeleteDialog(true)}
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Delete Portfolio
                </a>
                {/* <a
                  href="#"
                  class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Message
                </a> */}
              </div>
            </div>
          </div>
        )}

        <AlertManager />
      </Suspense>
      {props.showDeleteDialog && (
        <DeleteDialog
          showDeleteDialog={props.showDeleteDialog}
          handleClose={handleClose}
        />
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  userProfileData: state.userProfileData,
  loading: state.loading,
  deletePortfolioResult: state.deletePortfolioResult,
  showDeleteDialog: state.showDeleteDialog,
});

const mapDispatchToProps = {
  getUser,
  setShowDeleteDialog,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
