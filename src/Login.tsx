import { Box, Button } from '@mui/material';
import { supabase } from "./lib/api";


const Login = () => {
  const handleLogin = async () => {
    // Perform login logic, such as making an API request
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) console.log(`error: ${error}`);
  };
  return (
    <Box
      height={"100vh"}
      display="flex"
      alignItems="center"
      justifyContent={"center"}
    >
      <Button onClick={handleLogin} variant="contained">
        Login with google
      </Button>
    </Box>
  );
};

export default Login
