import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListBooksAction } from "../store/actions/actionCreator";
import { functionLog } from "../helpers/functionHelper";

export const useFetchListBooks = () => {
  let listBooks = useSelector((state) => state.listBooks);
  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(fetchListBooksAction());
  }, []);
  return [listBooks];
};
