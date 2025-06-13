import { routes } from './routes';
import type { RouteConfigPaths } from './types';

export async function renderRoute(route: RouteConfigPaths) {
  const pageLoader = routes[route];

  if (!pageLoader) {
    const { ErrorPage } = await import('../../routes/error');

    return ErrorPage;
  }

  return await pageLoader();
}
