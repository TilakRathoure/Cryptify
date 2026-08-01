export const safeHttpUrl = (value) => {
  if (!value || typeof value !== "string") return null;
  try {
    const url = new URL(value);
    if (url.protocol === "http:" || url.protocol === "https:") {
      return url.href;
    }
  } catch {
    return null;
  }
  return null;
};
