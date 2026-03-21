import { CategoryConfig } from "../types";
import { identityProtection } from "./identity-protection";

// Register all categories here — add new ones as you build them
const categories: Record<string, CategoryConfig> = {
  "identity-protection": identityProtection,
  // "credit-cards": creditCards,
  // "vpn": vpn,
  // "insurance": insurance,
  // "antivirus": antivirus,
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
