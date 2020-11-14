import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: #fff;
  background: #FFFCFC;
}

#root {
  margin: 0 auto;
  padding: 0;
}

button {
  cursor: pointer;
}

header {
  position: absolute;
  width: 100vw;
  height: 90px;

  background: #ff0000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.56);

}

strong {
  position: absolute;
  left: 0.9%;
  right: 77.78%;
  top: 0%;
  bottom: 0%;
  padding: 20px;

  font-family: Livvic;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 75px;
  display: flex;
  align-items: center;

  color: #FFFFFF;

}

`;