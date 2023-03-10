const MAX_CHARS = 100;

function truncateText(s) {
  return (s.length > MAX_CHARS) ? (s.substring(0, MAX_CHARS) + "...") : (s);
}

export default truncateText;