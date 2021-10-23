import React from 'react';

import styles from './profile.module.scss';

export default function ContactsData({
  email = '',
  telegram = '',
  phone = '',
}) {
  return (
    <div className={styles.contacts}>
      <h4>Контактные данные</h4>
      <div className={styles.contact}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
            fill="#AA139B"
          />
        </svg>
        <div className={styles.infomation}>
          <span>E-mail</span>
          <p>{email}</p>
        </div>
      </div>
      <div className={styles.contact}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.4998 21.75H19.3723C4.63482 20.9025 2.54232 8.4675 2.24982 4.6725C2.22625 4.37744 2.26114 4.08062 2.35248 3.79906C2.44382 3.5175 2.58981 3.25673 2.78211 3.03169C2.9744 2.80665 3.20921 2.62177 3.47308 2.48763C3.73695 2.35349 4.02469 2.27274 4.31982 2.25H8.45232C8.75274 2.24971 9.04632 2.33963 9.29504 2.50812C9.54377 2.67661 9.73617 2.9159 9.84732 3.195L10.9873 6C11.0971 6.27266 11.1243 6.57156 11.0657 6.85957C11.007 7.14758 10.865 7.412 10.6573 7.62L9.05982 9.2325C9.30936 10.6506 9.98846 11.9578 11.0052 12.9772C12.022 13.9967 13.3274 14.6792 14.7448 14.9325L16.3723 13.32C16.5834 13.1146 16.8504 12.9759 17.1398 12.9213C17.4292 12.8666 17.7283 12.8983 17.9998 13.0125L20.8273 14.145C21.1022 14.2597 21.3367 14.4536 21.501 14.702C21.6653 14.9504 21.7519 15.2422 21.7498 15.54V19.5C21.7498 20.0967 21.5128 20.669 21.0908 21.091C20.6689 21.5129 20.0966 21.75 19.4998 21.75ZM4.49982 3.75C4.30091 3.75 4.11014 3.82902 3.96949 3.96967C3.82884 4.11032 3.74982 4.30109 3.74982 4.5V4.56C4.09482 9 6.30732 19.5 19.4548 20.25C19.5534 20.2561 19.6521 20.2427 19.7454 20.2105C19.8388 20.1783 19.9248 20.1281 19.9987 20.0626C20.0726 19.9971 20.1328 19.9176 20.1759 19.8288C20.219 19.74 20.2441 19.6436 20.2498 19.545V15.54L17.4223 14.4075L15.2698 16.545L14.9098 16.5C8.38482 15.6825 7.49982 9.1575 7.49982 9.09L7.45482 8.73L9.58482 6.5775L8.45982 3.75H4.49982Z"
            fill="#AA139B"
          />
        </svg>

        <div className={styles.infomation}>
          <span>Телефон</span>
          <p>{phone}</p>
        </div>
      </div>
      <div className={styles.contact}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3571 1.5C15.9729 1.5 19.7143 5.24143 19.7143 9.85714C19.7143 13.3886 17.2329 17.2371 12.3343 21.444C12.0619 21.678 11.7146 21.8065 11.3555 21.8062C10.9965 21.8059 10.6494 21.6768 10.3774 21.4423L10.0534 21.1611C5.37171 17.064 3 13.3097 3 9.85714C3 5.24143 6.74143 1.5 11.3571 1.5ZM11.3571 2.78571C9.48168 2.78571 7.68304 3.53074 6.35689 4.85689C5.03074 6.18304 4.28571 7.98168 4.28571 9.85714C4.28571 12.8589 6.46971 16.3174 10.8977 20.1917L11.2174 20.4686C11.2563 20.502 11.3059 20.5204 11.3571 20.5204C11.4084 20.5204 11.458 20.502 11.4969 20.4686C16.1391 16.4811 18.4286 12.93 18.4286 9.85714C18.4286 8.92851 18.2457 8.00897 17.8903 7.15102C17.5349 6.29308 17.014 5.51353 16.3574 4.85689C15.7008 4.20024 14.9212 3.67937 14.0633 3.32399C13.2053 2.96862 12.2858 2.78571 11.3571 2.78571ZM11.3571 6.64286C12.2096 6.64286 13.0272 6.9815 13.63 7.5843C14.2328 8.1871 14.5714 9.00466 14.5714 9.85714C14.5714 10.7096 14.2328 11.5272 13.63 12.13C13.0272 12.7328 12.2096 13.0714 11.3571 13.0714C10.5047 13.0714 9.68709 12.7328 9.0843 12.13C8.4815 11.5272 8.14286 10.7096 8.14286 9.85714C8.14286 9.00466 8.4815 8.1871 9.0843 7.5843C9.68709 6.9815 10.5047 6.64286 11.3571 6.64286ZM11.3571 7.92857C10.8457 7.92857 10.3551 8.13176 9.99344 8.49344C9.63176 8.85511 9.42857 9.34565 9.42857 9.85714C9.42857 10.3686 9.63176 10.8592 9.99344 11.2208C10.3551 11.5825 10.8457 11.7857 11.3571 11.7857C11.8686 11.7857 12.3592 11.5825 12.7208 11.2208C13.0825 10.8592 13.2857 10.3686 13.2857 9.85714C13.2857 9.34565 13.0825 8.85511 12.7208 8.49344C12.3592 8.13176 11.8686 7.92857 11.3571 7.92857Z"
            fill="#AA139B"
          />
        </svg>
        <div className={styles.infomation}>
          <span>Адрес</span>
          <p>ул. Юсупова 23</p>
        </div>
      </div>
      <div className={styles.contact}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5527 2.997C19.3119 3.01452 19.0756 3.071 18.853 3.16425H18.85C18.6362 3.249 17.62 3.6765 16.075 4.3245L10.5385 6.65625C6.56571 8.32875 2.66046 9.97575 2.66046 9.97575L2.70696 9.95775C2.70696 9.95775 2.43771 10.0463 2.15646 10.239C1.98271 10.3496 1.83319 10.4942 1.71696 10.6643C1.57896 10.8668 1.46796 11.1765 1.50921 11.4968C1.57671 12.0383 1.92771 12.363 2.17971 12.5423C2.43471 12.7238 2.67771 12.8085 2.67771 12.8085H2.68371L6.34596 14.0423C6.51021 14.5695 7.46196 17.6985 7.69071 18.4193C7.82571 18.8498 7.95696 19.119 8.12121 19.3245C8.20071 19.4295 8.29371 19.5173 8.40546 19.5878C8.46356 19.6215 8.5255 19.6482 8.58996 19.6673L8.55246 19.6583C8.56371 19.6613 8.57271 19.6703 8.58096 19.6733C8.61096 19.6815 8.63121 19.6845 8.66946 19.6905C9.24921 19.866 9.71496 19.506 9.71496 19.506L9.74121 19.485L11.9035 17.5163L15.5275 20.2965L15.61 20.3318C16.3652 20.6632 17.1302 20.4788 17.5345 20.1533C17.9417 19.8255 18.1 19.4063 18.1 19.4063L18.1262 19.3388L20.9267 4.992C21.0062 4.638 21.0265 4.3065 20.9387 3.98475C20.8482 3.65912 20.6393 3.37906 20.353 3.1995C20.1125 3.05334 19.8337 2.98279 19.5527 2.997ZM19.477 4.5345C19.474 4.58175 19.483 4.5765 19.462 4.66725V4.6755L16.6877 18.873C16.6757 18.8933 16.6555 18.9375 16.6 18.9818C16.5415 19.0283 16.495 19.0575 16.2512 18.9608L11.8187 15.5625L9.14121 18.003L9.70371 14.4105L16.9457 7.6605C17.2442 7.383 17.1445 7.3245 17.1445 7.3245C17.1655 6.984 16.6937 7.22475 16.6937 7.22475L7.56171 12.882L7.55871 12.867L3.18171 11.3933V11.3903L3.17046 11.388C3.17813 11.3855 3.18565 11.3824 3.19296 11.379L3.21696 11.367L3.24021 11.3588C3.24021 11.3588 7.14846 9.71175 11.1212 8.03925C13.1102 7.2015 15.1142 6.35775 16.6555 5.70675C18.1967 5.0595 19.336 4.58475 19.4005 4.55925C19.462 4.53525 19.4327 4.53525 19.477 4.53525V4.5345Z"
            fill="#AA139B"
          />
        </svg>

        <div className={styles.infomation}>
          <span>Telegram</span>
          <p>{telegram}</p>
        </div>
      </div>
    </div>
  );
}
