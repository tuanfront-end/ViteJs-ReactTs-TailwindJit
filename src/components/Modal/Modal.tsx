import React, { Children, ReactNode, useState } from "react";
import ReactDOM from "react-dom";
import Button from "components/Button/Button";
import ButtonClose from "components/ButtonClose/ButtonClose";
import Trigger from "./Trigger";
import Panel from "./Panel";
import { Transition } from "@headlessui/react";

export interface ModalProps {}

interface TriggerStatic {
  Trigger: typeof Trigger;
}
interface PanelStatic {
  Panel: typeof Panel;
}

const Modal: React.FC<ModalProps> & TriggerStatic & PanelStatic = ({
  children,
}) => {
  const [isVisable, setIsVisable] = useState(false);

  const handleOpenModal = () => setIsVisable(true);
  const handleClickClose = () => setIsVisable(false);

  const renderPanel = (panelChild: ReactNode) => {
    return (
      <Transition show={isVisable}>
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
                onClick={handleClickClose}
              >
                <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
              </div>
            </Transition.Child>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              className="inline-block transform"
            >
              <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full relative"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <span className="absolute top-1 right-1 p-1">
                  <ButtonClose onClick={handleClickClose} />
                </span>
                {panelChild || (
                  <React.Fragment>
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <h3
                            className="text-lg leading-6 font-medium text-gray-900"
                            id="modal-headline"
                          >
                            Deactivate account
                          </h3>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              Are you sure you want to deactivate your account?
                              All of your data will be permanently removed. This
                              action cannot be undone.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={handleClickClose}
                      >
                        Deactivate
                      </button>
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </React.Fragment>
                )}
              </div>
            </Transition.Child>
          </div>
        </div>
      </Transition>
    );
  };

  const renderButtonOpen = (triggerChild: ReactNode) => {
    return (
      <span onClick={handleOpenModal}>
        {triggerChild || <Button>Open regular modal</Button>}
      </span>
    );
  };

  const renderChil = (
    child: React.ReactElement<any, string | React.JSXElementConstructor<any>>
  ) => {
    if (!child) return null;

    if (child.type === Trigger) {
      return renderButtonOpen(child.props.children);
    }

    if (child.type === Panel) {
      return ReactDOM.createPortal(
        renderPanel(child.props.children),
        document.getElementById("modal-root") as HTMLDivElement
      );
    }
    return "Child of Modal is Modal.Trigger and Modal.Panel!";
  };

  return (
    <React.Fragment>
      {Children.map(children, (child) =>
        renderChil(
          child as React.ReactElement<
            any,
            string | React.JSXElementConstructor<any>
          >
        )
      )}
    </React.Fragment>
  );
};

Modal.Trigger = Trigger;
Modal.Panel = Panel;

export default Modal;
