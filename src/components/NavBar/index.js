import * as React from 'react';

export default ({title}) => {
	return (
		<nav className="navbar bg-dark">
			<a className="navbar-brand color-me" href="/">{title}</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
		</nav>
	)
}