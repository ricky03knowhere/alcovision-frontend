import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
// import logo from 'assets/img/';

const Logo = ({ at, width, className, textClass, ...rest }) => {
  return (
    <Link
      to="/"
      className={classNames(
        'text-decoration-none',
        { 'navbar-brand text-left': at === 'navbar-vertical' },
        { 'navbar-brand text-left': at === 'navbar-top' }
      )}
      {...rest}
    >
      <div
        className={classNames(
          'd-flex',
          {
            'align-items-center py-3': at === 'navbar-vertical',
            'align-items-center': at === 'navbar-top',
            'flex-center fw-bolder fs-5 mb-4': at === 'auth'
          },
          className
        )}
      >
        {/* <img className="me-2" src={logo} alt="Logo" height="40" /> */}
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="me-2"
        >
          <path
            d="M3.23047 15.6021V19.6021M3.23047 17.6021H6.10979C6.51355 17.6021 6.71543 17.6021 6.88849 17.5357C7.04136 17.477 7.17748 17.3816 7.28489 17.258C7.40648 17.1181 7.47547 16.9283 7.61345 16.5489L9.23047 12.1021M16.2305 14.1021L17.9671 14.9704C18.4144 15.1941 18.638 15.3059 18.8584 15.3124C19.0525 15.3182 19.2441 15.2673 19.4098 15.166C19.5979 15.051 19.7366 14.843 20.014 14.4269L20.2251 14.1102C20.5726 13.589 20.7463 13.3284 20.7669 13.0693C20.785 12.8418 20.7248 12.615 20.5962 12.4265C20.4497 12.2117 20.1696 12.0717 19.6094 11.7916L19.2305 11.6021M4.09035 7.62803L5.96145 4.42043C6.23184 3.9569 6.36703 3.72514 6.56088 3.59657C6.73149 3.48341 6.93273 3.42534 7.13741 3.43022C7.36995 3.43575 7.60783 3.55986 8.0836 3.80809L15.9789 7.92736C16.7263 8.31731 17.1 8.51229 17.2454 8.78849C17.3725 9.02974 17.3955 9.31242 17.3092 9.57107C17.2104 9.86717 16.8732 10.1201 16.1988 10.6259L13.0216 13.0088C12.7344 13.2242 12.5908 13.3319 12.4312 13.3832C12.2901 13.4286 12.1407 13.4421 11.9938 13.4227C11.8276 13.4007 11.6671 13.3204 11.346 13.1599L4.75685 9.8653C4.22599 9.59987 3.96056 9.46716 3.81581 9.26293C3.6886 9.08344 3.62413 8.86702 3.63238 8.64718C3.64176 8.39703 3.79129 8.1407 4.09035 7.62803Z"
            stroke="#2C7BE5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          style={{
            fontSize: '16px'
          }}
          className={classNames('font-sans-serif', textClass)}
        >
          AlcoVision
          {/* Smart CCTV */}
        </span>
      </div>
    </Link>
  );
};

Logo.propTypes = {
  at: PropTypes.oneOf(['navbar-vertical', 'navbar-top', 'auth']),
  width: PropTypes.number,
  className: PropTypes.string,
  textClass: PropTypes.string
};

Logo.defaultProps = { at: 'auth', width: 76 };

export default Logo;
