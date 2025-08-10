import run from '@snurls/esbuild-config'
import pkg from './package.json' with {type: 'json'}
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin'

const config = {
    plugins: [vanillaExtractPlugin()],
    loader: {
        '.woff': 'file',
        '.woff2': 'file',
        '.eot': 'file',
        '.ttf': 'file',
        '.otf': 'file',
    },
}

run({
    pkg,
    config
})