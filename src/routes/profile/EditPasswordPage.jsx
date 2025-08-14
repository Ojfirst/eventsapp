import React, { useState } from 'react';
import ChangePasswordForm from '../../components/Profile/ChangePasswordForm';
import Modal from '../../components/UI/Modal';

const EditPasswordPage = () => {
	const [showModal, setShowModal] = useState(true);

	const onRemoveModalHandler = () => {
		setShowModal(false);
	};
	return (
		<>
			{showModal && (
				<Modal onClose={onRemoveModalHandler}>
					<ChangePasswordForm/>
				</Modal>
			)}
		</>
	);
};

export default EditPasswordPage;
