import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Logo() {
  return (
    <div className="flex items-center z-20">
      <AccountCircleIcon
        sx={{
          fontSize: "32px",
          marginRight: "10px",
          color: "var(--color-beige)"
        }}
      />
      <span className="text-[var(--color-beige)] font-bold text-2xl">
        My portfolio
      </span>
    </div>
  );
}