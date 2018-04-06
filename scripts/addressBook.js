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
    }
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
    }
};

var addressBook = [];

function Contact(name,number,email) {
    this.name = name;
    this.number = number;
    this.email = email;
};

function addContact(){
    event.preventDefault();

    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
        
    var newContact = new Contact(name,number,email);

    addressBook.push(newContact);
    console.log(addressBook);

    clearForm();
    showAddressBook();

};

function clearForm() {
    var formFields = document.querySelectorAll(".form-control");

    for (var i = 0; i < formFields.length; i++) {
         formFields[i].value = "";
    }
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
    str += '<h1 class="text-uppercase h1"><strong>Contacts</strong></h1><br />';
    for(var n = 0; n < addressBook.length; n++){
        str += '<div class="btn-group-xs h11 text-capitalize" ><a id="nameID" data-id="' + n + '" onclick="viewContact()">' + addressBook[n].name + '</a>';
        str += '<button class="btn btn-primary margin-left deleteBtn" id="deleteBtn" onclick="deleteContact()" data-id="' + n + '">Delete</button><button class="btn btn-primary margin-left" id="editBtn" onclick="editContact()" data-id="' + n + '">Edit</button></div>';
    }
        
    str += '</div>';

    view.innerHTML += str;
};

function viewContact() {
    var view = document.getElementById("view");

    var nameID = document.getElementById("nameID");


    var datID = nameID.dataset.id;
    
    console.log(datID);

    view.innerHTML = '';

    var show = '<div class="view">';

    show += '<h1 class="text-uppercase h1"><strong>Contact details</strong></h1><br />';
    show += `<p class="h11"> Name: ${addressBook[datID].name}<br/> Phone Number: ${addressBook[datID].number}<br/> Email: ${addressBook[datID].email}</p>`;
    show += '<button class="btn btn-primary margin-left" id="backBtn" onclick="showAddressBook()">Back to Contacts</button>';
    show += '</div>';
    
    view.innerHTML += show;
};

function deleteContact() {
    var deleteBtn = document.getElementById("deleteBtn");
    var dataID = deleteBtn.dataset.id;

    console.log(dataID);

    alert("Warning: Deleted contacts are lost forever");
    addressBook.splice(dataID, 1);
    showAddressBook();
};

function editContact() {
    var editBtn = document.getElementById("editBtn");
    var dataID = editBtn.getAttribute("data-id");

    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;

    var editForm = document.getElementById("editForm");
    var form = document.getElementById("addForm");
    var homeDtl = document.getElementById("homeDtl");
    var view = document.getElementById("view");

    if (editForm.style.display === "none") {
        editForm.style.display = "block";
        form.style.display = "none";
        homeDtl.style.display = "none";
        view.style.display = "none";
    } else {
        form.style.display = "none";
        view.style.display = "block";
        homeDtl.style.display = "none";
        editForm.style.display = "none";
    }
};
