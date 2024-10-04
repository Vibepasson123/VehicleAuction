export const capitalizeFirstChar = (str?: string): string | null => str ? str.charAt(0).toUpperCase() + str.slice(1) : null;

export const addSpacesBeforeCapital = (str: string): string => str ? str.replace(/([A-Z])/g, ' $1').trim() : str;
