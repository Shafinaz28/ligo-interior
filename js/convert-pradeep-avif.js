const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const srcDir = String.raw`C:\Users\Admin\.cursor\projects\c-Users-Admin-OneDrive-Desktop-ligo-interior\assets`;
const destDir = String.raw`C:\Users\Admin\OneDrive\Desktop\ligo interior\images\projects\PRADEEP`;
const uuid = /-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

async function run() {
    fs.mkdirSync(destDir, { recursive: true });
    const files = fs.readdirSync(srcDir)
        .map(function (name) {
            const marker = "_images_";
            const idx = name.indexOf(marker);
            if (idx < 0) {
                return null;
            }
            const base = path.parse(name.slice(idx + marker.length)).name.replace(uuid, "");
            if (!/^DSC\d+/i.test(base)) {
                return null;
            }
            return { name: name, out: base.replace(/_-_Copy$/i, "-copy") + ".avif", num: Number((base.match(/\d+/) || [0])[0]) };
        })
        .filter(Boolean)
        .sort(function (a, b) { return a.num - b.num || a.out.localeCompare(b.out); });

    for (const file of files) {
        await sharp(path.join(srcDir, file.name))
            .rotate()
            .resize({ width: 1800, withoutEnlargement: true })
            .avif({ quality: 58, effort: 4 })
            .toFile(path.join(destDir, file.out));
        console.log("wrote " + file.out);
    }
    console.log("count " + files.length);
}

run().catch(function (err) {
    console.error(err);
    process.exit(1);
});
