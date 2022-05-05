import { Card, CardHeader, Skeleton } from "@mui/material";
import React from "react";

function CharacterSkeleton() {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <Skeleton height={150} width={250} variant="rectangular" />

      <CardHeader
        title={<Skeleton variant="text" width="50%" />}
        subheader={<Skeleton variant="text" width="20%" />}
      />
    </Card>
  );
}

export default CharacterSkeleton;
