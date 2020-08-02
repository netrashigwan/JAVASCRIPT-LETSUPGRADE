let quotes=[
    'Live as if you were to die tomorrow',
'That which does not kill us makes us stronger.',
'Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.',
    'The secret to life is to love who you are.',
    'Look for opportunities in every change in your life.',
    'Persist while others are quitting.',
    ];

    
    function displayQuote(){
        let index=Math.floor(Math.random()*quotes.length);
        
        //display the quote of that index
        let div=document.querySelector('#quote');
        let quote=`<div class="card">
        </div>

        div.innerHTML=quote;
        }