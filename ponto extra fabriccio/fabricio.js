document.querySelectorAll('.logo2 img, .logo3 img, .logo4 img').forEach(logo => {
    logo.addEventListener('mouseenter', function() {
        this.dataset.originalSrc = this.src;
        if (this.classList.contains('logo2')) {
            this.src = 'https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-escudo-novo.png';
        } else if (this.classList.contains('logo3')) {
            this.src = 'https://logodetimes.com/times/flamengo/logo-flamengo-crf-1536.png';
        } else if (this.classList.contains('logo4')) {
            this.src = 'https://logodetimes.com/times/flamengo/logo-flamengo-antigo-2048.png';
        }
        this.style.width = '300px';
        this.style.height = '300px';
    });

    logo.addEventListener('mouseleave', function() {
        this.src = this.dataset.originalSrc;
        this.style.width = '200px';
        this.style.height = '200px';
    });
});


