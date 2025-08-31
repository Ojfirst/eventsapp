import React from 'react';
import { Outlet } from 'react-router';
import ProfileNavigation from '../../components/Profile/ProfileNavigation';

const Profile = () => {
	return (
		<>
			<ProfileNavigation />
      <div>
        <Outlet />
      </div>
		</>
	);
};

export default Profile;
