const fs = document.getElementById("from-select");
const ts = document.getElementById("to-select");
const fi = document.getElementById("from-input");
const ti = document.getElementById("to-input");
const err = document.getElementById("error");

let frm = "Binary", to = "Binary";
// console.log(fs.options);

fs.addEventListener("change", function () {
    frm = fs.options[fs.selectedIndex].text;
    fi.placeholder = frm + " Number";
});

ts.addEventListener("change", function () {
    to = ts.options[ts.selectedIndex].text;
    ti.placeholder = to + " Number";
});

fi.addEventListener("input", function () {
    err.style.display = "none";
});

let fv;
document.getElementById("convert-button").addEventListener("click", function () {
    switch (frm) {
        case "Binary":
            fv = fi.value;
            if (/^[01]*$/.test(fv)) {
                switch (to) {
                    case "Decimal": ti.value = parseInt(fv, 2);
                        break;
                    case "Hexadecimal": ti.value = parseInt(fv, 2).toString(16).toUpperCase();
                        break;
                    case "Octal": ti.value = parseInt(fv, 2).toString(8);
                        break;
                    default: ti.value = fv;
                }
            } else {
                err.innerText = "Invalid " + frm + " Number";
                err.style.display = "block";
                ti.value = "";
            }
            break;

        case "Decimal":
            fv = fi.value;
            if (/^[0-9]*$/.test(fv)) 
            {
                switch (to) 
                {
                    case "Binary": ti.value = Math.abs(fv).toString(2);
                        break;
                    case "Hexadecimal": ti.value = Math.abs(fv).toString(16).toUpperCase();
                        break;
                    case "Octal": ti.value = Math.abs(fv).toString(8);
                        break;
                    default: ti.value = fv;
                }
            } 
            else 
            {
                err.innerText = "Invalid " + frm + " Number";
                err.style.display = "block";
                ti.value = "";
            }
            break;

        case "Hexadecimal":
            fv = fi.value;
            if (/^[0-9a-fA-F]*$/.test(fv)) {
                switch (to) {
                    case "Binary": ti.value = parseInt(fv, 16).toString(2);
                        break;
                    case "Decimal": ti.value = parseInt(fv, 16);
                        break;
                    case "Octal": ti.value = parseInt(fv, 16).toString(8);
                        break;
                    default: ti.value = fv;
                }
            } 
            else 
            {
                err.innerText = "Invalid " + frm + " Number";
                err.style.display = "block";
                ti.value = "";
            }
            break;

        case "Octal":
            fv = fi.value;
            if (/^[0-7]*$/.test(fv)) {
                switch (to) {
                    case "Binary": ti.value = parseInt(fv, 8).toString(2);
                        break;
                    case "Decimal": ti.value = parseInt(fv, 8);
                        break;
                    case "Hexadecimal": ti.value = parseInt(fv, 8).toString(16).toUpperCase();
                        break;
                    default: ti.value = fv;
                }
            } 
            else 
            {
                err.innerText = "Invalid " + frm + " Number";
                err.style.display = "block";
                ti.value = "";
            }
            break;
    }
});
