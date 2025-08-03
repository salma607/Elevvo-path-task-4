export const cardStyles = {
   container: {
  borderRadius: "12px",
  width: "340px",
  minHeight: "300px",
  padding: "32px 24px",
  boxSizing: "border-box",
  position: "relative",
  boxShadow: "5px 2px 24px var(--color-pink)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  margin: "40px auto",
  transition: "transform 0.3s ease, box-shadow 0.3s ease", // Add transition
  "&:hover": {
    transform: "translateY(-5px)", // Moves card up slightly
    boxShadow: "8px 5px 30px var(--color-pink)" // Enhanced shadow on hover
  
  }
  },
  topBar: {
    height: "4px",
    width: "100%",
    background: "var(--color-gradient)",
    borderRadius: "12px 12px 0 0",
    position: "absolute",
    top: 0,
    left: 0,
  },
  iconContainer: {
    marginTop: "32px",
    marginBottom: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  icon: {
    fontSize: 100,
    color: "var(--color-pink)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    margin: "0 0 12px 0",
    color: "var(--color-beige)",
  },
  description: {
    color: "var(--color-gray)",
    fontSize: "1rem",
    margin: 0,
  },
};