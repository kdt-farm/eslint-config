import type { Linter } from 'eslint'
import { composer } from 'eslint-flat-config-utils'
import { antfu, comments, format, type FormatOptions, gitignore, ignores, importX, javascript, jsonc, kdt, node, perfectionist, promise, regexp, sonar, stylistic, typescript, type TypescriptOptions, unicorn, unusedImports, vue } from './configs'

export interface DefineConfigOptions {
    typescript?: TypescriptOptions
    format?: FormatOptions
    vue?: boolean
    config?: Linter.Config
    configs?: Linter.Config[]
}

export function defineConfig({ typescript: typescriptOptions = {}, format: formatOptions, vue: isVueEnabled, config, configs: configs_ }: DefineConfigOptions = {}) {
    typescriptOptions.componentExts ??= []

    if (isVueEnabled) {
        typescriptOptions.componentExts.push('vue')
    }

    const configs = composer(ignores(), gitignore(), javascript(), typescript(typescriptOptions), stylistic(), comments(), importX(), jsonc(), node(), promise(), regexp(), unusedImports(), antfu(), kdt(), format(formatOptions), perfectionist(), sonar(), unicorn())

    if (isVueEnabled) {
        configs.append(vue())
    }

    if (config) {
        configs.append(config)
    }

    if (configs_) {
        configs.append(configs_)
    }

    return configs
}
