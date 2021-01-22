// if counter not in storage, then set it
if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}

function count() {
    // retrive
    let counter = localStorage.getItem('counter');

    counter++;
    document.querySelector('h1').innerHTML = counter;
    // save
    localStorage.setItem('counter', counter);
}

document.addEventListener('DOMContentLoaded', function () {
    // Just after loading html set count value to current value in storage
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onclick = count;
})
