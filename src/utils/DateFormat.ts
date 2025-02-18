import dayjs from "dayjs";

export function EventDataFormat(dateString: string) {
  const date = dayjs(dateString); // Parse the date string using dayjs
  return date.format("ddd, MMM DD, YYYY");
}

export function EventTimeFormat(dateString: string): string {
  const date = dayjs(dateString);
  return date.format("hh:mm A");
}
