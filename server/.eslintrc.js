module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["@typescript-eslint", "node", "prettier"],
  env: {
    es6: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json"
  },
  rules: {
    "prettier/prettier": ["error", { "trailingComma": "es5" }],
    "comma-dangle": ["error","always-multiline"],
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "node/exports-style": "error", //`module.exports`と`exports.*`を混ぜて使うと警告します。
    "node/no-deprecated-api": "error", //Node.jsの非推奨APIを使用すると警告します。
    // "node/no-missing-import": "error", //`import`構文で存在しないファイルを読もうとすると警告します。
    "node/no-missing-require": "error", //`require()`で存在しないファイルを読もうとすると警告します。
    "node/no-unpublished-bin": "error", //CLIのエントリポイントが無視リストに入っていた場合に警告します。
    "node/no-unpublished-import": "error", //`import`構文で公開後に読めなくなるモジュールを読もうとすると警告します。
    "node/no-unpublished-require": "error", //`require()`で公開後に読めなくなるモジュールを読もうとすると警告します。
    "node/process-exit-as-throw": "error", //`process.exit()`の実行パスを修正します。
    "node/shebang": "error" //シバンの誤りを指摘します。
  },
};
