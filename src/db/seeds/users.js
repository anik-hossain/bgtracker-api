exports.seed = (knex) => {
    return knex('users')
        .del()
        .then(() => {
            return knex('users').insert([
                {
                    id: 1,
                    email: 'anik@gmail.com',
                    username: 'anik',
                    password:
                        '$2a$12$28Shq8q./DPzjGOOORykj.0h5dPphYwSwKPVQx3depSqPyexLrj70',
                },
            ]);
        });
};
