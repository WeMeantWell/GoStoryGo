
window.onload = function() {
    const tagline = "You have found the easiest-to-use, most fun way to write, illustrate, and publish your own children's books!";
    let i = 0;
    function typeWriter() {
        if (i < tagline.length) {
            document.getElementById("tagline").innerHTML += tagline.charAt(i);
            i++;
            setTimeout(typeWriter, 40);
        }
    }
    setTimeout(() => {
        typeWriter();
        setTimeout(() => {
            window.location.href = "main.html";
        }, 5000);
    }, 1500);
};
