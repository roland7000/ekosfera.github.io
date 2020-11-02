// Common
import React, { useState, useEffect } from 'react';
import cx from 'classnames';

// Hooks
import { useSelector, useDispatch } from 'react-redux';

// Components
import Map from '../../Map';
import LocationSearchInput from '../../PlacesSearchInput';
import CoordinatesCaption from '../../CoordinateCaption';

// Action Creators
import { formSetMapCenter } from '../../../store/actions/report.action';

// Styles
import styles from './styles.module.scss';

const StepTwo = () => {
  const { locationData } = useSelector(state => state.report.submitData);
  const [mapInitialized, setMapInitialized] = useState(false)
  const dispatch = useDispatch();

  const handleMapChange = data =>
    (mapInitialized && data && data.center)
      ? dispatch(formSetMapCenter(data.center))
      : setMapInitialized(true)

  return (
    <div className={cx(styles['form'])}>
      <div className={styles['form_body']}>
        <div className={cx(styles['form_field'], styles['form_field-map_search'])}>
          <h4 className={styles['form_subtitle']}>Виберіть місце порушення на карті <sup>*</sup></h4>
          <div className={styles['form_loacaiton-search-input-wrap']}>
            <LocationSearchInput center={locationData} />
            <CoordinatesCaption className={styles['form_latlon-caption']} {...locationData} />
          </div>
          <div className={styles['form_field-map']}>
            <Map handleChange={handleMapChange} />
            <span className={styles['form_field-map_center']} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepTwo;
