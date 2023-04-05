"server-only";
import type { Locale } from "./i18n-config";

const dictionaries = {
  de: () => import("./dictionaries/de.json").then((module) => module.default),
  ru: () => import("./dictionaries/ru.json").then((module) => module.default),
  ua: () => import("./dictionaries/ua.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
