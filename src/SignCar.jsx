// SignCar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './SignCar.css';
function SignCar() {
  return (
    <div className="sign__car">
      <div className="div__sign__one">
        <Link to="/appointment-form" className="blank_sign">
          <span>
            <i className='bx bx-chevron-down-square bx-burst'></i>
            <span className="text__sign">Đăng kí lái thử</span>
            <br />
            <span className="text__sign opacity__text">Đặt lịch hẹn lái thử nhà phân phối</span>
          </span>
        </Link>

        <Link to="" className="blank_sign">
          <span>
            <i className='bx bx-search-alt bx-burst'></i>
            <span className="text__sign">Tìm xe có sẵn</span>
            <br />
            <span className="text__sign opacity__text">Tìm xe có sẵn, báo giá</span>
          </span>
        </Link>
      </div>

      <div className="div__sign__two">
      <Link to="/" className="blank_sign">
          <span>
            <i className='bx bx-conversation bx-burst'></i>
            <span className="text__sign">Đặt lịch hẹn dịch vụ</span>
            <br />
            <span className="text__sign opacity__text">Đặt lịch hẹn tại đại lý</span>
          </span>
        </Link>
        <Link to="/chat" className="blank_sign">
          <span>
            <i className='bx bx-envelope bx-burst'></i>
            <span className="text__sign">Liên hệ</span>
            <br />
            <span className="text__sign opacity__text">Yêu cầu tư vấn</span>
          </span>
          </Link>      </div>
    </div>
  );
}

export default SignCar;
