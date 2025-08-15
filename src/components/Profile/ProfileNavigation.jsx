import { Link } from 'react-router';

const Profile = () => {
	return (
		<>
			<ul>
				<li>
					<Link to="new-profile">Create a new profile</Link>
				</li>
				<li>
					<Link to="edit-profile">Edit profile</Link>
				</li>
				<li>
					<Link to="edit">Edit Password</Link>
				</li>
			</ul>
		</>
	);
};

export default Profile;
