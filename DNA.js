function DNAStrand(dna){
    const arr = dna.split('');
    for(let i=0; i <= arr.length; i++){
        if(arr[i] == 'A'){
            arr[i] = 'T'
        }
        else if(arr[i] == 'T'){
            arr[i] = 'A'
        }
        else if(arr[i] == 'G'){
            arr[i] = 'C'
        }
        else if(arr[i] == 'C'){
            arr[i] = 'G'
        } 
    }
    return arr.join('')
  }
    
    console.log(DNAStrand("AAAA"),"TTTT","String AAAA is")
    console.log(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
    console.log(DNAStrand("GTAT"),"CATA","String GTAT is")