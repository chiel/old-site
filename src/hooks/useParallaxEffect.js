import { useEffect, useState } from 'react';

export default function useParallaxEffect(distance) {
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		function handleScroll() {
			let newOffset = window.pageYOffset;
			if (newOffset > distance) {
				newOffset = distance
			}

			if (newOffset !== offset) {
				setOffset(newOffset);
			}
		}

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [distance, offset]);

	return offset;
}
