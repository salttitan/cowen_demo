import { Box, Breadcrumbs, Link, Typography, LinkProps } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

interface LinkRouterProps extends LinkProps {
  to: string;
}

const LinkRouter = (props: LinkRouterProps) => {
  return <Link {...props} component={RouterLink as any} />;
};

const BreadcrumbItem = (props: any) => {
  const last = props.index === props.pathnames.length - 1;
  const to = `/${props.pathnames.slice(0, props.index + 1).join("/")}`;

  return last ? (
    <Typography color="textPrimary" key={to}>
      {props.value}
    </Typography>
  ) : (
    <LinkRouter underline="hover" color={"textPrimary"} to={to} key={to}>
      {props.value}
    </LinkRouter>
  );
};

const BreadcrumbBar = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <Box>
      <Breadcrumbs
        aria-label="breadcrumbs"
        sx={{ bgcolor: "background.default",paddingLeft:5 }}
      
      >
        {pathnames.map((v: any, i: number) => (
          <BreadcrumbItem index={i} pathnames={pathnames} value={v} key={i} />
        ))}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbBar;
