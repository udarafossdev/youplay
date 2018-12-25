/**
 * Created by udara on 12/25/18.
 */
var changeColor = document.getElementById('changeColor');


changeColor.onclick = function(element) {
    var color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
};