var db = connect("mongodb://localhost/coolgames");
db.createUser(
    {
        user: "User1483712379",
        pwd: "Pass1894716225",
        roles: [{ role: "userAdminAnyDatabase", db: "admin" }]
    }
);
