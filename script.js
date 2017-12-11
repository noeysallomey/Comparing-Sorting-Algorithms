

var sorted_array = []
var rev_sorted_array = []
var random_array = []

function Populate(){
	//sorted array populate
	for(var i = 0; i < 100; i++){
		sorted_array.push(i)
	}

	//reverse sorted array populate
	for(var i = 100; i > 0; i++){
		rev_sorted_array.push(i)
	}

	//sorted array populate
	for(var i = 0; i < 100; i++){
		random_array.push(Random(100))
	}
}

function GetData(type, array){
	var temp = []
	switch(type){
        case 0:
            for(var length = 0; length<100; length++){
                temp.push(selectionSort(array.slice(0,length)));
            }
            break;
        case 1:
            for(var length = 0; length<100; length++){
                temp.push(bubbleSort(array.slice(0,length)));
            }
            break;
        case 2: 
            for(var length = 0; length<100; length++){
                temp.push(insertionSort(array.slice(0,length)));
            }
            break;
        case 3: 
            for(var length = 0; length<100; length++){
                gaps = [];
                for(var g = length; g/2 > 0; g = Math.floor(g/2)){
                    gaps.push(Math.floor(g));
                }
                temp.push(shellSort(array.slice(0,length)));
            }
            break;
        case 4: 
            for(var length = 0; length<100; length++){
                gaps = [57,23,10,4,1];
                temp.push(shellSort(array.slice(0,length)));
            }
            break;
        case 5: 
            for(var length = 0; length<100; length++){
                temp.push(bucketSort(array.slice(0,length)));
            }
            break;
        case 6: 
            for(var length = 0; length<100; length++){
                temp.push(radixCountingSort(array.slice(0,length)));
            }
            break;
        case 7: 
            for(var length = 0; length<100; length++){
                temp.push(radixInsertionSort(array.slice(0,length)));
            }
            break;
        case 8: 
            for(var length = 0; length<100; length++){
                temp.push(mergeSort(array.slice(0,length)));
            }
            break;
        case 9: 
            for(var length = 0; length<100; length++){
                temp.push(quickSort(array.slice(0,length)));
            }
            break;
    }

    return temp;
}

  // Initialize a Line chart in the container with the ID chart1
  new Chartist.Line('#SBI_sorted', {
    labels: [1, 2, 3, 4],
    series: [
    	GetData(0, sorted_array),
    	GetData(1, sorted_array),
    	GetData(2, sorted_array)
    ]
  });

  new Chartist.Line('#SBI_revsorted', {
    labels: [1, 2, 3, 4],
    series: [
    	GetData(0, rev_sorted_array),
    	GetData(1, rev_sorted_array),
    	GetData(2, rev_sorted_array)
    ]
  });

  new Chartist.Line('#SBI_random', {
    labels: [1, 2, 3, 4],
    series: [
    	GetData(0, random_array),
    	GetData(1, random_array),
    	GetData(2, random_array)
    ]
  });

  
