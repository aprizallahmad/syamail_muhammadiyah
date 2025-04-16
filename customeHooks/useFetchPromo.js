import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPromosAction } from "../store/actions/actionCreator";



export const useFetchPromo = () => { 
    const promos = useSelector((state) => state.promos);
    const dispatcher = useDispatch();
    useEffect(() => {
        dispatcher(fetchPromosAction());
    })

    return[promos.PromotionSlide]
}