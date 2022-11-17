import { PHOTO_GET } from "./../services/photo";
import { AppDispatch } from "./configureStore";
import { PayloadAction } from "@reduxjs/toolkit";

interface IInitialStateProps {
  loading: boolean;
  error: any;
  data: any;
}

const FETCH_PHOTO_STARTED = "photo/fecthStarted";
const FETCH_PHOTO_SUCCESS = "photo/fecthSuccess";
const FETCH_PHOTO_ERROR = "photo/fecthError";

const fetchPhotoStarted = () => ({ type: FETCH_PHOTO_STARTED });
const fetchPhotoSuccess = (data: any) => ({
  type: FETCH_PHOTO_SUCCESS,
  payload: data,
});
const fetchPhotoError = (error: any) => ({
  type: FETCH_PHOTO_ERROR,
  payload: error,
});

const initialState = {
  loading: false,
  error: null,
  data: null,
};

export default function photo(
  state = initialState as IInitialStateProps,
  action: PayloadAction,
) {
  switch (action.type) {
    case FETCH_PHOTO_STARTED:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case FETCH_PHOTO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_PHOTO_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };

    default:
      return state;
  }
}

export const fetchPhoto = (id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchPhotoStarted());
    const response = await PHOTO_GET(id);
    const { data } = response;
    dispatch(fetchPhotoSuccess(data));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(fetchPhotoError(error.message));
    }
  }
};
