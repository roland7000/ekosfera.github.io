// Common
import React, { useState } from 'react';
import useSupercluster from 'use-supercluster';
import useSwr from 'swr';
import styles from './styles.module.scss';

// Components
import Map from '../Map';
import MapMarker from '../MapMarker';

import { useSelector } from 'react-redux'

const normalizeIncidents = incidents => incidents.filter(item => !!item.locationData.length)

function MapWithCluster() {
  const [zoom, setZoom] = useState(10);
  const [bounds, setBounds] = useState(null);
  const { loading: incidentsLoading, error: incidentsError, data: incidentsData } = useSelector(state => state.incidents);
  const normalizedData = incidentsData && incidentsData.length ? normalizeIncidents(incidentsData) : [];

  const points = normalizedData.map(({
    id,
    status,
    locationData,
    damage: {
      measure: damageMeasure = null,
      value: damageValue = null
    }
  }) => {
    const { latlon } = locationData[0];
    const [lat, lon] = latlon && (latlon.slice(0, latlon.length - 1)).split(', ')

    return ({
      type: 'Feature',
      properties: {
        isCluster: false,
        incidentsId: id,
        category: status,
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
    <Map
      handleChange={handleMapChange}
      className={styles.map}
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
          const styles = {};
          const {
            point_count: pointsCount,
            cluster: isCluster,
            incidentsId,
            damageValue,
            damageMeasure
          } = properties;

          if (damageValue) {
            const val = (damageValue * 0.00005).toFixed(0);

            styles.width = val + 'px';
            styles.height = val + 'px';
          }

          const markerValue = damageValue && damageMeasure && `${damageValue.toFixed(2)} ${damageMeasure}` || null
          const val = isCluster ? pointsCount : markerValue

          return <MapMarker
            key={longitude + latitude + (isCluster ? clusterId : incidentsId)}
            incidentsId={incidentsId}
            isCluster={isCluster}
            lat={latitude}
            lng={longitude}
            value={val}
            style={styles}
          />
        })
      }
    </Map>
  );
}

export default MapWithCluster;
