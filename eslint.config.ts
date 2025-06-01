import { defineConfig } from './src'

export default defineConfig({
    typescript: { tsconfig: { tsconfigRootDir: import.meta.dirname } },
    vue: true,
})
