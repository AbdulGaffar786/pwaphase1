function loadJson(file,callback){
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("application/json")
xhr.open("GET",file,true);
xhr.onreadystatechange=function(){
  if(xhr.readyState === 4 && xhr.status=="200"){
    callback(xhr.responseText);
  }
 }
xhr.send();
}
loadJson("dynamic.json",function(text)
{
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  Career(data.Career_objective);
  Education(data.Education_details);
  Skills(data.Skills);
})
var left=document.querySelector(".left");
function profile(p){
  var image=document.createElement("img");
  image.src=p.image;
  left.append(image);
  var h2=document.createElement("h2");
  h2.textContent=p.name;
  left.append(h2);
  var a=document.createElement("h2");
  a.textContent=p.designation;
  left.append(a);
  var b=document.createElement("h2");
  b.textContent=p.email_id;
  left.append(b);
  var c=document.createElement("h2");
  c.textContent=p.phone_no;
  left.append(c);
  var d=document.createElement("h2");
  d.textContent=p.place;
  left.append(d);
}
var right=document.querySelector(".right");
function Career(q){
  var h1=document.createElement("h1");
  h1.textContent="Career_objective";
  right.append(h1);
  var e=document.createElement("hr");
  right.append(e);

  var fan=document.createElement("h2");
  fan.textContent=q.info;
  right.append(fan);
}
//Education details:
function Education(edu){
  var h1=document.createElement("h1");
  h1.textContent="Education_details";
  right.append(h1);
  var e=document.createElement("hr");
  right.append(e);
  var table=document.createElement("table");
  //table.border="2";
  right.append(table);
  var tr1="<tr><th>course</th><th>passing_year</th><th>college</th><th>percent_gained</th></tr>";
  var tr2=" ";
  for(var i=0;i<edu.length;i++)
  {
    tr2=tr2+"<tr><td>"+edu[i].course+"</td><td>"+edu[i].passing_year+"</td><td>"+edu[i].college+"</td><td>"+edu[i].percent_gained+"</td></tr>";
  }
  //table.textContent= tr2;
  table.innerHTML=tr1+tr2;
}
//Skills
function Skills(sk){
  var h1=document.createElement("h1");
  h1.textContent="Skills";
  right.append(h1);
  var e=document.createElement("hr");
  right.append(e);
  var ul=document.createElement("ul");
  for(var i in sk){
    var li=document.createElement("li");
    li.innerHTML=sk[i].name+":"+sk[i].info;
    ul.append(li);
  }
  right.append(ul);
}
