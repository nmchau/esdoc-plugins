const assert = require('assert');
const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');
const ESDocCLI = require('esdoc/out/src/ESDocCLI.js').default;

function cli() {
  const cliPath = path.resolve('./node_modules/esdoc/out/ESDocCLI.js');
  const argv = ['node', cliPath, '-c', './test/fixture/esdoc.json'];
  const cli = new ESDocCLI(argv);
  cli.exec();
}

cli();

describe('test inject script result:', ()=> {
  it('has injected script tag title', ()=>{
    const html = fs.readFileSync('./test/fixture/out/index.html').toString();
    const $ = cheerio.load(html);
    assert.equal($('script[src="./inject/script/0-inject.js"]').length, 1);
  });

  it('has injected script', ()=>{
    const script = fs.readFileSync('./test/fixture/out/inject/script/0-inject.js').toString();
    assert.equal(script, "console.log('this is injected script');\n");

  });
});

