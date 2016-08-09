import { COMMANDS } from './commands'
import { GREETING } from './greeting'

export function init() {
  $(() => {
    $('#body').terminal(COMMANDS, {
      history: true,
      prompt: "[[b;#63de00;]$ >] ",
      greetings: GREETING,
      checkArity: false
    });
  })
}
