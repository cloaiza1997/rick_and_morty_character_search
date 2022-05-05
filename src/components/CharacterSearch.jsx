import {
  Alert,
  FormControl,
  Icon,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { connect } from "react-redux";
import { Search } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
// Components
import { fetchData, setCharacters } from "../store/actions";
import CharacterList from "../components/CharacterList";
import CharacterSearchSkeleton from "./CharacterSearchSkeleton";
import Pagination from "../components/Pagination";
import PaginationCount from "../components/PaginationCount";
import useDebounce from "../hooks/useDebouce";

function CharacterSearch(props) {
  const {
    fetchData,
    setCharacters,
    characters,
    charactersPagination,
    loading,
  } = props;

  const [searchParam, setSearchParam] = useState("");
  const [page, setPage] = useState(1);

  const onFetchData = useDebounce((text) => {
    fetchData(text);
  }, 500);

  const onChangeSearchParam = (e) => {
    const { value } = e.target || {};

    setSearchParam(value);

    if (value.trim()) {
      onFetchData(value);
    } else {
      setCharacters({ charactersPagination: {}, characters: [] });
      setPage(1);
    }
  };

  const handlePagination = (_page) => {
    fetchData(searchParam, _page);
    setPage(_page);
  };

  useEffect(() => {
    setCharacters({ charactersPagination: {}, characters: [] });
  }, []);

  return (
    <div>
      <div className="input-search-container">
        <FormControl className="input-search">
          <InputLabel htmlFor="search-character">Search</InputLabel>

          <OutlinedInput
            id="search-character"
            label="Search character"
            placeholder="Type character name"
            variant="standard"
            value={searchParam}
            onChange={onChangeSearchParam}
            endAdornment={
              <InputAdornment position="end">
                <Icon aria-label="search" edge="end">
                  <Search />
                </Icon>
              </InputAdornment>
            }
            autoFocus
          />
        </FormControl>
      </div>

      <div className="character-search-list-container">
        {loading ? (
          <CharacterSearchSkeleton />
        ) : characters.length === 0 ? (
          <Alert severity="info">
            {searchParam.trim()
              ? "No results"
              : "Search for characters by name"}
          </Alert>
        ) : (
          <>
            <PaginationCount
              currentPage={page}
              totalPages={charactersPagination.pages}
              count={charactersPagination.count}
            />

            <CharacterList />

            <Pagination
              onPrevPage={() => handlePagination(page - 1)}
              disabledPrev={!charactersPagination.prev}
              onNextPage={() => handlePagination(page + 1)}
              disabledNext={!charactersPagination.next}
            />
          </>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  characters: state.first.characters,
  charactersPagination: state.first.charactersPagination,
  loading: state.first.loading,
});

const mapDispatchToProps = {
  fetchData,
  setCharacters,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSearch);
