const PREFIX = "levina-";

export function getItem<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(PREFIX + key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function setItem<T>(key: string, value: T): void {
  try {
    window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    /* хранилище недоступно: демо работает без него */
  }
}

export const delay = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export const now = () => Date.now();
