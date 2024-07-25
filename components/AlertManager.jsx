import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Alert from "./Alert";
import toast, { Toaster } from "react-hot-toast";
import { setShowDeleteDialog } from "./redux/Action";

const AlertManager = () => {
  const [showAlert, setShowAlert] = useState(false);
  const deletePortfolioResult = useSelector(
    (state) => state.deletePortfolioResult
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (deletePortfolioResult) {
      setShowAlert(true);
      dispatch(setShowDeleteDialog(false));
    }
  }, [deletePortfolioResult]);

  const handleDismiss = () => {
    setShowAlert(false);
    dispatch(setShowDeleteDialog(false));
  };

  if (!showAlert || !deletePortfolioResult) return null;

  return (
    <Alert
      success={deletePortfolioResult.success}
      message={deletePortfolioResult.message}
      onDismiss={handleDismiss}
    />
  );
};

export default AlertManager;
