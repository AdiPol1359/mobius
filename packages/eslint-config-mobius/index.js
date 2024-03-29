/** @type {import('eslint').Linter.Config} */
module.exports = {
	plugins: ['simple-import-sort'],
	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'@typescript-eslint/consistent-type-imports': 'error',
		'@typescript-eslint/no-unused-vars': 'error',
		'import/newline-after-import': 'error',
		'import/first': 'error',
		'simple-import-sort/exports': 'error',
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					['^@?\\w'],
					['^\\.'],
					['^@/'],
					['^(?!@/).+\\u0000$'],
					['^@/.+\\u0000$'],
				],
			},
		],
	},
	settings: {
		'import/resolver': {
			typescript: {
				project: ['apps/*/tsconfig.json', 'packages/*/tsconfig.json'],
			},
			node: true,
		},
	},
};
