export function transcriptionFormat(source: string): string {
  let noSpecialSigns: string = source.replace(/[\[\]\{\}]/g, "");
  const temp: string = substringRemove(noSpecialSigns, "Alt");
  const target: string = substringRemove(temp, "alt");

  return target;
}

function substringRemove(source: string, substring: string): string {
  const altIndex: number = source.indexOf(substring);
  let target: string = altIndex !== -1 ? source.substring(0, altIndex) : source;

  return target;
}
