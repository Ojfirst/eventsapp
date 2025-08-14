import React, {useState} from 'react';

import ProfileForm from '../../components/Profile/ProfileForm';
import Modal from '../../components/UI/Modal';

const AddProfile = () => {
  const [showModal, setShowModal] = useState(true);
  
    const onRemoveModalHandler = () => {
      setShowModal(false);
    };

	return (
		<>
			{showModal && <Modal onClose={onRemoveModalHandler}>
				<ProfileForm method={'post'} />
			</Modal>}
		</>
	);
};

export default AddProfile;
