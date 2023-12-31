async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function visualizer() {
    var nums = document.getElementById("input").value;

    
    if( nums === ""){
        alert("Please enter some values");
        return;
    } 

    const arr = nums.split(',').map(numStr => parseInt(numStr, 10)); 


    var resultContainer = document.getElementById("result");

    resultContainer.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        var elementBox = document.createElement("div");
        elementBox.className = "array-element";
        elementBox.textContent = arr[i];
        resultContainer.appendChild(elementBox);
    }
}

async function resetInput() {
    document.getElementById("input").value = "";
    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "";
}


async function swappedarray(arr) {
    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        var elementBox = document.createElement("div");
        elementBox.className = "array-element"; 
        elementBox.textContent = arr[i];
        elementBox.style.backgroundColor = "green"; 
        resultContainer.appendChild(elementBox);
    }
}

async function selectionSort(arr,speed) {
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            updateVisualizationSelection(arr,i,minIndex,speed);
            await sleep(2000); 
            var temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    swappedarray(arr);
}

async function bubbleSort(arr,speed) {
    var n = arr.length;
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                
                swapped = true;
                updateVisualization(arr,i,i+1,speed);
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                await sleep(1000); 
            }
        }
    } while (swapped);
    swappedarray(arr);
}





async function updateVisualizationSelection(arr, n, p ,speed) {
    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "";
    
    for (let i = 0; i < arr.length; i++) {
        var elementBox = document.createElement("div");
        elementBox.className = "array-element";
        elementBox.textContent = arr[i];

        if (i == n) {
            elementBox.style.backgroundColor = "red";
            gsap.to(elementBox, {
                duration: speed, 
                right: -58*(p-n),
            });
           
        } else if (i == p) {
            elementBox.style.backgroundColor = "red";
            gsap.to(elementBox, {
                duration: speed,
                left: -58*(p-n),
            });
            
        } else {
            elementBox.style.backgroundColor = "lightblue";
        }
        
        resultContainer.appendChild(elementBox);
    }
}


async function updateVisualization(arr, n, p ,speed) {
    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "";
    
    for (let i = 0; i < arr.length; i++) {
        var elementBox = document.createElement("div");
        elementBox.className = "array-element";
        elementBox.textContent = arr[i];

        if (i == n) {
            elementBox.style.backgroundColor = "red";
            gsap.to(elementBox, {
                duration: speed, 
                right: "-57px",
            });
           
        } else if (i == p) {
            elementBox.style.backgroundColor = "red";
            gsap.to(elementBox, {
                duration: speed,
                left: "-57px",
            });
            
        } else {
            elementBox.style.backgroundColor = "lightblue";
        }
        
        resultContainer.appendChild(elementBox);
    }
}


async function sortArray() {
    var nums = document.getElementById("input").value;

    if( nums === ""){
        alert("Please enter some values");
        return;
    }   

    const arr = nums.split(',').map(numStr => parseInt(numStr, 10));
    // const arr = [5, 4, 3, 2, 1];
    const speed2 = parseFloat(document.getElementById("speed").value); 

    // console.log(speed);

    speed = 1.25 - speed2/100;
    // speed = 2;

    const option = document.getElementById("option").value;

    if (option == "bubbleSort"){
        await bubbleSort    (arr,speed);
    }
    else if (option == "selectionSort"){
        await selectionSort(arr,speed);
    }
}
