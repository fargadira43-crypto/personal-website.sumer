        (function(){
            function initMenu() {
                var btn = document.getElementById('header_1793942923812_menu_btn');
                var menu = document.getElementById('header_1793942923812_menu');
                if (!btn || !menu) return false;
                if (btn.dataset.initialized) return true;
                btn.dataset.initialized = 'true';
                function closeMenu() {
                    menu.classList.remove('open');
                    btn.setAttribute('aria-expanded', 'false');
                }
                function toggleMenu(e) {
                    e.stopPropagation();
                    var isOpen = menu.classList.toggle('open');
                    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
                }
                btn.addEventListener('click', toggleMenu);
                menu.querySelectorAll('a').forEach(function(a){
                    a.addEventListener('click', function(e){
                        e.preventDefault();
                        closeMenu();
                        var targetId = a.getAttribute('data-scroll-target');
                        var targetEl = targetId ? document.getElementById(targetId) : null;
                        if (targetEl) {
                            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    });
                });
                document.addEventListener('click', function(e){
                    if (!menu.contains(e.target) && e.target !== btn) closeMenu();
                });
                document.addEventListener('keydown', function(e){
                    if (e.key === 'Escape') closeMenu();
                });
                return true;
            }
            if (!initMenu()) {
                var attempts = 0;
                var timer = setInterval(function() {
                    attempts++;
                    if (initMenu() || attempts > 20) {
                        clearInterval(timer);
                    }
                }, 100);
            }
        })();
        (function(){
            var btn = document.getElementById('contact_1793943419729_btn');
            var input = document.getElementById('contact_1793943419729_email');
            if (!btn) return;
            btn.addEventListener('click', function(){
                var visitor = input ? input.value.trim() : '';
                var subject = encodeURIComponent('New message from your website');
                var body = encodeURIComponent('From: ' + (visitor || '(no email provided)') + '\n\n');
                window.location.href = 'mailto:you@example.com?subject=' + subject + '&body=' + body;
            });
        })();
