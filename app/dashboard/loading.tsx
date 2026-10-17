import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function DashboardLoading() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      {/* Скелетон шапки дашборда */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <div className="h-8 w-40 rounded-lg bg-muted animate-pulse" />
          <div className="h-4 w-72 rounded-md bg-muted animate-pulse" />
        </div>
        <div className="h-10 w-full sm:w-44 rounded-lg bg-muted animate-pulse" />
      </div>

      {/* Скелетон 4 карточек статистики */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="border-border/70">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <div className="h-4 w-28 rounded bg-muted animate-pulse" />
              <div className="h-8 w-8 rounded-md bg-muted animate-pulse" />
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="h-7 w-24 rounded bg-muted animate-pulse" />
              <div className="h-3 w-36 rounded bg-muted animate-pulse" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Скелетон основного контента */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-border/70">
          <CardHeader className="space-y-2">
            <div className="h-5 w-44 rounded bg-muted animate-pulse" />
            <div className="h-4 w-64 rounded bg-muted animate-pulse" />
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3, 4].map((row) => (
              <div
                key={row}
                className="flex items-center justify-between py-2 border-b border-border/60 last:border-0"
              >
                <div className="space-y-2">
                  <div className="h-4 w-36 rounded bg-muted animate-pulse" />
                  <div className="h-3 w-24 rounded bg-muted animate-pulse" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="space-y-2 text-right">
                    <div className="h-4 w-20 rounded bg-muted animate-pulse" />
                    <div className="h-3 w-14 rounded bg-muted animate-pulse ml-auto" />
                  </div>
                  <div className="h-5 w-16 rounded-full bg-muted animate-pulse" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/70">
          <CardHeader className="space-y-2">
            <div className="h-5 w-36 rounded bg-muted animate-pulse" />
            <div className="h-4 w-48 rounded bg-muted animate-pulse" />
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="h-4 w-20 rounded bg-muted animate-pulse" />
                <div className="h-4 w-28 rounded bg-muted animate-pulse" />
              </div>
              <div className="h-2.5 w-full rounded-full bg-muted animate-pulse" />
            </div>
            <div className="space-y-3 pt-2 border-t border-border">
              <div className="h-3 w-24 rounded bg-muted animate-pulse" />
              {[1, 2, 3].map((cat) => (
                <div key={cat} className="flex justify-between">
                  <div className="h-4 w-28 rounded bg-muted animate-pulse" />
                  <div className="h-4 w-16 rounded bg-muted animate-pulse" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
