export const isRight = ({ rights = [], userRights = []} ) => {
    const even = (element) => userRights.includes(element);
    return rights.some(even);
};