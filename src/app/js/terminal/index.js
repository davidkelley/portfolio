import { help } from './commands/help';

export const GREETING =
  `David Kelleys Blog LOL
  `

export const config = {
  history: true,
  prompt: "[[b;#63de00;]$ >] ",
  greetings: GREETING,
  checkArity: false
}

export const commands = { help }
