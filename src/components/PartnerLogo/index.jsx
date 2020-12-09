import React from 'react';
import styles from './styles.module.scss'

import imagePath from '../../assets/MFV.png';

const Logo = () =>
  <div className={styles['wrap']}>
    <img src={imagePath}/>
  </div>


export default Logo;
