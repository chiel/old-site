import { useEffect, useState } from 'react';

export default function useViewportHeight() {
	const initialHeight = typeof window !== 'undefined'
		? window.innerHeight
		: 0;
	const [height, setHeight] = useState(initialHeight);

	useEffect(() => {
		function handleResize() {
			if (height !== window.innerHeight) {
				setHeight(window.innerHeight);
			}
		}

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [height]);

	return height;
}
