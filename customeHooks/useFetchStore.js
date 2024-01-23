import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { functionLog } from "../helpers/functionHelper";
import { fetchStoreAction } from "../store/actions/actionCreator";
 
export const useFetchStore = () => {
    let stores = useSelector((state)=> state)
    const dispatcher = useDispatch()  
    useEffect(()=> {
        dispatcher(fetchStoreAction())
    },[])
    
    functionLog('dari custom hooks useFetchStore' ,stores )
    stores = stores.stores
    functionLog('dari custom hooks useFetchStore stores.stores' ,stores )

    return [stores]
}
 