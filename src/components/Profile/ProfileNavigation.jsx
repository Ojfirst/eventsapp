import { Link } from 'react-router';
import ProfileItems from './ProfileItems';
import classes from './ProfileNavigation.module.css';

const Profile = () => {

  
	return (
		<>
      <ProfileItems />
			<ul className={classes.container}>
				<li>
					<Link to="new-profile">Create a new profile</Link>
				</li>
				<li>
					<Link to="edit-profile">Edit profile</Link>
				</li>
				<li>
					<Link to="changePassword">Edit Password</Link>
				</li>
			</ul>
		</>
	);
};

export default Profile;
