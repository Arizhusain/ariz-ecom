import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  height: 30px;
  background-color: teal;
  color: white;
  font-size:14px;
  font-weight:500;
`;
const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;
