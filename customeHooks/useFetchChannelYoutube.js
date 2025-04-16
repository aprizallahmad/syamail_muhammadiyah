import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchChannelsAction } from "../store/actions/actionCreator";




export const useFetchChannelYoutube = () => { 
    const channels = useSelector((state) => state.channels);
    const dispatcher = useDispatch()
    useEffect(() => { 
        dispatcher(fetchChannelsAction());

    }, []);

    return[channels];
}