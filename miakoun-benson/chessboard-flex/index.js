function showMoves(event) {
    const index = event.target.id;

    switch(index) {
        case "b5":
            document.querySelector('#b5').classList.add('origin');
            document.querySelector('#b5').classList.add('float');
            document.querySelector('#body').classList.add('blur');
            document.querySelector('#b13').classList.add('moves');
            document.querySelector('#b21').classList.add('moves');
            break;
        case "b6":
            document.querySelector('#b6').classList.add('origin');
            document.querySelector('#b6').classList.add('float');
            document.querySelector('#b13').classList.add('moves');
            document.querySelector('#b20').classList.add('moves');
            document.querySelector('#b27').classList.add('moves');
            document.querySelector('#b34').classList.add('moves');
            document.querySelector('#b41').classList.add('moves');
            break;
        case "b7":
            document.querySelector('#b7').classList.add('origin');
            document.querySelector('#b7').classList.add('float');
            document.querySelector('#b13').classList.add('moves');
            document.querySelector('#b22').classList.add('moves');
            document.querySelector('#b24').classList.add('moves');
            break;
        case "b14":
            document.querySelector('#b14').classList.add('origin');
            document.querySelector('#b14').classList.add('float');
            document.querySelector('#b22').classList.add('moves');
            document.querySelector('#b30').classList.add('moves');
            break;
        case "b15":
            document.querySelector('#b15').classList.add('origin');
            document.querySelector('#b15').classList.add('float');
            document.querySelector('#b23').classList.add('moves');
            document.querySelector('#b31').classList.add('moves');
            break;
        case "b19":
            document.querySelector('#b19').classList.add('origin');
            document.querySelector('#b19').classList.add('float');
            document.querySelector('#b2').classList.add('moves');
            document.querySelector('#b13').classList.add('moves');
            document.querySelector('#b25').classList.add('moves');
            document.querySelector('#b34').classList.add('moves');
            document.querySelector('#b36').classList.add('moves');
            break;
    }   
}

function hideMoves(event) {
    const index = event.target.id;

    switch(index) {
        case "b5":
            document.querySelector('#b5').classList.remove('origin');
            document.querySelector('#b5').classList.remove('float');
            document.querySelector('#body').classList.remove('blur');
            document.querySelector('#b13').classList.remove('moves');
            document.querySelector('#b21').classList.remove('moves');
            break;
        case "b6":
            document.querySelector('#b6').classList.remove('origin');
            document.querySelector('#b6').classList.remove('float');
            document.querySelector('#b13').classList.remove('moves');
            document.querySelector('#b20').classList.remove('moves');
            document.querySelector('#b27').classList.remove('moves');
            document.querySelector('#b34').classList.remove('moves');
            document.querySelector('#b41').classList.remove('moves');
            break;
        case "b7":
            document.querySelector('#b7').classList.remove('origin');
            document.querySelector('#b7').classList.remove('float');
            document.querySelector('#b13').classList.remove('moves');
            document.querySelector('#b22').classList.remove('moves');
            document.querySelector('#b24').classList.remove('moves');
            break;
        case "b14":
            document.querySelector('#b14').classList.remove('origin');
            document.querySelector('#b14').classList.remove('float');
            document.querySelector('#b22').classList.remove('moves');
            document.querySelector('#b30').classList.remove('moves');
            break;
        case "b15":
            document.querySelector('#b15').classList.remove('origin');
            document.querySelector('#b15').classList.remove('float');
            document.querySelector('#b23').classList.remove('moves');
            document.querySelector('#b31').classList.remove('moves');
            break;
        case "b19":
            document.querySelector('#b19').classList.remove('origin');
            document.querySelector('#b19').classList.remove('float');
            document.querySelector('#b2').classList.remove('moves');
            document.querySelector('#b13').classList.remove('moves');
            document.querySelector('#b25').classList.remove('moves');
            document.querySelector('#b34').classList.remove('moves');
            document.querySelector('#b36').classList.remove('moves');
            break;
    }
}

const boxes = document.querySelectorAll('.box');

if(boxes) {
    counter = 1;
    boxes.forEach(item => {
        item.id = "b" + counter;
        counter++;
        item.addEventListener('mouseover', showMoves)
        item.addEventListener('mouseout', hideMoves)
    });
}

const dropdown = document.querySelector('.dropdown');

if(dropdown) {
    dropdown.addEventListener('mouseover', showButton);
    dropdown.addEventListener('mouseout', hideButton);
}

function showButton(event) {
    const index = event.target.id;

    switch(index) {
        case "grid":
            document.querySelector('#grid').innerHTML = 'Flexbox';
            document.querySelector('#grid').classList.add('flex');
            break;
        case 'flex':
            document.querySelector('#flex').innerHTML = 'Grid';
            document.querySelector('#flex').classList.add('grid');
            break;
    }
}

function hideButton(event) {
    const index = event.target.id;

    switch(index) {
        case "grid":
            document.querySelector('#grid').innerHTML = 'Grid';
            document.querySelector('#grid').classList.remove('flex');
            break;
        case 'flex':
            document.querySelector('#flex').innerHTML = 'Flexbox';
            document.querySelector('#flex').classList.remove('grid');
            break;
    }
}
