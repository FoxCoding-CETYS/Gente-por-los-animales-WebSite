interface GoogleCalendarEvent {
  id: string;
  summary: string;
  description?: string;
  location?: string;
  start: {
    date?: string;
    dateTime?: string;
  };
}

export async function getPublicEvents() {
  const calendarId = process.env.CALENDAR_ID;
  const apiKey = process.env.GOOGLE_API_KEY;

  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events` +
      `?key=${apiKey}` +
      `&singleEvents=true` +
      `&orderBy=startTime` +
      `&timeMin=${new Date().toISOString()}`,
    { next: { revalidate: 3600 } } // cache 1h
  );

  if (!res.ok) {
    throw new Error("Error fetching calendar events");
  }

  const data = await res.json();
  return data.items as GoogleCalendarEvent[];
}
