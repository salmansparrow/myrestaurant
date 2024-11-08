import multer from "multer";

// Configure multer to use memory storage with a file size limit
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit to 5MB
});

// Middleware to integrate multer with Next.js API route
export const multerMiddleware = upload.single("file");

// Middleware wrapper for Next.js
export function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        console.error("Multer error:", result.message);
        return reject(result);
      }
      return resolve(result);
    });
  });
}
