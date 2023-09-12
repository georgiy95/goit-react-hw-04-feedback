import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <p className={s.text}>
          Good:<span>{good}</span>
        </p>
      </li>
      <li className={s.item}>
        <p className={s.text}>
          Neutral:<span>{neutral}</span>
        </p>
      </li>
      <li className={s.item}>
        <p className={s.text}>
          Bad:<span>{bad}</span>
        </p>
      </li>
      <li className={s.item}>
        <p className={s.text}>
          Total:<span>{total}</span>
        </p>
      </li>
      <li className={s.item}>
        <p className={s.text}>
          Positive feedback:<span>{positivePercentage}%</span>
        </p>
      </li>
    </ul>
  );
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}