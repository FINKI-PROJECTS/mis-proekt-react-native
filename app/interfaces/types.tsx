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
  category: string;
  size: string;
  brand: string;
  seller: {
    id: string;
    name: string;
  };
  location: string;
  price: string;
}
