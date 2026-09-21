const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const srcDir = String.raw`C:\Users\Admin\.cursor\projects\c-Users-Admin-OneDrive-Desktop-ligo-interior\assets`;
const destDir = String.raw`C:\Users\Admin\OneDrive\Desktop\ligo interior\images\projects\KHS BAGALUR`;

async function run() {
    fs.mkdirSync(destDir, { recursive: true });
    const files = fs.readdirSync(srcDir)
        .map(function (name) {
            const match = name.match(/KHS-SO_(\d+)/i);
            if (!match) {
                return null;
            }
            return { name: name, num: Number(match[1]) };
        })
        .filter(Boolean)
        .sort(function (a, b) { return a.num - b.num; });

    for (const file of files) {
        const outName = "KHS-SO_" + file.num + ".avif";
        await sharp(path.join(srcDir, file.name))
            .rotate()
            .resize({ width: 1800, withoutEnlargement: true })
            .avif({ quality: 58, effort: 4 })
            .toFile(path.join(destDir, outName));
        console.log("wrote " + outName);
    }
}

run().catch(function (err) {
    console.error(err);
    process.exit(1);
});
