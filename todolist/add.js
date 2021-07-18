const button=document.querySelector('.input-button');
const input=document.querySelector('#input');
const list= document.querySelector('.list');

button.addEventListener('click',()=>{
    // const ul_tag=document.createElement('li');

    // const delete_button_tag=document.createElement('button');
    // delete_button_tag.innerHTML='삭제';
    // delete_button_tag.classList.add('delete-button');
    

    // ul_tag.innerHTML=input.value;
    // ul_tag.appendChild(delete_button_tag);
    // ul_tag.classList.add('listElem');
    // list.appendChild(ul_tag);
    new list_item();


});

// delete_button.addEventListener('click',(e)=>{
//     console.log(e.target);
// });   삭제기능이 각 tag에 부여되지 않았음

//  instance 로 해결

function list_item(){
    this.mainElem=document.createElement('li');
    this.mainElem.innerHTML=input.value;
    this.mainElem.classList.add('listElem');


    list.appendChild(this.mainElem);

    this.init();

}

list_item.prototype={
    init:  function(){
        const self=this;
        const delete_button=document.createElement('button');
        delete_button.innerHTML='삭제';
        delete_button.classList.add('delete-button');
        this.mainElem.appendChild(delete_button);

        delete_button.addEventListener('click',(e)=>{
            e.target.parentNode.remove();

        })

    }


}