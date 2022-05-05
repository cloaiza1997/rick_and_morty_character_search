import _ from "lodash";
import { Typography } from "@mui/material";
import React from "react";

function PaginationCount({ count, currentPage, totalPages }) {
  return (
    <div className="pagination-count">
      <Typography variant="h6">Results: {count}</Typography>

      <Typography variant="caption">
        Page: {currentPage}/{totalPages}
      </Typography>
    </div>
  );
}

export default PaginationCount;
