import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Footer() {
  const iconStyle = {
    fontSize: 32,
    color: "var(--color-pink)",
  };

  return (
    <footer className="py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 flex flex-col  ">
          {/* Email with Mail Icon and as a link */}
          <a
            href="mailto:salma2201@gmail.com"
            className="text-xl flex items-center text-[var(--color-babypink)]"
            style={{ width: "fit-content" }}
          >
            <EmailIcon sx={{ ...iconStyle, fontSize: 24, marginRight: 2 }} />
            salma25102001@gmail.com
          </a>
          {/* Phone number under email, with phone icon */}
          <a 
          href=" tel:"
          className="ml-0 text-xl text-[var(--color-babypink)] flex items-center mt-1">
            <PhoneIcon sx={{ ...iconStyle, fontSize: 24, marginRight:2 }} />
            +12345678901
          </a>
        </div>
        <div className="flex space-x-5">
          <a
            href="https://github.com/salma607"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon sx={iconStyle} />
          </a>
          <a
            href="https://www.linkedin.com/in/salma-ahmed-amin/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon sx={iconStyle} />
          </a>
          <a href="mailto:salma2201@gmail.com" aria-label="Email">
            <EmailIcon sx={iconStyle} />
          </a>
          <a
            href="https://www.facebook.com/salma25oct/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon sx={iconStyle} />
          </a>
        </div>
      </div>
    </footer>
  );
}