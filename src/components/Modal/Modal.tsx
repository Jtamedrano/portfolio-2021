import cx from "classnames";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import React from "react";
import { HiXMark } from "react-icons/hi2";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  className?: string;
}

export const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  open,
  onClose,
  title,
  children,
  className,
}) => {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-10" as="div">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data:[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className={cx(
              "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",
              className
            )}
          >
            {!!title && (
              <>
                <div className="flex items-center justify-between">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-semibold text-gray-900"
                  >
                    {title}
                  </DialogTitle>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50 transition-colors duration-300"
                  >
                    <HiXMark className="size-6" />
                  </button>
                </div>
                <hr className="my-4 border-t border-gray-200" />
              </>
            )}
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
