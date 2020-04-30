function click(){
    chrome.tabs.executeScript(null,
    {code:"document.querySelectorAll('video')[0].style.backgroundColor='black';"
     +"url=document.querySelectorAll('video source')[0].src;" 
    //  +"console.log(url);"
     +"file_name=document.querySelectorAll('.unit-title')[0].innerHTML;"
     +"file_name=file_name.split(' ').join('');"
    //  +"console.log(file_name.toString());"
     +"inline='inline';"
     +"document.querySelectorAll('.bookmark-button-wrapper')[0].innerHTML += '<br><a class='+inline+inline+' href='+url+' download='+file_name.toString()+' content-disposition='+inline+'>Click here if the Download did not start.</a>';"
    //  +"document.querySelectorAll('.inlineinline')[0].style.color='white';"
     +"document.getElementsByClassName('inlineinline')[0].click();"
    });
    window.close();
}
document.addEventListener('DOMContentLoaded',function(){
    var div = document.querySelectorAll('div');
    div[0].addEventListener('click',click);
});
