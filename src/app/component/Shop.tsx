import React from "react";
import Link from "next/link";

const Shop = () => {
  return (
    <div>
      <h1 className="size-8 text-myheading align-middle text-3xl">Shop List</h1>
      <ul>
        <li>
          <Link href="/home">
            <a className="hover:text-red-500 text-heading2 text-sm sm:text-base">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/pages">
            <a className="hover:text-red-500 text-heading2 text-sm sm:text-base">Pages</a>
          </Link>
        </li>
        <li>
          <Link href="/shoplist">
            <a className="size-4 weight-500 hover text-bcolour">Shop List</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Shop;
