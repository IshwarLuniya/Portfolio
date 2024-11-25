let b = document.querySelector("button");
        let bod = document.querySelector("body");
        let hom = document.getElementById("home");
        let about = document.getElementById("about");
        let work = document.getElementById("work");
        let archive = document.getElementById("archive");

        let mode = "dark";
        b.addEventListener("click",() => {
            if(mode === "dark"){
                mode = "light";
                bod.style.backgroundColor = "white";
                bod.style.color = "black";
                b.style.color ="black";
                hom.style.color = "black";
                about.style.color = "black";
                work.style.color = "black";
                archive.style.color = "black";
            }
            else{
                mode = "dark";
                bod.style.backgroundColor = "black";
                bod.style.color = "white"
                b.style.color = "white";
                hom.style.color = "white";
                about.style.color = "white";
                work.style.color = "white";
                archive.style.color = "white";
            }
            console.log(mode);
        });