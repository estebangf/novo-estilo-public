import { Email, Instagram, Facebook, WhatsApp } from "@mui/icons-material";
import { Box, Grid, Typography, Button, List, ListItem, ListItemText, useTheme, Link } from "@mui/material";
import { CSSProperties } from "react";
import LinkStyled from "../LinkStyled";





interface Category {
  title: string
}
const CategoriesExamples: Category[] = [
  { title: "Babyligths", },
  { title: "Balagaye", },
  { title: "Corte de pelo", },
  { title: "Mechas", },
  { title: "Retoque de mechas", },
  { title: "Retoque de raiz", },
  { title: "Tratamiento capilar", },
]






const useStyles = () => {
  const theme = useTheme()
  return {
    root: {
      background: "#efefef",
      //      background: "#3e205d",
      flexGrow: 1,
    },
    infoBar: {
      background: "#f2c3b1",
      padding: 0 / 8,
      color: "#FFFFFF",
      [theme.breakpoints.down('xs')]: {
        display: "flex",
        flexDirection: "column",
      },
      [theme.breakpoints.up('sm')]: {
        display: "flex",
        flexDirection: "row",
        position: "relative",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around",
      },
    },
    contactInfo: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: theme.spacing(2),
    },
    emailIcon: {
      marginRight: theme.spacing(2),
    },
    contactInfoIcon: {
      marginRight: theme.spacing(2),
    },
    title: {
    },
    toolbar: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      minHeight: 128 / 8,
      alignItems: 'center',
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      [theme.breakpoints.down('sm')]: {
        paddingTop: 0 / 8,
        paddingBottom: 0 / 8,
      },
      boxShadow: "15px 0 25px 0 rgb(200 219 239 / 30%)",
    },
    logo: {
      width: "-webkit-fill-available",
      padding: "30px 0px",
      maxWidth: 250 / 8,
      paddingRight: 0
    },
    logoLG: {
      width: "-webkit-fill-available",
      margin: "0px 0px 30px 0px"
    },
    imgPromotion: {
      width: "100%",
    },
    space: {
      flexGrow: 1,
    },
    optionsButtons: {
      fontWeight: 700,
      color: "#b80959",
    },
    subTitle: {
      color: "#da1866",
      fontFamily: "\"Nunito\", Arial, \"Helvetica Neue\", Helvetica, sans-serif",
      margin: ".5em 0",
      lineHeight: "1.5em",
      letterSpacing: "0.02em",
      paddingBottom: 50 / 8,
    },
    content: {
      width: "100%",
      paddingTop: 50 / 8,
      //      background: "#FFFFFF",
      color: "#934c63",
      textAlign: "center",
      background: "#f2c3b1",
      paddingBottom: 100 / 8,
    },
    grid: {
      width: "100%",
      margin: 0 / 8,
    },
    card: {
      borderRadius: 24 / 8,
      transition: "transform .25s, background .5s",
      '&:hover': {
        transform: "scale(1.07)",
        background: "#f2c3b126"
      },
    },
    media: {
      height: 240 / 8,
      backgroundSize: "contain",
      margin: theme.spacing(2)
    },
    opcionName: {
      fontSize: 24,
      lineHeight: "1.3em",
      fontWeight: 700,
      color: "#934c63",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
    },
    explained: {
      position: "relative",
      paddingTop: 180 / 8,
      paddingBottom: 180 / 8,
      //      background: "#3c1e62",
      background: "#f2c3b1",
      '&::before': {
        content: '""',
        backgroundImage: "url(/statics/imagens/f1.png)",
        top: -1,
        height: 170 / 8,
        position: "absolute",
        width: "100%",
        backgroundSize: "cover",
        left: 0 / 8,
      },
      '&::after': {
        content: '""',
        backgroundImage: "url(/statics/imagens/f2.png)",
        bottom: 0 / 8,
        height: 170 / 8,
        position: "absolute",
        width: "100%",
        backgroundSize: "cover",
        left: 0 / 8,
      }
    },
    explainedText: {
      color: "#FFFFFF",
      margin: ".5em 0",
      lineHeight: "1.5em",
      letterSpacing: "0.02em",
      paddingBottom: 50 / 8,
    },
    foother: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "50px 0px",
    },
    footherText: {
      fontSize: 14,
      marginBottom: theme.spacing(1),
      color: "#6987ab",
      display: "block",
    },
    moreInfo: {
      marginTop: 25 / 8,
      color: "#934c63",
    },
    listOptions: {
      color: "#934c63",
    },
  }
};

function Footer() {

  const classes = useStyles();

  const options = CategoriesExamples.map(c => {
    return {
      text: c.title,
      // link: `/categories/${c.name}`
      link: `#`
    }
  })

  const contacts = [
    {
      link: "mailto:info@empresa.com.ar",
      text: "info@empresa.com.ar",
      ico: <Email sx={classes.contactInfoIcon} />
    },
    {
      link: "https://www.instagram.com/novo_estilo_sma/",
      text: "Instagram",
      ico: <Instagram sx={classes.contactInfoIcon} />
    },
    {
      link: "https://www.facebook.com/novo.estilo.92",
      text: "Facebook",
      ico: <Facebook sx={classes.contactInfoIcon} />
    },
    {
      link: "https://wa.me/5492944390657",
      text: "WhatsApp",
      ico: <WhatsApp sx={classes.contactInfoIcon} />
    },
  ]

  return (
    <Box sx={classes.content}>
      <Grid
        sx={classes.grid}
        container
        direction="row"
        justifyContent="center"
      >
        <Grid sx={{ padding: 2 }} item xs={12} sm={12} md={4} lg={4}>
          <img src="/logo192.png" style={{ ...(classes.logoLG as CSSProperties) }} />
          <Typography variant="body2" component="p">
            Nuestro principal objetivo es brindar un excelente servicio, por
            eso al contratarnos, te garantizamos la entrega de forma puntual
            y el óptimo funcionamiento de los juegos.
          </Typography>
          <Button sx={classes.moreInfo}>Mas Información</Button>
        </Grid>
        <Grid sx={{ padding: 2 }} item xs={12} sm={12} md={4} lg={4}>
          <Typography sx={classes.opcionName} gutterBottom variant="h5" component="h2">
            TE OFRECEMOS
          </Typography>
          <List>
            {options.map(option => {
              return (
                <LinkStyled
                  to={option.link}
                  sx={classes.listOptions}
                  children={
                    <ListItem button>
                      <ListItemText>{option.text}</ListItemText>
                    </ListItem>
                  }
                />
              )
            })}
          </List>
        </Grid>
        <Grid sx={{ padding: 2 }} item xs={12} sm={12} md={4} lg={4}>
          <Typography sx={classes.opcionName} gutterBottom variant="h5" component="h2">
            CONTACTATE
          </Typography>
          <List>
            {contacts.map(contact => {
              return (
                <Link
                  target="_blank"
                  href={contact.link}
                  sx={{
                    ...classes.listOptions,
                    textDecoration: "none"
                  }}
                >
                  <ListItem button>
                    {contact.ico}
                    <ListItemText>{contact.text}</ListItemText>
                  </ListItem>
                </Link>
              )
            })}
          </List>

        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;