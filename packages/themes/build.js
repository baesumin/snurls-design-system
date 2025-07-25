import * as esbuild from 'esbuild'
import pkg from './package.json' with {type: 'json'}

const dev = process.argv.includes("--dev")
const minify = !dev

const external = Object.keys({
    ...pkg.devDependencies,
    ...pkg.peerDependencies
})

const baseConfig = {
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify,
    sourcemap: true,
    outdir: 'dist',
    target: 'es2019',
    external
}

async function run() {
    // context 생성
    const [esmCtx, cjsCtx] = await Promise.all([
        esbuild.context({
            ...baseConfig,
            format: 'esm',
        }),
        esbuild.context({
            ...baseConfig,
            format: 'cjs',
            outExtension: { ".js": ".cjs" },
        })
    ])


    if (dev) {
        // watch 모드 활성화
        await Promise.all([esmCtx.watch(), cjsCtx.watch()])
        console.log('Watching for changes...')
    } else {
        // 프로덕션: 한 번만 빌드 후 종료
        await Promise.all([esmCtx.rebuild(), cjsCtx.rebuild()])
        esmCtx.dispose()
        cjsCtx.dispose()
    }
}

run().catch(() => {
    console.error("Build failed")
    process.exit(1)
})
