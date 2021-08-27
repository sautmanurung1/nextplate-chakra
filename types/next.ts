import {
  NextApiRequest as BaseNextApiRequest,
  NextApiResponse,
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

export type NextApiRequest<T extends Record<string, unknown> = { [k: string]: unknown }> = BaseNextApiRequest & T;

export type NextApiHandler<
  T extends Record<string, unknown> = { [k: string]: unknown },
  S extends Record<string, unknown> = { [k: string]: unknown },
> = (req: NextApiRequest<T>, res: NextApiResponse<S>) => Promise<void> | void;

export type Middleware<
  T extends Record<string, unknown> = { [k: string]: unknown },
  S extends Record<string, unknown> = { [k: string]: unknown },
> = (
  req: NextApiRequest<T>,
  res: NextApiResponse<S>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  next: (data?: any) => Promise<void> | void,
) => Promise<void> | void;
