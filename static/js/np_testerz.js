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
    console.log(data["Acadia"].img_url)
    null_pics = ["parks","years","gates_of_the_arctic","katmai","kenai_fjords","kobuk_valley","lake_clark","wrangell-st_elias"]
    for(i in data.parks){
        park_wip = data[data.parks[i]]
        if(null_pics.includes(park_wip.img_url)){
            console.log("yoooooooo")
        }
        else{
            j = "https://mratx.github.io/static/images/posters/" + park_wip.img_url + ".png"
            d3.select("#posterrow")
                .append("div")
                .attr("class","col-md-1")
                .attr("id","postercol")
                .append("a")
                .attr("href",j)
                .attr("target","_blank")
                .append("img")
                .attr("src",j)
                .attr("id","poster")
        }
        // if(i != "parks" || i != "years"){
        //     j = "https://mratx.github.io/static/images/posters/" + park_wip.img_url + ".png"
        //     d3.select("#posterrow")
        //         .append("div")
        //         .attr("class","col-md-1")
        //         .attr("id","postercol")
        //         .append("a")
        //         .attr("href",j)
        //         .attr("target","_blank")
        //         .append("img")
        //         .attr("src",j)
        //         .attr("id","poster")
        // }

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