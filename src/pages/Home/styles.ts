import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  
  p {
    text-align: justify;
    line-height: 2;
    max-width: 800px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  width: 100%;
  min-height: 200px;
  background-color: #0E035D;

  h3 {
    text-align: center;
    color: #F2B72C;
    font-size: 36px;

    span {
      color: #fff;
      font-size: 18px;
    }
  }
`;

export const Content = styled.div`  
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 32px 0;
`;

export const ImageContainer = styled.div`
  max-width: 49%;

  img {
    max-width: 450px;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`;

export const TextContainer = styled.div`
  max-width: 49%;
  align-self: center;

  p {
    text-align: justify;
    line-height: 2;
    max-width: 1120px;
  }
`;