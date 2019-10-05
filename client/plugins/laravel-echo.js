import LaravelEcho from "laravel-echo"

export default ({ app, store, redirect }) => {
    const token = store.getters['auth/token']

    window.Pusher = require('pusher-js');

    window.Echo = new LaravelEcho({
        authEndpoint: `${process.env.apiUrl}/broadcasting/auth`,
        broadcaster: 'pusher',
        key: process.env.PUSHER_APP_KEY,
        cluster: process.env.PUSHER_APP_CLUSTER,
        auth: {
            headers: {
                Authorization: `Bearer ${token}`
            },
        },
    });
}