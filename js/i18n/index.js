import en from "./en.json";
import id from "./id.json";

const lang = navigator.language.startsWith("id") ? "id" : "en";
const translations = lang === "id" ? id : en;

export function t(key) {
  return key.split(".").reduce((obj, part) => obj?.[part], translations) || key;
}
