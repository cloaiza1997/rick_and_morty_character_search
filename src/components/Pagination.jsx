import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Icon, IconButton } from "@mui/material";
import React from "react";

function Pagination({ onNextPage, onPrevPage, disabledPrev, disabledNext }) {
  return (
    <div>
      <IconButton onClick={onPrevPage} disabled={disabledPrev}>
        <ArrowBack fontSize="large" />
      </IconButton>

      <IconButton onClick={onNextPage} disabled={disabledNext}>
        <ArrowForward fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Pagination;
