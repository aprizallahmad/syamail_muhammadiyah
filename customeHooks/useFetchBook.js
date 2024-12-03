import { useDispatch, useSelector } from "react-redux";
import { fetchBookAction } from "../store/actions/actionCreator";
import { useEffect } from "react";
import { functionLog } from "../helpers/functionHelper";


export const useFetchBook = () => {
    let books = useSelector((state)=> state.books )
    const dispatcher = useDispatch()  
    useEffect(()=> {
        dispatcher(fetchBookAction())
    },[])
    return [books]
    
}   