        const circle = document.querySelectorAll('#circle')
        
        const birdsec = document.querySelector('.bird-sec')
        const birdbgc = document.querySelector('.bird-bgc')
        const birdwork = document.querySelector('.bird-work')

        const plantsec = document.querySelector('.plant-sec')
        const plantbgc = document.querySelector('.plant-bgc')
        const plantwork = document.querySelector('.plant-work')

        const crabsec = document.querySelector('.crab-sec')
        const crabbgc = document.querySelector('.crab-bgc')
        const crabwork = document.querySelector('.crab-work')

        circle.forEach(function(data){
            data.addEventListener('click', function(){
                console.log(data.dataset.intro);
                if (data.dataset.intro == '鳥類'){
                    birdsec.style.display = 'block'
                }
                if (data.dataset.intro == '植物'){
                    plantsec.style.display = 'block'
                }
                if (data.dataset.intro == '潮間帶生物'){
                    crabsec.style.display = 'block'
                }
            });
            
        });
        birdbgc.addEventListener('click', function(){
            birdsec.style.display = 'none'
        });
        plantbgc.addEventListener('click', function(){
            plantsec.style.display = 'none'
        });
        crabbgc.addEventListener('click', function(){
            crabsec.style.display = 'none'
        });