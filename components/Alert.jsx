import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Alert = ({ success, message, link, onDismiss, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onDismiss();
    }, duration);

    return () => clearTimeout(timer);
  }, [onDismiss, duration]);
  if(success){
    toast.success(message);
  }else{
    toast.error(message);
  }

  if (!isVisible) return null;

  return (
    <>
      <Toaster />
    </>
  );
};

export default Alert;
