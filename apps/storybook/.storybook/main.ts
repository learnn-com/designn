import path from 'path'

export default {
  stories: ['../stories/Intro.stories.mdx', '../stories/**/*.stories.*'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
    disableTelemetry: true
  },
  webpackFinal: (baseConfig: any) => {
    const { module = {} } = baseConfig

    // by default, the rules for jsx|tsx files are including the whole monorepo root,
    // but it's enough to check only the storybook package
    const tsxRules = module.rules.filter((rule: any) => rule?.test?.test('test.tsx'))
    tsxRules.forEach((rule: any) => {
      rule.include = [path.resolve(__dirname, '/.'), path.resolve(__dirname, '../packages/desio')]
    })

    return {
      ...baseConfig
    }
  }
}
