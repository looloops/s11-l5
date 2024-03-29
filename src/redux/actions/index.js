export const QUERY_PARAM = "QUERY_PARAM";
export const SET_SEARCH = "SET_SEARCH";
export const SELECTED_SONG = "SELECTED_SONG";
export const ADD_LIKE = "ADD_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const ALBUM_DETAILS = "ALBUM_DETAILS";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const GET_SONGS = "GET_SONGS";

export const setQueryParam = (param) => ({
  type: QUERY_PARAM,
  payload: param,
});

export const setSearch = (param) => ({
  type: SET_SEARCH,
  payload: param,
});

export const selectSong = (title, albumTitle, albumCover) => ({
  type: SELECTED_SONG,
  payload: { songTitle: title, albumTitle: albumTitle, albumCover: albumCover },
});
export const addLike = (songId) => ({
  type: ADD_LIKE,
  payload: songId,
});

export const removeLike = (songId) => ({
  type: REMOVE_LIKE,
  payload: songId,
});
export const addFav = (title, id, albumCover) => ({
  type: ADD_FAV,
  payload: { songTitle: title, songId: id, albumCover: albumCover },
});
export const removeFav = (songId) => ({
  type: REMOVE_FAV,
  payload: songId,
});

const searchInt = async (dispatch, searchQuery) => {
  if (searchQuery.length > 2) {
    dispatch(setSearch([]));
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchQuery, {
        method: "GET",
      });

      if (response.ok) {
        let result = await response.json();
        let songs = result.data;
        dispatch(setSearch(songs));
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    document.querySelector("#searchResults").style.display = "none";
  }
};

export const search = (dispatch, searchQuery) => {
  return searchInt(dispatch, searchQuery);
};
