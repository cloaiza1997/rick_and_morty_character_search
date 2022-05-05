import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";

export default function Character(props) {
  const { character } = props;

  const [expanded, setExpanded] = useState(false);

  return (
    <Card sx={{ width: 250 }}>
      <CardMedia
        component="img"
        height="150"
        src={character.image}
        alt={character.name}
      />

      <CardHeader
        action={
          <ExpandMore
            expand={expanded}
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        }
        title={character.name}
        subheader={
          expanded ? undefined : character.species + " - " + character.status
        }
      />

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Detail label="Status" value={character.status} />

          <Detail label="Species" value={character.species} />

          <Detail label="Origin" value={character.origin.name} />

          <Detail label="Location" value={character.location.name} />
        </CardContent>
      </Collapse>
    </Card>
  );
}

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Detail({ label, value }) {
  return (
    <>
      <Typography sx={{ fontSize: 12 }} color="text.secondary">
        {label}
      </Typography>

      <Typography variant="body2" gutterBottom>
        {value}
      </Typography>
    </>
  );
}
