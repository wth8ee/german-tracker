export function CalendarClient() {
  const HOURS = [
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  ];

  return (
    <div className="ml-10 shadow">
      {HOURS.map((h) => (
        <div
          key={h}
          className="h-15 w-full bg-white text-[12px] relative border-t border-slate-300"
        >
          <p className="absolute -top-2 -left-10 text-black">
            {String(h).padStart(2, "0")}:00
          </p>
          <p className="absolute -left-9 text-[10px] top-5 text-black/50">
            {String(h).padStart(2, "0")}:30
          </p>
        </div>
      ))}
    </div>
  );
}
