// Patients list dropdown handler
if (document.querySelector("#more-patients-btn")) {
    const moreBtn = document.querySelector("#more-patients-btn")
    const patientList = document.querySelector("#patients-list")

    moreBtn.addEventListener("click", () => {
        if (patientList) {
            patientList.classList.toggle("collapser")
        }
    })
}

// window.btoa()