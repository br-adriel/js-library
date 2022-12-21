import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Dosis", sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root, body {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #edf2f4;
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    font-size: 1rem;
    transition: 0.3s background;
    cursor: pointer;
  }

  main {
    flex-grow: 1;
    width: 100%;
    max-width: 1280px;
    padding: 1rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  input {
    border: none;
    padding: 0.5rem;
    border-radius: 0.25rem;
    box-shadow: none;
    transition: 0.3s box-shadow;
  }

  input:focus {
    outline: none;
    box-shadow: 0 0 0.2rem rgb(0, 150, 199, 0.5);
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  input[type="checkbox"] {
    font-size: 2rem;
    accent-color: #0096c7;
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
  }

  @media (min-width: 900px) {
    button {
      font-size: 1.2rem;
    }
  }
`;

export default GlobalStyles;
