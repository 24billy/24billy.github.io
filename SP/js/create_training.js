document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('.sets .cb-content').addEventListener('click', (e) => {
        var arrowSide='',arrowElement='',setBlock='';
        
        if (e.target.classList[0] === 'title-outter') {
            arrowSide=e.target.childNodes[2].nextSibling.classList[1];
            arrowElement=e.target.childNodes[2].nextSibling;
            setBlock=e.target.parentElement;
            toggle(arrowSide,arrowElement,setBlock); 
        }
        if (e.target.classList[0] === 'title') {
            arrowSide=e.target.parentElement.childNodes[2].nextSibling.classList[1];
            arrowElement=e.target.parentElement.childNodes[2].nextSibling;
            setBlock=e.target.parentElement.parentElement;                        
            toggle(arrowSide,arrowElement,setBlock);            
        }
        if (e.target.classList[0] === 'fa') {
            arrowSide=e.target.classList[1];
            arrowElement=e.target;           
            setBlock=e.target.parentElement.parentElement;            
            toggle(arrowSide,arrowElement,setBlock);
        }
    });
});
function toggle(arrowSide,arrowElement,setBlock){
    if(arrowSide==='fa-chevron-up'){
        arrowElement.classList.remove('fa-chevron-up');
        arrowElement.classList.add('fa-chevron-down');
        setBlock.classList.remove('js-show');
        setBlock.classList.add('js-hide');
    }else{
        arrowElement.classList.remove('fa-chevron-down');
        arrowElement.classList.add('fa-chevron-up');
        setBlock.classList.remove('js-hide');
        setBlock.classList.add('js-show');
    }
}

