export function getEnvVar(name: string): string | undefined;
export function getEnvVar(name: string, fallback: string): string;
export function getEnvVar(name: string, fallback?: string): string | undefined {
  // Vite injects import.meta.env at build time
  try {
    const meta = (import.meta as unknown as Record<string, Record<string, string>>).env;
    if (meta?.[name]) return meta[name];
  } catch {
    // not in a Vite context
  }
  try {
    const env = (globalThis as Record<string, unknown>).process as
      | { env?: Record<string, string | undefined> }
      | undefined;
    if (env?.env?.[name]) {
      return env.env[name];
    }
  } catch {
    // Browser environment without process
  }
  return fallback;
}
