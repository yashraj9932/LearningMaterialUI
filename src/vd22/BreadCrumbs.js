import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { useHistory, useLocation } from "react-router-dom";

export default function SimpleBreadcrumbs() {
  const history = useHistory();
  const { pathname } = useLocation();

  const pathnames = pathname.split("/").filter((x) => x);
  return (
    <Breadcrumbs>
      <Link onClick={() => history.push("/")}>Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Typography>{name}</Typography>
        ) : (
          <Link key={index} onClick={() => history.push(routeTo)}>
            {name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
