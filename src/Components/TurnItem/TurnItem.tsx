import { AccessTime } from "@mui/icons-material";

import { ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { Fragment } from "react";
import Turn, { getTime, getDate } from "../../Models/Turn";

interface TurnItemProps {
  turn: Turn
}
function TurnItem({ turn }: TurnItemProps) {
  return (
    <Paper sx={{ mb: 1 }} elevation={1}>
      <ListItem
        sx={{
          width: '100%'
        }}
        secondaryAction={<AccessTime color={turn.date.getTime() > (new Date()).getTime() ? "success" : "error"} />}
      >
        <ListItemText
          primary={`${getDate(turn)} ${getTime(turn)} hs`}
          secondary={<Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {turn.reservedBy!.name}
            </Typography>
            {" — "}{turn.works.map(w => (<>{w}</>))}
          </Fragment>}
        />
      </ListItem>
    </Paper>
  )
}

export default TurnItem;