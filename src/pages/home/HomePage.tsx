import React from "react";
import { Header, Footer, SideMenu, Carousel, ProductCollection, BusinessPartners } from '../../components'
import { Row, Col, Typography } from "antd";
import styles from './HomePage.module.css'
import { productList1, productList2, productList3} from './mockups'
import sindImage from '../../assets/images/sider_2019_12-09.png'
import sindImage2 from '../../assets/images/sider_2019_02-04.png'
import sindImage3 from '../../assets/images/sider_2019_02-04-2.png'

export class HomePage extends React.Component {
  render(): React.ReactNode {
    return (
      <><Header /><div className={styles["page-content"]}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
        <ProductCollection
          title={<Typography.Title level={3} type={"warning"}>
            爆款推荐
          </Typography.Title>}
          sideImage={sindImage}
          products={productList1} />
        <ProductCollection
          title={<Typography.Title level={3} type={"danger"}>
            新品上市
          </Typography.Title>}
          sideImage={sindImage2}
          products={productList2} />
        <ProductCollection
          title={<Typography.Title level={3} type={"success"}>
            国内游推荐
          </Typography.Title>}
          sideImage={sindImage3}
          products={productList3} />
        <BusinessPartners />
      </div><Footer /></>
    )
  }
}