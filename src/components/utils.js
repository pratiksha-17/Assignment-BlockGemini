const _ = require('lodash')

function onsubmitValidation(value, validateFields, setError) {
	const err = {}
		Object.keys(validateFields).forEach((validate) => {
	    if (!_.isEmpty(value)) {
			if (validateFields[validate].required) {
				if (
					(typeof value[validate] !== 'boolean' &&
						!value[validate] &&
						validateFields[validate].required) ||
					value[validate] === '' || !value[validate].length
				) {
					const { errorMessage } = validateFields[validate]
					err[validate] = errorMessage
					setError({ ...err })
					return err
				}
			}
			return err
        }else if(validateFields[validate].required){
            const { errorMessage } = validateFields[validate]
                    err[validate] = errorMessage
                    setError({ ...err })
        }
		})
	
	return err
}

export {onsubmitValidation}