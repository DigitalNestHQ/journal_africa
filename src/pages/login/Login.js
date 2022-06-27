import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Alerts from '../../components/alert/Alerts';
import AuthLayout from '../../components/layout/authlayout/AuthLayout';
import * as userActions from '../../store/actions/userActions';
import { showAlert } from '../../store/actions/alertActions';
import './login.css';
import '../../pages/register/signup.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.loginUser);
  const { loading, error, message, token } = loginUser;
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    // console.log(location);
    if (token) {
      const fromSuccessPage = location.state && location.state.fromSuccessPage;
      if (fromSuccessPage) {
        history.push('/');
      } else {
        history.goBack();
      }
    }

    if (message) {
      dispatch(showAlert(message, 'success'));
    }
    if (error) {
      dispatch(showAlert(error, 'danger'));
    }
  }, [dispatch, error, token, history, message, location.state]);

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userInfo;

  const onChange = (e) =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      dispatch(showAlert('Please fill in your email and password', 'danger'));
    }
    dispatch(userActions.loginUser({ email, password }));
  };

  return (
    <AuthLayout>
      <div className='log-showcase'>
        <div className='reg-content-grid'>
          <div className='reg-benefits'>
            <h1 className='african-story'> Telling the untold African Story</h1>
          </div>
          <div className='reg-form-outer-container'>
            <h5 className='reg-form-header'>Sign In</h5>
            {error && <Alerts />}
            {message && <Alerts />}
            <form onSubmit={onSubmit}>
              <div className='form-group'>
                <label htmlFor='email' className='reg-label'>
                  Email
                </label>
                <input
                  type='text'
                  name='email'
                  placeholder='Enter email...'
                  className='form-control reg-input'
                  value={email}
                  onChange={onChange}
                  required
                />
              </div>
              <div className='form-group password-input'>
                <label htmlFor='password' className='reg-label'>
                  Password
                </label>
                <input
                  type={`${showPassword ? 'text' : 'password'}`}
                  name='password'
                  placeholder='Enter Password'
                  className='form-control reg-input'
                  value={password}
                  onChange={onChange}
                  minLength='6'
                  required
                />
                <span
                  className='show-password'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'hide' : 'show'}
                </span>
              </div>
              <input
                type='submit'
                value={`${loading ? 'Please wait...' : 'Continue'}`}
                className='btn btn-red btn-block mb-3'
                disabled={loading}
              />
            </form>
            <div className='forgot-password'>
              <Link to='/' className='forgot-password-link'>
                Forgot password?
              </Link>
            </div>
            <div className='already-have-account'>
              <p className='m-0 reg-dont-account'>Don't have an Account?</p>
              <Link to='/signup' className='reg-sign-in'>
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
