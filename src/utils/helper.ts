export const capitalizeFirstChar = (str?: string): string | null => str ? str.charAt(0).toUpperCase() + str.slice(1) : null;

export const addSpacesBeforeCapital = (str: string): string => str ? str.replace(/([A-Z])/g, ' $1').trim() : str;

export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, maxLength)}...`;
};

export const formatHumanReadableDate = (
  dateString: string | null | undefined,
  includeTime: boolean = false
): string => {
  if (!dateString) {
    return '';
  }
  const date = new Date(dateString.replace(/\//g, '-').replace(' ', 'T'));
  if (isNaN(date.getTime())) {
    return '';
  }
  const formattedDate = date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (includeTime) {
    const formattedTime = date.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    return `${formattedDate}, ${formattedTime}`;
  }
  return formattedDate;
};

export const formatValue = (StringValue: string | number) => {
  if (typeof StringValue === 'string') {
    return StringValue.charAt(0).toUpperCase() + StringValue.slice(1);
  }
  return StringValue;
};




