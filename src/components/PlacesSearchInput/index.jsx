import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import styles from './styles.module.scss';

const LocationSearchInput = ({
  onSelect,
  getLocationData
}) => {
  const [t] = useTranslation();
  const [state, setState] = useState({
    address: '',
    value: ''
  });

  const handleChange = address => setState({ address });

  const handleSelect = address => {
    setState({ address });

    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        onSelect && onSelect(latLng);
        getLocationData && getLocationData({
          center: latLng,
          address
        })
      })
      .catch(error => console.error('Error logs', error));
  };

  return (
    <PlacesAutocomplete
      value={state.address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className={styles['location-search']}>
          <input
            {...getInputProps({
              placeholder: t('Search Places'),
              className: styles['location-search-input'],
            })}
          />
          <ul className={styles['autocomplete-dropdown-container']}>
            {loading && <div>{t('Loading')}</div>}
            {suggestions.map(suggestion => (
              <li
                {...getSuggestionItemProps(suggestion, {
                  className: styles[`suggestion-item${suggestion.active ? '--active' : ''}`],
                })}
                key={suggestion && suggestion.placeId}
              >
                {suggestion.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </PlacesAutocomplete>
  )
}

export default LocationSearchInput;
