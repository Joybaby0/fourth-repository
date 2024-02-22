
// let questionBtn = document.querySelectorAll(".question-btn")

// questionBtn.forEach(function(btn){
//     btn.addEventListener("click", function(e){
//         let quest = (e.currentTarget.parentElement.parentElement)
//         // console.log(quest)
//         quest.classList.toggle("show-text")
//     })
// })

let questions = document.querySelectorAll(".question")

questions.forEach(function(quest){
    let btn = quest.querySelector(".question-btn")

    btn.addEventListener("click", function(){

        questions.forEach(function(item){
            if(item !== quest){
                item.classList.remove("show-text")
            }
        })
        quest.classList.toggle("show-text")
    })
})