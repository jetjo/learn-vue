// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs
// NOTE: 以.js为扩展名会引发nodejs运行时异常,

// NOTE: .js、.mjs格式的配置文件在vscode-prettier扩展中不工作,无效

// import companyPrettierConfig from "@company/prettier-config";

// 这里的overrides中配置优先级高于.editorconfig中的配置
// 顶层的配置优先级低于.editorconfig
/** @type {import("prettier").Config} */
const config = {
  editorconfig: true,
  // ...companyPrettierConfig,
  // trailingComma: "es5",
  // 使得tabWidth项生效,默认值false
  // 优先级低于.editorconfig中的indent_style
  useTabs: false,
  // NOTE: 优先级低于.editorconfig中的indent-size和tab_width
  tabWidth: 2,
  // indentSize: 9,//没有这一项
  semi: true,
  singleQuote: true,
  // Whether or not to indent the code inside <script> and <style> tags in Vue files.
  // 默认值false
  // 在除了template、script、style三个标签内的每一行开头再追加一个缩进
  vueIndentScriptAndStyle: true,
  overrides: [
    {
      files: ['*.html', 'legacy/**/*.js'],
      options: {
        tabWidth: 4,
      },
    },
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
    {
      files: ['*.js', '*.mjs'],
      options: {
        // NOTE: 默认值是babel
        //  NOTE: 千万不能改变顶层的parser设置,prettier可以根据文件扩展名自动选择parser
        parser: 'flow',
        useTabs: false,
        tabWidth: 2,
      },
    },
    {
      files: ['*.json'],
      options: {
        editorconfig: true,
        // 使得tabWidth项生效,默认值false
        useTabs: true,
        // "只有useTabs关闭时,此项才能生效,才能不被.editorconfig配置影响" : ""
        // NOTE: 优先级高于.editorconfig中的indent-size项
        tabWidth: 2,
      },
    },
  ],
};

module.exports = config;
