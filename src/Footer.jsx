// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer__content" style={{ backgroundColor: 'black' }}>
      <div className="up__top">
        <button id="scrollToTopBtn">
          <i className='bx bxs-chevrons-up bx-tada'></i>
          <p>^</p>
        </button>
      </div>

      {/* Đăng kí nhận quà */}
      <div className="sign__gift">
        <span>
          <h4>Kết nối với Mercedes-Benz</h4>
          <p className="opacity__text">Hãy giữ kết nối và nhận ngay quà tặng chính hãng để nâng tầm trải nghiệm dịch vụ.</p>
        </span>
        <a href="./sign.html">Đăng kí và nhận quà</a>
      </div>

      {/* Các dịch vụ */}
      <div className="all__service">
        <ul className="margin__left__32 ul__service">
          <li className="li__service">
            <h5 className="h5__service padding__bottom__24">Mua xe</h5>
            <ul className="margin__left__32 ">
              <li>Xe đã qua sử dụng</li>
              <li>Xe mới</li>
              <li>Chọn cấu hình xe</li>
              <li>Bảng giá & brochure</li>
            </ul>
          </li>
          <li className="li__service">
            <h5 className="h5__service padding__bottom__24">Tư vấn mua xe</h5>
            <ul className="margin__left__32">
              <li>Yêu cầu tư vấn</li>
              <li>Đăng ký lái thử</li>
              <li>Tìm nhà phân phối gần nhất</li>
              <li></li>
            </ul>
          </li>
          <li className="li__service">
            <h5 className="h5__service padding__bottom__24">Dịch vụ</h5>
            <ul className="margin__left__32">
              <li>Đặt lịch hẹn dịch vụ</li>
              <li>Ưu đãi đặc biệt</li>
              <li>Phụ kiện chính hãng</li>
              <li>Hướng dẫn sử dụng</li>
            </ul>
          </li>
          <li className="li__service">
            <h5 className="h5__service padding__bottom__24">Các dòng xe</h5>
            <ul className="margin__left__32">
              <li>SUV</li>
              <li>Sedan</li>
              <li>Mersedes-AMG</li>
              <li>Mersedes-Maybach</li>
            </ul>
          </li>
          {/* Additional list items for other services */}
          <li className="li__service">
            <h5 className="h5__service padding__bottom__24">Dịch vụ khác 1</h5>
            <ul className="margin__left__32">
              <li>Dịch vụ 1</li>
              <li>Dịch vụ 2</li>
              {/* Add more items as needed */}
            </ul>
          </li>
          <li className="li__service">
            <h5 className="h5__service padding__bottom__24">Dịch vụ khác 2</h5>
            <ul className="margin__left__32">
              <li>Dịch vụ 3</li>
              <li>Dịch vụ 4</li>
              {/* Add more items as needed */}
            </ul>
          </li>
        </ul>
      </div>
      {/* END */}

      <div className="footer__end">
        <ul className="ul__end__footer margin__left__32">
          <li className="li__end__footer">Bản quyền nội dung</li>
          <li className="li__end__footer">Cài đặt</li>
          <li className="li__end__footer">Quyền riêng tư và bảo vệ dữ liệu</li>
          <li className="li__end__footer">Thông tin pháp lý</li>
        </ul>

        <div className="div__end__footer">
          <i className='bx bxl-facebook-circle bx-burst'></i>
          <i className='bx bxl-youtube bx-burst'></i>
          <i className='bx bxl-instagram-alt bx-burst bx-rotate-270'></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
