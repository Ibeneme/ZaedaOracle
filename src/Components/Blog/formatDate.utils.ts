// utils/dateFormatter.ts
export const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
  
    // Format the date
    const formatter = new Intl.DateTimeFormat('en-GB', options);
    const [day, month, year, time] = formatter.formatToParts(date).map(part => part.value);
    
    // Get the day number with ordinal suffix
    const dayWithSuffix = (dayNum: number) => {
      if (dayNum >= 10 && dayNum <= 20) return `${dayNum}th`; // handle 11th, 12th, 13th
      switch (dayNum % 10) {
        case 1: return `${dayNum}st`;
        case 2: return `${dayNum}nd`;
        case 3: return `${dayNum}rd`;
        default: return `${dayNum}th`;
      }
    };
  
    return `${dayWithSuffix(parseInt(day))} ${month} ${year}, ${time}`;
  };
  