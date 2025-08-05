import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Style } from "./contactConstant";

export default function form() {
  return (
    <div className="md:w-1/2 flex justify-center items-center px-4 mt-10 md:mt-0">
      <form
        className="w-full max-w-lg  rounded-xl p-8 shadow-2xl mt-30"
        onSubmit={(e) => e.preventDefault()}
      >
        <h3 className="text-[var(--color-gray)] text-lg font-semibold mb-6 tracking-widest">
          FILL THE FORM BELOW*
        </h3>
        {/* Name */}
        <div style={Style.fill}>
          <PersonOutlineIcon style={Style.icon} />
          <input type="text" placeholder="First Name" style={Style.input} />
        </div>
        {/* Email */}
        <div style={Style.fill}>
          <EmailOutlinedIcon style={Style.icon} />
          <input
            type="email"
            placeholder="Enter your mail"
            style={Style.input}
          />
        </div>
        {/* Budget */}
        <div style={Style.fill}>
          <AttachMoneyIcon style={Style.icon} />
          <select style={Style.input} defaultValue="">
            <option value="" disabled className="bg-[#191919] text-gray-400">
              Your budget
            </option>
            <option style={Style.option}>$500 - $1,000</option>
            <option style={Style.option}>$1,000 - $5,000</option>
            <option style={Style.option}>$5,000+</option>
          </select>
        </div>
        {/* Message */}
        <div style={Style.fill}>
          <ChatBubbleOutlineIcon style={Style.icon} />
          <textarea
            rows={4}
            placeholder="Type your message"
            className="w-full bg-transparent outline-none text-white placeholder-gray-400 resize-none"
          />
        </div>
        {/* Submit Button */}
        <button id="contact"
       
          type="submit"
          className="w-full flex items-center justify-center py-3 rounded-full font-semibold transition-all shadow-lg cursor-pointer"
          style={{
            color: "var(--color-white)",
            background: "var(--color-gradient)",
          }}
        >
          <span className="mr-2">Submit Now</span>
          <ArrowForwardIcon />
        </button>
      </form>
    </div>
  );
}
