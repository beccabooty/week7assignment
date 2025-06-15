for (let i=0; i<5; i++){
    console.log(iteration, i);
}

let foods=["chocolate", "lasagne", "mushrooms","cheese","pasta"];

for(let i=0;i<foods.length;i++){
    console.log(foods[i]);
}

for(let item of foods){
    console.log(item);
}

const colours=["pink","green","blue","purple","yellow"];

colours.forEach(function (item,index){
    console.log(item,index);
});
