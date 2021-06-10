document.addEventListener('DOMContentLoaded', function() {


    link = localStorage.getItem('link')

    a = document.querySelector('a')

    a.href = link

})