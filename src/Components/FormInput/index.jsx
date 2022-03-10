import "./formInput.css"


const FormInput = (props) => {
    const {label, onChange, id, ...inputProps} = props;
    return (
        <div className="py-1">
            <label className="my-2 text-gray-200">{label}</label>
            <input className="w-full pt-1 rounded bg-gray-700 p-1 text-gray-200 border-0 outline-0" {...inputProps} onChange={onChange}/>
        </div>
    )
}  




        // <div className="py-1">
        //     <label className="py-0.5 text-gray-200">label</label>
        //     <input className="w-full pt-1" 
        //         placeholder={props.placeholder} 
        //         onChange={(e) => props.setUsername(e.target.value)}/>
        // </div>



export default FormInput;