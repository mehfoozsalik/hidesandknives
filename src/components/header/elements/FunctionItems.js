import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { formatCurrency } from "../../../common/utils";
import { calculateTotalPrice } from "../../../common/shopUtils";

function FunctionItems({ hideTotal, hideWishlist }) {
  const cartState = useSelector((state) => state.cartReducer);
  return (
    <div className="function-items">
      <Link href={process.env.PUBLIC_URL + "/shop/cart"}>
        <a className="function-items-item">
          <i className="icon_bag_alt" />
          {cartState.data ? (
            <span>{formatCurrency(calculateTotalPrice(cartState.data))}</span>
          ) : (
            <span>{formatCurrency(0)}</span>
          )}
        </a>
      </Link>
    </div>
  );
}

export default React.memo(FunctionItems);
