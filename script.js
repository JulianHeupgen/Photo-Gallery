
let images = ['./img/canyon0.jpg','./img/canyon1.jpg','./img/canyon2.jpg','./img/canyon3.jpg','./img/canyon4.jpg','./img/canyon5.jpg','./img/canyon6.jpg','./img/canyon7.jpg','./img/canyon8.jpg','./img/canyon9.jpg','./img/canyon10.jpg','./img/canyon11.jpg','./img/canyon12.jpg','./img/canyon13.jpg','./img/canyon14.jpg','./img/canyon15.jpg','./img/canyon16.jpg'];

function render() {

    let container = document.getElementById('fotos');
    container.innerHTML = '';

    for(let i=0; i < images.length; i++) {

        container.innerHTML += `<div class="foto" onclick="showImage(${i})">
                                    <img src="${images[i]}">
                                </div>`;
    }

}


function showImage(i) {

    document.getElementById('showImage').style.display = "flex";
    document.getElementById('selectedImage').src = images[i];
}


function goBack() {

    document.getElementById('showImage').style.display = "none";
    document.getElementById('selectedImage').src = "";
}


function nextImage() {

    let imageNow = document.getElementById('selectedImage').getAttribute('src');
    let nextImage = '';

    for ( let i=0; i < images.length; i++ ) {
        if(images[i] == imageNow) {
            if(i == '16') {
                nextImage = images[0];
            } else {
                nextImage = images[i+1];
            }
        }
    }

    document.getElementById('selectedImage').src = nextImage;
}


function lastImage() {

    let imageNow = document.getElementById('selectedImage').getAttribute('src');
    let lastImage = '';

    for ( let i=16; i >= 0; i-- ) {
        if(images[i] == imageNow) {
            if(i == '0') {
                lastImage = images[16];
            } else {
                lastImage = images[i-1];
            }
        }
    }

    document.getElementById('selectedImage').src = lastImage;
}

