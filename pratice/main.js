
const $close = document.getElementById('btn-close')
const $sect_modal = document.getElementById('sect_modal')
const modalName = 'popup';
 
function closeModal(bool){$sect_modal.classList.toggle('off',bool);}
 
function on_close_modal() {
    //check input
    const $ipt = document.getElementById('ipt-24');
    const is_checked = $ipt.checked;
    if (is_checked) {
        setCookie(modalName, "done", 1);
        console.log('checkcheck');
    }
 
    //close
    closeModal(true);
}//on_close_modal
 
/* 쿠키 */
function setCookie(name, value, expiredays) {
    let todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
 
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}//setCookie
 
function getCookie() {
    const cookieData = document.cookie;
    console.log(cookieData);
    if (cookieData.indexOf(`${modalName}=done`) < 0) {
        closeModal(false);
    }
    else {
        closeModal(true);
    }
}//getCookie
 
function deleteCookie(name){
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}//deleteCookie
 
/* 💥 실행 */
getCookie();
$close.addEventListener('click', on_close_modal);


