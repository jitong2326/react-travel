import React from "react";
import { sideMenuList } from "./mockup";
import styles from "./SideMenu.module.css";
import { Menu } from "antd";
import { GifOutlined } from "@ant-design/icons";

export const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles["side-menu"]}>
      {sideMenuList.map((e, i) => {
        return (
          <Menu.SubMenu
            key={`side-menu${i}`}
            title={
              <span>
                <GifOutlined />
                {e.title}
              </span>
            }
          >
            {e.subMenu.map((se, si) => {
              return (
                <Menu.SubMenu
                  key={`side-menu${i}-item${si}`}
                  title={
                    <span>
                      <GifOutlined />
                      {se.title}
                    </span>
                  }
                >
                  {se.subMenu.map((sse, ssi) => {
                    return (
                      <Menu.Item key={`side-menu${i}-item${si}-items${ssi}`}>
                        <span>
                          <GifOutlined />
                          {sse}
                        </span>
                      </Menu.Item>
                    );
                  })}
                </Menu.SubMenu>
              );
            })}
          </Menu.SubMenu>
        );
      })}
    </Menu>
  );
};
