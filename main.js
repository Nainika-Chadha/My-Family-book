var images= ["father.png","mother.jpg","grandma.png","sister.jpg"];
var names= ["Nitin Chadha","Sonia Chadha","Ravi Bala Chadha","Samika/Sarah Chadha"];
if(i == 4)
{
 i=0;
}
  
  var i=0;
function change_image(){
  document.getElementById("Monkeyimage").src=images[i];
  document.getElementById("family_member_names").innerHTML=names[i];
i=i+1;}