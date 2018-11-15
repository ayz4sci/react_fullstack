import $ from 'jquery';

export const get = (url) => {
    return new Promise( (success, error) => {
        $.ajax({
            url: url,
            dataType: "json",
            success: success,
            error:error
        })
    })
}