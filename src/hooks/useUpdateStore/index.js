import { useDispatch } from "react-redux";

export const useUpdateStore = ({ type }) => {
    const dispatch = useDispatch();

    return (payload) => dispatch({
        type,
        payload,
    });
};