const API = "http://localhost:9000"


export const GetFunc = async (path) => {
    //  console.log(path);
    return await fetch(API + path).then(response => response.json())
}

export const PostFunc = (path, data) => {

    return fetch(API + path, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
}

export const DeleteDataFunc = (path) => {

    return fetch(API + path, {
        method: "DELETE"
    }).then(response => response.json())
}


export const PathcFunc = (path) => {
    return fetch( API + path, {
        method: "PATCH",
        // body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    }).then(response => response.json())
}