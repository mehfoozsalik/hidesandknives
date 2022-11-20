import React, { useState } from "react";
import { Menu } from "antd";

import navigatorData from "../../../data/navigator.json";
import Link from "next/link";
import SocialIcons from "../../other/SocialIcons";

function MobileNavigator() {
  const { SubMenu } = Menu;

  return (
    <div className="menu-mobile">
      <Menu
        className="menu-mobile-navigator"
        // selectedKeys={[current]}
        mode="inline"
      >
        <SubMenu key="homepage" title={navigatorData.HOME.title}>
          {navigatorData.HOME.subMenu.map((item) => (
            <Menu.Item key={item.title}>
              <Link href={process.env.PUBLIC_URL + item.href}>
                <a> {item.title}</a>
              </Link>
            </Menu.Item>
          ))}
        </SubMenu>

        <Menu.Item key="alipay">
          <Link href={process.env.PUBLIC_URL + navigatorData.ABOUT.href}>
            <a target="_blank" rel="noopener noreferrer">
              {navigatorData.ABOUT.title}
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="alipay">
          <Link href={process.env.PUBLIC_URL + navigatorData.ABOUT.href}>
            <a target="_blank" rel="noopener noreferrer">
              {navigatorData.ABOUT.title}
            </a>
          </Link>
        </Menu.Item>
      </Menu>
      <div className="menu-mobile-functions">
        <Link href={process.env.PUBLIC_URL + "/other/login"}>
          <a className="menu-mobile-functions__login">Login / Register</a>
        </Link>
        <SocialIcons />
      </div>
    </div>
  );
}

export default React.memo(MobileNavigator);
