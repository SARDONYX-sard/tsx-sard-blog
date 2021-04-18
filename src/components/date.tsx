import { parseISO, format } from 'date-fns'

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'yyyy年 L月 d日')}</time>
}
