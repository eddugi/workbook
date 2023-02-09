
const $close = document.getElementById('btn-close2')
const $sect_modal2 = document.getElementById('sect_modal2')
const modalName = 'popup2';
 
function closeModal(bool){$sect_modal2.classList.toggle('off',bool);}
 
function on_close_modal() {
    //check input
    const $ipt = document.getElementById('ipt-242');
    const is_checked = $ipt.checked;
    if (is_checked) {
        setCookie(modalName, "done", 0);
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


