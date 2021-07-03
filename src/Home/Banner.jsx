import React from "react";
import PropTypes from "prop-types";
import QueueAnim from "rc-queue-anim";
import { Button } from "antd";
import BannerImage from "./BannerImage";
import { Tag } from "antd";

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };
  static defaultProps = {
    className: "home-banner",
  };
  render() {
    const { className } = this.props;
    return (
      <div className={`home-layout-wrapper ${className}`}>
        <div className="home-layout">
          <QueueAnim
            className={`${className}-content-wrapper`}
            delay={300}
            ease="easeOutQuart"
          >
            <h1 key="h2">CHO VAY QUẢNG NGÃI</h1>
            <p key="p">THỦ TỤC NHANH CHÓNG, NHẬN TIỀN NGAY</p>
            <p key="p">LIÊN HỆ NGAY</p>
            <Tag
              style={{
                fontSize: "15px",
              }}
              className="text"
              color="#55acee"
            >
              036 401 9454
            </Tag>
            <Tag
              style={{
                fontSize: "15px",
              }}
              className="text"
              color="#55acee"
            >
              093 496 3545
            </Tag>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/anh.nguyenthiha.5"
            >
              <Tag
                style={{
                  fontSize: "15px",
                }}
                color="#3b5999"
              >
                Facebook
              </Tag>
            </a>
          </QueueAnim>
          <div className={`${className}-image-wrapper`}>
            <BannerImage />
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
