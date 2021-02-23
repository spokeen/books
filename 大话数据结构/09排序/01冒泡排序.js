function bubbleSort0(arr) {
    let count = 0;
    for(let outer = 0; outer < arr.length; outer++ ) {
        for(let inner = outer + 1; inner < arr.length; inner++) {
            count++;
            if(arr[outer] < arr[inner]) {
                let temp = arr[outer];
                arr[outer] = arr[inner];
                arr[inner] = temp;
            }
        }
    }
    console.log(count,arr);
}

bubbleSort0([2,3,5,1]);


function bubbleSort1(arr) {
    for(let outer = 0 ; outer < arr.length; outer++) {
        for(let inner = arr.length - 1 ; inner >= outer; inner--) {
            if(arr[outer] < arr[inner]) {
                let temp = arr[outer];
                arr[outer] = arr[inner];
                arr[inner] = temp;
            }
        }
    }
    console.log(arr);
}
bubbleSort1([2,3,5,1]);


function bubbleSort2(arr) {
    let swap = true;
    let count = 0;
    for(let outer = 0; outer < arr.length && swap; outer++) {
        swap = false;
        for(let inner = arr.length - 1; inner > outer; inner--) {
            count++;
            if(arr[outer] < arr[inner]) {
                let temp = arr[outer];
                arr[outer] = arr[inner];
                arr[inner] = temp;
                swap = true;
            }
        }
    }
    console.log(count,arr);
}
bubbleSort2([2,3,5,1]);

