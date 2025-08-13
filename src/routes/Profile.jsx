import React, { useState } from 'react';
import { Link } from 'react-router';
import Modal from '../components/UI/Modal';
import UserProfile from '../components/Profile/UserProfile';
import ProfileForm from '../components/Profile/ProfileForm';
import ChangePasswordForm from '../components/Profile/ChangePasswordForm';

const Profile = () => {
	const [showModal, setShowModal] = useState(false);

	const showModalHandler = () => {
		setShowModal(true);
	};

	const removeModalHandler = () => {
		setShowModal(false);
	};

	return (
		<>
      <ProfileForm />
			{showModal && (
        <Modal onClose={removeModalHandler}>
					<ChangePasswordForm />
				</Modal>
			)}
      <UserProfile onShowModal={showModalHandler} />
		</>
	);
};

export default Profile;
