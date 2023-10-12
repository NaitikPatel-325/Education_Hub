function visualizer() {
    var nums = document.getElementById("input").value;
    const arr = nums.split(',').map(numStr => parseInt(numStr, 10));
    // console.log(arr);
}

function resetInput() {
    document.getElementById("input").value = "";
}
