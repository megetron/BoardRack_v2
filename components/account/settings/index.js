import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "antd";

import { Container, ButtonsContainer, ButtonText } from "./style";
import MyAccount from "./MyAccount";
import Location from "./Location";
import ManageAccount from "./ManageAccount";

const index = () => {
  const initialState = {
    username: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
    defaultLocation: "",
  };

  const user = useSelector((state) => state.auth.user);
  const [userData, setUserData] = useState(initialState);

  console.log(userData);
  console.log(initialState);

  return (
    <Container>
      <ButtonsContainer
        isNotSaved={JSON.stringify(userData) !== JSON.stringify(initialState)}
      >
        <ButtonText style={{ flex: 1 }}>
          {JSON.stringify(userData) !== JSON.stringify(initialState)
            ? "*Changes are not currently saved"
            : "*Account Up to Date"}
        </ButtonText>
        <Button type="primary">Save Changes</Button>
      </ButtonsContainer>
      <MyAccount user={user} userData={userData} setUserData={setUserData} />
      <Location user={user} userData={userData} setUserData={setUserData} />
      <ManageAccount user={user} />
    </Container>
  );
};

export default index;