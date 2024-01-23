import { NAMA_KITAB } from "../../data/Data";
import errorHandler from "../../helpers/errHandler";
import { functionLog } from "../../helpers/functionHelper";
import { BOOK_SET, KITAB_SET, STORE_SET } from "./actionType";


const ORIGIN = "https://get.daarulhijrah.com/api.php/";
const TABEL_TOKO = "toko_mitra";
const TABEL_KITAB = NAMA_KITAB;
const TABEL_PROMOSI = "PromotionSlide";
const TABEL_CHANNEL_YOUTUBE = "ChannelYoutube";
const JSON_FORMAT = "?transform=1";
const ORDER_KITAB_ASC = "&order=id,asc"; 
const ORDER_TOKO_DESC = "&order=id_toko,asc";
const ORDER_SLIDE_DESC = "&order=id_img,desc";
const FILTER_CHANNELYOUTUBE = "&filter=nama_db,sw,";
const STATUS = "&filter=status,sw,1"; 

const urlFetchStore = `${ORIGIN}${TABEL_TOKO}${JSON_FORMAT}${STATUS}${ORDER_TOKO_DESC}`
const urlFetchBook = `${ORIGIN}${TABEL_KITAB}${JSON_FORMAT}${ORDER_KITAB_ASC}`
functionLog('urlFetchStore', urlFetchStore) 

export const actionGenerator = (type , payload ) => {
    return {
        type,
        payload
    };
};

export const fetchStoreAction = ()=> {
    return async (dispatch) => {
        try {
            const response = await fetch(urlFetchStore)
            functionLog('response dari fetch kitab', response) 
            if(!response.ok){
                throw errorHandler(response)
            }

            const responseJSON = await response.json()
             
            dispatch(actionGenerator(STORE_SET, responseJSON))
            functionLog('fetchStoreAction ADFADF', responseJSON)
        } catch (err) {
            functionLog('error dari fetchStoreAction', err)
        }
    }
}

export const fetchBookAction = ()=> {
    return async (dispatch) => {
        try {
            const response = await fetch(urlFetchBook)
            functionLog('fetchBookAction', response) 
            if(!response.ok){
                throw errorHandler(response)
            }

            const responseJSON = await response.json()
             
            functionLog('fetchBookAction responseJSON', responseJSON)
            dispatch(actionGenerator(BOOK_SET, responseJSON))
        } catch (err) {
            functionLog('error dari fetchBookAction', err)
        }
    }
}
 