// I LEARNED HOW TO USE MAP METHODS

function cleanNames(strings) {
  const cleaned = strings.map(name => {
      return name.trim();
  });
  return cleaned;
}