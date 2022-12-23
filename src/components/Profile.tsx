import styled from 'styled-components';
import { AuthGoogleContext } from '../contexts/AuthGoogleContext';
import { useContext } from 'react';

const Profile = () => {
  const { user, signOutGoogle } = useContext(AuthGoogleContext);
  return (
    <ProfileDiv>
      <img src={user?.photoURL ? user.photoURL : ''} alt='Sua foto de perfil' />
      <button type='button' onClick={() => signOutGoogle()}>
        Sair
      </button>
    </ProfileDiv>
  );
};

const ProfileDiv = styled.div`
  position: fixed;
  bottom: 30px;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  background: #2b2d42;
  color: #fff;
  border-radius: 5px 0 0 5px;
  padding: 5px;
  gap: 4px;
  flex-direction: column;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
    border-radius: 5px;
  }

  button {
    width: 100%;
    padding: 2px;
    color: #d83234;
    border-radius: 5px;
    font-size: 1rem;

    :hover {
      background-color: #d83234;
      color: #fff;
    }
  }
`;

export default Profile;
