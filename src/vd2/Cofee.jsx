import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";

const Cofee = (props) => {
  const { avatarUrl, title, subtitle, description, imageUrl } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarUrl} />}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      {/* The giving of height below is necessary without which it wont display */}
      <CardMedia
        style={{
          height: "200px",
          width: "50%",
          // maxWidth: "auto",
          // maxHeight: "100%",
          // display: "block",
          marginLeft: "25%",
          // objectFit: "cover",
        }}
        image={imageUrl}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {description.length > 70
            ? description.substr(0, 70) + "..."
            : description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small">Offer</Button>
      </CardActions>
    </Card>
  );
};

export default Cofee;
