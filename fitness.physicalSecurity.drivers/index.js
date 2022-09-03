var info = {};

info.dName = document.getElementById('name').value;
info.dn = document.getElementById('DN').value;
info.email = document.getElementById('email').value;
info.age = document.getElementById('age').value;
info.height = document.getElementById('height').value;
info.weight = document.getElementById('weight').value;
info.healthConcern = document.getElementById('healthConcern').value;
info.stressLevel = document.querySelector('stressLevel').value;
info.stressCause = document.getElementById('stressCause').value;
info.concernAndNeeds = document.getElementById('concernAndNeeds').value;

allInfo.push(info);
console.log(info);

// let btn = document.getElementById('btn');

// btn.addEventListener('submit', callbackFunction);

// function callbackFunction(event) {
//     event.preventDefault();
//     var formData = new FormData();
//     const myFormData = new FormData(event.target);
// }


// console.log(info.myFormData);
console.log(info.dname);
console.log(info.dn);
console.log(info.email);
console.log(info.age);
console.log(info.height);
console.log(info.weight);
console.log(info.healthConcern);
console.log(info.stressLevel);
console.log(info.stressCause);
console.log(info.concernAndNeeds);

const form = document.getElementById('contact-form');
form.addEventListener('submit', callbackFunction);

function callbackFunction(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    console.log(myFormData)
}