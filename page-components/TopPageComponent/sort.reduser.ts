import {SortEnum} from "../../components/Sort/sort.props";
import {ProductModel} from "../../interface";

export type SortActions = { type: SortEnum.Price } | { type: SortEnum.Rating } | {type: "Update", payload: ProductModel[]};

export interface SortReducerState {
    sort: SortEnum;
    products: ProductModel[];
}


export const sortReducer = (state: SortReducerState, action: SortActions): SortReducerState => {

    switch (action.type) {
        case SortEnum.Rating:
            return {
                sort: SortEnum.Rating,
                products: state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
            };
        case SortEnum.Price:
            return {
                sort: SortEnum.Price,
                products: state.products.sort((a, b) => a.price > b.price ? 1 : -1)
            };
        case "Update":
            return {
                sort: SortEnum.Rating,
                products: action.payload
            };
        default:
            return state;
    }
};