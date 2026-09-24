import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface AppContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  isNewContractModalOpen: boolean;
  openNewContractModal: () => void;
  closeNewContractModal: () => void;
  isRiskDigestModalOpen: boolean;
  openRiskDigestModal: () => void;
  closeRiskDigestModal: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isNewContractModalOpen, setIsNewContractModalOpen] = useState(false);
  const [isRiskDigestModalOpen, setIsRiskDigestModalOpen] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);
  
  const openNewContractModal = () => setIsNewContractModalOpen(true);
  const closeNewContractModal = () => setIsNewContractModalOpen(false);

  const openRiskDigestModal = () => setIsRiskDigestModalOpen(true);
  const closeRiskDigestModal = () => setIsRiskDigestModalOpen(false);

  return (
    <AppContext.Provider value={{
      isAuthenticated,
      login,
      logout,
      isNewContractModalOpen,
      openNewContractModal,
      closeNewContractModal,
      isRiskDigestModalOpen,
      openRiskDigestModal,
      closeRiskDigestModal
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
