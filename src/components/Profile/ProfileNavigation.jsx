import { Link } from 'react-router';

const Profile = () => {
	return (
		<>
			<ul>
				<Link to="new-profile">Create a new profile</Link>
				<Link to="edit-profile">Create a new profile</Link>
				<Link to="edit">Edit Password</Link>
			</ul>
		</>
	);
};

export default Profile;
