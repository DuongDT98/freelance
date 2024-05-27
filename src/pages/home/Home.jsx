import { Button, Container } from "@mui/material";
import Styled from "./home.styled";
import Event from "../../components/Event/Event";
import { useNavigate } from "react-router-dom";

const listEvent = [
  {
    image: "",
    name: "Chương trình hội thảo",
    date: "Apr 2 to 3 , 2024",
    position: "In-Person Event",
    position2: "Đà Nẵng",
    org: "2 Organizens",
    attend: "0 Attendees",
    address: "18 Tô Hiệu, Liên Chiểu, Đà Nẵng",
  },
  {
    image: "",
    name: "Chương trình hội thảo",
    date: "Apr 2 to 3 , 2024",
    position: "In-Person Event",
    position2: "Đà Nẵng",
    org: "2 Organizens",
    attend: "0 Attendees",
    address: "18 Tô Hiệu, Liên Chiểu, Đà Nẵng",
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <Styled.HomeWrapper>
      <Button variant="contained" onClick={() => navigate("/add-event")}>
        Thêm sự kiện
      </Button>
      <br />
      <br />
      <Container>
        {listEvent?.map((event) => (
          // eslint-disable-next-line react/jsx-key
          <Event key={event.name} props={event} />
        ))}
      </Container>
    </Styled.HomeWrapper>
  );
};
export default Home;
