import React from "react";
import CharacterSkeleton from "./CharacterSkeleton";

function CharacterListSkeleton() {
  const skeletons = Array(20).fill(1);

  return (
    <ul className="character-list">
      {skeletons.map((a, i) => (
        <li>
          <CharacterSkeleton key={i} />
        </li>
      ))}
    </ul>
  );
}

export default CharacterListSkeleton;
