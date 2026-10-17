"use client";

import { authClient } from "@/lib/auth-client";
import { createContext, useContext } from "react";

type AuthContextType = {
  session: typeof authClient.$Infer.Session | null;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({
  children,
  initialSession,
}: {
  children: React.ReactNode;
  initialSession: any;
}) {
  const { data: clientSession } = authClient.useSession();

  const session = clientSession || initialSession;

  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  );
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth должен использоваться внутри AuthProvider");
  }
  return context;
};
