function addThought(){
    let thoughts = document.getElementById("addedthought").value;
    let Name = document.getElementById("name").value;
    document.getElementById("added").innerText = thoughts;
    document.getElementById("signature").innerText = '-'+ Name;
    console.log(thoughts);
    console.log(Name);
}