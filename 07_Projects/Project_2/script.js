const form = document.querySelector('form')

// const height = parseInt(document.querySelector('#height').value)
// This Usecase Gives you Empty String

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const Weight = parseInt(document.querySelector('#Weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please Enter a Valid Height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please Enter a Valid Height ${height}`;
    }
    else {
        const bmi = (weight / ((height*height)/10000).toFixed(2))
        // Show the Result
        result.innerHTML = `<span>${bmi}</span>`
    }
})