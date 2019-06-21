import React from 'react'
import ReactDOMServer from 'react-dom/server';
import App from './shared'
import Bundler from 'parcel'

function renderServer(){
    let session = {
        url: '/hello'
    }
    let database = {
        count: 0
    }
    let updateDatabase = update => {
        console.log('updating database', update)
    }

    let callbacks = [];
    function C(fn){
        callbacks.push(fn)
        return function(){
            fn(...arguments)
        }
    }

    let html = ReactDOMServer.renderToStaticMarkup(<App 
        C={C}
        session={session} 
        database={database} 
        updateDatabase={updateDatabase} />)

    console.log(callbacks, html)
}


renderServer()

const bundler = new Bundler(['./client.js'], {
    watch: false
});


bundler.bundle().then(data => {
    console.log(data)
})