const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const srcDir = String.raw`C:\Users\Admin\.cursor\projects\c-Users-Admin-OneDrive-Desktop-ligo-interior\assets`;
const destDir = String.raw`C:\Users\Admin\OneDrive\Desktop\ligo interior\images\projects\PAVAN`;
const uuid = /-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const keep = /^(IMG-20250614-WA0011|IMG-20250927-WA0007|IMG-20250927-WA0009|IMG-20250927-WA0011|IMG_7243|IMG_7244|IMG_7245|IMG_7255|IMG_7256|IMG_7286|IMG_7287|DJI_20250612_103802_130)$/;

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
            if (!keep.test(base)) {
                return null;
            }
            return { name: name, out: base + ".avif" };
        })
        .filter(Boolean)
        .sort(function (a, b) { return a.out.localeCompare(b.out, undefined, { numeric: true }); });

    for (const file of files) {
        await sharp(path.join(srcDir, file.name))
            .rotate()
            .resize({ width: 1800, withoutEnlargement: true })
            .avif({ quality: 58, effort: 4 })
            .toFile(path.join(destDir, file.out));
        console.log("wrote " + file.out);
    }
}

run().catch(function (err) {
    console.error(err);
    process.exit(1);
});
