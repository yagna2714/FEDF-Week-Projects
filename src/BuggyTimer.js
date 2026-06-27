	import React, { useState, useEffect } from "react";	
	export default function BuggyTimer() {
	  const [count, setCount] = useState(0);
	
	  useEffect(() => {
	    const id = setInterval(() => {
	      setCount(count + 1); // ❌ stale closure
	    }, 1000);
	    return () => clearInterval(id);
	  }, []);
	
	  return <h2>Buggy: {count}</h2>;
	}
