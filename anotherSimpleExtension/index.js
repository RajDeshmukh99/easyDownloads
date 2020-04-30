function click(){
    chrome.tabs.executeScript(null,{
        code:"document.querySelector('body').style.backgroundColor='#202020';"
    });
    window.close();
}
document.addEventListener('DOMContentLoaded',function(){
    var div = document.querySelector('div');
    div.addEventListener('click',click);
});
