//var database = firebase.database();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

//Listen for form submission
document.getElementById("contactform").addEventListener('submit', submitForm);

//Submit Form
function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    //Save message
    saveMessage(name, company, email, phone, message);
}


function getInputVal(id){
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}
