import { Navbar } from "@/components/navbar";
import { Card, CardHeader } from "@/components/ui/card";

export default function MarketingLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Скелетон Hero-секции */}
        <section className="py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <div className="h-7 w-64 rounded-full bg-muted animate-pulse mb-6" />
            <div className="h-10 sm:h-14 w-full max-w-2xl rounded-xl bg-muted animate-pulse" />
            <div className="h-10 sm:h-14 w-3/4 max-w-xl rounded-xl bg-muted animate-pulse mt-3" />
            <div className="h-5 w-full max-w-lg rounded-md bg-muted animate-pulse mt-6" />
            <div className="h-5 w-2/3 max-w-md rounded-md bg-muted animate-pulse mt-2" />

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <div className="h-11 w-full sm:w-48 rounded-lg bg-muted animate-pulse" />
              <div className="h-11 w-full sm:w-48 rounded-lg bg-muted animate-pulse" />
            </div>
          </div>
        </section>

        {/* Скелетон карточек возможностей */}
        <section className="border-t border-border/60 bg-muted/20 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="border-border/70 bg-card/80">
                  <CardHeader className="space-y-3">
                    <div className="h-10 w-10 rounded-lg bg-muted animate-pulse" />
                    <div className="h-5 w-1/2 rounded-md bg-muted animate-pulse" />
                    <div className="h-4 w-full rounded-md bg-muted animate-pulse" />
                    <div className="h-4 w-4/5 rounded-md bg-muted animate-pulse" />
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
