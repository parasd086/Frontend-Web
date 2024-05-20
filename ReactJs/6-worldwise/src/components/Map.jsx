import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  //and all this one does  is to return a function called navigate like this.  And so then we can use this function here
  //to basically move to any URL.
  const navigate = useNavigate();

  //Used to read query strings from the URL
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        Positions: {lat}, {lng}
      </h1>
    </div>
  );
}

export default Map;
