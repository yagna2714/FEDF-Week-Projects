	import React, { useState, useEffect } from "react";

	export default function FixedTimer() {
	const [count, setCount] = useState(0);

	useEffect(() => {
	const id = setInterval(() => {
	setCount(c => c + 1); // ✅ fix
	}, 1000);
	return () => clearInterval(id);
	}, []);

	return <h2>Fixed: {count}</h2>;
	}
