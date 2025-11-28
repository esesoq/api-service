import { fileURL } from 'url';
import { parse } from 'path';
import { file } from 'fs';
import { Console } from 'console';

class Parser {
  constructor(filePath) {
    this.filePath = filePath;
    this.fileStream = file(this.filePath);
    this.fileStats = file.statSync(this.filePath);
  }

  async parseFile() {
    console.log(`File Path: ${this.filePath}`);
    console.log(`File Size: ${this.fileStats.size} bytes`);
    console.log(`File Type: ${this.fileStats.isFile() ? 'file' : 'directory'}`);

    const lines = await new Promise((resolve, reject) => {
      let data = '';
      this.fileStream.on('data', (chunk) => {
        data += chunk.toString();
      });
      this.fileStream.on('end', () => {
        resolve(data);
      });
      this.fileStream.on('error', (err) => {
        reject(err);
      });
    });

    const fileInfo = parse(fileURL(this.filePath));
    console.log(`File Name: ${fileInfo.base}`);
    console.log(`File Extension: ${fileInfo.ext}`);
    console.log(`File Path: ${fileInfo.dir}`);

    const linesArray = lines.split('\n');
    console.log(`Number of Lines: ${linesArray.length}`);

    for (const line of linesArray) {
      console.log(line);
    }
  }
}

export default Parser;