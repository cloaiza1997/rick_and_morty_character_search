import React from "react";
// Components
import CharacterListSkeleton from "./CharacterListSkeleton";
import Pagination from "./Pagination";
import PaginationCountSkeleton from "./PaginationCountSkeleton";

function CharacterSearchSkeleton() {
  return (
    <>
      <PaginationCountSkeleton />

      <CharacterListSkeleton />

      <Pagination disabledPrev disabledNext />
    </>
  );
}

export default CharacterSearchSkeleton;
