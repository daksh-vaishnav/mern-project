// middlewares/validate.js
import { ZodError } from "zod";

export const validate = (schema) => (req, res, next) => {
    try {
        req.body = schema.parse(req.body); // Validate & assign parsed data
        next(); // Proceed to controller
    } catch (err) {
        console.log("==============  ZOD  =============");
        console.log(JSON.stringify(err));
        console.log("==============  ZOD  =============");

        if (err instanceof ZodError) {
            const issues = err.flatten();
            return res.status(400).json({
                error: "Validation failed",
                issues,
            });
        }

        next(err); // Pass other errors to error-handling middleware
    }
};
