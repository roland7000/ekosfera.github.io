import React from 'react';
import useSupercluster from 'use-supercluster';

export const getClusteredChildren = ({
  zoom,
  bounds,
  data,
  component: Component
}) => {
  const points = data.map(crime => ({
    type: 'Feature',
    properties: {
      cluster: false,
      crimeId: crime.id,
      category: crime.category
    },
    geometry: {
      type: 'Point',
      coordinates: [
        parseFloat(crime.location.longitude),
        parseFloat(crime.location.latitude)
      ]
    }
  }));

  const { clusters } = useSupercluster({
    points,
    bounds,
    zoom,
    options: {
      radius: 75,
      maxZoom: 20
    }
  });

  if (!clusters && !clusters.length) return null;

  return (
    <>
      {clusters.map(({
        id: clusterId,
        geometry: {
          coordinates: {
            longitude,
            latitude
          }
        },
        properties: {
          crimeId,
          cluster: isCluster,
          point_count: pointCount
        }
      }) => (
          <Component
            key={isCluster ? clusterId : crimeId}
            isCluster={isCluster}
            lat={latitude}
            lng={longitude}
            value={pointCount}
          />
        ))
      }
    </>
  )
};
