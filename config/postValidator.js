const { body } = require("express-validator");

const validateSignup = [
    body("email").isEmail().withMessage("must be a valid email")
        .custom(async (email) => {
            const { rows } = await db.query("SELECT * FROM users WHERE email = $1", [email]);
            if (rows.length > 0) {
                throw new Error("email is already in use");
            }
        }),

    body("passport").isLength({ min: 6 }).withMessage("passport must be stronng")
];


const postValidator = [
    body("title").trim().isEmpty('Title is required')
    .isLength({min:4, max:100})
    .withMessage("Title must be 4 to 100 text long"),
    body("description").trim().isEmpty().withMessage("Must not be empty")
]



module.exports = {
    postValidator,
    validateSignup
}