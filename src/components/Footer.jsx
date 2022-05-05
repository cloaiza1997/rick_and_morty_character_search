import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div>
        <Button
          to="/instructions"
          LinkComponent={Link}
          variant="contained"
          color="primary"
          role="button"
        >
          Instructions
        </Button>
      </div>

      <p>Dev by CRISTIAN LOAIZA</p>
    </div>
  );
}

export default Footer;
