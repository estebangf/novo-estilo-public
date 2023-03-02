import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  height: "100%",
  color: "#1565cc",
  // margin: 0
}));

export default LinkStyled