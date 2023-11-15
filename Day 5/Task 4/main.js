window.onload = function () {
    let body = document.body; 


    let div1 = document.createElement('div');
    let divText1 = document.createElement('div');
    let div2 = document.createElement('div');
    let divText2 = document.createElement('div');
    let div3 = document.createElement('div');
    let divText3 = document.createElement('div');
    
    
    divText1.style.display = 'none';
    divText2.style.display = 'none';
    divText3.style.display = 'none';


    let headerDiv1 = document.createElement('h1');
    let headerDiv2 = document.createElement('h1');
    let headerDiv3 = document.createElement('h1');


    let LinkShowDiv1 = createLink('Show', () => {showDiv(divText1)});
    let LinkShowDiv2 = createLink('Show', () => {showDiv(divText2)});
    let LinkShowDiv3 = createLink('Show', () => {showDiv(divText3)});


    let LinkHideDiv1 = createLink('Hide', () => {hideDiv(divText1)});
    let LinkHideDiv2 = createLink('Hide', () => {hideDiv(divText2)});
    let LinkHideDiv3 = createLink('Hide', () => {hideDiv(divText3)});

    

    headerDiv1.textContent = 'lorem5 ?';
    headerDiv2.textContent = 'lorem5 ?';
    headerDiv3.textContent = 'lorem5 ?';  

    divText1.textContent = 'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello'
    divText2.textContent = 'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello'
    divText3.textContent = 'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello'

    function createLink(text, clickHandler){
        let link = document.createElement('a')
        link.textContent = text
        link.href = '#'
        link.addEventListener('click', clickHandler)
        return link
    }

    function showDiv(element){
        element.style.display = 'block'
    }

    function hideDiv(element){
        element.style.display = 'none'
    }




    div1.appendChild(headerDiv1);
    div2.appendChild(headerDiv2);
    div3.appendChild(headerDiv3);


    divText1.appendChild(LinkHideDiv1);
    divText2.appendChild(LinkHideDiv2);
    divText3.appendChild(LinkHideDiv3);

    div1.appendChild(LinkShowDiv1);
    div2.appendChild(LinkShowDiv2);
    div3.appendChild(LinkShowDiv3);


    body.appendChild(div1);
    body.appendChild(divText1);
    body.appendChild(div2);
    body.appendChild(divText2);
    body.appendChild(div3);
    body.appendChild(divText3);
};
