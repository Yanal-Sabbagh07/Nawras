import { useRoutes } from "react-router-dom";

export function RoutesRenderer({ routes }) {
  const renderedRoutes = useRoutes(routes);
  return renderedRoutes;
}
