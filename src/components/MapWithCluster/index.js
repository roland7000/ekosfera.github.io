// Common
import React, { useState } from 'react';
import useSupercluster from 'use-supercluster';
import useSwr from 'swr';
import styles from './styles.module.scss';
import { FILTER_SUCCESS } from '../../constants';

// Components
import Map from '../Map';
import MapMarker from '../MapMarker';

import { useSelector } from 'react-redux'

const normalizeIncidents = incidents => incidents.filter(item => !!item.locationData.length)

function MapWithCluster() {
  const [zoom, setZoom] = useState(10);
  const [bounds, setBounds] = useState(null);
  const { loading: incidentsLoading, error: incidentsError, data: incidentsData } = useSelector(state => state.incidents);
  const { activeFilterType } = useSelector(state => state.filter);

  let incidentsDataFiltered = incidentsData
  if (activeFilterType === FILTER_SUCCESS && incidentsData && incidentsData.length) {
    incidentsDataFiltered = incidentsData.filter(item => item.status === "CLOSED_SUCCESS")
  }

  const normalizedData = incidentsDataFiltered && incidentsDataFiltered.length ? normalizeIncidents(incidentsDataFiltered) : []

  const points = normalizedData.map(({
    id,
    status,
    locationData,
    damage
  }) => {
    const { latlon } = locationData[0];
    const [lat, lon] = latlon && (latlon.slice(0, latlon.length - 1)).split(', ')
    const {
      measure: damageMeasure,
      value: damageValue
    } = damage && damage[0] || { measure: null, value: null }

    return ({
      type: 'Feature',
      properties: {
        isCluster: false,
        incidentsId: id,
        status,
        damageMeasure,
        damageValue
      },
      geometry: {
        type: 'Point',
        coordinates: [
          parseFloat(lon),
          parseFloat(lat)
        ]
      }
    })
  });

  const { clusters } = useSupercluster({
    points,
    bounds,
    zoom,
    options: {
      radius: 50,
      maxZoom: 20
    }
  });

  const handleMapChange = ({ zoom, bounds }) => {
    setZoom(zoom)
    setBounds([
      bounds.nw.lng,
      bounds.se.lat,
      bounds.se.lng,
      bounds.nw.lat,
    ])
  }

  return (
    <div className={styles.map}>
      <Map
        handleChange={handleMapChange}
      >
        {
          clusters && clusters.length && clusters.map(({
            geometry: {
              coordinates = []
            },
            properties,
            id: clusterId
          }) => {
            const [longitude, latitude] = coordinates;
            const styles = {
              height: '30px',
              width: '30px'
            };
            const {
              point_count: pointsCount,
              cluster: isCluster,
              incidentsId,
              damageValue,
              damageMeasure,
              status
            } = properties;

            const markerValue = damageValue ? `${damageValue} ${damageMeasure}` : ''
            const val = isCluster ? pointsCount : markerValue

            return <MapMarker
              key={longitude + latitude + (isCluster ? clusterId : incidentsId)}
              incidentsId={incidentsId}
              isCluster={isCluster}
              lat={latitude}
              lng={longitude}
              value={val}
              style={styles}
              isCompleted={status === "CLOSED_SUCCESS"}
            />
          })
        }
      </Map>
    </div>
  );
}

export default MapWithCluster;
