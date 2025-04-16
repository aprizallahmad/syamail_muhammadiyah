import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchBooksId } from "../store/actions/actionCreator";



export const useFetchBooksId = ((id) =>  { 
    const booksId = useSelector((state) => state.booksID);
    const dispatcher = useDispatch(); 
    useEffect(() => { 
        dispatcher(fetchBooksId(id));

    }, [])

    return [booksId]
})