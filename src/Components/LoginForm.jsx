import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Box from "@mui/material/Box";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginForm = () => {
  const validationSchema = yup.object({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        // Simulate an API call or any async operation for authentication
        // For demonstration purposes, we're using a setTimeout to simulate a delay
        // Replace this with your actual authentication logic

        // Simulating an API call with a delay of 1 second
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Replace these with your actual valid credentials
        const validEmail = "amaans113@gmail.com";
        const validPassword = "123";

        // Check if the provided email and password match the valid credentials
        if (values.email === validEmail && values.password === validPassword) {
          console.log("Login successful!");
          alert("Login successful!"); // Replace with your actual success handling
        } else {
          console.error("Invalid email or password");
          alert("Invalid email or password. Please try again."); // Replace with your actual error handling
        }
      } catch (error) {
        console.error("Authentication failed:", error.message);
        alert("Login failed. Please check your credentials."); // Replace with your actual error handling
      }
    },
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Box
      sx={{
        backgroundColor: "skyblue",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h3" component="h2">
          Login
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            id="outlined-basic"
            backgroundColor="black"
            label="Email"
            variant="outlined"
            fullWidth
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <FormControl sx={{ marginTop: 4 }} variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              label="Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {formik.touched.password && formik.errors.password && (
              <Typography variant="body2" color="error">
                {formik.errors.password}
              </Typography>
            )}
          </FormControl>
          <Button type="submit" variant="contained" fullWidth sx={{ marginTop: 2, backgroundColor: "black" }}>
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
