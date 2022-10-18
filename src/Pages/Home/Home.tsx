import { Typography, Grid, Box, ImageListItem, ImageList, Button } from "@mui/material";
import { useEffect } from "react";
import Copyright from "../../Components/Copyright";
import Footer from "../../Components/Footer";
import LinkStyled from "../../Components/LinkStyled";
import { useAuth } from "../../Tools/Hooks";
import AuthStatus from "../Auth/AuthStatus";

import "./Home.css"

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       background: "#efefef",
//       //      background: "#3e205d",
//       flexGrow: 1,
//     },
//     infoBar: {
//       background: "#1d4494",
//       padding: 0,
//       color: "#FFFFFF",
//       [theme.breakpoints.down('xs')]: {
//         display: "flex",
//         flexDirection: "column",
//       },
//       [theme.breakpoints.up('sm')]: {
//         display: "flex",
//         flexDirection: "row",
//         position: "relative",
//         width: "100%",
//         alignItems: "center",
//         justifyContent: "space-around",
//       },
//     },
//     emailInfo: {
//       display: "flex",
//       flexDirection: "row",
//       alignItems: "center",
//       padding: theme.spacing(2),
//     },
//     emailIcon: {
//       marginRight: theme.spacing(2),
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//     },
//     toolbar: {
//       paddingTop: theme.spacing(2),
//       paddingBottom: theme.spacing(2),
//       minHeight: 128,
//       alignItems: 'center',
//       display: "flex",
//       flexDirection: "row",
//       justifyContent: "space-between",
//       [theme.breakpoints.down('sm')]: {
//         paddingTop: 0,
//         paddingBottom: 0,
//       },
//       boxShadow: "15px 0 25px 0 rgb(200 219 239 / 30%)",
//     },
//     logo: {
//       width: "-webkit-fill-available",
//       padding: "30px 0px",
//       maxWidth: 250,
//       paddingRight: 0
//     },
//     logoLG: {
//       maxWidth: 550,
//       width: "-webkit-fill-available",
//       margin: 30
//     },
//     imgPromotion: {
//       width: "100%",
//     },
//     space: {
//       flexGrow: 1,
//     },
//     optionsButtons: {
//       fontWeight: 700,
//       color: "#b80959",
//     },
//     subTitle: {
//       color: "#da1866",
//       fontFamily: "\"Nunito\", Arial, \"Helvetica Neue\", Helvetica, sans-serif",
//       margin: ".5em 0",
//       lineHeight: "1.5em",
//       letterSpacing: "0.02em",
//       paddingBottom: 50,
//     },
//     content: {
//       paddingTop: 50,
//       background: "#FFFFFF",
//       textAlign: "center",
//       paddingBottom: 100,
//     },
//     grid: {
//       width: "100%",
//       margin: 0,
//     },
//     card: {
//       borderRadius: 24,
//       transition: "transform .25s, background .5s",
//       '&:hover': {
//         transform: "scale(1.07)",
//         background: "#1d449426"
//       },
//     },
//     media: {
//       height: 240,
//       backgroundSize: "contain",
//       margin: theme.spacing(2)
//     },
//     opcionName: {
//       fontSize: 24,
//       lineHeight: "1.3em",
//       fontWeight: 700,
//       color: "#273f5b",
//       letterSpacing: "0.02em",
//       textTransform: "uppercase",
//     },
//     explained: {
//       position: "relative",
//       paddingTop: 120,
//       paddingBottom: 120,
//       //      background: "#3c1e62",
//       background: "#1d4494",
//       '&::before': {
//         content: '""',
//         backgroundImage: "url(/statics/imagens/f1.png)",
//         //backgroundImage: "url(/statics/imagens/02-triangle.svg)",
//         top: -1,
//         height: 170,
//         position: "absolute",
//         width: "100%",
//         backgroundSize: "cover",
//         left: 0,
//       },
//       '&::after': {
//         content: '""',
//         backgroundImage: "url(/statics/imagens/f2.png)",
//         //backgroundImage: "url(/statics/imagens/01-triangle.svg)",
//         bottom: -1,
//         height: 170,
//         position: "absolute",
//         width: "100%",
//         backgroundSize: "cover",
//         left: 0,
//       }
//     },
//     explainedText: {
//       color: "#FFFFFF",
//       margin: ".5em 0",
//       lineHeight: "1.5em",
//       letterSpacing: "0.02em",
//       paddingBottom: 50,
//     },
//     foother: {
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       padding: "50px 0px",
//     },
//     footherText: {
//       fontSize: 14,
//       marginBottom: theme.spacing(1),
//       color: "#6987ab",
//       display: "block",
//     },
//     service: {
//       background: "#FFFFFF",
//       padding: theme.spacing(2),
//       textAlign: "center",
//       color: "#4b5d73"
//     },
//     pasos: {
//       padding: theme.spacing(1),
//       color: "#da1866"
//     },

//     add: {
//       flex: 1,
//       color: "#FFFFFF",
//       boxShadow: 'none',
//       textTransform: 'none',
//       border: '1px solid',
//       backgroundColor: '#0063cc',
//       borderColor: '#0063cc',
//       fontFamily: [
//         '-apple-system',
//         'BlinkMacSystemFont',
//         '"Segoe UI"',
//         'Roboto',
//         '"Helvetica Neue"',
//         'Arial',
//         'sans-serif',
//         '"Apple Color Emoji"',
//         '"Segoe UI Emoji"',
//         '"Segoe UI Symbol"',
//       ].join(','),
//       '&:hover': {
//         backgroundColor: '#0069d9',
//         borderColor: '#0062cc',
//         boxShadow: 'none',
//       },
//       '&:active': {
//         boxShadow: 'none',
//         backgroundColor: '#0062cc',
//         borderColor: '#005cbf',
//       },
//       '&:focus': {
//         boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
//       },
//       margin: 12,
//     },
//     whatsApp: {
//       flex: 1,
//       margin: 12,
//       color: "#FFFFFF",
//       boxShadow: 'none',
//       textTransform: 'none',
//       border: '1px solid',
//       backgroundColor: '#4db45a',
//       borderColor: '#4db45a',
//       fontFamily: [
//         '-apple-system',
//         'BlinkMacSystemFont',
//         '"Segoe UI"',
//         'Roboto',
//         '"Helvetica Neue"',
//         'Arial',
//         'sans-serif',
//         '"Apple Color Emoji"',
//         '"Segoe UI Emoji"',
//         '"Segoe UI Symbol"',
//       ].join(','),
//       '&:hover': {
//         backgroundColor: '#54c562',
//         borderColor: '#54c562',
//         boxShadow: 'none',
//       },
//       '&:active': {
//         boxShadow: 'none',
//         backgroundColor: '#58ce66',
//         borderColor: '#58ce66',
//       },
//       '&:focus': {
//         boxShadow: '0 0 0 0.2rem #54c562b0',
//       },
//     },
//     innerPasos: {
//       display: "flex",
//       flexDirection: "row",
//       alignItems: "center",
//       justifyContent: "center",
//       maxWidth: 400,
//       margin: "auto",
//     },
//     imgPasos: {
//       width: "100%",
//       maxWidth: 300,
//     }
//   })
// );

function Home() {
  // const itemData = [
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/227712282_1165355170611523_5569169326769004280_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=tewEqpsEXAMAX9q8_h7&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT8ypYnSUNspHvUFP3a28Y0ChSjWdAhXv-xcSjcJB1IS6w&oe=6321FA25&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/172954402_264993238622536_4613065431793473625_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=45kVS-Bzk_0AX-nNeRH&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT9nK1mwAiIOTob0E0bBwDEQMZk7SynUl7E2TTm3bXAqtA&oe=63221DE3&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/169330748_744959652871886_5609602250814425706_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=SvOjDwd_ujsAX8PYJIO&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT9ihJ81SZTwN-Ak5RVv6itPG7jgWUSylk0hBKjmbm7Q1A&oe=6321D5F3&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/165709748_2915362275402481_8778751018418001968_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=JV-CzY-xv24AX_08r4l&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT-qnYzaN-0Aw81sNL26zebnF16F8Q63t29JsJ6CfXHkcA&oe=6321F29B&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/158858697_270042901297645_8029911842558772493_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=rCJLGaZnpk4AX_tQ4FQ&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT9NVb8ORKAwA31G7haxVcyrF75zXuTm2c9zAsHdrajleQ&oe=6321EE0C&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/158236303_106086598125463_5772384509657676905_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=iorSd1wujAMAX94zveY&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT8BytQ-CGb92sQK9k4t5Ykx3520ugVVI-GncUmrfimZtA&oe=63226394&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/152048703_758625891747353_957272695522384112_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=XO-Pb8HuwDIAX_1lDsa&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT_OhIFyKhn-joGW8nVsFD0IDBNxD-VnSRi7KFjuDod0-A&oe=63223B45&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/150743125_152811669898352_8922332052943582766_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=wIN7wfmwGbYAX-rQ76k&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT9AM6a0WnkApogl_SyM2v5T0jMkavbieE5rD4894njfGQ&oe=63221FE2&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/146637906_2876208539302500_8762208681022275879_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=vxEUstMX2DgAX-oKuBY&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT-DTnszUSaCzYaMFFk2EfNyI4B2-yx_WVLwefPwajm-RA&oe=63221F16&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/143344279_2499207757048414_4473841932858998583_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=dmj7UFgn4pYAX_tA_ic&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT-zMej2Ojm1nTORbOn18AJITR6jWrmasNjwZOKxcjJjfA&oe=6321E997&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/144291495_218234769978415_1220973340364590715_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ybhfIcNy2SkAX9csGCb&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT9HIyu4d68ISVtsbS-pEcL09qPR3XF8cpBfOcydi8Jwvg&oe=63222F34&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/129211209_130459858854555_2879109197785751477_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=VvATpu32FosAX_u1su-&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT_6MU7Hp0Y3bYGqQAWMkvvchxXXJcYPVxs2xxSVhAPb3w&oe=63224A02&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/294533046_1805911139759239_2531368404300842712_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=VnogmPrAP5AAX9ptO0_&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT8kb0-1AjUpQThzxNdDFJQggmB43Wpb7dJ_SymtyzJDJQ&oe=6322102E&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/301920168_187224210420627_681144715777876179_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=5N_mOnHqo_kAX9tBkud&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT9FCZ6Ql_d77OWS2R7Xdv_p7S5sG8UDxbOkgtQceDjkVQ&oe=63221AFF&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/306567609_1622930598174627_3105181207709411443_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=zUJVZoEC4Z4AX-qeH2f&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT8ytReLk7XTguACved57Hhfo_rTT9CTR4yOKNreKjJAIg&oe=632229DB&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/306320331_601118811475565_4263843915919224530_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=_VjxGPwGbRwAX_LOoIQ&tn=dsrUwiptCC9igq0B&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT-SI5BpO5VCsIV_nmtXl8y6glnrxYdHBTSWqlQ0F9B-1Q&oe=63261270&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/306320331_601118811475565_4263843915919224530_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=_VjxGPwGbRwAX_LOoIQ&tn=dsrUwiptCC9igq0B&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT-SI5BpO5VCsIV_nmtXl8y6glnrxYdHBTSWqlQ0F9B-1Q&oe=63261270&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/306859751_1134794013813185_6904946495094655718_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=rLAb5lFihZoAX9H9gyW&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT_f1ZoDyrTvdU0RdNroxRDoW69dlxvK00IXenZVw-0loA&oe=63262C0B&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/306158651_173290671905158_895419238156920969_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=F4AbS2YhMncAX_foj85&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT-YbkjMBVcElnIw4AaSQuDuWwzfO3Ld8LCTcvS_Fzgyjw&oe=63279197&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/306364782_618062849757837_1116097453039595767_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=tWvYKkjI-VwAX_FtN4C&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT_DzQapa5JZISGEqIaLsai8DmzXDaS_ijYTh4IEu03HcA&oe=6325F635&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/306122437_756556838983834_1982608293032609876_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=Y9zC16QEz7IAX_N_RSn&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT_BwX7LlLiYxDbKkVvW6xYRWn0bWPSRR-Lu3hXQ3-tu-A&oe=63262FFA&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/306122437_756556838983834_1982608293032609876_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=Y9zC16QEz7IAX_N_RSn&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT_BwX7LlLiYxDbKkVvW6xYRWn0bWPSRR-Lu3hXQ3-tu-A&oe=63262FFA&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/306046310_192332009908732_9108602673167242507_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=SjzNh5YCIScAX80alB8&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT8YjZP115Uj6FlyHO_a9orD1GIXpv1IN7vGwgoLhNmViA&oe=632649A5&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/306499307_606476581115721_7417429648311381787_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=yN6syxX2OyIAX9sv7rC&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT-gOdiH2zOaG6NSuYXjRCRfwnQllMxA7r1vVtCU2yXitQ&oe=632601EF&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/306072660_1236820033799378_5375020995084231846_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=40X7bOS3iW4AX-yK0Ms&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT_P0gauYSHP4xFxeOtQnnZvErJYJGTHtFxN9kbbVsobkA&oe=63279997&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/306356164_790138268857472_3931511289081901969_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=jHOsUFIXq4QAX--IfCQ&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT9mxntlxHyk83ioXK5shpQ8-RFLVpwVd-zf9REZ4lx3aA&oe=632794CF&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/306356164_790138268857472_3931511289081901969_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=jHOsUFIXq4QAX--IfCQ&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT9mxntlxHyk83ioXK5shpQ8-RFLVpwVd-zf9REZ4lx3aA&oe=632794CF&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/306210260_1254476275388194_6932440723057970280_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=r21_R_d4MhAAX-pxi2f&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT9mmZ3gzch2cvf6vjKephQJjdVYVo31GMhgx9ocMugzbA&oe=63271969&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/306214120_883272885981785_8836470737711016954_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=Btn3ypNPEHIAX-O8cuD&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT91y9XWS7jeqKoJ-FV4oqGBazvFZTQ3PZL34qbzFzPp9A&oe=6326843C&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/306592656_786987309305044_8840939983380741476_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=ZqnXX3z3H_YAX9tEcQO&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT8N412zzt6h20LQa04D06n7-8nWl62N2yMV14HLqOoreQ&oe=63276E47&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/306272534_429093245869289_6269858553196044842_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=MPfMbUCQNfMAX9j9nv7&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT-GxGnlgnjaCEhBPMPdZtEZHiW6stXtWnfARuGnZq8vTA&oe=63274798&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/306272534_429093245869289_6269858553196044842_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=MPfMbUCQNfMAX9j9nv7&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT-GxGnlgnjaCEhBPMPdZtEZHiW6stXtWnfARuGnZq8vTA&oe=63274798&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/306021349_797580064712340_7962533088163085567_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=4g9yLEP1tugAX8kWgEG&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT8ajuZybO52Z5_HrKo1RWAG3hUmQvtV5haEYjOQZFoCvQ&oe=6325BF7C&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305791183_1716811478719107_4728028181138678451_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=qZIYEjRoqXkAX_sez1z&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT9QNiKG355hJX64uGD8qQbo21mqVDWhTxh-odnXbe4ltA&oe=6326EB89&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305936617_628497788637216_4976735244990247985_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=lhbRwND4fqUAX806mwl&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT_YRiCD5yyvtpfb_Nz10nJ2UDrW4JjC2v_P8x9hPK8z0A&oe=6327930B&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305854227_489996069234817_4337476268236529163_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=maFijB6kFHYAX-yfnxf&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT8F7BagUbvAsWwCo55JASlC4OX1u4rYVr3f3fmQq0cxxA&oe=63275C78&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305854227_489996069234817_4337476268236529163_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=maFijB6kFHYAX-yfnxf&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT8F7BagUbvAsWwCo55JASlC4OX1u4rYVr3f3fmQq0cxxA&oe=63275C78&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305151628_2085773681620280_6141899141321800277_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=nHlJMOvMsJUAX-Sx1Iq&tn=dsrUwiptCC9igq0B&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT-oX5QuViKm4f6uHC_lrW2lGV3lunX1Ktt3dmBv1xG3fA&oe=63271F85&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305578689_1199103890820035_1013177174026074990_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=hEjf6pFeM6wAX9H_Z0w&tn=dsrUwiptCC9igq0B&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT-pulp3x-OAZFJl_ZBMCwfZInr1_OdaxSqKiXCpg2m5Fw&oe=63269C16&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305559329_308988141445590_2406280233804743614_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=MorO8v4cG4oAX9BJ92G&tn=dsrUwiptCC9igq0B&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT_0bof7GXBJmHoHrPDl5yvoYfA1IzGMUz2pxFwC0uR2Hw&oe=6325CFEE&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305902007_448676850538718_2015302626332420443_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=MmedcMpe3vgAX8naIvH&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT8XhqMRBcrrRPyqSyxHixhR3D4Gvbm9tw-wxCnkd7gMiA&oe=632642F8&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305902007_448676850538718_2015302626332420443_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=MmedcMpe3vgAX8naIvH&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT8XhqMRBcrrRPyqSyxHixhR3D4Gvbm9tw-wxCnkd7gMiA&oe=632642F8&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305575234_457725806412765_5237194441725043102_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=SjVzXNqyZcEAX99AfRI&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT8adVCDFCMKor0Gee7UHDF-RrfF8f1YMbEBnDxQ6kYWIA&oe=632798A2&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305950056_187226040345020_2045352928930886620_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=zB5pLMptJNoAX83zhqV&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT-2uA5bqlsK6kSTEMQuHu7CsvwrPl__FOErcp4cRjH-cA&oe=6326EB54&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305774070_173295421919139_6495355966511367478_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=zIscZJi3YnEAX9U8NxL&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT8anQRjyHKGMZfQKyGPsyl9Q1G9QMI_BH0x0q7DnJ17fg&oe=6325F1B9&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305853793_1116690632588169_2555585560597653566_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=C7wjgKRLwgsAX936VF4&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT89L1C2gUQg23vvC0OblMY3CYgIpZQZRh4INjKVMVAD-Q&oe=6326C3A2&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305853793_1116690632588169_2555585560597653566_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=C7wjgKRLwgsAX936VF4&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT89L1C2gUQg23vvC0OblMY3CYgIpZQZRh4INjKVMVAD-Q&oe=6326C3A2&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305486767_629297295273083_4676971817590196368_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=EKidH8mQVCoAX8_KtGb&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT8v6NX-G50mDjDeVJ5n9dnftjVMMHB6Aaow0FACtM_jZw&oe=6326F4B9&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305652764_846199123413660_1068494231582270325_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=iSAiMeWbitgAX_uJlO6&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT_jsuq4x-Uzy-31LTohvrzZXzRRQt8wNa4o62uUXIwEKw&oe=6326D63C&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305674046_447614067385601_7802842524996385751_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=OMkttMwN80IAX_lpFOh&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT_oFSWzJeeTOvJuWIhfQ_ChjKSE-Onxn79SnBY3lLa5hQ&oe=6325D534&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305632229_129227579659146_8559396722811794383_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=SpVUIGPr5iYAX_O7uWq&tn=dsrUwiptCC9igq0B&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT8dtn7Fpb4-0SujF0GubDiU5ptK-7-slWJi4SYlG4oOOA&oe=6326F3B2&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305632229_129227579659146_8559396722811794383_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=SpVUIGPr5iYAX_O7uWq&tn=dsrUwiptCC9igq0B&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT8dtn7Fpb4-0SujF0GubDiU5ptK-7-slWJi4SYlG4oOOA&oe=6326F3B2&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305870428_377329894567755_2954169209089532769_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=PR5q1xtvbGAAX-Qj0r7&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT-GQORT_yjMBck8odgmz20fcjP80_1fuBnCMRwtYd_Lbw&oe=63273C9A&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305737037_1147652196098580_5079663984678916485_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=kqRrSGzZfpkAX_tyTaP&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT8nxql_XQQK7gZzFT6hSV0QNDNAq-vgPTF6QPPuCxB82A&oe=632631AA&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305404520_133868766024135_3730239129065360498_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=ejBSLaaGsowAX9rs8K-&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT_4Tb2hlFeN-QH9vZXFIgcGa7pBXymY49Fjr8WR7Hgk3Q&oe=63278291&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305523554_188420083633503_8401040145608887201_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=sAi170cj6Z4AX8jWqC8&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT8elupxp1MIoaG_MFopNHVC_T4zW04Vhc3t3Cu3WuUd_A&oe=632792AC&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305523554_188420083633503_8401040145608887201_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=sAi170cj6Z4AX8jWqC8&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT8elupxp1MIoaG_MFopNHVC_T4zW04Vhc3t3Cu3WuUd_A&oe=632792AC&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305157541_3399349283617155_671130746983674423_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=UBV00jixHp0AX_mWDep&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT_T5IBK8u9zND45T23LgTcsmrV6x-JHphKzRd46hSduOQ&oe=6326DBE4&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305491168_494251652533626_8187191662963345464_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=65GJV1sH6VsAX8Mum4_&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT_qpb7-2t7wLr9M6KlzOonhKxr9Cor2c34ybTum6CoSRw&oe=6325F23B&_nc_sid=7bff83",
  //   "https://instagram.fcpc1-1.fna.fbcdn.net/v/t51.2885-15/305157541_868753734105496_4517578144783040609_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fcpc1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=uB2z3Xjex7sAX8kZ2l1&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT8jxFzWbGiDVUYRowgZw4b9rEOdeukJ_D5E81YYZ_hpig&oe=63275C05&_nc_sid=7bff83",
  // ]

  const itemData = Array.from(Array(18).keys()).map(e => `/statics/photos/ (${e + 1}).jpg`)


  return <Box
    sx={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
      background: "#FFF"
    }}
  >

    <img style={{
      maxHeight: 200,
    }} src="/logo192.png" alt="" />
    <div className="explained">

      <div data-negative="false" style={{
        marginTop: "-1px"
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{
          height: "120px",
          zIndex: -1,
          width: "100%"
        }}>
          <path d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z" style={{ fill: "#fff" }}></path>
        </svg>
      </div>
      <Typography variant="h4" className="explainedText" >
        ESTE TITULO PUEDE SER LO QUE QUIERAS,<br />
        y esta una acotación!
      </Typography>
      <Typography variant="h5" className="explainedText" >
        Te recomiendo colocar afirmaciones, DE TU TRABAJO!
      </Typography>
      <Typography variant="h6" className="explainedText" >
        ¿Qué querés que vean? ¡Acá es el mejor lugar!
      </Typography>

      <div data-negative="false" style={{
        transform: "rotate(180deg)",
        backgroundPositionX: "50px",
        marginBottom: "-1px"
      }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{
          height: "120px",
          zIndex: -1,
          width: "100%"
        }}>
          <path d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z" style={{ fill: "#fff" }}></path>
        </svg>
      </div>
    </div>

    <Typography variant="h4" className="explainedText" >
      Algunos trabajos
    </Typography>

    <ImageList cols={3} gap={0}>
      {itemData.map((item) => (
        <ImageListItem key={"item.img"} sx={{ margin: 0 }}>
          <img
            src={`${item}`}
            srcSet={`${item}`}
            alt={"item.title"}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>


    <LinkStyled to="/get-turn" style={{ margin: 56 }}>
      <Button size="large" sx={{
        padding: "24px 56px",
        fontSize: "20px",
        borderRadius: "25px",
        backgroundColor: "#f2c3b1",
        color: "#934c63",
        '&::hover': {
          backgroundColor: "#934c63",
          color: "#f2c3b1",
        }
      }}>Sacá un turno</Button>
    </LinkStyled>
    <Footer />
    <Copyright />
  </Box >
}

export default Home;

/*
#f6eed9
#f2c3b1

#934c63
#934c63
*/