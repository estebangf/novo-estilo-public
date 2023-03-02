import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import {
  Button,
  Zoom,
  List,
  ListSubheader,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  CircularProgress,
  Alert,
  ButtonBase
} from '@mui/material';
import { useEffect, useLayoutEffect, useState } from 'react';
import { AssignmentTurnedIn } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Turn, { getDate, getTime, turnConverter, TurnsListExtra, TURNS_COLLECTION, getExtenseDate } from '../../Models/Turn';
import { onSnapshot, query, collection, orderBy, updateDoc, doc, where, Timestamp, addDoc } from 'firebase/firestore';
import { useApp } from '../../Tools/Hooks';
import { WorkNameType, Works } from '../../Models/Work';
import ListItemWork from '../../Components/ListItemWork/ListItemWork';
import LinkStyled from '../../Components/LinkStyled';
import NotificationModel, { NOTIFICATIONS_COLLECTION, notificationConverter } from '../../Models/Notifications';


const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = ['Tipo de retoque', 'Selección del turno', 'Datos personales'];

function GetTurn() {
  const app = useApp()
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);
  const [checkZoom, setCheckZoom] = useState(false);
  const [savedTurn, setSavedTurn] = useState(false);
  const [works, setWorks] = useState<WorkNameType[]>([]);
  const [turn, setTurn] = useState<Turn>();
  const [date, setDate] = useState<number>(-1);
  const [hour, setHour] = useState<number>(-1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [turns, setTurns] = useState<Turn[]>([])
  const [turnsList, setTurnsList] = useState<TurnsListExtra>([])

  useEffect(() => {
    // const q = query(collection(db, TURNS_COLLECTION), where("date", ">", "CA"));
    onSnapshot(query(
      collection(app.firestore, TURNS_COLLECTION),
      where("date", ">=", Timestamp.fromDate(new Date())),
      where("reservedBy", "==", null),
      orderBy("date")
    ).withConverter(turnConverter), (querySnapshot) => {
      let turnsSnapshot: Turn[] = [];
      querySnapshot.forEach((turn) => {
        turnsSnapshot.push(turn.data());
      });
      setTurns(turnsSnapshot)
    });
  }, [])

  useEffect(() => {
    setDate(-1);
    setHour(-1);

    let dates: TurnsListExtra = [];
    turns.filter(t => {
      let band = true;
      works.forEach(w => {
        band = band && t.allowedWorks.includes(w)
      });
      return band;
    }).forEach(t => {
      let index = dates.findIndex(e => e.date == getDate(t))
      if (index !== -1)
        dates[index].turns.push(t)
      else
        dates.push({
          date: getDate(t),
          turns: [t]
        })
    })

    setTurnsList([...dates])
  }, [works, turns])



  const changeWorks = (e: WorkNameType) => {
    let newWork = e;
    setWorks((prev) => prev.includes(newWork) ?
      prev.filter(w => w !== newWork) : [...prev, newWork]
    )
  }
  useLayoutEffect(() => {
    setCheckZoom(true);
  }, [])



  const changeStep = (mod: number) => {
    setTimeout(() => {
      setActiveStep(activeStep + mod)
      setCheckZoom(true)
    }, 500);
    setCheckZoom(false)
  }


  useEffect(() => {
    if (date > -1 && hour > -1 && turnsList[date].turns[hour])
      setTurn(turnsList[date].turns[hour])
    else
      setTurn(undefined)
  }, [date, hour])

  useEffect(() => {
    console.log(turn)
    if (turn && name && phone && activeStep > 2) {
      let reserveTurn: Turn = {
        ...turn,
        reservedBy: {
          name,
          phone: parseInt(phone)
        },
        works
      }
      if (reserveTurn.id)
        updateDoc(doc(app.firestore, TURNS_COLLECTION, reserveTurn.id).withConverter(turnConverter), reserveTurn).then(r => {
          console.log("save edited turn: ", r)
          let _notification: NotificationModel = {
            title: "Turno reservado",
            description: `${name} reservó un turno el ${getExtenseDate(reserveTurn)}`,
            date: new Date(),
            url: "/turns/list",
            createdBy: "",
            seedForUsers: []
          }
          addDoc(collection(app.firestore, NOTIFICATIONS_COLLECTION).withConverter(notificationConverter), _notification).then(() => {
            console.log("Notificacion enviada")
          }).catch();
          setWorks([])
          setTurn(undefined)
          setDate(-1)
          setHour(-1)
          setSavedTurn(true)
        }).catch(e => {
          console.error("error new turn: ", e)
        })
    }
  }, [activeStep])


  const papers = [
    <Paper elevation={2} sx={{ margin: 2 }}>
      <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListSubheader>¿Que te gustaria que te hagamos?</ListSubheader>
        {turnsList.length === 0 && <Alert sx={{ ml: 2, mr: 2 }} title='Alerta' severity="warning">
          No hay turnos disponibles para los retoques seleccionados.
        </Alert>}
        {Works.map(w => {
          return <ListItemWork _work={w} checked={works.indexOf(w.name) !== -1} changeWorks={changeWorks} />
        })}
      </List>
    </Paper>,
    <Paper elevation={2} sx={{ margin: 2 }}>
      <Typography sx={{
        lineHeight: '48px',
        color: "#00000099",
        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
        fontWeight: 500,
        fontSize: 14,
      }}
      >¿Que turno preferís?</Typography>
      <FormControl
        sx={{
          margin: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          textAlign: "initial"
        }}
      >
        <InputLabel id="fecha-label">Fecha</InputLabel>
        <Select
          renderValue={(selected) => {
            if (selected === -1) {
              return <em>Fecha</em>;
            }
            return turnsList[selected].date;
          }}
          labelId="fecha-label"
          id="fecha"
          value={date}
          label="Fecha"
          onChange={e => setDate(e.target.value as number)}
        >
          <MenuItem value={-1} disabled>Fecha</MenuItem>
          {turnsList.filter(t => t).map((t, index) => <MenuItem value={index}>{t.date}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl
        sx={{
          margin: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          textAlign: "initial"
        }}
      >
        <InputLabel id="horario-label">Horario</InputLabel>
        <Select
          renderValue={(selected) => {
            if (selected === -1) {
              return <em>Horario</em>;
            }
            return getTime(turnsList[date].turns[selected]);
          }}
          labelId="horario-label"
          id="horario"
          value={hour}
          label="Horario"
          onChange={e => setHour(e.target.value as number)}
        >
          <MenuItem value={-1} disabled>Horario</MenuItem>
          {date > -1 && turnsList.length > date ? turnsList[date].turns.map((t, index) => <MenuItem value={index}>{getTime(t)}</MenuItem>) :
            <MenuItem disabled>Seleccione la fecha</MenuItem>
          }
        </Select>
      </FormControl>
    </Paper>,
    <Paper elevation={2} sx={{ margin: 2 }}>
      <Typography sx={{
        lineHeight: '48px',
        color: "#00000099",
        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
        fontWeight: 500,
        fontSize: 14,
      }}
      >Terminemos hablando de vos</Typography>
      <Stack sx={{
        margin: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        textAlign: "initial"
      }}
      >
        <TextField
          sx={{
            marginBottom: 3
          }}
          label="Nombre y apellido"
          placeholder="Nombre y apellido"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          type="tel"
          label="Numero de telefono"
          placeholder="Numero de telefono"
          value={phone}
          onChange={e => (!isNaN(e.target.value as unknown as number) || e.target.value === '')
            && !e.target.value.includes(' ') ? setPhone(e.target.value) : {}}
        />
      </Stack>
    </Paper>,
    <Paper elevation={2} sx={{
      margin: 2,
      padding: 4,
      marginBottom: 0,
      color: "#2e7d32"
    }}>
      {savedTurn ? <>
        <AssignmentTurnedIn sx={{
          fontSize: 90,
          margin: 4
        }} />
        <Typography variant="h5">Turno agendado con Exito</Typography>
      </> : <>
        <CircularProgress sx={{ margin: 4 }} />
        <Typography sx={{ color: "#00000099" }} variant="h5">Agendando turno</Typography>
      </>}
    </Paper>
  ];


  const validations = () => {
    let validated = false
    switch (activeStep) {
      case 0:
        validated = works.length > 0
        break;
      case 1:
        validated = !!turn
        break;
      case 2:
        validated = !!name && !!phone
        break;
      default:
        break;
    }
    return validated;
  }

  return (
    <Stack sx={{ width: 'fit-content', maxWidth: 360, textAlign: "center", margin: "auto", padding: 3 }} spacing={4}>
      <div>
        <h1 style={{ marginBottom: 0 }}>Nuevo turno</h1>
        <LinkStyled to='/my-turns' >
          <Typography sx={{ color: '#adadad' }} variant="caption">Click aquí para buscar tus turnos</Typography>
        </LinkStyled>
      </div>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {/* <Slide direction="down" in={checkSlide} mountOnEnter unmountOnExit> */}
      {/* <Grow
        in={checkGrow}
        sx={{ transformOrigin: '0 0 0' }}
        {...(checkGrow ? { timeout: 500 } : {})}
      > */}
      <Zoom
        in={checkZoom}
        {...(checkZoom ? { timeout: 500 } : {})}
      >
        {papers[activeStep]}
      </Zoom>
      <Stack direction="row" sx={{ width: '100%', textAlign: "center" }} justifyContent="center" spacing={2}>
        {(activeStep > 0 && activeStep <= 2) && <Button onClick={e => changeStep(-1)}>Anterior</Button>}
        {activeStep <= 2 && <Button variant="contained" disabled={!validations()} onClick={e => changeStep(1)}>{activeStep === 2 ? "Finalizar" : "Siguiente"}</Button>}
        {/* {savedTurn && <Button variant="outlined" onClick={e => navigate('/')}>Ir al inicio</Button>} */}
      </Stack>
    </Stack>
  );
}

export default GetTurn;