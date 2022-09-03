const form = document.getElementById("contact-form");


form.addEventListener("submit", (e) => {

    e.preventDefault();

    const myFormData = new FormData(e.target);

    const formDataObj = Object.fromEntries(myFormData.entries());

    // output data
    const output = document.querySelector(".output-pre");
    output.innerText = JSON.stringify(formDataObj, null, 2);
    console.log(output);
});
