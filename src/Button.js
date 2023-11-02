
const Button = ({buttonText,reqType,setReqType}) => {
  return (
    <button
        className = {buttonText===reqType? "select":null}
        onClick = {() => setReqType(buttonText)
        }
    
    >
        {buttonText}
    </button>
  )
}

export default Button