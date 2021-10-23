import React from 'react';

import styles from './profile.module.scss';

export default function HistoryBlock({ history = [] }) {
  const mounths = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  return (
    <div>
      <p className={styles.title}>Посещенные мероприятия</p>
      {history.map((item) => (
        <div className={styles.item}>
          <div className={styles.content}>
            <img
              src="https://www.zastavki.com/pictures/640x480/2013Sport__037747_29.jpg"
              alt="ball"
            />
            {item[1]}
          </div>
          <div className={styles.location}>
            <p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.9375 6.28125C9.9375 6.17351 9.9803 6.07017 10.0565 5.99399C10.1327 5.9178 10.236 5.875 10.3438 5.875H11.1562C11.264 5.875 11.3673 5.9178 11.4435 5.99399C11.5197 6.07017 11.5625 6.17351 11.5625 6.28125V7.09375C11.5625 7.20149 11.5197 7.30483 11.4435 7.38101C11.3673 7.4572 11.264 7.5 11.1562 7.5H10.3438C10.236 7.5 10.1327 7.4572 10.0565 7.38101C9.9803 7.30483 9.9375 7.20149 9.9375 7.09375V6.28125Z"
                  fill="#AA139B"
                />
                <path
                  d="M3.84375 1C3.95149 1 4.05483 1.0428 4.13101 1.11899C4.2072 1.19517 4.25 1.29851 4.25 1.40625V1.8125H10.75V1.40625C10.75 1.29851 10.7928 1.19517 10.869 1.11899C10.9452 1.0428 11.0485 1 11.1562 1C11.264 1 11.3673 1.0428 11.4435 1.11899C11.5197 1.19517 11.5625 1.29851 11.5625 1.40625V1.8125H12.375C12.806 1.8125 13.2193 1.9837 13.524 2.28845C13.8288 2.5932 14 3.00652 14 3.4375V12.375C14 12.806 13.8288 13.2193 13.524 13.524C13.2193 13.8288 12.806 14 12.375 14H2.625C2.19402 14 1.7807 13.8288 1.47595 13.524C1.1712 13.2193 1 12.806 1 12.375V3.4375C1 3.00652 1.1712 2.5932 1.47595 2.28845C1.7807 1.9837 2.19402 1.8125 2.625 1.8125H3.4375V1.40625C3.4375 1.29851 3.4803 1.19517 3.55649 1.11899C3.63267 1.0428 3.73601 1 3.84375 1V1ZM1.8125 4.25V12.375C1.8125 12.5905 1.8981 12.7972 2.05048 12.9495C2.20285 13.1019 2.40951 13.1875 2.625 13.1875H12.375C12.5905 13.1875 12.7972 13.1019 12.9495 12.9495C13.1019 12.7972 13.1875 12.5905 13.1875 12.375V4.25H1.8125Z"
                  fill="#AA139B"
                />
              </svg>
              <span>
                {`
                ${item[2][6] + item[2][7]}
                ${mounths[Number(item[2][4] + item[2][5] - 1)]}
                ${item[2][0] + item[2][1] + item[2][2] + item[2][3]}
              `}
              </span>
            </p>
            <p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.57143 1C10.6486 1 13.1429 3.49429 13.1429 6.57143C13.1429 8.92571 11.4886 11.4914 8.22286 14.296C8.04127 14.452 7.80975 14.5377 7.57036 14.5375C7.33097 14.5372 7.0996 14.4512 6.91829 14.2949L6.70229 14.1074C3.58114 11.376 2 8.87314 2 6.57143C2 3.49429 4.49429 1 7.57143 1ZM7.57143 1.85714C6.32112 1.85714 5.12203 2.35383 4.23793 3.23793C3.35383 4.12203 2.85714 5.32112 2.85714 6.57143C2.85714 8.57257 4.31314 10.8783 7.26514 13.4611L7.47829 13.6457C7.5042 13.668 7.53725 13.6803 7.57143 13.6803C7.60561 13.6803 7.63866 13.668 7.66457 13.6457C10.7594 10.9874 12.2857 8.62 12.2857 6.57143C12.2857 5.95234 12.1638 5.33931 11.9269 4.76735C11.6899 4.19539 11.3427 3.67569 10.9049 3.23793C10.4672 2.80016 9.94747 2.45291 9.37551 2.216C8.80354 1.97908 8.19052 1.85714 7.57143 1.85714ZM7.57143 4.42857C8.13975 4.42857 8.68479 4.65434 9.08666 5.0562C9.48852 5.45806 9.71429 6.00311 9.71429 6.57143C9.71429 7.13975 9.48852 7.68479 9.08666 8.08666C8.68479 8.48852 8.13975 8.71429 7.57143 8.71429C7.00311 8.71429 6.45806 8.48852 6.0562 8.08666C5.65434 7.68479 5.42857 7.13975 5.42857 6.57143C5.42857 6.00311 5.65434 5.45806 6.0562 5.0562C6.45806 4.65434 7.00311 4.42857 7.57143 4.42857ZM7.57143 5.28571C7.23044 5.28571 6.90341 5.42117 6.66229 5.66229C6.42117 5.90341 6.28571 6.23044 6.28571 6.57143C6.28571 6.91242 6.42117 7.23945 6.66229 7.48057C6.90341 7.72168 7.23044 7.85714 7.57143 7.85714C7.91242 7.85714 8.23945 7.72168 8.48057 7.48057C8.72168 7.23945 8.85714 6.91242 8.85714 6.57143C8.85714 6.23044 8.72168 5.90341 8.48057 5.66229C8.23945 5.42117 7.91242 5.28571 7.57143 5.28571Z"
                  fill="#AA139B"
                />
              </svg>

              <span>{item[3]}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
