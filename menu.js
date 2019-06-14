function store(source) {
    localStorage["userName"] = source.value;
}
function read(source) {
    source.value = localStorage["userName"];
}
