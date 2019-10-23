/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import Content from './Content';

const dob = new Date('1986-11-30').getTime();
const age = Math.floor((Date.now() - dob) / 1000 / 60 / 60 / 24 / 365);

const usabilla = 'https://usabilla.com/';
const github = 'https://github.com/chiel';
const lastfm = 'https://www.last.fm/user/chielkunkels';
const monk = 'https://monk.nl/amsterdam/';

const linkProps = {
	target: '_blank',
	rel: 'noopener noreferrer',
};

export default function About() {
	return (
		<Content>
			<h2>Hello there</h2>

			<p>
				I’m a {age}-year-old guy from the Netherlands. I enjoy making digital stuff, which
				I currently do for <a {...linkProps} href={usabilla}>Usabilla</a> in Amsterdam.
				Since I have a bad case of wanderlust I’ve previously lived in places such as
				Stockholm, London and Saudi-Arabia.
			</p>

			<p>
				Though many of my recent positions have been as a frontend developer, I'm actually
				a versatile full-stack developer with a knack for software and cloud architectures.
				Leveraging knowledge of all facets of software development allows me to come up
				with sound software architecture and write great code.
			</p>
			<p>
				I work well in teams and enjoy the perks of having held jobs at companies of various
				sizes, some of which in the capacity of team-lead. I can work autonomously and always
				try to recognise how to best add value to businesses.
			</p>
			<p>
				You can find my personal code on my <a {...linkProps} href={github}>GitHub profile</a>.
				Aside from coding I enjoy <a {...linkProps} href={lastfm}>listening to music</a>, going
				to concerts, playing video games, watching movies &amp; series and travelling. I also
				enjoy climbing at my <a {...linkProps} href={monk}>local bouldering gym</a>.
			</p>
		</Content>
	);
}
