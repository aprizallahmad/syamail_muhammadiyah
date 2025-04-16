import { PROMO_SET } from "../actions/actionType";


const initialPromo = { 
    isLoadingPromo : true , 
    promos : [], 
    errorPromo : "", 
};

const promoReducer = (state = initialPromo , action ) => { 
    const {type , payload } = action
    switch (type) { 
        case PROMO_SET:
            return { 
                ...state, 
                isLoadingPromo: false, 
                promos : payload, 
                errorPromo : "",
            };
        default:
            return state;
    }
}

export default promoReducer