import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
const [color, setColor]=useState("");

	return (
		<div className="luz-trafico rounded-3 d-flex flex-column justify-content-evenly align-items-center">
			<div onClick = {()=>setColor("luz-roja")} className={'${color=="luz-roja"?"glow":""} luz-roja rounded-circle'}></div>
			<div onClick = {()=>setColor("luz-amarilla")} className={'${color=="luz-amarilla"?"glow":""} luz-amarilla rounded-circle'}></div>
			<div onClick = {()=>setColor("luz-verde")} className={'${color=="luz-verde"?"glow":""} luz-verde rounded-circle'}></div>
		</div>
	);
};

export default Home;
