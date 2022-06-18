document.getElementById(" message ").innerHTML=" It's not that hard ";
var me = {"name":"Pacuraru","surname":"Fabian"};
console.log(me.name);
console.log(me.surname);
function write(name) {
    console.log(" How are you doing ", name, "?");
}
write(me.surname);
console.log(me.surname=="Fabian" ? " TRUE " : " FALSE " ) ;
document.getElementById("write").addEventListener("click",writeout);
function writeout(){
	var textValue = $('#n').val();
    console.log(textValue);
}