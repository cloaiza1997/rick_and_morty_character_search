import { connect } from "react-redux";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Search from "@mui/icons-material/Search";
// Components
import "../styles/styles.scss";
import { fetchData } from "../store/actions";
import CharacterListExample from "../components/CharacterListExample";
import Instructions from "../components/Instructions";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function InstructionsPage(props) {
  return (
    <div className="App">
      <Instructions />

      <form>
        <FormControl>
          <InputLabel htmlFor="search-character">Search</InputLabel>

          <OutlinedInput
            id="search-character"
            label="Search"
            variant="standard"
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="search" edge="end">
                  <Search />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </form>

      <CharacterListExample />

      <div>
        <Button to="/" LinkComponent={Link} variant="contained" color="primary">
          Ir al inicio
        </Button>
      </div>

      <br />

      <small>
        Esta prueba fue inspirada en{" "}
        <a href="https://codesandbox.io/s/fancy-wind-dw5s53">codesandbox</a>
      </small>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    characters: state.first.characters,
  };
};

const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps)(InstructionsPage);
