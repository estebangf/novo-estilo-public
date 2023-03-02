import { getDocs, query, collection, where, orderBy } from "firebase/firestore";
import { useCallback, useEffect, useRef, useState } from "react";
import Turn, { TURNS_COLLECTION, turnConverter } from "../../Models/Turn";
import { useApp } from "../../Tools/Hooks";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, List, OutlinedInput, Paper, Stack } from "@mui/material";
import TurnItem from "../../Components/TurnItem";
import { Search } from "@mui/icons-material";

function MyTurns() {
  const app = useApp()

  const [myPhone, setMyPhone] = useState(0)
  const [myTurns, setMyTurns] = useState<Turn[]>([])
  const timeOutRef = useRef<NodeJS.Timeout>(null!)

  const search = () => {
    getDocs(query(
      collection(app.firestore, TURNS_COLLECTION),
      where("reservedBy.phone", "==", myPhone),
      orderBy("date", "desc")
    ).withConverter(turnConverter)).then((querySnapshot) => {
      let turnsSnapshot: Turn[] = [];
      querySnapshot.forEach((turn) => {
        turnsSnapshot.push(turn.data());
      });
      console.log(myPhone, ": ", turnsSnapshot)
      setMyTurns(turnsSnapshot)
    });
  };
  const searchCallback = useCallback(search, [app.firestore, myPhone])

  const keyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") search()
  }

  useEffect(() => {
    if (myTurns.length) setMyTurns([])
    if (timeOutRef.current)
      clearTimeout(timeOutRef.current)
    if (myPhone)
      timeOutRef.current = setTimeout(() => {
        searchCallback()
      }, 300);
  }, [myPhone, searchCallback])

  return (
    <Stack sx={{ width: 'fit-content', maxWidth: 360, textAlign: "center", margin: "auto", padding: 3 }} spacing={4}>
      <h3>Buscar mis turnos</h3>

      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-myPhone">Telefono</InputLabel>
        <OutlinedInput
          id="outlined-adornment-myPhone"
          placeholder="Ingresa tu numero de telefono"
          label="N° de telefono"
          type='text'
          value={myPhone || ''}
          onChange={e => setMyPhone(parseInt(e.target.value) || 0)}
          onKeyPress={keyPress}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle myPhone visibility"
                onClick={search}
                onMouseDown={e => { e.preventDefault() }}
                edge="end"
              >
                <Search />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <List>
        {myPhone === 0 ? (
          <h4>Ingresa tu telefono para buscar tu historial de turnos.</h4>
        ) : !myTurns.length ? (
          <h4>No se encontraron turnos con ese numero de telefono...</h4>
        ) : (
          myTurns.map(turn => (
            <TurnItem turn={turn} />
          ))
        )}
      </List>
    </Stack>
  )
}

export default MyTurns;