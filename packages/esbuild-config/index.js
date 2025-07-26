const { context } = require("esbuild");

async function run({
    entryPoints = ["src/index.ts"],
    pkg,
    config = {},
}) {
    const dev = process.argv.includes("--dev");
    const watch = process.argv.includes("--watch");
    const minify = !dev;

    const external = Object.keys({
        ...pkg.dependencies,
        ...pkg.peerDependencies,
    });

    const baseConfig = {
        entryPoints,
        bundle: true,
        minify,
        sourcemap: true,
        outdir: "dist",
        target: "es2019",
        external,
        ...config,
    };

    // context 생성 (esm, cjs 각각)
    const [esmCtx, cjsCtx] = await Promise.all([
        context({
            ...baseConfig,
            format: "esm",
        }),
        context({
            ...baseConfig,
            format: "cjs",
            outExtension: { ".js": ".cjs" },
        }),
    ]);

    if (watch) {
        // watch 모드
        await Promise.all([esmCtx.watch(), cjsCtx.watch()]);
        console.log("Watching for changes...");
    } else {
        // 일반 빌드
        await Promise.all([esmCtx.rebuild(), cjsCtx.rebuild()]);
        await esmCtx.dispose();
        await cjsCtx.dispose();
    }
}

module.exports = run;
