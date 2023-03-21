// function buildFunctions(){
//     // return "Hello";
//     // return 5;
//     // return [1,2,3,4,5];
//     // return {
//     //     name:"javid",
//     //     log:function(){
//     //         return this.name;
//     //     }
//     // }

//     var arr = [];

//     for(var i = 0; i<3; i++){
        
//         // let j = i;

//         arr.push(function(){
//             console.log(i);
//         })
//     }

//     return arr;
// }


function buildFunctions(){
    var arr = [];

    for(var i = 0; i<3; i++){
        
        // let j = i;

        arr.push((function(j){
            console.log(j);
        }(i)))
    }

    return arr;
}


var fs = buildFunctions();

fs[0];
fs[1];
fs[2];