export default function showHideButtons(state) {
    if(state == 'show'){
        document.getElementById('btn-repos').style.display = 'block';
        document.getElementById('btn-starred').style.display = 'block';
    } else{
        document.getElementById('btn-repos').style.display = 'none';
        document.getElementById('btn-starred').style.display = 'none';
    }
}