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
        Leverage agile frameworks to provide a robust synopsis for high level
        overviews. Iterative approaches to corporate
      </p>
    </div>
  );
}