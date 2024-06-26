import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  //Used to read query strings from the URL
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return [lat, lng];
}
