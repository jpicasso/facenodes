CREATE TABLE groups (
    id serial primary key,
    name text not null
);

CREATE TABLE user_groups (
    id serial primary key,
    user_id integer not null,
    group_id integer not null,
    UNIQUE(user_id, group_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (group_id) REFERENCES groups(id)
);
