export function isFutureDate(dateStr: string) {
  const today = new Date();
  const date = new Date(dateStr);

  today.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);

  return date >= today;
}

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function formatDate(date: string) {
  return dateFormatter.format(new Date(date));
}

export function formatDateRange(start: string, end: string) {
  return `${dateFormatter.format(new Date(start))} – ${dateFormatter.format(
    new Date(end)
  )}`;
}
