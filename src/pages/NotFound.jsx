    import React from 'react'
    import '../css/home.css';

    function NotFound() {
    
        setInterval(() => {
            window.location.href="/" 
            }, 5000);
    return (
        <div class="nfound">
            <h1 class="st">Oops! Something went wrong...</h1>
            <p>This page has deleted or never been created. You'll be redirected to home page at 5 seconds.</p>

        </div>
    )
    }

    export default NotFound