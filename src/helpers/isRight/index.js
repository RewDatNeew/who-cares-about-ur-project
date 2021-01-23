export const isRight = ({ rights = [], userRights = []} ) => {
    console.log({rights, userRights})
    const even = (element) => userRights.includes(element);
    return rights.some(even);
};