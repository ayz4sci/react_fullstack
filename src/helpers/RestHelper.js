import $ from 'jquery';

export const get = (url) => {
    return new Promise( (success, error) => {
        $.ajax({
            url: url,
            dataType: "json",
            success: success,
            error: error
        })
    })
}

export const post = (url, data) => {
    return new Promise( (success, error) => {
        $.ajax({
            url: url,
            type: "POST",
            data: data,
            success: success,
            error: error
        })
    })
}

export const patch = (url, data) => {
    return new Promise( (success, error) => {
        $.ajax({
            url: url,
            type: "PATCH",
            data: data,
            success: success,
            error: error
        })
    })
}

export const del = (url) => {
    return new Promise( (success, error) => {
        $.ajax({
            url: url,
            type: "DELETE",
            success: success,
            error: error
        })
    })
}