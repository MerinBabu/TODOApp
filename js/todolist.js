$(function() {

    try {

        let count = 0;
        $("#tb").on("change", ":checkbox", function() {

            var checkstatus = this.checked;

            var promise1 = new Promise(function(resolve, reject) {

                if (checkstatus == true) {
                    count = count + 1;
                    console.log(count);
                    if (count >= 5) {
                        resolve("Congrats! 5 Tasks have been completed");
                    }
                } else {
                    count = count - 1;
                    console.log(count);
                    if (count >= 5) {
                        resolve("Congrats! 5 Tasks have been completed");
                    }

                }
            });
            promise1.then(function(r) {
                alert(r);

            });

        });


        let tbl1 = document.getElementById("tb");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let List = JSON.parse(this.responseText);
                let output = "<tr><th>User ID</th><th>Id</th><th>Title</th><th>Completed</th></tr>";
                for (let i = 0; i < List.length; i++) {
                    output += "<tr>";
                    output += "<td>" + List[i].userId + "</td>";
                    output += "<td>" + List[i].id + "</td>";
                    output += "<td>" + List[i].title + "</td>";
                    output += "<td><input type='checkbox' id='chkbox" + "'" + ((List[i].completed == true) ? 'disabled' : "'") + " ></td>";

                }
                tbl1.innerHTML = output;
            }


        }
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
        xhttp.send();


    } catch (e) {

        $("#listdiv").html = e;
    }

});