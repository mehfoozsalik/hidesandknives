import React from "react";

import navigatorData from "../../../data/category-navigator.json";
import Link from "next/link";

function Navigator() {
  return (
    <ul className="navigation">
      <li className="navigation-item">
        <Link href={navigatorData.ONE.href}>
          <a className="navigation-item__title">{navigatorData.ONE.title}</a>
        </Link>
        {/* <ul className="navigation-item__submenu">
          {navigatorData.ONE.subMenu.map((item, index) => (
            <li key={index}>
              <Link href={process.env.PUBLIC_URL + item.href}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul> */}
      </li>
      <li className="navigation-item">
        <Link href={process.env.PUBLIC_URL + navigatorData.TWO.href}>
          <a className="navigation-item__title">{navigatorData.TWO.title}</a>
        </Link>
      </li>
      <li className="navigation-item">
        <Link href={process.env.PUBLIC_URL + navigatorData.THREE.href}>
          <a className="navigation-item__title">{navigatorData.THREE.title}</a>
        </Link>
      </li>
      <li className="navigation-item">
        <Link href={process.env.PUBLIC_URL + navigatorData.FOUR.href}>
          <a className="navigation-item__title">{navigatorData.FOUR.title}</a>
        </Link>
      </li>
      <li className="navigation-item">
        <Link href={process.env.PUBLIC_URL + navigatorData.FIVE.href}>
          <a className="navigation-item__title">{navigatorData.FIVE.title}</a>
        </Link>
      </li>
    </ul>
  );
}

export default React.memo(Navigator);
