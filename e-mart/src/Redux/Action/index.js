// For add to cart

export const addCart = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}

// For delete form cart

export const delCart = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}