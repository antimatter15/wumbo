import React from 'react'
import ReactDOM from 'react-dom';
import App from './shared'

function renderClient(){
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
        let index = callbacks.length;
        callbacks.push(fn)
        return function(e){
            console.log('CALLED', e, index)
            fn(e)
        }
    }

    ReactDOM.render(<App 
        C={C}
        session={session} 
        database={database} 
        updateDatabase={updateDatabase} />, 
        document.getElementById('root'))
    // console.log(callbacks, html)
}


renderClient();