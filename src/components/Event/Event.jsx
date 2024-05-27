import { Button, Grid } from "@mui/material";
import Styled from "./event.styled";
import PlaceIcon from "@mui/icons-material/Place";
import DateRangeIcon from "@mui/icons-material/DateRange";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";

const Event = (props) => {
  // eslint-disable-next-line react/prop-types
  const { image, name, date, position, position2, attend, address, org } =
    // eslint-disable-next-line react/prop-types
    props.props;
  return (
    <Styled.EventWrapper>
      <Grid container>
        <Grid item xs={3}>
          <img src={image} />
        </Grid>
        <Grid item xs={7}>
          <div>{name}</div>
          <div className="flex-item">
            <div className="name-icon">
              <DateRangeIcon className="icon" /> {date}
            </div>
            <div className="name-icon">
              <PlaceIcon className="icon" /> {position}
            </div>
            <div className="name-icon">
              <PlaceIcon className="icon" /> {position2}
            </div>
          </div>
          <div>
            <div className="name-icon">
              <GroupOutlinedIcon className="icon" /> {org}
            </div>
            <div className="name-icon">
              <GroupOutlinedIcon className="icon" /> {attend}
            </div>
          </div>
          <div className="name-icon">
            <PhotoSizeSelectActualOutlinedIcon className="icon" /> {address}
          </div>
        </Grid>
        <Grid
          item
          xs={2}
          display={"flex"}
          justifyItems={"start"}
          justifyContent={"flex-end"}
        >
          <Button className="button">Edit</Button>
        </Grid>
      </Grid>
    </Styled.EventWrapper>
  );
};

export default Event;
