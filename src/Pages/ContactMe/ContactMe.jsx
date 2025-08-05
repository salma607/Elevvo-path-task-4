import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { Style } from "./contactConstant";
import Form from "./Form";


export default function ContactMe() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-stretch justify-center px-2 py-2 ">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col justify-center text-[var(--color-white)] px-2 md:pl-16 mt-7 ">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 mt-12">
          Have projects in mind? Let’s work together
        </h2>
        <p className="text-[var(--color-gray)] mb-8 mt-4 max-w-md">
          Have a project in mind? Looking to partner or work together? Reach out
          through the form and I&apos;ll get back to you in the next 48 hours.
        </p>
        <div className="flex items-center mb-4">
          <MailOutlineIcon style={Style.icon} />
          <span className="font-semibold">salma25102001@gmail.com</span>
        </div>
        <div className="flex items-center">
          <PhoneIcon style={Style.icon} />
          <span className="font-semibold">+12345678901</span>
        </div>
      </div>
      {/*  (Form) */}
      <Form/>
    </div>
  );
}
