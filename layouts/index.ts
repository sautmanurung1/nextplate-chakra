import { ComponentType } from "react";

import { LayoutType } from "~types/next";

import dynamic from "next/dynamic";

const layouts: Record<LayoutType, ComponentType> = {
  default: dynamic(() => import("~layouts/default")),
  empty: dynamic(() => import("~layouts/empty")),
};

export default layouts;
