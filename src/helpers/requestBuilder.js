class requestBuilder {
    constructor(url, method, operation, data) {
        console.log("url", url, "method", method, "operation", operation, "data", data);
        this.url = url;
        this.method = method;
        this.operation = operation;
        this.data = data || {};
    }
    sendRequest() {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open(this.method, this.url);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

            xhr.onload = () => {
                if (xhr.status === 200) {
                    // let data = JSON.parse(xhr.response);
                    console.log("SUCESS xhr", xhr);
                    // console.log("data", data);
                    resolve(this.response);
                } else {
                    console.log("ERROR xhr", xhr);
                    let error = new Error(xhr.statusText);
                    error.code = xhr.status;
                    reject(error);
                }
            };
            xhr.onerror = () => {
                reject(new Error("Network Error"));
            };
            xhr.send("data=" + JSON.stringify(this.data));
        });
    }
}

export default requestBuilder;
