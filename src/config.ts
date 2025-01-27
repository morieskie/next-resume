export const appUrl =
  process.env.NODE_ENV === "production"
    ? process.env.RESUME_APP_URL || "https://morieskie.github.io/next-resume"
    : "http://localhost:3000/next-resume";
export const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.RESUME_API_URL || "https://morieskie.github.io/next-resume"
    : "http://localhost:3000/next-resume";
// conast apiUrl = 'http://localhost:8000/api'