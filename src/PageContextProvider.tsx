import React, { createContext, useState } from "react";

export type IContext = {
  modalState: boolean;
  setModalState: (input: boolean) => void;
  imageArray: string[];
  setImageArray: (images: string[]) => void;
};

export const PageContext = createContext<Partial<IContext>>({});

const PageContextProvider: React.FC = ({ children }) => {
  const [modalState, setModalState] = useState(false);
  const [imageArray, setImageArray] = useState<string[]>([]);
  return (
    <PageContext.Provider
      value={{ modalState, setModalState, imageArray, setImageArray }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
