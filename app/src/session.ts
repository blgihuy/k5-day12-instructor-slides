// Morning / afternoon class handling for Day 12.
//
// The Day 12 lab counts minutes 0 to 240 (4 hours); the deck writes them as the afternoon class
// (13:30 to 17:30, minute 0 = 13:30). The morning class runs the same 240 minutes (08:30 to 12:30), shifted by
// MORNING_SHIFT_HOURS (-5 hours).
//
// Slide content is written in afternoon times. localize() shifts every HH:MM between 13:00 and
// 18:59 for the morning class, and fills the {{SESSION}} / {{SESSION_RANGE}} / {{DEADLINE}} tokens.

export type Session = 'morning' | 'afternoon'

/** Hour (local time) from which the deck opens as the afternoon class. */
export const AFTERNOON_FROM_HOUR = 13

/** Morning class = afternoon schedule moved this many hours earlier (13:30 to 08:30). */
export const MORNING_SHIFT_HOURS = -5

const AFTERNOON_START = '13:30'
const AFTERNOON_END = '17:30'

export const SESSION_LABEL: Record<Session, string> = {
  morning: 'Lớp sáng',
  afternoon: 'Lớp chiều',
}

/** Submission deadline (GMT+7) per class. Day 12: ca sáng 23h59 cùng ngày, ca chiều 11h59 trưa hôm sau. */
export const DEADLINE: Record<Session, string> = {
  morning: '23h59 cùng ngày làm lab',
  afternoon: '11h59 trưa ngày hôm sau',
}

const PARAM = 'ca'
const PARAM_VALUE: Record<Session, string> = { morning: 'sang', afternoon: 'chieu' }

/** Session forced by the URL (?ca=sang or ?ca=chieu), if any. */
export function sessionFromUrl(): Session | null {
  const v = new URLSearchParams(window.location.search).get(PARAM)
  if (v === PARAM_VALUE.morning) return 'morning'
  if (v === PARAM_VALUE.afternoon) return 'afternoon'
  return null
}

/** Session from the clock at the moment the deck opens. */
export function sessionFromClock(now: Date = new Date()): Session {
  return now.getHours() < AFTERNOON_FROM_HOUR ? 'morning' : 'afternoon'
}

/** Write the chosen session into the URL so a reload or a shared link keeps it. */
export function pinSessionInUrl(session: Session) {
  const url = new URL(window.location.href)
  url.searchParams.set(PARAM, PARAM_VALUE[session])
  window.history.replaceState(null, '', url)
}

export function clearSessionInUrl() {
  const url = new URL(window.location.href)
  url.searchParams.delete(PARAM)
  window.history.replaceState(null, '', url)
}

function shiftTime(hhmm: string, hours: number) {
  const [h, m] = hhmm.split(':').map(Number)
  return `${String(h + hours).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

const TIME_RE = /\b(1[3-8]):([0-5]\d)\b/g

/** Localize slide HTML or a title for a session. */
export function localize(text: string, session: Session): string {
  const shift = session === 'morning' ? MORNING_SHIFT_HOURS : 0
  const range = `${shiftTime(AFTERNOON_START, shift)} đến ${shiftTime(AFTERNOON_END, shift)}`
  // Shift the slide times first, then fill the tokens. The range is already shifted, so it must
  // not pass through TIME_RE again (17:30 -> 12:30 would become 07:30).
  let out = text
  if (shift !== 0) {
    out = out.replace(TIME_RE, (_, h: string, m: string) => shiftTime(`${h}:${m}`, shift))
  }
  return out
    .replaceAll('{{SESSION}}', SESSION_LABEL[session])
    .replaceAll('{{SESSION_RANGE}}', range)
    .replaceAll('{{DEADLINE}}', DEADLINE[session])
}
