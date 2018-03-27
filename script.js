document.getElementById('submit').addEventListener("click", function(event) {

    var newTitle = document.createElement("h2");
    newTitle.innerHTML = document.getElementById("title").value;
    
    var newName = document.createElement("h3");
    newName.innerHTML = document.getElementById("user").value;
    
    var newComment = document.createElement("p");
    newComment.innerHTML = document.getElementById("message").value;

    document.getElementById("user").value="";
    document.getElementById("pass").value="";
    document.getElementById("title").value="";
    document.getElementById("message").value="";

    document.getElementById("comments").appendChild(newTitle);
    document.getElementById("comments").appendChild(newName);
    document.getElementById("comments").appendChild(newComment);

});