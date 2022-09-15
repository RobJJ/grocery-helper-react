import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  //
  useEffect(() => {
    const timeOut = setTimeout(() => {
      // Dont need to pass in args because you have defaults!
      removeAlert();
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [list]);
  //
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
