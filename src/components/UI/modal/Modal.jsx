import React from "react";

const Modal = ({ children, visible, setVisible }) => {
  const rootClasses = ["modal"];

  if (visible) {
    rootClasses.push("active");
  }

  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => {
        setVisible(false);
      }}
    >
      <div
        className="modal-content"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
