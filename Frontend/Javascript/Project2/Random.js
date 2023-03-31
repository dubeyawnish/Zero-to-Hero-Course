const randomNumberGenerator = () => {
    let min = document.querySelector('#num1').value;
    let max = document.querySelector('#num2').value;
    //debugger;

    if (min === '' || max === '') {
        alert("one or more filds are empty");
        return;
    }
    min = parseInt(min);
    max = parseInt(max);
    let randomno = Math.floor(Math.random() * (max - min + 1) + min);
    document.querySelector('#result').innerHTML = ` Random Number is ${Math.round(randomno)}`;
}