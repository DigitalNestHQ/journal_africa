import Portal from "./Portal";
import "./index.css";

export const Modal = ({ children, closeModal, title }) => {
  return (
    <Portal>
      <div className="modal">
        <button tabIndex={-1} onClick={closeModal} className="modal-overlay" />

        <div className="modal-main">
          <div className="">
            <div className="header">
              <h3 className="">{title}</h3>

              <button onClick={closeModal} className="close">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    fill="currentColor"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-4">{children}</div>
          </div>
        </div>
      </div>
    </Portal>
  );
};
