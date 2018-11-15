import guid from 'guid';

const listeners = {};

export const register = (cb) => {
    const id = guid.raw();
    listeners[id] = cb;
    return id;
}

export const dispatch = (payload) => {
    console.info("Dispatching...",  payload);
    for(let id in listeners){
        listeners[id](payload);
    }
}