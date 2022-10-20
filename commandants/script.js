const toggleButton = document.getElementById('toggle-button');
const sideBar = document.getElementById('side-bar');

toggleButton.addEventListener('click', show);

function show() {
	sideBar.classList.toggle('active');
}

//enlever la side bar en cliquant sur le contenu principal

const content = document.querySelector('.content')
content.addEventListener('click', () => {
	sideBar.classList.remove('active')}
)


//goutes d'eau



//
$(document).ready(function(){     
    $(".F-All").click(function(){
        $(".tier2").show();
        $(".tier1").show();
        $('.tier3').show();
    });    
});


$(document).ready(function(){     
    $(".FTier3").click(function(){
        $(".tier2").hide();
        $(".tier1").hide();
        $('.tier3').show();
    });    
});

$(document).ready(function(){     
    $(".FTier2").click(function(){
        $(".tier3").hide();
        $(".tier1").hide();
        $('.tier2').show();
    });
});

$(document).ready(function(){     
    $(".FTier1").click(function(){
        $(".tier3").hide();
        $(".tier2").hide();
        $('.tier1').show();
    });
});
