import { Delete, AssignmentInd, Edit, Assignment, Save, WhatsApp } from "@mui/icons-material";

import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';              // User.
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';            // Warning.
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';    // Success.
import EventSeatIcon from '@mui/icons-material/EventSeat';                      // Asiento.

import { Box, IconButton, Link, ListItem, ListItemIcon, ListItemText, TextField } from "@mui/material";
import { updateDoc, collection, doc } from "firebase/firestore";
import { useState } from "react";
import Turn, { getExtenseDate, getNewDateWithNewTime, getTime, turnConverter, TURNS_COLLECTION } from "../../Models/Turn";
import { useApp } from "../../Tools/Hooks";

interface TurnItemSimpleProps {
  turn: Turn
}
function TurnItemSimple({ turn }: TurnItemSimpleProps) {

  return (
    <ListItem
      sx={{
        paddingLeft: 4,
        textDecoration: turn.reservedBy ? "line-through" : "",
        fontWeight: turn.reservedBy ? "" : "bold !important",
        "-webkit-text-stroke-width": turn.reservedBy ? "" :"medium"
      }}
    >
      <ListItemText
        primary={`${getExtenseDate(turn)}`}
      />
    </ListItem>
  )
}

export default TurnItemSimple;