import { PrivateRoute } from '@/components/common/PrivateRoute';
import { SignInForm } from '@/components/entry/SignInForm/SignInForm';

export default function SignInPage() {
	return (
		<PrivateRoute loggedIn={false}>
			<SignInForm />
		</PrivateRoute>
	);
}
