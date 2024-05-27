import { Container, Grid, Input } from "@mui/material";
import Styled from "./add-event.styled";

const AddEvent = () => {
  return (
    <Styled.AddEventWrapper>
      <Container>
        <div className="event-category">Loại sự kiện</div>
        <Grid
          container
          display={"flex"}
          justifyContent={"space-around"}
          marginBottom={"30px"}
        >
          <Grid item xs={5} padding={"20px"} className="category-item">
            <div>Mặt đối mặt</div>
            <div>
              Tiến hành một sự kiện tại một địa điểm thực tế để kết nối trực
              tiếp
            </div>
          </Grid>
          <Grid item xs={5} className="category-item" padding={"20px"}>
            <div>Trực Tuyến</div>
            <div>
              Tiến hành một sự kiện kỹ thuật số thu hút những người tham gia từ
              xa
            </div>
          </Grid>
        </Grid>
        <div>
          <div className="time">Tên sự kiện</div>
          <Input className="input" />
        </div>
        <br />
        <Grid
          container
          display={"flex"}
          justifyContent={"space-between"}
          marginBottom={"30px"}
        >
          <Grid item xs={2}>
            <div className="time">Ngày bắt đầu</div>
            <Input className="input" />
          </Grid>
          <Grid item xs={2}>
            <div className="time">Thời gian bắt đầu</div>
            <Input className="input" />
          </Grid>
          <Grid item xs={2}>
            <div className="time">Ngày Cuối</div>
            <Input className="input" />
          </Grid>
          <Grid item xs={2}>
            <div className="time">Thời gian kết thúc</div>
            <Input className="input" />
          </Grid>
        </Grid>
        <div>
          <div className="time">Vị Trí</div>
          <Input className="input" />
        </div>
        <br />
        <Grid container>
          <Grid item xs={5} className="choose-file">
            <input type="file" />
          </Grid>
          <Grid item xs={7} className="map">
            map
          </Grid>
        </Grid>
      </Container>
    </Styled.AddEventWrapper>
  );
};

export default AddEvent;
