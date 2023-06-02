// const input=document.querySelector('#input');
// const btn=document.querySelector('.btn');

// btn.addEventListener('click',function(){
//     input.select();
//     document.execCommand('copy');
//     alert('Copied');
// });



const input=document.querySelector('#input');
function myFunction(){
    input.select();
    document.execCommand('copy');
    alert('copied');
};

