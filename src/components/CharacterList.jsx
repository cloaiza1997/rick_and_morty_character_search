import { connect } from "react-redux";
import React from "react";
// Components
import Character from "./Character";
import clsx from "clsx";

function CharacterList(props) {
  const { characters } = props;

  return (
    <ul className="character-list">
      {characters.map((character) => (
        <li key={character.id}>
          <Character character={character} />
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  characters: state.first.characters,
});

export default connect(mapStateToProps)(CharacterList);
