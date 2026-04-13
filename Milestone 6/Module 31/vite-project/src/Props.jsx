const styleDiv = {

    'margin' : '10px',
    'padding' : '10px',
    'background-color' : 'blue',
}

export default function Student ({name, isPass}){

    if(isPass === true){
        return (
        <div style={styleDiv} >
            <p>Name : {name}</p>
            <p>IsPassed : Passed</p>
            <br />
        </div>
        )
    }
    else{
        return(
            <div style={styleDiv}>
                <p>Name : {name}</p>
                <p>IsPassed : Not Passed</p>
                <br />
            </div>
        )
    }
}