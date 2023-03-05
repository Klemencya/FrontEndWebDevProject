import { terser } from "@chiogen/rollup-plugin-terser";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import ts from 'rollup-plugin-typescript';
import typescript from 'typescript'

export default {
    input: 'src/main.ts',
    output: {
        file: 'dist/bundle.js'
    },
    plugins: [ts({
        typescript
    }),nodeResolve({browser: true}),terser()]
}
