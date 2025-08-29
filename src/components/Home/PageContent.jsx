import React from 'react';

import classes from './PageContent.module.css';

const PageContent = ({ children }) => {
	return <div className={classes.content}>{children}</div>;
};

export default PageContent;
