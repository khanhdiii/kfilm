import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaChevronDown } from "react-icons/fa6";
import { Button, Drawer, Menu } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import fetchAPI from "../../utils/fetchAPI";
import SearchMovies from "../SearchMovies/SearchMovies";

import "./header.scss";

function Header() {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <img src="logo-film.png" />
        </a>
      </div>
      <div className="menuIcon">
        <FaBars
          style={{
            color: "white",
            fontSize: 20,
          }}
          onClick={showDrawer}
        />
      </div>
      <span className="headerMenu">
        <AppMenu />
      </span>
      <Drawer
        onClose={onClose}
        open={open}
        placement="left"
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "200px",
            }}
          >
            Menu KFilm
            <Button onClick={onClose}>
              <AiOutlineClose />
            </Button>
          </div>
        }
        closable={false}
      >
        <AppMenu IsInline />
      </Drawer>
      <SearchMovies />
    </div>
  );
}

function AppMenu({ IsInline = false }) {
  const navigate = useNavigate();
  const [isInline, setIsInline] = useState(false);

  const handleClick = async (event) => {
    const api = event.target.getAttribute("data-api");
    if (api) {
      const allMovies = await fetchAPI(`${api}?page=1&limit=20`);
      navigate("/viewall", {
        state: { movies: allMovies.data.items, api: api },
      });
    }
  };

  return (
    <Menu
      theme="light"
      className="menu-list"
      mode={IsInline ? "vertical" : "horizontal"}
    >
      <Menu.Item key="phim-le">
        <a
          className="change-page"
          onClick={handleClick}
          data-api="https://phimapi.com/v1/api/danh-sach/phim-le"
        >
          Phim lẻ
        </a>
      </Menu.Item>
      <Menu.Item key="phim-bo">
        <a
          className="change-page"
          onClick={handleClick}
          data-api="https://phimapi.com/v1/api/danh-sach/phim-bo"
        >
          Phim bộ
        </a>
      </Menu.Item>
      <Menu.SubMenu
        key="the-loai"
        title={
          <span>
            Thể loại <FaChevronDown />
          </span>
        }
      >
        <Menu.Item key="hanh-dong">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/the-loai/hanh-dong"
          >
            Hành Động
          </a>
        </Menu.Item>
        <Menu.Item key="tinh-cam">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/the-loai/tinh-cam"
          >
            Tình Cảm
          </a>
        </Menu.Item>
        <Menu.Item key="hai-huoc">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/the-loai/hai-huoc"
          >
            Hài Hước
          </a>
        </Menu.Item>
        <Menu.Item key="co-trang">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/the-loai/co-trang"
          >
            Cổ Trang
          </a>
        </Menu.Item>
        <Menu.Item key="tam-ly">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/the-loai/tam-ly"
          >
            Tâm Lý
          </a>
        </Menu.Item>
        <Menu.Item key="hinh-su">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/the-loai/hinh-su"
          >
            Hình Sự
          </a>
        </Menu.Item>
        <Menu.Item key="chien-tranh">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/the-loai/chien-tranh"
          >
            Chiến Tranh
          </a>
        </Menu.Item>
        <Menu.Item key="the-thao">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/the-loai/the-thao"
          >
            Thể Thao
          </a>
        </Menu.Item>
        <Menu.Item key="vo-thuat">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/the-loai/vo-thuat"
          >
            Võ Thuật
          </a>
        </Menu.Item>
        <Menu.Item key="vien-tuong">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/the-loai/vien-tuong"
          >
            Viễn Tưởng
          </a>
        </Menu.Item>
        <Menu.Item key="phieu-luu">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/the-loai/phieu-luu"
          >
            Phiêu Lưu
          </a>
        </Menu.Item>
        <Menu.Item key="khoa-hoc">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/the-loai/khoa-hoc"
          >
            Khoa Học
          </a>
        </Menu.Item>
        <Menu.Item key="kinh-di">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/the-loai/kinh-di"
          >
            Kinh Dị
          </a>
        </Menu.Item>
        <Menu.Item key="am-nhac">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/the-loai/am-nhac"
          >
            Âm Nhạc
          </a>
        </Menu.Item>
        <Menu.Item key="than-thoai">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/the-loai/than-thoai"
          >
            Thần Thoại
          </a>
        </Menu.Item>
        <Menu.Item key="tai-lieu">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/the-loai/tai-lieu"
          >
            Tài Liệu
          </a>
        </Menu.Item>
        <Menu.Item key="gia-dinh">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/the-loai/gia-dinh"
          >
            Gia Đình
          </a>
        </Menu.Item>
        <Menu.Item key="chinh-kich">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/the-loai/chinh-kich"
          >
            Chính Kịch
          </a>
        </Menu.Item>
        <Menu.Item key="bi-an">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/the-loai/bi-an"
          >
            Bí Ẩn
          </a>
        </Menu.Item>
        <Menu.Item key="hoc-duong">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/the-loai/hoc-duong"
          >
            Học Đường
          </a>
        </Menu.Item>
        {/* <Menu.Item key="kinh-dien">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/the-loai/kinh-dien"
          >
            Kinh Điển
          </a>
        </Menu.Item>
        <Menu.Item key="phim-18">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/the-loai/phim-18"
          >
            Phim 18+
          </a>
        </Menu.Item>
      </Menu.SubMenu> */}

      <Menu.SubMenu
        key="quoc-gia"
        title={
          <span>
            Quốc gia <FaChevronDown />
          </span>
        }
      >
        <Menu.Item key="trung-quoc">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/trung-quoc"
          >
            Trung Quốc
          </a>
        </Menu.Item>
        <Menu.Item key="han-quoc">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/han-quoc"
          >
            Hàn Quốc
          </a>
        </Menu.Item>
        <Menu.Item key="nhat-ban">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/nhat-ban"
          >
            Nhật Bản
          </a>
        </Menu.Item>
        <Menu.Item key="thai-lan">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/thai-lan"
          >
            Thái Lan
          </a>
        </Menu.Item>
        <Menu.Item key="au-my">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/au-my"
          >
            Âu Mỹ
          </a>
        </Menu.Item>
        <Menu.Item key="dai-loan">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/dai-loan"
          >
            Đài Loan
          </a>
        </Menu.Item>
        <Menu.Item key="hong-kong">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/hong-kong"
          >
            Hồng Kông
          </a>
        </Menu.Item>
        <Menu.Item key="an-do">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/an-do"
          >
            Ấn Độ
          </a>
        </Menu.Item>
        <Menu.Item key="/anh">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia//anh"
          >
            Anh
          </a>
        </Menu.Item>
        <Menu.Item key="phap">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/phap"
          >
            Pháp
          </a>
        </Menu.Item>
        <Menu.Item key="Canada">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/Canada"
          >
            Canada
          </a>
        </Menu.Item>
        <Menu.Item key="quoc-gia-khac">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/quoc-gia-khac"
          >
            Quốc Gia Khác
          </a>
        </Menu.Item>
        <Menu.Item key="duc">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/duc"
          >
            Đức
          </a>
        </Menu.Item>
        <Menu.Item key="tay-ban-nha">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/tay-ban-nha"
          >
            Tây Ban Nha
          </a>
        </Menu.Item>
        <Menu.Item key="tho-nhi-ky">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/tho-nhi-ky"
          >
            Thổ Nhĩ Kỳ
          </a>
        </Menu.Item>
        <Menu.Item key="ha-lan">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/ha-lan"
          >
            Hà Lan
          </a>
        </Menu.Item>
        <Menu.Item key="indonesia">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/indonesia"
          >
            Indonesia
          </a>
        </Menu.Item>
        <Menu.Item key="nga">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/nga"
          >
            Nga
          </a>
        </Menu.Item>
        <Menu.Item key="mexico">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/mexico"
          >
            Mexico
          </a>
        </Menu.Item>
        <Menu.Item key="ba-lan">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/ba-lan"
          >
            Ba Lan
          </a>
        </Menu.Item>
        <Menu.Item key="uc">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/uc"
          >
            Úc
          </a>
        </Menu.Item>
        <Menu.Item key="thuy-dien">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/thuy-dien"
          >
            Thụy Điển
          </a>
        </Menu.Item>
        <Menu.Item key="malaysia">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/malaysia"
          >
            Malaysia
          </a>
        </Menu.Item>
        <Menu.Item key="brazil">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/brazil"
          >
            Brazil
          </a>
        </Menu.Item>
        <Menu.Item key="philippines">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/philippines"
          >
            Philippines
          </a>
        </Menu.Item>
        <Menu.Item key="bo-dao-nha">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/bo-dao-nha"
          >
            Bồ Đào Nha
          </a>
        </Menu.Item>
        <Menu.Item key="y">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/y"
          >
            Ý
          </a>
        </Menu.Item>
        <Menu.Item key="dan-mach">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/dan-mach"
          >
            Đan Mạch
          </a>
        </Menu.Item>
        <Menu.Item key="uae">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/uae"
          >
            UAE
          </a>
        </Menu.Item>
        <Menu.Item key="na-uy">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/na-uy"
          >
            Na Uy
          </a>
        </Menu.Item>
        <Menu.Item key="thuy-si">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/thuy-si"
          >
            Thụy Sĩ
          </a>
        </Menu.Item>
        <Menu.Item key="chau-phi">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/chau-phi"
          >
            Châu Phi
          </a>
        </Menu.Item>
        <Menu.Item key="nam-phi">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/nam-phi"
          >
            Nam Phi
          </a>
        </Menu.Item>
        <Menu.Item key="ukraina">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/ukraina"
          >
            Ukraina
          </a>
        </Menu.Item>
        <Menu.Item key="a-rap-xe-ut">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/a-rap-xe-ut"
          >
            Ả Rập Xê Út
          </a>
        </Menu.Item>
        <Menu.Item key="bi">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/bi"
          >
            Bỉ
          </a>
        </Menu.Item>
        <Menu.Item key="ireland">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/ireland"
          >
            Ireland
          </a>
        </Menu.Item>
        <Menu.Item key="colombia">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/colombia"
          >
            Colombia
          </a>
        </Menu.Item>
        <Menu.Item key="phan-lan">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/phan-lan"
          >
            Phần Lan
          </a>
        </Menu.Item>
        <Menu.Item key="viet-nam">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/viet-nam"
          >
            Việt Nam
          </a>
        </Menu.Item>
        <Menu.Item key="chile">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/chile"
          >
            Chile
          </a>
        </Menu.Item>
        <Menu.Item key="hy-lap">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/hy-lap"
          >
            Hy Lạp
          </a>
        </Menu.Item>
        <Menu.Item key="nigeria">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/nigeria"
          >
            Nigeria
          </a>
        </Menu.Item>
        <Menu.Item key="argentina">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/argentina"
          >
            Argentina
          </a>
        </Menu.Item>
        <Menu.Item key="singapore">
          <a
            className="change-page"
            onClick={handleClick}
            data-api="https://phimapi.com/v1/api/quoc-gia/singapore"
          >
            Singapore
          </a>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="saved-movies">
        <a href="">Phim đã lưu</a>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
