"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface LessonCompletionContextType {
  triggerRefresh: () => void;
  refreshKey: number;
}

const LessonCompletionContext = createContext<LessonCompletionContextType | undefined>(undefined);

export function LessonCompletionProvider({ children }: { children: ReactNode }) {
  const [refreshKey, setRefreshKey] = useState(0);

  const triggerRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <LessonCompletionContext.Provider value={{ triggerRefresh, refreshKey }}>
      {children}
    </LessonCompletionContext.Provider>
  );
}

export function useLessonCompletion() {
  const context = useContext(LessonCompletionContext);
  if (context === undefined) {
    throw new Error("useLessonCompletion must be used within a LessonCompletionProvider");
  }
  return context;
}
