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


let empty = ""

function infShow(infUsers, infFindArr) {
    let ArrFilter = []

    infFindArr.map(function (item) {
        if (!ArrFilter.includes(item)) {
            ArrFilter.push(item)
        }
    })

    empty = ""

    for (let i = 0; i < ArrFilter.length; i++) {
        empty += `<option value="${ArrFilter[i]}" >${ArrFilter[i]}</option>`
    }
    infUsers.innerHTML += empty

    infUsers.onchange = function () {
        let value = infUsers.value

        let filterInf = users.filter(function (item) {
            if (+value === item.birthYear || value === item.role || value === item.department || +value === item.salary) {
                return item
            }
        })

        cardsShow(filterInf)
    }

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


// year
let birthArr = []
let birth = users.map(function (item) {
    return item.birthYear
})

infShow(searchYear, birth)

// role

let searchRole = document.getElementById("searchRole")

let role = users.map(function (item) {
    return item.role
})

infShow(searchRole, role)

// departament

let searchDep = document.getElementById("searchDep")

let depart = users.map(function (item) {
    return item.department
})

infShow(searchDep, depart)

// salary

let searchSalary = document.getElementById("searchSalary")

let salary = users.map(function (item) {
    return item.salary
})

infShow(searchSalary, salary)

// filter data

let filterDataUsers = document.getElementById("filterDataUsers")

filterDataUsers.onchange = function () {
    let x = filterDataUsers.value
    if (x == "az") {

        sortedArrUsers = users.sort(function (a, b) {
            return a.name.localeCompare(b.name)
        })

        cardsShow(sortedArrUsers)
    }

    else if (x == "za") {

        sortedArrUsers = users.sort(function (a, b) {
            return a.name.localeCompare(b.name)
        })

        cardsShow(sortedArrUsers.reverse())
    }
    else if (x == "azm") {
        let sortedSalary = users.sort(function (a, b) {
            return a.salary - b.salary;
        });
        cardsShow(sortedSalary);
    }
    else if (x == "cam") {
        let sortedSalary = users.sort(function (a, b) {
            return a.salary - b.salary;
        });
        cardsShow(sortedSalary.reverse());
    }
    else if (x == "azy") {
        let sortedage = users.sort(function (a, b) {
            return a.age - b.age;
        });
        cardsShow(sortedage);
    }
    else if (x == "cay") {
        let sortedage = users.sort(function (a, b) {
            return a.age - b.age;
        });
        cardsShow(sortedage.reverse());
    }
}