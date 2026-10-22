const browserVersion ="Chrome";
function getBrowserVersion(){
if(browserVersion==='Chrome'){
    let browserVersion ="firefox";
    console.log('inside block',browserVersion);
}
console.log('outside block', browserVersion);
}
getBrowserVersion()
