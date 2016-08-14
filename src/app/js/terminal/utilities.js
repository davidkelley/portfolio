const AsciiTable = require('ascii-table');

export function table(opts) {
  var table = AsciiTable.factory(opts);
  if(opts.removeBorder) table.removeBorder();
  return table;
}

export function colored(text, color, mode) {
  mode = mode || 'b';
  color = color || '#FFFFFF';
  return "[[" + mode + ";" + color + ";]" + text + "]";
}
