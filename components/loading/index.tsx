import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0%, 40%, 100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
`;

const Spinner = styled.div`
  width: 50px;
  height: 60px;
  text-align: center;
  font-size: 10px;
  display: flex;
  gap: 2px;
`;

const Rect = styled.div`
  background-color: #fdeb67;
  height: 100%;
  width: 6px;
  display: inline-block;
  animation: ${spinAnimation} 1.2s infinite ease-in-out;
`;

const Rect1 = styled(Rect)`
  animation-delay: 0s;
`;

const Rect2 = styled(Rect)`
  animation-delay: -1.1s;
`;

const Rect3 = styled(Rect)`
  animation-delay: -1s;
`;

const Rect4 = styled(Rect)`
  animation-delay: -0.9s;
`;

const Rect5 = styled(Rect)`
  animation-delay: -0.8s;
`;
const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Loading: React.FC = () => {
  return (
    <LoadingWrapper>
      <Spinner>
        <Rect1 />
        <Rect2 />
        <Rect3 />
        <Rect4 />
        <Rect5 />
      </Spinner>
      Loading...
    </LoadingWrapper>
  );
};

export default Loading;
