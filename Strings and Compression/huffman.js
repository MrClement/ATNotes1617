function sortFrequencyArray(arr){
    arr.sort(function(a,b){
        return b.freq - a.freq;
    });
}

function frequencies(text){
    let letters = {};
    let arr = [];
    for(let c of text) {
        if(letters[c]) {
            letters[c]++;
        }
        else {
            letters[c] = 1;
        }
    }

    for(let key of Object.keys(letters)){
        let freq = letters[key];
        let obj = {letter:key, freq:freq, left:null, right:null};
        arr.push(obj);
    }

    sortFrequencyArray(arr);

    return arr;
}

function genTree(arr){
    while(arr.length > 1){
        var first = arr.pop();
        var second = arr.pop();
        var parent = {
            letter:-1,
            freq:first.freq + second.freq,
            left:first,
            right:second
        };
        arr.push(parent);
        sortFrequencyArray(arr);
    }
    return arr[0];
}

function genTableStarter(tree){
    var table = {};
    genTable(tree, table, "");
    return table;
}

function genTable(tree, table, path){
    if(tree.letter == -1){
        table = genTable(tree.left, table, path+"1"); 
        table = genTable(tree.right, table, path+"0");
    }else{
        table[tree.letter] = path;
    }
    return table;
}

function genTreeFromString(str){
    return genTree(frequencies(str))
}
function genTableFromString(str){
    return genTableStarter(genTreeFromString(str))
}


module.exports = {
    frequencies: frequencies,
    genTree: genTree,
    genTable: genTableStarter,
    genTreeFromString: genTreeFromString,
    genTableFromString: genTableFromString
}

// to load:
// // var huffman = require('./huffman.js');
//
// // to get a tree:
// // huffman.genTree(huffman.frequencies('put something here'));
// // -- or --
// // huffman.getTreeFromString('put something here');
//
// // to get a lookup table:
// // huffman.genTable(huffman.genTree(huffman.frequences('put something here')));
// // -- or --
// // huffman.getTableFromString('put something here')
