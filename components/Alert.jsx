import React, { useEffect, useState } from "react";

const Alert = ({ success, message, link, onDismiss, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const alertColor = success ? "green" : "red";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onDismiss();
    }, duration);

    return () => clearTimeout(timer);
  }, [onDismiss, duration]);

  if (!isVisible) return null;

  return (
    <>
      <div
        id={`alert-border-${success ? "3" : "2"}`}
        className={`fixed top-4 right-4 z-50 flex flex-col mb-4 text-${alertColor}-800  bg-${alertColor}-50 dark:text-${alertColor}-400 dark:bg-gray-800 dark:border-${alertColor}-800 shadow-lg max-w-sm`}
        role="alert"
      >
        <div className="w-full  h-1 m-0 p-0">
          <div
            className={`bg-${alertColor}-500 h-1`}
            style={{
              width: "100%",
              animation: `shrink ${duration / 1000}s linear forwards`,
            }}
          ></div>
        </div>
        <div className="flex items-center m-4">
          <svg
            className="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <div className="ms-3 text-sm font-medium">
            {message}
            {link && (
              <a
                href={link.href}
                className="font-semibold underline hover:no-underline"
              >
                {link.text}
              </a>
            )}
          </div>
          <button
            type="button"
            className={`ms-auto -mx-1.5 -my-1.5 bg-${alertColor}-50 text-${alertColor}-500 rounded-lg focus:ring-2 focus:ring-${alertColor}-400 p-1.5 hover:bg-${alertColor}-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-${alertColor}-400 dark:hover:bg-gray-700`}
            onClick={() => {
              setIsVisible(false);
              onDismiss();
            }}
            aria-label="Close"
          >
            <span className="sr-only">Dismiss</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>

        <style jsx>{`
          @keyframes shrink {
            from {
              width: 100%;
            }
            to {
              width: 0%;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Alert;
