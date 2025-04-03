// src/utils/compression.js

export const compressRLE = (input) => {
    let compressed = '';
    let count = 1;
  
    for (let i = 0; i < input.length; i++) {
      if (input[i] === input[i + 1]) {
        count++;
      } else {
        compressed += count + input[i];
        count = 1;
      }
    }
  
    return compressed;
  };
  
  export const decompressRLE = (input) => {
    let decompressed = '';
    let count = '';
  
    for (let i = 0; i < input.length; i++) {
      if (!isNaN(input[i])) {
        count += input[i];
      } else {
        decompressed += input[i].repeat(Number(count));
        count = '';
      }
    }
  
    return decompressed;
  };