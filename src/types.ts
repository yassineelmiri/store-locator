export interface Store {
  id: string;
  name: string;
  city: string;
  latitude: number;
  longitude: number;
  postalCode: string;
  services: string[];
}

export interface StoreFormData {
  name: string;
  city: string;
  latitude: number;
  longitude: number;
  postalCode: string;
  services: string;
}