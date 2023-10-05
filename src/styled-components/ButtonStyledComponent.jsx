import styled from "styled-components";

const Button = styled.button`
  background-color: #ff0000;
  width: 320px;
  padding: 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  &:hover {
    color: #fff;
    background-color: violet;
  }
  &:active {
    position: relative;
    top: 2px;
  }

  @media (max-width: 992px) {
    background-color: green;
  }
`;

export const ButtonStyledComponent = () => <Button>Click me</Button>;
