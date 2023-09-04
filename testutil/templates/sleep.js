const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

async function hello(r) {
    await sleep(3000);
    r.return(200, "Hello world!");
}

export default {hello};
