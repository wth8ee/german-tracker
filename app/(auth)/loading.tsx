import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function AuthLoading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 px-4 py-12">
      {/* Скелетон логотипа */}
      <div className="mb-8 flex items-center gap-2.5">
        <div className="h-9 w-9 rounded-lg bg-muted animate-pulse" />
        <div className="h-6 w-28 rounded-md bg-muted animate-pulse" />
      </div>

      {/* Скелетон карточки формы */}
      <Card className="w-full max-w-md border-border/80 shadow-md">
        <CardHeader className="space-y-2 flex flex-col items-center">
          <div className="h-7 w-44 rounded-md bg-muted animate-pulse" />
          <div className="h-4 w-64 rounded-md bg-muted animate-pulse" />
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="h-4 w-32 rounded bg-muted animate-pulse" />
            <div className="h-10 w-full rounded-md bg-muted animate-pulse" />
          </div>

          <div className="space-y-2">
            <div className="h-4 w-20 rounded bg-muted animate-pulse" />
            <div className="h-10 w-full rounded-md bg-muted animate-pulse" />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 pt-2">
          <div className="h-10 w-full rounded-md bg-muted animate-pulse" />
          <div className="h-4 w-48 rounded bg-muted animate-pulse" />
        </CardFooter>
      </Card>
    </div>
  );
}
