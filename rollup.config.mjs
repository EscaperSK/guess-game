import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

export default {
    input: 'resources/js/app.js',
    output: {
        file: 'public/index.js',
        sourcemap: 'inline',
        format: 'iife'
    },
    plugins: [
        nodeResolve(),
        postcss({ extract: true }),
    ],
};
