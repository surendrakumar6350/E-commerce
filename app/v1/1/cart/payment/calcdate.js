


export function getCurrentDateAndTime() {
    const now = new Date();
    const day = now.getDate();
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(now);
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
  
    return `${day}${getDaySuffix(day)} ${month} ${year}`;
  }
  
  function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
  
  // Example usage
  const currentDateAndTime = getCurrentDateAndTime();
  console.log(currentDateAndTime);