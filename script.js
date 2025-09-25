//your JS code here. If required.
const allSquares = document.getElementById("block");

for(let i=0;i<800;i++){
	const sq = document.createElement("div");
	sq.classList.add('square');

	sq.addEventListener('mouseover' , ()=>{
		const color = `hsl(${Math.random() * 360},70% , 50%)`;
		sq.style.backgroundColor = color;
	})

	sq.addEventListener('mouseout' , ()=>{
			sq.style.backgroundColor = 'rgb(29, 29, 29)';
	})
	allSquares.appendChild(sq);
}