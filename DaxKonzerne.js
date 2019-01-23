//Tooltip
function ShowTooltip(evt,mouseovertext){
	tooltip.setAttributeNS(null,"x",evt.clientX-300);
	tooltip.setAttributeNS(null,"y",evt.clientY-60);
	tooltip.setAttributeNS(null,"visibility","visible");
	tooltip.firstChild.data = evt.target.getAttributeNS(null,"id");
}

function HideTooltip(){
	tooltip.setAttributeNS(null,"visibility","hidden");
} 

//Back Button Function
function Back(){
	var germany = document.querySelector("#germany_map");
		germany.style.visibility = "visible";
		
	var button = document.querySelector("#back_button");
		button.style.visibility = "hidden";
		
	var hamburg = document.querySelector("#hamburg");
		hamburg.style.visibility = "hidden";	
		
	var lower_saxony = document.querySelector("#lower_saxony");
		lower_saxony.style.visibility = "hidden";	
	
	var north_rhine_westphalia = document.querySelector("#north_rhine_westphalia");
		north_rhine_westphalia.style.visibility = "hidden";	
		
	var hesse = document.querySelector("#hesse");
		hesse.style.visibility = "hidden";	
		
	var rhineland_palatinate  = document.querySelector("#rhineland_palatinate");
		rhineland_palatinate.style.visibility = "hidden";
		
	var baden_wurttemberg = document.querySelector("#baden_wurttemberg");
		baden_wurttemberg.style.visibility = "hidden";	
		
	var bavaria = document.querySelector("#bavaria");
		bavaria.style.visibility = "hidden";
		
	var legend = document.querySelector("#legend");
		legend.style.visibility = "hidden";	
}

//Hamburg
function show_Hamburg(){
	var germany = document.querySelector("#germany_map");
		germany.style.visibility = "hidden";	
	
	var button = document.querySelector("#back_button");
		button.style.visibility = "visible";
		
	var hamburg = document.querySelector("#hamburg");
		hamburg.style.visibility = "visible";	
	
	var legend = document.querySelector("#legend");
		legend.style.visibility = "visible";		
}

//Lower Saxony
function show_LowerSaxony(){
	var germany = document.querySelector("#germany_map");
		germany.style.visibility = "hidden";	
	
	var button = document.querySelector("#back_button");
		button.style.visibility = "visible";
		
	var lower_saxony = document.querySelector("#lower_saxony");
		lower_saxony.style.visibility = "visible";	
	
	var legend = document.querySelector("#legend");
		legend.style.visibility = "visible";
}

//North Rhine-Westphalia
function show_North_Rhine_Westphalia(){
	var germany = document.querySelector("#germany_map");
		germany.style.visibility = "hidden";	
	
	var button = document.querySelector("#back_button");
		button.style.visibility = "visible";
		
	var north_rhine_westphalia = document.querySelector("#north_rhine_westphalia");
		north_rhine_westphalia.style.visibility = "visible";	
	
	var legend = document.querySelector("#legend");
		legend.style.visibility = "visible";
}

//Hesse
function show_Hesse(){
	var germany = document.querySelector("#germany_map");
		germany.style.visibility = "hidden";	
	
	var button = document.querySelector("#back_button");
		button.style.visibility = "visible";
		
	var hesse = document.querySelector("#hesse");
		hesse.style.visibility = "visible";	
		
	var legend = document.querySelector("#legend");
		legend.style.visibility = "visible";	
}

//Rhineland Palatinate
function show_Rhineland_Palatinate(){
	var germany = document.querySelector("#germany_map");
		germany.style.visibility = "hidden";	
	
	var button = document.querySelector("#back_button");
		button.style.visibility = "visible";
		
	var rhineland_palatinate = document.querySelector("#rhineland_palatinate");
		rhineland_palatinate.style.visibility = "visible";	
		
	var legend = document.querySelector("#legend");
		legend.style.visibility = "visible";
}

//Baden-Wurttemberg
function show_Baden_Wurttemberg(){
	var germany = document.querySelector("#germany_map");
		germany.style.visibility = "hidden";	
	
	var button = document.querySelector("#back_button");
		button.style.visibility = "visible";
		
	var baden_wurttemberg = document.querySelector("#baden_wurttemberg");
		baden_wurttemberg.style.visibility = "visible";	
		
	var legend = document.querySelector("#legend");
		legend.style.visibility = "visible";
}

//Bavaria
function show_Bavaria(){
	var germany = document.querySelector("#germany_map");
		germany.style.visibility = "hidden";	
	
	var button = document.querySelector("#back_button");
		button.style.visibility = "visible";
		
	var bavaria = document.querySelector("#bavaria");
		bavaria.style.visibility = "visible";	
		
	var legend = document.querySelector("#legend");
		legend.style.visibility = "visible";	
}