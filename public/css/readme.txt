npx tailwindcss -o ./public/css/final.css --minify

jika semua coding telah selesai dan siap untuk deploy :
- ketik ini di terminal untuk mengecilkan file output.css 
- ganti link href file css dari style.css menjadi final.css

ps : "style.css" hanya contoh sesuaikan dengan nama file css yang telah dibuat dan disimpan dalam link index.html

TIAP KALI BUKA VS TAILWIND NYA HARUS DI RECALL DI TERMINAL : 
npx tailwindcss -i ./src/css/input.css -o ./public/css/style.css --watch 