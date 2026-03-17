const cards = document.getElementById("cards")


function cardsShow(dataWorker) {
    let dataCard = dataWorker.map(function (item) {
        return `
            <div class="hover:shadow-lg transition-shadow hover:bg-amber-300 hover:ease-in-out duration-300 gap-6 relative mt-6 bg-amber-200 w-75 h-100 rounded-2xl flex flex-col justify-center items-center">
                <img class="rounded-full absolute top-[-40px]" src="${item.photo}" alt="user">
                <div class="flex flex-col justify-end items-center h-[50%]">
                    <h2 class="text-2xl font-bold">${item.name}</h2>
                    <h4 class="font-semibold">${item.role}</h4>
                </div>

                <div class="flex h-[50%] bg-amber-50 pb-4 px-3 rounded-2xl gap-2 mb-4.5 flex-col items-center justify-end">
                    <p class="text-center text-[17px] ">Experience: ${item.experience} ${item.experienceType == "year" ? "il" : "ay"}</p>
                    <p class="text-[14px]">Department: ${item.department}</p>
                    <p class="text-[14px]">Salary: ${item.salary}</p>
                    <p class="text-[14px]">Birth year: ${item.birthYear}</p>
                    <p class="text-[14px]">Age: ${item.age}</p>
                </div>
            </div>  
        `

    })

    cards.innerHTML = dataCard.join(" ")
}
cardsShow(users)

let searchYear = document.getElementById("searchYear")
let inp = document.getElementById("inp")


inp.oninput = function () {
    let value = inp.value.toLowerCase()
    let filterData = users.filter(function (item) {
        if (item.name.toLowerCase().includes(value)) {
            return item
        }

    })
    cardsShow(filterData)

}

let empty = ""

for (let i = 1955; i < 2027; i++) {
    empty += `<option value="${i}">${i}</option>`
}

searchYear.innerHTML += empty

searchYear.onchange = function () {
    let value = searchYear.value
    let filterYear = users.filter(function (item) {
        if (item.birthYear == value) {
            return item
        }
    })
    cardsShow(filterYear)
}