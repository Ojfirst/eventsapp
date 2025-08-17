import React from 'react';
import { useRouteLoaderData } from 'react-router';
import { getUserEmail } from '../../util/auth';

const ProfileItems = () => {
	const data = useRouteLoaderData('profile');

	if (!data || typeof data !== 'object') {
		return <p>No profile found</p>;
	}

  const storedEmail = getUserEmail();
  // from data object, filter out userEmail only
  const userEmail = Object.values(data)[0]?.userEmail || 'No email found';

  if (!userEmail || userEmail !== storedEmail) {
    return <p>You do not have permission to view this profile.</p>;
  }


  const profileList = Object.entries(data).map(([profileId, profile]) => (  
    <div key={profileId}>
      <h3>{profile.fullName}</h3>
      <p>Interests: {profile.interest}</p>
      <p>Social Link: <a href={profile.socialLink} target="_blank" rel="noopener noreferrer">{profile.socialLink}</a></p>
      <p>Email: {profile.userEmail}</p>
    </div>
  ));


	return <div>{profileList}</div>;
};

export default ProfileItems;
