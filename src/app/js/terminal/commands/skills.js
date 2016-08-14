import { table } from '../utilities';
import { languages } from './data/languages';

function sorted() { return languages.sort((a, b) => { return b.exp - a.exp; }); }

export function skills(skill) {
  if( ! skill) {
    var data = table({
      heading: ['Name', 'Experience'],
      rows: sorted().map((lang) => {
        return [lang.name, Array.from(new Array(Math.floor(lang.exp)), () => '*').join('')]
      })
    })

    this.echo(data.toString() + "\n");

    this.echo(`Type "skills <name>" to see how and where I've used these languages\n`);
  } else {
    var text;
    sorted().forEach((lang) => {
      if(lang.tags.indexOf(skill) >= 0) {
        var summary = lang.summary.replace(/(\ |\t){2,}/gim, '')
        text = `\n${lang.name}\n=======\n${summary}\n`;
      }
    });

    if( ! text) text = `No matching skill "${skill}" was found. Try again!\n`;
    this.echo(text);
  }
}
