import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Button, Typography, CircularProgress } from "@mui/material";
import { useSession, signIn } from "next-auth/react";

import { GoogleIcon, FacebookIcon, AppleIcon } from "../../assets/svgIcons";

const Login = () => {
  const session = useSession();
  const { data } = session;
  const user = data?.user;
  const router = useRouter();
  const [isSigningIn, setIsSigningIn] = useState(false);

  console.log("user", user);

  const handleSignIn = async () => {
    setIsSigningIn(true);
    try {
      setIsSigningIn(false);
      signIn("google", {
        redirect: true,
        callbackUrl: "/dashboard",
      });
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="m-10">
      <div className="w-[540px] flex flex-col items-center text-white border-2 border-white py-12 rounded-md">
        <Typography variant="h1" fontSize={24}>
          Please Login to continue...
        </Typography>
        <div className="flex flex-col gap-5 mt-8">
          <Button
            variant="outlined"
            onClick={handleSignIn}
            sx={{
              color: "#fff",
              borderColor: "#fff",
              letterSpacing: "0.8px",
              fontSize: 14,
              "&:hover": { borderColor: "#fff", outline: "solid 1.5px #fff" },
            }}
            startIcon={<GoogleIcon />}
            endIcon={
              isSigningIn ? (
                <CircularProgress
                  size={15}
                  thickness={4}
                  sx={{ color: "#fff" }}
                />
              ) : (
                ""
              )
            }
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
