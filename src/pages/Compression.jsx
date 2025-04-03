import React, { useState } from 'react';
import { compressRLE, decompressRLE } from '../utils/compression';
import './Compression.css';

const Compression = () => {
  const [inputText, setInputText] = useState('');
  const [compressedText, setCompressedText] = useState('');
  const [decompressedText, setDecompressedText] = useState('');

  const handleCompress = () => {
    const compressed = compressRLE(inputText);
    setCompressedText(compressed);
  };

  const handleDecompress = () => {
    const decompressed = decompressRLE(compressedText);
    setDecompressedText(decompressed);
  };

  return (
    <div className="compression-page">
      <h2>Compression Algorithm (RLE)</h2>
      <div className="input-section">
        <textarea
          placeholder="Enter text to compress"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleCompress}>Compress</button>
      </div>

      {compressedText && (
        <div className="output-section">
          <h3>Compressed Text:</h3>
          <p>{compressedText}</p>
          <button onClick={handleDecompress}>Decompress</button>
        </div>
      )}

      {decompressedText && (
        <div className="output-section">
          <h3>Decompressed Text:</h3>
          <p>{decompressedText}</p>
        </div>
      )}
    </div>
  );
};

export default Compression;