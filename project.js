function SystemTime(){
var d=new Date();
var hh=d.getHours();
var mm=d.getMinutes();
var ss=d.getSeconds();
var session="AM";
if(hh==0)
{
	hh=12;
}
if(hh>12){
	hh=hh-12;
	session="PM";
}
hh=(hh<10)?"0"+hh:hh;
mm=(mm<10)?"0"+mm:mm;
ss=(ss<10)?"0"+ss:ss;
var time=hh+":"+mm+":"+ss+" "+session;
document.getElementById("clock").innerText=time;
setTimeout(function()
{
	SystemTime()
},1000)
}
SystemTime();
var filter=document.getElementById("filter");
filter.addEventListener('keyup',searchitem,false);
function searchitem(e)
{
	//console.log("search field called");
	var txt=e.target.value.toLowerCase();
	var items=document.getElementsByTagName("li");
	Array.from(items).forEach((item)=>
	{
		itemValue=item.firstChild.textContent;
		if(itemValue.toLowerCase().indexOf(txt)!=-1)
		{
			item.style.display="block";
		}
		else
		{
			item.style.display="none";
		}
	})
}
var myform=document.getElementById("button");
myform.addEventListener('click',additem,false);
var lists=document.getElementById("lists");
lists.addEventListener('click',removeitem,false);
var filter1=document.getElementById("filter1");
filter1.addEventListener('keyup',searchitem1,false);
function additem(e)
{
	e.preventDefault();
	var f=document.getElementById("game").value;
	//create li element with data
	var l=document.createElement("li");
	var text=document.createTextNode(f);
	l.appendChild(text);
	//create button with data
	var dbtn=document.createElement("button");
	dbtn.setAttribute("class","delete");
	var dtext=document.createTextNode("x");
	dbtn.appendChild(dtext);
	//add button to li element
	l.appendChild(dbtn);
	//add item to lists
	lists.appendChild(l);
	//console.log(lists);
}
function removeitem(e)
{
	if(e.target.classList.contains('delete'))
	{
	//console.log("delete called");
	if(confirm("Are you sure you want to delete?"))
	{
		var li2=e.target.parentElement;
		lists.removeChild(li2);
	}
	}
}
function searchitem1(e)
{
	//console.log("search field called");
	var txt=e.target.value.toLowerCase();
	var items=document.getElementsByTagName("li");
	Array.from(items).forEach((item)=>
	{
		itemValue=item.firstChild.textContent;
		if(itemValue.toLowerCase().indexOf(txt)!=-1)
		{
			item.style.display="block";
		}
		else
		{
			item.style.display="none";
		}
	})
}
