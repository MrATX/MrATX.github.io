function posterz(data){
    null_pics = ["parks","years","gates_of_the_arctic","katmai","kenai_fjords","kobuk_valley","lake_clark","wrangell-st_elias"]
    // null_pics = ["parks","years","bryce_canyon","canyonlands","gates_of_the_arctic","glacier_bay","hot_springs","indiana_dunes","joshua_tree","katmai","kenai_fjords","kobuk_valley","lake_clark","mesa_verde","petrified_forest","wrangell-st_elias"]
    counter = 0;
    idnum = 1
    rowid = "posterrow1"
    for(i in data.parks){
        park_wip = data[data.parks[i]]
        if(counter === 11){
            console.log("next row")
            counter = 0
            idnum = idnum + 1
            rowid = "posterrow" + String(idnum)
            d3.select("#posterholder")
                .append("div")
                .attr("class","row")
                .attr("id",rowid)
                .attr("style","display:inline-flex")
        }
        if(null_pics.includes(park_wip.img_url)){
            console.log("Skip")
        }
        else{
            counter = counter + 1
            // j = "https://mratx.github.io/static/images/posters/" + park_wip.img_url + ".png"
            j = "static/images/posters/" + park_wip.img_url + ".png"
            rowidselect = "#" + rowid
            d3.select(rowidselect)
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
    }
}

d3.json("https://mratx.github.io/park_info.json").then(data=>
    posterz(data)
);