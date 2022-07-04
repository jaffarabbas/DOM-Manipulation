const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
    const name = document.querySelector('#name');
    const address = document.querySelector('#address');

    if (name.value == "" && address.value == "") {
        alert("Please enter all feilds");
    } else {
        console.log(name.value, address.value);
    }
});