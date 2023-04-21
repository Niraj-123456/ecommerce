import React from "react";

import { Button, Typography } from "@mui/material";

import { GoogleIcon, FacebookIcon, AppleIcon } from "../../assets/svgIcons";

const Login = () => {
  return (
    <div className="m-28">
      <div className="w-[540px] flex flex-col items-center text-white border-2 border-white py-12 rounded-md">
        <Typography variant="h1" fontSize={24}>
          Please Login to continue...
        </Typography>
        <div className="flex flex-col gap-5 mt-8">
          <Button
            variant="outlined"
            onClick={(e) => console.log(e)}
            sx={{
              color: "#fff",
              borderColor: "#fff",
              letterSpacing: "0.8px",
              fontSize: 14,
              "&:hover": { borderColor: "#fff", outline: "solid 1.5px #fff" },
            }}
            startIcon={<GoogleIcon />}
          >
            Login with Google
          </Button>
          <Button
            variant="outlined"
            onClick={(e) => console.log(e)}
            sx={{
              color: "#fff",
              borderColor: "#fff",
              letterSpacing: "0.8px",
              fontSize: 14,
              "&:hover": { borderColor: "#fff", outline: "solid 1.5px #fff" },
            }}
            startIcon={<FacebookIcon />}
          >
            Login with Facebook
          </Button>
          <Button
            variant="outlined"
            onClick={(e) => console.log(e)}
            sx={{
              color: "#fff",
              borderColor: "#fff",
              fontSize: 14,
              letterSpacing: "0.8px",
              "&:hover": { borderColor: "#fff", outline: "solid 1.5px #fff" },
            }}
            startIcon={<AppleIcon />}
          >
            Login with Apple
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
