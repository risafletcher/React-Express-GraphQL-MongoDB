module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: ['react', 'graphql'],
	rules: {
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
		"jsx-quotes": ['error', 'prefer-double'],
		"graphql/template-strings": ['error', {
			env: 'relay'
		}]
	}
};