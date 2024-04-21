document.addEventListener('DOMContentLoaded', function() {
    var textElement = document.getElementById('typing-text');
    var texts = ["Developer", "Designer", "Dreamer"];
    var index = 0;
    var professionIndex = 0;
    var typingSpeed = 100; // Adjust typing speed here (milliseconds)
    var deletingSpeed = 50; // Adjust deleting speed here (milliseconds)
    var delayBeforeNextProfession = 1000; // Delay before switching to the next profession (milliseconds)

    function animateText() {
        var profession = texts[index];
        var currentText = textElement.innerText;
        var length = currentText.length;

        if (professionIndex < profession.length) {
            if (currentText !== "I'm a " + profession) {
                textElement.innerText = "I'm a " + profession.substring(0, professionIndex + 1);
                professionIndex++;
                setTimeout(animateText, typingSpeed);
            } else {
                setTimeout(function() {
                    setTimeout(deleteText, delayBeforeNextProfession);
                }, delayBeforeNextProfession);
            }
        } else {
            setTimeout(deleteText, delayBeforeNextProfession);
        }
    }

    function deleteText() {
        var profession = texts[index];
        var currentText = textElement.innerText;
        var length = currentText.length;

        if (length > 3) {
            textElement.innerText = currentText.substring(0, length - 1);
            setTimeout(deleteText, deletingSpeed);
        } else {
            textElement.innerText = "I'm ";
            index = (index + 1) % texts.length;
            professionIndex = 0;
            animateText();
        }
    }

    animateText();
});

