import type { YearMonth } from '~/data/career'

const MONTH_YEAR = new Intl.DateTimeFormat('en-GB', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
})

/** `'2025-04'` → `'Apr 2025'`. Parsed as UTC so the month never shifts by timezone. */
export function formatYearMonth(value: YearMonth): string {
  return MONTH_YEAR.format(new Date(`${value}-01T00:00:00Z`))
}

/** `'2023-11' … '2024-10'` → `'Nov 2023 — Oct 2024'`. */
export function formatRange(start: YearMonth, end: YearMonth | 'present'): string {
  return `${formatYearMonth(start)} — ${end === 'present' ? 'Present' : formatYearMonth(end)}`
}

export function formatMonthYear(date: Date): string {
  return MONTH_YEAR.format(date)
}

/** `<time datetime="…">` needs an ISO date; `'2025-04'` is valid for that attribute. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10)
}
