const Button =({onclick,test,customClass})=>{
    return (
        <button className={customClass} onClick={onclick}>
        {test}
        </button>
    )
}
export default Button