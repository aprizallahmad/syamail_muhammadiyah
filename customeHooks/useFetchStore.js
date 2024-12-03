import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { functionLog } from "../helpers/functionHelper";
import { fetchStoreAction } from "../store/actions/actionCreator";
 
export const useFetchStore = () => {
    let stores = useSelector((state)=> state.stores)
    const dispatcher = useDispatch()  
    useEffect(()=> {
        dispatcher(fetchStoreAction())
    },[])
    
    
    return [stores]
}
 