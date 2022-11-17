import { 
  signInWithGooglePopup,
  createUserDocumentFromAuth 
 } from '../../utils/firebase/firebase.utils';


const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth (user)

  };

  return (
    <div>
      <h3> SIGN In Page</h3>

      <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>
    </div>
  );
};

export default SignIn;
