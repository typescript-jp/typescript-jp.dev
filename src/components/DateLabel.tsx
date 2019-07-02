export const DateLabel = (date: Date) => {
  const formatter = new Intl.DateTimeFormat(
    typeof navigator !== "undefined" ? navigator.language : "en"
  )
  return formatter.format(date)
}
