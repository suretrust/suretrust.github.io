function showForm() {
    var form = document.getElementById("addForm");
    var homeDtl = document.getElementById("homeDtl");
    var view = document.getElementById("view");

    if (form.style.display === "none") {
        form.style.display = "block";
        homeDtl.style.display = "none";
        view.style.display = "none";
    } else {
        form.style.display = "none";
        homeDtl.style.display = "block";
        homeDtl.style.display = "none";
    };
};

function hideForm() {
    var form = document.getElementById("addForm");
    var homeDtl = document.getElementById("homeDtl");
    var view = document.getElementById("view");

    if (form.style.display === "block") {
        form.style.display = "none";
        homeDtl.style.display = "block";
        view.style.display = "none";
    } else {
        form.style.display = "block";
        homeDtl.style.display = "none";
        view.style.display = "none";
    };
};

var form = document.getElementById("addForm");
var addressBook = [];
var view = document.getElementById("view");
var homeDtl = document.getElementById("homeDtl");
    

function addContact(){
    
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;

    

    if (name !== "" && number !== ""){

        function Contact(name,number,email) {
            this.name = name;
            this.number = number;
            this.email = email;
        };

        var newContact = new Contact(name,number,email);

        addressBook.push(newContact);

        console.log(addressBook);
        
        clearForm();
        showAddressBook()
    };
};

function clearForm() {
    var formFields = document.querySelectorAll(".form-control");

    for (var i = 0; i < formFields.length; i++) {
         formFields[i].value = "";
    };
};


function showAddressBook(){
    var form = document.getElementById("addForm");
    var view = document.getElementById("view");
    var homeDtl = document.getElementById("homeDtl");
    
    form.style.display = "none";
    homeDtl.style.display = "none";
    view.style.display = "block";
        
    view.innerHTML = '';
    var str = '<div class="view">';
    str += '<h1 class="text-uppercase h1"><strong>Contacts</strong></h1><br />'
    for(var n = 0; n < addressBook.length; n++){
        str += '<div class="btn-group-xs h11 text-capitalize"><a class="">' + addressBook[n].name + '</a>';
            str += '<button class="btn btn-primary margin-left"' + n + '">Delete</button><button class="btn btn-primary margin-left"' + n + '">Edit</button></div>';
    };
        
    str += '</div>';

    view.innerHTML += str;
};

function viewContact() {
    var view = document.getElementById("view");

    view.innerHTML = '';

    var show = '<div class="view">';

    show += '<h1 class="text-uppercase h1"><strong>Contact details</strong></h1><br />'
    show += `${nameHid}`
    show += '</div>';
    

    view.innerHTML += show;
}