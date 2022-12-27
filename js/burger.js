const typeBtn = document.querySelectorAll('.type-btn')
        const menu =document.querySelector('.menu')
        const checkbox = document.querySelector('#burger')

        typeBtn.forEach(function(data){
            data.addEventListener('click', function(){
                checkbox.checked = false;
            });
        });