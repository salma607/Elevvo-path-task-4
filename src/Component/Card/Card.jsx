import DesignServicesIcon from "@mui/icons-material/DesignServices";
import { cardStyles } from "./Constant";

export default function Card() {
  return (
    <div style={cardStyles.container}>
      <div style={cardStyles.topBar}></div>
      <div style={cardStyles.iconContainer}>
        <DesignServicesIcon sx={cardStyles.icon} />
      </div>
      <div style={cardStyles.title}>Website Design</div>
      <p style={cardStyles.description}>
        focuses on creating websites that are both attractive and easy to use. A
        good design helps visitors quickly find the information they need and
        enjoy their experience on the site.
      
      </p>
    </div>
  );
}
