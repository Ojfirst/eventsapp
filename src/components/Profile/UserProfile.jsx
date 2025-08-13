import React from 'react'

const UserProfile = (props) => {
  return (
    <ul>
				<li>
					<button type="button" onClick={props.onShowModal}>
						Change password
					</button>
				</li>
			</ul>
  )
}

export default UserProfile