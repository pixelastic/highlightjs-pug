const current = require('../pug.js');
const highlightjs = require('highlightjs');
highlightjs.registerLanguage('pug', current);

// !!! XML
// %html
//   %body
//     %h1.jumbo{:id=>"a", :style=>'font-weight: normal', :title=>title} highlight.js
//     /html comment
//     -# ignore this line
//     %ul(style='margin: 0')
//     -items.each do |i|
//       %i= i
//     = variable
//     =variable2
//     ~ variable3
//     ~variable4
//     The current year is #{DataTime.now.year}.

describe('current', () => {
  it('should highlight html tags', async () => {
    const input = dedent`
    p Text
    `;
    const actual = highlightjs.highlight('pug', input);
    expect(actual.value).toMatchSnapshot();
  });
  it('should highlight html classes', async () => {
    const input = dedent`
    .bg-red Text
    `;
    const actual = highlightjs.highlight('pug', input);
    expect(actual.value).toMatchSnapshot();
  });
  it('should highlight id classes', async () => {
    const input = dedent`
    #uniqueId Text
    `;
    const actual = highlightjs.highlight('pug', input).value;
    expect(actual).toMatchSnapshot();
  });
  it('tag with class', async () => {
    const input = dedent`
    p.bg-red Text
    `;
    const actual = highlightjs.highlight('pug', input).value;
    expect(actual).toMatchSnapshot();
  });
});
