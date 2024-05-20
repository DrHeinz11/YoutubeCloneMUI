export function formatNumber(numberString: string): string {
    const number: number = parseInt(numberString, 10);
  
    if (isNaN(number)) {
      return 'Invalid number string';
    }
  
    if (number >= 1_000_000_000) {
      return `${(number / 1_000_000_000).toFixed(1)}MM`;
    } else if (number >= 1_000_000) {
      return `${(number / 1_000_000).toFixed(1)}M`;
    } else if (number >= 1_000) {
      return `${Math.floor(number / 1_000)}K`;
    } else {
      return number.toString();
    }
  }