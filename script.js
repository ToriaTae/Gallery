const modalButton = document.querySelector('.footer-button');
const modalCross = document.querySelector('.modal_window-cross');
const modal = document.querySelector('.form_entrance');
if (modalButton) {
    modalButton.addEventListener("click", function (e) {
        modal.classList.toggle('_active');
    });
}
if (modalCross) {
    modalCross.addEventListener("click", function (e) {
        modal.classList.toggle('_active');
    });
} 

const orderButton = document.querySelector('.form-button');
const orderCross = document.querySelector('.type_window-cross');
const orderform = document.querySelector('.form_type');
const orderBack = document.querySelector('.arrow_type')
if (orderButton) {
    orderButton.addEventListener("click", function(e) {
        orderform.classList.toggle('_active');
    });
}
if (orderCross) {
    orderCross.addEventListener("click", function(e) {
        orderform.classList.toggle('_active');
        modal.classList.toggle('_active');
    });
}
if (orderBack) {
    orderBack.addEventListener("click", function(e) {
        orderform.classList.toggle('_active');
    });
}

const doneButton = document.querySelector('.order-button');
const doneCross = document.querySelector('.done_window-cross');
const doneform = document.querySelector('.form_order');
const done = document.querySelector('.done_button')
if (doneButton) {
    doneButton.addEventListener("click", function(e) {
        doneform.classList.toggle('_active');
    });
}
if (doneCross) {
    doneCross.addEventListener("click", function(e) {
        doneform.classList.toggle('_active');
        orderform.classList.toggle('_active');
        modal.classList.toggle('_active');
    });
}
if (done) {
    done.addEventListener("click",function(e) {
        doneform.classList.toggle('_active');
        orderform.classList.toggle('_active');
        modal.classList.toggle('_active');
    });
}