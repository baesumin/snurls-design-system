import run from '@snurls/esbuild-config'
import pkg from './package.json' with {type: 'json'}
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin'

const config = {
    plugins: [vanillaExtractPlugin()]
}

run({
    pkg,
    config
})