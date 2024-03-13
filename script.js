// script.js

$(document).ready(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var btnElement = document.querySelector('.btn');
        var mapasSection = document.querySelector('.mapas');
    
        btnElement.addEventListener('click', function (event) {
            event.preventDefault();
    
            mapasSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
    function expandElement(element) {
        element.classList.toggle('expanded');
    }            
        });
$(document).ready(function () {
    $('#meuCard').hide();
    // Adicione um ouvinte de evento para a alteração do select
    $('#stateselect').on('change', function () {
        // Oculta todas as divs containermap
        $('.containermap').hide();

        // Obtém o valor selecionado no select
        var selectedState = $(this).val();

        // Mostra a div containermap correspondente ao estado selecionado
        $('#meuCard').show();
        $('#containermap-' + selectedState).show();
    });


});
