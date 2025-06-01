import { concat } from 'eslint-flat-config-utils'
import plugin from 'eslint-plugin-better-tailwindcss'

export interface TailwindOptions {
    entryPoint?: string
    tailwindConfig?: string
    attributes?: string[]
    callees?: string[]
    variables?: string[]
    tags?: string[]
}

export const tailwind = (options: TailwindOptions = {}) => concat({
    plugins: {
        'better-tailwindcss': plugin,
    },
    settings: {
        'better-tailwindcss': options,
    },
    rules: {
        ...plugin.configs['recommended-error'].rules,
        'better-tailwindcss/multiline': 'off',
        'better-tailwindcss/no-unregistered-classes': 'off',
    },
})
