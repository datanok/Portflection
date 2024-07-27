import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { clearAlert } from "./redux/Action";

const AlertManager = () => {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    if (alert) {
      if (alert.success) {
        toast.success(alert.message);
      } else {
        toast.error(alert.message);
      }
      // Automatically clear alert after showing
      dispatch(clearAlert());
    }
  }, [alert, dispatch]);

  return <Toaster position="top-center" />;
};

export default AlertManager;
