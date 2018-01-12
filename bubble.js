var array = [1, 45, 556, 677, 234, 576, 890, 900, 10, 11, 23, 24];

function bubble(array) {
    var swapped;
    do {
        swapped = false;
        for(var i = 0; i < array.length -1; i++) {
            if(array[i] > array[i + 1]) {
                var temp = array[i];
                array[i] = array[i + 1];
                array [i + 1] = temp;
                swapped = true;
            }
        }
    } while(swapped);
}
bubble(array);
console.log(array);