import React, { useState } from "react";
import styles from "./dashboard.module.css";
import Image from "next/image";

import { Menu, MenuItem } from "@mui/material";

const Search = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_142_102)">
      <path
        d="M17.71 16.29L14.31 12.9C15.407 11.5025 16.0022 9.77666 16 8C16 6.41775 15.5308 4.87103 14.6518 3.55544C13.7727 2.23985 12.5233 1.21447 11.0615 0.608967C9.59966 0.00346625 7.99113 -0.15496 6.43928 0.153721C4.88743 0.462403 3.46197 1.22433 2.34315 2.34315C1.22433 3.46197 0.462403 4.88743 0.153721 6.43928C-0.15496 7.99113 0.00346625 9.59966 0.608967 11.0615C1.21447 12.5233 2.23985 13.7727 3.55544 14.6518C4.87103 15.5308 6.41775 16 8 16C9.77666 16.0022 11.5025 15.407 12.9 14.31L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29ZM2 8C2 6.81332 2.3519 5.65328 3.01119 4.66658C3.67047 3.67989 4.60755 2.91085 5.7039 2.45673C6.80026 2.0026 8.00666 1.88378 9.17055 2.11529C10.3344 2.3468 11.4035 2.91825 12.2426 3.75736C13.0818 4.59648 13.6532 5.66558 13.8847 6.82946C14.1162 7.99335 13.9974 9.19975 13.5433 10.2961C13.0892 11.3925 12.3201 12.3295 11.3334 12.9888C10.3467 13.6481 9.18669 14 8 14C6.4087 14 4.88258 13.3679 3.75736 12.2426C2.63214 11.1174 2 9.5913 2 8Z"
        fill="#42427D"
      />
    </g>
    <defs>
      <clipPath id="clip0_142_102">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Bell = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5811 11.8862L14.9794 10.2573V6.24355C15.0008 4.75308 14.4882 3.30515 13.5363 2.1671C12.5844 1.02905 11.2576 0.277752 9.80082 0.0519242C8.95534 -0.0606886 8.09584 0.0103601 7.27967 0.26033C6.46349 0.510299 5.70941 0.933441 5.06773 1.50152C4.42606 2.0696 3.91155 2.76956 3.55853 3.55469C3.20551 4.33982 3.02211 5.19206 3.02055 6.05456V10.2573L1.41891 11.8862C1.21774 12.0931 1.08131 12.3553 1.02669 12.6402C0.972072 12.925 1.00168 13.2199 1.11182 13.4878C1.22196 13.7557 1.40775 13.9849 1.64595 14.1466C1.88415 14.3083 2.16419 14.3954 2.45108 14.3971H5.4408V14.703C5.48237 15.6167 5.88032 16.4764 6.54747 17.0938C7.21462 17.7112 8.09655 18.0359 9 17.9968C9.90345 18.0359 10.7854 17.7112 11.4525 17.0938C12.1197 16.4764 12.5176 15.6167 12.5592 14.703V14.3971H15.5489C15.8358 14.3954 16.1159 14.3083 16.3541 14.1466C16.5923 13.9849 16.778 13.7557 16.8882 13.4878C16.9983 13.2199 17.0279 12.925 16.9733 12.6402C16.9187 12.3553 16.7823 12.0931 16.5811 11.8862ZM10.7796 14.703C10.7303 15.1359 10.5177 15.5328 10.1862 15.8111C9.85465 16.0894 9.42976 16.2276 9 16.197C8.57024 16.2276 8.14535 16.0894 7.81383 15.8111C7.48232 15.5328 7.26975 15.1359 7.2204 14.703V14.3971H10.7796V14.703ZM3.22521 12.5972L4.27517 11.5352C4.44171 11.3678 4.57384 11.1687 4.66394 10.9493C4.75404 10.73 4.80034 10.4948 4.80015 10.2573V6.05456C4.80063 5.44746 4.92951 4.84749 5.17813 4.29491C5.42675 3.74233 5.78936 3.24993 6.24162 2.85076C6.68778 2.44189 7.21646 2.13597 7.79107 1.95417C8.36567 1.77236 8.97247 1.71902 9.56947 1.79782C10.5985 1.96681 11.5325 2.50609 12.1996 3.31637C12.8667 4.12665 13.2219 5.15339 13.1998 6.20755V10.2573C13.1985 10.4942 13.2434 10.729 13.3319 10.9483C13.4205 11.1676 13.551 11.367 13.7159 11.5352L14.7748 12.5972H3.22521Z"
      fill="#42427D"
    />
  </svg>
);

const DashboardHeader = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // handle user menu open
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  // handle user menu close
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="w-full flex justify-between">
      <h1 className="text-4xl subpixel-antialiased">
        Welcome, <span className="font-bold">Niraj</span>
      </h1>
      <div className="flex grow-0 gap-6">
        <div className="relative">
          <input
            name="search"
            className="w-[250px] pl-[19px] py-[16px] custom__border__radius bg-[#F3F6FF] focus:outline-none focus:ring-1 ring-[#5840bb]"
            placeholder="Search for products..."
          />
          <div className="absolute top-[50%] right-[15%] translate-x-2/4 -translate-y-2/4">
            <Search />
          </div>
        </div>
        <div className="bg-[#F3F6FF] p-4 custom__border__radius cursor-pointer hover:ring-2 ring-[#5840bb] relative">
          <Bell />
          <div className={styles.notification__badge} />
        </div>
        <div
          className="w-[54px] h-[54px] relative overflow-hidden custom__border__radius hover:ring-2 ring-[#5840bb]"
          onClick={handleClick}
          id="user"
          aria-controls={open ? "user-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Image
            src="/images/profile.webp"
            alt="profile"
            fill
            style={{ objectFit: "cover", cursor: "pointer" }}
          />
        </div>
        <Menu
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          id="user"
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem onClick={() => console.log("logout")}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default DashboardHeader;
