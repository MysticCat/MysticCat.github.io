// bros.js Created by Dan Roche, 4.30.06
// This code provides a simple pseudo-database for chapter brothers.
// The key is the addBrother function

var ximuBros = new Array();
var ximuNumber = 4910000;

// Brothers associated with the chapter but not initiated here
var otherBros = new Array();
var facultyBros = new Array();
var honoraryBros = new Array();

// Holds the head of each clan
var clans = new Array();

// The pledge classes will be numbered (from zero) and put in this array.  Each
// entry in this array will simply be an array of brother objects
var pledgeClasses = new Array();

var classNames = new Array(
	"Charter Class", // 0
	"Alpha", // 1
	"Beta", // 2
	"Gamma", // 3
	"Delta", // 4
	"Epsilon", // 5
	"Zeta", // 6
	"Eta", // 7
	"Theta", // 8
	"Iota", // 9
	"Kappa", // 10
	"Lambda", // 11
	"Mu", // 12
	"Nu", // 13
	"Xi", // 14
	"Omicron", // 15
	"Pi", // 16
	"Rho", // 17
	"Sigma", // 18
	"Tau", // 19
	"Upsilon", // 20
	"Phi", // 21
	"Chi", // 22
	"Psi", // 23
	"Omega", // 24
	"Alpha;&Beta", // 25
	"Alpha;&Gamma", // 26
	"Alpha;&Delta", // 27
	"Spring2008", // 28
	"Alpha;&Epsilon", // 29
	"Alpha;&Zeta", // 30
	"Alpha;&Eta", // 31
	"Alpha;&Theta", // 32
	"Alpha;&Iota", // 33
	"Alpha;&Kappa", // 34
	"Alpha;&Lambda", // 35
	"Alpha;&Mu", // 36
	"Alpha;&Nu", // 37
	"Alpha;&Xi", // 38
	"Alpha;&Omicron", // 39
	"Alpha;&Pi", // 40
	"Alpha;&Rho", // 41
	"Alpha;&Sigma", // 42
	"Alpha;&Tau", // 43
	"Alpha;&Upsilon", // 44
	"Alpha;&Phi", // 45
	"Alpha;&Chi", // 46
	"Alpha;&Psi", // 47
	"Alpha;&Omega" // 48
);

for( var i = 1; i < classNames.length; ++i ) {
	classNames[i] = "&" + classNames[i] + ";";
}

// Get the class initiation date
function getClassInitDate( pclass ) {
	if( pclass == 0 ) return "March 19, 1994";
	var toRet;
	if( pclass % 2 == 0 ) toRet = "Spring ";
	else toRet = "Fall ";
	toRet = toRet.concat( 1994 + Math.floor(pclass/2) );
	return toRet;
}

var EXPELLED = -1;
var ALUMNI = 0;
var ACTIVE = 1;

//var FACULTY = -1;
//var HONORARY = -2;

// Takes a brother object and returns the depth of that object in the family line
function broDepth( bro ) {
	var current;
	var toRet = 0;
	for( current = bro; current != null && ++toRet; current = current.big );
	return toRet-1;
}

function addToClass( brother, classNum ) {
	if (classNum >= 0) {
		if( pledgeClasses[classNum] == null ) pledgeClasses[classNum] = new Array();
		pledgeClasses[classNum].push( brother );
	}
	else if( brother.pclass == -1 ) facultyBros.push(brother);
	else if( brother.pclass == -2 ) honoraryBros.push(brother);
}

// Creates a brother with the given first name, last name,
// membership number, pledge class (number), and big brother (number)
// Membership numbers for xi mu bros should just be entered as the last
// four digits.
// A big brother number of 0 means no big brother
// ALL BIG BROTHERS MUST BE ADDED BEFORE THEIR LITTLES
// the status values can be ACTIVE, ALUMNI, FACULTY, HONORARY, or EXPELLED
// default status is ALUMNI
function addBrother( first, last, numb, pclass, big, status ) {
	var newBro = new Object();
	newBro.first = first;
	newBro.last = last;
	newBro.numb = numb;
	newBro.pclass = pclass;
	newBro.littles = new Array();

	if( status == null ) newBro.status = ALUMNI;
	else newBro.status = status;

	addToClass( newBro, pclass );
    
	newBro.big = null;
	
	if(numb % ximuNumber > 1000) {
		otherBros.push(newBro)
	}
	else if( big % ximuNumber > 1000) {
		for( x = 0; x < otherBros.length; ++x ) {
			if( otherBros[x].numb == big ) break;
		}
		newBro.big = otherBros[x];
		otherBros[x].littles.push(newBro);
	}	
	else if( big > 0 ) {
		console.log(numb);
		ximuBros[big-ximuNumber].littles.push(newBro);
		newBro.big = ximuBros[big-ximuNumber];
	}
    
	if( pclass >= 0) {
		ximuBros[newBro.numb-ximuNumber] = newBro;
	}
	
	return newBro;
}

for(var line = 0; line < lines.length; line++){
	var data = lines[line].split('\t');
	//console.log(data);
	var status = ALUMNI;
	if (data[5]=="A" || data[5]=="S") status = ACTIVE;
	else if (data[5]=="X") status = EXPELLED;
	addBrother(data[1],data[2],Number(data[0]),Number(data[3]),Number(data[4]),status);
}
// document.getElementById('master').onchange = function(){
	// console.log('master list read');
	// var file = this.files[0];
	// var reader = new FileReader();
	// reader.onload = function(progressEvent){
		// Entire file
		// console.log(this.result);
		// By lines
		// lines = this.result.split('\n');
		// for(var line = 0; line < lines.length; line++){
			// console.log(lines[line]);
			// var data = lines[line].split(';');
			// var status = ALUMNI;
			// if (data[5]=="A" || data[5]=="S") status = ACTIVE;
			// else if (data[5]=="X") status = EXPELLED;
			// bro = addBrother(data[1],data[2],Number(data[0]),Number(data[3]),Number(data[4]),status);
			// if (bro.big != null && bro.big.numb % ximuNumber > 1000) console.log(ximuBros[bro.big-ximuNumber].last);
			// console.log(pledgeClasses[0]);
		// }
	// };
	// reader.readAsText(file);
// };

/* addBrother("Derek","Danilson",1610766,0,0);
addBrother("Mike","Conti",24,3,1610766);
addBrother("Marc","Drumm",35,5,24);
addBrother("Derek","Goodman",39,6,35);
addBrother("Jeff","Chapman",48,8,39);
addBrother("Alan","Cook",71,14,35);
addBrother("Dan","Duong",89,18,1610766);
addBrother("Dan","Goldstein",100,19,71);
addBrother("Greg","Dalakian",112,21,71);
addBrother("Scott","Lynch",119,22,100);
addBrother("Alex","McDonald",129,24,112);
addBrother("Doug","Schwarz",130,24,89);

addBrother("Tim","Simpson",3890208,0,0);
addBrother("Valencio","Jackson",37,5,3890208);
addBrother("Brian","Kozakowski",40,6,37);
addBrother("Justin","McAdams",63,13,37);
addBrother("Kris","Ferranti",75,15,63);
addBrother("Rob","Delpriore",80,17,37,EXPELLED);
addBrother("Matt","Leitsch",83,17,75);
addBrother("Neil","Prettyman",105,19,80,EXPELLED);
addBrother("Mike","Archer",98,19,83,EXPELLED);
addBrother("Joey","Holloway",123,23,83); */

// This will generate the clans array
if(pledgeClasses[0] != null) {
	console.log("they're here!");
	for( var i = 0; i < pledgeClasses[0].length; ++i ) {
		if( (pledgeClasses[0])[i].littles.length > 0 ) {
			var thisClan = new Array();
			var queue = new Array();
			var current;
			queue.push( (pledgeClasses[0])[i] );
			while( queue.length > 0 ) {
				current = queue.pop();
				thisClan.push(current);
				for( var j = current.littles.length - 1; j >= 0; --j ) {
					queue.push(current.littles[j]);
				}
			}
			clans.push(thisClan);
		}
	}
}
// Sort the clans array by descending size.
clans.sort( new Function('a','b','return( b.length - a.length );') );

// Sort pledge class arrays
function sortByLast( a, b ) {
	if( a.last < b.last ) return -1;
	else if( a.last > b.last ) return 1;
	else return 0;
}
for( var i = 0; i < pledgeClasses.length; ++i ) {
	if( pledgeClasses[i] != null ) pledgeClasses[i].sort( sortByLast );
}