
import { useState } from "react";
function Assisgnment() {
const [name, setName] = useState("");
return (
<div>
<h1>Student Form</h1>
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
placeholder="Enter your name"
/>
<h2>Your Name: {name}</h2>
</div>
);
}
export default Assisgnment;