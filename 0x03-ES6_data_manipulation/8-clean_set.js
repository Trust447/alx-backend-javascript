export default function cleanSet(set, startString) {
    if (!(set instanceof Set) || typeof startString !== 'string') {
      return '';
    }
  
    const result = [];
    set.forEach((item) => {
      if (typeof item === 'string' && item.startsWith(startString)) {
        result.push(item.slice(startString.length));
      }
    });
  
    return result.join('-');
  }
  