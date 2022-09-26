// function testerz(data){
//     console.log("Johnny fuckin' pwns!!!")
//     console.log(data.name)
//     console.log(data.role)
    
// }

// d3.json('https://mratx.github.io/sample.json').then(data => 
//     testerz(data),
//     );



// function picloop(pics){
//     for(i in pics){
//         console.log(i)
//     }
// }

// // $.getJSON('https://mratx.github.io/sample.json', function(data) {
// //     console.log(data.name)
// //     console.log(data.phonenumber)
// // });

// d3.select("#posterrow")
// .append("div")
// .attr("class","container-fluid")
// .append("div")
// .attr("class","jumbotron")
// .append("h1")
// .attr("class","jumbotitle")
// .text(gameovertext)
// .append("hr")
// render_player_roster(winner,"end")


function posterz(data){
    console.log(data)
    console.log(data["Big Bend"].img_url)
    for(i in data){
        if(i != "parks" || i != "years"){
            console.log(data[i].img_url)
            j = "https://mratx.github.io/static/images/posters/" + i.img_url + ".png"
            // temp
            l = data[i].img_url
            //temp
            d3.select("#posterrow")
                .append("div")
                .attr("class","row")
                .attr("id","postercol")
                .append("a")
                .attr("href",j)
                .append("img")
                .attr("src",l)
        }

    }
}

d3.json("https://mratx.github.io/park_info.json").then(data=>
    posterz(data)
);

// <div class="col-md-1" id="postercol">
// <a href="static/images/posters/acadia.png" target="_blank">
// <img src="static/images/posters/acadia.png" id="poster" href="static/images/posters/acadia.png" target="_blank">
// </a>
// </div>
// <div class="row" id="posterrow">