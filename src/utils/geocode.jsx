import Geocode from "react-geocode";
import { GOOGLE_MAPS_API } from '../constants';
import i18n from '../i18n';

Geocode.setApiKey(GOOGLE_MAPS_API);
Geocode.setLanguage("en");
Geocode.setRegion("ua");

console.log('i18n', i18n)

export default Geocode;
