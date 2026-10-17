import {
  CreditCard,
  TrendingUp,
  Calendar,
  Wallet,
  Plus,
  ArrowUpRight,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/sign-in");
  }

  const stats = [
    {
      title: "Расходы в месяц",
      value: "4 890 ₽",
      change: "+12% к прошлому месяцу",
      icon: Wallet,
    },
    {
      title: "Активные подписки",
      value: "8",
      change: "2 продления на этой неделе",
      icon: CreditCard,
    },
    {
      title: "Годовой прогноз",
      value: "58 680 ₽",
      change: "Экономия 6 400 ₽/год",
      icon: TrendingUp,
    },
    {
      title: "Ближайшее списание",
      value: "Через 3 дня",
      change: "Spotify Duo — 499 ₽",
      icon: Calendar,
    },
  ];

  const recentSubscriptions = [
    {
      name: "Figma Professional",
      category: "Дизайн и работа",
      price: "1 200 ₽ / мес",
      date: "18 окт",
      status: "Активна",
    },
    {
      name: "YouTube Premium",
      category: "Развлечения",
      price: "399 ₽ / мес",
      date: "21 окт",
      status: "Активна",
    },
    {
      name: "ChatGPT Plus",
      category: "ИИ и продуктивность",
      price: "1 950 ₽ / мес",
      date: "25 окт",
      status: "Активна",
    },
    {
      name: "Яндекс Плюс",
      category: "Экосистема",
      price: "299 ₽ / мес",
      date: "01 ноя",
      status: "Пауза",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      {/* Заголовок дашборда */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Дашборд
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Сводка ваших активных подписок и предстоящих платежей
          </p>
        </div>
        <Button className="w-full sm:w-auto gap-2">
          <Plus className="h-4 w-4" />
          Добавить подписку
        </Button>
      </div>

      {/* Карточки метрик */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="border-border/70">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Основной контент дашборда */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Список последних подписок */}
        <Card className="lg:col-span-2 border-border/70">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg">Ближайшие списания</CardTitle>
              <CardDescription>
                Регулярные платежи, запланированные на текущий месяц
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="gap-1 text-xs">
              Все
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-border">
              {recentSubscriptions.map((sub) => (
                <div
                  key={sub.name}
                  className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0 gap-4"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold truncate">{sub.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {sub.category}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-right">
                      <p className="text-sm font-medium">{sub.price}</p>
                      <p className="text-xs text-muted-foreground flex items-center justify-end gap-1">
                        <Clock className="h-3 w-3" />
                        {sub.date}
                      </p>
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        sub.status === "Активна"
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {sub.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Правая колонка — распределение бюджета */}
        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="text-lg">Лимит бюджета</CardTitle>
            <CardDescription>
              Использовано 69% от месячного лимита
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Потрачено</span>
                <span className="font-semibold">4 890 ₽ / 7 000 ₽</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[69%] rounded-full bg-primary" />
              </div>
            </div>

            <div className="space-y-3 pt-2 border-t border-border">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                По категориям
              </p>
              <div className="space-y-2.5 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Работа и ИИ</span>
                  <span className="font-medium">3 150 ₽</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Развлечения</span>
                  <span className="font-medium">1 140 ₽</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Облако и сервисы
                  </span>
                  <span className="font-medium">600 ₽</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
