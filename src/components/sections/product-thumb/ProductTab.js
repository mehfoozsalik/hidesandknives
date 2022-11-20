import React, { useEffect, useState } from "react";
import { Tabs, Row, Col, Empty, Skeleton } from "antd";
import classNames from "classnames";

import SectionTitle from "../../other/SectionTitle";
import Product from "../../product/Product";
import FetchDataHandle from "../../other/FetchDataHandle";

function ProductTab({
  style,
  data,
  className,
  productClassName,
  headerCategories,
  headerTitle,
  headerClass,
  showTitleDecoration = false,
  productCol,
}) {
  const { TabPane } = Tabs;

  return (
    <div className={`product-tab ${classNames(className)}`} style={style}>
      <div className={`product-tab-header ${classNames(headerClass)}`}>
        <SectionTitle
          title={headerTitle}
          className="-center"
          hideDecoration={showTitleDecoration}
        />
        <FetchDataHandle
          data={data}
          renderData={(data) => (
            <Row
              gutter={[
                { xs: 0, md: 15 },
                { xs: 0, md: 15 },
              ]}
            >
              {data.map((item, index) => (
                <Col key={index} {...productCol}>
                  <Product className={productClassName} data={item} />
                </Col>
              ))}
            </Row>
          )}
        />
      </div>
    </div>
  );
}

export default React.memo(ProductTab);
