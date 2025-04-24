// This file is only used on the server side and contains sensitive information
// that should not be exposed to the client

// Map of item IDs to their secret codes
export const ITEM_SECRETS: Record<string, string> = {
  'ice_cream': 'MOBILE2025',
  'cookie': 'SHOPEE2025',
  'hamburger': 'SHOPPING2025'
};

// Function to get a secret code for an item
export function getSecretForItem(itemId: string): string | undefined {
  return ITEM_SECRETS[itemId];
} 