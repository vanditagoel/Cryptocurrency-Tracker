import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

// Styled component for the title
const Title = styled(Typography)(({ theme }) => ({
  flex: 1,
  color: "gold",
  fontFamily: "Montserrat",
  fontWeight: "bold",
  cursor: "pointer",
  "&:hover": {
    color: "goldenrod",
  },
}));

// Dark theme using MUI v5 syntax
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    mode: "dark", // Changed from 'type' to 'mode' in v5
  },
});

// Styled Select component
const StyledSelect = styled(Select)({
  width: 100,
  height: 40,
  marginLeft: 15,
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "gold",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "goldenrod",
  },
});

function Header() {
  const { currency, setCurrency } = CryptoState();
  const navigate = useNavigate(); // Replaces useHistory in React Router v6

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Title
              onClick={() => navigate("/")} // React Router v6 uses navigate
              variant="h6"
            >
              Vola Track
            </Title>
            <StyledSelect
              variant="outlined"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: "#121212",
                    "& .MuiMenuItem-root": {
                      "&:hover": {
                        bgcolor: "rgba(255, 215, 0, 0.1)",
                      },
                    },
                  },
                },
              }}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </StyledSelect>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;