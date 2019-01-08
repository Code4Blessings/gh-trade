import React, { Component } from "react";
import Link from "next/link";
import "../../public/styles/Main.scss";
import LeftMenu from "./_menu-left.js";
import RightMenu from "./_menu-right.js";

export default () => {
  return [<LeftMenu />, <RightMenu />];
};
