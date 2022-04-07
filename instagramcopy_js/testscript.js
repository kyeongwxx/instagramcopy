function numbering() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
}
function red() {
    let button = document.querySelector("input")
    button.style.backgroundColor = "red"
}

// let button = document.querySelector("input")
// button.addEventListener("click",
//     function(e){
//         alert("clicked!")
// })

// let button = document.querySelector("input")
// button.addEventListener("input",
//     function (e) {
//         console.log(e.target.value)
//     })

// document 객체를 대상으로 이벤트 리스너를 추가합니다.
// 이벤트 종류는 "DOMContentLoaded" 입니다.
document.addEventListener("DOMContentLoaded",
    // 이벤트 핸들러입니다.
    // HTML 코드가 로딩된 다음 비동기적으로 수행할 작업들입니다.
    function (e) {
        // input 태그를 찾아 button 변수에 저장합니다.
        let button = document.querySelector("input")
        // button 변수에 이벤트 리스너를 추가합니다.
        // 이벤트 종류는 "input" 입니다.
        button.addEventListener("input",
            function (e) {
                // 콘솔에 입력창의 값을 출력합니다.
                console.log(e.target.value)
            })
    })

function hi() {
    alert("hi")
}
// document 객체를 대상으로 이벤트 리스너를 추가합니다.
// 이벤트 종류는 "DOMContentLoaded" 입니다.
document.addEventListener("DOMContentLoaded",
    // 이벤트 핸들러입니다.
    // HTML 코드가 로딩된 다음 비동기적으로 수행할 작                                                                                                        업들입니다.
    function (e) {
        //     // id가 keydown인 태그를 찾아 keydown 변수에 저장합니다.
        //     let keydown = document.querySelector("#keydown")
        //     // keydown 변수에 이벤트 리스너를 추가합니다.
        //     // 이벤트 종류는 "keydown" 입니다.
        //     keydown.addEventListener("keydown",
        //     function(e){
        //         // 콘솔에 입력창의 값을 출력합니다.
        //         console.log(e.key)
        //         if(e.key==="q"){
        //             alert("this is Q!")
        //         }
        //     })

        let change = document.querySelector("#change")
        change.addEventListener("change",
            function (e) {
                console.log(e.target.value)
            })

        let input = document.querySelector("#input")
        input.addEventListener("input",
            function (e) {
                console.log(e.target.value)
            })
    })

function red(e){
    e.target.style.backgroundColor = "red"
    console.log(e)
}
function blue(e){
    e.target.style.backgroundColor = "blue"
}
// 요소의 속성 추출하기
document.addEventListener("DOMContentLoaded",
function(e){
    let input = document.querySelector("#test01")
    input.addEventListener("click",
    function(e){
        console.log(e.target.getAttribute("type"))
    })
})
// 요소의 속성 제어하기
document.addEventListener("DOMContentLoaded",
function(e){
    let input = document.querySelector("#test02")
    input.addEventListener("click",
    function(e){
        if(e.target.getAttribute("type")==="button"){
            e.target.setAttribute("type","text")
        }
    })
    input.addEventListener("change",
    function(e){
            e.target.setAttribute("type","button")
    })
})
// 다른 요소의 속성 제어하기
document.addEventListener("DOMContentLoaded",
function(e){
    let button = document.querySelector("#test04") 

    let img1 = document.querySelector("#test03")
    let img2 = "instagramcopy_image/hl 1.jpg "
    let img3 = "instagramcopy_image/hl 2.jpg "
    let img4 = "instagramcopy_image/profile.jpg "

    button.addEventListener("click",            // button 요소에 이벤트 리스너로 click 이벤트 핸들러 추가
    function(e){
        let src = img1.getAttribute("src")      
        if(src === img2){                       // button 이 click되면 <img> 태그의 속성이 변경되도록
            img1.setAttribute("src", img3)      // setAttribute() 함수 적용
        } else if(src === img3){
            img1.setAttribute("src", img4)
        } else {
            img1.setAttribute("src", img2)
        }
    })
})
//문서의 글자 조적하기(1) - 태그의 글자 추출하기
document.addEventListener("DOMContentLoaded",
function(e){
    let button = document.querySelector("#test06")
    let p = document.querySelector("#test05")

    button.addEventListener("click",
    function(e){
        console.log(p.textContent)
        p.textContent = "text 조작"      //문서의 글자 조적하기(2) - 태그의 글자 조작하기
    })
})

// 활용
document.addEventListener("DOMContentLoaded",
function(e){
    let nameEditButton = document.querySelector("#nameEditButton")
    let editName = document.querySelector("#editNameField")
    let okButton = document.querySelector("#okButton")
    let newName = document.querySelector("#newName")
    let nameHere = document.querySelector("#nameHere")

    nameEditButton.addEventListener("click",
    function(e){
        editName.style.display = "block"
        nameEditButton.style.display = "none"
    })

    okButton.addEventListener("click",
    function(e){
        nameHere.textContent = newName.value
        editName.style.display = "none"
        nameEditButton.style.display = "inline"
    })
})

