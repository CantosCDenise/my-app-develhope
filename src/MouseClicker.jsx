export function MouseClicker(){
    function handleButtonClick(event){
        console.log(event.target.name)
    }
    function handleImageClick(event){
        console.log(event.target.src)
    }
    return (
        <button name="one" onClick={handleButtonClick}>
            <img onClick={handleImageClick} src="https://i.pinimg.com/564x/d8/84/b0/d884b0c43aa1cc1d4f1549f7b0abf461.jpg" width={50} height={50} />
            Click me!
            </button>
    )
}