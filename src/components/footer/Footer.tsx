import React from "react";
import { Layout, Typography } from "antd";

export const Footer: React.FC = () => {
  return (
    <Layout.Footer>
      <Typography.Title level={5} style={{ textAlign: "center" }}>
        版权所有 @React Travel
      </Typography.Title>
    </Layout.Footer>
  );
};
