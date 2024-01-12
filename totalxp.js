const listOfLvl= [175,157,250,225,325,292,276,400,360,340,320,475,427,403,380,550,495,467,440,625,562,531,500,700,630,595,560,775,697,658,620,850,765,722,680,925,832,786,740,1000,900,850,800,1075,967,913,860,1150,1035,977,920]
function levelXp(level) {
    return 75 * (level - 1) / 2 * level;
}
function totalXp(arr) {
    let list = [];
    for (let i = 0; i < arr.length; i++) {
        list.push(levelXp(arr[i]));
    }
    return list;
}

console.log(totalXp(listOfLvl));



