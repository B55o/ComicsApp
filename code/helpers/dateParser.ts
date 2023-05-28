export function dateParser(day: string, month: string, year: string): string {
    const fDay = day.length === 1 ? `0${day}` : day;
    const fMonth = month.length === 1 ? `0${month}` : month;

    return  `${fDay}.${fMonth}.${year}`;
}