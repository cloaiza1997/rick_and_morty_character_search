import { Typography } from "@mui/material";
import React from "react";
// Components
import CharacterSearch from "../components/CharacterSearch";
import Footer from "../components/Footer";

function HomePage(props) {
  return (
    <div className="home-page">
      <Typography variant="h1">RICK AND MORTY CHARACTER SEARCH</Typography>

      <CharacterSearch />

      <Footer />
    </div>
  );
}

export default HomePage;
