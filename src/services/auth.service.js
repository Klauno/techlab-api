export const loginService = async (
    username,
    password
) => {

    const adminUser = {
        username: 'admin',
        password: '123456'
    };

    if (
        username === adminUser.username &&
        password === adminUser.password
    ) {

        return true;
    }

    return false;
};