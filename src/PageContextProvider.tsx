import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export type IContext = {
  modalState: boolean;
  setModalState: (input: boolean) => void;
};

export const PageContext = createContext<Partial<IContext>>({});

const PageContextProvider: React.FC = ({ children }) => {
  const [modalState, setModalState] = useState(false);
  return (
    <PageContext.Provider value={{ modalState, setModalState }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
