export function getDateFormat(date){
    if (!(date instanceof Date)) {
        date = new Date(date); 
      }
    return date.toISOString().slice(0,10);
}

export function getDateMinusDays(date, days){
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
}