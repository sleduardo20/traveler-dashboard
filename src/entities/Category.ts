export interface Category {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export enum Categories {
  FOOD_DRINKS = 'food_drinks',
  TOURIST_ATTRACTIONS = 'tourist_attractions',
  EVENTS = 'events',
}
