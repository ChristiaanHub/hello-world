document.addEventListener("DOMContentLoaded", () => {
    let heading = document.querySelector("h1");

    setInterval(function () {
            if (heading.style.color == "red") {
            heading.style.color = "blue";
            }
            else {
                heading.style.color = "red";
            }
            console.log("Hello world!!!")
        }, 1000);
    }
)