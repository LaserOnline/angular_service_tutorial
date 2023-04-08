// * กด Ctrl + Alt + Shift + V
export interface Products {
  Product_ID: number;
  Product_Name: string;
  Product_Price: string;
  Product_Images: string;
}

export interface GetBooks {
  url: string;
  name: string;
  isbn: string;
  authors: string[];
  numberOfPages: number;
  publisher: string;
  country: string;
  mediaType: string;
  released: string;
  characters: string[];
  povCharacters: string[];
}
