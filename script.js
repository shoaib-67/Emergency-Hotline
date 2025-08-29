//Heart Counter
const heartButtons =document.getElementsByClassName("heart-counter");
for (let btn of heartButtons) {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        let heart =parseInt(document.getElementById("Heart-i").innerText);
        let totalHeart=heart+1;
        document.getElementById("Heart-i").innerText =totalHeart;
    });
}

//Call Button Functionality
const callButtons = document.getElementsByClassName("call-icon");
for (let btn of callButtons) {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        let coinElem =document.getElementById("call-c");
        let coins =parseInt(coinElem.innerText);
        if (coins >=20) {
            let card =btn.parentNode;
            while (card && !(card.classList && card.classList.contains("card"))) {
                card =card.parentNode;
            }
            const serviceName =card.querySelector("h2").innerText;
            const serviceNumber =card.querySelector("p.text-2xl").innerText;
            alert(`Calling ${serviceName}: ${serviceNumber}`);
            coins =coins -20;
            coinElem.innerText =coins;
            addCallHistory(serviceName, serviceNumber);
        } else {
            alert('Coin is less');
        }
    });
}

// Call History Functionality
const callHistoryList =document.getElementById("call-history-list");

function addCallHistory(serviceName, serviceNumber) {
    if (!callHistoryList) 
        return;
    const noHistoryMsg =document.getElementById("no-history-message");
    if (noHistoryMsg) {
        noHistoryMsg.style.display ='none';
    }
    const now =new Date();
    const hours =now.getHours().toString().padStart(2, '0');
    const minutes =now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    
    const li = document.createElement('li');
    li.innerHTML = `<span class="font-semibold">${serviceName}: ${serviceNumber}</span> <span class="text-sm text-gray-500">${timeString}</span>`;
    callHistoryList.appendChild(li);
}
const clearHistoryBtn =document.getElementById("clear-history");
if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", function() {
        if (callHistoryList) {
            callHistoryList.innerHTML = '';
            const noHistoryMsg =document.getElementById('no-history-message');
            if (noHistoryMsg) {
                noHistoryMsg.style.display ='flex';
            }
        }
    });
}

//Copy Button Functionality
const copyButtons = document.getElementsByClassName("copy-btn");
for (let btn of copyButtons) {
    if (btn.textContent.includes("Copy")) {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            let card = btn.parentNode;
            while (card && !(card.classList && card.classList.contains("card"))) {
                card = card.parentNode;
            }
            const serviceName = card.querySelector("h2").innerText;
            const serviceNumber = card.querySelector("p.text-2xl").innerText;

            navigator.clipboard.writeText(serviceNumber)
                .then(() => {
                    alert(`Copied ${serviceName} number: ${serviceNumber}`);
   
                    let copyCount =parseInt(document.getElementById("copy-count").innerText);
                    let totalCopy =copyCount+1;
                    document.getElementById("copy-count").innerText =totalCopy;
                })
                .catch(err => {
                    alert('Failed to copy: ' + err);
                });
        });
    }
}