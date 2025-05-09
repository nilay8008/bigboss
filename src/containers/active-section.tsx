import { createContext, useContext, useState } from "react";
import type { SectionName } from "@/lib/types";

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: (section: SectionName) => void;
  timeOfLastClick: number;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export function ActiveSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection: (section) => {
          setActiveSection(section);
          setTimeOfLastClick(Date.now());
        },
        timeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error("useActiveSectionContext must be used within ActiveSectionProvider");
  }
  return context;
} 