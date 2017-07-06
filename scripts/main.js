var number = prompt("Donnez un chiffre de 1 à 70 !");
//localStorage.setItem('numberofsquare', number);
console.log(number);

//Creating the string sequence corresponding to the number to have the right grid
var htmlstring = "" 
//"<tr><td></td><td></td></tr><tr><td></td><td></td></tr>";

for (i = 0; i < number; i++) 
{ 
	htmlstring += "<tr>";
		for (j = 0; j < number; j++) 
		{ 
		    htmlstring += "</td><td>";
		    console.log(j);
		}
	htmlstring += "</tr>";
}

console.log(htmlstring);

//pushing the new html into the table
document.getElementById("table").innerHTML = htmlstring;