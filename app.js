        const options = document.querySelectorAll(".options");
        let pScore = 0;
        let cScore = 0;

        //looping dengan forEach
        options.forEach((option) => 
        {
          option.addEventListener("click", function () //fungsi eventListener ketika player meng klik gambar gunting kertas batunya, maka akan langsung terinput ke variable pInput
          {
            const pInput = this.value;
            const cOptions = ["Batu", "Kertas", "Gunting"]; //const cOptions fungsinya, pilihan yg dapat dipilih oleh computer yang nantinya secara acak/random, dan akan langsung terinput kevariable cInput
            const cInput = cOptions[Math.floor(Math.random() * 3)];//kenapa komputer pilihannya akan random, karena menggunakan Math.random, karena pilihannya dalam bentuk array makan urutan indeks yang kan dipilih secara acak
            
            //untuk update tindakan player dan computer
            updateMoves(pInput, cInput);
            compareInputs(pInput, cInput);
            //untuk update score
            updateScore();
            if(checkWinner()){
              pScore = cScore= 0;
              updateScore();
            }
          });
        });
        
        //funsi untuk menentukan tindakan
        function updateMoves(pInput, cInput)
        {
          document.getElementById("p-move").src = `./assets/${pInput}.png`;
          document.getElementById("c-move").src = `./assets/${cInput}.png`;
          document.getElementById("pilihan").innerHTML = `${pInput} (player) VS ${cInput} (computer)`;
        }

        //di fungsi ini, bisa dibilang fungsi untuk membandingkan tindakan player dan computer
        //menggunkkan pengkondisian if
        function compareInputs(pInput, cInput) 
        {
          const currentMatch = `${pInput} vs ${cInput}`;
          //pengkondisian dibawah ini jika player dan komputer memilih tindakan yang sama dan jadinya akan seri
          if (pInput === cInput) {
            document.getElementById("hasil").innerHTML = `permainan seri`;
            hasil.style.cssText = "background-color:#e5e5e5; color:#808080";
            //alert(`${currentMatch} permainan seri`);
            return;
          }
          
          //pengkondisian ketika player memilih batu
          if (pInput === "Batu") {
            if (cInput === "Gunting") {
              document.getElementById("hasil").innerHTML = `kamu menang!`;
              hasil.style.cssText = "background-color:#cefdce; color:#689f38";
              //alert(`${currentMatch} = Kamu Menang!`);
              pScore++;
            } else {
              document.getElementById("hasil").innerHTML = `computer menang!`;
              hasil.style.cssText = "background-color:#ffdde0; color:#d32f2f";
              //alert(`${currentMatch} = Computer Menang!!`);
              cScore++;
            }
         }
          //pengkondisian ketika player memilih Paper
          else if (pInput === "Kertas") {
            if (cInput === "Batu") {
              document.getElementById("hasil").innerHTML = `kamu menang!`;
              hasil.style.cssText = "background-color:#cefdce; color:#689f38";
              //alert(`${currentMatch} = Kamu Menang!`);
              pScore++;
            } else {
             document.getElementById("hasil").innerHTML = `computer menang!`;
             hasil.style.cssText = "background-color:#ffdde0; color:#d32f2f";
              //alert(`${currentMatch} = Computer Menang!`);
              cScore++;
            }
          }
          //pengkondisian ketika player memilih Scissors
          else {
            if (cInput === "Kertas") {
              document.getElementById("hasil").innerHTML = `kamu menang!`;
              hasil.style.cssText = "background-color:#cefdce; color:#689f38";
              //alert(`${currentMatch} = Kamu Menang!`);
              pScore++;
            } else {
              document.getElementById("hasil").innerHTML = `computer menang!`;
              hasil.style.cssText = "background-color:#ffdde0; color:#d32f2f";
              //alert(`${currentMatch} = Computer Menang!`);
              cScore++;
            }
          }
        }
        
        //fungsi untuk update score
        function updateScore() 
        {
          document.getElementById("p-score").textContent = pScore;
          document.getElementById("c-score").textContent = cScore;
        }

        //fungsi dibawha untuk mengecek dan menentukan siapa yang akan jadi pemenangnya
        /* 
        function checkWinner() 
        {
          if (pScore === 5 || cScore === 5) {
            const winner = pScore === 5
                ? "Selamat! Kamu Memenangkan Permainan!"
                : "Computer Memenangkan Permainan! Coba lagi!";
            alert(winner);
            return true;
          }
          return false;
        }
        */

        function checkWinner()
        {
          if (pScore ===5){
            const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
            const alert =(message, alert)=> {
              const wrapper = document.createElement('div')
              wrapper.innerHTML = [
                `<div class="alert alert-${alert} alert-dismissible" role="alert">`,
                `   <div>${message}</div>`,
                '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                '</div>'
              ].join('')
              wrapper.style.cssText = "font-size:15px";
              alertPlaceholder.append(wrapper)
            }
              const menang = pScore
              if (menang === 5) {
                alert('Selamat kamu memenangkan pertandingan','success');
              }
            return true;
          }else if(cScore ===5){
            const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
            const alert =(message, type) => {
              const wrapper = document.createElement('div')
              wrapper.innerHTML = [
                `<div class="alert alert-${type} alert-dismissible" role="alert">`,
                `   <div>${message}</div>`,
                '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                '</div>'
              ].join('')
              wrapper.style.cssText = "font-size:15px";
              alertPlaceholder.append(wrapper)
            }
              const kalah = cScore
              if (kalah === 5) {
                alert('Kamu Kalah, computer mengalahkanmu,coba lagi ','danger')
              }
            return true;
          }
          return false;
        }