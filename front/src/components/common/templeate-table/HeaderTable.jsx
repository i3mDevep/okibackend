import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

export const HeaderTable = ({ children, url, title }) => (
  <div style={{ display: "inline-flex", alignItems: "center" }}>
    <Avatar alt="Remy Sharp" src={url} />
    <Typography variant="h6" component="h6" style={{ marginLeft: "10px" }}>
      {title}
    </Typography>
    {children}
  </div>
);
