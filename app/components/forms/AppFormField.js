import React from 'react';
import { useFormikContext } from 'formik';
import ErrorMessage from './ErrorMessage';
import AppTextInput from '../AppTextInput';

function AppFormField({name, width, ...otherProps}) {
    const {handleChange, setFieldTouched, visible, errors, touched}=useFormikContext();
    return (
        <>
            <AppTextInput
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                width={width}
                {...otherProps}
            
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormField;