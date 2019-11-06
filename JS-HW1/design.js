function Book(bookId, title,authorName ) {
  this.bookId = bookId;
  this.title = title;
  this.authorName = authorName;
}
var obj = [ new Book(1, "The Baskin", "John Anderson"),
              new Book(2, "World History", "Matthew Smith"),
              new Book(3, "Algorithm Basic", "Kaiser Perm"),
              new Book (4, "Data Structure", "Sushang Man"),
              new Book(5, "Android Studio", "Brooke Stang"),
              new Book(6, "Combinotorics", "Dan Mortezapour"),
              new Book(7, "Python Advanced", "Mortezapour Bennedict"),
              new Book(8, "Walking For Wellness", "Jonathan"),
              new Book(9, "LEP 400", "Sheila Tabaka"),
              new Book(10, "SHOT Brew ", "Tim Baske"),
              new Book(11, "Dreadful Night", "Kenny Smith"),
              new Book(12, "Web Programming", "Randy Cassen"),
              new Book (13, "Track and Field", "Denitsa Dobrev"),
              new Book (14, "Herbal Life", "Verginia Ginny"),
              new Book (15, "Zumba Recruit", "Anjali Simpson"),
              new Book (16, "The BPA", "JustinAndrew"),             
              new Book (17, "Elbert and Gilbert", "Christina Louige"),
              new Book (18, "Eyes of Devil", "Lindsey Burke"),
              new Book (19, "Wide Awake", "Samantha Bohl"),
              new Book  (20, "My Whole New World", "Emma Heesters"),
              new Book  (21, "New World", "Shawn Herron")];
        
//load the table by fetching data from obj 
function tblLoad(obj) {
  var tbl = document.getElementById("tblBook");
  var i, j;
  
  for(i = 0; i < obj.length; i++) {
    var book1 = obj[i];
    var row = document.createElement("tr");
    var properties = ["bookId", "title", "authorName"];
    
    for(j = 0; j < properties.length; j++) {
        var dataCell = document.createElement("td");
        dataCell.innerHTML = book1[properties[j]];
        row.appendChild(dataCell);
    }
    
    tbl.appendChild(row);
  }
}
var listPerPage = 5;
var numberOfButton = Math.ceil(obj.length/listPerPage);

//for default 1-4 when started 
document.addEventListener("DOMContentLoaded", function() {
  listing(0,listPerPage-1);
  calcButtons();
});
    

//calculate no of buttons depending on obj
function calcButtons(){
    var txt="";
    txt += `<button onclick="listing(0,${listPerPage-1})" >Previous</button>
        `
    for(i=0;i<numberOfButton;i++){
        var startIndex = i*listPerPage;
        var endIndex = startIndex + listPerPage -1;
        txt += `<button onclick="listing(${startIndex},${endIndex})" >${i+1}</button>
        `
    }
    txt += `<button onclick="listing(${startIndex},${endIndex})" >End</button>
        `
    document.getElementById("page").innerHTML = txt;
  }

  //show objects per list
  function listing(start, end){
    var app = "";
    if(end>(obj.length-1)){
      end= obj.length-1;
    }
    for (i=start; i<= end; i++){
      app +=`
        <tr>
        <td> ${obj[i].bookId}</td>
        <td> ${obj[i].title}</td>
        <td> ${obj[i].authorName}</td>
        </tr>
      `
    }
    document.getElementById("calc").innerHTML = app;
  }