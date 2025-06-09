import { NAMA_KITAB } from "../../data/Data";
import errorHandler from "../../helpers/errHandler";
import { functionLog } from "../../helpers/functionHelper";
import {
  BOOK_SET,
  STORE_SET,
  LIST_BOOKS_SET,
  CHANNEL_YOUTUBE_SET,
  PROMO_SET,
} from "./actionType";

export const ORIGIN = "https://get.daarulhijrah.com/api.php/";
const TABEL_TOKO = "toko_mitra";
const TABEL_KITAB = NAMA_KITAB;
export const TABEL_LIST_KITAB = "kitab-kuning";
const TABEL_PROMOSI = "PromotionSlide";
const TABEL_CHANNEL_YOUTUBE = "ChannelYoutube";
export const JSON_FORMAT = "?transform=1";
const ORDER_KITAB_ASC = "&order=id,asc";
const ORDER_TOKO_DESC = "&order=id_toko,asc";
const FILTER_CHANNELYOUTUBE = "&filter=nama_db,sw,";
const STATUS = "&filter=status,sw,1";

export const urlFetchStore = `${ORIGIN}${TABEL_TOKO}${JSON_FORMAT}${STATUS}${ORDER_TOKO_DESC}`;
export const urlFetchBook = `${ORIGIN}${TABEL_KITAB}${JSON_FORMAT}${ORDER_KITAB_ASC}`;
export const urlFetchListBooks = `${ORIGIN}${TABEL_LIST_KITAB}${JSON_FORMAT}`;
export const urlFetchPromos = `${ORIGIN}${TABEL_PROMOSI}${JSON_FORMAT}`;
export const urlFetchChannels = `${ORIGIN}${TABEL_CHANNEL_YOUTUBE}${JSON_FORMAT}`;

functionLog("urlFetchStore", urlFetchStore);
functionLog("urlFetchBook", urlFetchBook);
functionLog("urlFetchListBooks", urlFetchListBooks);
functionLog("urlFetchChannels", urlFetchChannels);

export const actionGenerator = (type, payload) => {
  return {
    type,
    payload,
  };
};

export const fetchStoreAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(urlFetchStore);
      functionLog("response dari fetch kitab", response);
      if (!response.ok) {
        throw errorHandler(response);
      }

      const responseJSON = await response.json();

      dispatch(actionGenerator(STORE_SET, responseJSON));
    } catch (err) {
      functionLog("error dari fetchStoreAction", err);
    }
  };
};

export const fetchBookAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(urlFetchBook);
      functionLog("fetchBookAction", response);
      if (!response.ok) {
        throw errorHandler(response);
      }

      const responseJSON = await response.json();

      // functionLog('fetchBookAction responseJSON', responseJSON)

      dispatch(actionGenerator(BOOK_SET, responseJSON));
    } catch (err) {
      functionLog("error dari fetchBookAction", err);
    }
  };
};

export const fetchListBooksAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(urlFetchListBooks);
      if (!response.ok) {
        throw errorHandler(response);
      }

      const responseJSON = await response.json();
      dispatch(actionGenerator(LIST_BOOKS_SET, responseJSON));
    } catch (err) {
      functionLog("error dari fetchListBooksAction", err);
    }
  };
};

export const fetchPromosAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(urlFetchPromos);
      if (!response.ok) {
        throw errorHandler(response);
      }

      const responseJSON = await response.json();
      dispatch(actionGenerator(PROMO_SET, responseJSON));
    } catch (err) {
      throw errorHandler(err);
    }
  };
};

export const fetchChannelsAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(urlFetchChannels);
      if (!response.ok) {
        throw errorHandler(response);
      }

      const responseJSON = await response.json();
      functionLog("fetchChannelsAction responseJSON", responseJSON);
      dispatch(actionGenerator(CHANNEL_YOUTUBE_SET, responseJSON));
    } catch (err) {
      throw errorHandler(err);
    }
  };
};

export const fetchBooksId = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${ORIGIN}${id}${JSON_FORMAT}`);
      if (!response.ok) {
        throw errorHandler(response);
      }
      const responseJSON = await response.json();
      dispatch(actionGenerator("GET_BOOKS_ID_REQUEST", responseJSON));
    } catch (err) {
      functionLog("error dari fetchBooksIdAction", err);
      throw errorHandler(err);
    }
  };
};
