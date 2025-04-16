const initialBooksID = {
  isLoadingBooksID: true,
  booksID: [],
  errorBooksID: "",
};

const booksIdReducer = (state = initialBooksID, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_BOOKS_ID_REQUEST":
      return {
        ...state,
        isLoadingBooksID: true,
        errorBooksID: "",
        booksID: payload,
      };
    default:
      return state;
  }
};


export default booksIdReducer;