import { useState } from 'react';

import AuthForm from '../../components/Auth/AuthForm';
import Modal from '../../components/UI/Modal';

function AuthenticationPage() {
	const [showModal, setShowModal] = useState(true);

	const removeModalHandler = () => {
		setShowModal(false);
	};

	return (
		<>
			{showModal && (
				<Modal onClose={removeModalHandler}>
					<AuthForm />
				</Modal>
			)}
		</>
	);
}

export default AuthenticationPage;
