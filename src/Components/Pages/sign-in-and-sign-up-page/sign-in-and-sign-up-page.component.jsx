import './sign-in-and-sign-up-page.styles.scss';
import SignIn from '../../Components/sign-in/sign-in.component';
import SignUp from '../../Components/sign-up/sign-up.component';


const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up-page'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUpPage;