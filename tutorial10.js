

// About Learning Function :  

// Global Function ; 

let name1 = 'Shakib ' ;

function Massage(tin){


    let msg =`${name1} The sultans of the Ottoman Empire (Turkish: Osmanlı padişahları), who were all members of the Ottoman dynasty (House of Osman), ruled over the transcontinental empire from its perceived inception in 1299 to its dissolution in 1922. At its height, the Ottoman Empire spanned an area from Hungary in the north to Yemen in the south and from Algeria in the west to Iraq in the east. Administered at first from the city of Söğüt since before 1280 and then from the city of Bursa since 1323 or 1324, the empire's capital was moved to Adrianople (now known as Edirne in English) in 1363 following its conquest by Murad I and then to Constantinople (present-day Istanbul) in 1453 following its conquest by Mehmed II.[1] ${tin}`

    return msg ; 
}

var txt = Massage(100);

 
console.log(txt) ;





// Local Function ; 





let name2 = ' Jamal' ; 

function local(elephent){

    console.log(` ${name2} Hallow !! welcome to JavaScript Function !!  function local `)


}

local();


arr = ['fruit' , 'vegetable' , ' Alcol']

arr.forEach( function(elements , array , index){

    console.log(elements , arr, index)
    
});

function ul(name ){

    return ` This is ${name}`

}

console.log(ul("Harry"));

// function apply inside of Object ; 


const myobj ={

    name : " Kamal ",

    game:function(){

        return "GTN";

    }

}

console.log(myobj.game());




console.log(ul("Harry"))