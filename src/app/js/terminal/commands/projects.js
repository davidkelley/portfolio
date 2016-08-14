import { table } from '../utilities';
import { projects } from './data/projects';

export function projects(name) {
  if( ! name) {
    var data = table({
      heading: ['Name', 'Summary'],
      rows: projects.map((lang) => { return [lang.name, lang.summary] })
    })

    this.echo(data.toString() + "\n");

    this.echo(`Type "projects <name>" to view more information about each project.\n`);
  } else {
    var text;
    projects.forEach((project) => {
      if(project.tags.indexOf(name) >= 0) {
        var description = project.description.replace(/(\ |\t){2,}/gim, '');
        var tech = project.tech.join(', ');
        text = `\nLink: ${project.link}\Technology: ${tech}\nDescription: ${description}\n`;
      }
    });

    if( ! text) text = `No project matching "${name}" was found. Try again!\n`;
    this.echo(text);
  }
}
