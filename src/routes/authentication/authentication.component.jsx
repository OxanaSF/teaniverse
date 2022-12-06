import { useState } from 'react';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import './authentication.styles.scss';

const Authentication = () => {
  const [logIn, setLogIn] = useState(true);

  const signInHandler = () => {
    setLogIn(!logIn);
  };

  return (
    <div className="authentication-container">
      {!logIn ? (
        <>
          <SignUpForm />
          <div className='switch-account'>
            Already have an account?
            <button onClick={signInHandler}>Sign in</button>`
          </div>
          </>
      
      ) : (
        <>
          <SignInForm />

          <div className='switch-account'>
            Don't have an account?
            <button onClick={signInHandler}>Sign up</button>`
          </div>
        </>
      )}
   
    </div>
  );
};

export default Authentication;
