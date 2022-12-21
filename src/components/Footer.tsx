import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterTag>
      <p>Adriel Faria</p>
      <div>
        <a
          href='https://github.com/br-adriel'
          target='_blank'
          title='Github'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/adriel-fsantos/'
          target='_blank'
          title='LinkedIn'
          rel='noopener noreferrer'
        >
          <FaLinkedinIn />
        </a>
      </div>
    </FooterTag>
  );
};

const FooterTag = styled.footer`
  background-color: #2b2d42;
  color: #fff;

  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  border-radius: 0.5rem 0.5rem 0 0;

  a {
    color: #fff;
  }

  a:hover {
    color: #ddd;
  }

  div {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    font-size: 1.2rem;
  }
`;

export default Footer;
