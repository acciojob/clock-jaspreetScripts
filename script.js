const p= document.createElement("p");


function updateTime(){
	const currentDate= new Date();
	const month= currentDate.getMonth();
	const date= currentDate.getDate();
	const year = currentDate.getYear();
	const time = currentDate.toLocaleTimeString();

	let datetime= month+"/"+date+"/"+year+"/"+time;
	p.innerText=datetime;
	document.body.appendChild(p);
}

updateTime();

setInterval(updateTime,1000);
