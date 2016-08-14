import { table, colored } from '../utilities';

export function help() {
  var data = table({
    removeBorder: true,
    rows: [
      [colored('whoami'), '# information about who I am and what I do'],
      [colored('skills'), '# display list of technologies I\'m familiar with'],
      [colored('projects'), '# list of sample and demo projects'],
      [colored('career'), '# past jobs and details about them'],
    ]
  })

  this.echo(data.toString() + "\n\n");
}
