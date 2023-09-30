import React, { useState, useEffect } from 'react';
function ExampleComponent() {
    const [count, setCount] = useState(0);
     useEffect(() => {
    if (count > 10) {
            document.getElementById('red1').classList.add('visible')
        }
        else {
            document.getElementById('red1').classList.remove('visible')
        }
    }, [count]);

    return (
        <div>
            <p id='red6'> Your Current Count is : {count}</p>
             <p id="red2" >Error : Cannot Go Below 0</p>
            <button id='red5' onClick={() => {
                setCount(count + 1)
                document.getElementById('red2').classList.remove('vis')
            }}>Increament</button>
            <button  id='red3'onClick={() => {
                if (count <= 0) {
                    document.getElementById('red2').classList.add('vis')
                }
                else { setCount(count - 1) }
            }}>Decreament</button>
            <button id="red1" onClick={() => {
                setCount(0)
            }}>
                Go Back To 0 </button>
        </div>
    );
}
export default ExampleComponent;







