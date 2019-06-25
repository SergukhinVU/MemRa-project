var sort = document.getElementById('sort');
// var sentEnd = document.getElementById('sentence-end');
var quest = document.getElementById('question');
var wordsList = document.getElementById('words-list');

// var sentenceEnd = Sortable.create(sentEnd,{
//     animation: 150,
// });

var selList = Sortable.create(sort, {
    animation: 150,
    group: 'list',
    dragClass: "btn-outline-primary",
    chosenClass: "btn-outline-primary",
    swapClass: "btn-outline-primary",
    onStart: function (/**Event*/evt) {
        if (sort.childElementCount === quest.childElementCount) {
            selList.options.swap = false;
        }
    },
});

var unSelList = Sortable.create(wordsList, {
    animation: 150,
    group: 'list',
    dragClass: "btn-outline-primary",
    chosenClass: "btn-outline-primary",
    swapClass: "btn-outline-primary",
    onStart: function (/**Event*/evt) {
        if (sort.childElementCount === quest.childElementCount) {
            selList.options.swap = true;
            unSelList.options.swap = true;
        }else{
            selList.options.swap = false;
            unSelList.options.swap = false;
        }
    },
});




