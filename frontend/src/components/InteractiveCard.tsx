'use client'
export default function InteractiveCard({children} : {children: React.ReactNode}) {
    function onCardClicked(){
        alert("you clicked on a card")
    }
    function onMouseAction(event: React.SyntheticEvent) {
        if(event.type == 'mouseover'){
            event.currentTarget.classList.remove('shadow-lg')
            event.currentTarget.classList.remove('bg-white')
            event.currentTarget.classList.add('shadow-2xl')
            event.currentTarget.classList.add('bg-neutral-200')
        }else{
            event.currentTarget.classList.remove('shadow-2xl')
            event.currentTarget.classList.remove('bg-neutral-200')
            event.currentTarget.classList.add('shadow-lg')
            event.currentTarget.classList.add('bg-white')
        }
    }

    return(
        <div className='shadow-lg rounded-lg bg-white'
        onMouseOver={(e)=>onMouseAction(e)} onMouseOut={(e)=>onMouseAction(e)}>
            {children}
        </div>
    );
}