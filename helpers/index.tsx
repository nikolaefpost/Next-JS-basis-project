import React from "react";
import {FirstLevelMenuItem, TopLevelCategory} from "../interface";
import {BooksIcon, CoursesIcon, ProductsIcon, ServicesIcon} from "../Layout/Menu/icons";


 export const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: "courses", name: "Курсы", icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
    {route: "services", name: "Сервисы", icon: <ServicesIcon/>, id: TopLevelCategory.Services},
    {route: "books", name: "Книги", icon: <BooksIcon/>, id: TopLevelCategory.Books},
    {route: "products", name: "Товары", icon: <ProductsIcon/>, id: TopLevelCategory.Products},
];

 export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").concat(" ₽");