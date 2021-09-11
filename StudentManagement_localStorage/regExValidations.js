// 조건 1. 최소 1개의 숫자 혹은 특수 문자를 포함해야 함
// => "/^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/"
// 조건 2. 8~10자 영문, 숫자 조합
// => "/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/"
// 조건 3. 특수문자/문자/숫자 포함 형태의 8~15자리 이내의 암호 정규식
// => "/^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/"
function pwValid(str){
    let result = "";
    const regEx = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    
    result = regEx.test(str);
    return result;
}

// 특수문자X, 30글자까지
function idValid(str){
    let result = "";
    const regEx = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{1,30}$/;
    
    result = regEx.test(str);
    return result;
}

// 한글, 영어 20글자까지
function nameValid(){
    let result = "";
    const regEx = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]{1,20}$/;
    
    result = regEx.test(str);
    return result;
}

function emailValid(str){
    let result = "";
    const regEx = /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;

    result = regEx.test(str);
    return result;
}

function mobilePhoneValid(str){
    let result = "";
    const regEx = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;

    result = regEx.test(str);
    return result;
}

function urlValid(str){
    let result = "";
    const regEx = /^(file|gopher|news|nntp|telnet|https?|ftps?|sftp):\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}.*$/;

    result = regEx.test(str);
    return result;
}

function HtmlTagValid(str){
    let result = "";
    const regEx = /\<(\/?[^\>]+)\>/;

    result = regEx.test(str);
    return result;
}

function phoneValid(str){
    let result = "";
    const regEx = /(\d{3}).*(\d{3}).*(\d{4})/;

    result = regEx.test(str);
    return result;
}

function dateValid(str){
    let result = "";
    const regEx = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;

    result = regEx.test(str);
    return result;
}

function pictureValid(str){
    let result = "";
    const regEx = /([^\s]+(?=\.(jpg|gif|png))\.\2)/;

    result = regEx.test(str);
    return result;
}

function hexcolorValid(str){
    let result = "";
    const regEx = /#?([A-Fa-f0-9]){3}(([A-Fa-f0-9]){3})?/;

    result = regEx.test(str);
    return result;
}

// 숫자로만 이루어져있는지(자연수)
function numberValid(str){
    let result = "";
    const regEx = /^[0-9]{1}$/;

    result = regEx.test(str);
    return result;
}

// 한글영어숫자만(특수문자제외)
function koEnNumValid(str){
    let result = "";
    const regEx = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;

    result = regEx.test(str);
    return result;
}

// 한글영어만(특수문자, 숫자제외)
function koEnValid(str){
    let result = "";
    const regEx = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/;

    result = regEx.test(str);
    return result;
}

// 한글만
function koValid(str){
    let result = "";
    const regEx = /^[ㄱ-ㅎ|가-힣|]+$/;

    result = regEx.test(str);
    return result;
}

// 글자수제한
function limitCntValid(str,num){
    let result = "";
    const regEx = new RegExp('^*{1,'+num+'}$');

    result = regEx.test(str);
    return result;
}
