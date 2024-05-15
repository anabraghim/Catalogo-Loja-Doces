const headerMobile = document.querySelector('.headerMobile');
const shoppingCart = document.querySelector('.shoppingCart')
// evento de botão heder mobile
headerMobile.addEventListener('click', ()=>{
    if(headerMobile.classList.contains('close')){
        headerMobile.classList.remove('close');
        headerMobile.classList.add('open');
    } else{
        headerMobile.classList.remove('open');
        headerMobile.classList.add('close');
    }
});

//evento de clicar no carrinho
// shoppingCart.addEventListener('click', ()=>{
//     if(!(shoppingCart.classList.contains('open'))){
//         shoppingCart.classList.add('open');
//         shoppingCart.style.backgroundColor = 'white';
//         shoppingCart.style.width = 'calc(100% - 5em)';
//         // shoppingCart.style.width = 'auto';
//         shoppingCart.style.borderRadius= '1em';
//         shoppingCart.style.height= 'calc(100% - 5em)';
//         shoppingCart.querySelector('img').style.display = 'none'
        
//         //paragrafo "seu carrinho"
//         const pYourCart = document.createElement('p'); // criei o parágrafo
//         shoppingCart.appendChild(pYourCart);
//         pYourCart.innerText = 'Seu carrinho'
//         pYourCart.style.color = 'var(--rosaEscuro)'

//         //formulário de endereço
//         const adressForm = document.createElement('div');
//         shoppingCart.appendChild(adressForm);

//                 //título do endereço
//         const titleInputAdress = document.createElement('label')
//         titleInputAdress.for = 'inputAdress';
//         adressForm.appendChild(titleInputAdress);

//                 //input do endereço
//         const inputAdress = document.createElement('input')
//         inputAdress.id = 'inputAdress';
//         inputAdress.placeholder = 'Digite seu endereço completo';
//         adressForm.appendChild(inputAdress);

//         //criando botoes disponiveis no carrinho aberto
//         const buttonsCont = document.createElement('div');
//         shoppingCart.appendChild(buttonsCont);

//             //criei o botão de fechar
//         const closebutton = document.createElement('button');
//         closebutton.innerText = 'Fechar'
//         buttonsCont.appendChild(closebutton);

//         closebutton.addEventListener('click', ()=>{
//             // shoppingCart.classList.remove('open');
//         })

//             // criei o botão de finalizar pedido
//         const finishButton = document.createElement('button');
//         finishButton.innerText = 'Finalizar pedido';
//         buttonsCont.appendChild(finishButton);
//     }
// });

