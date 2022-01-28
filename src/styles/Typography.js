import { createGlobalStyle } from "styled-components";
import RobotoMonoRegular from '../assets/fonts/RobotoMono-Regular.ttf'



const Typography = createGlobalStyle`
@font-face {
  font-family: "RobotoMono-Regular";
  src: url(${RobotoMonoRegular});
  font-style: normal;
}

*{
  font-family: 'RobotoMono Regular';
}
`
export default Typography