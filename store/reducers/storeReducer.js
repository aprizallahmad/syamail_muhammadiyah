import { STORE_SET } from "../actions/actionType";


const initialStore = {
    isLoadingStore: true , 
    stores : [], 
    error : "", 
}; 

const storeReducer = (state = initialStore , action ) => { 
    const {type , payload } = action
    switch (type) {
        case STORE_SET:
            console.log(payload,'dari storeReducer ');
            return {
                ...state, 
                isLoadingStore : false, 
                stores : payload,  
                error : "",
            };
        default:
            return state;
    }
}

export default storeReducer