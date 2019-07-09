import * as React from 'react';

export default ({title}) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<a className="navbar-brand" href="/">{title}</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
		</nav>
	)
}