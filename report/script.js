// function clickAd(){
//     let root = document.querySelector('#ourWork');
//     let newRow = document.createElement('div');
//     newRow.className = 'work';
//     newRow.innerHTML = `<div class="work">
//     <a class="lab" href="#">Опіс предметного середовіща</a>
//     <a class="lab" href="#">Тема Мета Розташування лаби</a>
//     <a class="lab" href="#">Структура Документа</a>
//     <a class="lab" id="tableCode" href="#">HTML-код таблиць</a>
//     <a class="lab" id="formCode" href="#">HTML-код форми</a>
//     <a class="lab" id="imgCode" href="#">HTML-код зображення</a>
//     <a class="lab" href="#">Висновки</a>
// </div>
// <div class="output">
//     <div class="outputLab"></div>
// </div>`;
//     root.append(newRow);
//     console.log(root);
// }

function showLab1() {
    let labBlock = document.getElementById('ourWork');
    if(labBlock.style.display !== 'none') {
        labBlock.style.display = 'none';
    }else{
        labBlock.style.display = 'block';
    }
}

function showLab2() {
    let labBlock2 = document.getElementById('ourWork2');
    if(labBlock2.style.display !== 'none') {
        labBlock2.style.display = 'none';
    }else{
        labBlock2.style.display = 'block';
    }
}

