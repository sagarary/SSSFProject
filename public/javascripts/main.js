const showModal= (modal) =>{
    $(modal).modal('show');
}

const hideModel = (modal,action) => {
    console.log(document.querySelector(modal));
    $(modal).modal('hide');
    
    alert(action)
}
const showAlert = (action,detail) =>{
    alert(action)
}
