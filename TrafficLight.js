function updateLight(current) {
    let light = '';
    if(current == 'green'){
        light = 'yellow';
    }
    else if(current == 'yellow'){
        light = 'red';
    }
    else{
        light = 'green';
    }
    return light;
  }


  console.log(updateLight("green"), "yellow");
  console.log(updateLight("yellow"), "red");
  console.log(updateLight("red"), "green");