import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function MarketingPage() {
  const features = [
    {
      title: "Контроль расходов",
      description:
        "Отслеживайте регулярные списания и подписки в едином минималистичном интерфейсе.",
      icon: CreditCard,
    },
    {
      title: "Мгновенные уведомления",
      description:
        "Получайте напоминания перед каждым продлением, чтобы вовремя отменять ненужное.",
      icon: Zap,
    },
    {
      title: "Надежная защита",
      description:
        "Готовая база на Next.js, Prisma и Better Auth с безопасным хранением данных.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* Hero-секция */}
        <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Next.js + Prisma + Better Auth + shadcn/ui
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Управляйте всеми подписками{" "}
              <span className="text-primary">в одном месте</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Чистый и быстрый стартовый шаблон для отслеживания регулярных
              платежей, аналитики расходов и управления аккаунтом.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto gap-2 px-8" asChild>
                <Link href="/sign-up">
                  Начать бесплатно
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-8"
                asChild
              >
                <Link href="/dashboard">Открыть демо дашборда</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Без привязки карты
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Готовая адаптивная верстка
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Чистый UI на shadcn/ui
              </span>
            </div>
          </div>
        </section>

        {/* Секция возможностей */}
        <section
          id="features"
          className="border-t border-border/60 bg-muted/20 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Базовые блоки для быстрого старта
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground">
                Никакой лишней логики — только готовые адаптивные компоненты,
                которые легко подключить к вашим экшнам.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={feature.title}
                    className="border-border/70 bg-card/80"
                  >
                    <CardHeader>
                      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        <div className="mx-auto max-w-7xl px-4">
          © 2026 SubTracker. Все права защищены.
        </div>
      </footer>
    </div>
  );
}
