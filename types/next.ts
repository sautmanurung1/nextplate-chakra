import {
  NextComponentType as BaseNextComponentType,
  NextPage as BaseNextPage,
  NextPageContext as BaseNextPageContext,
} from "next";

export type NextComponentType = NextPageProps & BaseNextComponentType<BaseNextPageContext, unknown, {}>;

export type NextPage<P = {}, IP = P> = NextPageProps & BaseNextPage<P, IP>;

export type NextPageProps = {
  layout?: LayoutType;
};

export type LayoutType = "default" | "empty";
