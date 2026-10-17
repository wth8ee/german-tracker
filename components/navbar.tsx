"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Layers,
  Menu,
  X,
  LayoutDashboard,
  LogOut,
  Bell,
  Search,
  Settings,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthProvider";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

interface NavbarProps {
  onOpenMobileSidebar?: () => void;
  isDashboard?: boolean;
}

export function Navbar({
  onOpenMobileSidebar,
  isDashboard = false,
}: NavbarProps) {
  const session = useAuth();
  const router = useRouter();
  // Переменная авторизации — замени на свою сессию из Better Auth
  const isAuthorized = session.session?.user;

  // Заглушка пользователя (если image пустой — отрисуются инициалы)
  const user = session.session?.user;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Получаем инициалы из имени ("Иван Иванов" -> "ИИ")
  const initials = user?.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  async function logOut() {
    await authClient.signOut();
    router.push("/sign-in");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-white backdrop-blur-md">
      <div
        className={`flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 ${
          isDashboard ? "w-full" : "mx-auto max-w-7xl"
        }`}
      >
        {/* Левая часть: бургер сайдбара (в дашборде на мобилке), поиск или логотип */}
        <div className="flex items-center gap-3">
          {isDashboard && onOpenMobileSidebar && (
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={onOpenMobileSidebar}
              aria-label="Открыть меню сайдбара"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}

          {!isDashboard ? (
            <Link
              href="/"
              className="flex items-center gap-2.5 font-semibold tracking-tight"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-xs">
                <Layers className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold">SubTracker</span>
            </Link>
          ) : (
            <div className="relative hidden sm:block w-64 lg:w-80">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Поиск подписок и списаний..."
                className="h-9 pl-9 bg-muted/40"
              />
            </div>
          )}
        </div>

        {/* Центральные ссылки (только на главной) */}
        {!isDashboard && (
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              Главная
            </Link>
            <Link
              href="#features"
              className="transition-colors hover:text-foreground"
            >
              Возможности
            </Link>
            <Link
              href="/dashboard"
              className="transition-colors hover:text-foreground"
            >
              Дашборд
            </Link>
          </nav>
        )}

        {/* Правая часть: зависит от переменной isAuthorized */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {isAuthorized ? (
            <>
              {!isDashboard && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden sm:inline-flex gap-2"
                  asChild
                >
                  <Link href="/dashboard">
                    <LayoutDashboard className="h-4 w-4" />
                    Дашборд
                  </Link>
                </Button>
              )}

              {/* Кнопка уведомлений */}
              <Button
                variant="ghost"
                size="icon"
                className="relative text-muted-foreground hover:text-foreground"
                aria-label="Уведомления"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />
              </Button>

              {/* Профиль: аватарка или инициалы + дропдаун */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsProfileOpen((prev) => !prev)}
                  className="flex items-center gap-2.5 rounded-full border border-border bg-muted/30 p-1 pr-2.5 text-sm font-medium transition-colors hover:bg-muted"
                >
                  {user?.image ? (
                    <img
                      src={user.image}
                      alt={user.name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {initials}
                    </div>
                  )}
                  <div className="hidden sm:flex flex-col items-start leading-none">
                    <span className="text-xs font-semibold">{user?.name}</span>
                    <span className="text-[11px] text-muted-foreground">
                      {user?.email}
                    </span>
                  </div>
                  <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-popover p-1.5 text-popover-foreground shadow-lg">
                    <div className="border-b border-border px-3 py-2 sm:hidden">
                      <p className="text-xs font-semibold">{user?.name}</p>
                      <p className="text-[11px] text-muted-foreground">
                        {user?.email}
                      </p>
                    </div>
                    <Link
                      href="/dashboard"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-sm hover:bg-muted"
                    >
                      <LayoutDashboard className="h-4 w-4 text-muted-foreground" />
                      Дашборд
                    </Link>
                    <Link
                      href="/dashboard/settings"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-sm hover:bg-muted"
                    >
                      <Settings className="h-4 w-4 text-muted-foreground" />
                      Настройки профиля
                    </Link>
                    <button
                      type="button"
                      onClick={logOut}
                      className="mt-1 flex w-full items-center gap-2 rounded-lg border-t border-border px-3 py-2 text-left text-xs sm:text-sm text-destructive hover:bg-destructive/10"
                    >
                      <LogOut className="h-4 w-4" />
                      Выйти
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/sign-in">Войти</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/sign-up">Начать</Link>
              </Button>
            </div>
          )}

          {/* Бургер мобильного меню для главной страницы */}
          {!isDashboard && (
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Открыть меню"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Мобильное меню на главной */}
      {!isDashboard && isMobileMenuOpen && (
        <div className="border-t border-border bg-background px-4 pt-3 pb-5 md:hidden space-y-3">
          <nav className="flex flex-col space-y-1.5 text-sm font-medium">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-md px-2.5 py-2 hover:bg-muted"
            >
              Главная
            </Link>
            <Link
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-md px-2.5 py-2 hover:bg-muted"
            >
              Возможности
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-md px-2.5 py-2 hover:bg-muted"
            >
              Дашборд
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
