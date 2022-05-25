import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Lock } from 'auth0-lock';
import { useDispatch, useSelector } from 'react-redux';
import {
  setToken,
  setAuthResult,
  setUserData,
  authResultFetching,
  resetAuth
} from './reducer';
import { auth0Domain, auth0ClientId } from '../../configs/config';
import { auth0Configuration } from '../../configs/auth0Config';

const Login = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log({ navigate });
  const { loginReducer } = useSelector(state => state);

  const lock = useMemo(
    () => new Auth0Lock(auth0ClientId, auth0Domain, auth0Configuration),
    []
  );

  useEffect(() => {
    lock.on('signin submit', function () {
      dispatch(authResultFetching());
    });

    lock.on('signup submit', function () {
      dispatch(authResultFetching());
    });

    lock.on('unrecoverable_error', function (error) {
      lock.show({
        flashMessage: {
          type: 'error',
          text: error.errorDescription
        }
      });
      dispatch(resetAuth());
    });

    lock.on('authorization_error', function (error) {
      lock.show({
        flashMessage: {
          type: 'error',
          text: error.errorDescription
        }
      });
      dispatch(resetAuth());
    });

    lock.on('authenticated', function (authResult) {
      dispatch(setAuthResult(authResult));
      console.log(authResult);
      lock.getUserInfo(authResult.accessToken, function (error, profileResult) {
        localStorage.setItem('token', authResult.idToken);
        dispatch(setToken(authResult.idToken));
        dispatch(setUserData(profileResult));
        if (error) {
          // Handle error
          return;
        }

        // accessToken = authResult.accessToken;
        // profile = profileResult;

        // Update DOM
        lock.hide();
        navigate('/home');
      });
    });
  }, [lock, navigate, dispatch]);

  useEffect(() => {
    lock.show();
  }, [loginReducer, lock]);

  return <div className="auth0-container"></div>;
};

export default Login;
