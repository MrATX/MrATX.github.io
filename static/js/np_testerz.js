function testerz(data){
    console.log("Johnny fuckin' pwns!!!")
    console.log(data.name)
    console.log(data.role)
    
}

d3.json('https://mratx.github.io/sample.json').then(data => 
    testerz(data),
    );

// $.getJSON('https://mratx.github.io/sample.json', function(data) {
//     console.log(data.name)
//     console.log(data.phonenumber)
// });