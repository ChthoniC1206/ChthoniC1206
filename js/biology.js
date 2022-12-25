
        const birdIndexMapping = {
            '0': '花嘴鳥',
            '1': '小水鴨',
        }
        const plantIndexMapping = {
            '0': '蘆葦',
            '1': '鹽地鼠尾粟',
        }
        const crabIndexMapping = {
            '0': '萬歲大眼蟹',
            '1': '短身大眼蟹',
        }
        
        
        const circle = document.querySelectorAll('#circle')
        const closeBtn = document.querySelectorAll('.close-btn')

        // 鳥類區
        const birdsec = document.querySelector('.bird-sec')
        const birdbgc = document.querySelector('.bird-bgc')
        const birdwork = document.querySelector('.bird-work')
        const birdpic = document.querySelectorAll('.bird-pic')
        const birddetail = document.querySelector('.bird-detail')
        const birddetails = document.querySelectorAll('.bird-details')
        const birdBackBtn = document.querySelectorAll('.bird-back-btn')

        // 植物區
        const plantsec = document.querySelector('.plant-sec')
        const plantbgc = document.querySelector('.plant-bgc')
        const plantwork = document.querySelector('.plant-work')
        const plantpic = document.querySelectorAll('.plant-pic')
        const plantdetail = document.querySelector('.plant-detail')
        const plantdetails = document.querySelectorAll('.plant-details')
        const plantBackBtn = document.querySelectorAll('.plant-back-btn')

        // 潮間帶區
        const crabsec = document.querySelector('.crab-sec')
        const crabbgc = document.querySelector('.crab-bgc')
        const crabwork = document.querySelector('.crab-work')
        const crabpic = document.querySelectorAll('.crab-pic')
        const crabdetail = document.querySelector('.crab-detail')
        const crabdetails = document.querySelectorAll('.crab-details')
        const crabBackBtn = document.querySelectorAll('.crab-back-btn')



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
            birddetail.style.display = 'none'
        });
        plantbgc.addEventListener('click', function(){
            plantsec.style.display = 'none'
            plantdetail.style.display = 'none'
        });
        crabbgc.addEventListener('click', function(){
            crabsec.style.display = 'none'
        });

        closeBtn.forEach(function(closebtn){
            closebtn.addEventListener('click', function(){
                birdsec.style.display = 'none'
                plantsec.style.display = 'none'
                crabsec.style.display = 'none'
            });
        });

        function lockBird (){
            birddetails.forEach((detail,index) => {
                detail.style.display = 'none';
            });    
        }
        function lockPlant (){
            plantdetails.forEach((detail,index) => {
                detail.style.display = 'none';
            });    
        }
        function lockCrab (){
            crabdetails.forEach((detail,index) => {
                detail.style.display = 'none';
            });    
        }
        birdpic.forEach(function(img, index){
            img.addEventListener('click', function(){      
                if(img.dataset.intro === birdIndexMapping[index]) {
                    lockBird();
                    birddetail.style.display = 'block';
                    birddetails[index].style.display = 
                    'block';
                };
                birdBackBtn.forEach(function(birdBtn){
                    birdBtn.addEventListener('click', function(){
                        birddetail.style.display = 'none';
                        birdsec.style.display = 'block'
                    });
                });
            });
        });
        plantpic.forEach(function(img, index){
            img.addEventListener('click', function(){      
                if(img.dataset.intro === plantIndexMapping[index]) {
                    lockPlant();
                    plantdetail.style.display = 'block';
                    plantdetails[index].style.display = 
                    'block';
                };
                plantBackBtn.forEach(function(plantBtn){
                    plantBtn.addEventListener('click', function(){
                        plantdetail.style.display = 'none';
                        plantsec.style.display = 'block'
                    });
                });
            });
        });
        crabpic.forEach(function(img, index){
            img.addEventListener('click', function(){      
                if(img.dataset.intro === crabIndexMapping[index]) {
                    lockCrab();
                    crabdetail.style.display = 'block';
                    crabdetails[index].style.display = 
                    'block';
                };
                crabBackBtn.forEach(function(crabBtn){
                    crabBtn.addEventListener('click', function(){
                        crabdetail.style.display = 'none';
                        crabsec.style.display = 'block'
                    });
                });
            });
        });
        