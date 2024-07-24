
const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let height = parseInt(document.querySelector("#height").value)
    let weight = parseInt(document.querySelector("#weight").value)

    let results = document.querySelector("#results")

    if (height<0 || isNaN(height) || height === "" ||weight<0 || isNaN(weight) || weight === ""){
        results.innerHTML = `Please Provide valid Input`
    }
    else{
        results.innerHTML = ((weight/(height*height))*10000).toFixed(2)
        document.querySelector("#height").value = ""
        document.querySelector("#weight").value = ""
    }
})