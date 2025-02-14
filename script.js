document.addEventListener("DOMContentLoaded", function () {
    // Efek teks muncul
    const message = document.querySelector("#message h1");
    if (message) {
        message.classList.add("fade-in");
    }

    // Animasi saat scroll
    window.addEventListener("scroll", function () {
        const gallery = document.querySelector("#gallery");
        if (gallery) {
            const galleryPosition = gallery.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (galleryPosition < screenPosition) {
                gallery.classList.add("fade-in");
            }
        }
    });

    // Efek klik pada gambar galeri
    const images = document.querySelectorAll(".gallery-container img");
    images.forEach(img => {
        img.addEventListener("click", function () {
            alert("Happy Valentine! ❤️");
        });
    });

    // Batasi jumlah hati maksimal di layar
    let heartCount = 0;
    const maxHearts = 20;

    function createHeart() {
        if (heartCount >= maxHearts) return; // Jangan buat terlalu banyak hati
        
        const heart = document.createElement("img");
        heart.src = "asset/love.png"; // Menggunakan gambar hati
        heart.classList.add("heart");

        // Posisi acak (2vw - 98vw)
        const leftPosition = Math.random() * 96 + 2;
        heart.style.left = leftPosition + "vw";

        // Ukuran acak (20px - 60px)
        const size = Math.random() * 40 + 20;
        heart.style.width = size + "px";
        heart.style.height = size + "px";

        // Kecepatan jatuh (3 - 6 detik)
        heart.style.animationDuration = Math.random() * 3 + 3 + "s";

        // Rotasi acak
        heart.style.transform = `rotate(${Math.random() * 360}deg)`;

        // Tambahkan ke body
        document.body.appendChild(heart);
        heartCount++;

        // Hapus elemen setelah animasi selesai
        setTimeout(() => {
            heart.remove();
            heartCount--;
        }, 6000);
    }

    // Efek hati jatuh menggunakan requestAnimationFrame untuk performa lebih baik
    function heartLoop() {
        createHeart();
        setTimeout(() => requestAnimationFrame(heartLoop), 300);
    }
    
    heartLoop(); // Mulai efek hati jatuh
});

document.addEventListener("DOMContentLoaded", function () {
    const messageText = `Hai maniss, maaf yahh sebelumnya kalo alay bet menurut kamu ku buat ini karena kita nda ada jiwa kreatif sama sekali huhuhu.
Finally, tpe wishlist buat ada pacar and make this to my gf di hari valentine terkabul juga (anjay).
Makasih yahh so buka hati dan terima diriku ini kiw kiw, if not with u i never feel to be loved like this.
Remember, u not alone, kamu nda sendiri. Apapun itu libatkan kita terus nehh, let's get through it all together from now.
Last but not least, Happy Valentine’s Day Bi.
I love u, In every Universe`;

    const messageElement = document.getElementById("typed-message");
    let index = 0;

    function typeMessage() {
        if (index < messageText.length) {
            messageElement.textContent += messageText.charAt(index);
            index++;
            setTimeout(typeMessage, 80); // Kecepatan ketikan
        }
    }

    typeMessage(); // Mulai animasi mengetik
});

document.addEventListener("DOMContentLoaded", function () {
    const captions = [
        { id: "caption1", text: "Happy Valentine’s Day Bi!!", delay: 0 },
        { id: "caption2", text: "I Love you, always", delay: 3000 } // Delay setelah caption pertama
    ];

    captions.forEach(({ id, text, delay }) => {
        setTimeout(() => {
            typeEffect(id, text);
        }, delay);
    });

    function typeEffect(elementId, text) {
        let index = 0;
        const element = document.getElementById(elementId);
        element.textContent = ""; // Kosongkan teks sebelum mulai
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100); // Kecepatan mengetik
            }
        }
        type();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-container img");
    
    images.forEach((img, index) => {
        img.style.opacity = "0"; // Sembunyikan gambar awalnya
        img.style.transform = "translateY(20px)"; // Geser sedikit ke bawah untuk efek muncul
        
        setTimeout(() => {
            img.style.opacity = "1";
            img.style.transform = "translateY(0)";
        }, index * 500); // Delay 300ms per gambar
    });
});
