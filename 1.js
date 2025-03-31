        window.onload = function() {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('content').style.display = 'block';
        };
        
                document.addEventListener('DOMContentLoaded', function() {
            const h4 = document.querySelector('.h4');
            const tooltip = document.getElementById('tooltip');
        
            h4.addEventListener('mousemove', function(event) {
                tooltip.style.display = 'block';
                tooltip.style.left = event.pageX + 'px';
                tooltip.style.top = event.pageY + 'px';
            });
        
            h4.addEventListener('mouseleave', function() {
                tooltip.style.display = 'none';
            });
        });
