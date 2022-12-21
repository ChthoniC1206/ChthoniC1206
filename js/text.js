const introduce = document.querySelectorAll('.introduce')

        const texseca = document.querySelector('.text-seca')
        const bgca = document.querySelector('.bgca')       
        const btna = document.querySelector('.btna')

        const texsecb = document.querySelector('.text-secb')
        const bgcb = document.querySelector('.bgcb')       
        const btnb = document.querySelector('.btnb')

        introduce.forEach(function(data){
            data.addEventListener('click',function(){
                console.log(data.dataset.intro);
                if(data.dataset.intro == 'a'){
                    texseca.style.display = 'block'
                }
                if(data.dataset.intro == 'b'){
                    texsecb.style.display = 'block'
                }
            });
        });
        bgca.addEventListener('click',function(){
            texseca.style.display = 'none'
        });
        btna.addEventListener('click',function(){
            texseca.style.display = 'none'
        });
        bgcb.addEventListener('click',function(){
            texsecb.style.display = 'none'
        });
        btnb.addEventListener('click',function(){
            texsecb.style.display = 'none'
        });