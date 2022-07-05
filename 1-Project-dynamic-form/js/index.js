const labelInputFeild = document.querySelector('#inputLabel');
const form = document.querySelector('#form');
const inputType = document.querySelector('#inputType');

labelInputFeild.addEventListener('keyup', (event) => {
    const keyPressed = event.key;
    if (keyPressed === 'Enter') {
        //code
        const type = inputType.value;
        const label = labelInputFeild.value;
        let inputCreater = null;

        const labelCreater = document.createElement('label');
        const divCreater = document.createElement('div');

        type === "textarea" ? inputCreater = document.createElement('textarea') : inputCreater = document.createElement('input');

        labelCreater.innerHTML = label;
        inputCreater.type = type;
        inputCreater.classList.add('form-control');
        labelCreater.classList.add('form-label');
        divCreater.classList.add('mb-3');

        if (type != 'submit') {
            divCreater.appendChild(labelCreater);
        } else {

        }
        divCreater.appendChild(inputCreater);

        form.appendChild(divCreater);
    }
});