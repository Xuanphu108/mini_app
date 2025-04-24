// Shared item definitions without secrets
export interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
}

// Items data - shared between frontend and backend
export const ITEMS: Item[] = [
  {
    id: 'mobile_card',
    name: 'Mobile Card 📱',
    description: 'A useful virtual mobile recharge card',
    price: 1,
    icon: '📱'
  },
  {
    id: 'shopee_card',
    name: 'Shopee Card 🛍️',
    description: 'A Shopee virtual gift card for shopping',
    price: 1,
    icon: '🛍️'
  },
  {
    id: 'shopping_card',
    name: 'Shopping Card 🛒',
    description: 'A universal shopping card for all your needsr',
    price: 1,
    icon: '🛒'
  }
];

// Helper function to get item by ID
export function getItemById(id: string): Item | undefined {
  return ITEMS.find(item => item.id === id);
} 