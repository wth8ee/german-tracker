"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  CreditCard,
  BarChart3,
  Bell,
  Settings,
  Layers,
  X,
  LogOut,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { authClient } from "@/lib/auth-client";

export interface SidebarItem {
  title: string;
  path: string;
  icon: LucideIcon;
}

// Массив данных для генерации сайдбара
export const sidebarItems: SidebarItem[] = [
  {
    title: "Дашборд",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Подписки",
    path: "/dashboard/subscriptions",
    icon: CreditCard,
  },
  {
    title: "Аналитика",
    path: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Уведомления",
    path: "/dashboard/notifications",
    icon: Bell,
  },
  {
    title: "Настройки",
    path: "/dashboard/settings",
    icon: Settings,
  },
];

interface SidebarProps {
  isMobileOpen?: boolean;
  setIsMobileOpen?: (open: boolean) => void;
}

export function Sidebar({
  isMobileOpen: controlledOpen,
  setIsMobileOpen: setControlledOpen,
}: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [internalOpen, setInternalOpen] = useState(false);

  const isMobileOpen = controlledOpen ?? internalOpen;
  const setIsMobileOpen = setControlledOpen ?? setInternalOpen;

  async function logOut() {
    await authClient.signOut();
    router.push("/sign-in");
    router.refresh();
  }

  return (
    <>
      {/* Мобильный оверлей (Drawer) */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileOpen(false)}
          />
          <aside className="relative z-10 flex w-72 max-w-[80vw] flex-col border-r border-border bg-white p-4 shadow-xl">
            <div className="flex items-center bg-white justify-between pb-4 border-b border-border">
              <Link
                href="/dashboard"
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center gap-2.5 font-bold"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Layers className="h-4 w-4" />
                </div>
                <span className="text-base">SubTracker</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileOpen(false)}
                aria-label="Закрыть сайдбар"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav className="mt-4 flex-1 space-y-1 bg-white">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="border-t border-border pt-4">
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground"
                type="button"
                onClick={logOut}
              >
                <LogOut className="h-4 w-4" />
                <span>Выйти</span>
              </Button>
            </div>
          </aside>
        </div>
      )}

      {/* Десктопный сайдбар */}
      <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 border-r border-border bg-white">
        <div className="flex h-16 items-center gap-2.5 border-b border-border px-6 font-bold">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Layers className="h-4 w-4" />
          </div>
          <span className="text-lg tracking-tight">SubTracker</span>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-border p-4">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground"
            type="button"
            onClick={logOut}
          >
            <LogOut className="h-4 w-4" />
            <span>Выйти</span>
          </Button>
        </div>
      </aside>
    </>
  );
}
