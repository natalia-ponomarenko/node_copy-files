/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const fs = require('fs/promises');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  terminal.question(
    'Please enter the file name you want to copy and a new file name: ',
    async(input) => {
      const [file1, file2] = input.trim().split(' ');

      if (file1 === file2) {
        console.log('Source and destination filenames are the same.');
        terminal.close();

        return;
      }

      try {
        const content = await fs.readFile(file1, 'utf8');

        await fs.writeFile(file2, content, 'utf8');
        console.log('File has been copied successfully.');
      } catch (error) {
        console.log('Error occurred:', error);
      }

      terminal.close();
    }
  );
}

main();
