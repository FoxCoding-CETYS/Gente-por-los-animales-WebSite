function isUrl(value: string) {
  return /^https?:\/\//i.test(value);
}

export function locationToLink(location: string) {
  if (isUrl(location)) return location;
  if (location == "Ubicación por confirmar") return;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    location
  )}`;
}

export function shortLocation(location: string) {
  // corta en la primera coma
  return location.split(",").slice(0, 1).join(",");
}
