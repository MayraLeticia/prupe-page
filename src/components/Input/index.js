import "./style.moduole.scss";


const Input = ({ icon, type, placeholder, value, onChange, label }) => {
    return (
        <div className={`input-container`}>
            <label>{label}</label>
            <div className={`placehoder-box`}>
                <i className={`fa ${icon} icon`}></i>
                <input
                    type={type}
                    className={`input`} 
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange} 
                />
            </div>
        </div>
    );
}


export default Input;