// Common
import React, { useState } from 'react';
import cx from 'classnames';

// Hooks
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// Components
import Map from '../../Map';
import LocationSearchInput from '../../PlacesSearchInput';
import CoordinatesCaption from '../../CoordinateCaption';

// Action Creators
import { formSetMapCenter } from '../../../store/actions/report.action';

// Styles
import styles from './styles.module.scss';

const StepTwo = () => {
  const [t] = useTranslation();
  const [mapCenter, setMapCenter] = useState()
  const { locationData } = useSelector(state => state.report.submitData);
  const [mapInitialized, setMapInitialized] = useState(false)
  const dispatch = useDispatch();

  const handleMapChange = data =>
    (mapInitialized && data && data.center)
      ? dispatch(formSetMapCenter(data.center))
      : setMapInitialized(true)

  const handleInputChange = latlng => {
    if (!latlng) return
    setMapCenter(latlng)
    handleMapChange(latlng)
  }

  console.log('mapCenter', mapCenter)

  return (
    <div className={cx(styles['form'])}>
      <div className={styles['form_body']}>
        <div className={cx(styles['form_field'], styles['form_field-map_search'])}>
          <h4 className={styles['form_subtitle']}>{t('choose location')} <sup>*</sup></h4>
          <div className={styles['form_loacaiton-search-input-wrap']}>
            <LocationSearchInput center={locationData} onSelect={handleInputChange} />
            <CoordinatesCaption className={styles['form_latlon-caption']} {...locationData[0]} />
          </div>
          <div className={styles['form_field-map']}>
            <Map handleChange={handleMapChange} center={mapCenter} />
            <span className={styles['form_field-map_center']} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepTwo;
