import { useDispatch, useSelector } from "react-redux";
import { fetchBookAction } from "../store/actions/actionCreator";
import { useEffect } from "react";
import { functionLog } from "../helpers/functionHelper";


export const useFetchBook = () => {
    let books = useSelector((state)=> state )
    const dispatcher = useDispatch()  
    useEffect(()=> {
        dispatcher(fetchBookAction())
    },[])

    books = books.books 
    functionLog('dari custom hooks useFetchBook' ,books )
    return [books]
}   