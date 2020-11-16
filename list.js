// let table = document.getElementById("grocery_table");

// function ajax()
// {   
    
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function()
//     {
//         if (this.readyState==4 && this.status==200)
//         {
//             var list = JSON.parse(xhttp.response);
//             table.innerHTML("list.grocery.Name");
//             // var item = list.grocery;
//             // console.log(table)
//         //     for(var i=0;i<item.length;i++)
//         //     {
//         //         var output = "<tr>";
//         //         output += "<td>" + "item[i].name" + "</td";
//         //         output += "/tr>";
//         //     }
//         //     table.append(output);
//          }
       
//     }

// xhttp.open("GET","list.json",true);
// xhttp.send();
// }
//--------------------------------------------------------

// $(document).ready(function()
// {
//     $.getJSON("list.json",function(data)
//     {
//         var list = "";
        
//         $.each(data,function(key,value)
//         {
//             console.log(data.Name);
//             list += '<tr>';
//             list += '<td>' + value.SerialNumber + '</td>';
//             list += '<td>' + value.Name + '</td>';
//             list += '<td>' + value.Quantity + '</td>';
//             list += '<td>' + value.Unit + '</td>';
//             list += '<td>' + value.Department + '</td>';
//             list += '<td>' + value.Notes + '</td>';
//             list += '</tr>';
//         });
//         $("#grocery_table").append(list);
//     });
// });


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        // console.log(obj);
        var list = obj.grocery;
        var output = ""
        console.log(list[1].SerialNumber)
        for (var i = 0; i < list.length; i++) {
            output += "<tr>"
            output += "<td>" + list[i].SerialNumber + "</td>";
            output += "<td>" + list[i].Name + "</td>";
            output += "<td>" + list[i].Quantity + "</td>";
            output += "<td>" + list[i].Unit + "</td>";
            output += "<td>" + list[i].Department + "</td>";
            output += "<td>" + list[i].Notes + "</td>";
            output += "</tr>"

        }
        document.getElementById("grocery_table").innerHTML = output;
    }
}
xhttp.open("GET", "list.json", true);
xhttp.send();