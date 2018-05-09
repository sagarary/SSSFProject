const showModal= (modal) =>{
    $(modal).modal('show');
}

const hideModel = (modal,action,detail) => {
    $(modal).modal('hide');
    
    $.alert({
        title:action,
        content: detail
    });
}
const showAlert = (action,detail) =>{
    alert(action)
}
