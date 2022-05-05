import axios from "axios";
import { READ_USERS, REQUEST_LOADING } from "./actionTypes";

export const fetchData =
  (searchParam = "", page) =>
  async (dispatch) => {
    dispatch(setRequestLoading(true));

    const _page = page ? `page=${page}&` : "";
    const url = `https://rickandmortyapi.com/api/character/?${_page}name=${searchParam}`;

    axios
      .get(url)
      .then((response) => {
        const { info, results = [] } = response.data || {};

        dispatch(
          setCharacters({
            charactersPagination: info,
            characters: results.sort((a, b) =>
              a.name > b.name ? 1 : b.name > a.name ? -1 : 0
            ),
          })
        );

        dispatch(setRequestLoading(false));
      })
      .catch((error) => {
        console.log(error);
        dispatch(setRequestLoading(false));
      });
  };

export const setRequestLoading = (loading) => (dispatch) =>
  dispatch({
    type: REQUEST_LOADING,
    payload: loading,
  });

export const setCharacters =
  ({ charactersPagination, characters }) =>
  (dispatch) =>
    dispatch({
      type: READ_USERS,
      payload: {
        charactersPagination,
        characters,
      },
    });
