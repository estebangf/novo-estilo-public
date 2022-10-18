import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { useApp, useAuth } from '../../Tools/Hooks';
import LinkStyled from '../../Components/LinkStyled';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {

  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = (location.state as any)?.from?.pathname || "/";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("handleSubmit")

    let formData = new FormData(event.currentTarget);
    let name = formData.get("name") as string;
    let lastname = formData.get("lastname") as string;
    let email = formData.get("email") as string;
    let password = formData.get("password") as string;
    password = password.trim()
    let passwordConfirm = formData.get("passwordConfirm") as string;
    passwordConfirm = passwordConfirm.trim()

    let passwordConfirmed = password == passwordConfirm && passwordConfirm.trim() != "";
    console.log("passwordConfirmed => ", passwordConfirmed);
    if (passwordConfirmed)
      auth.signin(name, lastname, email, password).then(() => {
        console.log("Registred");
        // navigate(from, { replace: true });
      }).catch((e: any) => {
        console.log("Registred ERROR");
        console.log(e)
        alert(e)
      });
  };


  function handleSignInWithGoogle() {
    auth.signInGoogle().then(r => {
      console.log("Logued");
    }).catch((e: any) => {
      console.log("Registred ERROR");
      console.log(e)
      alert(e)
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastname"
                label="Lastname"
                name="lastname"
                autoComplete="lastname"
                autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="passwordConfirm"
                label="Password Confirm"
                type="password"
                id="passwordConfirm"
                autoComplete="current-password"
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Button
                fullWidth
                variant="contained"
                onClick={handleSignInWithGoogle}
                sx={{ mt: 3, mb: 2 }}
              >
                Registrarse con Google
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link variant="body2">
                    <LinkStyled to="/signup">
                      {"Don't have an account? Sign Up"}
                    </LinkStyled>
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}












/*

import { useNavigate, useLocation } from "react-router-dom";
import { useApp } from "../../auth/hooks";

export default function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useApp();

  let from = (location.state as any)?.from?.pathname || "/";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let email = formData.get("email") as string;
    let password = formData.get("password") as string;

    auth.api.register(email, password).then(result => {
      navigate(from, { replace: true });
    });
  }

  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="email" type="text" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}











*/
