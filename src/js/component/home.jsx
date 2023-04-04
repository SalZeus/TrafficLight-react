import React, {useState} from "react"; 

//create your first component
const Home = () => {
	const [color, setColor]=useState("")
		return (
	<div className="traffic bg-dark">
		<div className={`${color=="red"?"glow":""} red`} onClick={()=>setColor("red")}></div>
		<div className={`${color=="yellow"?"glow":""} yellow`} onClick={()=>setColor("yellow")}></div>
		<div className={`${color=="green"?"glow":""} green`} onClick={()=>setColor("green")}></div>
	</div>
	)
};

export default Home;
