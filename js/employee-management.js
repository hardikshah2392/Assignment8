/*eslint-env browser*/

emp_arr = [["Name","Title","Extenstion","Action"],
            ["Jake", "CEO", 10],
            ["Jane", "CTO", 11],
            ["June", "COO", 12],
            ["Jude", "VP", 13],
            ["Judy", "HR", 14]];

var $ = function(id) {
    "use strict";
    return window.document.getElementById(id);
};

var set_hidden = function () {
    $("name_error").setAttribute("hidden",true);
    $("title_error").setAttribute("hidden",true);
    $("ext_error").setAttribute("hidden",true);
}

var addEmployee = function () {
    "use strict";
    var empname, emptitle, empext, new_row;
    empname = $('name').value;
    emptitle = $('emp_title').value;
    empext = $('extension').value;
    set_hidden();
    if (empname === '' ) {
        $("name_error").removeAttribute("hidden");
    }else if (emptitle === '' ) {
        $("title_error").removeAttribute("hidden");
    }else if (empext === '' ) {
        $("ext_error").removeAttribute("hidden");
    }else   {
    set_hidden();
    new_row = [empname,emptitle,empext];
    $("emp_tbody").innerHTML = "";
    emp_arr.push(new_row);
    populate(); 
    } 
};
var createheader = function () {
    var i;
    var first_row = window.document.createElement('tr')
    for (i = 0; i < emp_arr[0].length; i += 1) {
        var cell = window.document.createElement('th');
        cell.innerHTML = emp_arr[0][i];
        first_row.appendChild(cell);
    }
    $("emp_tbody").appendChild(first_row);
};

var populate = function () {
    var i, j;
    var emp_tbody = $('emp_tbody');
    createheader();
    for (i=1; i < emp_arr.length; i += 1) {
        var row = window.document.createElement('tr');
        var delete_button = window.document.createElement('input');
        delete_button.id = i;
        delete_button.value = "Delete";
        delete_button.type = "button";
        delete_button.className = "delbtn";
        delete_button.onclick = deleteEmployee
        for (j=0; j < emp_arr[i].length; j += 1) {
            var cell = window.document.createElement('td');
            cell.innerHTML = emp_arr[i][j];
            row.appendChild(cell);
        };
        row.appendChild(delete_button);
        
        emp_tbody.appendChild(row);
    };
    count = $("count");
    number = emp_arr.length - 1;
    count.innerHTML = "Showing " + number + " employees.";
    
};

var deleteEmployee = function (del_ev) {
    "use strict";
    window.console.log("Event: ", del_ev.target.id);
    emp_arr.splice(del_ev.target.id,1);
    $("emp_tbody").innerHTML = "";
    populate();

};

window.addEventListener("load", function() {
    "use strict";
    $("name_error").setAttribute("hidden",true);
    $("title_error").setAttribute("hidden",true);
    $("ext_error").setAttribute("hidden",true);
    populate();
    $("add").addEventListener("click", addEmployee);
    $("name").focus();
    
});


