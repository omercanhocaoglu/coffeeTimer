

// --- Timer
setInterval(Timer, 1000);

function Timer () {
    const time = new Date().toLocaleTimeString();

    const date = new Date().toDateString();

    document.querySelector("#timer").innerHTML = `Güncel Saat = ${time} `
};
// ----------------------------------------------


// --- Notice Message
let noticeMessage = `Not:Butona basarak yeni zaman ekleyebilirsiniz. İsterseniz eklediğiniz zamanın üstüne 1 kere tıklayarak
  üstünü çizebilirsiniz ya da çift tıklayarak zamanı silebilirsiniz.`;

let noticeDom = document.querySelector("#notice");

noticeDom.innerHTML = noticeMessage;
// ----------------------------------------------


// --- Coffe Timer 
document.querySelector("#button1").addEventListener("click", function () {
    
    let resultDivDom = document.querySelector("#resultdiv");

    let createP = document.createElement("p");


    

    createP.innerHTML =`
    <i class="fa-solid fa-mug-saucer"></i> Son Kahve Alınma Saati = ${new Date().toLocaleTimeString()} 
    <i class="fa-solid fa-mug-saucer"></i>
    `;


    resultDivDom.prepend(createP)

    
    
    createP.addEventListener("click", function () {
        createP.style.textDecoration = "line-through"
    });
    
    createP.addEventListener("dblclick", function () {
        createP.remove()
    });
    

    
    
});

// ----------------------------------------------