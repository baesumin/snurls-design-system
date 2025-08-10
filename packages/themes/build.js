import run from '@snurls/esbuild-config'
import pkg from './package.json' with {type: 'json'}

run({
    pkg,
    config: {
        loader: {
            '.woff': 'file',
            '.woff2': 'file',
        },
    }
})