import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import styles from './styles.module.scss';
import { useSelector, useDispatch } from 'react-redux'
import {
  setInfoDialogCoordinates,
  setInfoDialogContent,
  setInfoDialogOpen
} from '../../store/actions/infoDialog.actions';

const Marker = ({ children }) => children;

const MapMarker = ({
  value,
  isCluster,
  incidentsId,
  style
}) => {
  const { data } = useSelector(store => store.incidents);
  const dispatch = useDispatch();
  const markerRef = useRef();
  const contentObject = data.find(item => item.id === incidentsId);

  const handleClick = event => {
    if (!incidentsId || !contentObject) return;
    const {
      view: {
        innerHeight,
        innerWidth
      }
    } = event;

    dispatch(setInfoDialogContent(contentObject))

    dispatch(setInfoDialogCoordinates({
      innerHeight: parseInt(innerHeight),
      innerWidth: parseInt(innerWidth),
      clientRect: ReactDOM.findDOMNode(markerRef.current).getBoundingClientRect()
    }))

    dispatch(setInfoDialogOpen())
  }

  return (
    <Marker>
      <div
        ref={markerRef}
        className={
          cx({
            [styles.marker]: true,
            [styles.cluster]: isCluster,
            [styles.single]: !isCluster
          })
        }
        data-tip
        data-for="map-marker"
        onClick={handleClick}
        style={style}
      >
        {value}
      </div>
    </Marker >
  )
}
export default MapMarker;
