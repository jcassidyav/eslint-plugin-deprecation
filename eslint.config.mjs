import tsParser from "@typescript-eslint/parser";

export default [{
    ignores: ["**/*.d.ts"],
}, {
    languageOptions: {
        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: "module",

        parserOptions: {
            project: "./tsconfig.json",
        },
    },

    rules: {},
}];