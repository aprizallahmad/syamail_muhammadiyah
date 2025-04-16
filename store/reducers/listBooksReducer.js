import { LIST_BOOKS_SET } from "../actions/actionType";


const initialListBooks = { 
    isLoadingListBooks : true, 
    listBooks : [], 
    errorListBooks : "",
}; 

const listBooksReducer = (state = initialListBooks, action) => {
    const {type , payload } = action
    switch (type) { 
        case LIST_BOOKS_SET:
        return { 
            ...state, 
            isLoadingListBooks : false, 
            listBooks : payload,
            errorListBooks : "",
        };
        default:
            return state
    };
}

export default listBooksReducer