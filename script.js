function create_label(tag, attname, attval, content) {
    var lab = document.createElement(tag);
    lab.setAttribute(attname, attval);
    lab.innerHTML = content;
    lab.setAttribute("style", "display:block");
    return lab;
}

function create_input(tag, attname1, attval1, attname2, attval2) {
    var inp = document.createElement(tag);
    inp.setAttribute(attname1, attval1);
    inp.setAttribute(attname2, attval2);
    inp.setAttribute("placeholder", attval2);
    return inp;
}

function create_input_type(tag, attname1, attval1, attname2, attval2) {
    var inp = document.createElement(tag);
    inp.className = attval1;
    inp.setAttribute(attname1, attval1);
    inp.setAttribute(attname2, attval2);
    inp.setAttribute("value", attval2);
    return inp;
}

function create_checkbox() {
    const checkboxOptions = [
        { id: "NorthIndian", label: "North Indian" },
        { id: "SouthIndian", label: "South Indian" },
        { id: "Chinese", label: "Chinese" },
        { id: "Japanese", label: "Japanese" },
        { id: "Seafood", label: "Seafood" }
    ];

    checkboxOptions.forEach(option => {
        var input = create_input_type("input", "type", "checkbox", "id", option.id);
        input.className = "checkbox";
        form1.append(input);
        var label = create_label("label", "for", option.id, option.label);
        form1.append(label);
    });
}

var cont = document.createElement("div");
cont.className = "container";

var r_ow = document.createElement("div");
r_ow.className = "row";

var col_1 = document.createElement("div");
col_1.className = "col-4";

var form1 = document.createElement("form");

var head = document.createElement("h3");
head.innerHTML = "Form Submission:";
form1.append(head);

var firstlabel = create_label("label", "for", "FirstName", "First Name:");
form1.append(firstlabel);

var firstinput = create_input("input", "type", "text", "id", "FirstName");
form1.append(firstinput);

var lastlabel = create_label("label", "for", "LastName", "Last Name:");
form1.append(lastlabel);

var lastinput = create_input("input", "type", "text", "id", "LastName");
form1.append(lastinput);

var add1label = create_label("label", "for", "AddresLine1", "Address Line 1:");
form1.append(add1label);

var add1input = create_input("input", "type", "text", "id", "AddresLine1");
form1.append(add1input);

var add2label = create_label("label", "for", "AddresLine2", "Address Line 2:");
form1.append(add2label);

var add2input = create_input("input", "type", "text", "id", "AddresLine2");
form1.append(add2input);

var pinlabel = create_label("label", "for", "PIN", "PIN:");
form1.append(pinlabel);

var pininput = create_input("input", "type", "text", "id", "PIN");
form1.append(pininput);

var genderlabel = create_label("label", "for", "Gender", "Gender:");
form1.append(genderlabel);

var genderinput1 = create_input_type("input", "type", "radio", "id", "male");
genderinput1.name = "gender";
form1.append(genderinput1);

var malelabel = create_label("label", "for", "male", "Male");
malelabel.setAttribute("style", "display:inline");
form1.append(malelabel);

var genderinput2 = create_input_type("input", "type", "radio", "id", "female");
genderinput2.name = "gender";
form1.append(genderinput2);

var femalelabel = create_label("label", "for", "female", "Female");
femalelabel.setAttribute("style", "display:inline");
form1.append(femalelabel);

var choiceoffood = create_label("label", "for", "coiceoffood", "Choice of Food: <i>(must choose at least 2 out of 5 options)</i>");
form1.append(choiceoffood);

create_checkbox();

var statelabel = create_label("label", "for", "State", "State:");
form1.append(statelabel);

var stateinput = create_input("input", "type", "text", "id", "State");
form1.append(stateinput);

var countrylabel = create_label("label", "for", "Country", "Country:");
form1.append(countrylabel);

var countryinput = create_input("input", "type", "text", "id", "Country");
form1.append(countryinput);

var but = document.createElement("button");
but.setAttribute("type", "button");
but.id = "but1";
but.innerHTML = "Submit";
but.setAttribute("style", "display:block");
but.addEventListener("click", data_2_table);

form1.append(but);

col_1.append(form1);

var col_2 = document.createElement("div");
col_2.className = "col-8";
col_2.setAttribute("style", "padding-left:50px;");

var head2 = document.createElement("h3");
head2.innerHTML = "Form Data updated in this table";

var table = document.createElement("table");
table.className = "table table-striped";

function tr() {
    var tr_ele = document.createElement("tr");
    return tr_ele;
}

function th(tagname, classname, value, content) {
    var th_ele = document.createElement(tagname);
    th_ele.setAttribute(classname, value);
    th_ele.innerHTML = content;
    return th_ele;
}

function td(tagname, content) {
    var td_ele = document.createElement(tagname);
    td_ele.innerHTML = content;
    return td_ele;
}

var thead = document.createElement("thead");
thead.className = "thead-dark";
var thead_tr = tr();
thead_tr.append(th("th", "scope", "col", "First Name"));
thead_tr.append(th("th", "scope", "col", "Last Name"));
thead_tr.append(th("th", "scope", "col", "Address Line 1"));
thead_tr.append(th("th", "scope", "col", "Address Line 2"));
thead_tr.append(th("th", "scope", "col", "PIN"));
thead_tr.append(th("th", "scope", "col", "Gender"));
thead_tr.append(th("th", "scope", "col", "Choice of Food"));
thead_tr.append(th("th", "scope", "col", "State"));
thead_tr.append(th("th", "scope", "col", "Country"));

thead.append(thead_tr);

var tbody = document.createElement("tbody");

var parent_div = document.createElement("div");
parent_div.className = "main";

table.append(thead, tbody);
parent_div.append(head2, table);
col_2.append(parent_div);

r_ow.append(col_1, col_2);
cont.append(r_ow);
document.body.append(cont);

function data_2_table() {
    var tbody_tr = tr();
    var firstname = document.getElementById("FirstName").value;
    var lastname = document.getElementById("LastName").value;
    var add1 = document.getElementById("AddresLine1").value;
    var add2 = document.getElementById("AddresLine2").value;
    var pin = document.getElementById("PIN").value;

    var gender = document.querySelector('input[name="gender"]:checked')?.id || '';

    var choice_val = "";
    var choice = document.querySelectorAll(".checkbox:checked");
    choice.forEach(ch => {
        if (choice_val.length != 0) {
            choice_val += ", ";
        }
        choice_val += ch.id;
    });

    var state = document.getElementById("State").value;
    var country = document.getElementById("Country").value;

    tbody_tr.append(td("td", firstname));
    tbody_tr.append(td("td", lastname));
    tbody_tr.append(td("td", add1));
    tbody_tr.append(td("td", add2));
    tbody_tr.append(td("td", pin));
    tbody_tr.append(td("td", gender));
    tbody_tr.append(td("td", choice_val));
    tbody_tr.append(td("td", state));
    tbody_tr.append(td("td", country));
    
    tbody.append(tbody_tr);
}
