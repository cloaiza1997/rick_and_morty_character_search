import _ from "lodash";
import { Skeleton, Typography } from "@mui/material";
import React from "react";

function PaginationCountSkeleton() {
  return (
    <div className="pagination-count">
      <Typography variant="h6">
        <Skeleton width={150} />
      </Typography>

      <Typography variant="caption">
        <Skeleton width={100} />
      </Typography>
    </div>
  );
}

export default PaginationCountSkeleton;
