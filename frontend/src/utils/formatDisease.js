export default function formatDisease(name) {
  if (!name) return "";

  return name
    .replace(/___/g, " ")
    .replace(/__/g, " ")
    .replace(/_/g, " ")
    .replace(/,/g, "")
    .replace(/\(/g, "")
    .replace(/\)/g, "")
    .trim();
}