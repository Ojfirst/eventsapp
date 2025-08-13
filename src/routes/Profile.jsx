import React, { useState } from 'react';
import { Link } from 'react-router';
import Modal from '../components/UI/Modal';
import UserProfile from '../components/Profile/UserProfile';
import ChangePassword from '../components/Profile/ChangePassword';

const Profile = (props) => {
	const [showModal, setShowModal] = useState(false);

	const showModalHandler = () => {
		setShowModal(true);
	};

	const removeModalHandler = () => {
		setShowModal(false);
	};

	return (
		<>
			<UserProfile onShowModal={showModalHandler} />
			{showModal && (
				<Modal onClose={removeModalHandler}>
					<ChangePassword />
				</Modal>
			)}
		</>
	);
};

export default Profile;
