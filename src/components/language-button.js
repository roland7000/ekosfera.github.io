import React from 'react';
import i18n from './i18n';

function Button() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <ul>
      <li>
        <button onClick={() => changeLanguage('ua')}>ua</button>
      </li>
      <li>
        <button onClick={() => changeLanguage('en')}>en</button>
      </li>
    </ul>
  )
}

export default Button;