export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: "NGN" // Use "NGN" for Naira
    }).format(price);
};
