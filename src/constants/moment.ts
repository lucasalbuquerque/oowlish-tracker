export const stringToMinutes = (time: string) => {
  var s = time.split(":");
  return Number(s[0]) * 60 + Number(s[1]);
}

export const minutesToString = (time: number) => {
  return Math.trunc(time / 60)+':'+('00' + time % 60).slice(-2);
}
