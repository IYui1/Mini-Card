// Fungsi untuk menerapkan gaya responsif
function applyResponsiveStyles() {
    const width = window.innerWidth;
    const body = document.body;
    const card = document.querySelector('.card');
    const button = document.querySelectorAll('.button');
    const h2 = document.querySelectorAll('h2');
    const p = document.querySelectorAll('p');

    if (width <= 480) {
        // Gaya untuk layar kecil
        body.style.padding = '50px 10px 20px';

        if (card) {
            card.style.width = '95%';
            card.style.padding = '10px';
        }

        button.forEach(btn => {
            btn.style.fontSize = 'small';
            btn.style.padding = '6px 10px';
        });

        h2.forEach(el => {
            el.style.paddingRight = '10px';
        });

        p.forEach(el => {
            el.style.paddingRight = '10px';
        });
    } else if (width <= 768) {
        // Gaya untuk layar menengah
        body.style.padding = '100px 10px 50px';

        if (card) {
            card.style.width = '90%';
            card.style.padding = '12px';
        }

        button.forEach(btn => {
            btn.style.fontSize = 'medium';
            btn.style.padding = '8px 12px';
        });

        h2.forEach(el => {
            el.style.paddingRight = '20px';
        });

        p.forEach(el => {
            el.style.paddingRight = '20px';
        });
    } else {
        // Gaya default untuk layar besar
        body.style.padding = '150px 10px 50px';

        if (card) {
            card.style.width = '35%';
            card.style.padding = '16px';
        }

        button.forEach(btn => {
            btn.style.fontSize = 'small';
            btn.style.padding = '6px 10px';
        });

        h2.forEach(el => {
            el.style.paddingRight = '50px';
        });

        p.forEach(el => {
            el.style.paddingRight = '50px';
        });
    }
}

// Panggil fungsi saat jendela diubah ukurannya
window.addEventListener('resize', applyResponsiveStyles);

// Panggil fungsi saat halaman dimuat
window.addEventListener('load', applyResponsiveStyles);
