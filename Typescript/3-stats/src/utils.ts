export const dateStringToDate = (dateString: string): Date => {
  //"23/08/2024" it returns => [23, 08, 2024]
  const dateParts = dateString.split("/").map((value: string): number => {
    return parseInt(value);
  });

  //Date object definition- Date(year, month, day)
  //month is 0-index based thats why -1
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
