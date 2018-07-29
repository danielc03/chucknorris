

const getJokes = (e) => {
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/random/${number}`, true);

    xhr.onload = () => {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            console.log(response);
        } 
    }

    xhr.send();
    e.preventDefault();
}




document.querySelector('.get-jokes').addEventListener('click', getJokes);