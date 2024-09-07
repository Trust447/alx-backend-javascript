export default function createInt8TypedArray(length, position, value) {
    if (position < 0 || position >= length) {
      throw new Error('Position outside range');
    }
    
    const newBuffer = new ArrayBuffer(length);
    const int8 = new Int8Array(newBuffer);
  
    // Set the value at the specified position
    int8[position] = value;
  
    return new DataView(newBuffer);
  }
  