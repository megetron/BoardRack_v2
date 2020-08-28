import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useRouter } from "next/router";

import Message from "./Message";
import MessageBox from "./MessageBox";

const Container = styled.div`
  flex: 1;
  border-right: 1px solid ${({ theme }) => theme.primaryGrey};
`;

const index = () => {
  const router = useRouter();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Container>
      {isAuthenticated &&
        router.query.thread &&
        user.messages
          .filter((messageData) => messageData._id === router.query.thread)[0]
          .messages.map((message, index) => {
            return (
              <Message
                key={index}
                message={message}
                recieved={user._id !== message.from}
              />
            );
          })}
      {isAuthenticated && router.query.thread && (
        <MessageBox
          userId={user._id}
          messageData={
            user.messages.filter(
              (messageData) => messageData._id === router.query.thread
            )[0]
          }
        />
      )}
    </Container>
  );
};

export default index;
