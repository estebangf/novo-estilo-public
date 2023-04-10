import { getDocs, query, collection, where, orderBy } from "firebase/firestore";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Turn, { TURNS_COLLECTION, turnConverter } from "../../Models/Turn";
import { useApp, useAuth } from "../../Tools/Hooks";
import { Box, Button, FormControl, Icon, IconButton, InputAdornment, InputLabel, List, OutlinedInput, Paper, Stack, Typography } from "@mui/material";
import TurnItem from "../../Components/TurnItem";
import { Search, SendToMobile } from "@mui/icons-material";

import { ConfirmationResult, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";


function MyTurns () {
  const app = useApp()
  const auth = useAuth()

  const [myPhone, setMyPhone] = useState("") // Numero de telefono
  const [codeConfirmation, setCodeConfirmation] = useState("") // Codigo recibido
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult>() // Resultado de login para confirmar codigo

  const [myTurns, setMyTurns] = useState<Turn[]>([])

  const container = useRef<HTMLDivElement>(null!)
  const [showingReCaptcha, setShowingReCaptcha] = useState(false)
  const [isLogued, setIsLogued] = useState(false)

  const keyPressPhone = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") rendererReCaptcha()
  }
  const keyPressCode = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") sendCodeConfirmation()
  }

  const rendererReCaptcha = () => {
    // auth.languageCode = 'es';

    window.recaptchaVerifier = auth.newRecaptchaVerifier(container.current, sendCode)
    console.log("window.recaptchaVerifier", window.recaptchaVerifier)
    setShowingReCaptcha(true)
  };

  useEffect(() => {
    if (showingReCaptcha) sendCode()
  }, [showingReCaptcha])

  function search () {
    getDocs(query(
      collection(app.firestore, TURNS_COLLECTION),
      where("reservedBy.phone", "==", `+54${myPhone}`),
      orderBy("date", "desc")
    ).withConverter(turnConverter)).then((querySnapshot) => {
      let turnsSnapshot: Turn[] = [];
      querySnapshot.forEach((turn) => {
        turnsSnapshot.push(turn.data());
      });
      console.log(myPhone, ": ", turnsSnapshot)
      setMyTurns(turnsSnapshot)
    });
  }


  function sendCode () {
    var phoneNumber = `+54${myPhone}`
    var appVerifier = window.recaptchaVerifier;

    auth.signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((cr) => {
        window.confirmationResult = cr;
        setConfirmationResult(cr)
        console.log("confirmationResult", cr);
      }).catch((error) => {
        console.error("confirmationResult", error);
      });
  }

  function sendCodeConfirmation () {
    confirmationResult?.confirm(codeConfirmation).then(r => {
      console.log("codeConfirmation", r)
      setIsLogued(true)
      // search()
    }).catch(error => {
      console.error("codeConfirmation", error)
    })
  }

  function refreshAndLogout () {
    auth.signout().then(r => {
      // eslint-disable-next-line no-restricted-globals
      location.reload()
    }).catch(e => {
      alert(e)
    })
  }

  useLayoutEffect(() => {
    var phoneNumber = auth.user?.phoneNumber
    console.log("phoneNumber", phoneNumber)
    if (phoneNumber) {
      setMyPhone(phoneNumber.slice(3, 100))
      setShowingReCaptcha(true)
      setIsLogued(true)
    }
  }, [auth.user])


  useLayoutEffect(() => {
    if (isLogued) {
      search()
    }
  }, [isLogued])

  return (
    <Stack sx={{ width: 'fit-content', maxWidth: 360, textAlign: "center", margin: "auto", padding: 3 }} spacing={4}>
      <h3>Buscar mis turnos</h3>

      {showingReCaptcha ? (
        <Box>
          <Typography>Telefono: +54{myPhone}</Typography>
          <Button onClick={e => refreshAndLogout()} variant="text">Recargar</Button>
        </Box>
      ) : (
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-myPhone">Telefono</InputLabel>
          <OutlinedInput
            id="outlined-adornment-myPhone"
            placeholder="Ingresar telefono"
            label="N° de telefono"
            type='text'
            value={myPhone}
            onChange={e => setMyPhone(e.target.value)}
            onKeyPress={keyPressPhone}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle myPhone visibility"
                  onClick={rendererReCaptcha}
                  onMouseDown={e => { e.preventDefault() }}
                  edge="end"
                >
                  <SendToMobile />
                </IconButton>
              </InputAdornment>
            }
            startAdornment={
              <InputAdornment position="start" sx={{ pr: 1 }}>
                +54
              </InputAdornment>
            }
          />
        </FormControl>
      )}
      {myTurns.length === 0 ? (<>
        {!confirmationResult ? (
          <div ref={container}></div>
        ) : (
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-code">Codigo de verificación</InputLabel>
            <OutlinedInput
              id="outlined-adornment-code"
              placeholder="Ingresa tu numero de telefono"
              label="Codigo de verificación"
              type='text'
              value={codeConfirmation}
              onChange={e => setCodeConfirmation(e.target.value)}
              onKeyPress={keyPressCode}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle code visibility"
                    onClick={sendCodeConfirmation}
                    onMouseDown={e => { e.preventDefault() }}
                    edge="end"
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        )}
      </>
      ) : (
        <List>
          {myTurns.map(turn => (
            <TurnItem turn={turn} />
          ))}
        </List>
      )}
    </Stack>
  )
}

export default MyTurns;