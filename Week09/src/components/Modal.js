import ReactDOM from "react-dom";
import { useEffect } from "react";

export default function Modal({ children, onClose, actionBar }) {
  useEffect(() => {
    document.body.classList.add("overflow.hidden");

    // remove the overflow-hidden style when the modal closes
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-50"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">{children}</div>
        <div className="flex justify-end">{actionBar}</div>
      </div>
    </div>,
    document.getElementById("modalContainer")
  );
}
