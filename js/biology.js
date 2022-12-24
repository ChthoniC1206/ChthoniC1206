
        const circle = document.querySelectorAll('#circle')

        const birdsec = document.querySelector('.bird-sec')
        const birdbgc = document.querySelector('.bird-bgc')
        const birdwork = document.querySelector('.bird-work')
        const birdpic = document.querySelectorAll('.bird-pic')
        const birddetail = document.querySelector('.bird-detail')
        const birddetails = document.querySelectorAll('.details')

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
            birddetail.style.display = 
                    'none'
        });
        plantbgc.addEventListener('click', function(){
            plantsec.style.display = 'none'
        });
        crabbgc.addEventListener('click', function(){
            crabsec.style.display = 'none'
        });
        

        birdpic.forEach(function(img, index){

            img.addEventListener('click', function(){

                console.log(birddetails.length);
                console.log(img.dataset.intro);
                console.log(img.dataset.intro === '花嘴鳥')

                birddetail.style.display = 'none'
                
                if(img.dataset.intro === '花嘴鳥') {
                    birddetail.style.display = 'block'
                    birddetails[0].style.display = 
                    'block'
                    birddetails[1].style.display = 
                    'block'

                }
                if(img.dataset.intro === '小水鴨') {
                    birddetail.style.display = 'block'
                    birddetails[0].style.display = 
                    'none'
                    birddetails[1].style.display = 
                    'block'
                }
            });
        });
        