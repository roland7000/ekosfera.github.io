// Common
import React from 'react';
import cx from 'classnames';
import { FILTER_ALL, FILTER_SUCCESS } from '../../constants';

// Hooks
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// Styles
import styles from './styles.module.scss';

// Action Creators
import { setActiveFilter } from '../../store/actions/filter.actions';

const Filter = () => {
  const [t] = useTranslation();
  const { activeFilterType } = useSelector(state => state.filter);
  const { data } = useSelector(state => state.incidents);
  const dispatch = useDispatch();
  if (!data || !data.length) return null

  const handleSelectFilter = filterType => dispatch(setActiveFilter(filterType))


  return (
    <ul className={styles['filters']}>
      <li
        className={
          cx({
            [styles['filters_item']]: true,
            [styles['filters_item--active']]: activeFilterType === FILTER_ALL,
          })}
        onClick={() => handleSelectFilter(FILTER_ALL)}
      >
        {t('All reports')}
      </li>
      <li
        className={
          cx({
            [styles['filters_item']]: true,
            [styles['filters_item--active']]: activeFilterType === FILTER_SUCCESS,
          })}
        onClick={() => handleSelectFilter(FILTER_SUCCESS)}
      >
        {t('Successed')}
      </li>
    </ul>
  )
}

export default Filter;
