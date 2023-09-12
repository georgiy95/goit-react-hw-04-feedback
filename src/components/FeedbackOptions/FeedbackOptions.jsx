import PropTypes from 'prop-types';
import s from "./FeedbackOptions.module.css"

import React from 'react'

export default function FeedbackButtons({options, onLeaveFeedback }) {
  return (
      <ul className={s.buttonList}>
          {options.map(option => (
              <li key={option} className={s.buttonItem}>
                  <button className={s.button} type="button" onClick={onLeaveFeedback} name={option}>
                      {option }
                  </button>
              </li>
          )) }</ul>
  )
}

FeedbackButtons.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}



