export const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e) => {
        const {target:{value}} = e;
        let isValid = true;
        if(typeof validator === "function") {
            isValid = validator(value);
            if(isValid) {
                setValue(value);
            }
        }
    };
    return { props: { value, onChange }, utils: { setValue } };
}