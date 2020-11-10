import Geocode from "react-geocode";
import { GOOGLE_MAPS_API } from '../constants';
import i18n from '../i18n';

Geocode.setApiKey(GOOGLE_MAPS_API);
Geocode.setLanguage(i18n.language);
Geocode.setRegion("ua");

export default Geocode;
