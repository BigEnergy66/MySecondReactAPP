export type Finish = 'Matte' | 'Holographic' | 'Window' | 'Custom Print';
export type ProductType = 'Mylar Bag' | 'Pre-roll Tube' | 'Pre-roll Box';

export interface PackagingOption {
  id: string;
  type: ProductType;
  label: string;
  description: string;
  sizes: string[];
}

export const FINISHES: Finish[] = ['Matte', 'Holographic', 'Window', 'Custom Print'];

export const PRODUCTS: PackagingOption[] = [
  {
    id: 'mylar-1',
    type: 'Mylar Bag',
    label: 'The Signature Pouch',
    description: 'A versatile, air-tight sanctuary for your flower.',
    sizes: ['3.5g', '7g', '14g', '28g'],
  },
  {
    id: 'pr-1',
    type: 'Pre-roll Tube',
    label: 'The Precision Cylinder',
    description: 'Sleek, protective, and designed for the modern ritual.',
    sizes: ['Single', 'Multi-pack', 'Custom Length'],
  },
  {
    id: 'pr-2',
    type: 'Pre-roll Box',
    label: 'The Boutique Case',
    description: 'Premium structural cardboard for high-end retail.',
    sizes: ['Single-Sleeve', '5-Pack', '10-Pack'],
  },
];
