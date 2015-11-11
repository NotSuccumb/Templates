(function(){
    window.onresize = function(){
        if(window.innerWidth > 768) {
            document.getElementById('menu-btn').checked = false;
            document.getElementById('main-menu');
        }
    };
    document.getElementById('main-nav').addEventListener('click', function(e){
        if(e.target.classList.contains('has-sub-menu')) {
            e.preventDefault();
            if(window.innerWidth < 768) {
                e.target.classList.toggle('opened');
            }
        }
    });
})(window);