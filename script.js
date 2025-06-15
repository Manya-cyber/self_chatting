document.getElementById("btn").addEventListener("click",function(){
        const display= document.createElement("div")
        const wrote = document.getElementById("sender");
        if(wrote.value=="")return;
        display.classList.add("message" ,"right")
        display.innerHTML = ` <div class="bubble sent">${wrote.value}</div>
                                 <img src="https://i.pravatar.cc/30?img=3" class="bubble-pic" />`
        
        document.querySelector(".chat-box").appendChild(display);
        wrote.value=""

                const chatBox = document.querySelector(".chat-box");
    chatBox.scrollTop = chatBox.scrollHeight;
        

    })
   document.getElementById("btn2").addEventListener("click",function(){
     const text = document.getElementById("reciever");
     const show = document.createElement("div")
     if(text.value=="")return;
     show.classList.add("message","left")
     show.innerHTML = `<img src="https://wallpapers.com/images/hd/cute-profile-picture-19mnx03g9yap3dhy.jpg" class="bubble-pic" /><div class="bubble received">${text.value}</div>`;
     document.querySelector(".chat-box").appendChild(show)
     text.value = ""
     const chatBox = document.querySelector(".chat-box");
    chatBox.scrollTop = chatBox.scrollHeight;
   })