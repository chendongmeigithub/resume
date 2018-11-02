getObj = function(id){
	return document.getElementById(id);
}

function MyPcTurnM(obj,Myclasson,Myclassoff){
var Pobj=obj.parentNode;
var Pid=Pobj.id;
var Pdiv=Pobj.getElementsByTagName("a");
for(i=0;i<Pdiv.length;i++){
	if(Pdiv[i]==obj){
	Pdiv[i].className=Myclasson;
	getObj(Pid+i).className="";
	}
	else{
	
	Pdiv[i].className=Myclassoff;
	getObj(Pid+i).className="undis";
	}
}
}
