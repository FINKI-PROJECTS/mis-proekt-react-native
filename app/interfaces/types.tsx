export interface IRegister {
  selectedImage: string;
  name: string;
  surname: string;
  email: string;
  address: string;
  phone: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IProduct {
  id?: string;
  category: string;
  size: string;
  brand: string;
  color: string;
  image: string;
  address: string;
  seller?: {
    id: string;
    name: string;
    location: string;
  };
  price: string;
}

export const categories = [
  "Блузи",
  "Панталони",
  "Сукњи",
  "Маици",
  "Капи",
  "Фустани",
  "Јакни",
  "Шорцеви",
  "Халки",
  "Шалови",
  "Чанти",
  "Чевли",
  "Чорапи",
  "Друго",
];

export const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
