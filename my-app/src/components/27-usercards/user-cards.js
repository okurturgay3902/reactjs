import React, { useState, useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import UserCard from "./user-card";

const UserCards = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data);
        //console.log(data);
        setLoading(false);
      });
  }, []);
  
  return (
    <Container>
      <Row>
        <div className={users.length==0 ? "d-block" : "d-none"}>
        <Spinner animation="border" />Loading...</div>
        {users.map(user=> <UserCard key={user.id} data={user}/> )}
      </Row>
    </Container>
  );
};
export default UserCards;