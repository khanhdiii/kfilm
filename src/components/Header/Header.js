import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <div className="bars">
        <i className="fa-light fa-bars-staggered"></i>
      </div>
      <div className="logo">
        <a href="./index.html">KFilm</a>
      </div>
      <div className="menu-header">
        <div className="close">
          <i class="fa-thin fa-square-xmark"></i>
        </div>
        <div className="menu-header__item">
          <a href="./index.html">Trang chủ</a>
        </div>
        <div className="menu-header__item">
          <a
            className="change-page"
            data-api="https://phimapi.com/v1/api/danh-sach/phim-le"
          >
            Phim lẻ
          </a>
        </div>
        <div className="menu-header__item">
          <a
            className="change-page"
            data-api="https://phimapi.com/v1/api/danh-sach/phim-bo"
          >
            Phim bộ
          </a>
        </div>
        <div className="menu-header__item">
          <a href="./listMoviesToWatchLater.html">Phim đã lưu</a>
        </div>
        <div className="menu-header__item">
          <a>
            Thể loại
            <i className="fa-regular fa-chevron-down">
              <FaChevronDown fontSize={20} />
            </i>
          </a>
          <ul className="item__list">
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/the-loai/hanh-dong"
              >
                Hành Động
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/the-loai/tinh-cam"
              >
                Tình Cảm
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/the-loai/hai-huoc"
              >
                Hài Hước
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/the-loai/co-trang"
              >
                Cổ Trang
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/the-loai/tam-ly"
              >
                Tâm Lý
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/the-loai/hinh-su"
              >
                Hình Sự
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/the-loai/chien-tranh"
              >
                Chiến Tranh
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/the-loai/the-thao"
              >
                Thể Thao
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/the-loai/vo-thuat"
              >
                Võ Thuật
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/the-loai/vien-tuong"
              >
                Viễn Tưởng
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/the-loai/phieu-luu"
              >
                Phiêu Lưu
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/the-loai/khoa-hoc"
              >
                Khoa Học
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/the-loai/kinh-di"
              >
                Kinh Dị
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/the-loai/am-nhac"
              >
                Âm Nhạc
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/the-loai/than-thoai"
              >
                Thần Thoại
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/the-loai/tai-lieu"
              >
                Tài Liệu
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/the-loai/gia-dinh"
              >
                Gia Đình
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/the-loai/chinh-kich"
              >
                Chính Kịch
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/the-loai/bi-an"
              >
                Bí Ẩn
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/the-loai/hoc-duong"
              >
                Học Đường
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/the-loai/kinh-dien"
              >
                Kinh Điển
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/the-loai/phim-18"
              >
                Phim 18+
              </a>
            </li>
          </ul>
        </div>
        <div className="menu-header__item">
          <a>
            Quốc gia
            <i className="fa-regular fa-chevron-down">
              <FaChevronDown fontSize={20} />
            </i>
          </a>
          <ul className="item__list">
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/trung-quoc"
              >
                Trung Quốc
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/han-quoc"
              >
                Hàn Quốc
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/nhat-ban"
              >
                Nhật Bản
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/thai-lan"
              >
                Thái Lan
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/au-my"
              >
                Âu Mỹ
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/dai-loan"
              >
                Đài Loan
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/hong-kong"
              >
                Hồng Kông
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/an-do"
              >
                Ấn Độ
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/anh"
              >
                Anh
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/phap"
              >
                Pháp
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/canada"
              >
                Canada
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/quoc-gia-khac"
              >
                Quốc Gia Khác
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/duc"
              >
                Đức
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/tay-ban-nha"
              >
                Tây Ban Nha
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/tho-nhi-ky"
              >
                Thổ Nhĩ Kỳ
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/ha-lan"
              >
                Hà Lan
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/indonesia"
              >
                Indonesia
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/nga"
              >
                Nga
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/mexico"
              >
                Mexico
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/ba-lan"
              >
                Ba Lan
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/uc"
              >
                Úc
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/thuy-dien"
              >
                Thụy Điển
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/malaysia"
              >
                Malaysia
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/brazil"
              >
                Brazil
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/philippines"
              >
                Philippines
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/bo-dao-nha"
              >
                Bồ Đào Nha
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/y"
              >
                Ý
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/dan-mach"
              >
                Đan Mạch
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/uae"
              >
                UAE
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/na-uy"
              >
                Na Uy
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/thuy-si"
              >
                Thụy Sĩ
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/chau-phi"
              >
                Châu Phi
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/nam-phi"
              >
                Nam Phi
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/ukraina"
              >
                Ukraina
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/a-rap-xe-ut"
              >
                Ả Rập Xê Út
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/bi"
              >
                Bỉ
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/ireland"
              >
                Ireland
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/colombia"
              >
                Colombia
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/phan-lan"
              >
                Phần Lan
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/viet-nam"
              >
                Việt Nam
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/chile"
              >
                Chile
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/hy-lap"
              >
                Hy Lạp
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/nigeria"
              >
                Nigeria
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/argentina"
              >
                Argentina
              </a>
            </li>
            <li>
              <a
                className="change-page"
                data-api="https://phimapi.com/v1/api/quoc-gia/singapore"
              >
                Singapore
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="search">
        <input type="text" placeholder="Tìm kiếm..." />
        <button>
          <i className="fa-light fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
}

export default Header;
