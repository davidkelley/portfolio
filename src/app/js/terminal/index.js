import { help } from './commands/help';
import { skills } from './commands/skills';
import { whoami } from './commands/whoami';
import { projects } from './commands/projects';

export const GREETING = `
The website of David Kelley. Type "help" to get started!
`

export const config = {
  history: true,
  prompt: "[[b;#63de00;]$ >] ",
  greetings: GREETING,
  checkArity: false
}

export const commands = { help, skills, whoami }
