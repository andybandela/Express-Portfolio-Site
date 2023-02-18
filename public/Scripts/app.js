//app.js Andy Bandela 301282674 5/02/2023
//IIEFE = Immediatly Invoked Function Expression



(function () {
    function start() {
        console.log("App started ...");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        for ( button of deleteButtons) {
            button.addEventListener('click',(event) =>{
                if(!confirm("Are you sure?")){
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }
    }
    window.addEventListener("load",start)
})();