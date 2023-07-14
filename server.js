import { readdir } from 'node:fs/promises';
const targetPath = process.argv[2];
async function readDir(path) {
    try {
        const files = await readdir(path);
        for (const file of files) {
            console.log(file);
        }
    }
    catch (err) {
        console.error(err);
    }
}
await readDir(targetPath);
