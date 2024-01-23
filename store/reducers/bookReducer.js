import { BOOK_SET } from "../actions/actionType";


const initialBook = {
    isLoadingBook: true , 
    books : [], 
    error : "", 
}; 

const bookReducer = (state = initialBook , action ) => { 
    const {type , payload } = action
    switch (type) {
        case BOOK_SET:
            // console.log(payload,'dari bookReducer ');
            return {
                ...state, 
                isLoadingBook : false, 
                books : payload, 
                error : "",
            };
        default:
            return state;
    }
}

export default bookReducer