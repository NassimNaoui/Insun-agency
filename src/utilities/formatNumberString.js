function formatNumbers(views) {
  if (!views) return "-";
  if (views >= 1_000_000) return (views / 1_000_000).toFixed(1) + "M";
  if (views >= 1_000) return (views / 1_000).toFixed(1) + "K";
  return views;
}

function formatString(text) {
  return text
    .toString()
    .normalize("NFD") // retire accents
    .replace(/[\u0300-\u036f]/g, "") // supprime les diacritiques restants
    .toLowerCase()
    .replace(/\s+/g, "-") // remplace espaces par -
    .replace(/[^a-z0-9-]/g, ""); // supprime les caractères spéciaux
}

export { formatNumbers, formatString };
