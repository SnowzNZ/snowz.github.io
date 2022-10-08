async function copyText() {
    navigator.clipboard.writeText("Snowz#1801");
    
    var div = document.getElementById('copied');
    div.style.visibility='visible';
    await new Promise(resolve => setTimeout(resolve, 2000));
    div.style.visibility='hidden';
}