import React from 'react';
import { Col, Divider, Row } from 'antd';
import styled from 'styled-components';

import Details from './Details';
import ImageUpload from './ImageUpload';
import ImagePreview from './ImagePreview';

const H2 = styled.h2`
  font-weight: bold;
  color: ${props => props.theme.secondaryBlue};
`;

const Container = styled.div`
  margin: 1rem;
`;

const Step1 = ({ post, handlePostChange }) => {
  return (
    <div>
      <Row>
        <Col xs={24} sm={12} md={12}>
          <Container>
            <Divider>
              <H2>Basic Details</H2>
            </Divider>
            <Details post={post} handlePostChange={handlePostChange} />
          </Container>
        </Col>
        <Col xs={24} sm={12} md={12}>
          <Container>
            <Divider>
              <H2>Add Photos</H2>
            </Divider>
            <ImageUpload />
            <ImagePreview />
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Step1;