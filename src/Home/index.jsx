/* eslint-disable react/self-closing-comp */
import React from "react";
import DocumentTitle from "react-document-title";
import Header from "./Header";
import Banner from "./Banner";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Footer from "./Footer";
import "./static/style";

class Home extends React.PureComponent {
  render() {
    return (
      <div className="home-page">
        <Banner key="banner" />
        <Page1 key="page1" />
        <Page2 key="page2" />
        <Footer key="footer" />
        <DocumentTitle title="Cho Vay Quang Ngai" />
      </div>
    );
  }
}
export default Home;
