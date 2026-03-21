import { CategoryConfig } from "../types";
import { identityProtection } from "./identity-protection";
import { businessFormation } from "./business-formation";
import { onlineTherapy } from "./online-therapy";
import { websiteBuilders } from "./website-builders";

const categories: Record<string, CategoryConfig> = {
  "identity-protection": identityProtection,
  "business-formation": businessFormation,
  "online-therapy": onlineTherapy,
  "website-builders": websiteBuilders,
};

export function getCategory(slug: string): CategoryConfig | undefined {
  return categories[slug];
}

export function getAllCategories(): CategoryConfig[] {
  return Object.values(categories);
}

export function getAllCategorySlugs(): string[] {
  return Object.keys(categories);
}

export { categories };
