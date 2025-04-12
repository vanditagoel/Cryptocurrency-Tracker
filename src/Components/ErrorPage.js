
import { Typography, Box } from "@mui/material";

const ErrorPage = ({ message = "Something went wrong." }) => {
  return (
    <Box
      height="60vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
    >
      <Typography variant="h3" color="error" gutterBottom>
        ⚠️ Error
      </Typography>
      <Typography variant="h6" color="textSecondary">
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorPage;