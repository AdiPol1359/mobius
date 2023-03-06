import { PrivateRoute } from '@/components/PrivateRoute';
import { SignInForm } from '@/components/SignInForm/SignInForm';

export default function SignInPage() {
	return (
		<PrivateRoute loggedIn={false}>
			<SignInForm />
		</PrivateRoute>
	);
}
