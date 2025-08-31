module.exports = {
  arrowParens: "avoid",
  printWidth: 100,
  tabWidth: 2,
  trailingComma: "es5", 
  semi: true,
  singleQuote: false,
  useTabs: false,
  bracketSpacing: true,
  endOfLine: "auto",
  importOrder: ["^react$", "^next/(.*)$", "<THIRD_PARTY_MODULES>", "^@heroicons/(.*)$", "^~~/(.*)$"],
  importOrderSortSpecifiers: true,
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
};