import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const StyledWrapper = styled.div`
	height: 50px;
	width: 100%;
  background: ${({ theme }) => theme.color.primary}
`;

const StyledText = styled.span`
  color: ${({ theme }) => theme.color.secondary}
`;

const Home = () => (
  <StyledWrapper>
		<StyledText>You must see mee in red</StyledText>
    <Head>
      <title>Home</title>
    </Head>
  </StyledWrapper>
);

export default Home;
