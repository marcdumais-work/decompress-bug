const decompress = require('decompress');
const performance = require('perf_hooks').performance;

let now = Date.now();
async function measureDecompress(file) {
  const t0 = performance.now();
  await decompress(`../${file}`, `/tmp/${now}/${file}`).then(() => {
    const t1 = performance.now();
    console.log(`Decompressing ${file} took ${t1 - t0} milliseconds.`);
  });
}

(async () => {
  await measureDecompress("vscode.bat-1.44.2.vsix");
  await measureDecompress("vscode.clojure-1.44.2.vsix");
  await measureDecompress("vscode.coffeescript-1.44.2.vsix");
  await measureDecompress("vscode.configuration-editing-1.44.2.vsix");
  await measureDecompress("vscode.cpp-1.44.2.vsix");
  await measureDecompress("vscode.csharp-1.44.2.vsix");
  await measureDecompress("vscode.css-1.44.2.vsix");
  await measureDecompress("vscode.css-language-features-1.45.1.vsix");
  await measureDecompress("vscode.debug-auto-launch-1.44.2.vsix");
  await measureDecompress("vscode.docker-1.44.2.vsix");
  await measureDecompress("vscode.emmet-1.44.2.vsix");
  await measureDecompress("vscode.fsharp-1.44.2.vsix");
  await measureDecompress("vscode.go-1.44.2.vsix");
  await measureDecompress("vscode.groovy-1.44.2.vsix");
  await measureDecompress("vscode.grunt-1.44.2.vsix");
  await measureDecompress("vscode.gulp-1.44.2.vsix");
  await measureDecompress("vscode.handlebars-1.44.2.vsix");
  await measureDecompress("vscode.hlsl-1.44.2.vsix");
  await measureDecompress("vscode.html-1.48.0-next.4a1bcdafe9.vsix");
  await measureDecompress("vscode.html-language-features-1.48.0-next.4a1bcdafe9.vsix");
  await measureDecompress("vscode.ini-1.44.2.vsix");
  await measureDecompress("vscode.jake-1.44.2.vsix");
  await measureDecompress("vscode.java-1.44.2.vsix");
  await measureDecompress("vscode.javascript-1.44.2.vsix");
  await measureDecompress("vscode.json-1.46.1.vsix");
  await measureDecompress("vscode.json-language-features-1.46.1.vsix");
  await measureDecompress("vscode.less-1.44.2.vsix");
  await measureDecompress("vscode.log-1.44.2.vsix");
  await measureDecompress("vscode.lua-1.44.2.vsix");
  await measureDecompress("vscode.make-1.44.2.vsix");
  await measureDecompress("vscode.markdown-1.44.2.vsix");
  await measureDecompress("vscode.markdown-language-features-1.39.1.vsix");
  await measureDecompress("vscode.merge-conflict-1.44.2.vsix");
  await measureDecompress("vscode.npm-1.44.2.vsix");
  await measureDecompress("node-debug-1.35.3.vsix");
  await measureDecompress("ms-vscode.node-debug2-1.33.0.vsix");
  await measureDecompress("vscode.objective-c-1.44.2.vsix");
  await measureDecompress("vscode.perl-1.44.2.vsix");
  await measureDecompress("vscode.powershell-1.44.2.vsix");
  await measureDecompress("vscode.pug-1.44.2.vsix");
  await measureDecompress("vscode.python-1.44.2.vsix");
  await measureDecompress("vscode.r-1.44.2.vsix");
  await measureDecompress("vscode.razor-1.44.2.vsix");
  await measureDecompress("vscode.ruby-1.44.2.vsix");
  await measureDecompress("vscode.rust-1.44.2.vsix");
  await measureDecompress("vscode.scss-1.44.2.vsix");
  await measureDecompress("vscode.shaderlab-1.44.2.vsix");
  await measureDecompress("vscode.shellscript-1.44.2.vsix");
  await measureDecompress("vscode.sql-1.44.2.vsix");
  await measureDecompress("vscode.swift-1.44.2.vsix");
  await measureDecompress("vscode.theme-abyss-1.44.2.vsix");
  await measureDecompress("vscode.theme-defaults-1.44.2.vsix");
  await measureDecompress("vscode.theme-kimbie-dark-1.44.2.vsix");
  await measureDecompress("vscode.theme-monokai-1.44.2.vsix");
  await measureDecompress("vscode.theme-monokai-dimmed-1.44.2.vsix");
  await measureDecompress("vscode.theme-quietlight-1.44.2.vsix");
  await measureDecompress("vscode.theme-red-1.44.2.vsix");
  await measureDecompress("vscode.theme-solarized-dark-1.44.2.vsix");
  await measureDecompress("vscode.theme-tomorrow-night-blue-1.44.2.vsix");
  await measureDecompress("vscode.typescript-1.44.2.vsix");
  await measureDecompress("vscode.typescript-language-features-1.44.2.vsix");
  await measureDecompress("vscode.vb-1.44.2.vsix");
  await measureDecompress("vscode.vscode-theme-seti-1.44.2.vsix");
  await measureDecompress("vscode.xml-1.44.2.vsix");
  await measureDecompress("vscode.yaml-1.44.2.vsix");
  await measureDecompress("EditorConfig.EditorConfig-0.14.4.vsix");
  await measureDecompress("ms-vscode.references-view-0.0.47.vsix");

  // Bonus: two of the biggest extensions (not in main repo example app)
  await measureDecompress("ms-python-release.vsix");
  await measureDecompress("redhat.java-0.54.2.vsix");
})();
