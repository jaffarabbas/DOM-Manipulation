const handler = document.querySelector('#title');
const err = document.querySelector('#error');
const validation = (str) => {
    return (!str) ? "Name is Required" : (str.length > 5) ? "Length should less then 5 " : null;
}

handler.addEventListener('keyup', (event) => {
    const inputValue = handler.value;
    const error = validation(inputValue.trim());
    if (error) {
        err.style.display = 'block';
        err.innerHTML = error;
    } else {
        err.style.display = 'none';
    }
});