import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
  font-family: 'Inter';
  src: url('./assets/fonts/static/Inter-Regular-slnt=0.ttf') format('truetype');
}

:root {
  /* General Styles */
  font-size: 14px;
  --border-radius: 5px;
  --lime: #1db489;
  --red: #dc414c;

  /* Brand Colours */
  --blue: #00bfff;
  --twitter: #1ca0f2;
  --instagram: linear-gradient (#fdc468 to #df4996);
  --youtube: #c4032a;

  /* Dark Theme Colours */
  --bottom-bg-dark: #1e202a;
  --top-bg-dark: #1f212e;
  --card-bg-dark: #252a41;
  --text-blue: #8b97c6;
  --text-white: #ffffff;
  --toggle-dark: linear-gradient(#378fe6, #3eda82);
  --toggle-light: hsl(230, 22%, 74%);
  --card-width: 250px;
  --overview-card-height: 200px;
  --engagement-card-height: 120px;

  /* Light Theme Colours */
  --bottom-bg-light: #fff;
  --top-bg-light: #f5f7ff;
  --card-bg-light: #f0f2fa;
  --text-grey-light: #63687e;
  --text-blue-light: #1e202a;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-rendering: optimizeLegibility;
}

body {
  font-family: 'Inter', sans-serif;
  height: 100vh;
}

button:focus, input:focus {
  outline: none
}

a {
  text-decoration: none;
  color: #fff;
}
`;
