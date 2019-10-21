import { useEffect, useState } from 'react';

export default function useLoopedValue(values, interval = 1000) {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const { length } = values;
		const id = setTimeout(() => {
			let nextIndex = index + 1;
			if (nextIndex > length - 1) {
				nextIndex = 0;
			}
			setIndex(nextIndex);
		}, interval);

		return () => clearTimeout(id);
	}, [index, interval, values]);

	return values[index];
}
