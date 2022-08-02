export interface ProductCharacterstic {
    value: string;
    name: string;
};

export interface ReviewModel {
    _id: string;
    name: string;
    title: string;
    description: string;
    rating: number;
    createdAt: Date;
}

export interface ProductModel{
    map(arg0: (p: any) => JSX.Element): import("react").ReactNode;
    length: number;
    _id: string;
    categories: string[];
    tags: string[];
    title: string;
    link: string;
    price: string
    credit: number;
    oldPrice: number;
    description: string;
    characteristic: ProductCharacterstic[];
    createdAt: Date;
    updatedAt: Date;
    _v:number;
    image: string;
    initialRating: number;
    reviews: ReviewModel[];
    reviewsCount: number;
    reviewAvg?: number;
    advantages: string;
}