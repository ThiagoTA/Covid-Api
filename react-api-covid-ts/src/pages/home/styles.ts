import styled, { css } from 'styled-components';

interface FormProps {
  hasError: boolean;
}

export const Form = styled.form<FormProps>`

input {
  position: absolute;

  height: 35px;
  width: 285px;
  padding: 7px;

  left: 1400px;
  top: 24px;

  outline: 0;
  border: 2px solid #FF0000;
  border-radius: 17.5px;

  background: #FFFFFF;

  ${(props) =>
  props.hasError &&
  css`
      border-color: #000
    `}

}

button {
  position: absolute;
  height: 35px;
  width: 55px;
  left: 1630px;
  top: 24px;

  outline: 0;
  border-radius: 0px 15px 15px 0px;

  border: 0px;
  background: #FFFFFF;


  ${(props) =>
  props.hasError &&
  css`
      border-color: #000
    `}

  &:hover {
  background: #F0F0F0;
}

}

`;

export const Title = styled.h1`

h1 {
  position: absolute;
  width: 940px;
  height: 150px;
  left: 400px;
  top: 151px;

  font-family: Armata;
  font-size: 60px;
  line-height: 75px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ff0000;

  border: 0px solid #ff0000;
}

`

export const Repositories = styled.div`

a {
  position: absolute;
  width: 770px;
  height: 153px;
  left: 475px;
  top: 331px;


  background: #f3f3f3c7;
  border-radius: 30px;
  transition: 0.2s;

&:hover {
  transform: translateX(10px);
}

& + a {
  margin-top: 180px
}

}

img {
  position: absolute;
  width: 115px;
  height: 153px;
  left: 0px;
  top: 0px;

  border-radius: 30px 0px 0px 30px;
}

h2 {
  position: absolute;
  width: 300px;
  height: 50px;
  left: 128px;
  top: 5px;

  font-family: Armata;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 35px;

  display: flex;
  align-items: center;

  color: #000;

  border: 0px solid #ff0000;
}

h3 {
  position: absolute;
  width: 484px;
  height: 30px;
  left: 128px;
  top: 50px;

  font-family: Armata;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #000;

  border: 0px solid #ff0000;
}

svg {
  position: absolute;
  width: 30px;
  height: 30px;
  left: 720px;
  top: 59px;
  align-items: center;
}

`;

export const Error = styled.span`
  position: absolute;
  display: block;
  height: 35px;
  width: 285px;
  padding: 7px;

  left: 1400px;
  top: 60px;

  font-family: Arial, Helvetica, sans-serif;

  color: #FFF;
`;