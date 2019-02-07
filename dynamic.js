function getfile(file,callback)
{
	var htp=new XMLHttpRequest();
	htp.overrideMimeType("application/json");
	htp.open('GET',file,true);
	htp.onreadystatechange=function()
	{
		if(htp.readyState===4&&htp.status=="200")
		{
			callback(htp.responseText);
		}
	}
	htp.send(null);
}
getfile("dynamic.json",function(text)
{
	let data=JSON.parse(text);
	console.log(data);
	profile(data.profile);
	career(data.career);
	edu(data.education);
	lang(data.languages);
})
var left=document.querySelector(".left");
function profile(p)
{
	var pimg=document.createElement("img");
	pimg.src=p.img;
	left.appendChild(pimg);
	var ph3=document.createElement("h3");
	ph3.textContent=p.name;
	left.appendChild(ph3);
	var prollno=document.createElement("p");
	prollno.textContent=p.rollno;
	left.appendChild(prollno);
	var pinsti=document.createElement("p");
	pinsti.textContent=p.institute;
	left.appendChild(pinsti);
	var pplace=document.createElement("p");
	pplace.textContent=p.place;
	left.appendChild(pplace);

}
var right=document.querySelector(".right");
function career(c)
{
	var hc=document.createElement("h1");
	hc.innerHTML="RESUME";
	right.appendChild(hc);
	var cc=document.createElement("h2");
	hc.innerHTML="Career Objective";
	right.appendChild(cc);
	var chr=document.createElement("hr");
	right.appendChild(chr);
	var cinfo=document.createElement("p");
	cinfo.textContent=c.info;
	right.appendChild(cinfo);
	

}
function edu(e)
{
		var ed=document.createElement("h2");
		ed.innerHTML="Educational Details";
		right.appendChild(ed);
		var ehr=document.createElement("hr");
		right.appendChild(ehr);
		var etable=document.createElement("table");
		etable.border="1";
		var tr1="<tr><td>sno</td><td>degree</td><td>institute</td><td>yop</td></tr>";
		var tr2="";
		for(i=0;i<e.length;i++)
		{
			tr2=tr2+"<tr><td>"+e[i].sno+"</td><td>"+e[i].degree+"</td><td>"+e[i].institute+"</td><td>"+e[i].yop+"</td></tr>";
		}
		etable.innerHTML=tr1+tr2;
		right.appendChild(etable);
}
function lang(l)
{
	var lhr=document.createElement("hr");

		right.appendChild(lhr);

	
	var lh=document.createElement("h2");
		lh.textContent="languages";
		right.appendChild(lh);
	var ul=document.createElement("ul");
	right.appendChild(ul);
	for (i=0;i<l.length;i++) 
	{
		var li=document.createElement("li");
		li.textContent=l[i].lang;
		ul.appendChild(li);
	}
		
}
