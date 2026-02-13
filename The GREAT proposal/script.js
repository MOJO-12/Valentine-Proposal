 let yesSize = 1.2;
        let noClicks = 0;
        
        const messages = [
            "No", "Are you sure?", "Really sure??", "Think again!", 
            "Last chance!", "Walai😁🫶?", "yaani kabisaa kabisaa hutaki?", 
            "Uko sure mamaa...", "Usikue hivyo😌😌!", "Okay last try😊😌"
        ];

        function growYes() {
            noClicks++;
            
            // Increase the "Yes" button size
            yesSize += 0.5; 
            const yesBtn = document.getElementById('yesBtn');
            yesBtn.style.fontSize = yesSize + "rem";
            yesBtn.style.padding = (yesSize * 10) + "px " + (yesSize * 20) + "px";

            // Update the "No" button text to be more persuasive
            const noBtn = document.getElementById('noBtn');
            if (noClicks < messages.length) {
                noBtn.innerText = messages[noClicks];
            } else {
                noBtn.innerText = "Just say yes! ❤️";
            }
        }

        function celebrate() {
            document.getElementById('question').innerText = "Yay!!! I knew you'd say yes!😘❤️";
            document.querySelector('.buttons').style.display = 'none';
            document.getElementById('catImg').src = "https://media.tenor.com/nEiGpNS_BMMAAAAi/bugcat-capoo.gif";
        }