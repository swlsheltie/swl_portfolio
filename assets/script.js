

//CHANGING IMAGES ON INDEX.HTML//
// ////////////////////////////
var nameheight = window.getComputedStyle(document.querySelector('#nameHeight')).height
var menu = document.getElementById( 'moremenu' );


var curr_pic_position = [0,0,0,0,0,0,0,0,0,0,0,0,0] // USE THIS TO RUN THROUGH THE IMAGES
var projpic_totals = [2,1,0,2,5,4,0,0,0,0,0,0,0] //TOTAL NUMBER OF IMAGES IN THE LOOP
var randomX
var randomY
function plusDivs(image) {
    if (projpic_totals[image.id] ==0) {
        // console.log("gif")                   //ONE PROJECT IMAGE WITH GIF...DON'T LOOP
        return 
    }
    else {
    num = image.id
    totalpix = projpic_totals[num]
    // console.log(image)
    // console.log(curr_pic_position)
    // console.log(projpic_totals[num])
    var current_num = curr_pic_position[num]
    // console.log("current_num", current_num)
    var sub_num = (++current_num)%totalpix          //LOOP VIA MOD
    // console.log("sub_num", sub_num)
    curr_pic_position[num]=++curr_pic_position[num]  //CALL THE IMAGES FROM THE FOLDERS
    var name = "project"
    var num = String(num)
    // console.log("assets/images/"+num+"-"+sub_num+".png") 
    image.src="assets/images/"+num+"-"+sub_num+".png" //SET THE IMAGES
    }

}


var globalHoverId;

function hoverImage(image){
    console.log("hoverimage")
    clearInterval(globalHoverId)
    globalHoverId = setInterval(function() {            //USE SET INTERVAL TO CONTINUOUSLY LOOP THROUGH THE IMAGES
        plusDivs(image);
    }, 1000);                                           
};

function mouseOutImage() {
    clearInterval(globalHoverId);                       //CLEAR ON MOUSEOUT
}

projects = document.querySelectorAll(".project")        //SET EVENT LISTENER ON ALL PROJECT DIVS

for (let project of projects) {

        project.addEventListener("mouseover", function(event) {
            // console.log(project)
        project.querySelector(".text h2").style.textDecoration="underline"
       
        
        image =project.querySelector(".image")                  //SET THE IMAGES INTO THE PROJECT DIV BOXES
        image.style.display="block"
        image.style.zIndex="10"
        
        // image.style.left = randomX+"%"
        // image.style.top = randomY+"%"

        hoverImage(image)
    });
    project.addEventListener("mouseout", function(event) {
        
        project.querySelector("h2").style.textDecoration="none"
         
        image =project.querySelector(".image")                     //SET MOUSEOUT EVENT, CLEAR ALL CHANGES
        image.style.display="none"
        image.style.zIndex="0"
        mouseOutImage()
});
}

giffys = document.querySelectorAll(".underlineGif")                 //SPECIAL EFFECT ON SOME OF THE TEXT IN THE PROJECTS, SHOW GIF

for (let gif of giffys) {
    gif.addEventListener("mouseover", function(event){
        var pos = gif.getBoundingClientRect();
        console.log(pos)    
        var posX =pos.left +window.scrollX                  //SET POSITION OF THE IMAGE
        var posY =pos.top +window.scrollY
        console.log(posX, posY)
        
        var selectedGif = gif.querySelector("img")
        
        selectedGif.style.left =  String(posX+"px")
        selectedGif.style.top = String(posY+"px")
        console.log("selc", selectedGif.style.left, selectedGif.style.top)      //DISPLAY THE IMAGE
        selectedGif.style.display="block"
        
        
        
    })
    gif.addEventListener("mouseout", function(event){
        gif.querySelector("img").style.display="none"
    })
}


function getPosition( element ) {
   var rect = element.getBoundingClientRect();
   return {x:rect.left,y:rect.top};
}



window.addEventListener("load", function (){                        //SHOW MOBILE MENU BY REMOVING THE MAIN GRID, AND REPLACING IT WITH MENU
    
                                
    
    
    if (document.getElementById("arrowHeight") != null ) {
    document.getElementById("arrowHeight").style.height = nameheight;
    }
    menu.style.height = nameheight;
    // console.log('menu is', menu)
   
    menu.addEventListener("click", function (event){
    // console.log('here')
    let gridDisplay = window.getComputedStyle(document.querySelector('#grid')).display
    let grid = document.getElementById("grid")
    let mobileMenu = document.getElementById("mobileMenuItems") 
    // console.log("clicked")
    
    // console.log(grid.style.display)
    if (gridDisplay != "none") {
        // console.log("hello poop")
        grid.style.display = "none"
        mobileMenu.style.display="inline-block"
    }
    if (gridDisplay=="none") {
        grid.style.display = "inline-block"
         mobileMenu.style.display="none"
    }
});
});

window.addEventListener("resize", function() {                                          //MAKE SURE THE MOBILE MENU BUTTON IS IN THE RIGHT PLACE RELATIVE TO THE HEADER (NAME)
    // var mobile;
    // if (window.innerWidth<575.98) {
    //     mobile=true;
    // }
    console.log("resize")
    nameheight = window.getComputedStyle(document.querySelector('#nameHeight')).height
    
    menu.style.height = nameheight;
    console.log(menu.style.height)
    if (document.getElementById("arrowHeight") != null ) {
    document.getElementById("arrowHeight").style.height = nameheight;
    
   
    }
})