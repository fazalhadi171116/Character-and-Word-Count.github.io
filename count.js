//var text = document.getElementById("textArea").value.length;
function mult(){
    var charcount = document.getElementById("textArea").value.length;
    document.getElementById("showdata").innerHTML="The total Charaters= "+ charcount;
    var wordcount = document.getElementById("textArea").value;
  var totalword=   wordcount.match(/(\w+)/g).length;;
  document.getElementById("showdata1").innerHTML="The total Words= "+ totalword;
    
}