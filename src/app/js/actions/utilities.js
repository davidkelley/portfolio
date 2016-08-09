export function colored() {
  return (text, color, mode) => {
    mode = mode || 'b';
    color = color || '#FFFFFF';
    return "[[" + mode + ";" + color + ";]" + text + "]";
  }
}
