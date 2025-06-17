import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
  verifyToken,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

/**
* @swagger
*  /api/register:
*    post:
*      summary: Registrar un nuevo usuario
*      requestBody:
*        required: true
*        content:
*          application/json:
*            schema:
*              type: object
*              properties:
*                username:
*                  type: string
*                email:
*                  type: string
*                password:
*                  type: string
*      responses:
*        201:
*          description: Usuario registrado exitosamente
*/
router.post("/register", validateSchema(registerSchema), register);

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Iniciar sesión
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sesión iniciada correctamente
 */
router.post("/login", validateSchema(loginSchema), login);

/**
 * @swagger
 * /api/logout:
 *   post:
 *     summary: Cerrar sesión del usuario
 *     responses:
 *       200:
 *         description: Sesión cerrada
 */
router.post("/logout", logout);

/**
 * @swagger
 * /api/profile:
 *   get:
 *     summary: Obtener perfil del usuario
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Perfil obtenido
 */
router.get("/profile", authRequired, profile);

/**
 * @swagger
 * /api/verify:
 *   get:
 *     summary: Verificar token
 *     responses:
 *       200:
 *         description: Token válido
 */
router.get("/verify", verifyToken);

export default router;
